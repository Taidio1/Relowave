const locales = ["en-GB", "pl-PL", "uk-UA"];
const languageMap = {
  "en-GB": "eng",
  "pl-PL": "pl",
  "uk-UA": "uk" // Zakładając, że dodasz ukraińskie tłumaczenia
};

const languages = {
  pl: {
    //nav
    stronaglowna: "Strona Główna",
    onas:"O Nas",
    uslugi:"Usługi",
    kontakt:"Kontakt",
    //Welocome Page
    Tytul: "Witamy w Relowave!",
    slogan: "Nasza misja to ułatwienie procesu legalizacji pobytu w Polsce",

    //Services
    Lista1SE:"",
    Lista2SE:"",
    Lista3SE:"",
    Lista4SE:"",
    Lista5SE:"",
    Lista6SE:"",

    Opis1AS:"",
    Opis2AS:"",
    Opis3AS:"",
    Opis4AS:"",
    Opis5AS:"",
    Opis6AS:"",

    //About Us

  },
  eng: {
    stronaglowna: "Home",
    Tytul: "Title in English"
  },
  uk: {
    stronaglowna: "Головна",
    Tytul: "Заголовок українською"
  }
};

function getFlagSrc(countryCode) {
  return /^[A-Z]{2}$/.test(countryCode)
    ? `https://flagsapi.com/${countryCode.toUpperCase()}/shiny/64.png`
    : "";
};

const dropdownBtn = document.getElementById("dropdown-btn");
const dropdownContent = document.getElementById("dropdown-content");

function setSelectedLocale(locale) {
  const intlLocale = new Intl.Locale(locale);
  const langName = new Intl.DisplayNames([locale], {
    type: "language"
  }).of(intlLocale.language);

  dropdownContent.innerHTML = "";

  const otherLocales = locales.filter((loc) => loc !== locale);
  otherLocales.forEach((otherLocale) => {
    const otherIntlLocale = new Intl.Locale(otherLocale);
    const otherLangName = new Intl.DisplayNames([otherLocale], {
      type: "language"
    }).of(otherIntlLocale.language);

    const listEl = document.createElement("li");
    listEl.innerHTML = `${otherLangName} <img src="${getFlagSrc(otherIntlLocale.region)}" />`;
    listEl.value = otherLocale;
    listEl.addEventListener("mousedown", function () {
      setSelectedLocale(otherLocale);
      const selectedLanguage = languageMap[otherLocale];
      localStorage.setItem('preferredLanguage', selectedLanguage);
      updateTexts(selectedLanguage);
    });
    dropdownContent.appendChild(listEl);
  });

  dropdownBtn.innerHTML = `<img src="${getFlagSrc(intlLocale.region)}" /> ${langName} <span class="arrow-down"></span>`;
  const selectedLanguage = languageMap[locale];
  updateTexts(selectedLanguage);
};

setSelectedLocale(locales[0]);
const browserLang = new Intl.Locale(navigator.language).language;
for (const locale of locales) {
  const localeLang = new Intl.Locale(locale).language;
  if (localeLang === browserLang) {
    setSelectedLocale(locale);
  }
};

// Uaktualnij teksty na początkowy język po załadowaniu strony
window.onload = () => {
  const savedLanguage = localStorage.getItem('preferredLanguage') || 'pl';
  const savedLocale = Object.keys(languageMap).find(key => languageMap[key] === savedLanguage);
  setSelectedLocale(savedLocale || 'pl-PL');
};

function updateTexts(language) {
  //nav
  document.getElementById('stronaglowna').innerText = languages[language].stronaglowna;
  document.getElementById('onas').innerText = languages[language].onas;
  document.getElementById('uslugi').innerText = languages[language].uslugi;
  document.getElementById('zespol').innerText = languages[language].zespol;
  document.getElementById('kontakt').innerText = languages[language].kontakt;
  //home
  document.getElementById('Tytul').innerText = languages[language].Tytul;
  document.getElementById('slogan').innerText = languages[language].slogan;
  document.getElementById('btnind').innerText = languages[language].btnind;
  document.getElementById('btnbiz').innerText = languages[language].btnbiz;
   //Servieces 
  document.getElementById('Tytul1SE').innerText = languages[language].Tytul1SE;
  document.getElementById('Tytul2SE').innerText = languages[language].Tytul2SE;

  document.getElementById('Lista1SE').innerText = languages[language].Lista1SE;
  document.getElementById('Lista2SE').innerText = languages[language].Lista2SE;
  document.getElementById('Lista3SE').innerText = languages[language].Lista3SE;
  document.getElementById('Lista4SE').innerText = languages[language].Lista4SE;
  document.getElementById('Lista5SE').innerText = languages[language].Lista5SE;
  document.getElementById('Lista6SE').innerText = languages[language].Lista6SE;

  document.getElementById('Opis1AS').innerText = languages[language].Opis1AS;
  document.getElementById('Opis2AS').innerText = languages[language].Opis2AS;
  document.getElementById('Opis3AS').innerText = languages[language].Opis3AS;
  document.getElementById('Opis4AS').innerText = languages[language].Opis4AS;
  document.getElementById('Opis5AS').innerText = languages[language].Opis5AS;
  document.getElementById('Opis6AS').innerText = languages[language].Opis6AS;

  //About Us
  document.getElementById('tytulAU').innerText = languages[language].tytulAU;
  document.getElementById('podtytulAU').innerText = languages[language].podtytulAU;
  document.getElementById('punkt1AU').innerText = languages[language].punkt1AU;
  document.getElementById('punkt2AU').innerText = languages[language].punkt2AU;
  document.getElementById('punkt3AU').innerText = languages[language].punkt2AU;
  document.getElementById('Opis1AU').innerText = languages[language].Opis1AU;
  document.getElementById('Opis2AU').innerText = languages[language].Opis2AU;
  document.getElementById('Opis3AU').innerText = languages[language].Opis2AU;
  document.getElementById('Opis3AU').innerText = languages[language].Opis2AU;

};
