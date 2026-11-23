import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.061, totalSince: 1.766 }, storage: { current: { amount: 41.426, percentage: 36 }, lastYear: { amount: 9.952, percentage: 8.7 } }, maxStorage: { amount: 48.267, date: "16/6" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0, totalSince: 0.072 }, storage: { current: { amount: 3.615, percentage: 21.1 }, lastYear: { amount: 1.661, percentage: 9.7 } }, maxStorage: { amount: 4.247, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0, totalSince: 0.019 }, storage: { current: { amount: 2.38, percentage: 17.2 }, lastYear: { amount: 1.967, percentage: 14.2 } }, maxStorage: { amount: 2.569, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0, totalSince: 0.108 }, storage: { current: { amount: 3.539, percentage: 22.8 }, lastYear: { amount: 2.852, percentage: 18.4 } }, maxStorage: { amount: 5.941, date: "3/6" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0, totalSince: 0.072 }, storage: { current: { amount: 6.165, percentage: 45.7 }, lastYear: { amount: 0.512, percentage: 3.8 } }, maxStorage: { amount: 8.14, date: "29/5" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.039, totalSince: 0.937 }, storage: { current: { amount: 3.29, percentage: 76.5 }, lastYear: { amount: 1.67, percentage: 38.8 } }, maxStorage: { amount: 3.117, date: "13/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0, totalSince: 0.019 }, storage: { current: { amount: 1.453, percentage: 42.7 }, lastYear: { amount: 0.799, percentage: 23.5 } }, maxStorage: { amount: 2.198, date: "25/5" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0, totalSince: 0 }, storage: { current: { amount: 0.655, percentage: 9.6 }, lastYear: { amount: 0.089, percentage: 1.3 } }, maxStorage: { amount: 0.38, date: "30/9" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0, totalSince: 0.203 }, storage: { current: { amount: 18.155, percentage: 34.7 }, lastYear: { amount: 4.347, percentage: 8.3 } }, maxStorage: { amount: 22.011, date: "29,5" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0, totalSince: 0.157 }, storage: { current: { amount: 6.881, percentage: 40.1 }, lastYear: { amount: 1.744, percentage: 10.2 } }, maxStorage: { amount: 8.99, date: "28/5" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0, totalSince: 0.037 }, storage: { current: { amount: 0.783, percentage: 35.9 }, lastYear: { amount: 0, percentage: 0 } }, maxStorage: { amount: 1.974, date: "24/4" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0, totalSince: 0.072 }, storage: { current: { amount: 9.097, percentage: 37.9 }, lastYear: { amount: 2.509, percentage: 10.5 } }, maxStorage: { amount: 12.036, date: "27/5" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0, totalSince: 0.012 }, storage: { current: { amount: 0.419, percentage: 42.3 }, lastYear: { amount: 0, percentage: 0 } }, maxStorage: { amount: 0.99, date: "16/3-29/5" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0, totalSince: 0.007 }, storage: { current: { amount: 0.489, percentage: 56.9 }, lastYear: { amount: 0.096, percentage: 11.2 } }, maxStorage: { amount: 0.86, date: "16/2-12/6" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.001, totalSince: 0.03 }, storage: { current: { amount: 0.162, percentage: 54.4 }, lastYear: { amount: 0.057, percentage: 19.1 } }, maxStorage: { amount: 0.298, date: "30/3-29/5" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0, totalSince: 0.001 }, storage: { current: { amount: 1.138, percentage: 67.3 }, lastYear: { amount: 0.001, percentage: 0.1 } }, maxStorage: { amount: 1.69, date: "27/4-26/5" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0, totalSince: 0.019 }, storage: { current: { amount: 1.036, percentage: 72.4 }, lastYear: { amount: 0.017, percentage: 1.2 } }, maxStorage: { amount: 1.43, date: "23/3-29/5" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0, totalSince: 0 }, storage: { current: { amount: 0.363, percentage: 100 }, lastYear: { amount: 0.048, percentage: 13.2 } }, maxStorage: { amount: 0.363, date: "16/1-7/9" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0, totalSince: 0.021 }, storage: { current: { amount: 2.1, percentage: 75 }, lastYear: { amount: 0.464, percentage: 16.6 } }, maxStorage: { amount: 2.8, date: "2/4-5/6" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.003, totalSince: 0.119 }, storage: { current: { amount: 1.824, percentage: 91.2 }, lastYear: { amount: 1.067, percentage: 53.4 } }, maxStorage: { amount: 2, date: "14/2-30/6" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0, totalSince: 0 }, storage: { current: { amount: 3.618, percentage: 81.2 }, lastYear: { amount: 1.847, percentage: 41.5 } }, maxStorage: { amount: 4.454, date: "10/3-2/6" }, region: "Recharge/Other" },
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
  { year: "26/27", months: { October:2.293, November:1.238, December:0, January:0, February:0, March:0, April:0, May:0, June:0, July:0, "Aug-Sep":0 }, total:3.531 },
];

export const getReportDate = (): string => "23-NOV-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.00 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris eased to 36% (41.43 MCM), 27.3pp above last year\'s 8.7%.',
      el: 'Κούρης υποχώρησε στο 36% (41.43 ΕΚΜ), 27.3μ.π. πάνω από πέρυσι (8.7%).',
      ru: 'Курис снизился — 36% (41.43 МКМ), +27.3пп выше прошлогодних 8.7%.',
    },
    'Kalavasos': {
      en: 'Kalavasos eased to 21.1% (3.62 MCM), 11.4pp above last year\'s 9.7%.',
      el: 'Καλαβασός υποχώρησε στο 21.1% (3.62 ΕΚΜ), 11.4μ.π. πάνω από πέρυσι (9.7%).',
      ru: 'Калавасос снизился — 21.1% (3.62 МКМ), +11.4пп выше прошлогодних 9.7%.',
    },
    'Lefkara': {
      en: 'Lefkara eased to 17.2% (2.38 MCM), 3pp above last year\'s 14.2%.',
      el: 'Λεύκαρα υποχώρησε στο 17.2% (2.38 ΕΚΜ), 3μ.π. πάνω από πέρυσι (14.2%).',
      ru: 'Лефкара снизился — 17.2% (2.38 МКМ), +3пп выше прошлогодних 14.2%.',
    },
    'Dipotamos': {
      en: 'Dipotamos eased to 22.8% (3.54 MCM), 4.4pp above last year\'s 18.4%.',
      el: 'Διπόταμος υποχώρησε στο 22.8% (3.54 ΕΚΜ), 4.4μ.π. πάνω από πέρυσι (18.4%).',
      ru: 'Дипотамос снизился — 22.8% (3.54 МКМ), +4.4пп выше прошлогодних 18.4%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia eased to 45.7% (6.17 MCM), 41.9pp above last year\'s 3.8%.',
      el: 'Γερμασόγεια υποχώρησε στο 45.7% (6.17 ΕΚΜ), 41.9μ.π. πάνω από πέρυσι (3.8%).',
      ru: 'Гермасойя снизился — 45.7% (6.17 МКМ), +41.9пп выше прошлогодних 3.8%.',
    },
    'Arminou': {
      en: 'Arminou rose to 76.5% (3.29 MCM), 37.7pp above last year\'s 38.8%.',
      el: 'Αρμίνου ανέβηκε στο 76.5% (3.29 ΕΚΜ), 37.7μ.π. πάνω από πέρυσι (38.8%).',
      ru: 'Арминоу вырос — 76.5% (3.29 МКМ), +37.7пп выше прошлогодних 38.8%.',
    },
    'Polemidia': {
      en: 'Polemidia eased to 42.7% (1.45 MCM), 19.2pp above last year\'s 23.5%.',
      el: 'Πολεμίδια υποχώρησε στο 42.7% (1.45 ΕΚΜ), 19.2μ.π. πάνω από πέρυσι (23.5%).',
      ru: 'Полемидия снизился — 42.7% (1.45 МКМ), +19.2пп выше прошлогодних 23.5%.',
    },
    'Achna': {
      en: 'Achna rose to 9.6% (0.66 MCM), 8.3pp above last year\'s 1.3%.',
      el: 'Αχνά ανέβηκε στο 9.6% (0.66 ΕΚΜ), 8.3μ.π. πάνω από πέρυσι (1.3%).',
      ru: 'Ахна вырос — 9.6% (0.66 МКМ), +8.3пп выше прошлогодних 1.3%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos eased to 34.7% (18.16 MCM), 26.4pp above last year\'s 8.3%.',
      el: 'Ασπρόκρεμμος υποχώρησε στο 34.7% (18.16 ΕΚΜ), 26.4μ.π. πάνω από πέρυσι (8.3%).',
      ru: 'Аспрокреммос снизился — 34.7% (18.16 МКМ), +26.4пп выше прошлогодних 8.3%.',
    },
    'Kannaviou': {
      en: 'Kannaviou eased to 40.1% (6.88 MCM), 29.9pp above last year\'s 10.2%.',
      el: 'Καννάβιου υποχώρησε στο 40.1% (6.88 ΕΚΜ), 29.9μ.π. πάνω από πέρυσι (10.2%).',
      ru: 'Каннавиу снизился — 40.1% (6.88 МКМ), +29.9пп выше прошлогодних 10.2%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos eased to 35.9% (0.78 MCM), 35.9pp above last year\'s 0%.',
      el: 'Μαυροκόλυμπος υποχώρησε στο 35.9% (0.78 ΕΚΜ), 35.9μ.π. πάνω από πέρυσι (0%).',
      ru: 'Мавроколимпос снизился — 35.9% (0.78 МКМ), +35.9пп выше прошлогодних 0%.',
    },
    'Evretou': {
      en: 'Evretou eased to 37.9% (9.10 MCM), 27.4pp above last year\'s 10.5%.',
      el: 'Εύρετου υποχώρησε στο 37.9% (9.10 ΕΚΜ), 27.4μ.π. πάνω από πέρυσι (10.5%).',
      ru: 'Эвретоу снизился — 37.9% (9.10 МКМ), +27.4пп выше прошлогодних 10.5%.',
    },
    'Argaka': {
      en: 'Argaka eased to 42.3% (0.42 MCM), 42.3pp above last year\'s 0%.',
      el: 'Αργάκα υποχώρησε στο 42.3% (0.42 ΕΚΜ), 42.3μ.π. πάνω από πέρυσι (0%).',
      ru: 'Аргака снизился — 42.3% (0.42 МКМ), +42.3пп выше прошлогодних 0%.',
    },
    'Pomos': {
      en: 'Pomos eased to 56.9% (0.49 MCM), 45.7pp above last year\'s 11.2%.',
      el: 'Πόμος υποχώρησε στο 56.9% (0.49 ΕΚΜ), 45.7μ.π. πάνω από πέρυσι (11.2%).',
      ru: 'Помос снизился — 56.9% (0.49 МКМ), +45.7пп выше прошлогодних 11.2%.',
    },
    'Agia Marina': {
      en: 'Agia Marina rose to 54.4% (0.16 MCM), 35.3pp above last year\'s 19.1%.',
      el: 'Αγία Μαρίνα ανέβηκε στο 54.4% (0.16 ΕΚΜ), 35.3μ.π. πάνω από πέρυσι (19.1%).',
      ru: 'Агия вырос — 54.4% (0.16 МКМ), +35.3пп выше прошлогодних 19.1%.',
    },
    'Vyzakia': {
      en: 'Vyzakia eased to 67.3% (1.14 MCM), 67.2pp above last year\'s 0.1%.',
      el: 'Βυζακιά υποχώρησε στο 67.3% (1.14 ΕΚΜ), 67.2μ.π. πάνω από πέρυσι (0.1%).',
      ru: 'Визакия снизился — 67.3% (1.14 МКМ), +67.2пп выше прошлогодних 0.1%.',
    },
    'Xyliatos': {
      en: 'Xyliatos eased to 72.4% (1.04 MCM), 71.2pp above last year\'s 1.2%.',
      el: 'Ξυλιάτος υποχώρησε στο 72.4% (1.04 ΕΚΜ), 71.2μ.π. πάνω από πέρυσι (1.2%).',
      ru: 'Ксилиатос снизился — 72.4% (1.04 МКМ), +71.2пп выше прошлогодних 1.2%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis unchanged at 100% (0.36 MCM), still the only dam overflowing. Up from 13.2% last year.',
      el: 'Ο Καλοπαναγιώτης αμετάβλητος στο 100% (0.36 ΕΚΜ), το μόνο φράγμα που υπερχειλίζει. Από 13.2% πέρυσι.',
      ru: 'Калопанайотис без изменений на 100% (0.36 МКМ), единственная переполненная дамба. Год назад 13.2%.',
    },
    'Tamassos': {
      en: 'Tamassos eased to 75% (2.10 MCM), 58.4pp above last year\'s 16.6%.',
      el: 'Ταμασός υποχώρησε στο 75% (2.10 ΕΚΜ), 58.4μ.π. πάνω από πέρυσι (16.6%).',
      ru: 'Тамассос снизился — 75% (2.10 МКМ), +58.4пп выше прошлогодних 16.6%.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta held at 91.2% (1.82 MCM), 37.8pp above last year\'s 53.4%.',
      el: 'Κλήρου-Μαλούντα παρέμεινε στο 91.2% (1.82 ΕΚΜ), 37.8μ.π. πάνω από πέρυσι (53.4%).',
      ru: 'Клиру-Малунта без изменений — 91.2% (1.82 МКМ), +37.8пп выше прошлогодних 53.4%.',
    },
    'Solea': {
      en: 'Solea eased to 81.2% (3.62 MCM), 39.7pp above last year\'s 41.5%.',
      el: 'Σολέα υποχώρησε στο 81.2% (3.62 ΕΚΜ), 39.7μ.π. πάνω από πέρυσι (41.5%).',
      ru: 'Солеа снизился — 81.2% (3.62 МКМ), +39.7пп выше прошлогодних 41.5%.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (16 — 23 Νοεμβρίου 2026)

Δελτίο Δευτέρας (καλύπτει το Σαββατοκύριακο): συνολική αποθήκευση **34.7%** (101.05 ΕΚΜ) — μείωση 0.12 ΕΚΜ από την Παρασκευή και 0.48 ΕΚΜ κάτω από τις 16 Νοεμβρίου (101.53 ΕΚΜ), με τη βραδεία πτώση να συνεχίζεται. Η εισροή των τελευταίων τριών ημερών ήταν 0.10 ΕΚΜ και η εισροή σεζόν φτάνει τα 3.53 ΕΚΜ. Το προβάδισμα έναντι πέρυσι είναι **25.0 μονάδες**.

**Αξιοσημείωτα (έναντι 16 Νοεμβρίου):**
- [Αρμίνου](/el/dam/arminou/) **76.5%** (+1.6μ.π. την εβδομάδα, 3.29 ΕΚΜ) — νέο υψηλό σεζόν, ο σταθερός «ανερχόμενος»
- [Κούρης](/el/dam/kouris/) **36.0%** (−0.32 ΕΚΜ την εβδομάδα, 41.43 ΕΚΜ) — η πτώση συνεχίζεται παρά τη μικρή εισροή
- [Αχνά](/el/dam/achna/) **9.6%** (+1.3μ.π. την εβδομάδα, 0.66 ΕΚΜ) — διατηρεί την πρώτη άνοδο της σεζόν
- [Ασπρόκρεμμος](/el/dam/asprokremmos/) **34.7%** (18.16 ΕΚΜ) — σχεδόν αμετάβλητος
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — το μόνο φράγμα που υπερχειλίζει

**Στα μέσα:**
- [Ηλιάνα Τόφα για μονάδα αφαλάτωσης στον Μαζωτό: Κανονικά συνεχίζονται οι εργασίες](https://www.politis.com.cy/cyprus/perivallon/1071790/hliana-tofa-ghia-monada-afalatosis-ston-mazoto-kanonika-sinekhizontai-oi-erghasies-eghinan-oles-oi-perivallontikes-meletes-ikhitiko) — Πολίτης
- [Τέταρτη ημέρα έντασης στον Μαζωτό: Υπό αστυνομική περιφρούρηση οι εργασίες για την μονάδα αφαλάτωσης](https://www.alphanews.live/cyprus/tetarti-imera-entasis-ston-mazoto-ypo-astynomiki-perifrourisi-oi-ergasies-gia-tin-monada-afalatosis/) — AlphaNews
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (16 — 23 ноября 2026)

Бюллетень понедельника (за выходные): общий запас **34.7%** (101.05 МКМ) — на 0.12 МКМ меньше, чем в пятницу, и на 0.48 МКМ ниже, чем 16 ноября (101.53 МКМ): медленное снижение продолжается. Приток за последние три дня — 0.10 МКМ, за сезон — 3.53 МКМ. Отрыв от прошлого года — **25.0 пункта**.

**Основные изменения (за период с 16 ноября):**
- [Арминоу](/ru/dam/arminou/) **76.5%** (+1.6пп за неделю, 3.29 МКМ) — новый максимум сезона, остаётся главным «растущим» водохранилищем
- [Курис](/ru/dam/kouris/) **36.0%** (−0.32 МКМ за неделю, 41.43 МКМ) — снижение продолжается, несмотря на небольшой приток
- [Ахна](/ru/dam/achna/) **9.6%** (+1.3пп за неделю, 0.66 МКМ) — удерживает первый рост за сезон
- [Аспрокреммос](/ru/dam/asprokremmos/) **34.7%** (18.16 МКМ) — почти без изменений
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — единственная переполненная дамба
`;
  }
  return `
### Recent Changes (November 16 — 23, 2026)

Monday's bulletin, covering the weekend: total storage **34.7%** (101.05 MCM) — down 0.12 MCM from Friday and 0.48 MCM below November 16 (101.53 MCM), the slow drawdown continuing. Inflow over the last three days was 0.10 MCM and the season total reaches 3.53 MCM. The gap over last year is **25.0 points**.

**Notable movements (vs. November 16):**
- [Arminou](/dam/arminou/) **76.5%** (+1.6pp on the week, 3.29 MCM) — new season high, still the steady riser
- [Kouris](/dam/kouris/) **36.0%** (−0.32 MCM on the week, 41.43 MCM) — drawdown continues despite small inflows
- [Achna](/dam/achna/) **9.6%** (+1.3pp on the week, 0.66 MCM) — holding its first uptick of the season
- [Asprokremmos](/dam/asprokremmos/) **34.7%** (18.16 MCM) — essentially flat
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing

**In the media:**
- [MPs unanimously approve new water management law](https://cyprus-mail.com/2026/11/19/mps-unanimously-approve-new-water-management-law) — Cyprus Mail
- [Mazotos Desalination Dispute Intensifies as Works Suspended](https://en.politis.com.cy/news/environment/1071084/mazotos-desalination-dispute-intensifies-as-works-suspended) — Politis
`;
};
