import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.022, totalSince: 0.245 }, storage: { current: { amount: 42.192, percentage: 36.7 }, lastYear: { amount: 12.220, percentage: 10.6 } }, maxStorage: { amount: 48.267, date: "16/6" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 0.008 }, storage: { current: { amount: 3.700, percentage: 21.6 }, lastYear: { amount: 2.032, percentage: 11.9 } }, maxStorage: { amount: 4.247, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 0.005 }, storage: { current: { amount: 2.395, percentage: 17.3 }, lastYear: { amount: 2.023, percentage: 14.6 } }, maxStorage: { amount: 2.569, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 0.011 }, storage: { current: { amount: 3.823, percentage: 24.7 }, lastYear: { amount: 3.336, percentage: 21.5 } }, maxStorage: { amount: 5.941, date: "3/6" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 0.017 }, storage: { current: { amount: 6.451, percentage: 47.8 }, lastYear: { amount: 0.905, percentage: 6.7 } }, maxStorage: { amount: 8.140, date: "29/5" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.012, totalSince: 0.182 }, storage: { current: { amount: 2.695, percentage: 62.7 }, lastYear: { amount: 1.797, percentage: 41.8 } }, maxStorage: { amount: 3.117, date: "13/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 0.007 }, storage: { current: { amount: 1.462, percentage: 43.0 }, lastYear: { amount: 0.855, percentage: 25.1 } }, maxStorage: { amount: 2.198, date: "25/5" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.544, percentage: 8.0 }, lastYear: { amount: 0.100, percentage: 1.5 } }, maxStorage: { amount: 0.380, date: "30/9" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 0.019 }, storage: { current: { amount: 18.551, percentage: 35.4 }, lastYear: { amount: 5.187, percentage: 9.9 } }, maxStorage: { amount: 22.011, date: "29/5" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 0.061 }, storage: { current: { amount: 7.179, percentage: 41.8 }, lastYear: { amount: 2.149, percentage: 12.5 } }, maxStorage: { amount: 8.990, date: "28/5" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.012 }, storage: { current: { amount: 0.648, percentage: 29.7 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.974, date: "24/4" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 0.021 }, storage: { current: { amount: 9.266, percentage: 38.6 }, lastYear: { amount: 2.936, percentage: 12.2 } }, maxStorage: { amount: 12.036, date: "27/5" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 0.003 }, storage: { current: { amount: 0.433, percentage: 43.7 }, lastYear: { amount: 0.003, percentage: 0.3 } }, maxStorage: { amount: 0.990, date: "16/3-29/5" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.004 }, storage: { current: { amount: 0.512, percentage: 59.5 }, lastYear: { amount: 0.116, percentage: 13.5 } }, maxStorage: { amount: 0.860, date: "16/2-12/6" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.009 }, storage: { current: { amount: 0.142, percentage: 47.7 }, lastYear: { amount: 0.055, percentage: 18.5 } }, maxStorage: { amount: 0.298, date: "30/3-29/5" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 1.200, percentage: 71.0 }, lastYear: { amount: 0.005, percentage: 0.3 } }, maxStorage: { amount: 1.690, date: "27/4-26/5" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 0.002 }, storage: { current: { amount: 1.063, percentage: 74.3 }, lastYear: { amount: 0.031, percentage: 2.2 } }, maxStorage: { amount: 1.430, date: "23/3-29/5" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.038, percentage: 10.5 } }, maxStorage: { amount: 0.363, date: "16/1-7/9" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 2.202, percentage: 78.6 }, lastYear: { amount: 0.524, percentage: 18.7 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 1.741, percentage: 87.1 }, lastYear: { amount: 1.127, percentage: 56.4 } }, maxStorage: { amount: 1.473, date: "13/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 3.762, percentage: 84.5 }, lastYear: { amount: 1.962, percentage: 44.1 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

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
  { year: "26/27", months: { October:0.606, November:0, December:0, January:0, February:0, March:0, April:0, May:0, June:0, July:0, "Aug-Sep":0 }, total:0.606 },
];

export const getReportDate = (): string => "14-OCT-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.00 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris eased to 36.7% (42.2 MCM), 26.1pp above last year\'s 10.6%.',
      el: 'Ο Κούρης υποχώρησε στο 36.7% (42.2 ΕΚΜ), 26.1μ.π. πάνω από πέρυσι (10.6%).',
      ru: 'Курис снизился — 36.7% (42.2 МКМ), +26.1пп выше прошлогодних 10.6%.',
    },
    'Kalavasos': {
      en: 'Kalavasos eased to 21.6% (3.70 MCM), 9.7pp above last year\'s 11.9%.',
      el: 'Ο Καλαβασός υποχώρησε στο 21.6% (3.70 ΕΚΜ), 9.7μ.π. πάνω από πέρυσι (11.9%).',
      ru: 'Калавасос снизился — 21.6% (3.70 МКМ), +9.7пп выше прошлогодних 11.9%.',
    },
    'Lefkara': {
      en: 'Lefkara eased to 17.3% (2.40 MCM), 2.7pp above last year\'s 14.6%.',
      el: 'Η Λεύκαρα υποχώρησε στο 17.3% (2.40 ΕΚΜ), 2.7μ.π. πάνω από πέρυσι (14.6%).',
      ru: 'Лефкара снизилась — 17.3% (2.40 МКМ), +2.7пп выше прошлогодних 14.6%.',
    },
    'Dipotamos': {
      en: 'Dipotamos eased to 24.7% (3.82 MCM), 3.2pp above last year\'s 21.5%.',
      el: 'Ο Διπόταμος υποχώρησε στο 24.7% (3.82 ΕΚΜ), 3.2μ.π. πάνω από πέρυσι (21.5%).',
      ru: 'Дипотамос снизился — 24.7% (3.82 МКМ), +3.2пп выше прошлогодних 21.5%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia eased to 47.8% (6.45 MCM), 41.1pp above last year\'s 6.7%.',
      el: 'Η Γερμασόγεια υποχώρησε στο 47.8% (6.45 ΕΚΜ), 41.1μ.π. πάνω από πέρυσι (6.7%).',
      ru: 'Гермасойя снизилась — 47.8% (6.45 МКМ), +41.1пп выше прошлогодних 6.7%.',
    },
    'Arminou': {
      en: 'Arminou rose to 62.7% (2.70 MCM, +0.4pp in two days), still the only Southern Conveyor dam rising, 20.9pp above last year\'s 41.8%.',
      el: 'Ο Αρμίνου ανέβηκε στο 62.7% (2.70 ΕΚΜ, +0.4μ.π. σε δύο μέρες), το μόνο φράγμα του Νότιου Αγωγού που ανεβαίνει, 20.9μ.π. πάνω από πέρυσι (41.8%).',
      ru: 'Арминоу вырос — 62.7% (2.70 МКМ, +0.4пп за два дня), по-прежнему единственная растущая дамба Южного водовода, +20.9пп выше прошлогодних 41.8%.',
    },
    'Polemidia': {
      en: 'Polemidia eased to 43% (1.46 MCM), 17.9pp above last year\'s 25.1%.',
      el: 'Η Πολεμίδια υποχώρησε στο 43% (1.46 ΕΚΜ), 17.9μ.π. πάνω από πέρυσι (25.1%).',
      ru: 'Полемидия снизилась — 43% (1.46 МКМ), +17.9пп выше прошлогодних 25.1%.',
    },
    'Achna': {
      en: 'Achna eased to 8% (0.54 MCM), up from 1.5% last year.',
      el: 'Η Αχνά υποχώρησε στο 8% (0.54 ΕΚΜ), από 1.5% πέρυσι.',
      ru: 'Ахна снизилась — 8% (0.54 МКМ), год назад 1.5%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos eased to 35.4% (18.6 MCM), 25.5pp above last year\'s 9.9%.',
      el: 'Ο Ασπρόκρεμμος υποχώρησε στο 35.4% (18.6 ΕΚΜ), 25.5μ.π. πάνω από πέρυσι (9.9%).',
      ru: 'Аспрокреммос снизился — 35.4% (18.6 МКМ), +25.5пп выше прошлогодних 9.9%.',
    },
    'Kannaviou': {
      en: 'Kannaviou eased to 41.8% (7.18 MCM), 29.3pp above last year\'s 12.5%.',
      el: 'Ο Καννάβιου υποχώρησε στο 41.8% (7.18 ΕΚΜ), 29.3μ.π. πάνω από πέρυσι (12.5%).',
      ru: 'Каннавиу снизился — 41.8% (7.18 МКМ), +29.3пп выше прошлогодних 12.5%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos eased to 29.7% (0.65 MCM), up from 0% last year.',
      el: 'Ο Μαυροκόλυμπος υποχώρησε στο 29.7% (0.65 ΕΚΜ), από 0% πέρυσι.',
      ru: 'Мавроколимпос снизился — 29.7% (0.65 МКМ), год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou eased to 38.6% (9.27 MCM), 26.4pp above last year\'s 12.2%.',
      el: 'Ο Εύρετου υποχώρησε στο 38.6% (9.27 ΕΚΜ), 26.4μ.π. πάνω από πέρυσι (12.2%).',
      ru: 'Эвретоу снизился — 38.6% (9.27 МКМ), +26.4пп выше прошлогодних 12.2%.',
    },
    'Argaka': {
      en: 'Argaka held at 43.7% (0.43 MCM), unchanged since the last bulletin. Up from 0.3% last year.',
      el: 'Η Αργάκα σταθερή στο 43.7% (0.43 ΕΚΜ). Από 0.3% πέρυσι.',
      ru: 'Аргака без изменений — 43.7% (0.43 МКМ). Год назад 0.3%.',
    },
    'Pomos': {
      en: 'Pomos held at 59.5% (0.51 MCM), unchanged since the last bulletin. Up from 13.5% last year.',
      el: 'Ο Πόμος σταθερός στο 59.5% (0.51 ΕΚΜ). Από 13.5% πέρυσι.',
      ru: 'Помос без изменений — 59.5% (0.51 МКМ). Год назад 13.5%.',
    },
    'Agia Marina': {
      en: 'Agia Marina eased to 47.7% (0.14 MCM), 29.2pp above last year\'s 18.5%.',
      el: 'Η Αγία Μαρίνα υποχώρησε στο 47.7% (0.14 ΕΚΜ), 29.2μ.π. πάνω από πέρυσι (18.5%).',
      ru: 'Агия Марина снизилась — 47.7% (0.14 МКМ), +29.2пп выше прошлогодних 18.5%.',
    },
    'Vyzakia': {
      en: 'Vyzakia eased to 71% (1.20 MCM), up from 0.3% last year.',
      el: 'Τα Βυζακιά υποχώρησε στο 71% (1.20 ΕΚΜ), από 0.3% πέρυσι.',
      ru: 'Визакия снизилась — 71% (1.20 МКМ), год назад 0.3%.',
    },
    'Xyliatos': {
      en: 'Xyliatos eased to 74.3% (1.06 MCM), up from 2.2% last year.',
      el: 'Ο Ξυλιάτος υποχώρησε στο 74.3% (1.06 ΕΚΜ), από 2.2% πέρυσι.',
      ru: 'Ксилиатос снизился — 74.3% (1.06 МКМ), год назад 2.2%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis unchanged at 100% (0.36 MCM), still the only dam overflowing. Up from 10.5% last year.',
      el: 'Ο Καλοπαναγιώτης αμετάβλητος στο 100% (0.36 ΕΚΜ), το μόνο φράγμα που υπερχειλίζει. Από 10.5% πέρυσι.',
      ru: 'Калопанайотис без изменений на 100% (0.36 МКМ), единственная переполненная дамба. Год назад 10.5%.',
    },
    'Tamassos': {
      en: 'Tamassos eased to 78.6% (2.20 MCM), 59.9pp above last year\'s 18.7%.',
      el: 'Ο Ταμασός υποχώρησε στο 78.6% (2.20 ΕΚΜ), 59.9μ.π. πάνω από πέρυσι (18.7%).',
      ru: 'Тамассос снизился — 78.6% (2.20 МКМ), +59.9пп выше прошлогодних 18.7%.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta eased to 87.1% (1.74 MCM), 30.7pp above last year\'s 56.4%.',
      el: 'Η Κλήρου-Μαλούντα υποχώρησε στο 87.1% (1.74 ΕΚΜ), 30.7μ.π. πάνω από πέρυσι (56.4%).',
      ru: 'Клиру-Малунта снизилась — 87.1% (1.74 МКМ), +30.7пп выше прошлогодних 56.4%.',
    },
    'Solea': {
      en: 'Solea eased to 84.5% (3.76 MCM), 40.4pp above last year\'s 44.1%.',
      el: 'Η Σολέα υποχώρησε στο 84.5% (3.76 ΕΚΜ), 40.4μ.π. πάνω από πέρυσι (44.1%).',
      ru: 'Солеа снизилась — 84.5% (3.76 МКМ), +40.4пп выше прошлогодних 44.1%.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (12 — 14 Οκτωβρίου 2026)

Τετάρτη, δύο μέρες μετά το δελτίο της Δευτέρας: συνολική αποθήκευση **35.3%** (102.6 ΕΚΜ) — κάτω από το 35.4% (102.9 ΕΚΜ), με τον ίδιο αργό ρυθμό απόσυρσης. Ο [Αρμίνου](/el/dam/arminou/) συνέχισε την άνοδο στο 62.7% (+0.4μ.π.), παραμένοντας το μόνο φράγμα του Νότιου Αγωγού που ανεβαίνει. Ο [Κούρης](/el/dam/kouris/) κατέγραψε μικρή εισροή 0.02 ΕΚΜ αλλά υποχώρησε στο 36.7%. Ο [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) παραμένει το μόνο φράγμα που υπερχειλίζει, αμετάβλητος στο 100%. Το χάσμα με πέρυσι παραμένει στις **23.7 μονάδες**. Εισροή σεζόν: 0.61 ΕΚΜ μέχρι στιγμής. Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στο μηδέν.

**Αξιοσημείωτα (έναντι 12 Οκτωβρίου):**
- [Αρμίνου](/el/dam/arminou/) **62.7%** (+0.4μ.π.) — συνεχίζει να ανεβαίνει, το μόνο φράγμα του Νότιου Αγωγού που ανεβαίνει
- [Κούρης](/el/dam/kouris/) **36.7%** (-0.1μ.π.) — η εισροή 0.02 ΕΚΜ δεν αρκεί να αντισταθμίσει την απόσυρση
- [Καννάβιου](/el/dam/kannaviou/) **41.8%** (-0.2μ.π.) — η μεγαλύτερη πτώση ανάμεσα στα μεγαλύτερα φράγματα
- [Αχνά](/el/dam/achna/) **8.0%** (-0.1μ.π.) — η αργή πτώση συνεχίζεται
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — αμετάβλητος, το μόνο φράγμα που υπερχειλίζει
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (12 — 14 октября 2026)

Среда, через два дня после обновления понедельника: общий запас **35.3%** (102.6 МКМ) — ниже 35.4% (102.9 МКМ), тот же медленный темп снижения. [Арминоу](/ru/dam/arminou/) продолжил рост до 62.7% (+0.4пп), оставаясь единственной растущей дамбой Южного водовода. [Курис](/ru/dam/kouris/) получил небольшой приток 0.02 МКМ, но всё же снизился до 36.7%. [Калопанайотис](/ru/dam/kalopanagiotis/) остаётся единственной переполненной дамбой, без изменений на 100%. Разрыв с прошлым годом остаётся на уровне **23.7 пункта**. Приток за сезон: 0.61 МКМ пока. Перекачка [Арминоу](/ru/dam/arminou/)→[Куриса](/ru/dam/kouris/) остаётся на нуле.

**Основные изменения (за период с 12 октября):**
- [Арминоу](/ru/dam/arminou/) **62.7%** (+0.4пп) — продолжает расти, единственная растущая дамба Южного водовода
- [Курис](/ru/dam/kouris/) **36.7%** (-0.1пп) — приток 0.02 МКМ не компенсирует расход
- [Каннавиу](/ru/dam/kannaviou/) **41.8%** (-0.2пп) — самое заметное снижение среди крупных дамб
- [Ахна](/ru/dam/achna/) **8.0%** (-0.1пп) — медленное снижение продолжается
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — без изменений, единственная переполненная дамба
`;
  }
  return `
### Recent Changes (October 12 — 14, 2026)

Wednesday's bulletin, two days after Monday's update: total storage **35.3%** (102.6 MCM) — down from 35.4% (102.9 MCM), the same slow drawdown pace continuing. [Arminou](/dam/arminou/) kept climbing to 62.7% (+0.4pp), remaining the only Southern Conveyor dam still rising. [Kouris](/dam/kouris/) registered a small 0.02 MCM inflow yet still eased to 36.7%. [Kalopanagiotis](/dam/kalopanagiotis/) remains the only dam overflowing, unchanged at 100%. The gap over last year holds at **23.7 points**. Season inflow so far: 0.61 MCM. The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at zero.

**Notable movements (vs. October 12):**
- [Arminou](/dam/arminou/) **62.7%** (+0.4pp) — keeps climbing, only Southern Conveyor dam still rising
- [Kouris](/dam/kouris/) **36.7%** (-0.1pp) — 0.02 MCM of inflow not enough to offset drawdown
- [Kannaviou](/dam/kannaviou/) **41.8%** (-0.2pp) — largest drop among the larger dams
- [Achna](/dam/achna/) **8.0%** (-0.1pp) — slow slide continues after last week's streak break
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — unchanged, still the only dam overflowing
`;
};
