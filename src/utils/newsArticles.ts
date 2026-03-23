import type { Locale } from './locale';

export interface NewsArticle {
  title: string;
  url: string;
  lang: Locale;
  source: string;
}

export const newsArticles: NewsArticle[] = [
  // English
  { title: 'Heavy rainfall welcome, but warnings over water usage remain', url: 'https://cyprus-mail.com/2026/03/21/heavy-rainfall-welcome-but-warnings-over-water-usage-remain', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Cyprus dam water levels rise after rainfall', url: 'https://en.sigmalive.com/cyprus-dam-water-levels-rise-after-rainfall/', lang: 'en', source: 'Sigmalive' },
  { title: 'Heavy rain a welcome boost to water reserves', url: 'https://cyprus-mail.com/2026/03/16/heavy-rain-a-welcome-boost-to-water-reserves', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Water levels in Cyprus dams better than last year', url: 'https://www.stockwatch.com.cy/en/news/water-levels-in-cyprus-dams-better-than-last-year', lang: 'en', source: 'StockWatch' },
  { title: 'Cyprus dam levels at 21% as WDD says reserves remain low', url: 'https://www.kiprinform.com/en/cyprus_news/cyprus-dam-levels-at-21-as-wdd-says-water-reserves-remain-low-despite-recent-rainfall/', lang: 'en', source: 'Kiprinform' },
  { title: 'Cyprus dam levels remain low despite rainfall', url: 'https://cyprus-mail.com/2026/03/10/cyprus-dam-levels-remain-low-despite-rainfall', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Desalination plants supply 80% of Cyprus drinkable water', url: 'https://cyprus-mail.com/2026/03/10/desalination-plants-supply-80-per-cent-of-cyprus-drinkable-water', lang: 'en', source: 'Cyprus Mail' },
  { title: 'Cyprus confronts a record drought as reservoirs run dry', url: 'https://smartwatermagazine.com/news/smart-water-magazine/cyprus-confronts-a-record-drought-reservoirs-run-dry', lang: 'en', source: 'Smart Water Magazine' },
  { title: 'Severe drought in Cyprus, February 2026', url: 'https://www.copernicus.eu/en/media/image-day-gallery/severe-drought-cyprus-february-2026', lang: 'en', source: 'Copernicus' },
  { title: 'Cyprus deploys mobile desalination units from UAE', url: 'https://smartwatermagazine.com/news/smart-water-magazine/cyprus-deploys-mobile-desalination-units-uae-avert-water-crisis', lang: 'en', source: 'Smart Water Magazine' },
  { title: 'Cyprus to spend €196 million in 2026 to tackle water shortages', url: 'https://en.politis.com.cy/economy/economy-hot-spot/965677/cyprus-to-spend-eur196-million-in-2026-to-tackle-water-shortages', lang: 'en', source: 'Politis' },
  { title: 'Cyprus dam levels drop to 13.8% amid drought', url: 'https://en.sigmalive.com/cyprus-dam-levels-drop-to-13-8-amid-drought/', lang: 'en', source: 'Sigmalive' },

  // Russian
  { title: 'На Кипре — сезон дождей, но власти утверждают, что засуха продолжается', url: 'https://evropakipr.com/istorii/na-kipre-sezon-dozhdey-pochemu-vlasti-utverzhdayut-chto-na-ostrove-chetvertyy-god', lang: 'ru', source: 'Европа Кипр' },
  { title: 'В водохранилищах Кипра скоро останется только грязь', url: 'https://evropakipr.com/istorii/v-vodohranilishchah-kipra-skoro-ostanetsya-tolko-gryaz', lang: 'ru', source: 'Европа Кипр' },
  { title: 'Из-за засухи на Кипре осталось мало пресной воды', url: 'https://evropakipr.com/novosti/iz-za-zasuhi-na-kipre-ostalos-malo-presnoy-vody-v-vodohranilishchah-v-nekotoryh-iz-nih-skoro', lang: 'ru', source: 'Европа Кипр' },
  { title: 'Кипр на грани водного кризиса', url: 'https://vkcyprus.com/economics/88603-kipr-na-grani-vodnogo-krizisa/', lang: 'ru', source: 'Вестник Кипра' },
  { title: 'Засуха на Кипре: ситуация на февраль 2026', url: 'https://pogoda.mail.ru/news/69845557/', lang: 'ru', source: 'Погода Mail' },
  { title: 'Кипр не остался «без воды»', url: 'https://russiancyprus.news/news/society/cyprus-has-not-been-left-without-water/', lang: 'ru', source: 'Russian Cyprus' },
  { title: 'Кипр переживает худший водный кризис за десятилетие', url: 'https://cyprusbutterfly.com.cy/news/kipr-perezhivaet-xudshij-vodnyij-krizis', lang: 'ru', source: 'Cyprus Butterfly' },
  { title: 'Засуха накрыла Кипр. Жителей попросили включать воду только на две минуты в день', url: 'https://www.vokrugsveta.ru/news/zasukha-nakryla-kipr-zhitelei-poprosili-vklyuchat-vodu-tolko-na-dve-minuty-v-den-id6839742/', lang: 'ru', source: 'Вокруг Света' },

  // Turkish
  { title: 'Güney Kıbrıs\'ta barajlardaki su, son yılların en kötü seviyesinde: 2026\'da su krizi kapıda', url: 'https://haberkibris.com/-guney-kibrista-barajlardaki-su-son-yillarin-en-kotu-seviyesinde-2026da-su-krizi-kapida-1514-2025-10-25.html', lang: 'tr', source: 'Haber Kıbrıs' },
  { title: 'Güney Kıbrıs\'taki barajlarda su seviyesi kritik düzeyde', url: 'https://haberkibris.com/guney-kibristaki-barajlarda-su-seviyesi-kritik-duzeyde-1343-2026-02-12.html', lang: 'tr', source: 'Haber Kıbrıs' },
  { title: 'Güney Kıbrıs\'ta şiddetli kuraklık: Barajlardaki su seviyesi kritik düzeyde', url: 'https://www.kibrispostasi.com/c58-GUNEY_KIBRIS/n549247-guney-kibrista-siddetli-kuraklik-barajlardaki-su-seviyesi-kritik-duzeyde', lang: 'tr', source: 'Kıbrıs Postası' },
  { title: 'Kuzey Kıbrıs\'ta su krizi derinleşiyor, su kıtlığı günlük hayata sızdı!', url: 'https://www.kibrispostasi.com/c35-KIBRIS_HABERLERI/n566765-kuzey-kibrista-su-krizi-derinlesiyor-su-kitligi-gunluk-hayata-sizdi', lang: 'tr', source: 'Kıbrıs Postası' },
  { title: 'KKTC su krizinde 2045\'e erken girdi: Tüketim 20 yıl önden gidiyor', url: 'https://www.kibrispostasi.com/c117-DOGA_ve_CEVRE/n565481-kktc-su-krizinde-2045e-erken-girdi-tuketim-20-yil-onden-gidiyor', lang: 'tr', source: 'Kıbrıs Postası' },
  { title: 'Güney Kıbrıs\'ta baraj doluluk oranı yüzde 17,2\'ye geriledi', url: 'https://www.kibrispostasi.com/c58-GUNEY_KIBRIS/n592240-guney-kibrista-baraj-doluluk-orani-yuzde-172ye-geriledi', lang: 'tr', source: 'Kıbrıs Postası' },
  { title: 'Yağış: Suyu toplayamazsak gelecek \'kuru\' gelecek', url: 'https://www.kibrispostasi.com/c117-DOGA_ve_CEVRE/n585081-yagis-suyu-toplayamazsak-gelecek-kuru-gelecek', lang: 'tr', source: 'Kıbrıs Postası' },
  { title: 'Kuruduk!', url: 'https://www.yeniduzen.com/kuruduk-24781yy.htm', lang: 'tr', source: 'Yeni Düzen' },
  { title: 'Baraj temizliği yapılmadığından milyonlarca metre küp su denize aktı', url: 'https://www.yeniduzen.com/baraj-temizligi-yapilmadigindan-milyonlarca-metre-kup-su-denize-akti-189802h.htm', lang: 'tr', source: 'Yeni Düzen' },
  { title: 'Baf bölgesindeki barajlarda depolanan su miktarı yüzde 8,4', url: 'https://www.yeniduzen.com/baf-bolgesindeki-barajlarda-depolanan-su-miktari-yuzde-84-190230h.htm', lang: 'tr', source: 'Yeni Düzen' },
  { title: 'Güney Kıbrıs\'ta baraj doluluk oranı yüzde 11,3\'e düştü', url: 'https://www.kibristurk.com/guney-kibrista-baraj-doluluk-orani-yuzde-113e-dustu', lang: 'tr', source: 'Kıbrıs Türk Haber' },
  { title: 'Güney Kıbrıs\'ta Su Krizi Derinleşiyor: Olağanüstü Hal İlan Edildi', url: 'https://haberkibris.com/gecitkoy-barajina-boru-hatti-yok-su-tankerlerle-tasinabilir-1204-2025-03-23.html', lang: 'tr', source: 'Haber Kıbrıs' },
  { title: 'Uyarılar dinlenmedi: Gönyeli Barajı\'nda krizin nedeni iklim değil ihmal', url: 'https://www.kibrispostasi.com/c35-KIBRIS_HABERLERI/n584948-uyarilar-dinlenmedi-gonyeli-barajinda-krizin-nedeni-iklim-degil-ihmal', lang: 'tr', source: 'Kıbrıs Postası' },

  // Greek
  { title: '«Ανάσα» για τα φράγματα μετά την κακοκαιρία', url: 'https://www.24sports.com.cy/gr/news/nea/koinonia/anasa-gia-ta-fragmata-meta-tin-kakokairia-pinakas', lang: 'el', source: '24Sports' },
  { title: 'Αισιόδοξο το ΤΑΥ για καλές εισροές ως τέλος Μαρτίου', url: 'https://cyprustimes.com/koinonia/aisiodoxo-to-taf-gia-kales-eisroes-os-telos-martiou-se-kalyteri-moira-apo-persi/', lang: 'el', source: 'CyprusTimes' },
  { title: 'Ρεκόρ εισροής νερού όλων των εποχών στα φράγματα σε όλη την Κύπρο', url: 'https://www.alphanews.live/cyprus/rekor-eisrois-neroy-olon-ton-epohon-sta-fragmata-se-oli-tin-kypro', lang: 'el', source: 'AlphaNews' },
  { title: 'Στο 77% η μέση βροχόπτωση Μαρτίου — Έρχονται πολύ σημαντικές εισροές', url: 'https://kitasweather.com/news/fragmata-vroxoptosi/sto-77-tis-ekato-i-mesi-vroxoptosi-martiou-erxontai-poli-simantikes-eisroes-nerou-sta-fragmata-tis-epomenes-imeres/', lang: 'el', source: 'KitasWeather' },
  { title: 'Αισιόδοξο το ΤΑΥ για εισροές στα φράγματα — «Σε καλύτερη μοίρα από πέρσι»', url: 'https://www.sigmalive.com/news/local/1306896/aisiodokso-to-tau-ghia-eisroes-sta-fraghmata-se-kalyteri-mira-apo-persi', lang: 'el', source: 'SigmaLive' },
  { title: 'Επιτέλους νερό στα φράγματα, συνεχίζουν τα καιρικά φαινόμενα', url: 'https://www.alphanews.live/cyprus/epitelous-nero-sta-fragmata-synechizoun-ta-kairika-fainomena/', lang: 'el', source: 'AlphaNews' },
  { title: 'Σημαντική εισροή νερού στα φράγματα – Πλησιάζει το 20% η συνολική πληρότητα', url: 'https://www.politis.com.cy/politis-news/cyprus/988448/simantiki-eisroi-nerou-sta-fraghmata-to-teleftaio-4imero-plisiazei-to-20-i-sinoliki-plirotita', lang: 'el', source: 'Politis' },
  { title: 'Στο 21% η πληρότητα των φραγμάτων — «Ο Μάρτης μας χρωστάει βροχές»', url: 'https://www.sigmalive.com/news/local/1306083/sto-21-i-plirotita-ton-fraghmaton-symfona-me-to-tau', lang: 'el', source: 'SigmaLive' },
  { title: 'Γιατί ενώ βρέχει δεν γεμίζουν τα φράγματα — Δεν αποκλείεται η σπορά νεφών', url: 'https://www.sigmalive.com/news/all/1304121/giati-enw-vrekhei-den-ghemizoyn-ta-fraghmata-den-apoklietai-i-spora-nefwn', lang: 'el', source: 'SigmaLive' },
  { title: 'Στέρεψαν τα φράγματα, εφιαλτικό προμηνύεται το 2026', url: 'https://www.alphanews.live/cyprus/sterepsan-ta-fragmata-efialtiko-prominyetai-to-2026/', lang: 'el', source: 'AlphaNews' },
];
