import type { Locale } from './locale';

export interface NewsArticle {
  title: string;
  url: string;
  lang: Locale;
  source: string;
}

export const newsArticles: NewsArticle[] = [
  // English
  { title: 'Cyprus dam levels remain low despite rainfall', url: 'https://cyprus-mail.com/2026/03/10/cyprus-dam-levels-remain-low-despite-rainfall', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Desalination plants supply 80% of Cyprus drinkable water', url: 'https://cyprus-mail.com/2026/03/10/desalination-plants-supply-80-per-cent-of-cyprus-drinkable-water', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Desalination covers about 80% of Cyprus water supply', url: 'https://en.sigmalive.com/desalination-covers-about-80-of-cyprus-water-supply/', lang: 'en', source: 'Sigmalive' },
  { title: 'Cyprus confronts a record drought as reservoirs run dry', url: 'https://smartwatermagazine.com/news/smart-water-magazine/cyprus-confronts-a-record-drought-reservoirs-run-dry', lang: 'en', source: 'Smart Water Magazine' },
  { title: 'Cyprus faces severe drought in 2026, citizens urged to cut water use', url: 'https://traveltomorrow.com/cyprus-faces-severe-drought-in-2026-citizens-urged-to-cut-water-use-by-two-minutes-daily/', lang: 'en', source: 'Travel Tomorrow' },
  { title: 'Severe drought in Cyprus, February 2026', url: 'https://www.copernicus.eu/en/media/image-day-gallery/severe-drought-cyprus-february-2026', lang: 'en', source: 'Copernicus' },
  { title: 'Cyprus deploys mobile desalination units from UAE', url: 'https://smartwatermagazine.com/news/smart-water-magazine/cyprus-deploys-mobile-desalination-units-uae-avert-water-crisis', lang: 'en', source: 'Smart Water Magazine' },
  { title: 'Cyprus to spend €196 million in 2026 to tackle water shortages', url: 'https://en.politis.com.cy/economy/economy-hot-spot/965677/cyprus-to-spend-eur196-million-in-2026-to-tackle-water-shortages', lang: 'en', source: 'Politis' },
  { title: 'Cyprus dam levels drop to 13.8% amid drought', url: 'https://en.sigmalive.com/cyprus-dam-levels-drop-to-13-8-amid-drought/', lang: 'en', source: 'Sigmalive' },
  { title: 'Cyprus water emergency: Citizens urged to reduce water use', url: 'https://www.euronews.com/green/2026/01/26/cyprus-water-emergency-citizens-urged-to-reduce-water-use-as-dams-reach-record-low', lang: 'en', source: 'Euronews' },

  // Russian
  { title: 'В водохранилищах Кипра скоро останется только грязь', url: 'https://evropakipr.com/istorii/v-vodohranilishchah-kipra-skoro-ostanetsya-tolko-gryaz', lang: 'ru', source: 'Европа Кипр' },
  { title: 'На Кипре — сезон дождей, но власти утверждают, что засуха продолжается', url: 'https://evropakipr.com/istorii/na-kipre-sezon-dozhdey-pochemu-vlasti-utverzhdayut-chto-na-ostrove-chetvertyy-god', lang: 'ru', source: 'Европа Кипр' },
  { title: 'Кипр на грани водного кризиса', url: 'https://vkcyprus.com/economics/88603-kipr-na-grani-vodnogo-krizisa/', lang: 'ru', source: 'Вестник Кипра' },
  { title: 'Засуха на Кипре: ситуация на февраль 2026', url: 'https://pogoda.mail.ru/news/69845557/', lang: 'ru', source: 'Погода Mail' },
  { title: 'Кипр не остался «без воды»', url: 'https://russiancyprus.news/news/society/cyprus-has-not-been-left-without-water/', lang: 'ru', source: 'Russian Cyprus' },
  { title: 'Всего 11% воды в водохранилищах Кипра — но правительство уверяет, что запасов хватит', url: 'https://lenta.cy/vsego-11-vody-v-vodohranilishhah-kipra-no-pravitelstvo-uverjaet-chto-zapasov-hvatit/', lang: 'ru', source: 'Lenta.cy' },
  { title: 'Кипр переживает худший водный кризис за десятилетие', url: 'https://cyprusbutterfly.com.cy/news/kipr-perezhivaet-xudshij-vodnyij-krizis', lang: 'ru', source: 'Cyprus Butterfly' },
  { title: 'Засуха накрыла Кипр. Жителей попросили включать воду только на две минуты в день', url: 'https://www.vokrugsveta.ru/news/zasukha-nakryla-kipr-zhitelei-poprosili-vklyuchat-vodu-tolko-na-dve-minuty-v-den-id6839742/', lang: 'ru', source: 'Вокруг Света' },

  // Greek
  { title: 'Αισιόδοξο το ΤΑΥ για εισροές στα φράγματα — «Σε καλύτερη μοίρα από πέρσι»', url: 'https://www.sigmalive.com/news/local/1306896/aisiodokso-to-tau-ghia-eisroes-sta-fraghmata-se-kalyteri-mira-apo-persi', lang: 'el', source: 'SigmaLive' },
  { title: 'Στο 21% η πληρότητα των φραγμάτων — «Ο Μάρτης μας χρωστάει βροχές»', url: 'https://www.sigmalive.com/news/local/1306083/sto-21-i-plirotita-ton-fraghmaton-symfona-me-to-tau', lang: 'el', source: 'SigmaLive' },
  { title: 'Δορυφορική εικόνα αποτυπώνει την τραγική κατάσταση των φραγμάτων στην Κύπρο', url: 'https://www.sigmalive.com/news/local/1304891/doriforiki-eikona-apotipwnei-tin-traghiki-katastasi-ton-fraghmaton-stin-kypro', lang: 'el', source: 'SigmaLive' },
  { title: 'Ο Μάρτης μας χρωστάει βροχές — Στο 21% η πληρότητα των φραγμάτων', url: 'https://cyprustimes.com/koinonia/o-martis-mas-chrostaei-vroches-sto-21-i-plirotita-ton-fragmaton/', lang: 'el', source: 'Cyprus Times' },
  { title: 'Επιτέλους νερό στα φράγματα, συνεχίζουν τα καιρικά φαινόμενα', url: 'https://www.alphanews.live/cyprus/epitelous-nero-sta-fragmata-synechizoun-ta-kairika-fainomena/', lang: 'el', source: 'AlphaNews' },
  { title: 'Που βρίσκεται η πληρότητα νερού στα φράγματα μέχρι στιγμής', url: 'https://www.alphanews.live/cyprus/pou-vrisketai-i-plirotita-nerou-sta-fragmata-mechri-stigmis/', lang: 'el', source: 'AlphaNews' },
  { title: 'Σημαντική εισροή νερού στα φράγματα – Πλησιάζει το 20% η συνολική πληρότητα', url: 'https://www.politis.com.cy/politis-news/cyprus/988448/simantiki-eisroi-nerou-sta-fraghmata-to-teleftaio-4imero-plisiazei-to-20-i-sinoliki-plirotita', lang: 'el', source: 'Politis' },
  { title: 'Σημαντική η συνολική εισροή νερού στα φράγματα — Ξεπέρασε τα 9 ΕΚΜ', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/simantiki-i-sinoliki-eisroi-nerou-sta-fragmata-to-telefteo-triimero-kseperase-ta-9-ekm-nerou/', lang: 'el', source: 'KitasWeather' },
  { title: 'Ανησυχία για το νερό στα φράγματα — «Κάτω της μέτριας η φετινή ροή»', url: 'https://dialogos.com.cy/anisychia-to-nero-sta-fragmatta-kato-tis-metrias-fetini-roi/', lang: 'el', source: 'Dialogos' },
  { title: 'Γιατί ενώ βρέχει δεν γεμίζουν τα φράγματα — Δεν αποκλείεται η σπορά νεφών', url: 'https://www.sigmalive.com/news/all/1304121/giati-enw-vrekhei-den-ghemizoyn-ta-fraghmata-den-apoklietai-i-spora-nefwn', lang: 'el', source: 'SigmaLive' },
  { title: 'Στέρεψαν τα φράγματα, εφιαλτικό προμηνύεται το 2026', url: 'https://www.alphanews.live/cyprus/sterepsan-ta-fragmata-efialtiko-prominyetai-to-2026/', lang: 'el', source: 'AlphaNews' },
];
