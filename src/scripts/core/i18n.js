/**
 * Ownership: Frontend Architecture
 * Purpose: Basic i18n loader placeholder for modular content.
 * Note: Scaffold only. Not connected to production yet.
 */
export function createI18n({ defaultLang = "es", dictionaries = {} } = {}) {
  let lang = defaultLang;

  function setLang(nextLang) {
    if (!dictionaries[nextLang]) return;
    lang = nextLang;
  }

  function t(path, fallback = "") {
    const keys = path.split(".");
    let value = dictionaries[lang];
    for (const key of keys) {
      if (value && Object.prototype.hasOwnProperty.call(value, key)) {
        value = value[key];
      } else {
        return fallback;
      }
    }
    return value;
  }

  return { setLang, t, getLang: () => lang };
}
