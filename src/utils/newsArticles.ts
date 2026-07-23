import type { Locale } from './locale';

export interface NewsArticle {
  title: string;
  url: string;
  lang: Locale;
  source: string;
}

export const newsArticles: NewsArticle[] = [
  // English
  { title: 'Cyprus targets full reliance upon desalination plants by next year', url: 'https://cyprus-mail.com/2026/06/29/cyprus-targets-full-reliance-upon-desalination-plants-by-next-year', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Government investing €168m to tackle water shortage, minister says', url: 'https://cyprus-mail.com/2026/07/05/government-investing-e168m-to-tackle-water-shortage-minister-says', lang: 'en', source: 'Cyprus Mail' },
  { title: 'MPs warn water crisis threatens future of farming', url: 'https://cyprus-mail.com/2026/06/30/mps-warn-water-crisis-threatens-future-of-farming', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Farmers demand more irrigation water', url: 'https://cyprus-mail.com/2026/06/23/farmers-demand-more-irrigation-water', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Integrating energy and water planning', url: 'https://cyprus-mail.com/2026/06/20/integrating-energy-and-water-planning', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Cyprus dam levels double compared to last year, WDD official', url: 'https://www.parikiaki.com/2026/06/cyprus-dam-levels-double-compared-to-last-year-wdd-official', lang: 'en', source: 'Parikiaki' },
  { title: 'WDD to distribute water-saving equipment from June 2026', url: 'https://dialogos.com.cy/tay-stadiaki-diathesi-exoplismoy-exoikonomisis-neroy-apo-ton-ioynio-2026/', lang: 'en', source: 'Dialogos' },
  { title: 'Cabinet approves 3.5 million cubic metres of additional water supply', url: 'https://cyprus-mail.com/2026/06/09/cabinet-approves-3-5-million-cubic-metres-of-additional-water-supply', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Dam levels almost double those of last year', url: 'https://cyprus-mail.com/2026/06/02/dam-levels-almost-double-those-of-last-year', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Cyprus has recorded the highest May inflow of water into its dams in four decades', url: 'https://famagusta-gazette.com/cyprus-has-recorded-the-highest-may-inflow-of-water-into-its-dams-in-four-decades/', lang: 'en', source: 'Famagusta Gazette' },
  // Russian
  { title: 'Сельхозорганизации Кипра требуют увеличить объёмы воды для орошения сезонных культур', url: 'https://ruscyprus.com/news/selskohozyaystvennye-organizacii-kipra/59528', lang: 'ru', source: 'RusCyprus' },
  { title: 'Уровень воды в дамбах Кипра вырос до 42,4% — почти вдвое больше прошлогоднего', url: 'https://ruscyprus.com/news/uroven-vody-v-dambah-kipra-vyros-do-42-4-na/58033', lang: 'ru', source: 'RusCyprus' },
  { title: 'Плотины Кипра заполнены на 39,6% при запасе 115,2 млн кубометров', url: 'https://ruscyprus.com/news/plotiny-kipra-zapolneny-na-39-6-pri-zapase/55998', lang: 'ru', source: 'RusCyprus' },
  { title: 'На Кипре перелилась дамба Визакья, которая в декабре была пустой', url: 'https://ruscyprus.com/news/na-kipre-perelilas-damba-vizakya-kotoraya-v/55551', lang: 'ru', source: 'RusCyprus' },
  { title: 'За зиму водохранилища Кипра выросли почти вчетверо: с 9,6% до 38%', url: 'https://lenta.cy/za-zimu-vodohranilishha-kipra-vyrosli-pochti-vchetvero-s-9-6-do-38/', lang: 'ru', source: 'Lenta.cy' },
  { title: 'Уровень воды в водохранилищах Кипра приближается к 100 млн кубометров', url: 'https://ruscyprus.com/news/uroven-vody-v-vodohranilishchah-kipra/54512', lang: 'ru', source: 'RusCyprus' },
  { title: 'На Кипре резко вырос приток воды после циклона Erminio', url: 'https://ruscyprus.com/news/na-kipre-rezko-vyros-pritok-vody-v/54445', lang: 'ru', source: 'RusCyprus' },
  { title: 'Приток воды в дамбы Кипра — рекордный за 30 лет!', url: 'https://evropakipr.com/novosti/pritok-vody-v-damby-kipra-rekordnyy-za-30-let', lang: 'ru', source: 'Европа Кипр' },
  { title: 'Третья дамба переполнилась в Пафосе', url: 'https://lenta.cy/tretja-damba-perepolnilas-v-pafose/', lang: 'ru', source: 'Lenta.cy' },
  { title: 'Март 2026 года стал одним из самых дождливых за всю историю Кипра', url: 'https://ruscyprus.com/news/mart-2026-goda-stal-odnim-iz-samyh/54612', lang: 'ru', source: 'RusCyprus' },

  // Greek
  { title: 'Μετρήσεις βροχόπτωσης τελευταίου 3ημέρου - Πληρότητα φραγμάτων (20/7)', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/metriseis-vroxoptosis-telefteou-triimerou-plirotita-fragmaton-20-7/', lang: 'el', source: 'KitasWeather' },
  { title: 'Τελευταίες βροχές: Μικρή συνεισφορά στα φράγματα, όμως «στρώνουν χαλί» για πρώιμες μεγάλες εισροές', url: 'https://www.politis.com.cy/politis-news/cyprus/1018398/teleftaies-vrokhes-mikri-sineisfora-sta-fraghmata-omos-strwnoyn-khali-ghia-prwimes-meghales-eisroes', lang: 'el', source: 'Πολίτης' },
  { title: 'Μετρήσεις βροχόπτωσης τελευταίου 24ώρου - Πληρότητα φραγμάτων (09-07-2026)', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/metriseis-vroxoptosis-telefteou-24orou-plirotita-fragmaton-9-7-2026/', lang: 'el', source: 'KitasWeather' },
  { title: 'Σήμα κινδύνου από αγροτικές οργανώσεις για το νερό άρδευσης', url: 'https://dialogos.com.cy/sima-kindynoy-apo-agrotikes-organoseis-gia-to-nero-ardeysis-stin-kypro/', lang: 'el', source: 'Διάλογος' },
  { title: 'ΤΑΥ: Σταδιακή διάθεση εξοπλισμού εξοικονόμησης νερού από τον Ιούνιο 2026', url: 'https://dialogos.com.cy/tay-stadiaki-diathesi-exoplismoy-exoikonomisis-neroy-apo-ton-ioynio-2026/', lang: 'el', source: 'Διάλογος' },
  { title: 'Καλοκαίρι-καμίνι: θερμό καλοκαίρι για Κύπρο, βροχές αναμένονται από Σεπτέμβριο', url: 'https://www.politis.com.cy/politis-news/cyprus/1013524/kalokairi-kamini-provlepoyn-ta-efropaika-kentra-ghia-tin-kypro-omos-sto-vathos-vrokhes-apo-ton-septemvrio', lang: 'el', source: 'Πολίτης' },
  { title: 'Μετρήσεις βροχόπτωσης 15/06 — Πληρότητα φραγμάτων', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/metriseis-vroxoptosis-telefteou-triimerou-plirotita-fragmaton-15-6/', lang: 'el', source: 'KitasWeather' },
  { title: 'ΤΑΥ: Στο 42,4% η πληρότητα των φραγμάτων — Διπλάσια από πέρυσι', url: 'https://www.offsite.com.cy/eidiseis/koinonia/tay-sto-424-i-plirotita-ton-fragmaton-diplasia-apo-perysi', lang: 'el', source: 'Offsite' },
  { title: 'Ρεκόρ εισροής νερού στα φράγματα το τελευταίο τριήμερο', url: 'https://www.alphanews.live/cyprus/rekor-eisrois-nerou-sta-fragmata-to-teleftaio-triimero/', lang: 'el', source: 'AlphaNews' },
  { title: 'Ρεκόρ συνολικών εισροών νερού τον φετινό Μάιο στα φράγματα', url: 'https://www.politis.com.cy/politis-news/cyprus/1005944/rekor-sinolikwn-eisrown-nerou-ghia-mina-maio-sta-fraghmata-sinekhizei-i-auksisi-sinolikis-plirotitas', lang: 'el', source: 'Πολίτης' },
];
