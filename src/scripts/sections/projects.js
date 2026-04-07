/**
 * Ownership: Sections Team (Projects)
 * Purpose: Modular Projects pilot logic with safe legacy coexistence.
 * Note: Conservative ownership layer; no visual redesign in this phase.
 */
import { createCleanupStack } from "../core/events.js";
import { applyTranslations } from "../core/i18n.js";

function createProjectsModule() {
  const state = {
    el: null,
    trigger: null,
    applyContent: null,
    onVisibilityChange: null,
    cleanup: createCleanupStack()
  };

  return {
    init(el, deps) {
      if (!el) return;
      if (el.dataset.initialized === "true") return;
      el.dataset.initialized = "true";

      state.el = el;
      el.dataset.projectsModule = "ready";

      const ScrollTrigger = deps?.animation?.scrollTrigger;
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
      delete state.el.dataset.projectsModule;
      state.el = null;
      state.trigger = null;
      state.applyContent = null;
      state.onVisibilityChange = null;
    },

    onEnter() {},
    onLeave() {}
  };
}

export default createProjectsModule();
