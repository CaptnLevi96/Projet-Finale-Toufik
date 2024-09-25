/* UTILISATION
  @data-i18n-attribute
  ajouter data-i18n-attribute pour les attributs à modifier
  data-18n-attribute="innerHTML,title" est "innerHTML" par défaut
  @data-i18n
  Ajouter data-i18n à vos éléments HTML, représentant la clé de la traduction
  data-i18n="app.text,app.title"
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
    return t;
  }

  async hydrateHtml() {
    const i18nElements = document.querySelectorAll("[data-i18n]");
    i18nElements.forEach((element) => {
      let attributes = ["innerHTML"];
      let keys = element.getAttribute("data-i18n").split(",");

      // Regarder si l'élément a un attribut data-i18n-attribute
      if (element.hasAttribute("data-i18n-attribute")) {
        attributes = element.getAttribute("data-i18n-attribute");
        attributes = attributes.split(",");
      }

      keys.forEach((key, index) => {
        const attribute = attributes[index] || "innerHTML";
        this.text(key).then((text) => {
          element[attribute] = text;
        });
      });
    });
  }
}

const _i18N = new I18n("en", "i18n/i18n.json");
_i18N.hydrateHtml();
