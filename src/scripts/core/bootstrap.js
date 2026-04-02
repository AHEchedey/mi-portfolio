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
import menuComponent from "../components/menu.js";
import heroModule from "../sections/hero.js";
import aboutModule from "../sections/about.js";
import projectsModule from "../sections/projects.js";
import experienceModule from "../sections/experience.js";
import skillsModule from "../sections/skills.js";
import educationModule from "../sections/education.js";
import certificationsModule from "../sections/certifications.js";

const MODULAR_CONTENT_PATHS = {
  es: "src/content/es.json",
  en: "src/content/en.json"
};
const SCROLL_TARGET_MAP = {
  hero: "hero",
  about: "sobre_mi",
  projects: "proyectos",
  experience: "experiencia_laboral",
  skills: "habilidades_tecnicas",
  education: "educacion",
  certifications: "certificaciones",
  conferences: "conferencias_workshops_premios",
  manifesto: "manifesto"
};
const MODULES = new Map([
  ["hero", heroModule],
  ["about", aboutModule],
  ["projects", projectsModule],
  ["experience", experienceModule],
  ["skills", skillsModule],
  ["education", educationModule],
  ["certifications", certificationsModule]
]);
const COMPONENTS = [
  {
    id: "menu",
    selector: '[data-component="menu"]',
    module: menuComponent
  }
];
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
    queueMicrotask(() => syncLanguage(deps, nextLang));
  };

  const onLanguageChange = (event) => {
    syncLanguage(deps, event.detail?.lang);
  };

  document.addEventListener("click", onClick);
  window.addEventListener("portfolio:language-change", onLanguageChange);

  let restoreSetLanguage = null;
  if (typeof globalThis.setLanguage === "function") {
    const originalSetLanguage = globalThis.setLanguage;
    const wrappedSetLanguage = async function setLanguageBridge(nextLang) {
      const result = await originalSetLanguage.apply(this, arguments);
      syncLanguage(deps, nextLang || document.documentElement.lang);
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
    window.removeEventListener("portfolio:language-change", onLanguageChange);
    if (restoreSetLanguage) restoreSetLanguage();
  };
}

async function loadModularContent(deps) {
  const bridgeReady = globalThis.__portfolioContentReady;
  if (bridgeReady && typeof bridgeReady.then === "function") {
    await bridgeReady;
  }

  const bridgeLoader = globalThis.loadPortfolioLanguageDictionary;
  if (typeof bridgeLoader === "function") {
    const missingFromBridge = Object.entries(MODULAR_CONTENT_PATHS).filter(
      ([lang]) => !deps.i18n.has(lang)
    );

    await Promise.all(
      missingFromBridge.map(async ([lang]) => {
        try {
          await bridgeLoader(lang);
        } catch (_) {
          // Fall through to direct fetch only if the legacy bridge cannot serve it.
        }
      })
    );
  }

  const globalContent = globalThis.portfolioContent;
  if (globalContent && typeof globalContent === "object") {
    Object.entries(globalContent).forEach(([lang, dictionary]) => {
      if (dictionary && typeof dictionary === "object") {
        deps.i18n.registerDictionary(lang, dictionary);
      }
    });
  }

  const missingEntries = Object.entries(MODULAR_CONTENT_PATHS).filter(
    ([lang]) => !deps.i18n.has(lang)
  );

  if (missingEntries.length === 0) {
    deps.events.emit("i18n:ready", { lang: deps.i18n.getLang() });
    deps.events.emit("i18n:change", { lang: deps.i18n.getLang() });
    return;
  }

  const entries = await Promise.all(
    missingEntries.map(async ([lang, path]) => {
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

function mountComponents({ body, deps }) {
  COMPONENTS.forEach(({ id, selector, module }) => {
    if (!module || typeof module.init !== "function" || typeof module.destroy !== "function") {
      return;
    }

    document.querySelectorAll(selector).forEach((el) => {
      if (shouldInitSection({ body, sectionId: id })) {
        mountSection(el, module, deps);
        return;
      }
      unmountSection(el);
    });
  });
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
    scroll: createScrollAdapter({
      strategy: "native",
      targetMap: SCROLL_TARGET_MAP
    }),
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

  mountComponents({ body, deps });

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
