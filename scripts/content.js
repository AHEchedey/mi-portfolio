// Legacy content bridge.
// Source of truth lives in src/content/*.json.
// This file keeps only language state, DOM bindings and JSON loading fallback.

const CONTENT_PATHS = {
    es: "src/content/es.json",
    en: "src/content/en.json"
};

const legacyFallbackContent = {
    es: {},
    en: {}
};

let portfolioContent = {
    ...legacyFallbackContent
};

const loadedLanguages = new Set();
let currentLang = localStorage.getItem("portfolioLang") || "es";
let initContentBridgePromise = null;

function isPlainObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
}

function deepMerge(baseValue, nextValue) {
    if (Array.isArray(nextValue)) return [...nextValue];
    if (!isPlainObject(baseValue) || !isPlainObject(nextValue)) return nextValue;

    const merged = {
        ...baseValue
    };

    Object.entries(nextValue).forEach(([key, value]) => {
        merged[key] = key in merged ? deepMerge(merged[key], value) : deepMerge(undefined, value);
    });

    return merged;
}

function syncGlobalState() {
    window.portfolioContent = portfolioContent;
    window.currentLang = currentLang;
    window.loadPortfolioLanguageDictionary = loadLanguageDictionary;
    window.__portfolioContentReady = initContentBridgePromise;
}

async function loadLanguageDictionary(lang) {
    if (loadedLanguages.has(lang)) {
        return portfolioContent[lang] || legacyFallbackContent[lang] || {};
    }

    const path = CONTENT_PATHS[lang];
    const fallback = legacyFallbackContent[lang] || {};

    if (!path) {
        loadedLanguages.add(lang);
        portfolioContent[lang] = deepMerge({}, fallback);
        syncGlobalState();
        return portfolioContent[lang];
    }

    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`Failed to load ${path}`);
        }

        const dictionary = await response.json();
        portfolioContent[lang] = deepMerge(fallback, dictionary);
    } catch (error) {
        console.warn(`[content-bridge] Falling back to minimal legacy content for "${lang}".`, error);
        portfolioContent[lang] = deepMerge({}, fallback);
    }

    loadedLanguages.add(lang);
    syncGlobalState();
    return portfolioContent[lang];
}

function getContent(path) {
    const keys = path.split(".");
    let content = portfolioContent[currentLang] || legacyFallbackContent[currentLang] || {};

    for (const key of keys) {
        if (content && content[key] !== undefined) {
            content = content[key];
        } else {
            return null;
        }
    }

    return content;
}

function updateContent() {
    document.documentElement.lang = currentLang;

    const langButtons = document.querySelectorAll(".c-menu_lang a, .c-menu_lang span");
    langButtons.forEach((btn) => {
        const btnLang = btn.getAttribute("lang") || btn.getAttribute("data-lang");
        if (btnLang === currentLang) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

async function setLanguage(lang) {
    if (lang !== "es" && lang !== "en") {
        console.error("Idioma no soportado:", lang);
        return;
    }

    currentLang = lang;
    localStorage.setItem("portfolioLang", lang);

    await loadLanguageDictionary(lang);
    updateContent();
    syncGlobalState();

    window.dispatchEvent(new CustomEvent("portfolio:language-change", {
        detail: {
            lang: currentLang
        }
    }));
}

function bindLanguageControls() {
    if (document.documentElement.dataset.langControlsBound === "true") return;
    document.documentElement.dataset.langControlsBound = "true";

    const langLinks = document.querySelectorAll(".c-menu_lang a[data-lang]");
    langLinks.forEach((link) => {
        link.addEventListener("click", async (event) => {
            event.preventDefault();
            const lang = link.getAttribute("data-lang");
            if (lang) {
                await setLanguage(lang);
            }
        });
    });
}

async function initContentBridge() {
    if (initContentBridgePromise) {
        return initContentBridgePromise;
    }

    initContentBridgePromise = (async () => {
    bindLanguageControls();
    updateContent();
    await Promise.all([
        loadLanguageDictionary("es"),
        loadLanguageDictionary("en")
    ]);
    updateContent();
    syncGlobalState();
    })();

    syncGlobalState();
    return initContentBridgePromise;
}

syncGlobalState();

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        initContentBridge();
    });
} else {
    initContentBridge();
}

window.setLanguage = setLanguage;
window.getContent = getContent;
