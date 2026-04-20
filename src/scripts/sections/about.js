/**
 * Ownership: Sections Team (About)
 * Purpose: Modular About pilot logic with safe legacy coexistence.
 * Note: Conservative behavior, no visual override.
 */
import { createCleanupStack } from "../core/events.js";
import { applyTranslations } from "../core/i18n.js";

function createAboutModule() {
  const state = {
    el: null,
    trigger: null,
    topNavTrigger: null,
    contentTween: null,
    onVisibilityChange: null,
    onMove: null,
    onLeave: null,
    updateBounds: null,
    bounds: null,
    applyContent: null,
    cleanup: createCleanupStack()
  };

  return {
    init(el, deps) {
      if (!el) return;
      if (el.dataset.initialized === "true") return;
      el.dataset.initialized = "true";

      state.el = el;
      el.dataset.aboutModule = "ready";

      const gsap = deps?.animation?.gsap;
      const ScrollTrigger = deps?.animation?.scrollTrigger;
      const topNav = document.querySelector(".o-nav");
      const contentItems = el.querySelectorAll(
        "[data-about-content] .c-eyebrow, [data-about-content] .c-title, [data-about-content] .c-body, [data-about-content] .c-tags, [data-about-content] .c-actions"
      );
      const card = el.querySelector("[data-about-card]");

      if (ScrollTrigger?.create) {
        state.trigger = ScrollTrigger.create({
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => this.onEnter?.(),
          onEnterBack: () => this.onEnter?.(),
          onLeave: () => this.onLeave?.(),
          onLeaveBack: () => this.onLeave?.()
        });
        state.cleanup.add(() => state.trigger?.kill());

        if (topNav && gsap?.to) {
          const showTopNav = () => {
            gsap.to(topNav, { autoAlpha: 1, duration: 0.3, overwrite: "auto" });
          };

          state.topNavTrigger = ScrollTrigger.create({
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            onEnter: showTopNav,
            onEnterBack: showTopNav,
            onToggle: ({ isActive }) => {
              if (isActive) showTopNav();
            },
            onRefresh: (self) => {
              if (self.isActive) showTopNav();
            }
          });
          state.cleanup.add(() => state.topNavTrigger?.kill());
        }
      }

      if (gsap?.from && contentItems.length > 0) {
        state.contentTween = gsap.from(contentItems, {
          y: 30,
          opacity: 0,
          stagger: 0.12,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: ScrollTrigger?.create ? {
            trigger: el,
            start: "top 75%",
            toggleActions: "play reverse play reverse"
          } : undefined
        });
        state.cleanup.add(() => state.contentTween?.kill());
      }

      if (card && gsap?.set && gsap?.to && gsap?.utils?.clamp) {
        gsap.set(card, { transformStyle: "preserve-3d" });

        state.updateBounds = () => {
          state.bounds = card.getBoundingClientRect();
        };
        state.updateBounds();

        state.onMove = (event) => {
          const touch = event.touches?.[0];
          const clientX = event.clientX ?? touch?.clientX ?? 0;
          const clientY = event.clientY ?? touch?.clientY ?? 0;
          const bounds = state.bounds;
          if (!bounds) return;

          const x = clientX - (bounds.left + bounds.width / 2);
          const y = clientY - (bounds.top + bounds.height / 2);
          const rx = gsap.utils.clamp(-12, 12, -(y / (bounds.height / 2)) * 10);
          const ry = gsap.utils.clamp(-12, 12, (x / (bounds.width / 2)) * 10);

          gsap.to(card, { rotationX: rx, rotationY: ry, duration: 0.6, ease: "power3.out" });
        };

        state.onLeave = () => {
          gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.8, ease: "power3.out" });
        };

        window.addEventListener("resize", state.updateBounds);
        el.addEventListener("mousemove", state.onMove);
        el.addEventListener("touchmove", state.onMove, { passive: true });
        el.addEventListener("mouseleave", state.onLeave);
        el.addEventListener("touchend", state.onLeave);

        state.cleanup.add(() => {
          window.removeEventListener("resize", state.updateBounds);
          el.removeEventListener("mousemove", state.onMove);
          el.removeEventListener("touchmove", state.onMove);
          el.removeEventListener("mouseleave", state.onLeave);
          el.removeEventListener("touchend", state.onLeave);
        });
      }

      state.applyContent = () => applyTranslations(el, deps?.i18n);
      state.applyContent();
      state.cleanup.add(deps?.events?.on("i18n:ready", state.applyContent));
      state.cleanup.add(deps?.events?.on("i18n:change", state.applyContent));

      state.onVisibilityChange = () => {
        if (document.hidden) this.onLeave?.();
      };
      document.addEventListener("visibilitychange", state.onVisibilityChange);
      state.cleanup.add(() => {
        if (state.onVisibilityChange) {
          document.removeEventListener("visibilitychange", state.onVisibilityChange);
        }
      });
    },

    destroy() {
      if (!state.el) return;

      state.cleanup.run();

      delete state.el.dataset.initialized;
      delete state.el.dataset.aboutModule;
      state.el = null;
      state.trigger = null;
      state.topNavTrigger = null;
      state.contentTween = null;
      state.onVisibilityChange = null;
      state.onMove = null;
      state.onLeave = null;
      state.updateBounds = null;
      state.bounds = null;
      state.applyContent = null;
    },

    onEnter() {},
    onLeave() {}
  };
}

export default createAboutModule();
