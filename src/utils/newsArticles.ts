import type { Locale } from './locale';

export interface NewsArticle {
  title: string;
  url: string;
  lang: Locale;
  source: string;
}

export const newsArticles: NewsArticle[] = [
  // English
  { title: 'Water reserves in Cyprus improve after April inflows', url: 'https://en.sigmalive.com/water-reserves-in-cyprus-improve-after-april-inflows/', lang: 'en', source: 'Sigmalive' },
  { title: 'April 2026 reaches exceptional rainfall levels — over 170% of monthly average', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/se-epipeda-ekseritikis-poliomvrias-perase-o-aprilios-kseperase-to-170-tis-ekato-i-mesi-vroxoptosi-apriliou/', lang: 'en', source: 'KitasWeather' },
  { title: 'Water scarcity in Cyprus: how can we effectively manage the crisis?', url: 'https://cyprus-mail.com/2026/04/22/water-scarcity-in-cyprus-how-can-we-effectively-manage-the-crisis', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Dam capacity reaches 38%, up from last year', url: 'https://cyprus-mail.com/2026/04/20/dam-capacity-reaches-38-up-from-last-year', lang: 'en', source: 'Cyprus Mail' },
  { title: '2+ MCM water inflow in three days, fullness approaching 40%', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-ta-2-ekm-oi-eisroes-nerou-to-telefteo-triimero-plisiazei-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/', lang: 'en', source: 'KitasWeather' },
  { title: 'Dam levels improve but water caution urged', url: 'https://cyprus-mail.com/2026/04/06/dam-levels-improve-but-water-caution-urged', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Tamassos Dam overflows as reservoir levels reach 32.2% across Cyprus', url: 'https://en.politis.com.cy/economy/economy-hot-spot/996009/tamassos-dam-overflows-as-reservoir-levels-reach-322-across-cyprus', lang: 'en', source: 'Politis' },
  { title: "Amount of water in Cyprus' reservoirs nears 100m cubic metres", url: 'https://cyprus-mail.com/2026/04/02/amount-of-water-in-cyprus-reservoirs-nears-100m-cubic-metres', lang: 'en', source: 'Cyprus Mail' },
  { title: 'EUR 230m projects to boost Cyprus water resilience', url: 'https://cyprus-mail.com/2026/03/31/e230m-projects-to-boost-cyprus-water-resilience', lang: 'en', source: 'Cyprus Mail' },
  { title: 'One more Paphos dam overflows', url: 'https://cyprus-mail.com/2026/03/28/one-more-paphos-dam-overflows', lang: 'en', source: 'Cyprus Mail' },

  // Russian
  { title: 'На Кипре перелилась дамба Визакья, которая в декабре была пустой', url: 'https://ruscyprus.com/news/na-kipre-perelilas-damba-vizakya-kotoraya-v/55551', lang: 'ru', source: 'RusCyprus' },
  { title: 'За зиму водохранилища Кипра выросли почти вчетверо: с 9,6% до 38%', url: 'https://lenta.cy/za-zimu-vodohranilishha-kipra-vyrosli-pochti-vchetvero-s-9-6-do-38/', lang: 'ru', source: 'Lenta.cy' },
  { title: 'Водохранилища Кипра заполнились до 37,9% после недавних дождей', url: 'https://ruscyprus.com/news/vodohranilishcha-kipra-zapolnilis-do-37-9/55028', lang: 'ru', source: 'RusCyprus' },
  { title: 'Уровень воды в водохранилищах Кипра приближается к 100 млн кубометров', url: 'https://ruscyprus.com/news/uroven-vody-v-vodohranilishchah-kipra/54512', lang: 'ru', source: 'RusCyprus' },
  { title: 'На Кипре резко вырос приток воды после циклона Erminio', url: 'https://ruscyprus.com/news/na-kipre-rezko-vyros-pritok-vody-v/54445', lang: 'ru', source: 'RusCyprus' },
  { title: 'Приток воды в дамбы Кипра — рекордный за 30 лет!', url: 'https://evropakipr.com/novosti/pritok-vody-v-damby-kipra-rekordnyy-za-30-let', lang: 'ru', source: 'Европа Кипр' },
  { title: 'Третья дамба переполнилась в Пафосе', url: 'https://lenta.cy/tretja-damba-perepolnilas-v-pafose/', lang: 'ru', source: 'Lenta.cy' },
  { title: 'Дожди победили засуху', url: 'https://vkcyprus.com/cyprus/1467412357679-dozhdi-pobedili-zasuhu/', lang: 'ru', source: 'Вестник Кипра' },
  { title: 'Март 2026 года стал одним из самых дождливых за всю историю Кипра', url: 'https://ruscyprus.com/news/mart-2026-goda-stal-odnim-iz-samyh/54612', lang: 'ru', source: 'RusCyprus' },
  { title: 'На Кипре — сезон дождей, но власти утверждают, что засуха продолжается', url: 'https://evropakipr.com/istorii/na-kipre-sezon-dozhdey-pochemu-vlasti-utverzhdayut-chto-na-ostrove-chetvertyy-god', lang: 'ru', source: 'Европа Кипр' },

  // Greek
  { title: 'Συνεχίζει να αυξάνεται η πληρότητα φραγμάτων — Υπερχείλισε το φράγμα Βυζακιάς', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/sinexizei-na-afksanete-i-sinoliki-plirotita-fragmaton-iperxeilise-to-fragma-vyzakias/', lang: 'el', source: 'KitasWeather' },
  { title: 'Σε επίπεδα εξαιρετικής πολυομβρίας πέρασε ο Απρίλιος 2026 — πάνω από 170% μέσης βροχόπτωσης', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/se-epipeda-ekseritikis-poliomvrias-perase-o-aprilios-kseperase-to-170-tis-ekato-i-mesi-vroxoptosi-apriliou/', lang: 'el', source: 'KitasWeather' },
  { title: 'Εισροές νερού άνω των 2 ΕΚΜ το τελευταίο τριήμερο — πλησιάζει 40% η πληρότητα', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-ta-2-ekm-oi-eisroes-nerou-to-telefteo-triimero-plisiazei-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/', lang: 'el', source: 'KitasWeather' },
  { title: 'Ξεπέρασαν τα 100 ΕΚΜ τα αποθέματα — συνεχίζουν εισροές Απριλίου', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-ta-100-ekm-ta-sinolika-apothemata-nerou-sta-fragmata-sinexizoun-simantikes-eisroes-gia-mina-aprilio/', lang: 'el', source: 'KitasWeather' },
  { title: 'Σημαντικές εισροές νερού στα φράγματα', url: 'https://news.rik.cy/article/2026/4/2/semantikes-eisroes-nerou-sta-phragmata/', lang: 'el', source: 'RIK' },
  { title: 'Ξεπέρασε το 1 ΕΚΜ η εισροή — Υπερχείλισε το φράγμα Ταμασού', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-1-ekm-i-sinoliki-eisroi-nerou-sta-fragmata-iperxilise-to-fragma-tis-tamasou/', lang: 'el', source: 'KitasWeather' },
  { title: 'Ξεπέρασε το 30% η πληρότητα φραγμάτων — 3ος καλύτερος Μάρτιος από το 1988', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-30-tis-ekato-i-sinoliki-plirotita-fragmaton-3os-kaliteros-martios-se-thema-eisroon-apo-to-1988/', lang: 'el', source: 'KitasWeather' },
  { title: 'Ρεκόρ εισροής νερού στα φράγματα το τελευταίο τριήμερο', url: 'https://www.alphanews.live/cyprus/rekor-eisrois-nerou-sta-fragmata-to-teleftaio-triimero/', lang: 'el', source: 'AlphaNews' },
  { title: '«Ξεχείλισε» και το φράγμα της Αγίας Μαρίνας Χρυσοχούς — Το τρίτο στην περιοχή', url: 'https://new.cyprusnews.eu/tothemaonline/xecheilise-kai-to-fragma-tis-agias-marinas-chrysochous-to-trito-stin-periochi-pou-ftanei-sto-100/', lang: 'el', source: 'CyprusNews' },
  { title: 'Πληρότητα φραγμάτων πλησιάζει 37% — πάνω από 4 ΕΚΜ εισροές το τελευταίο 5ήμερο', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-ta-4-ekm-oi-sinolikes-eisroes-nerou-to-telefteo-5imero-plisiazei-to-37-tis-ekato-i-sinoliki-plirotita-fragmaton/', lang: 'el', source: 'KitasWeather' },
];
