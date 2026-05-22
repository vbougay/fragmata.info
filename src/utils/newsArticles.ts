import type { Locale } from './locale';

export interface NewsArticle {
  title: string;
  url: string;
  lang: Locale;
  source: string;
}

export const newsArticles: NewsArticle[] = [
  // English
  { title: 'Dams record best May inflows since 1987', url: 'https://cyprus-mail.com/2026/05/21/dams-record-best-may-inflows-since-1987', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Cyprus has recorded the highest May inflow of water into its dams in four decades', url: 'https://famagusta-gazette.com/cyprus-has-recorded-the-highest-may-inflow-of-water-into-its-dams-in-four-decades/', lang: 'en', source: 'Famagusta Gazette' },
  { title: 'Significant May inflows continue — dam fullness exceeds 41%', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/sinexizoun-simantikes-eisroes-gia-mina-maio-kseperase-to-41-tis-ekato-i-sinoliki-plirotita-fragmaton/', lang: 'en', source: 'KitasWeather' },
  { title: 'May precipitation exceeds 160% of average — dam inflows continue', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-160-tis-ekato-i-mesi-vroxoptosi-tou-mina-apotimisi-tis-diataraxis-maiou-kai-sinolika-ipsi-vroxis/', lang: 'en', source: 'KitasWeather' },
  { title: 'Elevated May inflows continue — nearly 1 MCM in 24 hours', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/sinexizoun-afksimenes-eisroes-nerou-gia-mina-maio-plisiasan-to-1-ekm-to-telefteo-24oro/', lang: 'en', source: 'KitasWeather' },
  { title: 'Record 24-hour inflow for May — dam fullness crosses 40%', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/rekor-24oris-sinolikis-eisrois-nerou-sta-fragmata-gia-mina-maio-kseperase-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/', lang: 'en', source: 'KitasWeather' },
  { title: 'Dams at 39.6 per cent capacity', url: 'https://cyprus-mail.com/2026/05/04/dams-at-39-6-per-cent-capacity', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Over 1.3 MCM inflow in 3 days — dam fullness to exceed 40%', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-to-13ekm-oi-eisroes-nerou-to-telefteo-triimero-tha-kseperasei-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/', lang: 'en', source: 'KitasWeather' },
  { title: 'Water reserves in Cyprus improve after April inflows', url: 'https://en.sigmalive.com/water-reserves-in-cyprus-improve-after-april-inflows/', lang: 'en', source: 'Sigmalive' },
  { title: 'April precipitation exceeded 183% of average — dam fullness at 39.1%', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-180-tis-ekato-i-mesi-vroxoptosi-apriliou-sinoliki-plirotita-fragmaton/', lang: 'en', source: 'KitasWeather' },
  { title: 'Water scarcity in Cyprus: how can we effectively manage the crisis?', url: 'https://cyprus-mail.com/2026/04/22/water-scarcity-in-cyprus-how-can-we-effectively-manage-the-crisis', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Dam capacity reaches 38%, up from last year', url: 'https://cyprus-mail.com/2026/04/20/dam-capacity-reaches-38-up-from-last-year', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Dam levels improve but water caution urged', url: 'https://cyprus-mail.com/2026/04/06/dam-levels-improve-but-water-caution-urged', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Tamassos Dam overflows as reservoir levels reach 32.2% across Cyprus', url: 'https://en.politis.com.cy/economy/economy-hot-spot/996009/tamassos-dam-overflows-as-reservoir-levels-reach-322-across-cyprus', lang: 'en', source: 'Politis' },
  { title: 'April: second best month of the decade for Cyprus dams', url: 'https://www.alphanews.live/cyprus/o-aprilis-o-defteros-kalyteros-tis-dekaetias-gia-ta-fragmata/', lang: 'en', source: 'AlphaNews' },

  // Russian
  { title: 'Плотины Кипра заполнены на 39,6% при запасе 115,2 млн кубометров', url: 'https://ruscyprus.com/news/plotiny-kipra-zapolneny-na-39-6-pri-zapase/55998', lang: 'ru', source: 'RusCyprus' },
  { title: 'Водохранилища Кипра заполнены уже на 39,6%. Власти призывают продолжать экономить воду', url: 'https://ruscyprus.com/news/vodohranilishcha-kipra-zapolneny-uzhe-na-39/56014', lang: 'ru', source: 'RusCyprus' },
  { title: 'На Кипре перелилась дамба Визакья, которая в декабре была пустой', url: 'https://ruscyprus.com/news/na-kipre-perelilas-damba-vizakya-kotoraya-v/55551', lang: 'ru', source: 'RusCyprus' },
  { title: 'За зиму водохранилища Кипра выросли почти вчетверо: с 9,6% до 38%', url: 'https://lenta.cy/za-zimu-vodohranilishha-kipra-vyrosli-pochti-vchetvero-s-9-6-do-38/', lang: 'ru', source: 'Lenta.cy' },
  { title: 'Водохранилища Кипра заполнились до 37,9% после недавних дождей', url: 'https://ruscyprus.com/news/vodohranilishcha-kipra-zapolnilis-do-37-9/55028', lang: 'ru', source: 'RusCyprus' },
  { title: 'Уровень воды в водохранилищах Кипра приближается к 100 млн кубометров', url: 'https://ruscyprus.com/news/uroven-vody-v-vodohranilishchah-kipra/54512', lang: 'ru', source: 'RusCyprus' },
  { title: 'На Кипре резко вырос приток воды после циклона Erminio', url: 'https://ruscyprus.com/news/na-kipre-rezko-vyros-pritok-vody-v/54445', lang: 'ru', source: 'RusCyprus' },
  { title: 'Приток воды в дамбы Кипра — рекордный за 30 лет!', url: 'https://evropakipr.com/novosti/pritok-vody-v-damby-kipra-rekordnyy-za-30-let', lang: 'ru', source: 'Европа Кипр' },
  { title: 'Третья дамба переполнилась в Пафосе', url: 'https://lenta.cy/tretja-damba-perepolnilas-v-pafose/', lang: 'ru', source: 'Lenta.cy' },
  { title: 'Март 2026 года стал одним из самых дождливых за всю историю Кипра', url: 'https://ruscyprus.com/news/mart-2026-goda-stal-odnim-iz-samyh/54612', lang: 'ru', source: 'RusCyprus' },
  { title: 'На Кипре — сезон дождей, но власти утверждают, что засуха продолжается', url: 'https://evropakipr.com/istorii/na-kipre-sezon-dozhdey-pochemu-vlasti-utverzhdayut-chto-na-ostrove-chetvertyy-god', lang: 'ru', source: 'Европа Кипр' },

  // Greek
  { title: 'Ρεκόρ εισροών Μαΐου στα φράγματα — συνεχίζεται η αύξηση πληρότητας', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/rekor-sinolikon-eisroon-nerou-gia-mina-maio-sta-fragmata-sinexizei-i-afksisi-tis-sinolikis-plirotitas/', lang: 'el', source: 'KitasWeather' },
  { title: 'Συνεχίζουν σημαντικές εισροές Μαΐου — Ξεπέρασε το 41% η πληρότητα φραγμάτων', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/sinexizoun-simantikes-eisroes-gia-mina-maio-kseperase-to-41-tis-ekato-i-sinoliki-plirotita-fragmaton/', lang: 'el', source: 'KitasWeather' },
  { title: 'Ξεπέρασε το 160% η μέση βροχόπτωση Μαΐου — αποτίμηση διαταραχής και ύψη βροχής', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-160-tis-ekato-i-mesi-vroxoptosi-tou-mina-apotimisi-tis-diataraxis-maiou-kai-sinolika-ipsi-vroxis/', lang: 'el', source: 'KitasWeather' },
  { title: 'Συνεχίζουν αυξημένες εισροές νερού για Μάιο — πλησίασαν 1 ΕΚΜ το 24ωρο', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/sinexizoun-afksimenes-eisroes-nerou-gia-mina-maio-plisiasan-to-1-ekm-to-telefteo-24oro/', lang: 'el', source: 'KitasWeather' },
  { title: 'Ρεκόρ 24ωρης εισροής για μήνα Μάιο — Ξεπέρασε το 40% η συνολική πληρότητα φραγμάτων', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/rekor-24oris-sinolikis-eisrois-nerou-sta-fragmata-gia-mina-maio-kseperase-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/', lang: 'el', source: 'KitasWeather' },
  { title: 'Ο Απρίλης, ο δεύτερος καλύτερος της δεκαετίας για τα φράγματα', url: 'https://www.alphanews.live/cyprus/o-aprilis-o-defteros-kalyteros-tis-dekaetias-gia-ta-fragmata/', lang: 'el', source: 'AlphaNews' },
  { title: 'Υπερκαλύφθηκε η μέση βροχόπτωση Μαΐου μέσα σε 2 ημέρες — εξαιρετικά πολύομβρος και ο Μάιος', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/iperkalifthike-i-mesi-vroxoptosi-maiou-mesa-se-2-imeres-ekseretika-poliomvros-kai-o-maios/', lang: 'el', source: 'KitasWeather' },
  { title: 'Ξεπέρασαν τα 1.3 ΕΚΜ οι εισροές νερού το τελευταίο 3ήμερο — θα ξεπεράσει το 40% η πληρότητα φραγμάτων', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-to-13ekm-oi-eisroes-nerou-to-telefteo-triimero-tha-kseperasei-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/', lang: 'el', source: 'KitasWeather' },
  { title: 'Μάρτης κι Απρίλης: οι καλύτεροι μήνες για εισροή νερού στα φράγματα τα τελευταία 40 χρόνια', url: 'https://www.offsite.com.cy/eidiseis/koinonia/martis-ki-aprilis-oi-kalyteroi-mines-gia-eisroi-neroy-sta-fragmata-ta-teleytaia', lang: 'el', source: 'Offsite' },
  { title: 'Συνεχίζει να αυξάνεται η πληρότητα φραγμάτων — Υπερχείλισε το φράγμα Βυζακιάς', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/sinexizei-na-afksanete-i-sinoliki-plirotita-fragmaton-iperxeilise-to-fragma-vyzakias/', lang: 'el', source: 'KitasWeather' },
  { title: 'Ξεπέρασε το 183% η μέση βροχόπτωση Απριλίου — στο 39.1% η πληρότητα φραγμάτων', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-180-tis-ekato-i-mesi-vroxoptosi-apriliou-sinoliki-plirotita-fragmaton/', lang: 'el', source: 'KitasWeather' },
  { title: 'Εισροές νερού άνω των 2 ΕΚΜ το τελευταίο τριήμερο — πλησιάζει 40% η πληρότητα', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-ta-2-ekm-oi-eisroes-nerou-to-telefteo-triimero-plisiazei-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/', lang: 'el', source: 'KitasWeather' },
  { title: 'Ξεπέρασαν τα 100 ΕΚΜ τα αποθέματα — συνεχίζουν εισροές Απριλίου', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-ta-100-ekm-ta-sinolika-apothemata-nerou-sta-fragmata-sinexizoun-simantikes-eisroes-gia-mina-aprilio/', lang: 'el', source: 'KitasWeather' },
  { title: 'Ξεπέρασε το 30% η πληρότητα φραγμάτων — 3ος καλύτερος Μάρτιος από το 1988', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-30-tis-ekato-i-sinoliki-plirotita-fragmaton-3os-kaliteros-martios-se-thema-eisroon-apo-to-1988/', lang: 'el', source: 'KitasWeather' },
];
