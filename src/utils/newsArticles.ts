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
  { title: 'Mazotos residents gather signatures against planned desalination plant', url: 'https://cyprus-mail.com/2026/10/20/mazotos-residents-gather-signatures-against-planned-desalination-plant', lang: 'en', source: 'Cyprus Mail', date: '2026-10-20', topic: 'desalination' },
  { title: 'Fire brigade responds to 78 calls in 24 hours, 13 flood related', url: 'https://cyprus-mail.com/2026/10/15/fire-brigade-responds-to-78-calls-in-24-hours-13-flood-related', lang: 'en', source: 'Cyprus Mail', date: '2026-10-15', topic: 'weather' },
  { title: 'Agriculture ministry allocates €200m to irrigation projects', url: 'https://cyprus-mail.com/2026/10/07/agriculture-ministry-allocates-e200m-to-irrigation-projects', lang: 'en', source: 'Cyprus Mail', date: '2026-10-07', topic: 'policy' },
  { title: 'Water levels higher at Larnaca and Famagusta reservoirs than last year', url: 'https://cyprus-mail.com/2026/10/02/water-levels-higher-at-larnaca-and-famagusta-reservoirs-than-last-year', lang: 'en', source: 'Cyprus Mail', date: '2026-10-02', topic: 'reservoirs' },
  { title: 'Farmers to get additional 3.5m cubic metres of water', url: 'https://cyprus-mail.com/2026/09/16/farmers-to-get-additional-3-5m-cubic-metres-of-water', lang: 'en', source: 'Cyprus Mail', date: '2026-09-16', topic: 'irrigation' },
  { title: 'Senekis: Four New Desalination Plants Under Way Across Cyprus', url: 'https://en.politis.com.cy/news/1032662/senekis-four-new-desalination-plants-under-way-across-cyprus', lang: 'en', source: 'Politis', date: '2026-09-13', topic: 'desalination' },
  { title: 'The Shared Water Project That Outlived Cyprus\'s Division', url: 'https://en.politis.com.cy/news/environment/1030241/the-shared-water-project-that-outlived-cypruss-division', lang: 'en', source: 'Politis', date: '2026-09-03', topic: 'policy' },

  // Greek
  { title: 'Αντιδράσεις στον Μαζωτό για τους σχεδιασμούς αφαλάτωσης – Ζητούν διαφάνεια και διαβούλευση', url: 'https://dialogos.com.cy/antidraseis-ston-mazoto-gia-toys-schediasmoys-afalatosis-zitoyn-diafaneia-kai-diavoyleysi/', lang: 'el', source: 'Dialogos', date: '2026-10-20', topic: 'desalination' },
  { title: 'Οργή αγροτών για τα €4,6 εκατ. για αντιμετώπιση της ξηρασίας - Αναξιοποίητη η πρόσθετη ευρωπαϊκή ενίσχυση, εκτός σχεδίου σημαντικοί κλάδοι', url: 'https://www.politis.com.cy/oikonomia/cyprus/1054224/aghrotikes-orghanwseis-diamartiria-ghia-tin-eniskhisi-ton-eur46-ekat-kai-ton-apokleismo-kladon', lang: 'el', source: 'Πολίτης', date: '2026-10-19', topic: 'policy' },
  { title: 'Στο 36,8% η πληρότητα των φραγμάτων', url: 'https://www.sigmalive.com/news/local/1333275/sto-368-i-plirotita-ton-fraghmaton', lang: 'el', source: 'Sigmalive', date: '2026-10-14', topic: 'reservoirs' },
  { title: 'Κύπρος: Έως 54% απώλεια μελλοντικού εισοδήματος από καύσωνες και ξηρασία', url: 'https://www.politis.com.cy/politis-news/oikonomia/1052268/kypros-eos-54-apwleia-mellontikou-eisodimatos-apo-kausones-kai-ksirasia', lang: 'el', source: 'Πολίτης', date: '2026-10-15', topic: 'weather' },
  { title: 'Τρίτη συνεχόμενη ημέρα βροχών: Πότε εκτιμά η Μετεωρολογική ότι θα αλλάξει το σκηνικό του καιρού', url: 'https://www.alphanews.live/cyprus/triti-synechomeni-imera-vrochon-pote-ektima-i-meteorologiki-oti-tha-allaxei-to-skiniko-tou-kairou/', lang: 'el', source: 'AlphaNews', date: '2026-10-16', topic: 'weather' },
  { title: 'Αγρότες: Ευρωπαϊκή βοήθεια €4,6 εκατ. μετά τις ζημιές από την ξηρασία', url: 'https://dialogos.com.cy/agrotes-eyropaiki-voitheia-e46-ekat-meta-tis-zimies-apo-tin-xirasia-ta-paroysiazei-os-kratiki-ypostirixi-o-christodoylidis/', lang: 'el', source: 'Dialogos', date: '2026-10-14', topic: 'policy' },
  { title: 'Φράγματα: Σχεδόν τριπλάσια αποθέματα σε σχέση με πέρσι', url: 'https://simerini.sigmalive.com/article/2026/10/8/phragmata-skhedon-triplasia-apothemata-se-skhese-me-persi/', lang: 'el', source: 'Σημερινή', date: '2026-10-08', topic: 'reservoirs' },
  { title: 'Με τέσσερις μονάδες αφαλάτωσης θα επιλυθεί το υδατικό, λέει ο Σενέκης', url: 'https://news.rik.cy/el/article/2026/9/14/me-tesseris-monades-aphalatoses-tha-epiluthei-to-udatiko-leei-o-senekes/', lang: 'el', source: 'ΡΙΚ', date: '2026-09-14', topic: 'desalination' },
  { title: 'Καλύτερη από πέρσι η εικόνα στα φράγματα Πάφου αλλά όχι εφησυχασμός, λέει το ΤΑΥ', url: 'https://cyprustimes.com/koinonia/kalyteri-apo-persi-i-eikona-sta-fragmata-pafou-alla-ochi-efisychasmos-leei-to-taf/', lang: 'el', source: 'Cyprus Times', date: '2026-09-09', topic: 'reservoirs' },
  { title: 'Ο Χρίστος Σενέκης στον «Π»: Περισσότερο νερό στους γεωργούς, υπό την προϋπόθεση ότι δεν τίθεται σε κίνδυνο η ύδρευση', url: 'https://www.politis.com.cy/cyprus/perivallon/1034164/o-xristos-senekis-ston-p-perissotero-nero-stoys-gheorghous-ipo-tin-proypothesi-oti-den-tithetai-se-kindino-i-ydrefsi', lang: 'el', source: 'Πολίτης', date: '2026-09-20', topic: 'irrigation' },

  // Russian
  { title: 'Сильные дожди на Кипре вызвали наводнения, перебои с электричеством и ограничения движения', url: 'https://cyprusbutterfly.com.cy/news/silnyie-dozhdi-kipre-vyizvali-navodneniya', lang: 'ru', source: 'Cyprus Butterfly', date: '2026-10-15', topic: 'weather' },
  { title: '14 и 15 октября на Кипр обрушатся ливни и сильные грозы', url: 'https://evropakipr.com/novosti/14-i-15-oktyabrya-na-kipr-obrushatsya-livni-i-silnye-grozy', lang: 'ru', source: 'Европа Кипр', date: '2026-10-13', topic: 'weather' },
  { title: 'Нестабильная погода и исторический шторм в августе принесли острову более чем тройной объем сезонных дождей', url: 'https://cyprusbutterfly.com.cy/news/leto-2026-goda-kipre-priznano', lang: 'ru', source: 'Cyprus Butterfly', date: '2026-09-09', topic: 'weather' },
];
