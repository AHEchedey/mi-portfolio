/**
 * Ownership: Sections Team (Hero)
 * Purpose: Modular Hero pilot logic with safe legacy coexistence.
 * Note: Keeps behavior non-disruptive while establishing modular ownership.
 */
import { createCleanupStack } from "../core/events.js";
import { applyTranslations } from "../core/i18n.js";

function createHeroModule() {
  const state = {
    el: null,
    deps: null,
    onVisibilityChange: null,
    timeline: null,
    applyContent: null,
    cleanup: createCleanupStack()
  };

  return {
    init(el, deps) {
      if (!el) return;
      if (el.dataset.initialized === "true") return;
      el.dataset.initialized = "true";

      state.el = el;
      state.deps = deps;
      el.dataset.heroModule = "ready";

      const gsap = deps?.animation?.gsap;
      if (gsap?.timeline) {
        // Non-visual timeline to establish controlled ownership without changing UX.
        state.timeline = gsap.timeline({ paused: true });
        state.cleanup.add(() => state.timeline?.kill());
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
      delete state.el.dataset.heroModule;
      state.el = null;
      state.deps = null;
      state.onVisibilityChange = null;
      state.timeline = null;
      state.applyContent = null;
    },

    onEnter() {},
    onLeave() {}
  };
}

export default createHeroModule();
