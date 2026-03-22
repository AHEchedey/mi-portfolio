/**
 * Ownership: Frontend Architecture
 * Purpose: Modular bootstrap entrypoint with safe coexistence with legacy.
 * Note: In this phase, bootstrap prepares dependencies and only initializes
 * modules explicitly flagged as modular.
 */
import { createEventBus } from "./events.js";
import { applyTranslations, createI18n } from "./i18n.js";
import { registerGsap } from "./animation.js";
import { createScrollAdapter } from "./scroll.js";
import heroModule from "../sections/hero.js";
import aboutModule from "../sections/about.js";

const MODULAR_CONTENT_PATHS = {
  es: "src/content/es.json",
  en: "src/content/en.json"
};
const MODULES = new Map([
  ["hero", heroModule],
  ["about", aboutModule]
]);
const SECTION_FLAG_PREFIX = "arch";
const BOOTSTRAP_GUARD = "modularBootstrapInitialized";
const activeSections = new Map();
let bootstrapContext = null;

function getInitialLanguage() {
  return document.documentElement.lang || "es";
}

function getSectionFlag(sectionId) {
  return `${SECTION_FLAG_PREFIX}${sectionId.charAt(0).toUpperCase()}${sectionId.slice(1)}`;
}

function shouldInitSection({ body, sectionId }) {
  if (!body) return false;
  if (body.dataset.arch === "modular") return true;
  const flagName = getSectionFlag(sectionId);
  return body.dataset[flagName] === "modular";
}

function isInitialized(el) {
  return el.dataset.initialized === "true";
}

function resolveModule(sectionId, modules) {
  const mod = modules.get(sectionId);
  if (!mod || typeof mod.init !== "function" || typeof mod.destroy !== "function") {
    return null;
  }
  return mod;
}

function mountSection(el, module, deps) {
  if (isInitialized(el)) return;
  module.init(el, deps);
  activeSections.set(el, module);
}

function unmountSection(el) {
  const module = activeSections.get(el);
  if (!module) return;
  module.destroy();
  activeSections.delete(el);
}

function syncLanguage(deps, nextLang) {
  if (!nextLang) return;
  if (!deps.i18n.setLang(nextLang)) return;
  deps.events.emit("i18n:change", { lang: deps.i18n.getLang() });
}

function bindLegacyLanguageBridge(deps) {
  const onClick = (event) => {
    const control = event.target.closest("[data-lang]");
    if (!control) return;
    const nextLang = control.dataset.lang || control.getAttribute("lang");
    queueMicrotask(() => syncLanguage(deps, document.documentElement.lang || nextLang));
  };

  document.addEventListener("click", onClick);

  let restoreSetLanguage = null;
  if (typeof globalThis.setLanguage === "function") {
    const originalSetLanguage = globalThis.setLanguage;
    const wrappedSetLanguage = function setLanguageBridge(nextLang) {
      const result = originalSetLanguage.apply(this, arguments);
      syncLanguage(deps, document.documentElement.lang || nextLang);
      return result;
    };

    globalThis.setLanguage = wrappedSetLanguage;
    restoreSetLanguage = () => {
      if (globalThis.setLanguage === wrappedSetLanguage) {
        globalThis.setLanguage = originalSetLanguage;
      }
    };
  }

  return () => {
    document.removeEventListener("click", onClick);
    if (restoreSetLanguage) restoreSetLanguage();
  };
}

async function loadModularContent(deps) {
  const entries = await Promise.all(
    Object.entries(MODULAR_CONTENT_PATHS).map(async ([lang, path]) => {
      const response = await fetch(path);
      if (!response.ok) throw new Error(`Failed to load ${path}`);
      return [lang, await response.json()];
    })
  );

  entries.forEach(([lang, dictionary]) => deps.i18n.registerDictionary(lang, dictionary));
  deps.events.emit("i18n:ready", { lang: deps.i18n.getLang() });
  deps.events.emit("i18n:change", { lang: deps.i18n.getLang() });
}

function bindGlobalTranslations(deps) {
  const applyGlobalTranslations = () => applyTranslations(document.body, deps.i18n);
  applyGlobalTranslations();
  const offReady = deps.events.on("i18n:ready", applyGlobalTranslations);
  const offChange = deps.events.on("i18n:change", applyGlobalTranslations);

  return () => {
    offReady();
    offChange();
  };
}

export function bootstrap({ modules = MODULES } = {}) {
  const root = document.documentElement;
  const body = document.body;
  if (!root || !body) return null;
  if (root.dataset[BOOTSTRAP_GUARD] === "true" && bootstrapContext) return bootstrapContext;

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
      defaultLang: getInitialLanguage(),
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
    const module = resolveModule(sectionId, modules);
    if (!module) return;

    if (shouldInitSection({ body, sectionId })) {
      mountSection(el, module, deps);
      return;
    }
    unmountSection(el);
  });

  const unbindLanguageBridge = bindLegacyLanguageBridge(deps);
  const unbindGlobalTranslations = bindGlobalTranslations(deps);
  loadModularContent(deps).catch(() => {
    deps.events.emit("i18n:ready", { lang: deps.i18n.getLang() });
    deps.events.emit("i18n:change", { lang: deps.i18n.getLang() });
  });

  bootstrapContext = {
    deps,
    destroy() {
      [...activeSections.keys()].forEach((el) => unmountSection(el));
      unbindLanguageBridge();
      unbindGlobalTranslations();
      deps.events.clear();
      root.dataset[BOOTSTRAP_GUARD] = "false";
      bootstrapContext = null;
    }
  };

  return bootstrapContext;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => bootstrap());
} else {
  bootstrap();
}
