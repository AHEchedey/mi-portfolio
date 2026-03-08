/**
 * Ownership: Frontend Architecture
 * Purpose: Shared scroll adapter for modular sections.
 * Note: Coexists with legacy runtime and can be replaced later.
 */
export function createScrollAdapter({ strategy = "native" } = {}) {
  return {
    strategy,
    getY() {
      return window.scrollY || window.pageYOffset || 0;
    },
    scrollTo(target, options = {}) {
      if (!target) return;
      if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: options.behavior || "smooth" });
        return;
      }
      if (typeof target === "string") {
        const node = document.querySelector(target);
        if (node) node.scrollIntoView({ behavior: options.behavior || "smooth", block: "start" });
        return;
      }
      if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: options.behavior || "smooth", block: "start" });
      }
    }
  };
}
