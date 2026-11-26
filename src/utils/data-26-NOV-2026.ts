import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.02, totalSince: 1.83 }, storage: { current: { amount: 41.291, percentage: 35.9 }, lastYear: { amount: 9.778, percentage: 8.5 } }, maxStorage: { amount: 48.267, date: "16/6" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0, totalSince: 0.072 }, storage: { current: { amount: 3.607, percentage: 21.1 }, lastYear: { amount: 1.657, percentage: 9.7 } }, maxStorage: { amount: 4.247, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0, totalSince: 0.019 }, storage: { current: { amount: 2.38, percentage: 17.2 }, lastYear: { amount: 1.968, percentage: 14.2 } }, maxStorage: { amount: 2.569, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0, totalSince: 0.108 }, storage: { current: { amount: 3.509, percentage: 22.6 }, lastYear: { amount: 2.835, percentage: 18.3 } }, maxStorage: { amount: 5.941, date: "3/6" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0, totalSince: 0.072 }, storage: { current: { amount: 6.146, percentage: 45.5 }, lastYear: { amount: 0.486, percentage: 3.6 } }, maxStorage: { amount: 8.14, date: "29/5" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.007, totalSince: 0.957 }, storage: { current: { amount: 3.298, percentage: 76.7 }, lastYear: { amount: 1.664, percentage: 38.7 } }, maxStorage: { amount: 3.117, date: "13/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0, totalSince: 0.019 }, storage: { current: { amount: 1.45, percentage: 42.6 }, lastYear: { amount: 0.809, percentage: 23.8 } }, maxStorage: { amount: 2.198, date: "25/5" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0, totalSince: 0 }, storage: { current: { amount: 0.687, percentage: 10.1 }, lastYear: { amount: 0.089, percentage: 1.3 } }, maxStorage: { amount: 0.38, date: "30/9" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0, totalSince: 0.203 }, storage: { current: { amount: 18.116, percentage: 34.6 }, lastYear: { amount: 4.297, percentage: 8.2 } }, maxStorage: { amount: 22.011, date: "29,5" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0, totalSince: 0.157 }, storage: { current: { amount: 6.85, percentage: 39.9 }, lastYear: { amount: 1.72, percentage: 10 } }, maxStorage: { amount: 8.99, date: "28/5" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0, totalSince: 0.037 }, storage: { current: { amount: 0.78, percentage: 35.8 }, lastYear: { amount: 0.012, percentage: 0.6 } }, maxStorage: { amount: 1.974, date: "24/4" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0, totalSince: 0.072 }, storage: { current: { amount: 9.078, percentage: 37.8 }, lastYear: { amount: 2.484, percentage: 10.4 } }, maxStorage: { amount: 12.036, date: "27/5" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0, totalSince: 0.012 }, storage: { current: { amount: 0.416, percentage: 42 }, lastYear: { amount: 0, percentage: 0 } }, maxStorage: { amount: 0.99, date: "16/3-29/5" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0, totalSince: 0.007 }, storage: { current: { amount: 0.487, percentage: 56.6 }, lastYear: { amount: 0.095, percentage: 11 } }, maxStorage: { amount: 0.86, date: "16/2-12/6" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0, totalSince: 0.03 }, storage: { current: { amount: 0.162, percentage: 54.4 }, lastYear: { amount: 0.057, percentage: 19.1 } }, maxStorage: { amount: 0.298, date: "30/3-29/5" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0, totalSince: 0.001 }, storage: { current: { amount: 1.133, percentage: 67 }, lastYear: { amount: 0.001, percentage: 0.1 } }, maxStorage: { amount: 1.69, date: "27/4-26/5" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0, totalSince: 0.019 }, storage: { current: { amount: 1.032, percentage: 72.2 }, lastYear: { amount: 0.017, percentage: 1.2 } }, maxStorage: { amount: 1.43, date: "23/3-29/5" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0, totalSince: 0 }, storage: { current: { amount: 0.363, percentage: 100 }, lastYear: { amount: 0.054, percentage: 14.9 } }, maxStorage: { amount: 0.363, date: "16/1-7/9" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0, totalSince: 0.041 }, storage: { current: { amount: 2.095, percentage: 74.8 }, lastYear: { amount: 0.46, percentage: 16.4 } }, maxStorage: { amount: 2.8, date: "2/4-5/6" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.001, totalSince: 0.122 }, storage: { current: { amount: 1.824, percentage: 91.2 }, lastYear: { amount: 1.063, percentage: 53.2 } }, maxStorage: { amount: 2, date: "14/2-30/6" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0, totalSince: 0.009 }, storage: { current: { amount: 3.61, percentage: 81.1 }, lastYear: { amount: 1.841, percentage: 41.3 } }, maxStorage: { amount: 4.454, date: "10/3-2/6" }, region: "Recharge/Other" },
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
  { year: "26/27", months: { October:2.293, November:1.322, December:0, January:0, February:0, March:0, April:0, May:0, June:0, July:0, "Aug-Sep":0 }, total:3.615 },
];

export const getReportDate = (): string => "26-NOV-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.00 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris eased to 35.9% (41.29 MCM), 27.4pp above last year\'s 8.5%.',
      el: 'Κούρης υποχώρησε στο 35.9% (41.29 ΕΚΜ), 27.4μ.π. πάνω από πέρυσι (8.5%).',
      ru: 'Курис снизился — 35.9% (41.29 МКМ), +27.4пп выше прошлогодних 8.5%.',
    },
    'Kalavasos': {
      en: 'Kalavasos eased to 21.1% (3.61 MCM), 11.4pp above last year\'s 9.7%.',
      el: 'Καλαβασός υποχώρησε στο 21.1% (3.61 ΕΚΜ), 11.4μ.π. πάνω από πέρυσι (9.7%).',
      ru: 'Калавасос снизился — 21.1% (3.61 МКМ), +11.4пп выше прошлогодних 9.7%.',
    },
    'Lefkara': {
      en: 'Lefkara held at 17.2% (2.38 MCM), 3pp above last year\'s 14.2%.',
      el: 'Λεύκαρα παρέμεινε στο 17.2% (2.38 ΕΚΜ), 3μ.π. πάνω από πέρυσι (14.2%).',
      ru: 'Лефкара без изменений — 17.2% (2.38 МКМ), +3пп выше прошлогодних 14.2%.',
    },
    'Dipotamos': {
      en: 'Dipotamos eased to 22.6% (3.51 MCM), 4.3pp above last year\'s 18.3%.',
      el: 'Διπόταμος υποχώρησε στο 22.6% (3.51 ΕΚΜ), 4.3μ.π. πάνω από πέρυσι (18.3%).',
      ru: 'Дипотамос снизился — 22.6% (3.51 МКМ), +4.3пп выше прошлогодних 18.3%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia eased to 45.5% (6.15 MCM), 41.9pp above last year\'s 3.6%.',
      el: 'Γερμασόγεια υποχώρησε στο 45.5% (6.15 ΕΚΜ), 41.9μ.π. πάνω από πέρυσι (3.6%).',
      ru: 'Гермасойя снизился — 45.5% (6.15 МКМ), +41.9пп выше прошлогодних 3.6%.',
    },
    'Arminou': {
      en: 'Arminou rose to 76.7% (3.3 MCM), 38pp above last year\'s 38.7%.',
      el: 'Αρμίνου ανέβηκε στο 76.7% (3.3 ΕΚΜ), 38μ.π. πάνω από πέρυσι (38.7%).',
      ru: 'Арминоу вырос — 76.7% (3.3 МКМ), +38пп выше прошлогодних 38.7%.',
    },
    'Polemidia': {
      en: 'Polemidia eased to 42.6% (1.45 MCM), 18.8pp above last year\'s 23.8%.',
      el: 'Πολεμίδια υποχώρησε στο 42.6% (1.45 ΕΚΜ), 18.8μ.π. πάνω από πέρυσι (23.8%).',
      ru: 'Полемидия снизился — 42.6% (1.45 МКМ), +18.8пп выше прошлогодних 23.8%.',
    },
    'Achna': {
      en: 'Achna rose to 10.1% (0.69 MCM), 8.8pp above last year\'s 1.3%.',
      el: 'Αχνά ανέβηκε στο 10.1% (0.69 ΕΚΜ), 8.8μ.π. πάνω από πέρυσι (1.3%).',
      ru: 'Ахна вырос — 10.1% (0.69 МКМ), +8.8пп выше прошлогодних 1.3%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos eased to 34.6% (18.12 MCM), 26.4pp above last year\'s 8.2%.',
      el: 'Ασπρόκρεμμος υποχώρησε στο 34.6% (18.12 ΕΚΜ), 26.4μ.π. πάνω από πέρυσι (8.2%).',
      ru: 'Аспрокреммос снизился — 34.6% (18.12 МКМ), +26.4пп выше прошлогодних 8.2%.',
    },
    'Kannaviou': {
      en: 'Kannaviou eased to 39.9% (6.85 MCM), 29.9pp above last year\'s 10%.',
      el: 'Κανναβιού υποχώρησε στο 39.9% (6.85 ΕΚΜ), 29.9μ.π. πάνω από πέρυσι (10%).',
      ru: 'Каннавиу снизился — 39.9% (6.85 МКМ), +29.9пп выше прошлогодних 10%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos eased to 35.8% (0.78 MCM), 35.2pp above last year\'s 0.6%.',
      el: 'Μαυροκόλυμπος υποχώρησε στο 35.8% (0.78 ΕΚΜ), 35.2μ.π. πάνω από πέρυσι (0.6%).',
      ru: 'Маврокольимбос снизился — 35.8% (0.78 МКМ), +35.2пп выше прошлогодних 0.6%.',
    },
    'Evretou': {
      en: 'Evretou eased to 37.8% (9.08 MCM), 27.4pp above last year\'s 10.4%.',
      el: 'Ευρέτου υποχώρησε στο 37.8% (9.08 ΕΚΜ), 27.4μ.π. πάνω από πέρυσι (10.4%).',
      ru: 'Евретоу снизился — 37.8% (9.08 МКМ), +27.4пп выше прошлогодних 10.4%.',
    },
    'Argaka': {
      en: 'Argaka eased to 42% (0.42 MCM), 42pp above last year\'s 0%.',
      el: 'Αργάκα υποχώρησε στο 42% (0.42 ΕΚΜ), 42μ.π. πάνω από πέρυσι (0%).',
      ru: 'Аргака снизился — 42% (0.42 МКМ), +42пп выше прошлогодних 0%.',
    },
    'Pomos': {
      en: 'Pomos eased to 56.6% (0.49 MCM), 45.6pp above last year\'s 11%.',
      el: 'Πωμός υποχώρησε στο 56.6% (0.49 ΕΚΜ), 45.6μ.π. πάνω από πέρυσι (11%).',
      ru: 'Помос снизился — 56.6% (0.49 МКМ), +45.6пп выше прошлогодних 11%.',
    },
    'Agia Marina': {
      en: 'Agia Marina held at 54.4% (0.16 MCM), 35.3pp above last year\'s 19.1%.',
      el: 'Αγία Μαρίνα παρέμεινε στο 54.4% (0.16 ΕΚΜ), 35.3μ.π. πάνω από πέρυσι (19.1%).',
      ru: 'Агия-Марина без изменений — 54.4% (0.16 МКМ), +35.3пп выше прошлогодних 19.1%.',
    },
    'Vyzakia': {
      en: 'Vyzakia held at 67% (1.13 MCM), 66.9pp above last year\'s 0.1%.',
      el: 'Βυζακιά παρέμεινε στο 67% (1.13 ΕΚΜ), 66.9μ.π. πάνω από πέρυσι (0.1%).',
      ru: 'Визакия без изменений — 67% (1.13 МКМ), +66.9пп выше прошлогодних 0.1%.',
    },
    'Xyliatos': {
      en: 'Xyliatos eased to 72.2% (1.03 MCM), 71pp above last year\'s 1.2%.',
      el: 'Ξυλιάτος υποχώρησε στο 72.2% (1.03 ΕΚΜ), 71μ.π. πάνω από πέρυσι (1.2%).',
      ru: 'Ксилиатос снизился — 72.2% (1.03 МКМ), +71пп выше прошлогодних 1.2%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis unchanged at 100% (0.36 MCM), still the only dam overflowing. Up from 14.9% last year.',
      el: 'Ο Καλοπαναγιώτης αμετάβλητος στο 100% (0.36 ΕΚΜ), το μόνο φράγμα που υπερχειλίζει. Από 14.9% πέρυσι.',
      ru: 'Калопанайотис без изменений на 100% (0.36 МКМ), единственная переполненная дамба. Год назад 14.9%.',
    },
    'Tamassos': {
      en: 'Tamassos eased to 74.8% (2.1 MCM), 58.4pp above last year\'s 16.4%.',
      el: 'Ταμασός υποχώρησε στο 74.8% (2.1 ΕΚΜ), 58.4μ.π. πάνω από πέρυσι (16.4%).',
      ru: 'Тамасос снизился — 74.8% (2.1 МКМ), +58.4пп выше прошлогодних 16.4%.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta held at 91.2% (1.82 MCM), 38pp above last year\'s 53.2%.',
      el: 'Κλήρου-Μαλούντα παρέμεινε στο 91.2% (1.82 ΕΚΜ), 38μ.π. πάνω από πέρυσι (53.2%).',
      ru: 'Клиру-Малунта без изменений — 91.2% (1.82 МКМ), +38пп выше прошлогодних 53.2%.',
    },
    'Solea': {
      en: 'Solea held at 81.1% (3.61 MCM), 39.8pp above last year\'s 41.3%.',
      el: 'Σολέα παρέμεινε στο 81.1% (3.61 ΕΚΜ), 39.8μ.π. πάνω από πέρυσι (41.3%).',
      ru: 'Солеа без изменений — 81.1% (3.61 МКМ), +39.8пп выше прошлогодних 41.3%.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (19 — 26 Νοεμβρίου 2026)

Δελτίο Πέμπτης: συνολική αποθήκευση **34.7%** (100.79 ΕΚΜ) — μείωση 0.08 ΕΚΜ από την Τετάρτη και 0.46 ΕΚΜ κάτω από τις 19 Νοεμβρίου (101.24 ΕΚΜ), με τη βραδεία πτώση να συνεχίζεται. Η εισροή του τελευταίου 24ώρου ήταν 0.03 ΕΚΜ και η εισροή σεζόν φτάνει τα 3.62 ΕΚΜ. Το προβάδισμα έναντι πέρυσι παραμένει **25.0 μονάδες**.

**Αξιοσημείωτα (έναντι 19 Νοεμβρίου):**
- [Αχνά](/el/dam/achna/) **10.1%** (+1.4μ.π. την εβδομάδα, 0.69 ΕΚΜ) — ξεπερνά το 10%, διατηρεί την πρώτη αύξηση της σεζόν
- [Αρμίνου](/el/dam/arminou/) **76.7%** (+1.1μ.π. την εβδομάδα, 3.30 ΕΚΜ) — νέο υψηλό σεζόν, ο σταθερός «ανερχόμενος»
- [Κούρης](/el/dam/kouris/) **35.9%** (−0.27 ΕΚΜ την εβδομάδα, 41.29 ΕΚΜ) — η πτώση συνεχίζεται
- [Ασπρόκρεμμος](/el/dam/asprokremmos/) **34.6%** (18.12 ΕΚΜ) — σχεδόν αμετάβλητος
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — το μόνο φράγμα που υπερχειλίζει

**Στα μέσα:**
- [Ηλιάνα Τόφα για μονάδα αφαλάτωσης στον Μαζωτό: Κανονικά συνεχίζονται οι εργασίες](https://www.politis.com.cy/cyprus/perivallon/1071790/hliana-tofa-ghia-monada-afalatosis-ston-mazoto-kanonika-sinekhizontai-oi-erghasies-eghinan-oles-oi-perivallontikes-meletes-ikhitiko) — Πολίτης
- [Καιρική αστάθεια: Πότε αναμένονται βροχές και πώς θα κινηθεί η θερμοκρασία μέχρι την Κυριακή](https://www.alphanews.live/cyprus/kairiki-astatheia-pote-anamenontai-vroches-kai-pos-tha-kinithei-i-thermokrasia-mechri-tin-kyriaki/) — AlphaNews
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (19 — 26 ноября 2026)

Бюллетень четверга: общий запас **34.7%** (100.79 МКМ) — на 0.08 МКМ меньше, чем в среду, и на 0.46 МКМ ниже, чем 19 ноября (101.24 МКМ): медленное снижение продолжается. Приток за сутки — 0.03 МКМ, за сезон — 3.62 МКМ. Отрыв от прошлого года остаётся **25.0 пункта**.

**Основные изменения (за период с 19 ноября):**
- [Ахна](/ru/dam/achna/) **10.1%** (+1.4пп за неделю, 0.69 МКМ) — перешагнула отметку 10%, удерживает первый подъём сезона
- [Арминоу](/ru/dam/arminou/) **76.7%** (+1.1пп за неделю, 3.30 МКМ) — новый максимум сезона, остаётся главным «растущим» водохранилищем
- [Курис](/ru/dam/kouris/) **35.9%** (−0.27 МКМ за неделю, 41.29 МКМ) — снижение продолжается
- [Аспрокреммос](/ru/dam/asprokremmos/) **34.6%** (18.12 МКМ) — почти без изменений
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — единственная переполненная дамба
`;
  }
  return `
### Recent Changes (November 19 — 26, 2026)

Thursday's bulletin: total storage **34.7%** (100.79 MCM) — down 0.08 MCM from Wednesday and 0.46 MCM below November 19 (101.24 MCM), the slow drawdown continuing. Inflow over the last 24 hours was 0.03 MCM and the season total reaches 3.62 MCM. The gap over last year holds at **25.0 points**.

**Notable movements (vs. November 19):**
- [Achna](/dam/achna/) **10.1%** (+1.4pp on the week, 0.69 MCM) — crosses 10%, holding its first rise of the season
- [Arminou](/dam/arminou/) **76.7%** (+1.1pp on the week, 3.30 MCM) — new season high, still the steady riser
- [Kouris](/dam/kouris/) **35.9%** (−0.27 MCM on the week, 41.29 MCM) — drawdown continues
- [Asprokremmos](/dam/asprokremmos/) **34.6%** (18.12 MCM) — essentially flat
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing

**In the media:**
- [MPs unanimously approve new water management law](https://cyprus-mail.com/2026/11/19/mps-unanimously-approve-new-water-management-law) — Cyprus Mail
- [Mazotos Desalination Dispute Intensifies as Works Suspended](https://en.politis.com.cy/news/environment/1071084/mazotos-desalination-dispute-intensifies-as-works-suspended) — Politis
`;
};
