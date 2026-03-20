import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for March 20, 2026 (parsed from 20-MAR-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.292, totalSince: 9.699 }, storage: { current: { amount: 24.373, percentage: 21.2 }, lastYear: { amount: 23.339, percentage: 20.3 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.019, totalSince: 0.882 }, storage: { current: { amount: 1.366, percentage: 8.0 }, lastYear: { amount: 4.726, percentage: 27.6 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.016, totalSince: 0.527 }, storage: { current: { amount: 1.5, percentage: 10.8 }, lastYear: { amount: 4.09, percentage: 29.5 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.024, totalSince: 1.281 }, storage: { current: { amount: 3.87, percentage: 25.0 }, lastYear: { amount: 5.541, percentage: 35.7 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.112, totalSince: 2.18 }, storage: { current: { amount: 1.907, percentage: 14.1 }, lastYear: { amount: 3.606, percentage: 26.7 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.227, totalSince: 8.53 }, storage: { current: { amount: 1.638, percentage: 38.1 }, lastYear: { amount: 2.484, percentage: 57.8 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.036, totalSince: 0.722 }, storage: { current: { amount: 1.361, percentage: 40.0 }, lastYear: { amount: 1.345, percentage: 39.6 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.142, percentage: 2.1 }, lastYear: { amount: 1.412, percentage: 20.8 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.153, totalSince: 9.376 }, storage: { current: { amount: 12.22, percentage: 23.3 }, lastYear: { amount: 13.484, percentage: 25.7 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.067, totalSince: 4.648 }, storage: { current: { amount: 5.028, percentage: 29.3 }, lastYear: { amount: 4.627, percentage: 26.9 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.002, totalSince: 0.698 }, storage: { current: { amount: 1.423, percentage: 65.3 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.066, totalSince: 4.843 }, storage: { current: { amount: 7.01, percentage: 29.2 }, lastYear: { amount: 6.03, percentage: 25.1 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.372, percentage: 37.6 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.364, percentage: 42.3 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.004, totalSince: 0.18 }, storage: { current: { amount: 0.235, percentage: 78.9 }, lastYear: { amount: 0.165, percentage: 55.4 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.023, totalSince: 0.643 }, storage: { current: { amount: 0.644, percentage: 38.1 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.025, totalSince: 1.174 }, storage: { current: { amount: 1.191, percentage: 83.3 }, lastYear: { amount: 0.33, percentage: 23.1 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.311, percentage: 85.7 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.076, totalSince: 1.535 }, storage: { current: { amount: 1.9, percentage: 67.9 }, lastYear: { amount: 1.056, percentage: 37.7 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.034 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.47, percentage: 73.5 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.999, percentage: 67.3 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data - updated with new 25/26 data from current report
export const yearlyInflowData: YearlyInflowData[] = [
  { year: "15/16", months: { October:1.024, November:0.608, December:1.248, January:3.685, February:2.824, March:6.132, April:1.314, May:0.961, June:0.105, July:0.0, "Aug-Sep":0.006 }, total:17.907 },
  { year: "16/17", months: { October:0.247, November:0.657, December:7.424, January:21.083, February:4.181, March:8.891, April:4.398, May:1.78, June:0.228, July:0.0, "Aug-Sep":0.0 }, total:48.889 },
  { year: "17/18", months: { October:0.142, November:0.614, December:0.881, January:20.661, February:9.528, March:5.944, April:2.176, May:2.802, June:2.022, July:0.05, "Aug-Sep":0.077 }, total:44.897 },
  { year: "18/19", months: { October:0.858, November:0.757, December:16.665, January:118.11, February:53.909, March:32.283, April:25.326, May:8.869, June:6.199, July:1.524, "Aug-Sep":0.542 }, total:265.042 },
  { year: "19/20", months: { October:2.43, November:1.545, December:30.495, January:47.74, February:15.916, March:15.67, April:11.062, May:7.317, June:2.747, July:0.866, "Aug-Sep":0.161 }, total:135.949 },
  { year: "20/21", months: { October:0.165, November:0.942, December:3.107, January:12.54, February:8.016, March:6.022, April:4.156, May:0.899, June:0.192, July:0.024, "Aug-Sep":0.035 }, total:36.098 },
  { year: "21/22", months: { October:0.084, November:0.397, December:11.923, January:74.614, February:33.963, March:19.801, April:8.139, May:3.44, June:1.264, July:0.093, "Aug-Sep":0.035 }, total:153.753 },
  { year: "22/23", months: { October:3.946, November:2.976, December:2.922, January:8.268, February:12.603, March:9.517, April:4.741, May:2.728, June:0.891, July:0.0, "Aug-Sep":0.186 }, total:48.778 },
  { year: "23/24", months: { October:0.583, November:1.581, December:2.34, January:7.3, February:6.676, March:2.92, April:1.801, May:0.91, June:0.297, July:0.098, "Aug-Sep":0.208 }, total:24.714 },
  { year: "24/25", months: { October:0.0, November:3.084, December:5.71, January:4.062, February:2.451, March:1.465, April:1.096, May:0.716, June:0.076, July:0.0, "Aug-Sep":0.004 }, total:18.664 },
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:8.412, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:47.481 },
];

export const getReportDate = (): string => "20-MAR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 7.98 };

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (11 — 20 Μαρτίου 2026)

Συνολική αποθήκευση **22.7%** (66.1 ΕΚΜ), αύξηση από 21.5% (62.5 ΕΚΜ) στις 11/3 — ισχυρές βροχοπτώσεις στον Τρόοδο. Συνολική εισροή 25/26 στα 47.5 ΕΚΜ, υπερδιπλάσια του περσινού ξηρού χρόνου (18.7 ΕΚΜ). Μεταφορά νερού Αρμίνου→Κούρης: 7.98 ΕΚΜ.

**Αξιοσημείωτα:**
- **Κούρης ξεπέρασε πέρυσι** στο 21.2% (24.37 ΕΚΜ) έναντι 20.3% πέρυσι — πρώτη φορά φέτος
- **Ξυλιάτος στο 83.3%** (1.191 ΕΚΜ), 3.6× πέρυσι (23.1%). Νέο ετήσιο μέγιστο
- Εύρετου στο 29.2% (7.01 ΕΚΜ) — νέο μέγιστο, ξεπερνά πέρυσι (25.1%)
- Αρμίνου πτώση στο 38.1% (1.638 ΕΚΜ) λόγω μεταφοράς στον Κούρη
- Αχνα παραμένει κρίσιμα χαμηλή στο 2.1% (0.142 ΕΚΜ)

Τα αποθέματα πλησιάζουν τα περσινά (24.9%). Η μείωση υδροδότησης 10% παραμένει σε ισχύ.

**Στα μέσα:**
- [Αισιόδοξο το ΤΑΥ για εισροές στα φράγματα — «Σε καλύτερη μοίρα από πέρσι»](https://www.sigmalive.com/news/local/1306896/aisiodokso-to-tau-ghia-eisroes-sta-fraghmata-se-kalyteri-mira-apo-persi) — SigmaLive
- [Επιτέλους νερό στα φράγματα, συνεχίζουν τα καιρικά φαινόμενα](https://www.alphanews.live/cyprus/epitelous-nero-sta-fragmata-synechizoun-ta-kairika-fainomena/) — AlphaNews
- [Σημαντική εισροή νερού στα φράγματα – Πλησιάζει το 20% η συνολική πληρότητα](https://www.politis.com.cy/politis-news/cyprus/988448/simantiki-eisroi-nerou-sta-fraghmata-to-teleftaio-4imero-plisiazei-to-20-i-sinoliki-plirotita) — Politis
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (11 — 20 марта 2026)

Общий запас **22.7%** (66.1 МКМ), рост с 21.5% (62.5 МКМ) на 11/3 — сильные осадки на Троодосе. Общий приток 25/26 — 47.5 МКМ, более чем вдвое больше прошлого засушливого сезона (18.7 МКМ). Перекачка Арминоу→Курис: 7.98 МКМ.

**Основные изменения:**
- **Курис впервые в этом году превысил прошлогодний уровень** — 21.2% (24.37 МКМ) против 20.3% год назад
- **Ксилиатос 83.3%** (1.191 МКМ), в 3.6 раза больше прошлого года (23.1%). Новый годовой максимум
- Эвретоу 29.2% (7.01 МКМ) — новый максимум, выше прошлогоднего (25.1%)
- Арминоу снизился до 38.1% (1.638 МКМ) из-за перекачки в Курис
- Ахна остаётся критически низкой — 2.1% (0.142 МКМ)

Запасы приближаются к прошлогодним (24.9%). Сокращение водоснабжения на 10% продолжает действовать.

**В СМИ:**
- [На Кипре — сезон дождей, но власти утверждают, что засуха продолжается](https://evropakipr.com/istorii/na-kipre-sezon-dozhdey-pochemu-vlasti-utverzhdayut-chto-na-ostrove-chetvertyy-god) — Европа Кипр
- [Кипр не остался «без воды»](https://russiancyprus.news/news/society/cyprus-has-not-been-left-without-water/) — Russian Cyprus
- [Кипр переживает худший водный кризис за десятилетие](https://cyprusbutterfly.com.cy/news/kipr-perezhivaet-xudshij-vodnyij-krizis) — Cyprus Butterfly
`;
  }
  return `
### Recent Changes (March 11 — 20, 2026)

Total storage at **22.7%** (66.1 MCM), up from 21.5% (62.5 MCM) on Mar 11 — strong Troodos rainfall. Total 25/26 inflow now 47.5 MCM — more than double last year's full drought season (18.7 MCM). Arminou→Kouris transfer: 7.98 MCM since October.

**Notable movements:**
- **Kouris surpassed last year for the first time** at 21.2% (24.37 MCM) vs 20.3% a year ago
- **Xyliatos at 83.3%** (1.191 MCM), 3.6× last year (23.1%). New annual maximum
- Evretou at 29.2% (7.01 MCM) — new annual max, surpassing last year (25.1%)
- Arminou dropped to 38.1% (1.638 MCM) due to transfer to Kouris
- Achna remains critically low at 2.1% (0.142 MCM)

Storage approaching last year's level (24.9%). The 10% island-wide water supply cut stays in effect.

**In the media:**
- [Cyprus dam levels remain low despite rainfall](https://cyprus-mail.com/2026/03/10/cyprus-dam-levels-remain-low-despite-rainfall) — Cyprus Mail
- [Desalination plants supply 80% of Cyprus drinkable water](https://cyprus-mail.com/2026/03/10/desalination-plants-supply-80-per-cent-of-cyprus-drinkable-water) — Cyprus Mail
- [Cyprus confronts a record drought as reservoirs run dry](https://smartwatermagazine.com/news/smart-water-magazine/cyprus-confronts-a-record-drought-reservoirs-run-dry) — Smart Water Magazine
`;
};
