import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.054, totalSince: 1.627 }, storage: { current: { amount: 41.748, percentage: 36.3 }, lastYear: { amount: 10.288, percentage: 8.9 } }, maxStorage: { amount: 48.267, date: "16/6" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0, totalSince: 0.072 }, storage: { current: { amount: 3.632, percentage: 21.2 }, lastYear: { amount: 1.686, percentage: 9.9 } }, maxStorage: { amount: 4.247, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0, totalSince: 0.019 }, storage: { current: { amount: 2.383, percentage: 17.2 }, lastYear: { amount: 1.977, percentage: 14.3 } }, maxStorage: { amount: 2.569, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0, totalSince: 0.108 }, storage: { current: { amount: 3.602, percentage: 23.2 }, lastYear: { amount: 2.895, percentage: 18.7 } }, maxStorage: { amount: 5.941, date: "3/6" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0, totalSince: 0.072 }, storage: { current: { amount: 6.205, percentage: 46 }, lastYear: { amount: 0.573, percentage: 4.2 } }, maxStorage: { amount: 8.14, date: "29/5" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.044, totalSince: 0.839 }, storage: { current: { amount: 3.22, percentage: 74.9 }, lastYear: { amount: 1.681, percentage: 39.1 } }, maxStorage: { amount: 3.117, date: "13/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0, totalSince: 0.019 }, storage: { current: { amount: 1.46, percentage: 42.9 }, lastYear: { amount: 0.803, percentage: 23.6 } }, maxStorage: { amount: 2.198, date: "25/5" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0, totalSince: 0 }, storage: { current: { amount: 0.565, percentage: 8.3 }, lastYear: { amount: 0.091, percentage: 1.3 } }, maxStorage: { amount: 0.38, date: "30/9" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.006, totalSince: 0.202 }, storage: { current: { amount: 18.221, percentage: 34.8 }, lastYear: { amount: 4.456, percentage: 8.5 } }, maxStorage: { amount: 22.011, date: "29,5" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0, totalSince: 0.151 }, storage: { current: { amount: 6.926, percentage: 40.3 }, lastYear: { amount: 1.806, percentage: 10.5 } }, maxStorage: { amount: 8.99, date: "28/5" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0, totalSince: 0.037 }, storage: { current: { amount: 0.789, percentage: 36.2 }, lastYear: { amount: 0, percentage: 0 } }, maxStorage: { amount: 1.974, date: "24/4" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0, totalSince: 0.072 }, storage: { current: { amount: 9.136, percentage: 38.1 }, lastYear: { amount: 2.572, percentage: 10.7 } }, maxStorage: { amount: 12.036, date: "27/5" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0, totalSince: 0.012 }, storage: { current: { amount: 0.422, percentage: 42.6 }, lastYear: { amount: 0, percentage: 0 } }, maxStorage: { amount: 0.99, date: "16/3-29/5" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0, totalSince: 0.007 }, storage: { current: { amount: 0.493, percentage: 57.3 }, lastYear: { amount: 0.102, percentage: 11.9 } }, maxStorage: { amount: 0.86, date: "16/2-12/6" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.001, totalSince: 0.026 }, storage: { current: { amount: 0.158, percentage: 53 }, lastYear: { amount: 0.057, percentage: 19.1 } }, maxStorage: { amount: 0.298, date: "30/3-29/5" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0, totalSince: 0.001 }, storage: { current: { amount: 1.154, percentage: 68.3 }, lastYear: { amount: 0.002, percentage: 0.1 } }, maxStorage: { amount: 1.69, date: "27/4-26/5" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0, totalSince: 0.019 }, storage: { current: { amount: 1.052, percentage: 73.6 }, lastYear: { amount: 0.019, percentage: 1.3 } }, maxStorage: { amount: 1.43, date: "23/3-29/5" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0, totalSince: 0 }, storage: { current: { amount: 0.363, percentage: 100 }, lastYear: { amount: 0.049, percentage: 13.5 } }, maxStorage: { amount: 0.363, date: "16/1-7/9" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0, totalSince: 0.021 }, storage: { current: { amount: 2.127, percentage: 76 }, lastYear: { amount: 0.476, percentage: 17 } }, maxStorage: { amount: 2.8, date: "2/4-5/6" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.005, totalSince: 0.114 }, storage: { current: { amount: 1.824, percentage: 91.2 }, lastYear: { amount: 1.081, percentage: 54.1 } }, maxStorage: { amount: 2, date: "14/2-30/6" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0, totalSince: 0 }, storage: { current: { amount: 3.642, percentage: 81.8 }, lastYear: { amount: 1.867, percentage: 41.9 } }, maxStorage: { amount: 4.454, date: "10/3-2/6" }, region: "Recharge/Other" },
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
    { year: "26/27", months: { October:2.293, November:0.99, December:0, January:0, February:0, March:0, April:0, May:0, June:0, July:0, "Aug-Sep":0 }, total:3.283 },
];

export const getReportDate = (): string => "16-NOV-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.00 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris eased to 36.3% (41.75 MCM), 27.4pp above last year\'s 8.9%.',
      el: 'Κούρης υποχώρησε στο 36.3% (41.75 ΕΚΜ), 27.4μ.π. πάνω από πέρυσι (8.9%).',
      ru: 'Курис снизился — 36.3% (41.75 МКМ), +27.4пп выше прошлогодних 8.9%.',
    },
    'Kalavasos': {
      en: 'Kalavasos eased to 21.2% (3.63 MCM), 11.3pp above last year\'s 9.9%.',
      el: 'Καλαβασός υποχώρησε στο 21.2% (3.63 ΕΚΜ), 11.3μ.π. πάνω από πέρυσι (9.9%).',
      ru: 'Калавасос снизился — 21.2% (3.63 МКМ), +11.3пп выше прошлогодних 9.9%.',
    },
    'Lefkara': {
      en: 'Lefkara eased to 17.2% (2.38 MCM), 2.9pp above last year\'s 14.3%.',
      el: 'Λεύκαρα υποχώρησε στο 17.2% (2.38 ΕΚΜ), 2.9μ.π. πάνω από πέρυσι (14.3%).',
      ru: 'Лефкара снизился — 17.2% (2.38 МКМ), +2.9пп выше прошлогодних 14.3%.',
    },
    'Dipotamos': {
      en: 'Dipotamos eased to 23.2% (3.60 MCM), 4.5pp above last year\'s 18.7%.',
      el: 'Διπόταμος υποχώρησε στο 23.2% (3.60 ΕΚΜ), 4.5μ.π. πάνω από πέρυσι (18.7%).',
      ru: 'Дипотамос снизился — 23.2% (3.60 МКМ), +4.5пп выше прошлогодних 18.7%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia eased to 46% (6.21 MCM), 41.8pp above last year\'s 4.2%.',
      el: 'Γερμασόγεια υποχώρησε στο 46% (6.21 ΕΚΜ), 41.8μ.π. πάνω από πέρυσι (4.2%).',
      ru: 'Гермасойя снизился — 46% (6.21 МКМ), +41.8пп выше прошлогодних 4.2%.',
    },
    'Arminou': {
      en: 'Arminou rose to 74.9% (3.22 MCM), 35.8pp above last year\'s 39.1%.',
      el: 'Αρμίνου ανέβηκε στο 74.9% (3.22 ΕΚΜ), 35.8μ.π. πάνω από πέρυσι (39.1%).',
      ru: 'Арминоу вырос — 74.9% (3.22 МКМ), +35.8пп выше прошлогодних 39.1%.',
    },
    'Polemidia': {
      en: 'Polemidia eased to 42.9% (1.46 MCM), 19.3pp above last year\'s 23.6%.',
      el: 'Πολεμίδια υποχώρησε στο 42.9% (1.46 ΕΚΜ), 19.3μ.π. πάνω από πέρυσι (23.6%).',
      ru: 'Полемидия снизился — 42.9% (1.46 МКМ), +19.3пп выше прошлогодних 23.6%.',
    },
    'Achna': {
      en: 'Achna rose to 8.3% (0.57 MCM), 7pp above last year\'s 1.3%.',
      el: 'Αχνά ανέβηκε στο 8.3% (0.57 ΕΚΜ), 7μ.π. πάνω από πέρυσι (1.3%).',
      ru: 'Ахна вырос — 8.3% (0.57 МКМ), +7пп выше прошлогодних 1.3%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos eased to 34.8% (18.22 MCM), 26.3pp above last year\'s 8.5%.',
      el: 'Ασπρόκρεμμος υποχώρησε στο 34.8% (18.22 ΕΚΜ), 26.3μ.π. πάνω από πέρυσι (8.5%).',
      ru: 'Аспрокреммос снизился — 34.8% (18.22 МКМ), +26.3пп выше прошлогодних 8.5%.',
    },
    'Kannaviou': {
      en: 'Kannaviou eased to 40.3% (6.93 MCM), 29.8pp above last year\'s 10.5%.',
      el: 'Καννάβιου υποχώρησε στο 40.3% (6.93 ΕΚΜ), 29.8μ.π. πάνω από πέρυσι (10.5%).',
      ru: 'Каннавиу снизился — 40.3% (6.93 МКМ), +29.8пп выше прошлогодних 10.5%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos eased to 36.2% (0.79 MCM), 36.2pp above last year\'s 0%.',
      el: 'Μαυροκόλυμπος υποχώρησε στο 36.2% (0.79 ΕΚΜ), 36.2μ.π. πάνω από πέρυσι (0%).',
      ru: 'Мавроколимпос снизился — 36.2% (0.79 МКМ), +36.2пп выше прошлогодних 0%.',
    },
    'Evretou': {
      en: 'Evretou eased to 38.1% (9.14 MCM), 27.4pp above last year\'s 10.7%.',
      el: 'Εύρετου υποχώρησε στο 38.1% (9.14 ΕΚΜ), 27.4μ.π. πάνω από πέρυσι (10.7%).',
      ru: 'Эвретоу снизился — 38.1% (9.14 МКМ), +27.4пп выше прошлогодних 10.7%.',
    },
    'Argaka': {
      en: 'Argaka held at 42.6% (0.42 MCM), 42.6pp above last year\'s 0%.',
      el: 'Αργάκα παρέμεινε στο 42.6% (0.42 ΕΚΜ), 42.6μ.π. πάνω από πέρυσι (0%).',
      ru: 'Аргака без изменений — 42.6% (0.42 МКМ), +42.6пп выше прошлогодних 0%.',
    },
    'Pomos': {
      en: 'Pomos eased to 57.3% (0.49 MCM), 45.4pp above last year\'s 11.9%.',
      el: 'Πόμος υποχώρησε στο 57.3% (0.49 ΕΚΜ), 45.4μ.π. πάνω από πέρυσι (11.9%).',
      ru: 'Помос снизился — 57.3% (0.49 МКМ), +45.4пп выше прошлогодних 11.9%.',
    },
    'Agia Marina': {
      en: 'Agia Marina rose to 53% (0.16 MCM), 33.9pp above last year\'s 19.1%.',
      el: 'Αγία Μαρίνα ανέβηκε στο 53% (0.16 ΕΚΜ), 33.9μ.π. πάνω από πέρυσι (19.1%).',
      ru: 'Агия вырос — 53% (0.16 МКМ), +33.9пп выше прошлогодних 19.1%.',
    },
    'Vyzakia': {
      en: 'Vyzakia eased to 68.3% (1.15 MCM), 68.2pp above last year\'s 0.1%.',
      el: 'Βυζακιά υποχώρησε στο 68.3% (1.15 ΕΚΜ), 68.2μ.π. πάνω από πέρυσι (0.1%).',
      ru: 'Визакия снизился — 68.3% (1.15 МКМ), +68.2пп выше прошлогодних 0.1%.',
    },
    'Xyliatos': {
      en: 'Xyliatos eased to 73.6% (1.05 MCM), 72.3pp above last year\'s 1.3%.',
      el: 'Ξυλιάτος υποχώρησε στο 73.6% (1.05 ΕΚΜ), 72.3μ.π. πάνω από πέρυσι (1.3%).',
      ru: 'Ксилиатос снизился — 73.6% (1.05 МКМ), +72.3пп выше прошлогодних 1.3%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis unchanged at 100% (0.36 MCM), still the only dam overflowing. Up from 13.5% last year.',
      el: 'Ο Καλοπαναγιώτης αμετάβλητος στο 100% (0.36 ΕΚΜ), το μόνο φράγμα που υπερχειλίζει. Από 13.5% πέρυσι.',
      ru: 'Калопанайотис без изменений на 100% (0.36 МКМ), единственная переполненная дамба. Год назад 13.5%.',
    },
    'Tamassos': {
      en: 'Tamassos eased to 76% (2.13 MCM), 59pp above last year\'s 17%.',
      el: 'Ταμασός υποχώρησε στο 76% (2.13 ΕΚΜ), 59μ.π. πάνω από πέρυσι (17%).',
      ru: 'Тамассос снизился — 76% (2.13 МКМ), +59пп выше прошлогодних 17%.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta rose to 91.2% (1.82 MCM), 37.1pp above last year\'s 54.1%.',
      el: 'Κλήρου-Μαλούντα ανέβηκε στο 91.2% (1.82 ΕΚΜ), 37.1μ.π. πάνω από πέρυσι (54.1%).',
      ru: 'Клиру-Малунта вырос — 91.2% (1.82 МКМ), +37.1пп выше прошлогодних 54.1%.',
    },
    'Solea': {
      en: 'Solea eased to 81.8% (3.64 MCM), 39.9pp above last year\'s 41.9%.',
      el: 'Σολέα υποχώρησε στο 81.8% (3.64 ΕΚΜ), 39.9μ.π. πάνω από πέρυσι (41.9%).',
      ru: 'Солеа снизился — 81.8% (3.64 МКМ), +39.9пп выше прошлогодних 41.9%.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (9 — 16 Νοεμβρίου 2026)

Δελτίο Δευτέρας: συνολική αποθήκευση **34.9%** (101.53 ΕΚΜ) — μείωση 0.18 ΕΚΜ από την Παρασκευή (101.71 ΕΚΜ) και 0.48 ΕΚΜ κάτω από τις 9 Νοεμβρίου (102.01 ΕΚΜ), με τη βραδεία πτώση να συνεχίζεται. Η εισροή των τελευταίων τριών ημερών ήταν 0.11 ΕΚΜ και η εισροή σεζόν φτάνει τα 3.28 ΕΚΜ. Το προβάδισμα έναντι πέρυσι είναι **24.9 μονάδες**.

**Αξιοσημείωτα (έναντι 9 Νοεμβρίου):**
- [Αρμίνου](/el/dam/arminou/) **74.9%** (+1.8μ.π. την εβδομάδα, 3.22 ΕΚΜ) — νέο υψηλό σεζόν, ο σταθερός «ανερχόμενος»
- [Κούρης](/el/dam/kouris/) **36.3%** (−0.26 ΕΚΜ την εβδομάδα, 41.75 ΕΚΜ) — εισροή 0.05 ΕΚΜ σε τρεις ημέρες, αλλά η πτώση συνεχίζεται
- [Αχνά](/el/dam/achna/) **8.3%** (+0.03 ΕΚΜ, 0.57 ΕΚΜ) — πρώτη άνοδος της σεζόν
- [Ασπρόκρεμμος](/el/dam/asprokremmos/) **34.8%** (−0.09 ΕΚΜ την εβδομάδα, 18.22 ΕΚΜ) — ελαφρά υποχώρηση
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — το μόνο φράγμα που υπερχειλίζει

**Στα μέσα:**
- [Έρχονται βροχές: Ποιες περιοχές επηρεάζονται, ο καιρός μέχρι το Σάββατο](https://www.alphanews.live/cyprus/erchontai-vroches-poies-perioches-epireazontai-o-kairos-mechri-to-savvato/) — AlphaNews
- [Αλλάζει το σκηνικό του καιρού στην Κύπρο – Έρχονται βροχές και καταιγίδες](https://dialogos.com.cy/allazei-to-skiniko-toy-kairoy-stin-kypro-erchontai-vroches-kai-kataigides-pote-tha-epireastei-to-nisi/) — Dialogos
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (9 — 16 ноября 2026)

Бюллетень понедельника: общий запас **34.9%** (101.53 МКМ) — на 0.18 МКМ меньше, чем в пятницу (101.71 МКМ), и на 0.48 МКМ ниже, чем 9 ноября (102.01 МКМ): медленное снижение продолжается. Приток за последние три дня — 0.11 МКМ, за сезон — 3.28 МКМ. Отрыв от прошлого года — **24.9 пункта**.

**Основные изменения (за период с 9 ноября):**
- [Арминоу](/ru/dam/arminou/) **74.9%** (+1.8пп за неделю, 3.22 МКМ) — новый максимум сезона, остаётся главным «растущим» водохранилищем
- [Курис](/ru/dam/kouris/) **36.3%** (−0.26 МКМ за неделю, 41.75 МКМ) — приток за три дня 0.05 МКМ, но снижение продолжается
- [Ахна](/ru/dam/achna/) **8.3%** (+0.03 МКМ, 0.57 МКМ) — первый рост за сезон
- [Аспрокреммос](/ru/dam/asprokremmos/) **34.8%** (−0.09 МКМ за неделю, 18.22 МКМ) — небольшое снижение
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — единственная переполненная дамба
`;
  }
  return `
### Recent Changes (November 9 — 16, 2026)

Monday's bulletin: total storage **34.9%** (101.53 MCM) — down 0.18 MCM from Friday (101.71 MCM) and 0.48 MCM below November 9 (102.01 MCM), the slow drawdown continuing. Inflow over the last three days was 0.11 MCM and the season total reaches 3.28 MCM. The gap over last year is **24.9 points**.

**Notable movements (vs. November 9):**
- [Arminou](/dam/arminou/) **74.9%** (+1.8pp on the week, 3.22 MCM) — new season high, still the steady riser
- [Kouris](/dam/kouris/) **36.3%** (−0.26 MCM on the week, 41.75 MCM) — 0.05 MCM of inflow over three days, but the drawdown continues
- [Achna](/dam/achna/) **8.3%** (+0.03 MCM, 0.57 MCM) — its first uptick of the season
- [Asprokremmos](/dam/asprokremmos/) **34.8%** (−0.09 MCM on the week, 18.22 MCM) — easing slightly
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing

**In the media:**
- [Mazotos residents reject compensation measures over desalination plant](https://cyprus-mail.com/2026/11/03/mazotos-residents-reject-compensation-measures-over-desalination-plant) — Cyprus Mail
- [Agriculture Ministry Budget Rises to €532m, With 43% Allocated to Water](https://en.politis.com.cy/news/environment/1061681/agriculture-ministry-budget-rises-to-eur532m-with-43-allocated-to-water) — Politis
`;
};
