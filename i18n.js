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
  #langList;
  #model;
  #i18n;
  constructor(lang, model) {
    this.#model = model;
    this.#i18n = null;
    this.#langList = null;
    this.setLang(lang);
  }

  setLang(lang) {
    this.#lang = lang;
    this.hydrateHtml();
  }

  getLang() {
    return this.#lang;
  }

  getLangList() {
    return this.#langList;
  }

  #setI18n(i18n) {
    this.#i18n = i18n;
    this.#langList = Object.keys(i18n);
  }

  async text(key) {
    const lang = this.#lang;
    const keys = key.split(".");

    if (this.#i18n === null) {
      await this.evaluate();
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

  // FILE MANAGEMENT BASED ON this.#model
  async getContent() {
    return await fetch(this.#model).then((res) => res.json());
  }

  removeFromLocalStorage() {
    window.localStorage.removeItem("i18nContent");
  }

  saveToLocalStorage(i18nContent) {
    localStorage.setItem("i18nContent", JSON.stringify(i18nContent));
  }

  getFromLocalStorage() {
    return localStorage.getItem("i18nContent");
  }

  async resetToDefault() {
    const i18nContent = await this.getContent().then((res) => res);
    this.#setI18n(i18nContent);
    this.removeFromLocalStorage();
    this.saveToLocalStorage(i18nContent);
    return i18nContent;
  }

  async evaluate() {
    const i18nContent = await this.getFromLocalStorage();
    if (i18nContent) {
      try {
        this.#setI18n(JSON.parse(i18nContent));
      } catch (error) {
        window.localStorage.removeItem("i18nContent");
        console.warn("i18nContent was not a valid JSON file");
        return this.resetToDefault();
      }
    } else {
      return this.resetToDefault();
    }
    return this.#i18n;
  }
}

const _i18N = new I18n("en", "i18n/i18n.json");
_i18N.hydrateHtml();
