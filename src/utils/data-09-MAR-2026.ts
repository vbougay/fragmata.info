import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for March 9, 2026 (parsed from 09-MAR-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.165, totalSince: 8.052 }, storage: { current: { amount: 22.293, percentage: 19.4 }, lastYear: { amount: 24.001, percentage: 20.9 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.025, totalSince: 0.705 }, storage: { current: { amount: 1.377, percentage: 8.1 }, lastYear: { amount: 4.725, percentage: 27.6 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.012, totalSince: 0.451 }, storage: { current: { amount: 1.568, percentage: 11.3 }, lastYear: { amount: 4.399, percentage: 31.8 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.033, totalSince: 1.097 }, storage: { current: { amount: 3.692, percentage: 23.8 }, lastYear: { amount: 5.446, percentage: 35.1 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.02, totalSince: 1.784 }, storage: { current: { amount: 1.598, percentage: 11.8 }, lastYear: { amount: 3.703, percentage: 27.4 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.147, totalSince: 7.703 }, storage: { current: { amount: 1.745, percentage: 40.6 }, lastYear: { amount: 2.409, percentage: 56.0 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.0, totalSince: 0.635 }, storage: { current: { amount: 1.298, percentage: 38.2 }, lastYear: { amount: 1.373, percentage: 40.4 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.142, percentage: 2.1 }, lastYear: { amount: 1.473, percentage: 21.7 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.085, totalSince: 8.5 }, storage: { current: { amount: 11.514, percentage: 22.0 }, lastYear: { amount: 13.83, percentage: 26.4 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.064, totalSince: 4.099 }, storage: { current: { amount: 4.594, percentage: 26.8 }, lastYear: { amount: 4.719, percentage: 27.5 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.005, totalSince: 0.642 }, storage: { current: { amount: 1.345, percentage: 61.7 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.077, totalSince: 4.189 }, storage: { current: { amount: 6.374, percentage: 26.6 }, lastYear: { amount: 6.184, percentage: 25.8 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.005, totalSince: 0.747 }, storage: { current: { amount: 0.736, percentage: 74.3 }, lastYear: { amount: 0.362, percentage: 36.6 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.002, totalSince: 0.786 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.356, percentage: 41.4 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.003, totalSince: 0.159 }, storage: { current: { amount: 0.214, percentage: 71.8 }, lastYear: { amount: 0.153, percentage: 51.3 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.012, totalSince: 0.49 }, storage: { current: { amount: 0.491, percentage: 29.1 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.013, totalSince: 0.929 }, storage: { current: { amount: 0.946, percentage: 66.2 }, lastYear: { amount: 0.329, percentage: 23.0 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.299, percentage: 82.4 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.003, totalSince: 1.018 }, storage: { current: { amount: 1.394, percentage: 49.8 }, lastYear: { amount: 1.069, percentage: 38.2 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.003, totalSince: 1.023 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.466, percentage: 73.3 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.115, totalSince: 2.626 }, storage: { current: { amount: 4.444, percentage: 99.8 }, lastYear: { amount: 2.999, percentage: 67.3 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:2.21, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:41.279 },
];

export const getReportDate = (): string => "09-MAR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 7.19 };

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (27 Φεβρουαρίου — 9 Μαρτίου 2026)

Συνολική αποθήκευση **21.0%** (61.2 ΕΚΜ), αύξηση από 19.8% (57.7 ΕΚΜ) στις 27/2. Εισροή Μαρτίου 2.21 ΕΚΜ. Συνολική εισροή 25/26 στα 41.3 ΕΚΜ — υπερδιπλάσια σε σχέση με πέρυσι (18.7 ΕΚΜ).

**Αξιοσημείωτα:**
- Κούρης +1.6 ΕΚΜ σε 10 ημέρες (19.4%) — μεγαλύτερη αύξηση στο νότο
- Εύρετου ξεπερνά ετήσιο ρεκόρ — 26.6% (6.374 ΕΚΜ vs max 6.201)
- Σολιά στο 99.8% (4.444 ΕΚΜ vs max 3.012) — σχεδόν γεμάτη
- Μεταφορά Αρμίνου→Κούρης αυξήθηκε σε 7.19 ΕΚΜ

Τα αποθέματα εξακολουθούν να υπολείπονται του περσινού (25.4%). Η μείωση υδροδότησης 10% παραμένει σε ισχύ.

**Στα μέσα:**
- [Αυξήθηκε σχεδόν στο 20% η πληρότητα στα φράγματα — Ευεργετικές οι τελευταίες βροχές](https://nomisma.com.cy/cyprus/random/%CE%B1%CF%85%CE%BE%CE%AE%CE%B8%CE%B7%CE%BA%CE%B5-%CF%83%CF%87%CE%B5%CE%B4%CF%8C%CE%BD-%CF%83%CF%84%CE%BF-20-%CE%B7-%CF%80%CE%BB%CE%B7%CF%81%CF%8C%CF%84%CE%B7%CF%84%CE%B1-%CF%83%CF%84%CE%B1-%CF%86/) — Nomisma
- [Επιτέλους νερό στα φράγματα, συνεχίζουν τα καιρικά φαινόμενα](https://www.alphanews.live/cyprus/epitelous-nero-sta-fragmata-synechizoun-ta-kairika-fainomena/) — AlphaNews
- [Ανησυχία για το νερό στα φράγματα — «Κάτω της μέτριας η φετινή ροή»](https://dialogos.com.cy/anisychia-to-nero-sta-fragmatta-kato-tis-metrias-fetini-roi/) — Dialogos
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (27 февраля — 9 марта 2026)

Общий запас вырос до **21.0%** (61.2 МКМ), с 19.8% (57.7 МКМ) на 27/2. Мартовский приток 2.21 МКМ. Общий приток сезона 25/26 — 41.3 МКМ, более чем вдвое больше прошлого года (18.7 МКМ).

**Основные изменения:**
- Курис +1.6 МКМ за 10 дней (19.4%) — наибольший рост на юге
- Эвретоу превышает годовой максимум — 26.6% (6.374 МКМ при макс. 6.201)
- Солеа заполнена на 99.8% (4.444 МКМ при макс. 3.012)
- Перекачка Арминоу→Курис достигла 7.19 МКМ

Несмотря на рост, запасы ниже прошлогодних (25.4%). Сокращение водоснабжения на 10% остаётся в силе.

**В СМИ:**
- [На Кипре — сезон дождей, но власти утверждают, что засуха продолжается](https://evropakipr.com/istorii/na-kipre-sezon-dozhdey-pochemu-vlasti-utverzhdayut-chto-na-ostrove-chetvertyy-god) — Европа Кипр
- [Кипр на грани засухи](https://vkcyprus.com/cyprus/1467412346435-kipr-na-grani-zasuhi/) — Вестник Кипра
- [Кипр не остался «без воды»](https://russiancyprus.news/news/society/cyprus-has-not-been-left-without-water/) — Russian Cyprus
`;
  }
  return `
### Recent Changes (February 27 — March 9, 2026)

Total storage at **21.0%** (61.2 MCM), up from 19.8% (57.7 MCM) on Feb 27. March inflows at 2.21 MCM. Total 25/26 inflow now 41.3 MCM — more than double last year's full season (18.7 MCM).

**Notable movements:**
- Kouris gained +1.6 MCM in 10 days (19.4%) — largest rise in the south
- Evretou exceeds annual max — 26.6% (6.374 MCM vs max 6.201)
- Solea at 99.8% capacity (4.444 MCM vs max 3.012) — nearly full
- Arminou→Kouris transfers reached 7.19 MCM since October

Despite steady gains, storage remains below last year's level (25.4%). The 10% island-wide water supply cut remains in effect.

**In the media:**
- [Cyprus confronts a record drought as reservoirs run dry](https://smartwatermagazine.com/news/smart-water-magazine/cyprus-confronts-a-record-drought-reservoirs-run-dry) — Smart Water Magazine
- [Cyprus dam levels drop to 13.8% amid drought](https://en.sigmalive.com/cyprus-dam-levels-drop-to-13-8-amid-drought/) — Sigmalive
- [Cyprus warns of possible summer water cuts as reserves fall](https://famagusta-gazette.com/cyprus-warns-of-possible-summer-water-cuts-as-reserves-fall/) — Famagusta Gazette
`;
};
