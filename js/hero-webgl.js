import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";

const container = document.querySelector(".s-hero_experiment");
if (!container) return;

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});
container.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
camera.position.z = 5.5;

const geometry = new THREE.PlaneGeometry(8, 5, 220, 160);
const uniforms = {
  uTime: { value: 0 },
  uPointer: { value: new THREE.Vector2(0.5, 0.5) },
  uAccent: { value: new THREE.Color("#ff4e4e") },
  uAccentAlt: { value: new THREE.Color("#ffb347") }
};

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uPointer;
  varying vec2 vUv;
  varying float vElevation;

  float wave(vec2 p, float freq, float speed) {
    return sin(p.x * freq + uTime * speed) * cos(p.y * freq * 0.6 + uTime * speed * 0.8);
  }

  void main() {
    vUv = uv;
    vec3 pos = position;

    float base = wave(uv * 3.2, 4.0, 0.35);
    float pointerDist = distance(uv, uPointer);
    float pointerWave = exp(-pointerDist * 6.0) * sin(uTime * 1.5 - pointerDist * 12.0);

    float elevation = base * 0.35 + pointerWave * 0.25;
    pos.z += elevation;
    pos.x += sin(uv.y * 6.0 + uTime * 0.8) * 0.08;
    pos.y += cos(uv.x * 4.0 + uTime * 0.4) * 0.06;

    vElevation = elevation;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uAccent;
  uniform vec3 uAccentAlt;
  uniform vec2 uPointer;
  uniform float uTime;
  varying vec2 vUv;
  varying float vElevation;

  float ring(vec2 uv, vec2 center, float thickness) {
    float dist = distance(uv, center);
    return smoothstep(thickness + 0.01, thickness, dist);
  }

  void main() {
    vec3 base = mix(vec3(0.01, 0.01, 0.05), vec3(0.1, 0.05, 0.08), vUv.y + vElevation * 0.5);

    float gridX = smoothstep(0.02, 0.0, abs(fract(vUv.x * 20.0) - 0.5));
    float gridY = smoothstep(0.02, 0.0, abs(fract(vUv.y * 10.0) - 0.5));
    float grid = (gridX + gridY) * 0.07;

    float pointerGlow = ring(vUv, uPointer, 0.08) * 1.2;
    float pulse = 0.2 + 0.8 * abs(sin(uTime * 0.6));

    vec3 color = base + vec3(grid);
    color += pointerGlow * mix(uAccent, uAccentAlt, vUv.y);
    color += pulse * vElevation * 0.7 * vec3(0.8, 0.2, 0.3);

    gl_FragColor = vec4(color, 0.95);
  }
`;

const material = new THREE.ShaderMaterial({
  uniforms,
  vertexShader,
  fragmentShader,
  transparent: true
});

const mesh = new THREE.Mesh(geometry, material);
mesh.rotation.x = -0.35;
mesh.rotation.y = 0.2;
scene.add(mesh);

let width = container.clientWidth;
let height = container.clientHeight;

const resize = () => {
  width = container.clientWidth;
  height = container.clientHeight;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);
  camera.aspect = width / height || 1;
  camera.updateProjectionMatrix();
};

resize();
window.addEventListener("resize", resize);

let animationFrame = null;
const render = (time) => {
  uniforms.uTime.value = time * 0.001;
  renderer.render(scene, camera);
  animationFrame = requestAnimationFrame(render);
};

animationFrame = requestAnimationFrame(render);

const pointerHandler = (event) => {
  const rect = container.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;
  uniforms.uPointer.value.set(x, 1 - y);
};

window.addEventListener("pointermove", pointerHandler);

window.addEventListener("beforeunload", () => {
  cancelAnimationFrame(animationFrame);
  renderer.dispose();
  geometry.dispose();
  material.dispose();
  window.removeEventListener("pointermove", pointerHandler);
  window.removeEventListener("resize", resize);
});
