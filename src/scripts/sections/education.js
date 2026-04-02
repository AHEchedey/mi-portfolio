/**
 * Ownership: Sections Team (Education)
 * Purpose: Modular Education pilot logic with safe legacy coexistence.
 * Note: Conservative ownership layer; no visual redesign in this phase.
 */
import { createCleanupStack } from "../core/events.js";
import { applyTranslations } from "../core/i18n.js";

function createEducationModule() {
  const state = {
    el: null,
    applyContent: null,
    cleanup: createCleanupStack()
  };

  return {
    init(el, deps) {
      if (!el) return;
      if (el.dataset.initialized === "true") return;
      el.dataset.initialized = "true";

      state.el = el;
      el.dataset.educationModule = "ready";

      state.applyContent = () => applyTranslations(el, deps?.i18n);
      state.applyContent();
      state.cleanup.add(deps?.events?.on("i18n:ready", state.applyContent));
      state.cleanup.add(deps?.events?.on("i18n:change", state.applyContent));
    },

    destroy() {
      if (!state.el) return;

      state.cleanup.run();

      delete state.el.dataset.initialized;
      delete state.el.dataset.educationModule;
      state.el = null;
      state.applyContent = null;
    },

    onEnter() {},
    onLeave() {}
  };
}

export default createEducationModule();
