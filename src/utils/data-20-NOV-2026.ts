import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.012, totalSince: 1.705 }, storage: { current: { amount: 41.511, percentage: 36.1 }, lastYear: { amount: 10.106, percentage: 8.8 } }, maxStorage: { amount: 48.267, date: "16/6" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0, totalSince: 0.072 }, storage: { current: { amount: 3.619, percentage: 21.2 }, lastYear: { amount: 1.67, percentage: 9.8 } }, maxStorage: { amount: 4.247, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0, totalSince: 0.019 }, storage: { current: { amount: 2.383, percentage: 17.2 }, lastYear: { amount: 1.97, percentage: 14.2 } }, maxStorage: { amount: 2.569, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0, totalSince: 0.108 }, storage: { current: { amount: 3.565, percentage: 23 }, lastYear: { amount: 2.876, percentage: 18.6 } }, maxStorage: { amount: 5.941, date: "3/6" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0, totalSince: 0.072 }, storage: { current: { amount: 6.178, percentage: 45.8 }, lastYear: { amount: 0.54, percentage: 4 } }, maxStorage: { amount: 8.14, date: "29/5" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.015, totalSince: 0.898 }, storage: { current: { amount: 3.263, percentage: 75.9 }, lastYear: { amount: 1.675, percentage: 39 } }, maxStorage: { amount: 3.117, date: "13/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0, totalSince: 0.019 }, storage: { current: { amount: 1.458, percentage: 42.9 }, lastYear: { amount: 0.805, percentage: 23.7 } }, maxStorage: { amount: 2.198, date: "25/5" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0, totalSince: 0 }, storage: { current: { amount: 0.593, percentage: 8.7 }, lastYear: { amount: 0.09, percentage: 1.3 } }, maxStorage: { amount: 0.38, date: "30/9" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0, totalSince: 0.203 }, storage: { current: { amount: 18.173, percentage: 34.7 }, lastYear: { amount: 4.392, percentage: 8.4 } }, maxStorage: { amount: 22.011, date: "29,5" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.006, totalSince: 0.157 }, storage: { current: { amount: 6.906, percentage: 40.2 }, lastYear: { amount: 1.771, percentage: 10.3 } }, maxStorage: { amount: 8.99, date: "28/5" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0, totalSince: 0.037 }, storage: { current: { amount: 0.785, percentage: 36 }, lastYear: { amount: 0, percentage: 0 } }, maxStorage: { amount: 1.974, date: "24/4" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0, totalSince: 0.072 }, storage: { current: { amount: 9.11, percentage: 38 }, lastYear: { amount: 2.536, percentage: 10.6 } }, maxStorage: { amount: 12.036, date: "27/5" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0, totalSince: 0.012 }, storage: { current: { amount: 0.422, percentage: 42.6 }, lastYear: { amount: 0, percentage: 0 } }, maxStorage: { amount: 0.99, date: "16/3-29/5" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0, totalSince: 0.007 }, storage: { current: { amount: 0.492, percentage: 57.2 }, lastYear: { amount: 0.1, percentage: 11.6 } }, maxStorage: { amount: 0.86, date: "16/2-12/6" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.003, totalSince: 0.029 }, storage: { current: { amount: 0.161, percentage: 54 }, lastYear: { amount: 0.057, percentage: 19.1 } }, maxStorage: { amount: 0.298, date: "30/3-29/5" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0, totalSince: 0.001 }, storage: { current: { amount: 1.144, percentage: 67.7 }, lastYear: { amount: 0.001, percentage: 0.1 } }, maxStorage: { amount: 1.69, date: "27/4-26/5" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0, totalSince: 0.019 }, storage: { current: { amount: 1.046, percentage: 73.1 }, lastYear: { amount: 0.018, percentage: 1.3 } }, maxStorage: { amount: 1.43, date: "23/3-29/5" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0, totalSince: 0 }, storage: { current: { amount: 0.363, percentage: 100 }, lastYear: { amount: 0.047, percentage: 12.9 } }, maxStorage: { amount: 0.363, date: "16/1-7/9" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0, totalSince: 0.021 }, storage: { current: { amount: 2.12, percentage: 75.7 }, lastYear: { amount: 0.472, percentage: 16.9 } }, maxStorage: { amount: 2.8, date: "2/4-5/6" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.001, totalSince: 0.116 }, storage: { current: { amount: 1.824, percentage: 91.2 }, lastYear: { amount: 1.076, percentage: 53.8 } }, maxStorage: { amount: 2, date: "14/2-30/6" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0, totalSince: 0 }, storage: { current: { amount: 3.627, percentage: 81.4 }, lastYear: { amount: 1.853, percentage: 41.6 } }, maxStorage: { amount: 4.454, date: "10/3-2/6" }, region: "Recharge/Other" },
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
  { year: "26/27", months: { October:2.293, November:1.137, December:0, January:0, February:0, March:0, April:0, May:0, June:0, July:0, "Aug-Sep":0 }, total:3.430 },
];

export const getReportDate = (): string => "20-NOV-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.00 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris eased to 36.1% (41.51 MCM), 27.3pp above last year\'s 8.8%.',
      el: 'Κούρης υποχώρησε στο 36.1% (41.51 ΕΚΜ), 27.3μ.π. πάνω από πέρυσι (8.8%).',
      ru: 'Курис снизился — 36.1% (41.51 МКМ), +27.3пп выше прошлогодних 8.8%.',
    },
    'Kalavasos': {
      en: 'Kalavasos eased to 21.2% (3.62 MCM), 11.4pp above last year\'s 9.8%.',
      el: 'Καλαβασός υποχώρησε στο 21.2% (3.62 ΕΚΜ), 11.4μ.π. πάνω από πέρυσι (9.8%).',
      ru: 'Калавасос снизился — 21.2% (3.62 МКМ), +11.4пп выше прошлогодних 9.8%.',
    },
    'Lefkara': {
      en: 'Lefkara held at 17.2% (2.38 MCM), 3pp above last year\'s 14.2%.',
      el: 'Λεύκαρα παρέμεινε στο 17.2% (2.38 ΕΚΜ), 3μ.π. πάνω από πέρυσι (14.2%).',
      ru: 'Лефкара без изменений — 17.2% (2.38 МКМ), +3пп выше прошлогодних 14.2%.',
    },
    'Dipotamos': {
      en: 'Dipotamos eased to 23% (3.57 MCM), 4.4pp above last year\'s 18.6%.',
      el: 'Διπόταμος υποχώρησε στο 23% (3.57 ΕΚΜ), 4.4μ.π. πάνω από πέρυσι (18.6%).',
      ru: 'Дипотамос снизился — 23% (3.57 МКМ), +4.4пп выше прошлогодних 18.6%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia eased to 45.8% (6.18 MCM), 41.8pp above last year\'s 4%.',
      el: 'Γερμασόγεια υποχώρησε στο 45.8% (6.18 ΕΚΜ), 41.8μ.π. πάνω από πέρυσι (4%).',
      ru: 'Гермасойя снизился — 45.8% (6.18 МКМ), +41.8пп выше прошлогодних 4%.',
    },
    'Arminou': {
      en: 'Arminou rose to 75.9% (3.26 MCM), 36.9pp above last year\'s 39%.',
      el: 'Αρμίνου ανέβηκε στο 75.9% (3.26 ΕΚΜ), 36.9μ.π. πάνω από πέρυσι (39%).',
      ru: 'Арминоу вырос — 75.9% (3.26 МКМ), +36.9пп выше прошлогодних 39%.',
    },
    'Polemidia': {
      en: 'Polemidia held at 42.9% (1.46 MCM), 19.2pp above last year\'s 23.7%.',
      el: 'Πολεμίδια παρέμεινε στο 42.9% (1.46 ΕΚΜ), 19.2μ.π. πάνω από πέρυσι (23.7%).',
      ru: 'Полемидия без изменений — 42.9% (1.46 МКМ), +19.2пп выше прошлогодних 23.7%.',
    },
    'Achna': {
      en: 'Achna held at 8.7% (0.59 MCM), 7.4pp above last year\'s 1.3%.',
      el: 'Αχνά παρέμεινε στο 8.7% (0.59 ΕΚΜ), 7.4μ.π. πάνω από πέρυσι (1.3%).',
      ru: 'Ахна без изменений — 8.7% (0.59 МКМ), +7.4пп выше прошлогодних 1.3%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos eased to 34.7% (18.17 MCM), 26.3pp above last year\'s 8.4%.',
      el: 'Ασπρόκρεμμος υποχώρησε στο 34.7% (18.17 ΕΚΜ), 26.3μ.π. πάνω από πέρυσι (8.4%).',
      ru: 'Аспрокреммос снизился — 34.7% (18.17 МКМ), +26.3пп выше прошлогодних 8.4%.',
    },
    'Kannaviou': {
      en: 'Kannaviou rose to 40.2% (6.91 MCM), 29.9pp above last year\'s 10.3%.',
      el: 'Καννάβιου ανέβηκε στο 40.2% (6.91 ΕΚΜ), 29.9μ.π. πάνω από πέρυσι (10.3%).',
      ru: 'Каннавиу вырос — 40.2% (6.91 МКМ), +29.9пп выше прошлогодних 10.3%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos held at 36% (0.79 MCM), 36pp above last year\'s 0%.',
      el: 'Μαυροκόλυμπος παρέμεινε στο 36% (0.79 ΕΚΜ), 36μ.π. πάνω από πέρυσι (0%).',
      ru: 'Мавроколимпос без изменений — 36% (0.79 МКМ), +36пп выше прошлогодних 0%.',
    },
    'Evretou': {
      en: 'Evretou eased to 38% (9.11 MCM), 27.4pp above last year\'s 10.6%.',
      el: 'Εύρετου υποχώρησε στο 38% (9.11 ΕΚΜ), 27.4μ.π. πάνω από πέρυσι (10.6%).',
      ru: 'Эвретоу снизился — 38% (9.11 МКМ), +27.4пп выше прошлогодних 10.6%.',
    },
    'Argaka': {
      en: 'Argaka held at 42.6% (0.42 MCM), 42.6pp above last year\'s 0%.',
      el: 'Αργάκα παρέμεινε στο 42.6% (0.42 ΕΚΜ), 42.6μ.π. πάνω από πέρυσι (0%).',
      ru: 'Аргака без изменений — 42.6% (0.42 МКМ), +42.6пп выше прошлогодних 0%.',
    },
    'Pomos': {
      en: 'Pomos eased to 57.2% (0.49 MCM), 45.6pp above last year\'s 11.6%.',
      el: 'Πόμος υποχώρησε στο 57.2% (0.49 ΕΚΜ), 45.6μ.π. πάνω από πέρυσι (11.6%).',
      ru: 'Помос снизился — 57.2% (0.49 МКМ), +45.6пп выше прошлогодних 11.6%.',
    },
    'Agia Marina': {
      en: 'Agia Marina rose to 54% (0.16 MCM), 34.9pp above last year\'s 19.1%.',
      el: 'Αγία Μαρίνα ανέβηκε στο 54% (0.16 ΕΚΜ), 34.9μ.π. πάνω από πέρυσι (19.1%).',
      ru: 'Агия вырос — 54% (0.16 МКМ), +34.9пп выше прошлогодних 19.1%.',
    },
    'Vyzakia': {
      en: 'Vyzakia eased to 67.7% (1.14 MCM), 67.6pp above last year\'s 0.1%.',
      el: 'Βυζακιά υποχώρησε στο 67.7% (1.14 ΕΚΜ), 67.6μ.π. πάνω από πέρυσι (0.1%).',
      ru: 'Визакия снизился — 67.7% (1.14 МКМ), +67.6пп выше прошлогодних 0.1%.',
    },
    'Xyliatos': {
      en: 'Xyliatos eased to 73.1% (1.05 MCM), 71.8pp above last year\'s 1.3%.',
      el: 'Ξυλιάτος υποχώρησε στο 73.1% (1.05 ΕΚΜ), 71.8μ.π. πάνω από πέρυσι (1.3%).',
      ru: 'Ксилиатос снизился — 73.1% (1.05 МКМ), +71.8пп выше прошлогодних 1.3%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis unchanged at 100% (0.36 MCM), still the only dam overflowing. Up from 12.9% last year.',
      el: 'Ο Καλοπαναγιώτης αμετάβλητος στο 100% (0.36 ΕΚΜ), το μόνο φράγμα που υπερχειλίζει. Από 12.9% πέρυσι.',
      ru: 'Калопанайотис без изменений на 100% (0.36 МКМ), единственная переполненная дамба. Год назад 12.9%.',
    },
    'Tamassos': {
      en: 'Tamassos eased to 75.7% (2.12 MCM), 58.8pp above last year\'s 16.9%.',
      el: 'Ταμασός υποχώρησε στο 75.7% (2.12 ΕΚΜ), 58.8μ.π. πάνω από πέρυσι (16.9%).',
      ru: 'Тамассос снизился — 75.7% (2.12 МКМ), +58.8пп выше прошлогодних 16.9%.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta held at 91.2% (1.82 MCM), 37.4pp above last year\'s 53.8%.',
      el: 'Κλήρου-Μαλούντα παρέμεινε στο 91.2% (1.82 ΕΚΜ), 37.4μ.π. πάνω από πέρυσι (53.8%).',
      ru: 'Клиру-Малунта без изменений — 91.2% (1.82 МКМ), +37.4пп выше прошлогодних 53.8%.',
    },
    'Solea': {
      en: 'Solea eased to 81.4% (3.63 MCM), 39.8pp above last year\'s 41.6%.',
      el: 'Σολέα υποχώρησε στο 81.4% (3.63 ΕΚΜ), 39.8μ.π. πάνω από πέρυσι (41.6%).',
      ru: 'Солеа снизился — 81.4% (3.63 МКМ), +39.8пп выше прошлогодних 41.6%.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (13 — 20 Νοεμβρίου 2026)

Δελτίο Παρασκευής: συνολική αποθήκευση **34.8%** (101.17 ΕΚΜ) — μείωση 0.07 ΕΚΜ από την Πέμπτη και 0.54 ΕΚΜ κάτω από τις 13 Νοεμβρίου (101.71 ΕΚΜ), με τη βραδεία πτώση να συνεχίζεται. Η εισροή του τελευταίου 24ώρου ήταν 0.04 ΕΚΜ και η εισροή σεζόν φτάνει τα 3.43 ΕΚΜ. Το προβάδισμα έναντι πέρυσι παραμένει **24.9 μονάδες**.

**Αξιοσημείωτα (έναντι 13 Νοεμβρίου):**
- [Αρμίνου](/el/dam/arminou/) **75.9%** (+1.8μ.π. την εβδομάδα, 3.26 ΕΚΜ) — νέο υψηλό σεζόν, ο σταθερός «ανερχόμενος»
- [Κούρης](/el/dam/kouris/) **36.1%** (−0.36 ΕΚΜ την εβδομάδα, 41.51 ΕΚΜ) — η πτώση συνεχίζεται παρά τη μικρή εισροή
- [Αχνά](/el/dam/achna/) **8.7%** (+0.9μ.π. την εβδομάδα, 0.59 ΕΚΜ) — διατηρεί την πρώτη άνοδο της σεζόν
- [Ασπρόκρεμμος](/el/dam/asprokremmos/) **34.7%** (−0.09 ΕΚΜ την εβδομάδα, 18.17 ΕΚΜ) — ελαφρά υποχώρηση
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — το μόνο φράγμα που υπερχειλίζει

**Στα μέσα:**
- [Ηλιάνα Τόφα για μονάδα αφαλάτωσης στον Μαζωτό: Κανονικά συνεχίζονται οι εργασίες](https://www.politis.com.cy/cyprus/perivallon/1071790/hliana-tofa-ghia-monada-afalatosis-ston-mazoto-kanonika-sinekhizontai-oi-erghasies-eghinan-oles-oi-perivallontikes-meletes-ikhitiko) — Πολίτης
- [Τέταρτη ημέρα έντασης στον Μαζωτό: Υπό αστυνομική περιφρούρηση οι εργασίες για την μονάδα αφαλάτωσης](https://www.alphanews.live/cyprus/tetarti-imera-entasis-ston-mazoto-ypo-astynomiki-perifrourisi-oi-ergasies-gia-tin-monada-afalatosis/) — AlphaNews
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (13 — 20 ноября 2026)

Бюллетень пятницы: общий запас **34.8%** (101.17 МКМ) — на 0.07 МКМ меньше, чем в четверг, и на 0.54 МКМ ниже, чем 13 ноября (101.71 МКМ): медленное снижение продолжается. Приток за последние сутки — 0.04 МКМ, за сезон — 3.43 МКМ. Отрыв от прошлого года сохраняется — **24.9 пункта**.

**Основные изменения (за период с 13 ноября):**
- [Арминоу](/ru/dam/arminou/) **75.9%** (+1.8пп за неделю, 3.26 МКМ) — новый максимум сезона, остаётся главным «растущим» водохранилищем
- [Курис](/ru/dam/kouris/) **36.1%** (−0.36 МКМ за неделю, 41.51 МКМ) — снижение продолжается, несмотря на небольшой приток
- [Ахна](/ru/dam/achna/) **8.7%** (+0.9пп за неделю, 0.59 МКМ) — удерживает первый рост за сезон
- [Аспрокреммос](/ru/dam/asprokremmos/) **34.7%** (−0.09 МКМ за неделю, 18.17 МКМ) — небольшое снижение
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — единственная переполненная дамба
`;
  }
  return `
### Recent Changes (November 13 — 20, 2026)

Friday's bulletin: total storage **34.8%** (101.17 MCM) — down 0.07 MCM from Thursday and 0.54 MCM below November 13 (101.71 MCM), the slow drawdown continuing. Inflow over the last 24 hours was 0.04 MCM and the season total reaches 3.43 MCM. The gap over last year holds at **24.9 points**.

**Notable movements (vs. November 13):**
- [Arminou](/dam/arminou/) **75.9%** (+1.8pp on the week, 3.26 MCM) — new season high, still the steady riser
- [Kouris](/dam/kouris/) **36.1%** (−0.36 MCM on the week, 41.51 MCM) — drawdown continues despite small inflows
- [Achna](/dam/achna/) **8.7%** (+0.9pp on the week, 0.59 MCM) — holding its first uptick of the season
- [Asprokremmos](/dam/asprokremmos/) **34.7%** (−0.09 MCM on the week, 18.17 MCM) — easing slightly
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing

**In the media:**
- [MPs unanimously approve new water management law](https://cyprus-mail.com/2026/11/19/mps-unanimously-approve-new-water-management-law) — Cyprus Mail
- [Mazotos Desalination Dispute Intensifies as Works Suspended](https://en.politis.com.cy/news/environment/1071084/mazotos-desalination-dispute-intensifies-as-works-suspended) — Politis
`;
};
