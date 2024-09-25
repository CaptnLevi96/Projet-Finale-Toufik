const i18nSwitch = document.getElementById("i18n-switch");

_i18N.getLangList().forEach((lang) => {
  const option = document.createElement("option");
  option.value = lang;
  option.textContent = lang;
  option.selected = lang === _i18N.getLang();
  i18nSwitch.appendChild(option);
});

i18nSwitch.addEventListener("change", function () {
  const lang = this.value;
  _i18N.setLang(lang);
});
