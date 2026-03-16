import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for March 16, 2026 (parsed from 16-MAR-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.481, totalSince: 8.804 }, storage: { current: { amount: 22.978, percentage: 20.0 }, lastYear: { amount: 23.68, percentage: 20.6 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.073, totalSince: 0.807 }, storage: { current: { amount: 1.392, percentage: 8.1 }, lastYear: { amount: 4.726, percentage: 27.6 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.025, totalSince: 0.486 }, storage: { current: { amount: 1.493, percentage: 10.8 }, lastYear: { amount: 4.19, percentage: 30.3 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.038, totalSince: 1.169 }, storage: { current: { amount: 3.811, percentage: 24.6 }, lastYear: { amount: 5.514, percentage: 35.6 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.073, totalSince: 1.882 }, storage: { current: { amount: 1.641, percentage: 12.2 }, lastYear: { amount: 3.64, percentage: 27.0 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.195, totalSince: 8.066 }, storage: { current: { amount: 1.94, percentage: 45.1 }, lastYear: { amount: 2.455, percentage: 57.1 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.026, totalSince: 0.661 }, storage: { current: { amount: 1.3, percentage: 38.2 }, lastYear: { amount: 1.351, percentage: 39.7 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.142, percentage: 2.1 }, lastYear: { amount: 1.446, percentage: 21.3 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.249, totalSince: 8.823 }, storage: { current: { amount: 11.716, percentage: 22.4 }, lastYear: { amount: 13.597, percentage: 26.0 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.188, totalSince: 4.345 }, storage: { current: { amount: 4.761, percentage: 27.7 }, lastYear: { amount: 4.661, percentage: 27.1 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.029, totalSince: 0.677 }, storage: { current: { amount: 1.403, percentage: 64.4 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.233, totalSince: 4.487 }, storage: { current: { amount: 6.661, percentage: 27.8 }, lastYear: { amount: 6.088, percentage: 25.4 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.25, totalSince: 1.001 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.369, percentage: 37.3 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.362, percentage: 42.1 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.009, totalSince: 0.172 }, storage: { current: { amount: 0.227, percentage: 76.2 }, lastYear: { amount: 0.162, percentage: 54.4 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.038, totalSince: 0.536 }, storage: { current: { amount: 0.537, percentage: 31.8 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.122, totalSince: 1.06 }, storage: { current: { amount: 1.077, percentage: 75.3 }, lastYear: { amount: 0.33, percentage: 23.1 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.307, percentage: 84.6 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.247, totalSince: 1.276 }, storage: { current: { amount: 1.645, percentage: 58.8 }, lastYear: { amount: 1.058, percentage: 37.8 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.003, totalSince: 1.03 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.469, percentage: 73.5 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 3.008, percentage: 67.5 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:5.004, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:44.073 },
];

export const getReportDate = (): string => "16-MAR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 7.33 };

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (6 — 16 Μαρτίου 2026)

Συνολική αποθήκευση **21.8%** (63.3 ΕΚΜ), αύξηση από 20.6% (59.9 ΕΚΜ) στις 6/3 — σημαντικές βροχές μέσα Μαρτίου. Συνολική εισροή 25/26 στα 44.1 ΕΚΜ, σχεδόν 2.5 φορές πέρυσι (18.7 ΕΚΜ). Μεταφορά νερού Αρμίνου→Κούρης: 7.33 ΕΚΜ.

**Αξιοσημείωτα:**
- Κούρης στο 20.0% (22.98 ΕΚΜ) — ελαφρά αύξηση, σχεδόν στα επίπεδα πέρυσι (20.6%)
- Αργάκα γέμισε στο 100% (0.99 ΕΚΜ), τριπλάσιο σε σχέση με πέρυσι
- Ξυλιάτος στο 75.3% (1.077 ΕΚΜ) — από 23.1% πέρυσι, τριπλάσιο
- Εύρετου στο 27.8% (6.661 ΕΚΜ) — νέο μέγιστο, ξεπερνά πέρυσι (25.4%)
- Αχνα παραμένει σε κρίσιμα χαμηλό 2.1% (0.142 ΕΚΜ)

Τα αποθέματα παραμένουν κάτω από τα περσινά (25.1%). Η μείωση υδροδότησης 10% παραμένει σε ισχύ.

**Στα μέσα:**
- [Ο Μάρτης μας χρωστάει βροχές — Στο 21% η πληρότητα των φραγμάτων](https://cyprustimes.com/koinonia/o-martis-mas-chrostaei-vroches-sto-21-i-plirotita-ton-fragmaton/) — Cyprus Times
- [Επιτέλους νερό στα φράγματα, συνεχίζουν τα καιρικά φαινόμενα](https://www.alphanews.live/cyprus/epitelous-nero-sta-fragmata-synechizoun-ta-kairika-fainomena/) — AlphaNews
- [Σημαντική εισροή νερού στα φράγματα – Πλησιάζει το 20% η συνολική πληρότητα](https://www.politis.com.cy/politis-news/cyprus/988448/simantiki-eisroi-nerou-sta-fraghmata-to-teleftaio-4imero-plisiazei-to-20-i-sinoliki-plirotita) — Politis
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (6 — 16 марта 2026)

Общий запас **21.8%** (63.3 МКМ), рост с 20.6% (59.9 МКМ) на 6/3 — значительные дожди в середине марта. Общий приток 25/26 — 44.1 МКМ, почти в 2.5 раза больше прошлого сезона (18.7 МКМ). Перекачка Арминоу→Курис: 7.33 МКМ.

**Основные изменения:**
- Курис 20.0% (22.98 МКМ) — небольшой рост, почти на уровне прошлого года (20.6%)
- Аргака заполнена на 100% (0.99 МКМ), втрое больше прошлого года
- Ксилиатос 75.3% (1.077 МКМ) — против 23.1% в прошлом году, рост втрое
- Эвретоу 27.8% (6.661 МКМ) — новый максимум, выше прошлогоднего (25.4%)
- Ахна остаётся критически низкой — 2.1% (0.142 МКМ)

Запасы ниже прошлогодних (25.1%). Сокращение водоснабжения на 10% продолжает действовать.

**В СМИ:**
- [В водохранилищах Кипра скоро останется только грязь](https://evropakipr.com/istorii/v-vodohranilishchah-kipra-skoro-ostanetsya-tolko-gryaz) — Европа Кипр
- [Кипр на грани засухи](https://vkcyprus.com/cyprus/1467412346435-kipr-na-grani-zasuhi/) — Вестник Кипра
- [Кипр переживает худший водный кризис за десятилетие](https://cyprusbutterfly.com.cy/news/kipr-perezhivaet-xudshij-vodnyij-krizis) — Cyprus Butterfly
`;
  }
  return `
### Recent Changes (March 6 — 16, 2026)

Total storage at **21.8%** (63.3 MCM), up from 20.6% (59.9 MCM) on Mar 6 — notable mid-March rainfall. Total 25/26 inflow now 44.1 MCM — nearly 2.5× last year's full season (18.7 MCM). Arminou→Kouris transfer: 7.33 MCM since October.

**Notable movements:**
- Kouris at 20.0% (22.98 MCM) — slight increase, nearly matching last year (20.6%)
- Argaka filled to 100% (0.99 MCM), triple last year's level
- Xyliatos at 75.3% (1.077 MCM) — up from 23.1% last year, a threefold increase
- Evretou at 27.8% (6.661 MCM) — new annual max, surpassing last year (25.4%)
- Achna remains critically low at 2.1% (0.142 MCM)

Storage remains below last year (25.1%). The 10% island-wide water supply cut stays in effect.

**In the media:**
- [Cyprus dam levels remain low despite rainfall](https://cyprus-mail.com/2026/03/10/cyprus-dam-levels-remain-low-despite-rainfall) — Cyprus Mail
- [Cyprus confronts a record drought as reservoirs run dry](https://smartwatermagazine.com/news/smart-water-magazine/cyprus-confronts-a-record-drought-reservoirs-run-dry) — Smart Water Magazine
- [Cyprus faces severe drought in 2026](https://traveltomorrow.com/cyprus-faces-severe-drought-in-2026-citizens-urged-to-cut-water-use-by-two-minutes-daily/) — Travel Tomorrow
`;
};
