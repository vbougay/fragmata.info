import type { Locale } from './locale';

export const NEWS_TOPICS = ['reservoirs', 'desalination', 'irrigation', 'policy', 'weather'] as const;
export type NewsTopic = (typeof NEWS_TOPICS)[number];

export interface NewsArticle {
  title: string;
  url: string;
  lang: Locale;
  source: string;
  /** Publication date, YYYY-MM-DD, as stated on the article page. */
  date: string;
  /** reservoirs = levels/inflows, desalination = plants/supply, irrigation = farming water,
   *  policy = government plans/funding, weather = rain/climate. */
  topic: NewsTopic;
}

export const newsArticles: NewsArticle[] = [
  // English
  { title: 'Agriculture ministry allocates €200m to irrigation projects', url: 'https://cyprus-mail.com/2026/10/07/agriculture-ministry-allocates-e200m-to-irrigation-projects', lang: 'en', source: 'Cyprus Mail', date: '2026-10-07', topic: 'policy' },
  { title: 'Water levels higher at Larnaca and Famagusta reservoirs than last year', url: 'https://cyprus-mail.com/2026/10/02/water-levels-higher-at-larnaca-and-famagusta-reservoirs-than-last-year', lang: 'en', source: 'Cyprus Mail', date: '2026-10-02', topic: 'reservoirs' },
  { title: 'Senekis: Four New Desalination Plants Under Way Across Cyprus', url: 'https://en.politis.com.cy/news/1032662/senekis-four-new-desalination-plants-under-way-across-cyprus', lang: 'en', source: 'Politis', date: '2026-09-13', topic: 'desalination' },
  { title: 'Farmers to get additional 3.5m cubic metres of water', url: 'https://cyprus-mail.com/2026/09/16/farmers-to-get-additional-3-5m-cubic-metres-of-water', lang: 'en', source: 'Cyprus Mail', date: '2026-09-16', topic: 'irrigation' },
  { title: 'The Shared Water Project That Outlived Cyprus\'s Division', url: 'https://en.politis.com.cy/news/environment/1030241/the-shared-water-project-that-outlived-cypruss-division', lang: 'en', source: 'Politis', date: '2026-09-03', topic: 'policy' },
  { title: 'Mazotos Residents Oppose Desalination Plant on Larnaca Coast', url: 'https://en.politis.com.cy/news/environment/1026889/mazotos-residents-oppose-desalination-plant-on-larnaca-coast', lang: 'en', source: 'Politis', date: '2026-08-18', topic: 'desalination' },

  // Greek
  { title: 'Φράγματα: Σχεδόν τριπλάσια αποθέματα σε σχέση με πέρσι', url: 'https://simerini.sigmalive.com/article/2026/10/8/phragmata-skhedon-triplasia-apothemata-se-skhese-me-persi/', lang: 'el', source: 'Σημερινή', date: '2026-10-08', topic: 'reservoirs' },
  { title: 'Κύπρος: Έως 54% απώλεια μελλοντικού εισοδήματος από καύσωνες και ξηρασία', url: 'https://www.politis.com.cy/politis-news/oikonomia/1052268/kypros-eos-54-apwleia-mellontikou-eisodimatos-apo-kausones-kai-ksirasia', lang: 'el', source: 'Πολίτης', date: '2026-10-15', topic: 'weather' },
  { title: 'Μεγάλες διαφορές στην πληρότητα των φραγμάτων: Ποιο είναι γεμάτο 100% και ποιο μόλις στο 8,3%', url: 'https://www.politis.com.cy/cyprus/perivallon/1048813/sto-356-i-plirotita-ton-fraghmaton-simantika-auksimena-ta-apothemata-se-skhesi-me-persi', lang: 'el', source: 'Πολίτης', date: '2026-10-08', topic: 'reservoirs' },
  { title: 'Με τέσσερις μονάδες αφαλάτωσης θα επιλυθεί το υδατικό, λέει ο Σενέκης', url: 'https://news.rik.cy/el/article/2026/9/14/me-tesseris-monades-aphalatoses-tha-epiluthei-to-udatiko-leei-o-senekes/', lang: 'el', source: 'ΡΙΚ', date: '2026-09-14', topic: 'desalination' },
  { title: 'Ο Χρίστος Σενέκης στον «Π»: Περισσότερο νερό στους γεωργούς, υπό την προϋπόθεση ότι δεν τίθεται σε κίνδυνο η ύδρευση', url: 'https://www.politis.com.cy/cyprus/perivallon/1034164/o-xristos-senekis-ston-p-perissotero-nero-stoys-gheorghous-ipo-tin-proypothesi-oti-den-tithetai-se-kindino-i-ydrefsi', lang: 'el', source: 'Πολίτης', date: '2026-09-20', topic: 'irrigation' },
  { title: 'Καμπανάκι για το νερό: Τα φράγματα στο 39% και ο κίνδυνος για το 2027-2028', url: 'https://dialogos.com.cy/kampanaki-gia-to-nero-ta-fragmata-sto-39-kai-o-kindynos-gia-to-2027-2028/', lang: 'el', source: 'Dialogos', date: '2026-08-18', topic: 'policy' },

  // Russian
  { title: 'Сильные дожди на Кипре вызвали наводнения, перебои с электричеством и ограничения движения', url: 'https://ruscyprus.com/news/silnye-dozhdi-na-kipre-vyzvali-navodneniya/63395', lang: 'ru', source: 'RusCyprus', date: '2026-10-15', topic: 'weather' },
  { title: 'Водохранилища Кипра 2026 - от худшего старта со времён танкеров до девяти переливов', url: 'https://ruscyprus.com/news/vodohranilishcha-kipra-2026-ot-hudshego/63306', lang: 'ru', source: 'RusCyprus', date: '2026-10-06', topic: 'reservoirs' },
  { title: 'Фермеры долины Хрисохус планируют акцию протеста из-за перебоев с орошением', url: 'https://www.kiprinform.com/news/fermery-doliny-hrisohus-planiruyut-akciyu-protesta-iz-za-pereboev-s-orosheniem/', lang: 'ru', source: 'Cyprus Inform', date: '2026-09-06', topic: 'irrigation' },
  { title: 'Кипр готовится жить без дождей: на острове построят еще три опреснительные установки', url: 'https://ruscyprus.com/news/kipr-gotovitsya-zhit-bez-dozhdey-na-ostrove/62981', lang: 'ru', source: 'RusCyprus', date: '2026-09-03', topic: 'desalination' },
  { title: 'Кипр получил от ОАЭ мобильные опреснительные установки для увеличения водоснабжения', url: 'https://www.kiprinform.com/news/kipr-poluchil-ot-oae-mobilnye-opresnitelnye-ustanovki-dlya-uvelicheniya-vodosnabzheniya/', lang: 'ru', source: 'Cyprus Inform', date: '2026-08-20', topic: 'desalination' },
];
