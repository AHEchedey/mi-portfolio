document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        console.warn("GSAP or ScrollTrigger not loaded");
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // ✅ Solo la sección Sobre mí
    const section = document.querySelector('#sobre_mi');
    if (!section) return;

    const content = section.querySelector(".pContent");
    const imageWrap = section.querySelector(".pImage");
    const image = section.querySelector(".pImage img");

    if (!content || !imageWrap) return;

    // ✅ Si tu template usa scroller custom, se lo pasamos a ScrollTrigger
    const scrollerEl = document.querySelector('[data-module-scroll="main"]');
    const stBase = scrollerEl ? { scroller: scrollerEl } : {};

    // Parallax del contenido
    gsap.to(content, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
            ...stBase,
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    // Parallax del contenedor de imagen (más rápido)
    gsap.to(imageWrap, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
            ...stBase,
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    // (Opcional) leve zoom a la imagen para que se note más
    if (image) {
        gsap.to(image, {
            scale: 1.08,
            ease: "none",
            scrollTrigger: {
                ...stBase,
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    }
});
