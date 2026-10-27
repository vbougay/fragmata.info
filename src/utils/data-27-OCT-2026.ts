import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.013, totalSince: 0.755 }, storage: { current: { amount: 41.833, percentage: 36.4 }, lastYear: { amount: 11.375, percentage: 9.9 } }, maxStorage: { amount: 48.267, date: "16/6" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 0.021 }, storage: { current: { amount: 3.646, percentage: 21.3 }, lastYear: { amount: 1.878, percentage: 11.0 } }, maxStorage: { amount: 4.247, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 0.012 }, storage: { current: { amount: 2.389, percentage: 17.2 }, lastYear: { amount: 1.997, percentage: 14.4 } }, maxStorage: { amount: 2.569, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 0.039 }, storage: { current: { amount: 3.677, percentage: 23.7 }, lastYear: { amount: 3.110, percentage: 20.1 } }, maxStorage: { amount: 5.941, date: "3/6" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 0.030 }, storage: { current: { amount: 6.284, percentage: 46.5 }, lastYear: { amount: 0.766, percentage: 5.7 } }, maxStorage: { amount: 8.140, date: "29/5" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.010, totalSince: 0.462 }, storage: { current: { amount: 2.923, percentage: 68.0 }, lastYear: { amount: 1.745, percentage: 40.6 } }, maxStorage: { amount: 3.117, date: "13/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 0.011 }, storage: { current: { amount: 1.457, percentage: 42.9 }, lastYear: { amount: 0.835, percentage: 24.6 } }, maxStorage: { amount: 2.198, date: "25/5" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.533, percentage: 7.8 }, lastYear: { amount: 0.097, percentage: 1.4 } }, maxStorage: { amount: 0.380, date: "30/9" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 0.101 }, storage: { current: { amount: 18.420, percentage: 35.2 }, lastYear: { amount: 4.849, percentage: 9.3 } }, maxStorage: { amount: 22.011, date: "29,5" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.001, totalSince: 0.119 }, storage: { current: { amount: 7.093, percentage: 41.3 }, lastYear: { amount: 2.009, percentage: 11.7 } }, maxStorage: { amount: 8.990, date: "28/5" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.020 }, storage: { current: { amount: 0.648, percentage: 29.7 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.974, date: "24/4" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 0.047 }, storage: { current: { amount: 9.214, percentage: 38.4 }, lastYear: { amount: 2.753, percentage: 11.5 } }, maxStorage: { amount: 12.036, date: "27/5" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 0.011 }, storage: { current: { amount: 0.435, percentage: 43.9 }, lastYear: { amount: 0.002, percentage: 0.2 } }, maxStorage: { amount: 0.990, date: "16/3-29/5" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.006 }, storage: { current: { amount: 0.498, percentage: 57.9 }, lastYear: { amount: 0.114, percentage: 13.3 } }, maxStorage: { amount: 0.860, date: "16/2-12/6" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.016 }, storage: { current: { amount: 0.149, percentage: 50.0 }, lastYear: { amount: 0.057, percentage: 19.1 } }, maxStorage: { amount: 0.298, date: "30/3-29/5" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 0.001 }, storage: { current: { amount: 1.181, percentage: 69.9 }, lastYear: { amount: 0.004, percentage: 0.2 } }, maxStorage: { amount: 1.690, date: "27/4-26/5" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 0.011 }, storage: { current: { amount: 1.061, percentage: 74.2 }, lastYear: { amount: 0.028, percentage: 2.0 } }, maxStorage: { amount: 1.430, date: "23/3-29/5" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.040, percentage: 11.0 } }, maxStorage: { amount: 0.363, date: "16/1-7/9" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 0.020 }, storage: { current: { amount: 2.178, percentage: 77.8 }, lastYear: { amount: 0.503, percentage: 18.0 } }, maxStorage: { amount: 2.800, date: "2/4-5/6" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.001, totalSince: 0.061 }, storage: { current: { amount: 1.789, percentage: 89.5 }, lastYear: { amount: 1.108, percentage: 55.4 } }, maxStorage: { amount: 2.000, date: "14/2-30/6" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 3.712, percentage: 83.3 }, lastYear: { amount: 1.916, percentage: 43.0 } }, maxStorage: { amount: 4.454, date: "10/3-2/6" }, region: "Recharge/Other" },
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
  { year: "26/27", months: { October:1.662, November:0, December:0, January:0, February:0, March:0, April:0, May:0, June:0, July:0, "Aug-Sep":0 }, total:1.662 },
];

export const getReportDate = (): string => "27-OCT-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.00 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris eased to 36.4% (41.8 MCM), 26.5pp above last year\'s 9.9%.',
      el: 'Ο Κούρης υποχώρησε στο 36.4% (41.8 ΕΚΜ), 26.5μ.π. πάνω από πέρυσι (9.9%).',
      ru: 'Курис снизился — 36.4% (41.8 МКМ), +26.5пп выше прошлогодних 9.9%.',
    },
    'Kalavasos': {
      en: 'Kalavasos eased to 21.3% (3.65 MCM), 10.3pp above last year\'s 11%.',
      el: 'Ο Καλαβασός υποχώρησε στο 21.3% (3.65 ΕΚΜ), 10.3μ.π. πάνω από πέρυσι (11%).',
      ru: 'Калавасос снизился — 21.3% (3.65 МКМ), +10.3пп выше прошлогодних 11%.',
    },
    'Lefkara': {
      en: 'Lefkara eased to 17.2% (2.39 MCM), 2.8pp above last year\'s 14.4%.',
      el: 'Η Λεύκαρα υποχώρησε στο 17.2% (2.39 ΕΚΜ), 2.8μ.π. πάνω από πέρυσι (14.4%).',
      ru: 'Лефкара снизился — 17.2% (2.39 МКМ), +2.8пп выше прошлогодних 14.4%.',
    },
    'Dipotamos': {
      en: 'Dipotamos eased to 23.7% (3.68 MCM), 3.6pp above last year\'s 20.1%.',
      el: 'Ο Διπόταμος υποχώρησε στο 23.7% (3.68 ΕΚΜ), 3.6μ.π. πάνω από πέρυσι (20.1%).',
      ru: 'Дипотамос снизился — 23.7% (3.68 МКМ), +3.6пп выше прошлогодних 20.1%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia eased to 46.5% (6.28 MCM), 40.8pp above last year\'s 5.7%.',
      el: 'Η Γερμασόγεια υποχώρησε στο 46.5% (6.28 ΕΚΜ), 40.8μ.π. πάνω από πέρυσι (5.7%).',
      ru: 'Гермасойя снизился — 46.5% (6.28 МКМ), +40.8пп выше прошлогодних 5.7%.',
    },
    'Arminou': {
      en: 'Arminou rose to 68% (2.92 MCM), 27.4pp above last year\'s 40.6%.',
      el: 'Ο Αρμίνου ανέβηκε στο 68% (2.92 ΕΚΜ), 27.4μ.π. πάνω από πέρυσι (40.6%).',
      ru: 'Арминоу вырос — 68% (2.92 МКМ), +27.4пп выше прошлогодних 40.6%.',
    },
    'Polemidia': {
      en: 'Polemidia held at 42.9% (1.46 MCM), 18.3pp above last year\'s 24.6%.',
      el: 'Η Πολεμίδια σταθερός στο 42.9% (1.46 ΕΚΜ), 18.3μ.π. πάνω από πέρυσι (24.6%).',
      ru: 'Полемидия без изменений — 42.9% (1.46 МКМ), +18.3пп выше прошлогодних 24.6%.',
    },
    'Achna': {
      en: 'Achna held at 7.8% (0.53 MCM), 6.4pp above last year\'s 1.4%.',
      el: 'Η Αχνά σταθερός στο 7.8% (0.53 ΕΚΜ), 6.4μ.π. πάνω από πέρυσι (1.4%).',
      ru: 'Ахна без изменений — 7.8% (0.53 МКМ), +6.4пп выше прошлогодних 1.4%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos eased to 35.2% (18.4 MCM), 25.9pp above last year\'s 9.3%.',
      el: 'Ο Ασπρόκρεμμος υποχώρησε στο 35.2% (18.4 ΕΚΜ), 25.9μ.π. πάνω από πέρυσι (9.3%).',
      ru: 'Аспрокреммос снизился — 35.2% (18.4 МКМ), +25.9пп выше прошлогодних 9.3%.',
    },
    'Kannaviou': {
      en: 'Kannaviou eased to 41.3% (7.09 MCM), 29.6pp above last year\'s 11.7%.',
      el: 'Ο Καννάβιου υποχώρησε στο 41.3% (7.09 ΕΚΜ), 29.6μ.π. πάνω από πέρυσι (11.7%).',
      ru: 'Каннавиу снизился — 41.3% (7.09 МКМ), +29.6пп выше прошлогодних 11.7%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos held at 29.7% (0.65 MCM), 29.7pp above last year\'s 0%.',
      el: 'Ο Μαυροκόλυμπος σταθερός στο 29.7% (0.65 ΕΚΜ), 29.7μ.π. πάνω από πέρυσι (0%).',
      ru: 'Мавроколимпос без изменений — 29.7% (0.65 МКМ), +29.7пп выше прошлогодних 0%.',
    },
    'Evretou': {
      en: 'Evretou eased to 38.4% (9.21 MCM), 26.9pp above last year\'s 11.5%.',
      el: 'Ο Εύρετου υποχώρησε στο 38.4% (9.21 ΕΚΜ), 26.9μ.π. πάνω από πέρυσι (11.5%).',
      ru: 'Эвретоу снизился — 38.4% (9.21 МКМ), +26.9пп выше прошлогодних 11.5%.',
    },
    'Argaka': {
      en: 'Argaka eased to 43.9% (0.43 MCM), 43.7pp above last year\'s 0.2%.',
      el: 'Η Αργάκα υποχώρησε στο 43.9% (0.43 ΕΚΜ), 43.7μ.π. πάνω από πέρυσι (0.2%).',
      ru: 'Аргака снизился — 43.9% (0.43 МКМ), +43.7пп выше прошлогодних 0.2%.',
    },
    'Pomos': {
      en: 'Pomos eased to 57.9% (0.5 MCM), 44.6pp above last year\'s 13.3%.',
      el: 'Ο Πόμος υποχώρησε στο 57.9% (0.5 ΕΚΜ), 44.6μ.π. πάνω από πέρυσι (13.3%).',
      ru: 'Помос снизился — 57.9% (0.5 МКМ), +44.6пп выше прошлогодних 13.3%.',
    },
    'Agia Marina': {
      en: 'Agia Marina held at 50% (0.15 MCM), 30.9pp above last year\'s 19.1%.',
      el: 'Η Αγία Μαρίνα σταθερός στο 50% (0.15 ΕΚΜ), 30.9μ.π. πάνω από πέρυσι (19.1%).',
      ru: 'Агия Марина без изменений — 50% (0.15 МКМ), +30.9пп выше прошлогодних 19.1%.',
    },
    'Vyzakia': {
      en: 'Vyzakia eased to 69.9% (1.18 MCM), 69.7pp above last year\'s 0.2%.',
      el: 'Τα Βυζακιά υποχώρησε στο 69.9% (1.18 ΕΚΜ), 69.7μ.π. πάνω από πέρυσι (0.2%).',
      ru: 'Визакия снизился — 69.9% (1.18 МКМ), +69.7пп выше прошлогодних 0.2%.',
    },
    'Xyliatos': {
      en: 'Xyliatos eased to 74.2% (1.06 MCM), 72.2pp above last year\'s 2%.',
      el: 'Ο Ξυλιάτος υποχώρησε στο 74.2% (1.06 ΕΚΜ), 72.2μ.π. πάνω από πέρυσι (2%).',
      ru: 'Ксилиатос снизился — 74.2% (1.06 МКМ), +72.2пп выше прошлогодних 2%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis unchanged at 100% (0.36 MCM), still the only dam overflowing. Up from 11% last year.',
      el: 'Ο Καλοπαναγιώτης αμετάβλητος στο 100% (0.36 ΕΚΜ), το μόνο φράγμα που υπερχειλίζει. Από 11% πέρυσι.',
      ru: 'Калопанайотис без изменений на 100% (0.36 МКМ), единственная переполненная дамба. Год назад 11%.',
    },
    'Tamassos': {
      en: 'Tamassos eased to 77.8% (2.18 MCM), 59.8pp above last year\'s 18%.',
      el: 'Ο Ταμασός υποχώρησε στο 77.8% (2.18 ΕΚΜ), 59.8μ.π. πάνω από πέρυσι (18%).',
      ru: 'Тамассос снизился — 77.8% (2.18 МКМ), +59.8пп выше прошлогодних 18%.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta held at 89.5% (1.79 MCM), 34.1pp above last year\'s 55.4%.',
      el: 'Η Κλήρου-Μαλούντα σταθερός στο 89.5% (1.79 ΕΚΜ), 34.1μ.π. πάνω από πέρυσι (55.4%).',
      ru: 'Клиру-Малунта без изменений — 89.5% (1.79 МКМ), +34.1пп выше прошлогодних 55.4%.',
    },
    'Solea': {
      en: 'Solea eased to 83.3% (3.71 MCM), 40.3pp above last year\'s 43%.',
      el: 'Η Σολέα υποχώρησε στο 83.3% (3.71 ΕΚΜ), 40.3μ.π. πάνω από πέρυσι (43%).',
      ru: 'Солеа снизился — 83.3% (3.71 МКМ), +40.3пп выше прошлогодних 43%.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (20 — 27 Οκτωβρίου 2026)

Δελτίο Τρίτης: συνολική αποθήκευση **35.0%** (101.80 ΕΚΜ) — μείωση 0.12 ΕΚΜ από χθες (101.92 ΕΚΜ) και 0.89 ΕΚΜ από τις 20 Οκτωβρίου, με τον ίδιο αργό ρυθμό. Η εισροή του τελευταίου 24ώρου ήταν μόλις 0.02 ΕΚΜ και η εισροή σεζόν φτάνει τα 1.66 ΕΚΜ. Ο [Αρμίνου](/el/dam/arminou/) παραμένει το μόνο φράγμα του Νότιου Αγωγού που ανεβαίνει: 68.0% έναντι 66.4% πριν από μία εβδομάδα. Το προβάδισμα έναντι πέρυσι είναι **24.1 μονάδες**.

**Αξιοσημείωτα (έναντι 20 Οκτωβρίου):**
- [Κούρης](/el/dam/kouris/) **36.4%** (41.83 ΕΚΜ) — −0.39 ΕΚΜ σε μία εβδομάδα, παρά την εισροή 0.01 ΕΚΜ σήμερα
- [Αρμίνου](/el/dam/arminou/) **68.0%** (+1.6μ.π. την εβδομάδα) — εισροή 0.01 ΕΚΜ
- [Γερμασόγεια](/el/dam/germasoyeia/) **46.5%** (−1.0μ.π. την εβδομάδα) — η μεγαλύτερη υποχώρηση σε ποσοστό στον Νότιο Αγωγό
- [Ασπρόκρεμμος](/el/dam/asprokremmos/) **35.2%** και [Καννάβιου](/el/dam/kannaviou/) **41.3%** — μικρές υποχωρήσεις
- [Αχνά](/el/dam/achna/) **7.8%** — μηδενική εισροή
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — το μόνο φράγμα που υπερχειλίζει

**Στα μέσα:**
- [«Κοκτέιλ» σκόνης και βροχών: Πότε έρχονται έντονα καιρικά φαινόμενα κι αισθητή πτώση της θερμοκρασίας](https://www.alphanews.live/cyprus/kokteil-skonis-kai-vrochon-pote-erchontai-entona-kairika-fainomena-ki-aisthiti-ptosi-tis-thermokrasias/) — AlphaNews
- [Αντιδράσεις στον Μαζωτό για τους σχεδιασμούς αφαλάτωσης – Ζητούν διαφάνεια και διαβούλευση](https://dialogos.com.cy/antidraseis-ston-mazoto-gia-toys-schediasmoys-afalatosis-zitoyn-diafaneia-kai-diavoyleysi/) — Dialogos
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (20 — 27 октября 2026)

Бюллетень вторника: общий запас **35.0%** (101.80 МКМ) — на 0.12 МКМ ниже, чем вчера (101.92 МКМ), и на 0.89 МКМ ниже, чем 20 октября, тем же медленным темпом. Приток за последние сутки — всего 0.02 МКМ, за сезон — 1.66 МКМ. [Арминоу](/ru/dam/arminou/) остаётся единственной дамбой Южного водовода, где уровень растёт: 68.0% против 66.4% неделю назад. Отрыв от прошлого года — **24.1 пункта**.

**Основные изменения (за период с 20 октября):**
- [Курис](/ru/dam/kouris/) **36.4%** (41.83 МКМ) — −0.39 МКМ за неделю, несмотря на приток 0.01 МКМ сегодня
- [Арминоу](/ru/dam/arminou/) **68.0%** (+1.6пп за неделю) — приток 0.01 МКМ
- [Гермасойя](/ru/dam/germasoyeia/) **46.5%** (−1.0пп за неделю) — наибольшее снижение в процентах на Южном водоводе
- [Аспрокреммос](/ru/dam/asprokremmos/) **35.2%** и [Каннавиу](/ru/dam/kannaviou/) **41.3%** — небольшие снижения
- [Ахна](/ru/dam/achna/) **7.8%** — притока нет
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — единственная переполненная дамба

**В СМИ:**
- [Сильные дожди на Кипре вызвали наводнения, перебои с электричеством и ограничения движения](https://cyprusbutterfly.com.cy/news/silnyie-dozhdi-kipre-vyizvali-navodneniya) — Cyprus Butterfly
- [14 и 15 октября на Кипр обрушатся ливни и сильные грозы](https://evropakipr.com/novosti/14-i-15-oktyabrya-na-kipr-obrushatsya-livni-i-silnye-grozy) — Европа Кипр
`;
  }
  return `
### Recent Changes (October 20 — 27, 2026)

Tuesday's bulletin: total storage **35.0%** (101.80 MCM) — down 0.12 MCM from yesterday (101.92 MCM) and 0.89 MCM since October 20, the same slow slide. Inflow over the last 24 hours was only 0.02 MCM, bringing the season total to 1.66 MCM. [Arminou](/dam/arminou/) is still the only Southern Conveyor dam rising, at 68.0% versus 66.4% a week ago. The gap over last year is **24.1 points**.

**Notable movements (vs. October 20):**
- [Kouris](/dam/kouris/) **36.4%** (41.83 MCM) — −0.39 MCM over the week, despite 0.01 MCM of inflow today
- [Arminou](/dam/arminou/) **68.0%** (+1.6pp on the week) — 0.01 MCM of inflow
- [Germasoyeia](/dam/germasoyeia/) **46.5%** (−1.0pp on the week) — the biggest percentage slip on the Southern Conveyor
- [Asprokremmos](/dam/asprokremmos/) **35.2%** and [Kannaviou](/dam/kannaviou/) **41.3%** — small slips
- [Achna](/dam/achna/) **7.8%** — zero inflow
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing

**In the media:**
- [Nicosia water losses below national average](https://cyprus-mail.com/2026/10/21/nicosia-water-losses-below-national-average) — Cyprus Mail
- [Mazotos residents gather signatures against planned desalination plant](https://cyprus-mail.com/2026/10/20/mazotos-residents-gather-signatures-against-planned-desalination-plant) — Cyprus Mail
`;
};
