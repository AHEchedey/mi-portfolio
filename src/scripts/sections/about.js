/**
 * Ownership: Sections Team (About)
 * Purpose: Modular About pilot logic with safe legacy coexistence.
 * Note: Conservative behavior, no visual override.
 */
function createAboutModule() {
  const state = {
    el: null,
    trigger: null,
    onVisibilityChange: null
  };

  return {
    init(el, deps) {
      if (!el) return;
      if (el.dataset.initialized) return;
      el.dataset.initialized = "true";

      state.el = el;
      el.dataset.aboutModule = "ready";

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
      }

      state.onVisibilityChange = () => {
        if (document.hidden) this.onLeave?.();
      };
      document.addEventListener("visibilitychange", state.onVisibilityChange);
    },

    destroy() {
      if (!state.el) return;

      if (state.onVisibilityChange) {
        document.removeEventListener("visibilitychange", state.onVisibilityChange);
      }
      if (state.trigger) {
        state.trigger.kill();
      }

      delete state.el.dataset.initialized;
      delete state.el.dataset.aboutModule;
      state.el = null;
      state.trigger = null;
      state.onVisibilityChange = null;
    },

    onEnter() {},
    onLeave() {}
  };
}

export default createAboutModule();
