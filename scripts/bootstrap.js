const includeNodes = [...document.querySelectorAll("[data-include-html]")];

function renderBootError(message) {
    const main = document.querySelector("main");

    if (!main) {
        return;
    }

    main.innerHTML = `
        <section class="o-section" style="min-height: 60vh; padding: 4rem 2rem;">
            <div class="o-section_inner">
                <h2 class="c-heading -h2">No se pudo montar la página</h2>
                <div class="c-sp1" style="margin-top: 1.5rem;">
                    ${message}
                </div>
            </div>
        </section>
    `;
}

async function includePartial(node) {
    const path = node.getAttribute("data-include-html");
    const response = await fetch(path, { cache: "no-cache" });

    if (!response.ok) {
        throw new Error(`No se pudo cargar el parcial: ${path}`);
    }

    const html = await response.text();
    const fragment = document.createRange().createContextualFragment(html);
    node.replaceWith(fragment);
}

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = () => reject(new Error(`No se pudo cargar el script: ${src}`));
        document.body.appendChild(script);
    });
}

function ensureLegacyInit() {
    if (document.readyState === "complete") {
        window.dispatchEvent(new Event("load"));
    }
}

try {
    if (window.location.protocol === "file:") {
        throw new Error("Esta estructura con parciales requiere servir el proyecto por HTTP. Usa Live Server, GitHub Pages o `python3 -m http.server`.");
    }

    await Promise.all(includeNodes.map(includePartial));
    document.dispatchEvent(new CustomEvent("sections:loaded"));

    await loadScript("scripts/app.js");
    await loadScript("scripts/gsap-about.js");
    ensureLegacyInit();
} catch (error) {
    console.error(error);
    renderBootError(error.message);
}
