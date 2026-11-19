import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.026, totalSince: 1.693 }, storage: { current: { amount: 41.561, percentage: 36.1 }, lastYear: { amount: 10.147, percentage: 8.8 } }, maxStorage: { amount: 48.267, date: "16/6" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0, totalSince: 0.072 }, storage: { current: { amount: 3.622, percentage: 21.2 }, lastYear: { amount: 1.674, percentage: 9.8 } }, maxStorage: { amount: 4.247, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0, totalSince: 0.019 }, storage: { current: { amount: 2.383, percentage: 17.2 }, lastYear: { amount: 1.972, percentage: 14.2 } }, maxStorage: { amount: 2.569, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0, totalSince: 0.108 }, storage: { current: { amount: 3.572, percentage: 23 }, lastYear: { amount: 2.879, percentage: 18.6 } }, maxStorage: { amount: 5.941, date: "3/6" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0, totalSince: 0.072 }, storage: { current: { amount: 6.185, percentage: 45.8 }, lastYear: { amount: 0.548, percentage: 4.1 } }, maxStorage: { amount: 8.14, date: "29/5" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.022, totalSince: 0.883 }, storage: { current: { amount: 3.252, percentage: 75.6 }, lastYear: { amount: 1.677, percentage: 39 } }, maxStorage: { amount: 3.117, date: "13/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0, totalSince: 0.019 }, storage: { current: { amount: 1.458, percentage: 42.9 }, lastYear: { amount: 0.808, percentage: 23.8 } }, maxStorage: { amount: 2.198, date: "25/5" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0, totalSince: 0 }, storage: { current: { amount: 0.593, percentage: 8.7 }, lastYear: { amount: 0.09, percentage: 1.3 } }, maxStorage: { amount: 0.38, date: "30/9" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0, totalSince: 0.203 }, storage: { current: { amount: 18.188, percentage: 34.7 }, lastYear: { amount: 4.41, percentage: 8.4 } }, maxStorage: { amount: 22.011, date: "29,5" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0, totalSince: 0.151 }, storage: { current: { amount: 6.897, percentage: 40.2 }, lastYear: { amount: 1.78, percentage: 10.4 } }, maxStorage: { amount: 8.99, date: "28/5" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0, totalSince: 0.037 }, storage: { current: { amount: 0.785, percentage: 36 }, lastYear: { amount: 0, percentage: 0 } }, maxStorage: { amount: 1.974, date: "24/4" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0, totalSince: 0.072 }, storage: { current: { amount: 9.117, percentage: 38 }, lastYear: { amount: 2.545, percentage: 10.6 } }, maxStorage: { amount: 12.036, date: "27/5" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0, totalSince: 0.012 }, storage: { current: { amount: 0.422, percentage: 42.6 }, lastYear: { amount: 0, percentage: 0 } }, maxStorage: { amount: 0.99, date: "16/3-29/5" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0, totalSince: 0.007 }, storage: { current: { amount: 0.493, percentage: 57.3 }, lastYear: { amount: 0.1, percentage: 11.6 } }, maxStorage: { amount: 0.86, date: "16/2-12/6" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0, totalSince: 0.026 }, storage: { current: { amount: 0.158, percentage: 53 }, lastYear: { amount: 0.057, percentage: 19.1 } }, maxStorage: { amount: 0.298, date: "30/3-29/5" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0, totalSince: 0.001 }, storage: { current: { amount: 1.147, percentage: 67.9 }, lastYear: { amount: 0.001, percentage: 0.1 } }, maxStorage: { amount: 1.69, date: "27/4-26/5" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0, totalSince: 0.019 }, storage: { current: { amount: 1.048, percentage: 73.3 }, lastYear: { amount: 0.019, percentage: 1.3 } }, maxStorage: { amount: 1.43, date: "23/3-29/5" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0, totalSince: 0 }, storage: { current: { amount: 0.363, percentage: 100 }, lastYear: { amount: 0.049, percentage: 13.5 } }, maxStorage: { amount: 0.363, date: "16/1-7/9" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0, totalSince: 0.021 }, storage: { current: { amount: 2.123, percentage: 75.8 }, lastYear: { amount: 0.473, percentage: 16.9 } }, maxStorage: { amount: 2.8, date: "2/4-5/6" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0, totalSince: 0.115 }, storage: { current: { amount: 1.824, percentage: 91.2 }, lastYear: { amount: 1.077, percentage: 53.9 } }, maxStorage: { amount: 2, date: "14/2-30/6" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0, totalSince: 0 }, storage: { current: { amount: 3.631, percentage: 81.5 }, lastYear: { amount: 1.859, percentage: 41.7 } }, maxStorage: { amount: 4.454, date: "10/3-2/6" }, region: "Recharge/Other" },
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
  { year: "26/27", months: { October:2.293, November:1.101, December:0, January:0, February:0, March:0, April:0, May:0, June:0, July:0, "Aug-Sep":0 }, total:3.394 },
];

export const getReportDate = (): string => "19-NOV-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.00 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris eased to 36.1% (41.56 MCM), 27.3pp above last year\'s 8.8%.',
      el: 'Κούρης υποχώρησε στο 36.1% (41.56 ΕΚΜ), 27.3μ.π. πάνω από πέρυσι (8.8%).',
      ru: 'Курис снизился — 36.1% (41.56 МКМ), +27.3пп выше прошлогодних 8.8%.',
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
      en: 'Germasoyeia eased to 45.8% (6.18 MCM), 41.7pp above last year\'s 4.1%.',
      el: 'Γερμασόγεια υποχώρησε στο 45.8% (6.18 ΕΚΜ), 41.7μ.π. πάνω από πέρυσι (4.1%).',
      ru: 'Гермасойя снизился — 45.8% (6.18 МКМ), +41.7пп выше прошлогодних 4.1%.',
    },
    'Arminou': {
      en: 'Arminou rose to 75.6% (3.25 MCM), 36.6pp above last year\'s 39%.',
      el: 'Αρμίνου ανέβηκε στο 75.6% (3.25 ΕΚΜ), 36.6μ.π. πάνω από πέρυσι (39%).',
      ru: 'Арминоу вырос — 75.6% (3.25 МКМ), +36.6пп выше прошлогодних 39%.',
    },
    'Polemidia': {
      en: 'Polemidia eased to 42.9% (1.46 MCM), 19.1pp above last year\'s 23.8%.',
      el: 'Πολεμίδια υποχώρησε στο 42.9% (1.46 ΕΚΜ), 19.1μ.π. πάνω από πέρυσι (23.8%).',
      ru: 'Полемидия снизился — 42.9% (1.46 МКМ), +19.1пп выше прошлогодних 23.8%.',
    },
    'Achna': {
      en: 'Achna rose to 8.7% (0.59 MCM), 7.4pp above last year\'s 1.3%.',
      el: 'Αχνά ανέβηκε στο 8.7% (0.59 ΕΚΜ), 7.4μ.π. πάνω από πέρυσι (1.3%).',
      ru: 'Ахна вырос — 8.7% (0.59 МКМ), +7.4пп выше прошлогодних 1.3%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos eased to 34.7% (18.19 MCM), 26.3pp above last year\'s 8.4%.',
      el: 'Ασπρόκρεμμος υποχώρησε στο 34.7% (18.19 ΕΚΜ), 26.3μ.π. πάνω από πέρυσι (8.4%).',
      ru: 'Аспрокреммос снизился — 34.7% (18.19 МКМ), +26.3пп выше прошлогодних 8.4%.',
    },
    'Kannaviou': {
      en: 'Kannaviou eased to 40.2% (6.9 MCM), 29.8pp above last year\'s 10.4%.',
      el: 'Καννάβιου υποχώρησε στο 40.2% (6.9 ΕΚΜ), 29.8μ.π. πάνω από πέρυσι (10.4%).',
      ru: 'Каннавиу снизился — 40.2% (6.9 МКМ), +29.8пп выше прошлогодних 10.4%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos eased to 36% (0.79 MCM), 36pp above last year\'s 0%.',
      el: 'Μαυροκόλυμπος υποχώρησε στο 36% (0.79 ΕΚΜ), 36μ.π. πάνω από πέρυσι (0%).',
      ru: 'Мавроколимпос снизился — 36% (0.79 МКМ), +36пп выше прошлогодних 0%.',
    },
    'Evretou': {
      en: 'Evretou eased to 38% (9.12 MCM), 27.4pp above last year\'s 10.6%.',
      el: 'Εύρετου υποχώρησε στο 38% (9.12 ΕΚΜ), 27.4μ.π. πάνω από πέρυσι (10.6%).',
      ru: 'Эвретоу снизился — 38% (9.12 МКМ), +27.4пп выше прошлогодних 10.6%.',
    },
    'Argaka': {
      en: 'Argaka held at 42.6% (0.42 MCM), 42.6pp above last year\'s 0%.',
      el: 'Αργάκα παρέμεινε στο 42.6% (0.42 ΕΚΜ), 42.6μ.π. πάνω από πέρυσι (0%).',
      ru: 'Аргака без изменений — 42.6% (0.42 МКМ), +42.6пп выше прошлогодних 0%.',
    },
    'Pomos': {
      en: 'Pomos held at 57.3% (0.49 MCM), 45.7pp above last year\'s 11.6%.',
      el: 'Πόμος παρέμεινε στο 57.3% (0.49 ΕΚΜ), 45.7μ.π. πάνω από πέρυσι (11.6%).',
      ru: 'Помос без изменений — 57.3% (0.49 МКМ), +45.7пп выше прошлогодних 11.6%.',
    },
    'Agia Marina': {
      en: 'Agia Marina held at 53% (0.16 MCM), 33.9pp above last year\'s 19.1%.',
      el: 'Αγία Μαρίνα παρέμεινε στο 53% (0.16 ΕΚΜ), 33.9μ.π. πάνω από πέρυσι (19.1%).',
      ru: 'Агия без изменений — 53% (0.16 МКМ), +33.9пп выше прошлогодних 19.1%.',
    },
    'Vyzakia': {
      en: 'Vyzakia eased to 67.9% (1.15 MCM), 67.8pp above last year\'s 0.1%.',
      el: 'Βυζακιά υποχώρησε στο 67.9% (1.15 ΕΚΜ), 67.8μ.π. πάνω από πέρυσι (0.1%).',
      ru: 'Визакия снизился — 67.9% (1.15 МКМ), +67.8пп выше прошлогодних 0.1%.',
    },
    'Xyliatos': {
      en: 'Xyliatos eased to 73.3% (1.05 MCM), 72pp above last year\'s 1.3%.',
      el: 'Ξυλιάτος υποχώρησε στο 73.3% (1.05 ΕΚΜ), 72μ.π. πάνω από πέρυσι (1.3%).',
      ru: 'Ксилиатос снизился — 73.3% (1.05 МКМ), +72пп выше прошлогодних 1.3%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis unchanged at 100% (0.36 MCM), still the only dam overflowing. Up from 13.5% last year.',
      el: 'Ο Καλοπαναγιώτης αμετάβλητος στο 100% (0.36 ΕΚΜ), το μόνο φράγμα που υπερχειλίζει. Από 13.5% πέρυσι.',
      ru: 'Калопанайотис без изменений на 100% (0.36 МКМ), единственная переполненная дамба. Год назад 13.5%.',
    },
    'Tamassos': {
      en: 'Tamassos eased to 75.8% (2.12 MCM), 58.9pp above last year\'s 16.9%.',
      el: 'Ταμασός υποχώρησε στο 75.8% (2.12 ΕΚΜ), 58.9μ.π. πάνω από πέρυσι (16.9%).',
      ru: 'Тамассос снизился — 75.8% (2.12 МКМ), +58.9пп выше прошлогодних 16.9%.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta held at 91.2% (1.82 MCM), 37.3pp above last year\'s 53.9%.',
      el: 'Κλήρου-Μαλούντα παρέμεινε στο 91.2% (1.82 ΕΚΜ), 37.3μ.π. πάνω από πέρυσι (53.9%).',
      ru: 'Клиру-Малунта без изменений — 91.2% (1.82 МКМ), +37.3пп выше прошлогодних 53.9%.',
    },
    'Solea': {
      en: 'Solea eased to 81.5% (3.63 MCM), 39.8pp above last year\'s 41.7%.',
      el: 'Σολέα υποχώρησε στο 81.5% (3.63 ΕΚΜ), 39.8μ.π. πάνω από πέρυσι (41.7%).',
      ru: 'Солеа снизился — 81.5% (3.63 МКМ), +39.8пп выше прошлогодних 41.7%.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (10 — 19 Νοεμβρίου 2026)

Δελτίο Πέμπτης: συνολική αποθήκευση **34.8%** (101.24 ΕΚΜ) — μείωση 0.06 ΕΚΜ από την Τετάρτη (101.30 ΕΚΜ) και 0.71 ΕΚΜ κάτω από τις 10 Νοεμβρίου (101.95 ΕΚΜ), με τη βραδεία πτώση να συνεχίζεται. Η εισροή του τελευταίου 24ώρου ήταν 0.05 ΕΚΜ και η εισροή σεζόν φτάνει τα 3.39 ΕΚΜ. Το προβάδισμα έναντι πέρυσι παραμένει **24.9 μονάδες**.

**Αξιοσημείωτα (έναντι 10 Νοεμβρίου):**
- [Αρμίνου](/el/dam/arminou/) **75.6%** (+2.3μ.π. την εβδομάδα, 3.25 ΕΚΜ) — νέο υψηλό σεζόν, ο σταθερός «ανερχόμενος»
- [Κούρης](/el/dam/kouris/) **36.1%** (−0.42 ΕΚΜ την εβδομάδα, 41.56 ΕΚΜ) — εισροή 0.03 ΕΚΜ το τελευταίο 24ωρο, η πτώση συνεχίζεται
- [Αχνά](/el/dam/achna/) **8.7%** (+0.9μ.π. την εβδομάδα, 0.59 ΕΚΜ) — διατηρεί την πρώτη άνοδο της σεζόν
- [Ασπρόκρεμμος](/el/dam/asprokremmos/) **34.7%** (−0.12 ΕΚΜ την εβδομάδα, 18.19 ΕΚΜ) — ελαφρά υποχώρηση
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — το μόνο φράγμα που υπερχειλίζει

**Στα μέσα:**
- [Τέταρτη ημέρα έντασης στον Μαζωτό: Υπό αστυνομική περιφρούρηση οι εργασίες για την μονάδα αφαλάτωσης](https://www.alphanews.live/cyprus/tetarti-imera-entasis-ston-mazoto-ypo-astynomiki-perifrourisi-oi-ergasies-gia-tin-monada-afalatosis/) — AlphaNews
- [€200 εκατ. για το υδατικό – Τέσσερις νέες μονάδες αφαλάτωσης στον σχεδιασμό](https://dialogos.com.cy/e200-ekat-gia-to-ydatiko-tesseris-nees-monades-afalatosis-ston-schediasmo/) — Dialogos
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (10 — 19 ноября 2026)

Бюллетень четверга: общий запас **34.8%** (101.24 МКМ) — на 0.06 МКМ меньше, чем в среду (101.30 МКМ), и на 0.71 МКМ ниже, чем 10 ноября (101.95 МКМ): медленное снижение продолжается. Приток за последние сутки — 0.05 МКМ, за сезон — 3.39 МКМ. Отрыв от прошлого года сохраняется — **24.9 пункта**.

**Основные изменения (за период с 10 ноября):**
- [Арминоу](/ru/dam/arminou/) **75.6%** (+2.3пп за неделю, 3.25 МКМ) — новый максимум сезона, остаётся главным «растущим» водохранилищем
- [Курис](/ru/dam/kouris/) **36.1%** (−0.42 МКМ за неделю, 41.56 МКМ) — приток за сутки 0.03 МКМ, но снижение продолжается
- [Ахна](/ru/dam/achna/) **8.7%** (+0.9пп за неделю, 0.59 МКМ) — удерживает первый рост за сезон
- [Аспрокреммос](/ru/dam/asprokremmos/) **34.7%** (−0.12 МКМ за неделю, 18.19 МКМ) — небольшое снижение
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — единственная переполненная дамба
`;
  }
  return `
### Recent Changes (November 10 — 19, 2026)

Thursday's bulletin: total storage **34.8%** (101.24 MCM) — down 0.06 MCM from Wednesday (101.30 MCM) and 0.71 MCM below November 10 (101.95 MCM), the slow drawdown continuing. Inflow over the last 24 hours was 0.05 MCM and the season total reaches 3.39 MCM. The gap over last year holds at **24.9 points**.

**Notable movements (vs. November 10):**
- [Arminou](/dam/arminou/) **75.6%** (+2.3pp on the week, 3.25 MCM) — new season high, still the steady riser
- [Kouris](/dam/kouris/) **36.1%** (−0.42 MCM on the week, 41.56 MCM) — 0.03 MCM of inflow in 24 hours, but the drawdown continues
- [Achna](/dam/achna/) **8.7%** (+0.9pp on the week, 0.59 MCM) — holding its first uptick of the season
- [Asprokremmos](/dam/asprokremmos/) **34.7%** (−0.12 MCM on the week, 18.19 MCM) — easing slightly
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing

**In the media:**
- [Mazotos Desalination Dispute Intensifies as Works Suspended](https://en.politis.com.cy/news/environment/1071084/mazotos-desalination-dispute-intensifies-as-works-suspended) — Politis
- [Mazotos residents reject compensation measures over desalination plant](https://cyprus-mail.com/2026/11/03/mazotos-residents-reject-compensation-measures-over-desalination-plant) — Cyprus Mail
`;
};
