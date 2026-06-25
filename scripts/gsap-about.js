function initAboutSection() {
    // Ensure GSAP and ScrollTrigger are loaded
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        console.warn("GSAP or ScrollTrigger not loaded");
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector('.o-section.-about-me');
    if (!section) return;
    const topNav = document.querySelector('.o-nav');

    // Use the container inside the section
    const content = section.querySelector("[data-about-content]");
    const image = section.querySelector("[data-about-image]");
    const contentItems = section.querySelectorAll("[data-about-content] > *");


    if (section && content && image) {

        // Ensure top nav is visible while "Sobre mí" is in view
        if (topNav) {
            const showTopNav = () => gsap.to(topNav, { autoAlpha: 1, duration: 0.3, overwrite: "auto" });

            ScrollTrigger.create({
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                onEnter: showTopNav,
                onEnterBack: showTopNav,
                onToggle: ({ isActive }) => {
                    if (isActive) showTopNav();
                },
                onRefresh: self => {
                    if (self.isActive) showTopNav();
                }
            });
        }

        // Text reveal animation (re-implemented from inline script)
        if (contentItems.length > 0) {
            gsap.from(contentItems, {
                y: 30,
                opacity: 0,
                stagger: 0.12,
                duration: 0.6,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 75%',
                    toggleActions: 'play reverse play reverse'
                }
            });
        }

    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAboutSection, { once: true });
} else {
    initAboutSection();
}
