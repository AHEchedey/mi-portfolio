/**
 * Ownership: Sections Team (Experience)
 * Purpose: Modular Experience pilot logic with safe legacy coexistence.
 * Note: Conservative ownership layer; no visual redesign in this phase.
 */
import { createCleanupStack } from "../core/events.js";
import { applyTranslations } from "../core/i18n.js";

function createExperienceModule() {
  const state = {
    el: null,
    deps: null,
    trigger: null,
    applyContent: null,
    onVisibilityChange: null,
    cleanup: createCleanupStack()
  };

  function setActive(isActive) {
    if (!state.el) return;

    if (isActive) {
      state.el.dataset.experienceState = "active";
      state.el.classList.add("is-active");
      return;
    }

    state.el.dataset.experienceState = "idle";
    state.el.classList.remove("is-active");
  }

  return {
    init(el, deps) {
      if (!el) return;
      if (el.dataset.initialized === "true") return;
      el.dataset.initialized = "true";

      state.el = el;
      state.deps = deps;
      el.dataset.experienceModule = "ready";
      setActive(false);

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

      setActive(false);
      state.cleanup.run();

      delete state.el.dataset.initialized;
      delete state.el.dataset.experienceModule;
      delete state.el.dataset.experienceState;
      state.el = null;
      state.deps = null;
      state.trigger = null;
      state.applyContent = null;
      state.onVisibilityChange = null;
    },

    onEnter() {
      setActive(true);
      state.deps?.events?.emit("section:enter", {
        id: "experience",
        el: state.el
      });
    },
    onLeave() {
      setActive(false);
      state.deps?.events?.emit("section:leave", {
        id: "experience",
        el: state.el
      });
    }
  };
}

export default createExperienceModule();
