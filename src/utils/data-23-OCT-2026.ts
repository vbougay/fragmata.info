import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.036, totalSince: 0.665 }, storage: { current: { amount: 42.004, percentage: 36.5 }, lastYear: { amount: 11.705, percentage: 10.2 } }, maxStorage: { amount: 48.267, date: "16/6" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 0.021 }, storage: { current: { amount: 3.676, percentage: 21.5 }, lastYear: { amount: 1.930, percentage: 11.3 } }, maxStorage: { amount: 4.247, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 0.012 }, storage: { current: { amount: 2.395, percentage: 17.3 }, lastYear: { amount: 2.004, percentage: 14.5 } }, maxStorage: { amount: 2.569, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 0.039 }, storage: { current: { amount: 3.715, percentage: 24.0 }, lastYear: { amount: 3.203, percentage: 20.7 } }, maxStorage: { amount: 5.941, date: "3/6" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 0.030 }, storage: { current: { amount: 6.377, percentage: 47.2 }, lastYear: { amount: 0.822, percentage: 6.1 } }, maxStorage: { amount: 8.140, date: "29/5" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.014, totalSince: 0.413 }, storage: { current: { amount: 2.890, percentage: 67.2 }, lastYear: { amount: 1.755, percentage: 40.8 } }, maxStorage: { amount: 3.117, date: "13/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 0.011 }, storage: { current: { amount: 1.458, percentage: 42.9 }, lastYear: { amount: 0.837, percentage: 24.6 } }, maxStorage: { amount: 2.198, date: "25/5" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.537, percentage: 7.9 }, lastYear: { amount: 0.097, percentage: 1.4 } }, maxStorage: { amount: 0.380, date: "30/9" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 0.101 }, storage: { current: { amount: 18.478, percentage: 35.3 }, lastYear: { amount: 4.963, percentage: 9.5 } }, maxStorage: { amount: 22.011, date: "29,5" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 0.115 }, storage: { current: { amount: 7.134, percentage: 41.6 }, lastYear: { amount: 2.056, percentage: 12.0 } }, maxStorage: { amount: 8.990, date: "28/5" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.020 }, storage: { current: { amount: 0.653, percentage: 30.0 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.974, date: "24/4" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 0.047 }, storage: { current: { amount: 9.246, percentage: 38.5 }, lastYear: { amount: 2.814, percentage: 11.7 } }, maxStorage: { amount: 12.036, date: "27/5" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 0.011 }, storage: { current: { amount: 0.441, percentage: 44.5 }, lastYear: { amount: 0.003, percentage: 0.3 } }, maxStorage: { amount: 0.990, date: "16/3-29/5" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.006 }, storage: { current: { amount: 0.503, percentage: 58.5 }, lastYear: { amount: 0.115, percentage: 13.4 } }, maxStorage: { amount: 0.860, date: "16/2-12/6" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.001, totalSince: 0.015 }, storage: { current: { amount: 0.148, percentage: 49.7 }, lastYear: { amount: 0.055, percentage: 18.5 } }, maxStorage: { amount: 0.298, date: "30/3-29/5" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 0.001 }, storage: { current: { amount: 1.190, percentage: 70.4 }, lastYear: { amount: 0.005, percentage: 0.3 } }, maxStorage: { amount: 1.690, date: "27/4-26/5" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 0.011 }, storage: { current: { amount: 1.064, percentage: 74.4 }, lastYear: { amount: 0.029, percentage: 2.0 } }, maxStorage: { amount: 1.430, date: "23/3-29/5" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.040, percentage: 11.0 } }, maxStorage: { amount: 0.363, date: "16/1-7/9" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 0.020 }, storage: { current: { amount: 2.198, percentage: 78.5 }, lastYear: { amount: 0.512, percentage: 18.3 } }, maxStorage: { amount: 2.800, date: "2/4-5/6" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.001, totalSince: 0.057 }, storage: { current: { amount: 1.789, percentage: 89.5 }, lastYear: { amount: 1.113, percentage: 55.7 } }, maxStorage: { amount: 2.000, date: "14/2-30/6" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 3.727, percentage: 83.7 }, lastYear: { amount: 1.930, percentage: 43.3 } }, maxStorage: { amount: 4.454, date: "10/3-2/6" }, region: "Recharge/Other" },
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
  { year: "26/27", months: { October:1.518, November:0, December:0, January:0, February:0, March:0, April:0, May:0, June:0, July:0, "Aug-Sep":0 }, total:1.518 },
];

export const getReportDate = (): string => "23-OCT-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.00 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris eased to 36.5% (42 MCM), 26.3pp above last year\'s 10.2%.',
      el: 'Ο Κούρης υποχώρησε στο 36.5% (42 ΕΚΜ), 26.3μ.π. πάνω από πέρυσι (10.2%).',
      ru: 'Курис снизился — 36.5% (42 МКМ), +26.3пп выше прошлогодних 10.2%.',
    },
    'Kalavasos': {
      en: 'Kalavasos eased to 21.5% (3.68 MCM), 10.2pp above last year\'s 11.3%.',
      el: 'Ο Καλαβασός υποχώρησε στο 21.5% (3.68 ΕΚΜ), 10.2μ.π. πάνω από πέρυσι (11.3%).',
      ru: 'Калавасос снизился — 21.5% (3.68 МКМ), +10.2пп выше прошлогодних 11.3%.',
    },
    'Lefkara': {
      en: 'Lefkara eased to 17.3% (2.4 MCM), 2.8pp above last year\'s 14.5%.',
      el: 'Η Λεύκαρα υποχώρησε στο 17.3% (2.4 ΕΚΜ), 2.8μ.π. πάνω από πέρυσι (14.5%).',
      ru: 'Лефкара снизился — 17.3% (2.4 МКМ), +2.8пп выше прошлогодних 14.5%.',
    },
    'Dipotamos': {
      en: 'Dipotamos eased to 24% (3.71 MCM), 3.3pp above last year\'s 20.7%.',
      el: 'Ο Διπόταμος υποχώρησε στο 24% (3.71 ΕΚΜ), 3.3μ.π. πάνω από πέρυσι (20.7%).',
      ru: 'Дипотамос снизился — 24% (3.71 МКМ), +3.3пп выше прошлогодних 20.7%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia eased to 47.2% (6.38 MCM), 41.1pp above last year\'s 6.1%.',
      el: 'Η Γερμασόγεια υποχώρησε στο 47.2% (6.38 ΕΚΜ), 41.1μ.π. πάνω από πέρυσι (6.1%).',
      ru: 'Гермасойя снизился — 47.2% (6.38 МКМ), +41.1пп выше прошлогодних 6.1%.',
    },
    'Arminou': {
      en: 'Arminou rose to 67.2% (2.89 MCM), 26.4pp above last year\'s 40.8%.',
      el: 'Ο Αρμίνου ανέβηκε στο 67.2% (2.89 ΕΚΜ), 26.4μ.π. πάνω από πέρυσι (40.8%).',
      ru: 'Арминоу вырос — 67.2% (2.89 МКМ), +26.4пп выше прошлогодних 40.8%.',
    },
    'Polemidia': {
      en: 'Polemidia eased to 42.9% (1.46 MCM), 18.3pp above last year\'s 24.6%.',
      el: 'Η Πολεμίδια υποχώρησε στο 42.9% (1.46 ΕΚΜ), 18.3μ.π. πάνω από πέρυσι (24.6%).',
      ru: 'Полемидия снизился — 42.9% (1.46 МКМ), +18.3пп выше прошлогодних 24.6%.',
    },
    'Achna': {
      en: 'Achna eased to 7.9% (0.54 MCM), 6.5pp above last year\'s 1.4%.',
      el: 'Η Αχνά υποχώρησε στο 7.9% (0.54 ΕΚΜ), 6.5μ.π. πάνω από πέρυσι (1.4%).',
      ru: 'Ахна снизился — 7.9% (0.54 МКМ), +6.5пп выше прошлогодних 1.4%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos eased to 35.3% (18.5 MCM), 25.8pp above last year\'s 9.5%.',
      el: 'Ο Ασπρόκρεμμος υποχώρησε στο 35.3% (18.5 ΕΚΜ), 25.8μ.π. πάνω από πέρυσι (9.5%).',
      ru: 'Аспрокреммос снизился — 35.3% (18.5 МКМ), +25.8пп выше прошлогодних 9.5%.',
    },
    'Kannaviou': {
      en: 'Kannaviou eased to 41.6% (7.13 MCM), 29.6pp above last year\'s 12%.',
      el: 'Ο Καννάβιου υποχώρησε στο 41.6% (7.13 ΕΚΜ), 29.6μ.π. πάνω από πέρυσι (12%).',
      ru: 'Каннавиу снизился — 41.6% (7.13 МКМ), +29.6пп выше прошлогодних 12%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos eased to 30% (0.65 MCM), 30pp above last year\'s 0%.',
      el: 'Ο Μαυροκόλυμπος υποχώρησε στο 30% (0.65 ΕΚΜ), 30μ.π. πάνω από πέρυσι (0%).',
      ru: 'Мавроколимпос снизился — 30% (0.65 МКМ), +30пп выше прошлогодних 0%.',
    },
    'Evretou': {
      en: 'Evretou eased to 38.5% (9.25 MCM), 26.8pp above last year\'s 11.7%.',
      el: 'Ο Εύρετου υποχώρησε στο 38.5% (9.25 ΕΚΜ), 26.8μ.π. πάνω από πέρυσι (11.7%).',
      ru: 'Эвретоу снизился — 38.5% (9.25 МКМ), +26.8пп выше прошлогодних 11.7%.',
    },
    'Argaka': {
      en: 'Argaka held at 44.5% (0.44 MCM), 44.2pp above last year\'s 0.3%.',
      el: 'Η Αργάκα σταθερός στο 44.5% (0.44 ΕΚΜ), 44.2μ.π. πάνω από πέρυσι (0.3%).',
      ru: 'Аргака без изменений — 44.5% (0.44 МКМ), +44.2пп выше прошлогодних 0.3%.',
    },
    'Pomos': {
      en: 'Pomos held at 58.5% (0.5 MCM), 45.1pp above last year\'s 13.4%.',
      el: 'Ο Πόμος σταθερός στο 58.5% (0.5 ΕΚΜ), 45.1μ.π. πάνω από πέρυσι (13.4%).',
      ru: 'Помос без изменений — 58.5% (0.5 МКМ), +45.1пп выше прошлогодних 13.4%.',
    },
    'Agia Marina': {
      en: 'Agia Marina rose to 49.7% (0.15 MCM), 31.2pp above last year\'s 18.5%.',
      el: 'Η Αγία Μαρίνα ανέβηκε στο 49.7% (0.15 ΕΚΜ), 31.2μ.π. πάνω από πέρυσι (18.5%).',
      ru: 'Агия Марина вырос — 49.7% (0.15 МКМ), +31.2пп выше прошлогодних 18.5%.',
    },
    'Vyzakia': {
      en: 'Vyzakia eased to 70.4% (1.19 MCM), 70.1pp above last year\'s 0.3%.',
      el: 'Τα Βυζακιά υποχώρησε στο 70.4% (1.19 ΕΚΜ), 70.1μ.π. πάνω από πέρυσι (0.3%).',
      ru: 'Визакия снизился — 70.4% (1.19 МКМ), +70.1пп выше прошлогодних 0.3%.',
    },
    'Xyliatos': {
      en: 'Xyliatos eased to 74.4% (1.06 MCM), 72.4pp above last year\'s 2%.',
      el: 'Ο Ξυλιάτος υποχώρησε στο 74.4% (1.06 ΕΚΜ), 72.4μ.π. πάνω από πέρυσι (2%).',
      ru: 'Ксилиатос снизился — 74.4% (1.06 МКМ), +72.4пп выше прошлогодних 2%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis unchanged at 100% (0.36 MCM), still the only dam overflowing. Up from 11% last year.',
      el: 'Ο Καλοπαναγιώτης αμετάβλητος στο 100% (0.36 ΕΚΜ), το μόνο φράγμα που υπερχειλίζει. Από 11% πέρυσι.',
      ru: 'Калопанайотис без изменений на 100% (0.36 МКМ), единственная переполненная дамба. Год назад 11%.',
    },
    'Tamassos': {
      en: 'Tamassos eased to 78.5% (2.2 MCM), 60.2pp above last year\'s 18.3%.',
      el: 'Ο Ταμασός υποχώρησε στο 78.5% (2.2 ΕΚΜ), 60.2μ.π. πάνω από πέρυσι (18.3%).',
      ru: 'Тамассос снизился — 78.5% (2.2 МКМ), +60.2пп выше прошлогодних 18.3%.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta held at 89.5% (1.79 MCM), 33.8pp above last year\'s 55.7%.',
      el: 'Η Κλήρου-Μαλούντα σταθερός στο 89.5% (1.79 ΕΚΜ), 33.8μ.π. πάνω από πέρυσι (55.7%).',
      ru: 'Клиру-Малунта без изменений — 89.5% (1.79 МКМ), +33.8пп выше прошлогодних 55.7%.',
    },
    'Solea': {
      en: 'Solea eased to 83.7% (3.73 MCM), 40.4pp above last year\'s 43.3%.',
      el: 'Η Σολέα υποχώρησε στο 83.7% (3.73 ΕΚΜ), 40.4μ.π. πάνω από πέρυσι (43.3%).',
      ru: 'Солеа снизился — 83.7% (3.73 МКМ), +40.4пп выше прошлогодних 43.3%.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (16 — 23 Οκτωβρίου 2026)

Δελτίο Παρασκευής: συνολική αποθήκευση **35.2%** (102.27 ΕΚΜ) — μείωση 0.14 ΕΚΜ από την Πέμπτη (102.41 ΕΚΜ), στον ίδιο αργό ρυθμό. Η εισροή 24ώρου ήταν μόλις 0.05 ΕΚΜ και η εισροή σεζόν φτάνει τα 1.52 ΕΚΜ. Ο [Αρμίνου](/el/dam/arminou/) παραμένει το μόνο φράγμα του Νότιου Αγωγού που ανεβαίνει: 67.2% έναντι 64.9% πριν από μια εβδομάδα. Το προβάδισμα έναντι πέρυσι παραμένει στις **24.0 μονάδες**.

**Αξιοσημείωτα (έναντι 22 Οκτωβρίου):**
- [Κούρης](/el/dam/kouris/) **36.5%** (42.00 ΕΚΜ) — −0.07 ΕΚΜ, η μεγαλύτερη μείωση σε όγκο, παρά την εισροή 0.04 ΕΚΜ· −0.2 ΕΚΜ σε σχέση με τις 16 Οκτωβρίου
- [Αρμίνου](/el/dam/arminou/) **67.2%** (+0.2μ.π.) — εισροή 0.01 ΕΚΜ
- [Γερμασόγεια](/el/dam/germasoyeia/) **47.2%** και [Εύρετου](/el/dam/evretou/) **38.5%** — μικρές υποχωρήσεις (−0.1μ.π.)
- [Αχνά](/el/dam/achna/) **7.9%** — μηδενική εισροή
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — το μόνο φράγμα που υπερχειλίζει

**Στα μέσα:**
- [Αντιδράσεις στον Μαζωτό για τους σχεδιασμούς αφαλάτωσης – Ζητούν διαφάνεια και διαβούλευση](https://dialogos.com.cy/antidraseis-ston-mazoto-gia-toys-schediasmoys-afalatosis-zitoyn-diafaneia-kai-diavoyleysi/) — Dialogos
- [Στο 36,8% η πληρότητα των φραγμάτων](https://www.sigmalive.com/news/local/1333275/sto-368-i-plirotita-ton-fraghmaton) — Sigmalive
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (16 — 23 октября 2026)

Бюллетень пятницы: общий запас **35.2%** (102.27 МКМ) — на 0.14 МКМ ниже, чем в четверг (102.41 МКМ), тем же медленным темпом. Приток за сутки — всего 0.05 МКМ, за сезон — 1.52 МКМ. [Арминоу](/ru/dam/arminou/) остаётся единственной дамбой Южного водовода, где уровень растёт: 67.2% против 64.9% неделю назад. Отрыв от прошлого года сохраняется — **24.0 пункта**.

**Основные изменения (за период с 22 октября):**
- [Курис](/ru/dam/kouris/) **36.5%** (42.00 МКМ) — −0.07 МКМ, наибольшее снижение в объёме, несмотря на приток 0.04 МКМ; −0.2 МКМ с 16 октября
- [Арминоу](/ru/dam/arminou/) **67.2%** (+0.2пп) — приток 0.01 МКМ
- [Гермасойя](/ru/dam/germasoyeia/) **47.2%** и [Эвретоу](/ru/dam/evretou/) **38.5%** — небольшие снижения (−0.1пп)
- [Ахна](/ru/dam/achna/) **7.9%** — притока нет
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — единственная переполненная дамба

**В СМИ:**
- [Сильные дожди на Кипре вызвали наводнения, перебои с электричеством и ограничения движения](https://cyprusbutterfly.com.cy/news/silnyie-dozhdi-kipre-vyizvali-navodneniya) — Cyprus Butterfly
- [14 и 15 октября на Кипр обрушатся ливни и сильные грозы](https://evropakipr.com/novosti/14-i-15-oktyabrya-na-kipr-obrushatsya-livni-i-silnye-grozy) — Европа Кипр
`;
  }
  return `
### Recent Changes (October 16 — 23, 2026)

Friday's bulletin: total storage **35.2%** (102.27 MCM) — down 0.14 MCM from Thursday (102.41 MCM), the same slow slide. 24-hour inflow was only 0.05 MCM, bringing the season total to 1.52 MCM. [Arminou](/dam/arminou/) is still the only Southern Conveyor dam rising, at 67.2% versus 64.9% a week ago. The gap over last year holds at **24.0 points**.

**Notable movements (vs. October 22):**
- [Kouris](/dam/kouris/) **36.5%** (42.00 MCM) — −0.07 MCM, the largest drop in volume, despite 0.04 MCM of inflow; −0.2 MCM since October 16
- [Arminou](/dam/arminou/) **67.2%** (+0.2pp) — 0.01 MCM of inflow
- [Germasoyeia](/dam/germasoyeia/) **47.2%** and [Evretou](/dam/evretou/) **38.5%** — small slips (−0.1pp)
- [Achna](/dam/achna/) **7.9%** — zero inflow
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing

**In the media:**
- [Nicosia water losses below national average](https://cyprus-mail.com/2026/10/21/nicosia-water-losses-below-national-average) — Cyprus Mail
- [Mazotos residents gather signatures against planned desalination plant](https://cyprus-mail.com/2026/10/20/mazotos-residents-gather-signatures-against-planned-desalination-plant) — Cyprus Mail
`;
};
