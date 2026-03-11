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
  { title: 'Cyprus confronts a record drought as reservoirs run dry', url: 'https://smartwatermagazine.com/news/smart-water-magazine/cyprus-confronts-a-record-drought-reservoirs-run-dry', lang: 'en', source: 'Smart Water Magazine' },
  { title: 'Cyprus faces severe drought in 2026, citizens urged to cut water use', url: 'https://traveltomorrow.com/cyprus-faces-severe-drought-in-2026-citizens-urged-to-cut-water-use-by-two-minutes-daily/', lang: 'en', source: 'Travel Tomorrow' },
  { title: 'Severe drought in Cyprus, February 2026', url: 'https://www.copernicus.eu/en/media/image-day-gallery/severe-drought-cyprus-february-2026', lang: 'en', source: 'Copernicus' },
  { title: 'Cyprus deploys mobile desalination units from UAE', url: 'https://smartwatermagazine.com/news/smart-water-magazine/cyprus-deploys-mobile-desalination-units-uae-avert-water-crisis', lang: 'en', source: 'Smart Water Magazine' },
  { title: 'Cyprus to spend €196 million in 2026 to tackle water shortages', url: 'https://en.politis.com.cy/economy/economy-hot-spot/965677/cyprus-to-spend-eur196-million-in-2026-to-tackle-water-shortages', lang: 'en', source: 'Politis' },
  { title: 'Cyprus dam levels drop to 13.8% amid drought', url: 'https://en.sigmalive.com/cyprus-dam-levels-drop-to-13-8-amid-drought/', lang: 'en', source: 'Sigmalive' },
  { title: 'Cyprus warns of possible summer water cuts as reserves fall', url: 'https://famagusta-gazette.com/cyprus-warns-of-possible-summer-water-cuts-as-reserves-fall/', lang: 'en', source: 'Famagusta Gazette' },
  { title: 'Cyprus drought pushes Kouris reservoir to historic low', url: 'https://www.muser.press/2026/02/25/cyprus-drought-kouris-historic-low/', lang: 'en', source: 'Muser Press' },
  { title: 'Cyprus water emergency: Citizens urged to reduce water use', url: 'https://www.euronews.com/green/2026/01/26/cyprus-water-emergency-citizens-urged-to-reduce-water-use-as-dams-reach-record-low', lang: 'en', source: 'Euronews' },

  // Russian
  { title: 'В водохранилищах Кипра скоро останется только грязь', url: 'https://evropakipr.com/istorii/v-vodohranilishchah-kipra-skoro-ostanetsya-tolko-gryaz', lang: 'ru', source: 'Европа Кипр' },
  { title: 'На Кипре — сезон дождей, но власти утверждают, что засуха продолжается', url: 'https://evropakipr.com/istorii/na-kipre-sezon-dozhdey-pochemu-vlasti-utverzhdayut-chto-na-ostrove-chetvertyy-god', lang: 'ru', source: 'Европа Кипр' },
  { title: 'Кипр на грани засухи', url: 'https://vkcyprus.com/cyprus/1467412346435-kipr-na-grani-zasuhi/', lang: 'ru', source: 'Вестник Кипра' },
  { title: 'Засуха на Кипре: ситуация на февраль 2026', url: 'https://pogoda.mail.ru/news/69845557/', lang: 'ru', source: 'Погода Mail' },
  { title: 'Кипр не остался «без воды»', url: 'https://russiancyprus.news/news/society/cyprus-has-not-been-left-without-water/', lang: 'ru', source: 'Russian Cyprus' },
  { title: 'Всего 11% воды в водохранилищах Кипра — но правительство уверяет, что запасов хватит', url: 'https://lenta.cy/vsego-11-vody-v-vodohranilishhah-kipra-no-pravitelstvo-uverjaet-chto-zapasov-hvatit/', lang: 'ru', source: 'Lenta.cy' },
  { title: 'Кипр переживает худший водный кризис за десятилетие', url: 'https://cyprusbutterfly.com.cy/news/kipr-perezhivaet-xudshij-vodnyij-krizis', lang: 'ru', source: 'Cyprus Butterfly' },
  { title: 'Засуха накрыла Кипр. Жителей попросили включать воду только на две минуты в день', url: 'https://www.vokrugsveta.ru/news/zasukha-nakryla-kipr-zhitelei-poprosili-vklyuchat-vodu-tolko-na-dve-minuty-v-den-id6839742/', lang: 'ru', source: 'Вокруг Света' },

  // Greek
  { title: 'Ο Μάρτης μας χρωστάει βροχές — Στο 21% η πληρότητα των φραγμάτων', url: 'https://cyprustimes.com/koinonia/o-martis-mas-chrostaei-vroches-sto-21-i-plirotita-ton-fragmaton/', lang: 'el', source: 'Cyprus Times' },
  { title: 'Που βρίσκεται η πληρότητα νερού στα φράγματα μέχρι στιγμής', url: 'https://www.alphanews.live/cyprus/pou-vrisketai-i-plirotita-nerou-sta-fragmata-mechri-stigmis/', lang: 'el', source: 'AlphaNews' },
  { title: 'Αυξήθηκε σχεδόν στο 20% η πληρότητα στα φράγματα — Ευεργετικές οι τελευταίες βροχές', url: 'https://nomisma.com.cy/cyprus/random/%CE%B1%CF%85%CE%BE%CE%AE%CE%B8%CE%B7%CE%BA%CE%B5-%CF%83%CF%87%CE%B5%CE%B4%CF%8C%CE%BD-%CF%83%CF%84%CE%BF-20-%CE%B7-%CF%80%CE%BB%CE%B7%CF%81%CF%8C%CF%84%CE%B7%CF%84%CE%B1-%CF%83%CF%84%CE%B1-%CF%86/', lang: 'el', source: 'Nomisma' },
  { title: 'Σημαντική εισροή νερού στα φράγματα – Πλησιάζει το 20% η συνολική πληρότητα', url: 'https://www.politis.com.cy/politis-news/cyprus/988448/simantiki-eisroi-nerou-sta-fraghmata-to-teleftaio-4imero-plisiazei-to-20-i-sinoliki-plirotita', lang: 'el', source: 'Politis' },
  { title: 'Σημαντική η συνολική εισροή νερού στα φράγματα — Ξεπέρασε τα 9 ΕΚΜ', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/simantiki-i-sinoliki-eisroi-nerou-sta-fragmata-to-telefteo-triimero-kseperase-ta-9-ekm-nerou/', lang: 'el', source: 'KitasWeather' },
  { title: 'Ανησυχία για το νερό στα φράγματα — «Κάτω της μέτριας η φετινή ροή»', url: 'https://dialogos.com.cy/anisychia-to-nero-sta-fragmatta-kato-tis-metrias-fetini-roi/', lang: 'el', source: 'Dialogos' },
  { title: 'Γιατί ενώ βρέχει δεν γεμίζουν τα φράγματα — Δεν αποκλείεται η σπορά νεφών', url: 'https://www.sigmalive.com/news/all/1304121/giati-enw-vrekhei-den-ghemizoyn-ta-fraghmata-den-apoklietai-i-spora-nefwn', lang: 'el', source: 'SigmaLive' },
  { title: 'Στέρεψαν τα φράγματα, εφιαλτικό προμηνύεται το 2026', url: 'https://www.alphanews.live/cyprus/sterepsan-ta-fragmata-efialtiko-prominyetai-to-2026/', lang: 'el', source: 'AlphaNews' },
  { title: 'Η Κύπρος στερεύει: SOS για τα φράγματα με πληρότητα στο 11%', url: 'https://www.energymag.gr/periballon/113425_i-kypros-stereyei-sos-gia-ta-fragmata-me-plirotita-sto-11', lang: 'el', source: 'EnergyMag' },
];
