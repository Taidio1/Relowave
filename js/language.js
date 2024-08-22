const locales = ["en-GB", "pl-PL", "uk-UA"];
const languageMap = {
  "en-GB": "eng",
  "pl-PL": "pl",
  "uk-UA": "uk"
};

const languages = {
  pl: {
    //nav
    stronaglowna: "Strona Główna",
    onas: "O Nas",
    uslugi: "Usługi",
    kontakt: "Kontakt",
    //Welocome Page
    Tytul: "Witamy w Relowave!",
    slogan: "Nasza misja to ułatwienie procesu legalizacji pobytu w Polsce",
    btnind: "Zapoznaj się",


    //Services
    Tytul1SE: "Nasze Usługi",
    Tytul2SE: "Czym się zajmujemy",
    Lista1SE: "Legalizacja pobytu",
    Lista2SE: "Zezwolenia na pracę",
    Lista3SE: "Uzyskanie obywatelstwa",
    Lista4SE: "Konsultacje",
    Lista5SE: "Zezwolenie na prawo jazdy",
    Lista6SE: "Uznanie zagranicznych aktów stanu cywilnego",

    Opis1AS: "Pobyt tymczasowy, Pobyt stały,Pobyt długoterminowy",
    Opis2AS: "Wspieramy w uzyskaniu wszelkich koniecznych zezwoleń na pracę.",
    Opis3AS: "Pomagamy w uzyskaniu dokumentów związanych z uzyskaniem obywatelstwa.",
    Opis4AS: "Oferujemy profesjonalne wsparcie na każdym etapie procesu legalizacji.",
    Opis5AS: "Pomoc w Uzyskaniu niezbędnych dokumentów do legalizacji prawa jazdy w Polsce",
    Opis6AS: "Pomoc w uznaniu zagranicznych aktów stanu cywilnego",

    //About Us
    titleAU: "O NAS",
    podtytulAU: "to firma specjalizująca się w legalizacji pobytu cudzoziemców w Polsce.Od lat pomagamy naszym klientom w uzyskaniu wszelkich niezbędnych zezwoleń i dokumentów, dbając o najwyższą jakość świadczonych usług.",

    punkt1AU: "Doświadczenie:",
    punkt2AU: "Wykwalifikowany zespół:",
    punkt3AU: "Elastyczność i zaangażowanie:",

    Opis1AU: "Ponad 5 lat doświadczenia w branży",
    Opis2AU: "Nasi specjaliści to eksperci w dziedzinie legalizacji pobytu.",
    Opis3AU: "Dopasowujemy nasze usługi do indywidualnych potrzeb każdego klienta.",
    btnMore: "Czytaj Więcej",

    //Opinie
    OpinieT: "Opinie",

    //Plany
    TytulPl: "NASZE PAKIETY",
    PodTytulPl: "Dostosowane do Twoich potrzeb",
    Title1Pl: "KONSULTACJA",
    Title2Pl: "KONSULTACJA",
    Title3Pl: "PAKIET PODSTAWOWY",
    Title4Pl: "PAKIET BIZNESOWY",

    Kons1Pl: "Wstępna Konsultacja",
    Kons2Pl: "Analiza Dokumentów",
    Kons3Pl: "Porady Wstępne Dotyczące Legalizacji Pobytu",
    Kons4Pl: "Informacje Na Temat Wymaganych Dokumentów",

    Rodz1Pl: "Konsultacje Dla Całej Rodziny",
    Rodz2Pl: "Pomoc W Przygotowaniu I Złożeniu Wniosków",
    Rodz3Pl: "Kompleksowa Obsługa Dokumentacji Dla Wszystkich Członków Rodziny",
    Rodz4Pl: "Tłumaczenia Przysięgłe Dokumentów",
    Rodz5Pl: "Reprezentacja Przed Urzędami",
    Rodz6Pl: "Aktualizacje Statusu Wniosków",

    Praca1Pl: "Legalizacji Pobytu Dla Celów Zawodowych",
    Praca2Pl: "Wsparcie W Uzyskaniu Zezwoleń Na Pracę",
    Praca3Pl: "Pomoc W Przygotowaniu Dokumentacji",
    Praca4Pl: "Tłumaczenia Dokumentów Zawodowych",
    Praca5Pl: "Porady Dotyczące Przepisów Prawa Pracy",
    Praca6Pl: "Reprezentacja Przed Urzędami Pracy",

    Btn1Pl: "Kontakt",
    Btn2Pl: "Kontakt",
    Btn3Pl: "Kontakt",
    Btn4Pl: "Kontakt",

    //Sekcja: Czemy my?
    TytulWU: "CZEMU MY?",
    PodTytulWU: "Dlaczego warto wybrać Relowave?",
    OpisWo: "Wybór odpowiedniej firmy do legalizacji pobytu w Polsce to klucz do sukcesu. Oto kilka powodów, dla których Relowave jest najlepszym wyborem:",
    List1Wu: "Profesjonalizm i Doświadczenie",
    List2Wu: "Szybkość i Efektywność",
    List3Wu: "Indywidualne Podejście",
    List4Wu: "Kompleksowe Usługi",
    List5Wu: "Wsparcie i Doradztwo",

    //Kontakt
    TytulKo: "Nasze Biuro",
    TytulWi: "Napisz do Nas",
    BtnWi: "Wyślij Wiadomość",

    //Footer
    Slogan: "Pomagamy Ludziom od 2022 roku",
    StronaglownaFO: "Strona Główna",
    OnasFO: "O Nas",
    UslugiFO: "Usługi",
    KontaktFO: "Kontakt",
    SkontFO: "Skontaktuj się",


  },
  eng: {
    //nav
    stronaglowna: "Home",
    onas: "About Us",
    uslugi: "Services",
    kontakt: "Contact",
    //Welcome Page
    Tytul: "Welcome to Relowave!",
    slogan: "Our mission is to simplify the process of legalizing your stay in Poland",
    btnind: "Read More",

    //Services
    Tytul1SE: "Our Services",
    Tytul2SE: "What We Do",

    Lista1SE: "Residence Legalization",
    Lista2SE: "Work Permits",
    Lista3SE: "Citizenship Acquisition",
    Lista4SE: "Consultations",
    Lista5SE: "Driver's License Permit",
    Lista6SE: "Recognition of foreign civil status records",

    Opis1AS: "Temporary Residence, Permanent Residence, Long-term Residence",
    Opis2AS: "We support in obtaining all necessary work permits.",
    Opis3AS: "We assist in obtaining documents related to citizenship acquisition.",
    Opis4AS: "We offer professional advice at every stage of the legalization process.",
    Opis5AS: "Assistance in obtaining necessary documents for legalizing your driver's license in Poland",
    Opis6AS: "Assistance in recognizing foreign civil status records",

    //About Us
    titleAU: "ABOUT US",
    podtytulAU: "is a company specializing in the legalization of foreigners' stay in Poland. For years, we have been helping our clients obtain all necessary permits and documents, ensuring the highest quality of services provided.",

    punkt1AU: "Experience:",
    punkt2AU: "Qualified Team:",
    punkt3AU: "Flexibility and Commitment:",

    Opis1AU: "Over 5 years of industry experience",
    Opis2AU: "Our specialists are experts in the field of residence legalization.",
    Opis3AU: "We tailor our services to the individual needs of each client.",
    btnMore: "Read More",

    //Opinions
    OpinieT: "Reviews",

    //Plans
    TytulPl: "OUR PACKAGES",
    PodTytulPl: "Tailored to Your Needs",
    Title1Pl: "CONSULTATION",
    Title2Pl: "CONSULTATION",
    Title3Pl: "BASIC PACKAGE",
    Title4Pl: "BUSINESS PACKAGE",

    Kons1Pl: "Initial Consultation",
    Kons2Pl: "Document Analysis",
    Kons3Pl: "Preliminary Advice on Residence Legalization",
    Kons4Pl: "Information on Required Documents",

    Rodz1Pl: "Consultations for the Whole Family",
    Rodz2Pl: "Assistance in Preparing and Submitting Applications",
    Rodz3Pl: "Comprehensive Documentation Service for All Family Members",
    Rodz4Pl: "Certified Document Translations",
    Rodz5Pl: "Representation Before Offices",
    Rodz6Pl: "Application Status Updates",

    Praca1Pl: "Residence Legalization for Professional Purposes",
    Praca2Pl: "Support in Obtaining Work Permits",
    Praca3Pl: "Assistance in Preparing Documentation",
    Praca4Pl: "Professional Document Translations",
    Praca5Pl: "Advice on Labor Law Regulations",
    Praca6Pl: "Representation Before Employment Offices",

    Btn1Pl: "Contact",
    Btn2Pl: "Contact",
    Btn3Pl: "Contact",
    Btn4Pl: "Contact",


    BtnPl: "Contact",

    //Section: Why Us?
    TytulWU: "WHY US?",
    PodTytulWU: "Why Choose Relowave?",
    OpisWo: "Choosing the right company for legalizing your stay in Poland is key to success. Here are some reasons why Relowave is the best choice:",
    List1Wu: "Professionalism and Experience",
    List2Wu: "Speed and Efficiency",
    List3Wu: "Individual Approach",
    List4Wu: "Comprehensive Services",
    List5Wu: "Support and Advisory",

    //Contact
    TytulKo: "Our Office",
    TytulWi: "Write to Us",
    BtnWi: "Send Message",

    //Footer
    Slogan: "Helping People since 2022",
    StronaglownaFO: "Home",
    OnasFO: "About Us",
    UslugiFO: "Services",
    KontaktFO: "Contact",
    SkontFO: "Get in Touch",

  },
  uk: {
    //nav
    stronaglowna: "Головна сторінка",
    onas: "Про нас",
    uslugi: "Послуги",
    kontakt: "Контакт",
    //Welocome Page
    Tytul: "Ласкаво просимо до Relowave!",
    slogan: "Наша місія - спрощення процесу легалізації перебування в Польщі",
    btnind: "Ознайомся",

    //Services
    Tytul1SE: "Наші Послуги",
    Tytul2SE: "Чим ми займаємося",
    Lista1SE: "Легалізація перебування",
    Lista2SE: "Дозволи на роботу",
    Lista3SE: "Отримання громадянства",
    Lista4SE: "Консультації",
    Lista5SE: "Дозвіл на водіння",
    Lista6SE: "Визнання іноземних актів цивільного стану",

    Opis1AS: "Тимчасове перебування, Постійне перебування, Довгострокове перебування",
    Opis2AS: "Допомагаємо у отриманні всіх необхідних дозволів на роботу.",
    Opis3AS: "Допомагаємо в отриманні документів, пов'язаних з отриманням громадянства.",
    Opis4AS: "Допомога у визнанні іноземних актів цивільного стану.",
    Opis5AS: "Допомога у отриманні необхідних документів для легалізації водійського посвідчення в Польщі",
    Opis6AS: "Допомога у визнанні іноземних актів цивільного стану",

    //About Us
    titleAU: "ПРО НАС",
    podtytulAU: "це компанія, що спеціалізується на легалізації перебування іноземців в Польщі. Ми допомагаємо нашим клієнтам отримати всі необхідні дозволи та документи, дбаючи про найвищу якість послуг.",

    punkt1AU: "Досвід:",
    punkt2AU: "Кваліфікована команда:",
    punkt3AU: "Гнучкість та відданість:",

    Opis1AU: "Понад 5 років досвіду в галузі",
    Opis2AU: "Наші спеціалісти - експерти в галузі легалізації перебування.",
    Opis3AU: "Ми адаптуємо наші послуги до індивідуальних потреб кожного клієнта.",
    btnMore: "Читати більше",

    //Opinie
    OpinieT: "Відгуки",

    //Plany
    TytulPl: "НАШІ ПАКЕТИ",
    PodTytulPl: "Задовольняючи ваші потреби",
    Title1Pl: "КОНСУЛЬТАЦІЯ",
    Title2Pl: "КОНСУЛЬТАЦІЯ",
    Title3Pl: "БАЗОВИЙ ПАКЕТ",
    Title4Pl: "БІЗНЕС-ПАКЕТ",

    Kons1Pl: "Попередня Консультація",
    Kons2Pl: "Аналіз Документів",
    Kons3Pl: "Попередні поради щодо легалізації перебування",
    Kons4Pl: "Інформація про необхідні документи",

    Rodz1Pl: "Консультації для всієї сім'ї",
    Rodz2Pl: "Допомога в підготовці та подачі заяв",
    Rodz3Pl: "Комплексне обслуговування документації для всіх членів сім'ї",
    Rodz4Pl: "Нотаріальні переклади документів",
    Rodz5Pl: "Представництво перед установами",
    Rodz6Pl: "Оновлення статусу заяв",

    Praca1Pl: "Легалізація перебування для професійних цілей",
    Praca2Pl: "Допомога в отриманні дозволів на роботу",
    Praca3Pl: "Допомога в підготовці документації",
    Praca4Pl: "Переклади професійних документів",
    Praca5Pl: "Поради щодо трудового права",
    Praca6Pl: "Представництво перед органами праці",

    Btn1Pl: "Контакт",
    Btn2Pl: "Контакт",
    Btn3Pl: "Контакт",
    Btn4Pl: "Контакт",

    //Sekcja: Czemy my?
    TytulWU: "ЧОМУ МИ?",
    PodTytulWU: "Чому варто обрати Relowave?",
    OpisWo: "Вибір відповідної компанії для легалізації перебування в Польщі є ключем до успіху. Ось кілька причин, чому Relowave є найкращим вибором:",
    List1Wu: "Професіоналізм і досвід",
    List2Wu: "Швидкість та ефективність",
    List3Wu: "Індивідуальний підхід",
    List4Wu: "Комплексні послуги",
    List5Wu: "Підтримка та консультації",

    //Kontakt
    TytulKo: "Наш офіс",
    TytulWi: "Напишіть нам",
    BtnWi: "Надіслати повідомлення",

    //footer
    Slogan: "Допомагаємо людям з 2022 року",
    StronaglownaFO: "Головна сторінка",
    OnasFO: "Про нас",
    UslugiFO: "Послуги",
    KontaktFO: "Контакт",
    SkontFO: "Зв'яжіться з нами",

  }
};

function updateTexts(language) {
  //nav
  document.getElementById('stronaglowna').innerText = languages[language].stronaglowna;
  document.getElementById('onas').innerText = languages[language].onas;
  document.getElementById('uslugi').innerText = languages[language].uslugi;
  document.getElementById('kontakt').innerText = languages[language].kontakt;
  //home
  document.getElementById('Tytul').innerText = languages[language].Tytul;
  document.getElementById('slogan').innerText = languages[language].slogan;
  document.getElementById('btnind').innerText = languages[language].btnind;
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
  document.getElementById('titleAU').innerText = languages[language].titleAU;
  document.getElementById('podtytulAU').innerText = languages[language].podtytulAU;
  document.getElementById('punkt1AU').innerText = languages[language].punkt1AU;
  document.getElementById('punkt2AU').innerText = languages[language].punkt2AU;
  document.getElementById('punkt3AU').innerText = languages[language].punkt2AU;
  document.getElementById('Opis1AU').innerText = languages[language].Opis1AU;
  document.getElementById('Opis2AU').innerText = languages[language].Opis2AU;
  document.getElementById('Opis3AU').innerText = languages[language].Opis3AU;
  document.getElementById('btnMore').innerText = languages[language].btnMore;
  //Opinie
  document.getElementById('OpinieT').innerText = languages[language].OpinieT;

  //Plany
  document.getElementById('TytulPl').innerText = languages[language].TytulPl;
  document.getElementById('PodTytulPl').innerText = languages[language].PodTytulPl;
  //Tytuły Planów
  document.getElementById('Title1Pl').innerText = languages[language].Title1Pl;
  document.getElementById('Title2Pl').innerText = languages[language].Title2Pl;
  document.getElementById('Title3Pl').innerText = languages[language].Title3Pl;
  //Opisy
  //Konsultacja
  document.getElementById('Kons1Pl').innerText = languages[language].Kons1Pl;
  document.getElementById('Kons2Pl').innerText = languages[language].Kons2Pl;
  document.getElementById('Kons3Pl').innerText = languages[language].Kons3Pl;
  document.getElementById('Kons4Pl').innerText = languages[language].Kons4Pl;
  //Pakiet Rodzinny
  document.getElementById('Rodz1Pl').innerText = languages[language].Rodz1Pl;
  document.getElementById('Rodz2Pl').innerText = languages[language].Rodz2Pl;
  document.getElementById('Rodz3Pl').innerText = languages[language].Rodz3Pl;
  document.getElementById('Rodz4Pl').innerText = languages[language].Rodz4Pl;
  document.getElementById('Rodz5Pl').innerText = languages[language].Rodz5Pl;
  document.getElementById('Rodz6Pl').innerText = languages[language].Rodz6Pl;
  //Praca
  document.getElementById('Praca1Pl').innerText = languages[language].Praca1Pl;
  document.getElementById('Praca2Pl').innerText = languages[language].Praca2Pl;
  document.getElementById('Praca3Pl').innerText = languages[language].Praca3Pl;
  document.getElementById('Praca4Pl').innerText = languages[language].Praca4Pl;
  document.getElementById('Praca5Pl').innerText = languages[language].Praca5Pl;
  document.getElementById('Praca6Pl').innerText = languages[language].Praca6Pl;
  //Btn
  document.getElementById('Btn1Pl').innerText = languages[language].Btn1Pl;
  document.getElementById('Btn2Pl').innerText = languages[language].Btn2Pl;
  document.getElementById('Btn3Pl').innerText = languages[language].Btn3Pl;
  document.getElementById('Btn4Pl').innerText = languages[language].Btn4Pl;
  //Kontakt
  document.getElementById('TytulKo').innerText = languages[language].TytulKo;
  //Napuisz do nas
  document.getElementById('TytulWi').innerText = languages[language].TytulWi;
  document.getElementById('BtnWi').innerText = languages[language].BtnWi;

  document.getElementById('Slogan').innerText = languages[language].Slogan;
  document.getElementById('StronaglownaFO').innerText = languages[language].StronaglownaFO;
  document.getElementById('OnasFO').innerText = languages[language].OnasFO;
  document.getElementById('UslugiFO').innerText = languages[language].UslugiFO;
  document.getElementById('KontaktFO').innerText = languages[language].KontaktFO;
  document.getElementById('SkontFO').innerText = languages[language].SkontFO;
  




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
  const langCode = intlLocale.language.toUpperCase().slice(0, 2); // Get the language code (e.g. "PL", "ENG", "UK")

  dropdownContent.innerHTML = "";
  const otherLocales = locales.filter((loc) => loc !== locale);
  otherLocales.forEach((otherLocale) => {
    const otherIntlLocale = new Intl.Locale(otherLocale);
    const otherLangCode = otherIntlLocale.language.toUpperCase().slice(0, 2);

    const listEl = document.createElement("li");
    listEl.innerHTML = `${otherLangCode} <img src="${getFlagSrc(otherIntlLocale.region)}" />`;
    listEl.value = otherLocale;
    listEl.addEventListener("mousedown", function () {
      setSelectedLocale(otherLocale);
      const selectedLanguage = languageMap[otherLocale];
      localStorage.setItem('preferredLanguage', selectedLanguage);
      updateTexts(selectedLanguage);
    });
    dropdownContent.appendChild(listEl);
  });

  dropdownBtn.innerHTML = `<img src="${getFlagSrc(intlLocale.region)}" /> ${langCode} <span class="arrow-down"></span>`;
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

