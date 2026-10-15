import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.080, totalSince: 0.325 }, storage: { current: { amount: 42.209, percentage: 36.7 }, lastYear: { amount: 12.142, percentage: 10.6 } }, maxStorage: { amount: 48.267, date: "16/6" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.006, totalSince: 0.014 }, storage: { current: { amount: 3.703, percentage: 21.7 }, lastYear: { amount: 2.018, percentage: 11.8 } }, maxStorage: { amount: 4.247, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.005, totalSince: 0.010 }, storage: { current: { amount: 2.400, percentage: 17.3 }, lastYear: { amount: 2.022, percentage: 14.6 } }, maxStorage: { amount: 2.569, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.015, totalSince: 0.026 }, storage: { current: { amount: 3.827, percentage: 24.7 }, lastYear: { amount: 3.322, percentage: 21.4 } }, maxStorage: { amount: 5.941, date: "3/6" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.006, totalSince: 0.023 }, storage: { current: { amount: 6.451, percentage: 47.8 }, lastYear: { amount: 0.898, percentage: 6.7 } }, maxStorage: { amount: 8.140, date: "29/5" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.061, totalSince: 0.243 }, storage: { current: { amount: 2.752, percentage: 64.0 }, lastYear: { amount: 1.791, percentage: 41.7 } }, maxStorage: { amount: 3.117, date: "13/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.003, totalSince: 0.010 }, storage: { current: { amount: 1.465, percentage: 43.1 }, lastYear: { amount: 0.851, percentage: 25.0 } }, maxStorage: { amount: 2.198, date: "25/5" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.544, percentage: 8.0 }, lastYear: { amount: 0.100, percentage: 1.5 } }, maxStorage: { amount: 0.380, date: "30/9" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.020, totalSince: 0.039 }, storage: { current: { amount: 18.564, percentage: 35.4 }, lastYear: { amount: 5.161, percentage: 9.9 } }, maxStorage: { amount: 22.011, date: "29/5" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.021, totalSince: 0.082 }, storage: { current: { amount: 7.190, percentage: 41.9 }, lastYear: { amount: 2.140, percentage: 12.5 } }, maxStorage: { amount: 8.990, date: "28/5" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.003, totalSince: 0.015 }, storage: { current: { amount: 0.651, percentage: 29.9 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.974, date: "24/4" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.016, totalSince: 0.037 }, storage: { current: { amount: 9.279, percentage: 38.7 }, lastYear: { amount: 2.924, percentage: 12.2 } }, maxStorage: { amount: 12.036, date: "27/5" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.004, totalSince: 0.007 }, storage: { current: { amount: 0.437, percentage: 44.1 }, lastYear: { amount: 0.003, percentage: 0.3 } }, maxStorage: { amount: 0.990, date: "16/3-29/5" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.002, totalSince: 0.006 }, storage: { current: { amount: 0.513, percentage: 59.7 }, lastYear: { amount: 0.116, percentage: 13.5 } }, maxStorage: { amount: 0.860, date: "16/2-12/6" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.002, totalSince: 0.011 }, storage: { current: { amount: 0.144, percentage: 48.3 }, lastYear: { amount: 0.055, percentage: 18.5 } }, maxStorage: { amount: 0.298, date: "30/3-29/5" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.001, totalSince: 0.001 }, storage: { current: { amount: 1.201, percentage: 71.1 }, lastYear: { amount: 0.005, percentage: 0.3 } }, maxStorage: { amount: 1.690, date: "27/4-26/5" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.006, totalSince: 0.008 }, storage: { current: { amount: 1.069, percentage: 74.8 }, lastYear: { amount: 0.031, percentage: 2.2 } }, maxStorage: { amount: 1.430, date: "23/3-29/5" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.038, percentage: 10.5 } }, maxStorage: { amount: 0.363, date: "16/1-7/9" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.001, totalSince: 0.001 }, storage: { current: { amount: 2.202, percentage: 78.6 }, lastYear: { amount: 0.523, percentage: 18.7 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.001, totalSince: 0.001 }, storage: { current: { amount: 1.741, percentage: 87.1 }, lastYear: { amount: 1.126, percentage: 56.3 } }, maxStorage: { amount: 1.473, date: "13/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 3.757, percentage: 84.3 }, lastYear: { amount: 1.958, percentage: 44.0 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

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
  { year: "26/27", months: { October:0.857, November:0, December:0, January:0, February:0, March:0, April:0, May:0, June:0, July:0, "Aug-Sep":0 }, total:0.857 },
];

export const getReportDate = (): string => "15-OCT-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.00 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris rose to 36.7% (42.2 MCM), 26.1pp above last year\'s 10.6%.',
      el: 'Ο Κούρης ανέβηκε στο 36.7% (42.2 ΕΚΜ), 26.1μ.π. πάνω από πέρυσι (10.6%).',
      ru: 'Курис вырос — 36.7% (42.2 МКМ), +26.1пп выше прошлогодних 10.6%.',
    },
    'Kalavasos': {
      en: 'Kalavasos rose to 21.7% (3.70 MCM), 9.9pp above last year\'s 11.8%.',
      el: 'Ο Καλαβασός ανέβηκε στο 21.7% (3.70 ΕΚΜ), 9.9μ.π. πάνω από πέρυσι (11.8%).',
      ru: 'Калавасос вырос — 21.7% (3.70 МКМ), +9.9пп выше прошлогодних 11.8%.',
    },
    'Lefkara': {
      en: 'Lefkara rose to 17.3% (2.40 MCM), 2.7pp above last year\'s 14.6%.',
      el: 'Η Λεύκαρα ανέβηκε στο 17.3% (2.40 ΕΚΜ), 2.7μ.π. πάνω από πέρυσι (14.6%).',
      ru: 'Лефкара вырос — 17.3% (2.40 МКМ), +2.7пп выше прошлогодних 14.6%.',
    },
    'Dipotamos': {
      en: 'Dipotamos rose to 24.7% (3.83 MCM), 3.3pp above last year\'s 21.4%.',
      el: 'Ο Διπόταμος ανέβηκε στο 24.7% (3.83 ΕΚΜ), 3.3μ.π. πάνω από πέρυσι (21.4%).',
      ru: 'Дипотамос вырос — 24.7% (3.83 МКМ), +3.3пп выше прошлогодних 21.4%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia held at 47.8% (6.45 MCM), 41.1pp above last year\'s 6.7%.',
      el: 'Η Γερμασόγεια σταθερός στο 47.8% (6.45 ΕΚΜ), 41.1μ.π. πάνω από πέρυσι (6.7%).',
      ru: 'Гермасойя без изменений — 47.8% (6.45 МКМ), +41.1пп выше прошлогодних 6.7%.',
    },
    'Arminou': {
      en: 'Arminou rose to 64% (2.75 MCM), 22.3pp above last year\'s 41.7%.',
      el: 'Ο Αρμίνου ανέβηκε στο 64% (2.75 ΕΚΜ), 22.3μ.π. πάνω από πέρυσι (41.7%).',
      ru: 'Арминоу вырос — 64% (2.75 МКМ), +22.3пп выше прошлогодних 41.7%.',
    },
    'Polemidia': {
      en: 'Polemidia rose to 43.1% (1.47 MCM), 18.1pp above last year\'s 25%.',
      el: 'Η Πολεμίδια ανέβηκε στο 43.1% (1.47 ΕΚΜ), 18.1μ.π. πάνω από πέρυσι (25%).',
      ru: 'Полемидия вырос — 43.1% (1.47 МКМ), +18.1пп выше прошлогодних 25%.',
    },
    'Achna': {
      en: 'Achna held at 8% (0.54 MCM), 6.5pp above last year\'s 1.5%.',
      el: 'Η Αχνά σταθερός στο 8% (0.54 ΕΚΜ), 6.5μ.π. πάνω από πέρυσι (1.5%).',
      ru: 'Ахна без изменений — 8% (0.54 МКМ), +6.5пп выше прошлогодних 1.5%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos rose to 35.4% (18.6 MCM), 25.6pp above last year\'s 9.9%.',
      el: 'Ο Ασπρόκρεμμος ανέβηκε στο 35.4% (18.6 ΕΚΜ), 25.6μ.π. πάνω από πέρυσι (9.9%).',
      ru: 'Аспрокреммос вырос — 35.4% (18.6 МКМ), +25.6пп выше прошлогодних 9.9%.',
    },
    'Kannaviou': {
      en: 'Kannaviou rose to 41.9% (7.19 MCM), 29.4pp above last year\'s 12.5%.',
      el: 'Ο Καννάβιου ανέβηκε στο 41.9% (7.19 ΕΚΜ), 29.4μ.π. πάνω από πέρυσι (12.5%).',
      ru: 'Каннавиу вырос — 41.9% (7.19 МКМ), +29.4пп выше прошлогодних 12.5%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos rose to 29.9% (0.65 MCM), 29.9pp above last year\'s 0%.',
      el: 'Ο Μαυροκόλυμπος ανέβηκε στο 29.9% (0.65 ΕΚΜ), 29.9μ.π. πάνω από πέρυσι (0%).',
      ru: 'Мавроколимпос вырос — 29.9% (0.65 МКМ), +29.9пп выше прошлогодних 0%.',
    },
    'Evretou': {
      en: 'Evretou rose to 38.7% (9.28 MCM), 26.5pp above last year\'s 12.2%.',
      el: 'Ο Εύρετου ανέβηκε στο 38.7% (9.28 ΕΚΜ), 26.5μ.π. πάνω από πέρυσι (12.2%).',
      ru: 'Эвретоу вырос — 38.7% (9.28 МКМ), +26.5пп выше прошлогодних 12.2%.',
    },
    'Argaka': {
      en: 'Argaka rose to 44.1% (0.44 MCM), 43.8pp above last year\'s 0.3%.',
      el: 'Η Αργάκα ανέβηκε στο 44.1% (0.44 ΕΚΜ), 43.8μ.π. πάνω από πέρυσι (0.3%).',
      ru: 'Аргака вырос — 44.1% (0.44 МКМ), +43.8пп выше прошлогодних 0.3%.',
    },
    'Pomos': {
      en: 'Pomos held at 59.7% (0.51 MCM), 46.2pp above last year\'s 13.5%.',
      el: 'Ο Πόμος σταθερός στο 59.7% (0.51 ΕΚΜ), 46.2μ.π. πάνω από πέρυσι (13.5%).',
      ru: 'Помос без изменений — 59.7% (0.51 МКМ), +46.2пп выше прошлогодних 13.5%.',
    },
    'Agia Marina': {
      en: 'Agia Marina rose to 48.3% (0.14 MCM), 29.9pp above last year\'s 18.5%.',
      el: 'Η Αγία Μαρίνα ανέβηκε στο 48.3% (0.14 ΕΚΜ), 29.9μ.π. πάνω από πέρυσι (18.5%).',
      ru: 'Агия Марина вырос — 48.3% (0.14 МКМ), +29.9пп выше прошлогодних 18.5%.',
    },
    'Vyzakia': {
      en: 'Vyzakia held at 71.1% (1.20 MCM), 70.8pp above last year\'s 0.3%.',
      el: 'Τα Βυζακιά σταθερός στο 71.1% (1.20 ΕΚΜ), 70.8μ.π. πάνω από πέρυσι (0.3%).',
      ru: 'Визакия без изменений — 71.1% (1.20 МКМ), +70.8пп выше прошлогодних 0.3%.',
    },
    'Xyliatos': {
      en: 'Xyliatos rose to 74.8% (1.07 MCM), 72.6pp above last year\'s 2.2%.',
      el: 'Ο Ξυλιάτος ανέβηκε στο 74.8% (1.07 ΕΚΜ), 72.6μ.π. πάνω από πέρυσι (2.2%).',
      ru: 'Ксилиатос вырос — 74.8% (1.07 МКМ), +72.6пп выше прошлогодних 2.2%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis unchanged at 100% (0.36 MCM), still the only dam overflowing. Up from 10.5% last year.',
      el: 'Ο Καλοπαναγιώτης αμετάβλητος στο 100% (0.36 ΕΚΜ), το μόνο φράγμα που υπερχειλίζει. Από 10.5% πέρυσι.',
      ru: 'Калопанайотис без изменений на 100% (0.36 МКМ), единственная переполненная дамба. Год назад 10.5%.',
    },
    'Tamassos': {
      en: 'Tamassos held at 78.6% (2.20 MCM), 60pp above last year\'s 18.7%.',
      el: 'Ο Ταμασός σταθερός στο 78.6% (2.20 ΕΚΜ), 60μ.π. πάνω από πέρυσι (18.7%).',
      ru: 'Тамассос без изменений — 78.6% (2.20 МКМ), +60пп выше прошлогодних 18.7%.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta held at 87.1% (1.74 MCM), 30.8pp above last year\'s 56.3%.',
      el: 'Η Κλήρου-Μαλούντα σταθερός στο 87.1% (1.74 ΕΚΜ), 30.8μ.π. πάνω από πέρυσι (56.3%).',
      ru: 'Клиру-Малунта без изменений — 87.1% (1.74 МКМ), +30.8пп выше прошлогодних 56.3%.',
    },
    'Solea': {
      en: 'Solea eased to 84.3% (3.76 MCM), 40.4pp above last year\'s 44%.',
      el: 'Η Σολέα υποχώρησε στο 84.3% (3.76 ΕΚΜ), 40.4μ.π. πάνω από πέρυσι (44%).',
      ru: 'Солеа снизился — 84.3% (3.76 МКМ), +40.4пп выше прошлогодних 44%.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (14 — 15 Οκτωβρίου 2026)

Πέμπτη: συνολική αποθήκευση **35.3%** (102.8 ΕΚΜ) — πάνω κατά 0.14 ΕΚΜ από την Τετάρτη (102.6 ΕΚΜ), η πρώτη καθαρή άνοδος μετά από εβδομάδες αργής απόσυρσης. Η εισροή 24 ωρών έφτασε τα 0.25 ΕΚΜ, με σχεδόν κάθε φράγμα να καταγράφει κάτι. Ο [Αρμίνου](/el/dam/arminou/) ανέβηκε στο 64.0% (+1.3μ.π.), ο [Κούρης](/el/dam/kouris/) πήρε 0.08 ΕΚΜ και κράτησε το 36.7%. Ο [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) παραμένει το μόνο φράγμα που υπερχειλίζει στο 100%. Το χάσμα με πέρυσι είναι **23.8 μονάδες**. Εισροή σεζόν: 0.86 ΕΚΜ μέχρι στιγμής.

**Αξιοσημείωτα (έναντι 14 Οκτωβρίου):**
- [Αρμίνου](/el/dam/arminou/) **64.0%** (+1.3μ.π.) — εισροή 0.06 ΕΚΜ, η μεγαλύτερη άνοδος
- [Κούρης](/el/dam/kouris/) **36.7%** — εισροή 0.08 ΕΚΜ, η μεγαλύτερη, σταμάτησε την πτώση
- [Αγία Μαρίνα](/el/dam/agia-marina/) **48.3%** (+0.6μ.π.) και [Ξυλιάτος](/el/dam/xyliatos/) **74.8%** (+0.5μ.π.)
- [Αχνά](/el/dam/achna/) **8.0%** — αμετάβλητη, μηδενική εισροή
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — το μόνο φράγμα που υπερχειλίζει

**Στα μέσα:**
- [Φράγματα: Σχεδόν τριπλάσια αποθέματα σε σχέση με πέρσι](https://simerini.sigmalive.com/article/2026/10/8/phragmata-skhedon-triplasia-apothemata-se-skhese-me-persi/) — Σημερινή
- [Μεγάλες διαφορές στην πληρότητα των φραγμάτων: Ποιο είναι γεμάτο 100% και ποιο μόλις στο 8,3%](https://www.politis.com.cy/cyprus/perivallon/1048813/sto-356-i-plirotita-ton-fraghmaton-simantika-auksimena-ta-apothemata-se-skhesi-me-persi) — Πολίτης
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (14 — 15 октября 2026)

Четверг: общий запас **35.3%** (102.8 МКМ) — на 0.14 МКМ выше, чем в среду (102.6 МКМ), первый чистый рост после недель медленного снижения. Суточный приток составил 0.25 МКМ, почти каждая дамба зафиксировала прибавку. [Арминоу](/ru/dam/arminou/) вырос до 64.0% (+1.3пп), [Курис](/ru/dam/kouris/) получил 0.08 МКМ и удержался на 36.7%. [Калопанайотис](/ru/dam/kalopanagiotis/) остаётся единственной переполненной дамбой — 100%. Разрыв с прошлым годом — **23.8 пункта**. Приток за сезон: 0.86 МКМ пока.

**Основные изменения (за период с 14 октября):**
- [Арминоу](/ru/dam/arminou/) **64.0%** (+1.3пп) — приток 0.06 МКМ, самый заметный рост
- [Курис](/ru/dam/kouris/) **36.7%** — приток 0.08 МКМ, наибольший, остановил снижение
- [Агия Марина](/ru/dam/agia-marina/) **48.3%** (+0.6пп) и [Ксилиатос](/ru/dam/xyliatos/) **74.8%** (+0.5пп)
- [Ахна](/ru/dam/achna/) **8.0%** — без изменений, притока нет
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — единственная переполненная дамба

**В СМИ:**
- [Водохранилища Кипра 2026 - от худшего старта со времён танкеров до девяти переливов](https://ruscyprus.com/news/vodohranilishcha-kipra-2026-ot-hudshego/63306) — RusCyprus
`;
  }
  return `
### Recent Changes (October 14 — 15, 2026)

Thursday's bulletin: total storage **35.3%** (102.8 MCM) — up 0.14 MCM from Wednesday (102.6 MCM), the first net gain after weeks of slow drawdown. Inflow over 24 hours reached 0.25 MCM, with almost every dam logging something. [Arminou](/dam/arminou/) climbed to 64.0% (+1.3pp), while [Kouris](/dam/kouris/) took in 0.08 MCM and held at 36.7%. [Kalopanagiotis](/dam/kalopanagiotis/) remains the only dam overflowing at 100%. The gap over last year stands at **23.8 points**. Season inflow so far: 0.86 MCM.

**Notable movements (vs. October 14):**
- [Arminou](/dam/arminou/) **64.0%** (+1.3pp) — 0.06 MCM of inflow, the biggest rise
- [Kouris](/dam/kouris/) **36.7%** — 0.08 MCM, the largest single inflow, halted the slide
- [Agia Marina](/dam/agia-marina/) **48.3%** (+0.6pp) and [Xyliatos](/dam/xyliatos/) **74.8%** (+0.5pp)
- [Achna](/dam/achna/) **8.0%** — unchanged, zero inflow
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing

**In the media:**
- [Agriculture ministry allocates €200m to irrigation projects](https://cyprus-mail.com/2026/10/07/agriculture-ministry-allocates-e200m-to-irrigation-projects) — Cyprus Mail
`;
};
