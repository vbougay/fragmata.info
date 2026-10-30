import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.064, totalSince: 0.928 }, storage: { current: { amount: 41.867, percentage: 36.4 }, lastYear: { amount: 11.242, percentage: 9.8 } }, maxStorage: { amount: 48.267, date: "16/6" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.013, totalSince: 0.040 }, storage: { current: { amount: 3.659, percentage: 21.4 }, lastYear: { amount: 1.851, percentage: 10.8 } }, maxStorage: { amount: 4.247, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.002, totalSince: 0.017 }, storage: { current: { amount: 2.393, percentage: 17.3 }, lastYear: { amount: 1.989, percentage: 14.4 } }, maxStorage: { amount: 2.569, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.017, totalSince: 0.084 }, storage: { current: { amount: 3.708, percentage: 23.9 }, lastYear: { amount: 3.087, percentage: 19.9 } }, maxStorage: { amount: 5.941, date: "3/6" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.002, totalSince: 0.035 }, storage: { current: { amount: 6.264, percentage: 46.4 }, lastYear: { amount: 0.721, percentage: 5.3 } }, maxStorage: { amount: 8.140, date: "29/5" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.054, totalSince: 0.548 }, storage: { current: { amount: 2.997, percentage: 69.7 }, lastYear: { amount: 1.733, percentage: 40.3 } }, maxStorage: { amount: 3.117, date: "13/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 0.011 }, storage: { current: { amount: 1.457, percentage: 42.9 }, lastYear: { amount: 0.830, percentage: 24.4 } }, maxStorage: { amount: 2.198, date: "25/5" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.533, percentage: 7.8 }, lastYear: { amount: 0.096, percentage: 1.4 } }, maxStorage: { amount: 0.380, date: "30/9" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.039, totalSince: 0.170 }, storage: { current: { amount: 18.445, percentage: 35.2 }, lastYear: { amount: 4.768, percentage: 9.1 } }, maxStorage: { amount: 22.011, date: "29,5" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.005, totalSince: 0.124 }, storage: { current: { amount: 7.068, percentage: 41.2 }, lastYear: { amount: 1.976, percentage: 11.5 } }, maxStorage: { amount: 8.990, date: "28/5" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.003, totalSince: 0.028 }, storage: { current: { amount: 0.666, percentage: 30.6 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.974, date: "24/4" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.016, totalSince: 0.067 }, storage: { current: { amount: 9.220, percentage: 38.4 }, lastYear: { amount: 2.723, percentage: 11.3 } }, maxStorage: { amount: 12.036, date: "27/5" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 0.011 }, storage: { current: { amount: 0.430, percentage: 43.4 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 0.990, date: "16/3-29/5" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.006 }, storage: { current: { amount: 0.498, percentage: 57.9 }, lastYear: { amount: 0.114, percentage: 13.3 } }, maxStorage: { amount: 0.860, date: "16/2-12/6" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.002, totalSince: 0.020 }, storage: { current: { amount: 0.153, percentage: 51.3 }, lastYear: { amount: 0.057, percentage: 19.1 } }, maxStorage: { amount: 0.298, date: "30/3-29/5" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 0.001 }, storage: { current: { amount: 1.181, percentage: 69.9 }, lastYear: { amount: 0.002, percentage: 0.1 } }, maxStorage: { amount: 1.690, date: "27/4-26/5" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.001, totalSince: 0.013 }, storage: { current: { amount: 1.061, percentage: 74.2 }, lastYear: { amount: 0.028, percentage: 2.0 } }, maxStorage: { amount: 1.430, date: "23/3-29/5" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.041, percentage: 11.3 } }, maxStorage: { amount: 0.363, date: "16/1-7/9" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.001, totalSince: 0.021 }, storage: { current: { amount: 2.175, percentage: 77.7 }, lastYear: { amount: 0.500, percentage: 17.9 } }, maxStorage: { amount: 2.800, date: "2/4-5/6" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.008, totalSince: 0.070 }, storage: { current: { amount: 1.796, percentage: 89.8 }, lastYear: { amount: 1.105, percentage: 55.3 } }, maxStorage: { amount: 2.000, date: "14/2-30/6" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 3.701, percentage: 83.1 }, lastYear: { amount: 1.909, percentage: 42.9 } }, maxStorage: { amount: 4.454, date: "10/3-2/6" }, region: "Recharge/Other" },
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

export const getReportDate = (): string => "30-OCT-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.00 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris rose to 36.4% (41.9 MCM), 26.6pp above last year\'s 9.8%.',
      el: 'Κούρης ανέβηκε στο 36.4% (41.9 ΕΚΜ), 26.6μ.π. πάνω από πέρυσι (9.8%).',
      ru: 'Курис вырос — 36.4% (41.9 МКМ), +26.6пп выше прошлогодних 9.8%.',
    },
    'Kalavasos': {
      en: 'Kalavasos rose to 21.4% (3.66 MCM), 10.6pp above last year\'s 10.8%.',
      el: 'Καλαβασός ανέβηκε στο 21.4% (3.66 ΕΚΜ), 10.6μ.π. πάνω από πέρυσι (10.8%).',
      ru: 'Калавасос вырос — 21.4% (3.66 МКМ), +10.6пп выше прошлогодних 10.8%.',
    },
    'Lefkara': {
      en: 'Lefkara rose to 17.3% (2.39 MCM), 2.9pp above last year\'s 14.4%.',
      el: 'Λεύκαρα ανέβηκε στο 17.3% (2.39 ΕΚΜ), 2.9μ.π. πάνω από πέρυσι (14.4%).',
      ru: 'Лефкара вырос — 17.3% (2.39 МКМ), +2.9пп выше прошлогодних 14.4%.',
    },
    'Dipotamos': {
      en: 'Dipotamos rose to 23.9% (3.71 MCM), 4pp above last year\'s 19.9%.',
      el: 'Διπόταμος ανέβηκε στο 23.9% (3.71 ΕΚΜ), 4μ.π. πάνω από πέρυσι (19.9%).',
      ru: 'Дипотамос вырос — 23.9% (3.71 МКМ), +4пп выше прошлогодних 19.9%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia eased to 46.4% (6.26 MCM), 41.1pp above last year\'s 5.3%.',
      el: 'Γερμασόγεια υποχώρησε στο 46.4% (6.26 ΕΚΜ), 41.1μ.π. πάνω από πέρυσι (5.3%).',
      ru: 'Гермасойя снизился — 46.4% (6.26 МКМ), +41.1пп выше прошлогодних 5.3%.',
    },
    'Arminou': {
      en: 'Arminou rose to 69.7% (3 MCM), 29.4pp above last year\'s 40.3%.',
      el: 'Αρμίνου ανέβηκε στο 69.7% (3 ΕΚΜ), 29.4μ.π. πάνω από πέρυσι (40.3%).',
      ru: 'Арминоу вырос — 69.7% (3 МКМ), +29.4пп выше прошлогодних 40.3%.',
    },
    'Polemidia': {
      en: 'Polemidia held at 42.9% (1.46 MCM), 18.5pp above last year\'s 24.4%.',
      el: 'Πολεμίδια παρέμεινε στο 42.9% (1.46 ΕΚΜ), 18.5μ.π. πάνω από πέρυσι (24.4%).',
      ru: 'Полемидия без изменений — 42.9% (1.46 МКМ), +18.5пп выше прошлогодних 24.4%.',
    },
    'Achna': {
      en: 'Achna held at 7.8% (0.53 MCM), 6.4pp above last year\'s 1.4%.',
      el: 'Αχνά παρέμεινε στο 7.8% (0.53 ΕΚΜ), 6.4μ.π. πάνω από πέρυσι (1.4%).',
      ru: 'Ахна без изменений — 7.8% (0.53 МКМ), +6.4пп выше прошлогодних 1.4%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos rose to 35.2% (18.4 MCM), 26.1pp above last year\'s 9.1%.',
      el: 'Ασπρόκρεμμος ανέβηκε στο 35.2% (18.4 ΕΚΜ), 26.1μ.π. πάνω από πέρυσι (9.1%).',
      ru: 'Аспрокреммос вырос — 35.2% (18.4 МКМ), +26.1пп выше прошлогодних 9.1%.',
    },
    'Kannaviou': {
      en: 'Kannaviou eased to 41.2% (7.07 MCM), 29.7pp above last year\'s 11.5%.',
      el: 'Καννάβιου υποχώρησε στο 41.2% (7.07 ΕΚΜ), 29.7μ.π. πάνω από πέρυσι (11.5%).',
      ru: 'Каннавиу снизился — 41.2% (7.07 МКМ), +29.7пп выше прошлогодних 11.5%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos rose to 30.6% (0.67 MCM), 30.6pp above last year\'s 0%.',
      el: 'Μαυροκόλυμπος ανέβηκε στο 30.6% (0.67 ΕΚΜ), 30.6μ.π. πάνω από πέρυσι (0%).',
      ru: 'Мавроколимпос вырос — 30.6% (0.67 МКМ), +30.6пп выше прошлогодних 0%.',
    },
    'Evretou': {
      en: 'Evretou rose to 38.4% (9.22 MCM), 27.1pp above last year\'s 11.3%.',
      el: 'Εύρετου ανέβηκε στο 38.4% (9.22 ΕΚΜ), 27.1μ.π. πάνω από πέρυσι (11.3%).',
      ru: 'Эвретоу вырос — 38.4% (9.22 МКМ), +27.1пп выше прошлогодних 11.3%.',
    },
    'Argaka': {
      en: 'Argaka held at 43.4% (0.43 MCM), 43.4pp above last year\'s 0%.',
      el: 'Αργάκα παρέμεινε στο 43.4% (0.43 ΕΚΜ), 43.4μ.π. πάνω από πέρυσι (0%).',
      ru: 'Аргака без изменений — 43.4% (0.43 МКМ), +43.4пп выше прошлогодних 0%.',
    },
    'Pomos': {
      en: 'Pomos held at 57.9% (0.5 MCM), 44.6pp above last year\'s 13.3%.',
      el: 'Πόμος παρέμεινε στο 57.9% (0.5 ΕΚΜ), 44.6μ.π. πάνω από πέρυσι (13.3%).',
      ru: 'Помос без изменений — 57.9% (0.5 МКМ), +44.6пп выше прошлогодних 13.3%.',
    },
    'Agia Marina': {
      en: 'Agia Marina rose to 51.3% (0.15 MCM), 32.2pp above last year\'s 19.1%.',
      el: 'Αγία ανέβηκε στο 51.3% (0.15 ΕΚΜ), 32.2μ.π. πάνω από πέρυσι (19.1%).',
      ru: 'Агия вырос — 51.3% (0.15 МКМ), +32.2пп выше прошлогодних 19.1%.',
    },
    'Vyzakia': {
      en: 'Vyzakia held at 69.9% (1.18 MCM), 69.8pp above last year\'s 0.1%.',
      el: 'Βυζακιά παρέμεινε στο 69.9% (1.18 ΕΚΜ), 69.8μ.π. πάνω από πέρυσι (0.1%).',
      ru: 'Визакия без изменений — 69.9% (1.18 МКМ), +69.8пп выше прошлогодних 0.1%.',
    },
    'Xyliatos': {
      en: 'Xyliatos held at 74.2% (1.06 MCM), 72.2pp above last year\'s 2%.',
      el: 'Ξυλιάτος παρέμεινε στο 74.2% (1.06 ΕΚΜ), 72.2μ.π. πάνω από πέρυσι (2%).',
      ru: 'Ксилиатос без изменений — 74.2% (1.06 МКМ), +72.2пп выше прошлогодних 2%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis unchanged at 100% (0.36 MCM), still the only dam overflowing. Up from 11% last year.',
      el: 'Ο Καλοπαναγιώτης αμετάβλητος στο 100% (0.36 ΕΚΜ), το μόνο φράγμα που υπερχειλίζει. Από 11% πέρυσι.',
      ru: 'Калопанайотис без изменений на 100% (0.36 МКМ), единственная переполненная дамба. Год назад 11%.',
    },
    'Tamassos': {
      en: 'Tamassos held at 77.7% (2.17 MCM), 59.8pp above last year\'s 17.9%.',
      el: 'Ταμασός παρέμεινε στο 77.7% (2.17 ΕΚΜ), 59.8μ.π. πάνω από πέρυσι (17.9%).',
      ru: 'Тамассос без изменений — 77.7% (2.17 МКМ), +59.8пп выше прошлогодних 17.9%.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta rose to 89.8% (1.8 MCM), 34.5pp above last year\'s 55.3%.',
      el: 'Κλήρου-Μαλούντα ανέβηκε στο 89.8% (1.8 ΕΚΜ), 34.5μ.π. πάνω από πέρυσι (55.3%).',
      ru: 'Клиру-Малунта вырос — 89.8% (1.8 МКМ), +34.5пп выше прошлогодних 55.3%.',
    },
    'Solea': {
      en: 'Solea eased to 83.1% (3.7 MCM), 40.2pp above last year\'s 42.9%.',
      el: 'Σολέα υποχώρησε στο 83.1% (3.7 ΕΚΜ), 40.2μ.π. πάνω από πέρυσι (42.9%).',
      ru: 'Солеа снизился — 83.1% (3.7 МКМ), +40.2пп выше прошлогодних 42.9%.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (23 — 30 Οκτωβρίου 2026)

Δελτίο Παρασκευής: συνολική αποθήκευση **35.1%** (101.96 ΕΚΜ) — αύξηση 0.13 ΕΚΜ από το δελτίο της Πέμπτης, δεύτερη μικρή άνοδος στη σειρά, αλλά ακόμη 0.31 ΕΚΜ χαμηλότερα από τις 23 Οκτωβρίου. Η εισροή των τελευταίων 24 ωρών ήταν 0.15 ΕΚΜ και η εισροή σεζόν φτάνει τα 2.10 ΕΚΜ, καθώς οι βροχές συνεχίζονται. Το προβάδισμα έναντι πέρυσι είναι **24.3 μονάδες**.

**Αξιοσημείωτα (έναντι 23 Οκτωβρίου):**
- [Αρμίνου](/el/dam/arminou/) **69.7%** (+2.5μ.π. την εβδομάδα, 3.00 ΕΚΜ) — συνεχίζει να ανεβαίνει, το μόνο φράγμα του Νότιου Αγωγού με σταθερή άνοδο
- [Κούρης](/el/dam/kouris/) **36.4%** (41.87 ΕΚΜ) — εισροή 0.06 ΕΚΜ, −0.14 ΕΚΜ την εβδομάδα αλλά σταθεροποιείται
- [Ασπρόκρεμμος](/el/dam/asprokremmos/) **35.2%** (18.45 ΕΚΜ) — εισροή 0.04 ΕΚΜ, −0.03 ΕΚΜ την εβδομάδα
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **30.6%** (+0.6μ.π. την εβδομάδα) — μικρή άνοδος
- [Αχνά](/el/dam/achna/) **7.8%** — μηδενική εισροή
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — το μόνο φράγμα που υπερχειλίζει

**Στα μέσα:**
- [«Ξύπνησαν» νωρίς οι ποταμοί της Κύπρου: Αισιοδοξία για τις εισροές στα φράγματα](https://www.politis.com.cy/cyprus/perivallon/1060393/ksypnisan-noris-oi-potami-tis-kyproy-aisiodoksia-ghia-tis-eisroes-sta-fraghmata-triplasio-nero-se-skhesi-me-persi) — Πολίτης
- [Φράγματα: Από το 10,7% στο 35,1% η πληρότητα, πόσο νερό έφεραν οι τελευταίες βροχές](https://www.alphanews.live/cyprus/fragmata-apo-to-107-sto-351-i-plirotita-poso-nero-eferan-oi-teleftaies-vroches/) — AlphaNews
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (23 — 30 октября 2026)

Бюллетень пятницы: общий запас **35.1%** (101.96 МКМ) — на 0.13 МКМ больше, чем в бюллетене четверга — второй небольшой рост подряд, но всё ещё на 0.31 МКМ ниже, чем 23 октября. Приток за сутки — 0.15 МКМ, за сезон — 2.10 МКМ: дожди продолжаются. Отрыв от прошлого года — **24.3 пункта**.

**Основные изменения (за период с 23 октября):**
- [Арминоу](/ru/dam/arminou/) **69.7%** (+2.5пп за неделю, 3.00 МКМ) — продолжает расти, единственная дамба Южного водовода с устойчивым ростом
- [Курис](/ru/dam/kouris/) **36.4%** (41.87 МКМ) — приток 0.06 МКМ, −0.14 МКМ за неделю, но снижение замедляется
- [Аспрокреммос](/ru/dam/asprokremmos/) **35.2%** (18.45 МКМ) — приток 0.04 МКМ, −0.03 МКМ за неделю
- [Мавроколимбос](/ru/dam/mavrokolympos/) **30.6%** (+0.6пп за неделю) — небольшой рост
- [Ахна](/ru/dam/achna/) **7.8%** — притока нет
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — единственная переполненная дамба

**В СМИ:**
- [Сильные дожди на Кипре вызвали наводнения, перебои с электричеством и ограничения движения](https://cyprusbutterfly.com.cy/news/silnyie-dozhdi-kipre-vyizvali-navodneniya) — Cyprus Butterfly
`;
  }
  return `
### Recent Changes (October 23 — 30, 2026)

Friday's bulletin: total storage **35.1%** (101.96 MCM) — up 0.13 MCM from Thursday, the second small uptick in a row, though still 0.31 MCM below October 23. Inflow over the last 24 hours was 0.15 MCM, bringing the season total to 2.10 MCM as the rain continues. The gap over last year is **24.3 points**.

**Notable movements (vs. October 23):**
- [Arminou](/dam/arminou/) **69.7%** (+2.5pp on the week, 3.00 MCM) — still climbing, the only Southern Conveyor dam rising steadily
- [Kouris](/dam/kouris/) **36.4%** (41.87 MCM) — 0.06 MCM of inflow, −0.14 MCM on the week but steadying
- [Asprokremmos](/dam/asprokremmos/) **35.2%** (18.45 MCM) — 0.04 MCM of inflow, −0.03 MCM on the week
- [Mavrokolympos](/dam/mavrokolympos/) **30.6%** (+0.6pp on the week) — a small rise
- [Achna](/dam/achna/) **7.8%** — zero inflow
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing

**In the media:**
- [Reservoir levels rise to 35.1% after rainfall](https://cyprus-mail.com/2026/10/30/reservoir-levels-rise-to-35-1-after-rainfall) — Cyprus Mail
- [Cyprus Reservoir Levels Rise After Early Rainfall, but Water Concerns Remain](https://en.politis.com.cy/news/environment/1060401/cyprus-reservoir-levels-rise-after-early-rainfall-but-water-concerns-remain) — Politis
`;
};
