import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.109, totalSince: 0.864 }, storage: { current: { amount: 41.850, percentage: 36.4 }, lastYear: { amount: 11.271, percentage: 9.8 } }, maxStorage: { amount: 48.267, date: "16/6" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.006, totalSince: 0.027 }, storage: { current: { amount: 3.649, percentage: 21.3 }, lastYear: { amount: 1.858, percentage: 10.9 } }, maxStorage: { amount: 4.247, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.003, totalSince: 0.015 }, storage: { current: { amount: 2.391, percentage: 17.3 }, lastYear: { amount: 1.991, percentage: 14.4 } }, maxStorage: { amount: 2.569, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.028, totalSince: 0.067 }, storage: { current: { amount: 3.696, percentage: 23.8 }, lastYear: { amount: 3.097, percentage: 20.0 } }, maxStorage: { amount: 5.941, date: "3/6" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.003, totalSince: 0.033 }, storage: { current: { amount: 6.270, percentage: 46.4 }, lastYear: { amount: 0.730, percentage: 5.4 } }, maxStorage: { amount: 8.140, date: "29/5" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.032, totalSince: 0.494 }, storage: { current: { amount: 2.947, percentage: 68.5 }, lastYear: { amount: 1.737, percentage: 40.4 } }, maxStorage: { amount: 3.117, date: "13/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 0.011 }, storage: { current: { amount: 1.457, percentage: 42.9 }, lastYear: { amount: 0.832, percentage: 24.5 } }, maxStorage: { amount: 2.198, date: "25/5" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.533, percentage: 7.8 }, lastYear: { amount: 0.096, percentage: 1.4 } }, maxStorage: { amount: 0.380, date: "30/9" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.030, totalSince: 0.131 }, storage: { current: { amount: 18.418, percentage: 35.2 }, lastYear: { amount: 4.799, percentage: 9.2 } }, maxStorage: { amount: 22.011, date: "29,5" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 0.119 }, storage: { current: { amount: 7.073, percentage: 41.2 }, lastYear: { amount: 1.988, percentage: 11.6 } }, maxStorage: { amount: 8.990, date: "28/5" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.005, totalSince: 0.025 }, storage: { current: { amount: 0.651, percentage: 29.9 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.974, date: "24/4" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.004, totalSince: 0.051 }, storage: { current: { amount: 9.207, percentage: 38.4 }, lastYear: { amount: 2.732, percentage: 11.4 } }, maxStorage: { amount: 12.036, date: "27/5" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 0.011 }, storage: { current: { amount: 0.430, percentage: 43.4 }, lastYear: { amount: 0.002, percentage: 0.2 } }, maxStorage: { amount: 0.990, date: "16/3-29/5" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.006 }, storage: { current: { amount: 0.498, percentage: 57.9 }, lastYear: { amount: 0.114, percentage: 13.3 } }, maxStorage: { amount: 0.860, date: "16/2-12/6" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.002, totalSince: 0.018 }, storage: { current: { amount: 0.151, percentage: 50.7 }, lastYear: { amount: 0.057, percentage: 19.1 } }, maxStorage: { amount: 0.298, date: "30/3-29/5" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 0.001 }, storage: { current: { amount: 1.181, percentage: 69.9 }, lastYear: { amount: 0.003, percentage: 0.2 } }, maxStorage: { amount: 1.690, date: "27/4-26/5" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.001, totalSince: 0.012 }, storage: { current: { amount: 1.061, percentage: 74.2 }, lastYear: { amount: 0.028, percentage: 2.0 } }, maxStorage: { amount: 1.430, date: "23/3-29/5" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.040, percentage: 11.0 } }, maxStorage: { amount: 0.363, date: "16/1-7/9" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 0.020 }, storage: { current: { amount: 2.175, percentage: 77.7 }, lastYear: { amount: 0.501, percentage: 17.9 } }, maxStorage: { amount: 2.800, date: "2/4-5/6" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.001, totalSince: 0.062 }, storage: { current: { amount: 1.789, percentage: 89.5 }, lastYear: { amount: 1.106, percentage: 55.3 } }, maxStorage: { amount: 2.000, date: "14/2-30/6" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 3.704, percentage: 83.2 }, lastYear: { amount: 1.912, percentage: 42.9 } }, maxStorage: { amount: 4.454, date: "10/3-2/6" }, region: "Recharge/Other" },
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
  { year: "26/27", months: { October:1.885, November:0, December:0, January:0, February:0, March:0, April:0, May:0, June:0, July:0, "Aug-Sep":0 }, total:1.885 },
];

export const getReportDate = (): string => "29-OCT-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.00 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris rose to 36.4% (41.9 MCM), 26.6pp above last year\'s 9.8%.',
      el: 'Κούρης ανέβηκε στο 36.4% (41.9 ΕΚΜ), 26.6μ.π. πάνω από πέρυσι (9.8%).',
      ru: 'Курис вырос — 36.4% (41.9 МКМ), +26.6пп выше прошлогодних 9.8%.',
    },
    'Kalavasos': {
      en: 'Kalavasos held at 21.3% (3.65 MCM), 10.4pp above last year\'s 10.9%.',
      el: 'Καλαβασός σταθερός στο 21.3% (3.65 ΕΚΜ), 10.4μ.π. πάνω από πέρυσι (10.9%).',
      ru: 'Калавасос без изменений — 21.3% (3.65 МКМ), +10.4пп выше прошлогодних 10.9%.',
    },
    'Lefkara': {
      en: 'Lefkara held at 17.3% (2.39 MCM), 2.9pp above last year\'s 14.4%.',
      el: 'Λεύκαρα σταθερός στο 17.3% (2.39 ΕΚΜ), 2.9μ.π. πάνω από πέρυσι (14.4%).',
      ru: 'Лефкара без изменений — 17.3% (2.39 МКМ), +2.9пп выше прошлогодних 14.4%.',
    },
    'Dipotamos': {
      en: 'Dipotamos rose to 23.8% (3.7 MCM), 3.8pp above last year\'s 20%.',
      el: 'Διπόταμος ανέβηκε στο 23.8% (3.7 ΕΚΜ), 3.8μ.π. πάνω από πέρυσι (20%).',
      ru: 'Дипотамос вырос — 23.8% (3.7 МКМ), +3.8пп выше прошлогодних 20%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia eased to 46.4% (6.27 MCM), 41pp above last year\'s 5.4%.',
      el: 'Γερμασόγεια υποχώρησε στο 46.4% (6.27 ΕΚΜ), 41μ.π. πάνω από πέρυσι (5.4%).',
      ru: 'Гермасойя снизился — 46.4% (6.27 МКМ), +41пп выше прошлогодних 5.4%.',
    },
    'Arminou': {
      en: 'Arminou rose to 68.5% (2.95 MCM), 28.1pp above last year\'s 40.4%.',
      el: 'Αρμίνου ανέβηκε στο 68.5% (2.95 ΕΚΜ), 28.1μ.π. πάνω από πέρυσι (40.4%).',
      ru: 'Арминоу вырос — 68.5% (2.95 МКМ), +28.1пп выше прошлогодних 40.4%.',
    },
    'Polemidia': {
      en: 'Polemidia held at 42.9% (1.46 MCM), 18.4pp above last year\'s 24.5%.',
      el: 'Πολεμίδια σταθερός στο 42.9% (1.46 ΕΚΜ), 18.4μ.π. πάνω από πέρυσι (24.5%).',
      ru: 'Полемидия без изменений — 42.9% (1.46 МКМ), +18.4пп выше прошлогодних 24.5%.',
    },
    'Achna': {
      en: 'Achna held at 7.8% (0.53 MCM), 6.4pp above last year\'s 1.4%.',
      el: 'Αχνά σταθερός στο 7.8% (0.53 ΕΚΜ), 6.4μ.π. πάνω από πέρυσι (1.4%).',
      ru: 'Ахна без изменений — 7.8% (0.53 МКМ), +6.4пп выше прошлогодних 1.4%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos held at 35.2% (18.4 MCM), 26pp above last year\'s 9.2%.',
      el: 'Ασπρόκρεμμος σταθερός στο 35.2% (18.4 ΕΚΜ), 26μ.π. πάνω από πέρυσι (9.2%).',
      ru: 'Аспрокреммос без изменений — 35.2% (18.4 МКМ), +26пп выше прошлогодних 9.2%.',
    },
    'Kannaviou': {
      en: 'Kannaviou eased to 41.2% (7.07 MCM), 29.6pp above last year\'s 11.6%.',
      el: 'Καννάβιου υποχώρησε στο 41.2% (7.07 ΕΚΜ), 29.6μ.π. πάνω από πέρυσι (11.6%).',
      ru: 'Каннавиу снизился — 41.2% (7.07 МКМ), +29.6пп выше прошлогодних 11.6%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos held at 29.9% (0.65 MCM), 29.9pp above last year\'s 0%.',
      el: 'Μαυροκόλυμπος σταθερός στο 29.9% (0.65 ΕΚΜ), 29.9μ.π. πάνω από πέρυσι (0%).',
      ru: 'Мавроколимпос без изменений — 29.9% (0.65 МКМ), +29.9пп выше прошлогодних 0%.',
    },
    'Evretou': {
      en: 'Evretou held at 38.4% (9.21 MCM), 27pp above last year\'s 11.4%.',
      el: 'Εύρετου σταθερός στο 38.4% (9.21 ΕΚΜ), 27μ.π. πάνω από πέρυσι (11.4%).',
      ru: 'Эвретоу без изменений — 38.4% (9.21 МКМ), +27пп выше прошлогодних 11.4%.',
    },
    'Argaka': {
      en: 'Argaka eased to 43.4% (0.43 MCM), 43.2pp above last year\'s 0.2%.',
      el: 'Αργάκα υποχώρησε στο 43.4% (0.43 ΕΚΜ), 43.2μ.π. πάνω από πέρυσι (0.2%).',
      ru: 'Аргака снизился — 43.4% (0.43 МКМ), +43.2пп выше прошлогодних 0.2%.',
    },
    'Pomos': {
      en: 'Pomos held at 57.9% (0.5 MCM), 44.6pp above last year\'s 13.3%.',
      el: 'Πόμος σταθερός στο 57.9% (0.5 ΕΚΜ), 44.6μ.π. πάνω από πέρυσι (13.3%).',
      ru: 'Помос без изменений — 57.9% (0.5 МКМ), +44.6пп выше прошлогодних 13.3%.',
    },
    'Agia Marina': {
      en: 'Agia Marina held at 50.7% (0.15 MCM), 31.6pp above last year\'s 19.1%.',
      el: 'Αγία Μαρίνα σταθερός στο 50.7% (0.15 ΕΚΜ), 31.6μ.π. πάνω από πέρυσι (19.1%).',
      ru: 'Агия Марина без изменений — 50.7% (0.15 МКМ), +31.6пп выше прошлогодних 19.1%.',
    },
    'Vyzakia': {
      en: 'Vyzakia held at 69.9% (1.18 MCM), 69.7pp above last year\'s 0.2%.',
      el: 'Βυζακιά σταθερός στο 69.9% (1.18 ΕΚΜ), 69.7μ.π. πάνω από πέρυσι (0.2%).',
      ru: 'Визакия без изменений — 69.9% (1.18 МКМ), +69.7пп выше прошлогодних 0.2%.',
    },
    'Xyliatos': {
      en: 'Xyliatos held at 74.2% (1.06 MCM), 72.2pp above last year\'s 2%.',
      el: 'Ξυλιάτος σταθερός στο 74.2% (1.06 ΕΚΜ), 72.2μ.π. πάνω από πέρυσι (2%).',
      ru: 'Ксилиатос без изменений — 74.2% (1.06 МКМ), +72.2пп выше прошлогодних 2%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis unchanged at 100% (0.36 MCM), still the only dam overflowing. Up from 11% last year.',
      el: 'Ο Καλοπαναγιώτης αμετάβλητος στο 100% (0.36 ΕΚΜ), το μόνο φράγμα που υπερχειλίζει. Από 11% πέρυσι.',
      ru: 'Калопанайотис без изменений на 100% (0.36 МКМ), единственная переполненная дамба. Год назад 11%.',
    },
    'Tamassos': {
      en: 'Tamassos held at 77.7% (2.17 MCM), 59.8pp above last year\'s 17.9%.',
      el: 'Ταμασός σταθερός στο 77.7% (2.17 ΕΚΜ), 59.8μ.π. πάνω από πέρυσι (17.9%).',
      ru: 'Тамассос без изменений — 77.7% (2.17 МКМ), +59.8пп выше прошлогодних 17.9%.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta held at 89.5% (1.79 MCM), 34.2pp above last year\'s 55.3%.',
      el: 'Κλήρου-Μαλούντα σταθερός στο 89.5% (1.79 ΕΚΜ), 34.2μ.π. πάνω από πέρυσι (55.3%).',
      ru: 'Клиру-Малунта без изменений — 89.5% (1.79 МКМ), +34.2пп выше прошлогодних 55.3%.',
    },
    'Solea': {
      en: 'Solea eased to 83.2% (3.7 MCM), 40.3pp above last year\'s 42.9%.',
      el: 'Σολέα υποχώρησε στο 83.2% (3.7 ΕΚΜ), 40.3μ.π. πάνω από πέρυσι (42.9%).',
      ru: 'Солеа снизился — 83.2% (3.7 МКМ), +40.3пп выше прошлогодних 42.9%.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (22 — 29 Οκτωβρίου 2026)

Δελτίο Πέμπτης: συνολική αποθήκευση **35.0%** (101.83 ΕΚΜ) — αμετάβλητη από το δελτίο της Τρίτης (101.80 ΕΚΜ) και 0.59 ΕΚΜ χαμηλότερα από τις 22 Οκτωβρίου. Η εισροή των τελευταίων 48 ωρών ήταν 0.22 ΕΚΜ, με την εισροή σεζόν να φτάνει τα 1.89 ΕΚΜ, καθώς το βαρομετρικό χαμηλό έφερε βροχές και καταιγίδες. Είναι η πρώτη μικρή αύξηση του συνόλου μετά από μέρες σταθερής μείωσης. Το προβάδισμα έναντι πέρυσι είναι **24.2 μονάδες**.

**Αξιοσημείωτα (έναντι 22 Οκτωβρίου):**
- [Αρμίνου](/el/dam/arminou/) **68.5%** (+1.5μ.π. την εβδομάδα, 2.95 ΕΚΜ) — το μόνο φράγμα του Νότιου Αγωγού που ανεβαίνει σταθερά
- [Κούρης](/el/dam/kouris/) **36.4%** (41.85 ΕΚΜ) — σταθεροποιήθηκε με εισροή 0.11 ΕΚΜ, −0.22 ΕΚΜ σε μία εβδομάδα
- [Γερμασόγεια](/el/dam/germasoyeia/) **46.4%** (−0.9μ.π. την εβδομάδα) — η μεγαλύτερη υποχώρηση σε ποσοστό στον Νότιο Αγωγό
- [Ασπρόκρεμμος](/el/dam/asprokremmos/) **35.2%** — εισροή 0.03 ΕΚΜ
- [Αχνά](/el/dam/achna/) **7.8%** — μηδενική εισροή
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — το μόνο φράγμα που υπερχειλίζει

**Στα μέσα:**
- [Βροχές, καταιγίδες, χαλάζι και πολύ ισχυρά μποφόρ: Έτσι «χτυπά» το βαρομετρικό χαμηλό την Κύπρο](https://www.alphanews.live/cyprus/vroches-kataigides-chalazi-kai-poly-ischyra-bofor-etsi-chtypa-to-varometriko-chamilo-tin-kypro/) — AlphaNews
- [Έντονες βροχοπτώσεις στην Πάφο](https://www.politis.com.cy/politis-news/koinonia/1059789/entones-vrokhoptwseis-stin-pafo) — Πολίτης
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (22 — 29 октября 2026)

Бюллетень четверга: общий запас **35.0%** (101.83 МКМ) — без изменений с вторника (101.80 МКМ) и на 0.59 МКМ ниже, чем 22 октября. Приток за последние 48 часов — 0.22 МКМ, за сезон — 1.89 МКМ: циклон принёс дожди и грозы. Это первый небольшой рост общего запаса после череды дней медленного снижения. Отрыв от прошлого года — **24.2 пункта**.

**Основные изменения (за период с 22 октября):**
- [Арминоу](/ru/dam/arminou/) **68.5%** (+1.5пп за неделю, 2.95 МКМ) — единственная дамба Южного водовода, где уровень уверенно растёт
- [Курис](/ru/dam/kouris/) **36.4%** (41.85 МКМ) — стабилизировался при притоке 0.11 МКМ, −0.22 МКМ за неделю
- [Гермасойя](/ru/dam/germasoyeia/) **46.4%** (−0.9пп за неделю) — наибольшее снижение в процентах на Южном водоводе
- [Аспрокреммос](/ru/dam/asprokremmos/) **35.2%** — приток 0.03 МКМ
- [Ахна](/ru/dam/achna/) **7.8%** — притока нет
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — единственная переполненная дамба

**В СМИ:**
- [Сильные дожди на Кипре вызвали наводнения, перебои с электричеством и ограничения движения](https://cyprusbutterfly.com.cy/news/silnyie-dozhdi-kipre-vyizvali-navodneniya) — Cyprus Butterfly
`;
  }
  return `
### Recent Changes (October 22 — 29, 2026)

Thursday's bulletin: total storage **35.0%** (101.83 MCM) — essentially unchanged from Tuesday (101.80 MCM) and 0.59 MCM below October 22. Inflow over the last 48 hours was 0.22 MCM, bringing the season total to 1.89 MCM as a low-pressure system brought rain and storms. It is the first small uptick in the total after days of steady drawdown. The gap over last year is **24.2 points**.

**Notable movements (vs. October 22):**
- [Arminou](/dam/arminou/) **68.5%** (+1.5pp on the week, 2.95 MCM) — still the only Southern Conveyor dam rising steadily
- [Kouris](/dam/kouris/) **36.4%** (41.85 MCM) — steadied on 0.11 MCM of inflow, −0.22 MCM over the week
- [Germasoyeia](/dam/germasoyeia/) **46.4%** (−0.9pp on the week) — the biggest percentage slip on the Southern Conveyor
- [Asprokremmos](/dam/asprokremmos/) **35.2%** — 0.03 MCM of inflow
- [Achna](/dam/achna/) **7.8%** — zero inflow
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing

**In the media:**
- [Nicosia water losses below national average](https://cyprus-mail.com/2026/10/21/nicosia-water-losses-below-national-average) — Cyprus Mail
- [Mazotos residents gather signatures against planned desalination plant](https://cyprus-mail.com/2026/10/20/mazotos-residents-gather-signatures-against-planned-desalination-plant) — Cyprus Mail
`;
};
