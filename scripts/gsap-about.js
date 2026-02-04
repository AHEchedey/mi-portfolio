document.addEventListener("DOMContentLoaded", () => {
    // Ensure GSAP and ScrollTrigger are loaded
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        console.warn("GSAP or ScrollTrigger not loaded");
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector(".pSection");
    const content = document.querySelector(".pSection .pContent");
    const image = document.querySelector(".pSection .pImage");

    if (section && content && image) {

        // Parallax for Content (moves up slightly slower)
        gsap.to(content, {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

        // Parallax for Image (moves up faster)
        gsap.to(image, {
            yPercent: -15,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    }
});
