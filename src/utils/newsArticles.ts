import type { Locale } from './locale';

export interface NewsArticle {
  title: string;
  url: string;
  lang: Locale;
  source: string;
}

export const newsArticles: NewsArticle[] = [
  // English
  { title: 'Rainfall helpful but Cyprus is far from water security, WDD official tells CNA', url: 'https://www.parikiaki.com/2026/03/rainfall-helpful-but-cyprus-is-far-from-water-security-wdd-official-tells-cna', lang: 'en', source: 'Parikiaki' },
  { title: 'Rainfall offers limited relief, Cyprus water reserves at 27 per cent capacity', url: 'https://cyprus-mail.com/2026/03/23/rainfall-offers-limited-relief-as-cyprus-water-reserves-remain-under-strain', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Heavy rainfall welcome, but warnings over water usage remain', url: 'https://cyprus-mail.com/2026/03/21/heavy-rainfall-welcome-but-warnings-over-water-usage-remain', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Cyprus positions water security at core of EU resilience strategy', url: 'https://cyprus-mail.com/2026/03/20/cyprus-positions-water-security-at-core-of-eu-resilience-strategy', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Rain boosts reservoirs but Cyprus still faces water risk, official warns', url: 'https://en.politis.com.cy/social-lens/social-lens-nature/994169/rain-boosts-reservoirs-but-cyprus-still-faces-water-risk-official-warns', lang: 'en', source: 'Politis' },
  { title: 'Cyprus dam water levels rise after rainfall', url: 'https://en.sigmalive.com/cyprus-dam-water-levels-rise-after-rainfall/', lang: 'en', source: 'Sigmalive' },
  { title: 'Rotational water cuts continue in Larnaca due to desalination issues', url: 'https://cyprus-mail.com/2026/03/18/rotational-water-cuts-continue-in-larnaca-due-to-desalination-issues', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Water levels in Cyprus dams better than last year', url: 'https://www.stockwatch.com.cy/en/news/water-levels-in-cyprus-dams-better-than-last-year', lang: 'en', source: 'StockWatch' },
  { title: 'Heavy rain a welcome boost to water reserves', url: 'https://cyprus-mail.com/2026/03/16/heavy-rain-a-welcome-boost-to-water-reserves', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Desalination plants supply 80% of Cyprus drinkable water', url: 'https://cyprus-mail.com/2026/03/10/desalination-plants-supply-80-per-cent-of-cyprus-drinkable-water', lang: 'en', source: 'Cyprus Mail' },

  // Russian
  { title: 'Дамба Xyliatos переполнилась в сосновом лесу Троодоса', url: 'https://ruscyprus.com/news/damba-xyliatos-perepolnilas-v-sosnovom-lesu/53841', lang: 'ru', source: 'RusCyprus' },
  { title: 'Дожди победили засуху', url: 'https://vkcyprus.com/cyprus/1467412357679-dozhdi-pobedili-zasuhu/', lang: 'ru', source: 'Вестник Кипра' },
  { title: 'Два водохранилища на Кипре переполнились после дождей', url: 'https://cyprusbutterfly.com.cy/news/dva-vodoxrvnilishha-na-kipre-perepolnilis-posle-dozhdej', lang: 'ru', source: 'Cyprus Butterfly' },
  { title: 'На Кипре — сезон дождей, но власти утверждают, что засуха продолжается', url: 'https://evropakipr.com/istorii/na-kipre-sezon-dozhdey-pochemu-vlasti-utverzhdayut-chto-na-ostrove-chetvertyy-god', lang: 'ru', source: 'Европа Кипр' },
  { title: 'На Кипре перелилась дамба Аргака. Следующей станет Ксилиатос', url: 'https://evropakipr.com/novosti/na-kipre-perelilas-damba-argaka-ozhidaetsya-chto-sleduyushchey-stanet-ksiliatos', lang: 'ru', source: 'Европа Кипр' },
  { title: 'Кипр не остался «без воды»', url: 'https://russiancyprus.news/news/society/cyprus-has-not-been-left-without-water/', lang: 'ru', source: 'Russian Cyprus' },
  { title: 'Кипр переживает худший водный кризис за десятилетие', url: 'https://cyprusbutterfly.com.cy/news/kipr-perezhivaet-xudshij-vodnyij-krizis', lang: 'ru', source: 'Cyprus Butterfly' },
  { title: 'Дожди идут, но воды по-прежнему мало', url: 'https://vkcyprus.com/society/1467412349435-dozhdi-idut-no-vody-po-prezhnemu-malo/', lang: 'ru', source: 'Вестник Кипра' },

  // Greek
  { title: 'Ξεπέρασε το 150% η μέση βροχόπτωση Μαρτίου — Αποτίμηση διαταραχής', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/xeperase-to-150-h-vroxoptosi-martiou-apotimisi-diataraxis/', lang: 'el', source: 'KitasWeather' },
  { title: 'Εντυπωσιακή ροή στα φράγματα — Υπερχείλισε και δεύτερο φράγμα', url: 'https://www.alphanews.live/cyprus/entyposiaki-roi-sta-fragmata-ti-edosan-oi-vroches-tou-triimerou-ypercheilise-kai-deftero-fragma/', lang: 'el', source: 'AlphaNews' },
  { title: 'Εκπληκτικό νέο για τα φράγματα: Η μεγαλύτερη εισροή της χρονιάς!', url: 'https://www.24sports.com.cy/gr/news/nea/koinonia/ekpliktiko-neo-gia-ta-fragmata-i-megalyteri-eisroi-tis-xronias', lang: 'el', source: '24Sports' },
  { title: 'Στο 26,7% η πληρότητα στα φράγματα — Υπερχείλισε το φράγμα του Ξυλιάτου', url: 'https://www.politis.com.cy/politis-news/cyprus/993983/gemisan-ta-fraghmata-alla-paramenei-i-anisikhia-ghia-to-kalokairi-analitika-oi-plirotites-ikhitiko', lang: 'el', source: 'Politis' },
  { title: 'ΤΑΥ: Σημαντικές εισροές αναμένονται αλλά είμαστε συγκρατημένοι', url: 'https://www.sigmalive.com/news/local/1307506/tau-simantikes-eisroes-anamenontai-sta-fraghmata-alla-imaste-sighkratimenoi', lang: 'el', source: 'SigmaLive' },
  { title: 'Δεν γεμίζουν τα φράγματα σε Λάρνακα και Αμμόχωστο παρά τις βροχές', url: 'https://www.politis.com.cy/cyprus/perivallon/994164/den-ghemizoyn-ta-fraghmata-se-larnaka-kai-ammokhosto-para-tis-vrokhes', lang: 'el', source: 'Politis' },
  { title: 'Αισιόδοξο το ΤΑΥ για καλές εισροές ως τέλος Μαρτίου', url: 'https://cyprustimes.com/koinonia/aisiodoxo-to-taf-gia-kales-eisroes-os-telos-martiou-se-kalyteri-moira-apo-persi/', lang: 'el', source: 'CyprusTimes' },
  { title: 'Αισιόδοξο το ΤΑΥ για εισροές — «Σε καλύτερη μοίρα από πέρσι»', url: 'https://www.sigmalive.com/news/local/1306896/aisiodokso-to-tau-ghia-eisroes-sta-fraghmata-se-kalyteri-mira-apo-persi', lang: 'el', source: 'SigmaLive' },
  { title: '«Ανάσα» για τα φράγματα μετά την κακοκαιρία', url: 'https://www.24sports.com.cy/gr/news/nea/koinonia/anasa-gia-ta-fragmata-meta-tin-kakokairia-pinakas', lang: 'el', source: '24Sports' },
  { title: 'Ρεκόρ εισροής νερού στα φράγματα το τελευταίο τριήμερο', url: 'https://www.alphanews.live/cyprus/rekor-eisrois-nerou-sta-fragmata-to-teleftaio-triimero/', lang: 'el', source: 'AlphaNews' },
];
