import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.011, totalSince: 0.106 }, storage: { current: { amount: 42.570, percentage: 37.0 }, lastYear: { amount: 12.685, percentage: 11.0 } }, maxStorage: { amount: 48.267, date: "16/6" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 0.003 }, storage: { current: { amount: 3.722, percentage: 21.8 }, lastYear: { amount: 2.134, percentage: 12.5 } }, maxStorage: { amount: 4.247, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 0.003 }, storage: { current: { amount: 2.396, percentage: 17.3 }, lastYear: { amount: 2.031, percentage: 14.7 } }, maxStorage: { amount: 2.569, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 0.011 }, storage: { current: { amount: 3.921, percentage: 25.3 }, lastYear: { amount: 3.447, percentage: 22.2 } }, maxStorage: { amount: 5.941, date: "3/6" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.001, totalSince: 0.017 }, storage: { current: { amount: 6.539, percentage: 48.4 }, lastYear: { amount: 0.980, percentage: 7.3 } }, maxStorage: { amount: 8.140, date: "29/5" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.009, totalSince: 0.078 }, storage: { current: { amount: 2.623, percentage: 61.0 }, lastYear: { amount: 1.838, percentage: 42.7 } }, maxStorage: { amount: 3.117, date: "13/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 0.007 }, storage: { current: { amount: 1.465, percentage: 43.1 }, lastYear: { amount: 0.860, percentage: 25.3 } }, maxStorage: { amount: 2.198, date: "25/5" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.562, percentage: 8.3 }, lastYear: { amount: 0.129, percentage: 1.9 } }, maxStorage: { amount: 0.380, date: "30/9" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 0.014 }, storage: { current: { amount: 18.790, percentage: 35.9 }, lastYear: { amount: 5.397, percentage: 10.3 } }, maxStorage: { amount: 22.011, date: "29/5" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.012, totalSince: 0.057 }, storage: { current: { amount: 7.301, percentage: 42.5 }, lastYear: { amount: 2.222, percentage: 12.9 } }, maxStorage: { amount: 8.990, date: "28/5" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.001, totalSince: 0.006 }, storage: { current: { amount: 0.645, percentage: 29.6 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.974, date: "24/4" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 0.021 }, storage: { current: { amount: 9.338, percentage: 38.9 }, lastYear: { amount: 2.997, percentage: 12.5 } }, maxStorage: { amount: 12.036, date: "27/5" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.431, percentage: 43.5 }, lastYear: { amount: 0.003, percentage: 0.3 } }, maxStorage: { amount: 0.990, date: "16/3-29/5" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.004 }, storage: { current: { amount: 0.520, percentage: 60.5 }, lastYear: { amount: 0.118, percentage: 13.7 } }, maxStorage: { amount: 0.860, date: "16/2-12/6" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.007 }, storage: { current: { amount: 0.142, percentage: 47.7 }, lastYear: { amount: 0.055, percentage: 18.5 } }, maxStorage: { amount: 0.298, date: "30/3-29/5" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 1.226, percentage: 72.5 }, lastYear: { amount: 0.006, percentage: 0.4 } }, maxStorage: { amount: 1.690, date: "27/4-26/5" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 1.079, percentage: 75.5 }, lastYear: { amount: 0.037, percentage: 2.6 } }, maxStorage: { amount: 1.430, date: "23/3-29/5" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.037, percentage: 10.2 } }, maxStorage: { amount: 0.363, date: "16/1-7/9" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 2.236, percentage: 79.9 }, lastYear: { amount: 0.536, percentage: 19.1 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 1.754, percentage: 87.7 }, lastYear: { amount: 1.143, percentage: 57.2 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 3.802, percentage: 85.4 }, lastYear: { amount: 2.003, percentage: 45.0 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — 25/26 finalized at year's close; 26/27 begins October 1, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":1.596 }, total:117.091 },
  { year: "26/27", months: { October:0.334, November:0, December:0, January:0, February:0, March:0, April:0, May:0, June:0, July:0, "Aug-Sep":0 }, total:0.334 },
];

export const getReportDate = (): string => "06-OCT-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.00 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris eased to 37.0% (42.6 MCM), barely moved, still 26.0pp above last year\'s 11.0%.',
      el: 'Ο Κούρης υποχώρησε στο 37.0% (42.6 ΕΚΜ), 26.0μ.π. πάνω από πέρυσι (11.0%).',
      ru: 'Курис снизился — 37.0% (42.6 МКМ), +26.0пп выше прошлогодних 11.0%.',
    },
    'Kalavasos': {
      en: 'Kalavasos steady at 21.8% (3.72 MCM), still 9.3pp above last year\'s 12.5%.',
      el: 'Ο Καλαβασός σταθερός στο 21.8% (3.72 ΕΚΜ), 9.3μ.π. πάνω από πέρυσι (12.5%).',
      ru: 'Калавасос стабильно — 21.8% (3.72 МКМ), выше прошлогодних 12.5%.',
    },
    'Lefkara': {
      en: 'Lefkara unchanged at 17.3% (2.40 MCM), 2.6pp above last year\'s 14.7%.',
      el: 'Η Λεύκαρα αμετάβλητη στο 17.3% (2.40 ΕΚΜ), πάνω από πέρυσι (14.7%).',
      ru: 'Лефкара без изменений — 17.3% (2.40 МКМ), выше прошлогодних 14.7%.',
    },
    'Dipotamos': {
      en: 'Dipotamos down slightly to 25.3% (3.92 MCM), 3.1pp above last year\'s 22.2%.',
      el: 'Ο Διπόταμος ελαφρώς χαμηλότερος στο 25.3% (3.92 ΕΚΜ), 3.1μ.π. πάνω από πέρυσι (22.2%).',
      ru: 'Дипотамос немного снизился — 25.3% (3.92 МКМ), +3.1пп выше прошлогодних 22.2%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia eased to 48.4% (6.54 MCM), still 41.1pp above last year\'s 7.3%.',
      el: 'Η Γερμασόγεια υποχώρησε στο 48.4% (6.54 ΕΚΜ). 41.1μ.π. πάνω από πέρυσι (7.3%).',
      ru: 'Гермасойя снизилась — 48.4% (6.54 МКМ). +41.1пп выше прошлогодних 7.3%.',
    },
    'Arminou': {
      en: 'Arminou up to 61.0% (2.62 MCM, +0.1pp), still the only Southern Conveyor dam rising, 18.3pp above last year\'s 42.7%.',
      el: 'Ο Αρμίνου ανέβηκε στο 61.0% (2.62 ΕΚΜ, +0.1μ.π.), το μόνο φράγμα του Νότιου Αγωγού που ανεβαίνει, 18.3μ.π. πάνω από πέρυσι (42.7%).',
      ru: 'Арминоу вырос — 61.0% (2.62 МКМ, +0.1пп), по-прежнему единственная растущая дамба Южного водовода, +18.3пп выше прошлогодних 42.7%.',
    },
    'Polemidia': {
      en: 'Polemidia steady at 43.1% (1.47 MCM), still 17.8pp above last year\'s 25.3%.',
      el: 'Η Πολεμίδια σταθερή στο 43.1% (1.47 ΕΚΜ), 17.8μ.π. πάνω από πέρυσι (25.3%).',
      ru: 'Полемидия стабильна — 43.1% (1.47 МКМ), +17.8пп выше прошлогодних 25.3%.',
    },
    'Achna': {
      en: 'Achna unchanged at 8.3% (0.56 MCM), its rise streak pausing after two straight jumps, still zero recorded inflow all season.',
      el: 'Η Αχνά αμετάβλητη στο 8.3% (0.56 ΕΚΜ), η σειρά ανόδων σταματά μετά από δύο συνεχόμενα άλματα, παρά τη μηδενική εισροή.',
      ru: 'Ахна без изменений — 8.3% (0.56 МКМ), серия подъёмов приостановилась после двух скачков подряд, приток по-прежнему нулевой.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos steady at 35.9% (18.8 MCM), 25.6pp above last year\'s 10.3%.',
      el: 'Ο Ασπρόκρεμμος σταθερός στο 35.9% (18.8 ΕΚΜ), 25.6μ.π. πάνω από πέρυσι (10.3%).',
      ru: 'Аспрокреммос стабильно — 35.9% (18.8 МКМ), +25.6пп выше прошлогодних 10.3%.',
    },
    'Kannaviou': {
      en: 'Kannaviou steady at 42.5% (7.30 MCM), still 29.6pp above last year\'s 12.9%.',
      el: 'Ο Καννάβιου σταθερός στο 42.5% (7.30 ΕΚΜ), 29.6μ.π. πάνω από πέρυσι (12.9%).',
      ru: 'Каннавиу стабильно — 42.5% (7.30 МКМ), +29.6пп выше прошлогодних 12.9%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos edged up to 29.6% (0.65 MCM). Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος ανέβηκε ελαφρώς στο 29.6% (0.65 ΕΚΜ). Από 0% πέρυσι.',
      ru: 'Мавроколимпос немного вырос — 29.6% (0.65 МКМ). Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou unchanged at 38.9% (9.34 MCM), still 26.4pp above last year\'s 12.5%.',
      el: 'Ο Εύρετου αμετάβλητος στο 38.9% (9.34 ΕΚΜ). 26.4μ.π. πάνω από πέρυσι (12.5%).',
      ru: 'Эвретоу без изменений — 38.9% (9.34 МКМ). +26.4пп выше прошлогодних 12.5%.',
    },
    'Argaka': {
      en: 'Argaka unchanged at 43.5% (0.43 MCM), its multi-week slide pausing. Up from 0.3% last year.',
      el: 'Η Αργάκα αμετάβλητη στο 43.5% (0.43 ΕΚΜ), η πολυεβδομαδιαία πτώση σταματά. Από 0.3% πέρυσι.',
      ru: 'Аргака без изменений — 43.5% (0.43 МКМ), многонедельное снижение приостановилось. Год назад 0.3%.',
    },
    'Pomos': {
      en: 'Pomos unchanged at 60.5% (0.52 MCM). Up from 13.7% last year.',
      el: 'Ο Πόμος αμετάβλητος στο 60.5% (0.52 ΕΚΜ). Από 13.7% πέρυσι.',
      ru: 'Помос без изменений — 60.5% (0.52 МКМ). Год назад 13.7%.',
    },
    'Agia Marina': {
      en: 'Agia Marina steady at 47.7% (0.14 MCM) after two straight gains. Up from 18.5% last year.',
      el: 'Η Αγία Μαρίνα σταθερή στο 47.7% (0.14 ΕΚΜ) μετά από δύο συνεχόμενες ανόδους. Από 18.5% πέρυσι.',
      ru: 'Агия Марина стабильна — 47.7% (0.14 МКМ) после двух подряд ростов. Год назад 18.5%.',
    },
    'Vyzakia': {
      en: 'Vyzakia unchanged at 72.5% (1.23 MCM). Was 0.4% last year.',
      el: 'Τα Βυζακιά αμετάβλητα στο 72.5% (1.23 ΕΚΜ). Από 0.4% πέρυσι.',
      ru: 'Визакия без изменений — 72.5% (1.23 МКМ). Год назад 0.4%.',
    },
    'Xyliatos': {
      en: 'Xyliatos unchanged at 75.5% (1.08 MCM). Was 2.6% last year.',
      el: 'Ο Ξυλιάτος αμετάβλητος στο 75.5% (1.08 ΕΚΜ). Από 2.6% πέρυσι.',
      ru: 'Ксилиатос без изменений — 75.5% (1.08 МКМ). Год назад 2.6%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis unchanged at 100% (0.36 MCM), still the only dam overflowing. Up from 10.2% last year.',
      el: 'Ο Καλοπαναγιώτης αμετάβλητος στο 100% (0.36 ΕΚΜ), το μόνο φράγμα που υπερχειλίζει. Από 10.2% πέρυσι.',
      ru: 'Калопанайотис без изменений на 100% (0.36 МКМ), единственная переполненная дамба. Год назад 10.2%.',
    },
    'Tamassos': {
      en: 'Tamassos down slightly to 79.9% (2.24 MCM). Was 19.1% last year — a 4.2× year-over-year recovery.',
      el: 'Ο Ταμασός ελαφρώς χαμηλότερος στο 79.9% (2.24 ΕΚΜ). Από 19.1% πέρυσι — 4.2× ανάκαμψη.',
      ru: 'Тамассос немного снизился — 79.9% (2.24 МКМ). Год назад 19.1% — восстановление в 4.2×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta down slightly to 87.7% (1.75 MCM). Up from 57.2% one year ago.',
      el: 'Η Κλήρου-Μαλούντα ελαφρώς χαμηλότερη στο 87.7% (1.75 ΕΚΜ). Αύξηση από 57.2% πέρυσι.',
      ru: 'Клиру-Малунта немного снизилась — 87.7% (1.75 МКМ). Рост с 57.2% год назад.',
    },
    'Solea': {
      en: 'Solea unchanged at 85.4% (3.80 MCM). Up from 45.0% last year — a 1.90× year-over-year improvement.',
      el: 'Η Σολέα αμετάβλητη στο 85.4% (3.80 ΕΚΜ). Αύξηση από 45.0% πέρυσι — 1.90× βελτίωση.',
      ru: 'Солеа без изменений — 85.4% (3.80 МКМ). Рост с 45.0% год назад — улучшение в 1.90×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (5 — 6 Οκτωβρίου 2026)

Τρίτη, μια ήσυχη μέρα: συνολική αποθήκευση **35.64%** (103.6 ΕΚΜ) — μόλις χαμηλότερη από το 35.68% (103.8 ΕΚΜ) της Δευτέρας, τα περισσότερα φράγματα παρέμειναν αμετάβλητα. Ο [Αρμίνου](/el/dam/arminou/) παραμένει το μόνο φράγμα του Νότιου Αγωγού που ανεβαίνει, +0.1μ.π. στο 61.0%. Η σειρά ανόδων της [Αχνά](/el/dam/achna/) σταμάτησε στο 8.3% μετά από δύο συνεχόμενα άλματα, και η πολυεβδομαδιαία πτώση της [Αργάκα](/el/dam/argaka/) σταμάτησε επίσης στο 43.5%. Ο [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) παραμένει το μόνο φράγμα που υπερχειλίζει, αμετάβλητος στο 100%. Το χάσμα με πέρυσι παραμένει στις **23.6 μονάδες**. Εισροή σεζόν: 0.33 ΕΚΜ μέχρι στιγμής. Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στο μηδέν.

**Αξιοσημείωτα (έναντι 5 Οκτωβρίου):**
- [Αρμίνου](/el/dam/arminou/) **61.0%** (+0.1μ.π.) — το μόνο φράγμα του Νότιου Αγωγού που ανεβαίνει
- [Αχνά](/el/dam/achna/) **8.3%** (αμετάβλητη) — η σειρά ανόδων σταματά μετά από δύο άλματα
- [Αργάκα](/el/dam/argaka/) **43.5%** (αμετάβλητη) — η πολυεβδομαδιαία πτώση σταματά
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — αμετάβλητος, το μόνο φράγμα που υπερχειλίζει
- [Κούρης](/el/dam/kouris/) **37.0%** (-0.1μ.π.) — σχεδόν αμετάβλητος

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (5 — 6 октября 2026)

Вторник, тихий день: общий запас **35.64%** (103.6 МКМ) — чуть ниже 35.68% (103.8 МКМ) в понедельник, большинство дамб остались без изменений. [Арминоу](/ru/dam/arminou/) остаётся единственной дамбой Южного водовода, которая растёт, +0.1пп до 61.0%. Серия подъёмов [Ахна](/ru/dam/achna/) приостановилась на 8.3% после двух скачков подряд, а многонедельное снижение [Аргака](/ru/dam/argaka/) тоже остановилось на 43.5%. [Калопанайотис](/ru/dam/kalopanagiotis/) остаётся единственной переполненной дамбой, без изменений на 100%. Разрыв с прошлым годом остаётся на уровне **23.6 пункта**. Приток за сезон: 0.33 МКМ пока. Перекачка [Арминоу](/ru/dam/arminou/)→[Куриса](/ru/dam/kouris/) остаётся на нуле.

**Основные изменения (за период с 5 октября):**
- [Арминоу](/ru/dam/arminou/) **61.0%** (+0.1пп) — единственная дамба Южного водовода, которая растёт
- [Ахна](/ru/dam/achna/) **8.3%** (без изменений) — серия подъёмов приостановилась после двух скачков
- [Аргака](/ru/dam/argaka/) **43.5%** (без изменений) — многонедельное снижение остановилось
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — без изменений, единственная переполненная дамба
- [Курис](/ru/dam/kouris/) **37.0%** (-0.1пп) — почти без изменений

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (October 5 — 6, 2026)

Tuesday's bulletin, a quiet day: total storage **35.64%** (103.6 MCM) — just below Monday's 35.68% (103.8 MCM), with most dams unchanged. [Arminou](/dam/arminou/) remains the only Southern Conveyor dam still rising, up 0.1pp to 61.0%. [Achna](/dam/achna/)'s rise streak paused at 8.3% after two straight jumps, and [Argaka](/dam/argaka/)'s multi-week slide also paused at 43.5%. [Kalopanagiotis](/dam/kalopanagiotis/) remains the only dam overflowing, unchanged at 100%. The gap over last year holds at **23.6 points**. Season inflow so far: 0.33 MCM. The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at zero.

**Notable movements (vs. October 5):**
- [Arminou](/dam/arminou/) **61.0%** (+0.1pp) — only Southern Conveyor dam still rising
- [Achna](/dam/achna/) **8.3%** (unchanged) — rise streak pauses after two straight jumps
- [Argaka](/dam/argaka/) **43.5%** (unchanged) — multi-week slide pauses
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — unchanged, still the only dam overflowing
- [Kouris](/dam/kouris/) **37.0%** (-0.1pp) — barely moved

🔗 https://fragmata.info
`;
};
