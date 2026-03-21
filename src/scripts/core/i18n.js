/**
 * Ownership: Frontend Architecture
 * Purpose: Basic i18n loader placeholder for modular content.
 * Note: Coexists with current content.js until full migration.
 */
function isPlainObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
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

  function t(path, fallback = "") {
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
    return Boolean(store[langKey]);
  }

  return { setLang, t, has, registerDictionary, getLang: () => lang };
}

function applyTextBinding(node, i18n) {
  const key = node.dataset.i18n;
  if (!key) return;
  if (node.closest("[data-module-split]")) return;
  const value = i18n.t(key);
  if (typeof value === "string" || typeof value === "number") {
    node.textContent = String(value);
  }
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
      if (typeof value === "string" || typeof value === "number") {
        node.setAttribute(attrName, String(value));
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
