/* UTILISATION 
  Ajouter data-i18n à vos éléments HTML ou element.dataset.i18n
  lors du changement de language, 
  hydrateHtml() sera appelé pour mettre à jour les éléments HTML
*/

class I18n {
  #lang;
  #model;
  #i18n;
  constructor(lang, model) {
    this.#model = model;
    this.#i18n = null;
    this.setLang(lang);
  }

  setLang(lang) {
    this.#lang = lang;
    this.hydrateHtml();
  }

  getLang() {
    return this.#lang;
  }

  async text(key) {
    const lang = this.#lang;
    const keys = key.split(".");

    if (this.#i18n === null) {
      this.#i18n = await fetch(this.#model).then((res) => res.json());
    }

    let t = this.#i18n;
    if (t.hasOwnProperty(lang)) {
      t = t[lang];
    }
    for (const k in keys) {
      if (!t.hasOwnProperty(keys[k])) {
        return key;
      } else {
        t = t[keys[k]];
      }
    }
    console.log(t);
    return t;
  }

  async hydrateHtml() {
    const i18nElements = document.querySelectorAll("[data-i18n]");
    i18nElements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const text = this.text(key).then((text) => {
        console.log(text);
        element.innerHTML = text;
      });
    });
  }
}

const _i18N = new I18n("fr", "i18n/i18n.json");
_i18N.hydrateHtml();
