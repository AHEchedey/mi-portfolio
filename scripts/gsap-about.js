document.addEventListener("DOMContentLoaded", () => {
    // Ensure GSAP and ScrollTrigger are loaded
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        console.warn("GSAP or ScrollTrigger not loaded");
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector('.s-portfolio_content[data-index="sobre_mi"]');
    if (!section) return;
    const topNav = document.querySelector('.o-nav');

    // Use the container inside the section
    const container = section.querySelector('.pContainer');
    const content = section.querySelector(".pContent");
    const image = section.querySelector(".pImage");
    const contentItems = section.querySelectorAll('[data-about-content] .c-heading, [data-about-content] .c-sp1');
    const card = section.querySelector('[data-about-card]');


    if (section && content && image) {

        // Ensure top nav is visible while "Sobre mí" is in view
        if (topNav) {
            ScrollTrigger.create({
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                onEnter: () => gsap.to(topNav, { autoAlpha: 1, duration: 0.3, overwrite: "auto" }),
                onEnterBack: () => gsap.to(topNav, { autoAlpha: 1, duration: 0.3, overwrite: "auto" })
            });
        }

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

        // 3D Tilt Effect
        if (card) {
            gsap.set(card, { transformStyle: 'preserve-3d' });

            let bounds = card.getBoundingClientRect();
            function updateBounds() { bounds = card.getBoundingClientRect(); }
            window.addEventListener('resize', updateBounds);

            function onMove(e) {
                const clientX = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX) || 0;
                const clientY = e.clientY || (e.touches && e.touches[0] && e.touches[0].clientY) || 0;
                const x = clientX - (bounds.left + bounds.width / 2);
                const y = clientY - (bounds.top + bounds.height / 2);
                const rx = gsap.utils.clamp(-12, 12, - (y / (bounds.height / 2)) * 10);
                const ry = gsap.utils.clamp(-12, 12, (x / (bounds.width / 2)) * 10);
                gsap.to(card, { rotationX: rx, rotationY: ry, duration: 0.6, ease: 'power3.out' });
            }

            function onLeave() {
                gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.8, ease: 'power3.out' });
            }

            section.addEventListener('mousemove', onMove);
            section.addEventListener('touchmove', onMove, { passive: true });
            section.addEventListener('mouseleave', onLeave);
            section.addEventListener('touchend', onLeave);
        }

    }
});
