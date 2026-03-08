/**
 * Ownership: Frontend Architecture
 * Purpose: Modular bootstrap entrypoint with safe coexistence with legacy.
 * Note: In this phase, bootstrap prepares dependencies and only initializes
 * modules explicitly flagged as modular.
 */
import { createEventBus } from "./events.js";
import { createI18n } from "./i18n.js";
import { registerGsap } from "./animation.js";
import { createScrollAdapter } from "./scroll.js";
import heroModule from "../sections/hero.js";
import aboutModule from "../sections/about.js";

const MODULES = new Map([
  ["hero", heroModule],
  ["about", aboutModule]
]);
const SECTION_FLAG_PREFIX = "arch";
const BOOTSTRAP_GUARD = "modularBootstrapInitialized";

function getSectionFlag(sectionId) {
  return `${SECTION_FLAG_PREFIX}${sectionId.charAt(0).toUpperCase()}${sectionId.slice(1)}`;
}

function shouldInitSection({ body, sectionId }) {
  if (!body) return false;
  if (body.dataset.arch === "modular") return true;
  const flagName = getSectionFlag(sectionId);
  return body.dataset[flagName] === "modular";
}

export function bootstrap({ modules = MODULES } = {}) {
  const root = document.documentElement;
  const body = document.body;
  if (!root || !body) return null;
  if (root.dataset[BOOTSTRAP_GUARD] === "true") return null;

  root.dataset[BOOTSTRAP_GUARD] = "true";

  const gsapInstance = registerGsap({
    gsap: globalThis.gsap,
    plugins: globalThis.ScrollTrigger ? [globalThis.ScrollTrigger] : []
  });

  const dictionaries = globalThis.portfolioContent || {};
  const deps = {
    events: createEventBus(),
    scroll: createScrollAdapter({ strategy: "native" }),
    i18n: createI18n({
      defaultLang: globalThis.currentLang || "es",
      dictionaries,
      fallbackLang: "es"
    }),
    animation: {
      gsap: gsapInstance,
      scrollTrigger: globalThis.ScrollTrigger || null
    }
  };

  const modularSections = [...document.querySelectorAll("[data-section]")];
  modularSections.forEach((el) => {
    const sectionId = el.dataset.section;
    if (!sectionId) return;
    if (!shouldInitSection({ body, sectionId })) return;
    if (el.dataset.initialized === "true") return;

    const module = modules.get(sectionId);
    if (!module || typeof module.init !== "function") return;

    module.init(el, deps);
  });

  return deps;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => bootstrap());
} else {
  bootstrap();
}
