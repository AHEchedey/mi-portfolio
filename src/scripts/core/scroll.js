/**
 * Ownership: Frontend Architecture
 * Purpose: Shared scroll adapter for modular sections.
 * Note: Coexists with legacy runtime and can be replaced later.
 */
function isSelectorLike(value) {
  return /^[.#[]/.test(value);
}

function getBehavior(options = {}) {
  if (options.immediate) return "auto";
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
    return "auto";
  }
  return options.behavior || "smooth";
}

export function createScrollAdapter({ strategy = "native", targetMap = {} } = {}) {
  const warnedTargets = new Set();

  function warnMissingTarget(ref, options = {}) {
    if (!options.logMissingTarget) return;
    const key = String(ref);
    if (warnedTargets.has(key)) return;
    warnedTargets.add(key);
    console.warn(`[scroll] Target not found: ${key}`);
  }

  function resolveMappedTarget(value, seen = new Set()) {
    const mapped = targetMap[value];
    if (!mapped || seen.has(value)) return null;

    seen.add(value);

    if (typeof mapped === "function") {
      const nextValue = mapped();
      if (typeof nextValue === "string") {
        return resolveTarget(nextValue, seen);
      }
      return nextValue;
    }

    if (mapped instanceof HTMLElement || typeof mapped === "number") {
      return mapped;
    }

    if (typeof mapped === "string") {
      return resolveTarget(mapped, seen);
    }

    return null;
  }

  function resolveTarget(ref, seen = new Set()) {
    if (!ref && ref !== 0) return null;

    if (ref === "top") return 0;
    if (typeof ref === "number") return ref;
    if (ref instanceof HTMLElement) return ref;

    if (typeof ref !== "string") return null;

    const value = ref.trim();
    if (!value) return null;
    if (value === "top") return 0;

    if (isSelectorLike(value)) {
      return document.querySelector(value);
    }

    return (
      resolveMappedTarget(value, seen) ||
      document.querySelector(`[data-scroll-target="${value}"]`) ||
      document.querySelector(`[data-section="${value}"]`) ||
      document.getElementById(value)
    );
  }

  function scrollToY(y, options = {}) {
    const offset = Number(options.offset) || 0;
    const nextY = y + offset;
    if (!Number.isFinite(nextY)) return false;
    window.scrollTo({ top: nextY, behavior: getBehavior(options) });
    return true;
  }

  function scrollToTarget(ref, options = {}) {
    const target = resolveTarget(ref);
    if (target === null || target === undefined) {
      warnMissingTarget(ref, options);
      return false;
    }

    if (typeof target === "number") {
      return scrollToY(target, options);
    }

    const targetY = target.getBoundingClientRect().top + getY();
    return scrollToY(targetY, options);
  }

  function getY() {
    return window.scrollY || window.pageYOffset || 0;
  }

  return {
    strategy,
    resolveTarget,
    getY,
    scrollToY,
    scrollToTarget,
    scrollTo(target, options = {}) {
      return scrollToTarget(target, options);
    }
  };
}
