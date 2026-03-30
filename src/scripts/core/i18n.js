/**
 * Ownership: Frontend Architecture
 * Purpose: Basic i18n loader placeholder for modular content.
 * Note: Coexists with current content.js until full migration.
 */
function isPlainObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}

function createSplitElement(tagName, className, text) {
  const el = document.createElement(tagName);
  el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

function splitWords(text) {
  return String(text)
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .filter(Boolean);
}

function splitChars(text) {
  return Array.from(String(text));
}

function parseSplitConfig(config = "") {
  const parts = String(config)
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);

  return {
    lines: parts.includes("lines"),
    words: parts.includes("words"),
    chars: parts.includes("chars")
  };
}

function renderSplitText(node, text) {
  const config = parseSplitConfig(node.dataset.split);
  const lines = String(text).split(/\n+/);
  const fragment = document.createDocumentFragment();
  let wordIndex = 0;
  let charIndex = 0;

  const renderWord = (word) => {
    if (!config.words && !config.chars) return document.createTextNode(word);

    if (config.chars) {
      const wordEl = createSplitElement("span", "word");
      wordEl.style.display = "inline-block";
      wordEl.style.setProperty("--w-index", String(wordIndex++));

      splitChars(word).forEach((char) => {
        const charEl = createSplitElement("span", "char", char);
        charEl.style.display = "inline-block";
        charEl.style.setProperty("--c-index", String(charIndex++));
        wordEl.appendChild(charEl);
      });

      return wordEl;
    }

    const wordEl = createSplitElement("span", "word", word);
    wordEl.style.display = "inline-block";
    wordEl.style.setProperty("--w-index", String(wordIndex++));
    return wordEl;
  };

  lines.forEach((lineText, lineIndex) => {
    const target = config.lines
      ? createSplitElement("span", "line")
      : fragment;

    if (config.lines) {
      target.style.display = "block";
      target.style.setProperty("--l-index", String(lineIndex));
    }

    const words = splitWords(lineText);
    if (words.length === 0) {
      target.appendChild(document.createTextNode(""));
    } else {
      words.forEach((word, index) => {
        target.appendChild(renderWord(word));
        if (index < words.length - 1) {
          target.appendChild(document.createTextNode(" "));
        }
      });
    }

    if (config.lines) {
      fragment.appendChild(target);
    }
  });

  node.replaceChildren(fragment);
}

function deepMerge(baseValue, nextValue) {
  if (Array.isArray(nextValue)) return [...nextValue];
  if (!isPlainObject(baseValue) || !isPlainObject(nextValue)) return nextValue;

  const merged = { ...baseValue };
  Object.entries(nextValue).forEach(([key, value]) => {
    merged[key] = key in merged ? deepMerge(merged[key], value) : deepMerge(undefined, value);
  });
  return merged;
}

export function createI18n({ defaultLang = "es", dictionaries = {}, fallbackLang = "es" } = {}) {
  const store = { ...dictionaries };
  let lang = defaultLang;

  function setLang(nextLang) {
    if (!store[nextLang]) return false;
    lang = nextLang;
    return true;
  }

  function registerDictionary(langKey, dictionary) {
    if (!langKey || !isPlainObject(dictionary)) return;
    store[langKey] = deepMerge(store[langKey] || {}, dictionary);
  }

  function t(path, fallback) {
    const keys = path.split(".");
    let value = store[lang] ?? store[fallbackLang];
    for (const key of keys) {
      if (value && Object.prototype.hasOwnProperty.call(value, key)) {
        value = value[key];
      } else {
        return fallback;
      }
    }
    return value;
  }

  function has(langKey) {
    const dictionary = store[langKey];
    return isPlainObject(dictionary) && Object.keys(dictionary).length > 0;
  }

  return { setLang, t, has, registerDictionary, getLang: () => lang };
}

function applyTextBinding(node, i18n) {
  const key = node.dataset.i18n;
  if (!key) return;
  const value = i18n.t(key);
  if (typeof value !== "string" && typeof value !== "number") return;

  if (node.matches("[data-module-split]")) {
    renderSplitText(node, String(value));
    return;
  }

  node.textContent = String(value);
}

function applyAttributeBindings(node, i18n) {
  const bindings = node.dataset.i18nAttr;
  if (!bindings) return;

  bindings
    .split(";")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .forEach((entry) => {
      const separatorIndex = entry.indexOf(":");
      if (separatorIndex < 1) return;
      const attrName = entry.slice(0, separatorIndex).trim();
      const key = entry.slice(separatorIndex + 1).trim();
      if (!attrName || !key) return;

      const value = i18n.t(key);
      if (typeof value !== "string" && typeof value !== "number") return;

      node.setAttribute(attrName, String(value));
      if (attrName === "data-section-title" && node.dataset.sectionTitleId) {
        const render = document.querySelector(
          `.c-section-title_render[data-id="${node.dataset.sectionTitleId}"]`
        );
        if (render) {
          render.textContent = String(value);
        }
      }
    });
}

export function applyTranslations(root, i18n) {
  if (!root || !i18n) return;

  const nodes = [];
  if (root.matches?.("[data-i18n], [data-i18n-attr]")) nodes.push(root);
  nodes.push(...root.querySelectorAll("[data-i18n], [data-i18n-attr]"));

  nodes.forEach((node) => {
    applyTextBinding(node, i18n);
    applyAttributeBindings(node, i18n);
  });
}
