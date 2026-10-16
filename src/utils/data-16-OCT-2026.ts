import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.057, totalSince: 0.382 }, storage: { current: { amount: 42.209, percentage: 36.7 }, lastYear: { amount: 12.084, percentage: 10.5 } }, maxStorage: { amount: 48.267, date: "16/6" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.007, totalSince: 0.021 }, storage: { current: { amount: 3.707, percentage: 21.7 }, lastYear: { amount: 2.006, percentage: 11.7 } }, maxStorage: { amount: 4.247, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.002, totalSince: 0.012 }, storage: { current: { amount: 2.402, percentage: 17.3 }, lastYear: { amount: 2.019, percentage: 14.6 } }, maxStorage: { amount: 2.569, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.007, totalSince: 0.034 }, storage: { current: { amount: 3.819, percentage: 24.6 }, lastYear: { amount: 3.307, percentage: 21.3 } }, maxStorage: { amount: 5.941, date: "3/6" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 0.023 }, storage: { current: { amount: 6.444, percentage: 47.7 }, lastYear: { amount: 0.891, percentage: 6.6 } }, maxStorage: { amount: 8.140, date: "29/5" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.041, totalSince: 0.284 }, storage: { current: { amount: 2.789, percentage: 64.9 }, lastYear: { amount: 1.785, percentage: 41.5 } }, maxStorage: { amount: 3.117, date: "13/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 0.010 }, storage: { current: { amount: 1.465, percentage: 43.1 }, lastYear: { amount: 0.849, percentage: 25.0 } }, maxStorage: { amount: 2.198, date: "25/5" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.544, percentage: 8.0 }, lastYear: { amount: 0.099, percentage: 1.5 } }, maxStorage: { amount: 0.380, date: "30/9" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.019, totalSince: 0.058 }, storage: { current: { amount: 18.564, percentage: 35.4 }, lastYear: { amount: 5.139, percentage: 9.8 } }, maxStorage: { amount: 22.011, date: "29/5" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.010, totalSince: 0.092 }, storage: { current: { amount: 7.190, percentage: 41.9 }, lastYear: { amount: 2.130, percentage: 12.4 } }, maxStorage: { amount: 8.990, date: "28/5" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.001, totalSince: 0.016 }, storage: { current: { amount: 0.651, percentage: 29.9 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.974, date: "24/4" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.002, totalSince: 0.039 }, storage: { current: { amount: 9.279, percentage: 38.7 }, lastYear: { amount: 2.911, percentage: 12.1 } }, maxStorage: { amount: 12.036, date: "27/5" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.002, totalSince: 0.009 }, storage: { current: { amount: 0.439, percentage: 44.3 }, lastYear: { amount: 0.003, percentage: 0.3 } }, maxStorage: { amount: 0.990, date: "16/3-29/5" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.005 }, storage: { current: { amount: 0.510, percentage: 59.3 }, lastYear: { amount: 0.116, percentage: 13.5 } }, maxStorage: { amount: 0.860, date: "16/2-12/6" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.001, totalSince: 0.012 }, storage: { current: { amount: 0.145, percentage: 48.7 }, lastYear: { amount: 0.055, percentage: 18.5 } }, maxStorage: { amount: 0.298, date: "30/3-29/5" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 0.001 }, storage: { current: { amount: 1.201, percentage: 71.1 }, lastYear: { amount: 0.005, percentage: 0.3 } }, maxStorage: { amount: 1.690, date: "27/4-26/5" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.001, totalSince: 0.009 }, storage: { current: { amount: 1.069, percentage: 74.8 }, lastYear: { amount: 0.030, percentage: 2.1 } }, maxStorage: { amount: 1.430, date: "23/3-29/5" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.039, percentage: 10.7 } }, maxStorage: { amount: 0.363, date: "16/1-7/9" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.019, totalSince: 0.019 }, storage: { current: { amount: 2.220, percentage: 79.3 }, lastYear: { amount: 0.522, percentage: 18.6 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.041, totalSince: 0.041 }, storage: { current: { amount: 1.781, percentage: 89.0 }, lastYear: { amount: 1.124, percentage: 56.2 } }, maxStorage: { amount: 1.473, date: "13/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 3.757, percentage: 84.3 }, lastYear: { amount: 1.955, percentage: 43.9 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

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
  { year: "26/27", months: { October:1.007, November:0, December:0, January:0, February:0, March:0, April:0, May:0, June:0, July:0, "Aug-Sep":0 }, total:1.007 },
];

export const getReportDate = (): string => "16-OCT-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.00 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris held at 36.7% (42.2 MCM), 26.2pp above last year\'s 10.5%.',
      el: 'Ο Κούρης σταθερός στο 36.7% (42.2 ΕΚΜ), 26.2μ.π. πάνω από πέρυσι (10.5%).',
      ru: 'Курис без изменений — 36.7% (42.2 МКМ), +26.2пп выше прошлогодних 10.5%.',
    },
    'Kalavasos': {
      en: 'Kalavasos held at 21.7% (3.71 MCM), 10pp above last year\'s 11.7%.',
      el: 'Ο Καλαβασός σταθερός στο 21.7% (3.71 ΕΚΜ), 10μ.π. πάνω από πέρυσι (11.7%).',
      ru: 'Калавасос без изменений — 21.7% (3.71 МКМ), +10пп выше прошлогодних 11.7%.',
    },
    'Lefkara': {
      en: 'Lefkara held at 17.3% (2.40 MCM), 2.7pp above last year\'s 14.6%.',
      el: 'Η Λεύκαρα σταθερός στο 17.3% (2.40 ΕΚΜ), 2.7μ.π. πάνω από πέρυσι (14.6%).',
      ru: 'Лефкара без изменений — 17.3% (2.40 МКМ), +2.7пп выше прошлогодних 14.6%.',
    },
    'Dipotamos': {
      en: 'Dipotamos eased to 24.6% (3.82 MCM), 3.3pp above last year\'s 21.3%.',
      el: 'Ο Διπόταμος υποχώρησε στο 24.6% (3.82 ΕΚΜ), 3.3μ.π. πάνω από πέρυσι (21.3%).',
      ru: 'Дипотамос снизился — 24.6% (3.82 МКМ), +3.3пп выше прошлогодних 21.3%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia eased to 47.7% (6.44 MCM), 41.1pp above last year\'s 6.6%.',
      el: 'Η Γερμασόγεια υποχώρησε στο 47.7% (6.44 ΕΚΜ), 41.1μ.π. πάνω από πέρυσι (6.6%).',
      ru: 'Гермасойя снизился — 47.7% (6.44 МКМ), +41.1пп выше прошлогодних 6.6%.',
    },
    'Arminou': {
      en: 'Arminou rose to 64.9% (2.79 MCM), 23.4pp above last year\'s 41.5%.',
      el: 'Ο Αρμίνου ανέβηκε στο 64.9% (2.79 ΕΚΜ), 23.4μ.π. πάνω από πέρυσι (41.5%).',
      ru: 'Арминоу вырос — 64.9% (2.79 МКМ), +23.4пп выше прошлогодних 41.5%.',
    },
    'Polemidia': {
      en: 'Polemidia held at 43.1% (1.47 MCM), 18.1pp above last year\'s 25%.',
      el: 'Η Πολεμίδια σταθερός στο 43.1% (1.47 ΕΚΜ), 18.1μ.π. πάνω από πέρυσι (25%).',
      ru: 'Полемидия без изменений — 43.1% (1.47 МКМ), +18.1пп выше прошлогодних 25%.',
    },
    'Achna': {
      en: 'Achna held at 8% (0.54 MCM), 6.5pp above last year\'s 1.5%.',
      el: 'Η Αχνά σταθερός στο 8% (0.54 ΕΚΜ), 6.5μ.π. πάνω από πέρυσι (1.5%).',
      ru: 'Ахна без изменений — 8% (0.54 МКМ), +6.5пп выше прошлогодних 1.5%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos held at 35.4% (18.6 MCM), 25.6pp above last year\'s 9.8%.',
      el: 'Ο Ασπρόκρεμμος σταθερός στο 35.4% (18.6 ΕΚΜ), 25.6μ.π. πάνω από πέρυσι (9.8%).',
      ru: 'Аспрокреммос без изменений — 35.4% (18.6 МКМ), +25.6пп выше прошлогодних 9.8%.',
    },
    'Kannaviou': {
      en: 'Kannaviou held at 41.9% (7.19 MCM), 29.5pp above last year\'s 12.4%.',
      el: 'Ο Καννάβιου σταθερός στο 41.9% (7.19 ΕΚΜ), 29.5μ.π. πάνω από πέρυσι (12.4%).',
      ru: 'Каннавиу без изменений — 41.9% (7.19 МКМ), +29.5пп выше прошлогодних 12.4%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos held at 29.9% (0.65 MCM), 29.9pp above last year\'s 0%.',
      el: 'Ο Μαυροκόλυμπος σταθερός στο 29.9% (0.65 ΕΚΜ), 29.9μ.π. πάνω από πέρυσι (0%).',
      ru: 'Мавроколимпос без изменений — 29.9% (0.65 МКМ), +29.9пп выше прошлогодних 0%.',
    },
    'Evretou': {
      en: 'Evretou held at 38.7% (9.28 MCM), 26.6pp above last year\'s 12.1%.',
      el: 'Ο Εύρετου σταθερός στο 38.7% (9.28 ΕΚΜ), 26.6μ.π. πάνω από πέρυσι (12.1%).',
      ru: 'Эвретоу без изменений — 38.7% (9.28 МКМ), +26.6пп выше прошлогодних 12.1%.',
    },
    'Argaka': {
      en: 'Argaka rose to 44.3% (0.44 MCM), 44pp above last year\'s 0.3%.',
      el: 'Η Αργάκα ανέβηκε στο 44.3% (0.44 ΕΚΜ), 44μ.π. πάνω από πέρυσι (0.3%).',
      ru: 'Аргака вырос — 44.3% (0.44 МКМ), +44пп выше прошлогодних 0.3%.',
    },
    'Pomos': {
      en: 'Pomos eased to 59.3% (0.51 MCM), 45.8pp above last year\'s 13.5%.',
      el: 'Ο Πόμος υποχώρησε στο 59.3% (0.51 ΕΚΜ), 45.8μ.π. πάνω από πέρυσι (13.5%).',
      ru: 'Помос снизился — 59.3% (0.51 МКМ), +45.8пп выше прошлогодних 13.5%.',
    },
    'Agia Marina': {
      en: 'Agia Marina rose to 48.7% (0.14 MCM), 30.2pp above last year\'s 18.5%.',
      el: 'Η Αγία Μαρίνα ανέβηκε στο 48.7% (0.14 ΕΚΜ), 30.2μ.π. πάνω από πέρυσι (18.5%).',
      ru: 'Агия Марина вырос — 48.7% (0.14 МКМ), +30.2пп выше прошлогодних 18.5%.',
    },
    'Vyzakia': {
      en: 'Vyzakia held at 71.1% (1.20 MCM), 70.8pp above last year\'s 0.3%.',
      el: 'Τα Βυζακιά σταθερός στο 71.1% (1.20 ΕΚΜ), 70.8μ.π. πάνω από πέρυσι (0.3%).',
      ru: 'Визакия без изменений — 71.1% (1.20 МКМ), +70.8пп выше прошлогодних 0.3%.',
    },
    'Xyliatos': {
      en: 'Xyliatos held at 74.8% (1.07 MCM), 72.7pp above last year\'s 2.1%.',
      el: 'Ο Ξυλιάτος σταθερός στο 74.8% (1.07 ΕΚΜ), 72.7μ.π. πάνω από πέρυσι (2.1%).',
      ru: 'Ксилиатос без изменений — 74.8% (1.07 МКМ), +72.7пп выше прошлогодних 2.1%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis unchanged at 100% (0.36 MCM), still the only dam overflowing. Up from 10.7% last year.',
      el: 'Ο Καλοπαναγιώτης αμετάβλητος στο 100% (0.36 ΕΚΜ), το μόνο φράγμα που υπερχειλίζει. Από 10.7% πέρυσι.',
      ru: 'Калопанайотис без изменений на 100% (0.36 МКМ), единственная переполненная дамба. Год назад 10.7%.',
    },
    'Tamassos': {
      en: 'Tamassos rose to 79.3% (2.22 MCM), 60.7pp above last year\'s 18.6%.',
      el: 'Ο Ταμασός ανέβηκε στο 79.3% (2.22 ΕΚΜ), 60.7μ.π. πάνω από πέρυσι (18.6%).',
      ru: 'Тамассос вырос — 79.3% (2.22 МКМ), +60.7пп выше прошлогодних 18.6%.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta rose to 89% (1.78 MCM), 32.8pp above last year\'s 56.2%.',
      el: 'Η Κλήρου-Μαλούντα ανέβηκε στο 89% (1.78 ΕΚΜ), 32.8μ.π. πάνω από πέρυσι (56.2%).',
      ru: 'Клиру-Малунта вырос — 89% (1.78 МКМ), +32.8пп выше прошлогодних 56.2%.',
    },
    'Solea': {
      en: 'Solea held at 84.3% (3.76 MCM), 40.4pp above last year\'s 43.9%.',
      el: 'Η Σολέα σταθερός στο 84.3% (3.76 ΕΚΜ), 40.4μ.π. πάνω από πέρυσι (43.9%).',
      ru: 'Солеа без изменений — 84.3% (3.76 МКМ), +40.4пп выше прошлогодних 43.9%.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (15 — 16 Οκτωβρίου 2026)

Παρασκευή: συνολική αποθήκευση **35.3%** (102.8 ΕΚΜ) — πάνω κατά 0.03 ΕΚΜ από την Πέμπτη (102.76 ΕΚΜ), δεύτερη συνεχόμενη μικρή άνοδος μετά από εβδομάδες αργής απόσυρσης. Η εισροή 24 ωρών υποχώρησε στα 0.15 ΕΚΜ (από 0.25). Ο [Αρμίνου](/el/dam/arminou/) συνεχίζει να ανεβαίνει, στο 64.9% (+0.9μ.π.), ενώ ο [Κούρης](/el/dam/kouris/) κρατά το 36.7% με εισροή 0.06 ΕΚΜ. Ο [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) παραμένει το μόνο φράγμα που υπερχειλίζει στο 100%. Το χάσμα με πέρυσι είναι **23.8 μονάδες**. Εισροή σεζόν: 1.01 ΕΚΜ μέχρι στιγμής.

**Αξιοσημείωτα (έναντι 15 Οκτωβρίου):**
- [Αρμίνου](/el/dam/arminou/) **64.9%** (+0.9μ.π.) — εισροή 0.04 ΕΚΜ, το μόνο φράγμα του Νότιου Αγωγού που ανεβαίνει
- [Κούρης](/el/dam/kouris/) **36.7%** — εισροή 0.06 ΕΚΜ, η μεγαλύτερη, κρατά την αποθήκευση σταθερή
- [Αργάκα](/el/dam/argaka/) **44.3%** (+0.2μ.π.) και [Αγία Μαρίνα](/el/dam/agia-marina/) **48.7%** (+0.4μ.π.)
- [Αχνά](/el/dam/achna/) **8.0%** — αμετάβλητη, μηδενική εισροή
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — το μόνο φράγμα που υπερχειλίζει

**Στα μέσα:**
- [Τρίτη συνεχόμενη ημέρα βροχών: Πότε εκτιμά η Μετεωρολογική ότι θα αλλάξει το σκηνικό του καιρού](https://www.alphanews.live/cyprus/triti-synechomeni-imera-vrochon-pote-ektima-i-meteorologiki-oti-tha-allaxei-to-skiniko-tou-kairou/) — AlphaNews
- [Στο 36,8% η πληρότητα των φραγμάτων](https://www.sigmalive.com/news/local/1333275/sto-368-i-plirotita-ton-fraghmaton) — Sigmalive
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (15 — 16 октября 2026)

Пятница: общий запас **35.3%** (102.8 МКМ) — на 0.03 МКМ выше, чем в четверг (102.76 МКМ), второй небольшой рост подряд после недель медленного снижения. Суточный приток снизился до 0.15 МКМ (с 0.25). [Арминоу](/ru/dam/arminou/) продолжает расти — 64.9% (+0.9пп), [Курис](/ru/dam/kouris/) держится на 36.7% с притоком 0.06 МКМ. [Калопанайотис](/ru/dam/kalopanagiotis/) остаётся единственной переполненной дамбой — 100%. Разрыв с прошлым годом — **23.8 пункта**. Приток за сезон: 1.01 МКМ пока.

**Основные изменения (за период с 15 октября):**
- [Арминоу](/ru/dam/arminou/) **64.9%** (+0.9пп) — приток 0.04 МКМ, единственная дамба Южного водовода, которая растёт
- [Курис](/ru/dam/kouris/) **36.7%** — приток 0.06 МКМ, наибольший, запас без изменений
- [Аргака](/ru/dam/argaka/) **44.3%** (+0.2пп) и [Агия Марина](/ru/dam/agia-marina/) **48.7%** (+0.4пп)
- [Ахна](/ru/dam/achna/) **8.0%** — без изменений, притока нет
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — единственная переполненная дамба

**В СМИ:**
- [Сильные дожди на Кипре вызвали наводнения, перебои с электричеством и ограничения движения](https://cyprusbutterfly.com.cy/news/silnyie-dozhdi-kipre-vyizvali-navodneniya) — Cyprus Butterfly
- [14 и 15 октября на Кипр обрушатся ливни и сильные грозы](https://evropakipr.com/novosti/14-i-15-oktyabrya-na-kipr-obrushatsya-livni-i-silnye-grozy) — Европа Кипр
`;
  }
  return `
### Recent Changes (October 15 — 16, 2026)

Friday's bulletin: total storage **35.3%** (102.8 MCM) — up 0.03 MCM from Thursday (102.76 MCM), a second small gain in a row after weeks of slow drawdown. Inflow over 24 hours eased to 0.15 MCM (from 0.25). [Arminou](/dam/arminou/) keeps climbing, to 64.9% (+0.9pp), while [Kouris](/dam/kouris/) holds at 36.7% with 0.06 MCM of inflow. [Kalopanagiotis](/dam/kalopanagiotis/) remains the only dam overflowing at 100%. The gap over last year stands at **23.8 points**. Season inflow so far: 1.01 MCM.

**Notable movements (vs. October 15):**
- [Arminou](/dam/arminou/) **64.9%** (+0.9pp) — 0.04 MCM of inflow, the only Southern Conveyor dam still rising
- [Kouris](/dam/kouris/) **36.7%** — 0.06 MCM, the largest single inflow, storage steady
- [Argaka](/dam/argaka/) **44.3%** (+0.2pp) and [Agia Marina](/dam/agia-marina/) **48.7%** (+0.4pp)
- [Achna](/dam/achna/) **8.0%** — unchanged, zero inflow
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing

**In the media:**
- [Fire brigade responds to 78 calls in 24 hours, 13 flood related](https://cyprus-mail.com/2026/10/15/fire-brigade-responds-to-78-calls-in-24-hours-13-flood-related) — Cyprus Mail
- [Agriculture ministry allocates €200m to irrigation projects](https://cyprus-mail.com/2026/10/07/agriculture-ministry-allocates-e200m-to-irrigation-projects) — Cyprus Mail
`;
};
