import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.042, totalSince: 0.566 }, storage: { current: { amount: 42.226, percentage: 36.7 }, lastYear: { amount: 11.880, percentage: 10.3 } }, maxStorage: { amount: 48.267, date: "16/6" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 0.026 }, storage: { current: { amount: 3.690, percentage: 21.6 }, lastYear: { amount: 1.969, percentage: 11.5 } }, maxStorage: { amount: 4.247, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 0.013 }, storage: { current: { amount: 2.397, percentage: 17.3 }, lastYear: { amount: 2.010, percentage: 14.5 } }, maxStorage: { amount: 2.569, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 0.042 }, storage: { current: { amount: 3.765, percentage: 24.3 }, lastYear: { amount: 3.258, percentage: 21.0 } }, maxStorage: { amount: 5.941, date: "3/6" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 0.030 }, storage: { current: { amount: 6.417, percentage: 47.5 }, lastYear: { amount: 0.850, percentage: 6.3 } }, maxStorage: { amount: 8.140, date: "29/5" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.017, totalSince: 0.366 }, storage: { current: { amount: 2.855, percentage: 66.4 }, lastYear: { amount: 1.767, percentage: 41.1 } }, maxStorage: { amount: 3.117, date: "13/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 0.011 }, storage: { current: { amount: 1.462, percentage: 43.0 }, lastYear: { amount: 0.843, percentage: 24.8 } }, maxStorage: { amount: 2.198, date: "25/5" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.542, percentage: 8.0 }, lastYear: { amount: 0.098, percentage: 1.4 } }, maxStorage: { amount: 0.380, date: "30/9" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.018, totalSince: 0.096 }, storage: { current: { amount: 18.524, percentage: 35.4 }, lastYear: { amount: 5.039, percentage: 9.6 } }, maxStorage: { amount: 22.011, date: "29,5" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.002, totalSince: 0.112 }, storage: { current: { amount: 7.164, percentage: 41.7 }, lastYear: { amount: 2.085, percentage: 12.1 } }, maxStorage: { amount: 8.990, date: "28/5" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.001, totalSince: 0.019 }, storage: { current: { amount: 0.653, percentage: 30.0 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.974, date: "24/4" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.002, totalSince: 0.047 }, storage: { current: { amount: 9.272, percentage: 38.6 }, lastYear: { amount: 2.855, percentage: 11.9 } }, maxStorage: { amount: 12.036, date: "27/5" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 0.011 }, storage: { current: { amount: 0.441, percentage: 44.5 }, lastYear: { amount: 0.003, percentage: 0.3 } }, maxStorage: { amount: 0.990, date: "16/3-29/5" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.006 }, storage: { current: { amount: 0.506, percentage: 58.8 }, lastYear: { amount: 0.115, percentage: 13.4 } }, maxStorage: { amount: 0.860, date: "16/2-12/6" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.014 }, storage: { current: { amount: 0.147, percentage: 49.3 }, lastYear: { amount: 0.055, percentage: 18.5 } }, maxStorage: { amount: 0.298, date: "30/3-29/5" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 0.001 }, storage: { current: { amount: 1.198, percentage: 70.9 }, lastYear: { amount: 0.005, percentage: 0.3 } }, maxStorage: { amount: 1.690, date: "27/4-26/5" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 0.011 }, storage: { current: { amount: 1.067, percentage: 74.6 }, lastYear: { amount: 0.030, percentage: 2.1 } }, maxStorage: { amount: 1.430, date: "23/3-29/5" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.040, percentage: 11.0 } }, maxStorage: { amount: 0.363, date: "16/1-7/9" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 0.019 }, storage: { current: { amount: 2.200, percentage: 78.6 }, lastYear: { amount: 0.515, percentage: 18.4 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.001, totalSince: 0.042 }, storage: { current: { amount: 1.789, percentage: 89.5 }, lastYear: { amount: 1.117, percentage: 55.9 } }, maxStorage: { amount: 1.473, date: "13/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 3.738, percentage: 83.9 }, lastYear: { amount: 1.941, percentage: 43.6 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

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
  { year: "26/27", months: { October:1.371, November:0, December:0, January:0, February:0, March:0, April:0, May:0, June:0, July:0, "Aug-Sep":0 }, total:1.371 },
];

export const getReportDate = (): string => "20-OCT-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.00 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris held at 36.7% (42.2 MCM), 26.4pp above last year\'s 10.3%.',
      el: 'Ο Κούρης σταθερός στο 36.7% (42.2 ΕΚΜ), 26.4μ.π. πάνω από πέρυσι (10.3%).',
      ru: 'Курис без изменений — 36.7% (42.2 МКМ), +26.4пп выше прошлогодних 10.3%.',
    },
    'Kalavasos': {
      en: 'Kalavasos held at 21.6% (3.69 MCM), 10.1pp above last year\'s 11.5%.',
      el: 'Ο Καλαβασός σταθερός στο 21.6% (3.69 ΕΚΜ), 10.1μ.π. πάνω από πέρυσι (11.5%).',
      ru: 'Калавасос без изменений — 21.6% (3.69 МКМ), +10.1пп выше прошлогодних 11.5%.',
    },
    'Lefkara': {
      en: 'Lefkara held at 17.3% (2.4 MCM), 2.8pp above last year\'s 14.5%.',
      el: 'Η Λεύκαρα σταθερός στο 17.3% (2.4 ΕΚΜ), 2.8μ.π. πάνω από πέρυσι (14.5%).',
      ru: 'Лефкара без изменений — 17.3% (2.4 МКМ), +2.8пп выше прошлогодних 14.5%.',
    },
    'Dipotamos': {
      en: 'Dipotamos eased to 24.3% (3.76 MCM), 3.3pp above last year\'s 21%.',
      el: 'Ο Διπόταμος υποχώρησε στο 24.3% (3.76 ΕΚΜ), 3.3μ.π. πάνω από πέρυσι (21%).',
      ru: 'Дипотамос снизился — 24.3% (3.76 МКМ), +3.3пп выше прошлогодних 21%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia eased to 47.5% (6.42 MCM), 41.2pp above last year\'s 6.3%.',
      el: 'Η Γερμασόγεια υποχώρησε στο 47.5% (6.42 ΕΚΜ), 41.2μ.π. πάνω από πέρυσι (6.3%).',
      ru: 'Гермасойя снизился — 47.5% (6.42 МКМ), +41.2пп выше прошлогодних 6.3%.',
    },
    'Arminou': {
      en: 'Arminou rose to 66.4% (2.85 MCM), 25.3pp above last year\'s 41.1%.',
      el: 'Ο Αρμίνου ανέβηκε στο 66.4% (2.85 ΕΚΜ), 25.3μ.π. πάνω από πέρυσι (41.1%).',
      ru: 'Арминоу вырос — 66.4% (2.85 МКМ), +25.3пп выше прошлогодних 41.1%.',
    },
    'Polemidia': {
      en: 'Polemidia held at 43% (1.46 MCM), 18.2pp above last year\'s 24.8%.',
      el: 'Η Πολεμίδια σταθερός στο 43% (1.46 ΕΚΜ), 18.2μ.π. πάνω από πέρυσι (24.8%).',
      ru: 'Полемидия без изменений — 43% (1.46 МКМ), +18.2пп выше прошлогодних 24.8%.',
    },
    'Achna': {
      en: 'Achna held at 8% (0.54 MCM), 6.6pp above last year\'s 1.4%.',
      el: 'Η Αχνά σταθερός στο 8% (0.54 ΕΚΜ), 6.6μ.π. πάνω από πέρυσι (1.4%).',
      ru: 'Ахна без изменений — 8% (0.54 МКМ), +6.6пп выше прошлогодних 1.4%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos held at 35.4% (18.5 MCM), 25.8pp above last year\'s 9.6%.',
      el: 'Ο Ασπρόκρεμμος σταθερός στο 35.4% (18.5 ΕΚΜ), 25.8μ.π. πάνω από πέρυσι (9.6%).',
      ru: 'Аспрокреммос без изменений — 35.4% (18.5 МКМ), +25.8пп выше прошлогодних 9.6%.',
    },
    'Kannaviou': {
      en: 'Kannaviou eased to 41.7% (7.16 MCM), 29.6pp above last year\'s 12.1%.',
      el: 'Ο Καννάβιου υποχώρησε στο 41.7% (7.16 ΕΚΜ), 29.6μ.π. πάνω από πέρυσι (12.1%).',
      ru: 'Каннавиу снизился — 41.7% (7.16 МКМ), +29.6пп выше прошлогодних 12.1%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos rose to 30% (0.65 MCM), 30pp above last year\'s 0%.',
      el: 'Ο Μαυροκόλυμπος ανέβηκε στο 30% (0.65 ΕΚΜ), 30μ.π. πάνω από πέρυσι (0%).',
      ru: 'Мавроколимпос вырос — 30% (0.65 МКМ), +30пп выше прошлогодних 0%.',
    },
    'Evretou': {
      en: 'Evretou held at 38.6% (9.27 MCM), 26.7pp above last year\'s 11.9%.',
      el: 'Ο Εύρετου σταθερός στο 38.6% (9.27 ΕΚΜ), 26.7μ.π. πάνω από πέρυσι (11.9%).',
      ru: 'Эвретоу без изменений — 38.6% (9.27 МКМ), +26.7пп выше прошлогодних 11.9%.',
    },
    'Argaka': {
      en: 'Argaka held at 44.5% (0.44 MCM), 44.2pp above last year\'s 0.3%.',
      el: 'Η Αργάκα σταθερός στο 44.5% (0.44 ΕΚΜ), 44.2μ.π. πάνω από πέρυσι (0.3%).',
      ru: 'Аргака без изменений — 44.5% (0.44 МКМ), +44.2пп выше прошлогодних 0.3%.',
    },
    'Pomos': {
      en: 'Pomos held at 58.8% (0.51 MCM), 45.4pp above last year\'s 13.4%.',
      el: 'Ο Πόμος σταθερός στο 58.8% (0.51 ΕΚΜ), 45.4μ.π. πάνω από πέρυσι (13.4%).',
      ru: 'Помос без изменений — 58.8% (0.51 МКМ), +45.4пп выше прошлогодних 13.4%.',
    },
    'Agia Marina': {
      en: 'Agia Marina held at 49.3% (0.15 MCM), 30.8pp above last year\'s 18.5%.',
      el: 'Η Αγία Μαρίνα σταθερός στο 49.3% (0.15 ΕΚΜ), 30.8μ.π. πάνω από πέρυσι (18.5%).',
      ru: 'Агия Марина без изменений — 49.3% (0.15 МКМ), +30.8пп выше прошлогодних 18.5%.',
    },
    'Vyzakia': {
      en: 'Vyzakia held at 70.9% (1.2 MCM), 70.6pp above last year\'s 0.3%.',
      el: 'Τα Βυζακιά σταθερός στο 70.9% (1.2 ΕΚΜ), 70.6μ.π. πάνω από πέρυσι (0.3%).',
      ru: 'Визакия без изменений — 70.9% (1.2 МКМ), +70.6пп выше прошлогодних 0.3%.',
    },
    'Xyliatos': {
      en: 'Xyliatos eased to 74.6% (1.07 MCM), 72.5pp above last year\'s 2.1%.',
      el: 'Ο Ξυλιάτος υποχώρησε στο 74.6% (1.07 ΕΚΜ), 72.5μ.π. πάνω από πέρυσι (2.1%).',
      ru: 'Ксилиатос снизился — 74.6% (1.07 МКМ), +72.5пп выше прошлогодних 2.1%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis unchanged at 100% (0.36 MCM), still the only dam overflowing. Up from 11% last year.',
      el: 'Ο Καλοπαναγιώτης αμετάβλητος στο 100% (0.36 ΕΚΜ), το μόνο φράγμα που υπερχειλίζει. Από 11% πέρυσι.',
      ru: 'Калопанайотис без изменений на 100% (0.36 МКМ), единственная переполненная дамба. Год назад 11%.',
    },
    'Tamassos': {
      en: 'Tamassos held at 78.6% (2.2 MCM), 60.2pp above last year\'s 18.4%.',
      el: 'Ο Ταμασός σταθερός στο 78.6% (2.2 ΕΚΜ), 60.2μ.π. πάνω από πέρυσι (18.4%).',
      ru: 'Тамассос без изменений — 78.6% (2.2 МКМ), +60.2пп выше прошлогодних 18.4%.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta held at 89.5% (1.79 MCM), 33.6pp above last year\'s 55.9%.',
      el: 'Η Κλήρου-Μαλούντα σταθερός στο 89.5% (1.79 ΕΚΜ), 33.6μ.π. πάνω από πέρυσι (55.9%).',
      ru: 'Клиру-Малунта без изменений — 89.5% (1.79 МКМ), +33.6пп выше прошлогодних 55.9%.',
    },
    'Solea': {
      en: 'Solea eased to 83.9% (3.74 MCM), 40.3pp above last year\'s 43.6%.',
      el: 'Η Σολέα υποχώρησε στο 83.9% (3.74 ΕΚΜ), 40.3μ.π. πάνω από πέρυσι (43.6%).',
      ru: 'Солеа снизился — 83.9% (3.74 МКМ), +40.3пп выше прошлогодних 43.6%.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (19 — 20 Οκτωβρίου 2026)

Δελτίο Τρίτης: συνολική αποθήκευση **35.3%** (102.69 ΕΚΜ) — μείωση 0.06 ΕΚΜ από τη Δευτέρα (102.75 ΕΚΜ), με τον ίδιο αργό ρυθμό. Η εισροή 24ώρου ήταν 0.08 ΕΚΜ και η εισροή σεζόν φτάνει τα 1.37 ΕΚΜ. Ο [Αρμίνου](/el/dam/arminou/) εξακολουθεί να είναι ο μόνος του Νότιου Αγωγού που ανεβαίνει, στο 66.4% (+0.3μ.π.). Το χάσμα με πέρυσι παραμένει **24.0 μονάδες**.

**Αξιοσημείωτα (έναντι 19 Οκτωβρίου):**
- [Αρμίνου](/el/dam/arminou/) **66.4%** (+0.3μ.π.) — εισροή 0.02 ΕΚΜ
- [Κούρης](/el/dam/kouris/) **36.7%** (42.23 ΕΚΜ) — η μεγαλύτερη εισροή, 0.04 ΕΚΜ
- [Διπόταμος](/el/dam/dipotamos/) **24.3%** και [Γερμασόγεια](/el/dam/germasoyeia/) **47.5%** — μικρή υποχώρηση (−0.1μ.π. έκαστος)
- [Αχνά](/el/dam/achna/) **8.0%** — αμετάβλητη, μηδενική εισροή
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — το μόνο φράγμα που υπερχειλίζει

**Στα μέσα:**
- [Αντιδράσεις στον Μαζωτό για τους σχεδιασμούς αφαλάτωσης – Ζητούν διαφάνεια και διαβούλευση](https://dialogos.com.cy/antidraseis-ston-mazoto-gia-toys-schediasmoys-afalatosis-zitoyn-diafaneia-kai-diavoyleysi/) — Dialogos
- [Στο 36,8% η πληρότητα των φραγμάτων](https://www.sigmalive.com/news/local/1333275/sto-368-i-plirotita-ton-fraghmaton) — Sigmalive
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (19 — 20 октября 2026)

Бюллетень вторника: общий запас **35.3%** (102.69 МКМ) — на 0.06 МКМ ниже, чем в понедельник (102.75 МКМ), прежним медленным темпом. Приток за сутки — 0.08 МКМ, за сезон — 1.37 МКМ. [Арминоу](/ru/dam/arminou/) остаётся единственной дамбой Южного водовода, которая растёт, — 66.4% (+0.3пп). Разрыв с прошлым годом по-прежнему **24.0 пункта**.

**Основные изменения (за период с 19 октября):**
- [Арминоу](/ru/dam/arminou/) **66.4%** (+0.3пп) — приток 0.02 МКМ
- [Курис](/ru/dam/kouris/) **36.7%** (42.23 МКМ) — наибольший приток, 0.04 МКМ
- [Дипотамос](/ru/dam/dipotamos/) **24.3%** и [Гермасойя](/ru/dam/germasoyeia/) **47.5%** — небольшое снижение (по −0.1пп)
- [Ахна](/ru/dam/achna/) **8.0%** — без изменений, притока нет
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — единственная переполненная дамба

**В СМИ:**
- [Сильные дожди на Кипре вызвали наводнения, перебои с электричеством и ограничения движения](https://cyprusbutterfly.com.cy/news/silnyie-dozhdi-kipre-vyizvali-navodneniya) — Cyprus Butterfly
- [14 и 15 октября на Кипр обрушатся ливни и сильные грозы](https://evropakipr.com/novosti/14-i-15-oktyabrya-na-kipr-obrushatsya-livni-i-silnye-grozy) — Европа Кипр
`;
  }
  return `
### Recent Changes (October 19 — 20, 2026)

Tuesday's bulletin: total storage **35.3%** (102.69 MCM) — down 0.06 MCM from Monday (102.75 MCM), the same slow drawdown. 24-hour inflow was 0.08 MCM, bringing the season total to 1.37 MCM. [Arminou](/dam/arminou/) is still the only Southern Conveyor dam rising, to 66.4% (+0.3pp). The gap over last year holds at **24.0 points**.

**Notable movements (vs. October 19):**
- [Arminou](/dam/arminou/) **66.4%** (+0.3pp) — 0.02 MCM of inflow
- [Kouris](/dam/kouris/) **36.7%** (42.23 MCM) — the largest single inflow, 0.04 MCM
- [Dipotamos](/dam/dipotamos/) **24.3%** and [Germasoyeia](/dam/germasoyeia/) **47.5%** — small slips (−0.1pp each)
- [Achna](/dam/achna/) **8.0%** — unchanged, zero inflow
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing

**In the media:**
- [Mazotos residents gather signatures against planned desalination plant](https://cyprus-mail.com/2026/10/20/mazotos-residents-gather-signatures-against-planned-desalination-plant) — Cyprus Mail
- [Agriculture ministry allocates €200m to irrigation projects](https://cyprus-mail.com/2026/10/07/agriculture-ministry-allocates-e200m-to-irrigation-projects) — Cyprus Mail
`;
};
