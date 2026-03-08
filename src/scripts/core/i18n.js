/**
 * Ownership: Frontend Architecture
 * Purpose: Basic i18n loader placeholder for modular content.
 * Note: Coexists with current content.js until full migration.
 */
export function createI18n({ defaultLang = "es", dictionaries = {}, fallbackLang = "es" } = {}) {
  let lang = defaultLang;

  function setLang(nextLang) {
    if (!dictionaries[nextLang]) return false;
    lang = nextLang;
    return true;
  }

  function t(path, fallback = "") {
    const keys = path.split(".");
    let value = dictionaries[lang] ?? dictionaries[fallbackLang];
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
    return Boolean(dictionaries[langKey]);
  }

  return { setLang, t, has, getLang: () => lang };
}
