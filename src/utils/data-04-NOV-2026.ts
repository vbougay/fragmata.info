import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.029, totalSince: 1.121 }, storage: { current: { amount: 41.799, percentage: 36.3 }, lastYear: { amount: 10.956, percentage: 9.5 } }, maxStorage: { amount: 48.267, date: "16/6" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 0.041 }, storage: { current: { amount: 3.642, percentage: 21.3 }, lastYear: { amount: 1.794, percentage: 10.5 } }, maxStorage: { amount: 4.247, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 0.017 }, storage: { current: { amount: 2.385, percentage: 17.2 }, lastYear: { amount: 1.982, percentage: 14.3 } }, maxStorage: { amount: 2.569, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 0.086 }, storage: { current: { amount: 3.677, percentage: 23.7 }, lastYear: { amount: 3.020, percentage: 19.5 } }, maxStorage: { amount: 5.941, date: "3/6" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 0.062 }, storage: { current: { amount: 6.264, percentage: 46.4 }, lastYear: { amount: 0.679, percentage: 5 } }, maxStorage: { amount: 8.140, date: "29/5" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.013, totalSince: 0.649 }, storage: { current: { amount: 3.078, percentage: 71.6 }, lastYear: { amount: 1.713, percentage: 39.8 } }, maxStorage: { amount: 3.117, date: "13/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 0.017 }, storage: { current: { amount: 1.462, percentage: 43 }, lastYear: { amount: 0.815, percentage: 24 } }, maxStorage: { amount: 2.198, date: "25/5" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.533, percentage: 7.8 }, lastYear: { amount: 0.094, percentage: 1.4 } }, maxStorage: { amount: 0.380, date: "30/9" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 0.183 }, storage: { current: { amount: 18.392, percentage: 35.1 }, lastYear: { amount: 4.651, percentage: 8.9 } }, maxStorage: { amount: 22.011, date: "29,5" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 0.139 }, storage: { current: { amount: 7.038, percentage: 41 }, lastYear: { amount: 1.922, percentage: 11.2 } }, maxStorage: { amount: 8.990, date: "28/5" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.029 }, storage: { current: { amount: 0.730, percentage: 33.5 }, lastYear: { amount: 0.000, percentage: 0 } }, maxStorage: { amount: 1.974, date: "24/4" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 0.071 }, storage: { current: { amount: 9.204, percentage: 38.4 }, lastYear: { amount: 2.668, percentage: 11.1 } }, maxStorage: { amount: 12.036, date: "27/5" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 0.011 }, storage: { current: { amount: 0.422, percentage: 42.6 }, lastYear: { amount: 0.000, percentage: 0 } }, maxStorage: { amount: 0.990, date: "16/3-29/5" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.006 }, storage: { current: { amount: 0.496, percentage: 57.7 }, lastYear: { amount: 0.113, percentage: 13.1 } }, maxStorage: { amount: 0.860, date: "16/2-12/6" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.022 }, storage: { current: { amount: 0.155, percentage: 52 }, lastYear: { amount: 0.057, percentage: 19.1 } }, maxStorage: { amount: 0.298, date: "30/3-29/5" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 0.001 }, storage: { current: { amount: 1.168, percentage: 69.1 }, lastYear: { amount: 0.002, percentage: 0.1 } }, maxStorage: { amount: 1.690, date: "27/4-26/5" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 0.016 }, storage: { current: { amount: 1.060, percentage: 74.1 }, lastYear: { amount: 0.028, percentage: 2 } }, maxStorage: { amount: 1.430, date: "23/3-29/5" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.363, percentage: 100 }, lastYear: { amount: 0.042, percentage: 11.6 } }, maxStorage: { amount: 0.363, date: "16/1-7/9" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 0.021 }, storage: { current: { amount: 2.164, percentage: 77.3 }, lastYear: { amount: 0.492, percentage: 17.6 } }, maxStorage: { amount: 2.800, date: "2/4-5/6" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 0.080 }, storage: { current: { amount: 1.803, percentage: 90.1 }, lastYear: { amount: 1.095, percentage: 54.8 } }, maxStorage: { amount: 2.000, date: "14/2-30/6" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 3.682, percentage: 82.7 }, lastYear: { amount: 1.896, percentage: 42.6 } }, maxStorage: { amount: 4.454, date: "10/3-2/6" }, region: "Recharge/Other" },
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
  { year: "26/27", months: { October:2.293, November:0.178, December:0, January:0, February:0, March:0, April:0, May:0, June:0, July:0, "Aug-Sep":0 }, total:2.471 },
];

export const getReportDate = (): string => "04-NOV-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.00 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris eased to 36.3% (41.8 MCM), 26.8pp above last year\'s 9.5%.',
      el: 'Κούρης υποχώρησε στο 36.3% (41.8 ΕΚΜ), 26.8μ.π. πάνω από πέρυσι (9.5%).',
      ru: 'Курис снизился — 36.3% (41.8 МКМ), +26.8пп выше прошлогодних 9.5%.',
    },
    'Kalavasos': {
      en: 'Kalavasos eased to 21.3% (3.64 MCM), 10.8pp above last year\'s 10.5%.',
      el: 'Καλαβασός υποχώρησε στο 21.3% (3.64 ΕΚΜ), 10.8μ.π. πάνω από πέρυσι (10.5%).',
      ru: 'Калавасос снизился — 21.3% (3.64 МКМ), +10.8пп выше прошлогодних 10.5%.',
    },
    'Lefkara': {
      en: 'Lefkara held at 17.2% (2.38 MCM), 2.9pp above last year\'s 14.3%.',
      el: 'Λεύκαρα παρέμεινε στο 17.2% (2.38 ΕΚΜ), 2.9μ.π. πάνω από πέρυσι (14.3%).',
      ru: 'Лефкара без изменений — 17.2% (2.38 МКМ), +2.9пп выше прошлогодних 14.3%.',
    },
    'Dipotamos': {
      en: 'Dipotamos eased to 23.7% (3.68 MCM), 4.2pp above last year\'s 19.5%.',
      el: 'Διπόταμος υποχώρησε στο 23.7% (3.68 ΕΚΜ), 4.2μ.π. πάνω από πέρυσι (19.5%).',
      ru: 'Дипотамос снизился — 23.7% (3.68 МКМ), +4.2пп выше прошлогодних 19.5%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia eased to 46.4% (6.26 MCM), 41.4pp above last year\'s 5%.',
      el: 'Γερμασόγεια υποχώρησε στο 46.4% (6.26 ΕΚΜ), 41.4μ.π. πάνω από πέρυσι (5%).',
      ru: 'Гермасойя снизился — 46.4% (6.26 МКМ), +41.4пп выше прошлогодних 5%.',
    },
    'Arminou': {
      en: 'Arminou rose to 71.6% (3.08 MCM), 31.8pp above last year\'s 39.8%.',
      el: 'Αρμίνου ανέβηκε στο 71.6% (3.08 ΕΚΜ), 31.8μ.π. πάνω από πέρυσι (39.8%).',
      ru: 'Арминоу вырос — 71.6% (3.08 МКМ), +31.8пп выше прошлогодних 39.8%.',
    },
    'Polemidia': {
      en: 'Polemidia held at 43% (1.46 MCM), 19pp above last year\'s 24%.',
      el: 'Πολεμίδια παρέμεινε στο 43% (1.46 ΕΚΜ), 19μ.π. πάνω από πέρυσι (24%).',
      ru: 'Полемидия без изменений — 43% (1.46 МКМ), +19пп выше прошлогодних 24%.',
    },
    'Achna': {
      en: 'Achna held at 7.8% (0.53 MCM), 6.4pp above last year\'s 1.4%.',
      el: 'Αχνά παρέμεινε στο 7.8% (0.53 ΕΚΜ), 6.4μ.π. πάνω από πέρυσι (1.4%).',
      ru: 'Ахна без изменений — 7.8% (0.53 МКМ), +6.4пп выше прошлогодних 1.4%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos eased to 35.1% (18.39 MCM), 26.2pp above last year\'s 8.9%.',
      el: 'Ασπρόκρεμμος υποχώρησε στο 35.1% (18.39 ΕΚΜ), 26.2μ.π. πάνω από πέρυσι (8.9%).',
      ru: 'Аспрокреммос снизился — 35.1% (18.39 МКМ), +26.2пп выше прошлогодних 8.9%.',
    },
    'Kannaviou': {
      en: 'Kannaviou eased to 41% (7.04 MCM), 29.8pp above last year\'s 11.2%.',
      el: 'Καννάβιου υποχώρησε στο 41% (7.04 ΕΚΜ), 29.8μ.π. πάνω από πέρυσι (11.2%).',
      ru: 'Каннавиу снизился — 41% (7.04 МКМ), +29.8пп выше прошлогодних 11.2%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos rose to 33.5% (0.73 MCM), 33.5pp above last year\'s 0%.',
      el: 'Μαυροκόλυμπος ανέβηκε στο 33.5% (0.73 ΕΚΜ), 33.5μ.π. πάνω από πέρυσι (0%).',
      ru: 'Мавроколимпос вырос — 33.5% (0.73 МКМ), +33.5пп выше прошлогодних 0%.',
    },
    'Evretou': {
      en: 'Evretou eased to 38.4% (9.2 MCM), 27.3pp above last year\'s 11.1%.',
      el: 'Εύρετου υποχώρησε στο 38.4% (9.2 ΕΚΜ), 27.3μ.π. πάνω από πέρυσι (11.1%).',
      ru: 'Эвретоу снизился — 38.4% (9.2 МКМ), +27.3пп выше прошлогодних 11.1%.',
    },
    'Argaka': {
      en: 'Argaka held at 42.6% (0.42 MCM), 42.6pp above last year\'s 0%.',
      el: 'Αργάκα παρέμεινε στο 42.6% (0.42 ΕΚΜ), 42.6μ.π. πάνω από πέρυσι (0%).',
      ru: 'Аргака без изменений — 42.6% (0.42 МКМ), +42.6пп выше прошлогодних 0%.',
    },
    'Pomos': {
      en: 'Pomos held at 57.7% (0.5 MCM), 44.6pp above last year\'s 13.1%.',
      el: 'Πόμος παρέμεινε στο 57.7% (0.5 ΕΚΜ), 44.6μ.π. πάνω από πέρυσι (13.1%).',
      ru: 'Помос без изменений — 57.7% (0.5 МКМ), +44.6пп выше прошлогодних 13.1%.',
    },
    'Agia Marina': {
      en: 'Agia Marina held at 52% (0.15 MCM), 32.9pp above last year\'s 19.1%.',
      el: 'Αγία παρέμεινε στο 52% (0.15 ΕΚΜ), 32.9μ.π. πάνω από πέρυσι (19.1%).',
      ru: 'Агия без изменений — 52% (0.15 МКМ), +32.9пп выше прошлогодних 19.1%.',
    },
    'Vyzakia': {
      en: 'Vyzakia eased to 69.1% (1.17 MCM), 69pp above last year\'s 0.1%.',
      el: 'Βυζακιά υποχώρησε στο 69.1% (1.17 ΕΚΜ), 69μ.π. πάνω από πέρυσι (0.1%).',
      ru: 'Визакия снизился — 69.1% (1.17 МКМ), +69пп выше прошлогодних 0.1%.',
    },
    'Xyliatos': {
      en: 'Xyliatos held at 74.1% (1.06 MCM), 72.1pp above last year\'s 2%.',
      el: 'Ξυλιάτος παρέμεινε στο 74.1% (1.06 ΕΚΜ), 72.1μ.π. πάνω από πέρυσι (2%).',
      ru: 'Ксилиатос без изменений — 74.1% (1.06 МКМ), +72.1пп выше прошлогодних 2%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis unchanged at 100% (0.36 MCM), still the only dam overflowing. Up from 11% last year.',
      el: 'Ο Καλοπαναγιώτης αμετάβλητος στο 100% (0.36 ΕΚΜ), το μόνο φράγμα που υπερχειλίζει. Από 11% πέρυσι.',
      ru: 'Калопанайотис без изменений на 100% (0.36 МКМ), единственная переполненная дамба. Год назад 11%.',
    },
    'October': {
      en: 'October eased to 3.9% (0.084 MCM), 3.9pp above last year\'s 0%.',
      el: 'undefined υποχώρησε στο 3.9% (0.084 ΕΚΜ), 3.9μ.π. πάνω από πέρυσι (0%).',
      ru: 'undefined снизился — 3.9% (0.084 МКМ), +3.9пп выше прошлогодних 0%.',
    },
    'November': {
      en: 'November eased to 3% (0.4 MCM), -0.1pp above last year\'s 3.1%.',
      el: 'undefined υποχώρησε στο 3% (0.4 ΕΚΜ), -0.1μ.π. πάνω από πέρυσι (3.1%).',
      ru: 'undefined снизился — 3% (0.4 МКМ), +-0.1пп выше прошлогодних 3.1%.',
    },
    'December': {
      en: 'December eased to 2.9% (11.92 MCM), -2.8pp above last year\'s 5.7%.',
      el: 'undefined υποχώρησε στο 2.9% (11.92 ΕΚΜ), -2.8μ.π. πάνω από πέρυσι (5.7%).',
      ru: 'undefined снизился — 2.9% (11.92 МКМ), +-2.8пп выше прошлогодних 5.7%.',
    },
    'January': {
      en: 'January eased to 8.3% (74.61 MCM), 4.2pp above last year\'s 4.1%.',
      el: 'undefined υποχώρησε στο 8.3% (74.61 ΕΚΜ), 4.2μ.π. πάνω από πέρυσι (4.1%).',
      ru: 'undefined снизился — 8.3% (74.61 МКМ), +4.2пп выше прошлогодних 4.1%.',
    },
    'February': {
      en: 'February eased to 12.6% (33.96 MCM), 10.1pp above last year\'s 2.5%.',
      el: 'undefined υποχώρησε στο 12.6% (33.96 ΕΚΜ), 10.1μ.π. πάνω από πέρυσι (2.5%).',
      ru: 'undefined снизился — 12.6% (33.96 МКМ), +10.1пп выше прошлогодних 2.5%.',
    },
    'March': {
      en: 'March eased to 9.5% (19.8 MCM), 8pp above last year\'s 1.5%.',
      el: 'undefined υποχώρησε στο 9.5% (19.8 ΕΚΜ), 8μ.π. πάνω από πέρυσι (1.5%).',
      ru: 'undefined снизился — 9.5% (19.8 МКМ), +8пп выше прошлогодних 1.5%.',
    },
    'April': {
      en: 'April eased to 4.7% (8.14 MCM), 3.6pp above last year\'s 1.1%.',
      el: 'undefined υποχώρησε στο 4.7% (8.14 ΕΚΜ), 3.6μ.π. πάνω από πέρυσι (1.1%).',
      ru: 'undefined снизился — 4.7% (8.14 МКМ), +3.6пп выше прошлогодних 1.1%.',
    },
    'May': {
      en: 'May eased to 2.7% (3.44 MCM), 2pp above last year\'s 0.7%.',
      el: 'undefined υποχώρησε στο 2.7% (3.44 ΕΚΜ), 2μ.π. πάνω από πέρυσι (0.7%).',
      ru: 'undefined снизился — 2.7% (3.44 МКМ), +2пп выше прошлогодних 0.7%.',
    },
    'June': {
      en: 'June eased to 0.9% (1.26 MCM), 0.8pp above last year\'s 0.1%.',
      el: 'undefined υποχώρησε στο 0.9% (1.26 ΕΚΜ), 0.8μ.π. πάνω από πέρυσι (0.1%).',
      ru: 'undefined снизился — 0.9% (1.26 МКМ), +0.8пп выше прошлогодних 0.1%.',
    },
    'July': {
      en: 'July eased to 0% (0.093 MCM), 0pp above last year\'s 0%.',
      el: 'undefined υποχώρησε στο 0% (0.093 ΕΚΜ), 0μ.π. πάνω από πέρυσι (0%).',
      ru: 'undefined снизился — 0% (0.093 МКМ), +0пп выше прошлогодних 0%.',
    },
    'Aug-Sep.': {
      en: 'Aug-Sep. eased to 0.2% (0.035 MCM), 0.2pp above last year\'s 0%.',
      el: 'undefined υποχώρησε στο 0.2% (0.035 ΕΚΜ), 0.2μ.π. πάνω από πέρυσι (0%).',
      ru: 'undefined снизился — 0.2% (0.035 МКМ), +0.2пп выше прошлогодних 0%.',
    },
    'Tamassos': {
      en: 'Tamassos held at 77.3% (2.16 MCM), 59.7pp above last year\'s 17.6%.',
      el: 'Ταμασός παρέμεινε στο 77.3% (2.16 ΕΚΜ), 59.7μ.π. πάνω από πέρυσι (17.6%).',
      ru: 'Тамассос без изменений — 77.3% (2.16 МКМ), +59.7пп выше прошлогодних 17.6%.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta held at 90.1% (1.8 MCM), 35.3pp above last year\'s 54.8%.',
      el: 'Κλήρου-Μαλούντα παρέμεινε στο 90.1% (1.8 ΕΚΜ), 35.3μ.π. πάνω από πέρυσι (54.8%).',
      ru: 'Клиру-Малунта без изменений — 90.1% (1.8 МКМ), +35.3пп выше прошлогодних 54.8%.',
    },
    'Solea': {
      en: 'Solea eased to 82.7% (3.68 MCM), 40.1pp above last year\'s 42.6%.',
      el: 'Σολέα υποχώρησε στο 82.7% (3.68 ΕΚΜ), 40.1μ.π. πάνω από πέρυσι (42.6%).',
      ru: 'Солеа снизился — 82.7% (3.68 МКМ), +40.1пп выше прошлогодних 42.6%.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (26 Οκτωβρίου — 4 Νοεμβρίου 2026)

Δελτίο Τετάρτης: συνολική αποθήκευση **35.0%** (101.87 ΕΚΜ) — μείωση 0.05 ΕΚΜ από χθες και από τις 26 Οκτωβρίου, δηλαδή τα φράγματα κρατούν το επίπεδό τους ανάμεσα στα επεισόδια βροχής. Η εισροή των τελευταίων 24 ωρών ήταν 0.04 ΕΚΜ και η εισροή σεζόν φτάνει τα 2.47 ΕΚΜ. Το προβάδισμα έναντι πέρυσι είναι **24.5 μονάδες**.

**Αξιοσημείωτα (έναντι 26 Οκτωβρίου):**
- [Αρμίνου](/el/dam/arminou/) **71.6%** (+3.8μ.π. την εβδομάδα, 3.08 ΕΚΜ) — συνεχίζει να ανεβαίνει
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **33.5%** (+3.8μ.π. την εβδομάδα) — η μεγαλύτερη άνοδος
- [Κούρης](/el/dam/kouris/) **36.3%** (41.80 ΕΚΜ) — εισροή 0.03 ΕΚΜ, σχεδόν σταθερός
- [Ασπρόκρεμμος](/el/dam/asprokremmos/) **35.1%** (18.39 ΕΚΜ) — σταθερός
- [Αχνά](/el/dam/achna/) **7.8%** — μηδενική εισροή
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — το μόνο φράγμα που υπερχειλίζει

**Στα μέσα:**
- [Αλλάζει το σκηνικό του καιρού στην Κύπρο – Έρχονται βροχές και καταιγίδες](https://dialogos.com.cy/allazei-to-skiniko-toy-kairoy-stin-kypro-erchontai-vroches-kai-kataigides-pote-tha-epireastei-to-nisi/) — Dialogos
- [Φράγματα: Από το 10,7% στο 35,1% η πληρότητα, πόσο νερό έφεραν οι τελευταίες βροχές](https://www.alphanews.live/cyprus/fragmata-apo-to-107-sto-351-i-plirotita-poso-nero-eferan-oi-teleftaies-vroches/) — AlphaNews
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (26 октября — 4 ноября 2026)

Бюллетень среды: общий запас **35.0%** (101.87 МКМ) — на 0.05 МКМ меньше, чем вчера и 26 октября: дождевые притоки лишь удерживают уровень водохранилищ. Приток за сутки — 0.04 МКМ, за сезон — 2.47 МКМ. Отрыв от прошлого года — **24.5 пункта**.

**Основные изменения (за период с 26 октября):**
- [Арминоу](/ru/dam/arminou/) **71.6%** (+3.8пп за неделю, 3.08 МКМ) — продолжает расти
- [Мавроколимбос](/ru/dam/mavrokolympos/) **33.5%** (+3.8пп за неделю) — наибольший рост
- [Курис](/ru/dam/kouris/) **36.3%** (41.80 МКМ) — приток 0.03 МКМ, почти без изменений
- [Аспрокреммос](/ru/dam/asprokremmos/) **35.1%** (18.39 МКМ) — стабилен
- [Ахна](/ru/dam/achna/) **7.8%** — притока нет
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — единственная переполненная дамба
`;
  }
  return `
### Recent Changes (October 26 — November 4, 2026)

Wednesday's bulletin: total storage **35.0%** (101.87 MCM) — down 0.05 MCM from yesterday and from October 26, so the rain is holding the dams level rather than filling them. Inflow over the last 24 hours was 0.04 MCM, bringing the season total to 2.47 MCM. The gap over last year is **24.5 points**.

**Notable movements (vs. October 26):**
- [Arminou](/dam/arminou/) **71.6%** (+3.8pp on the week, 3.08 MCM) — still climbing
- [Mavrokolympos](/dam/mavrokolympos/) **33.5%** (+3.8pp on the week) — the biggest rise
- [Kouris](/dam/kouris/) **36.3%** (41.80 MCM) — 0.03 MCM of inflow, nearly steady
- [Asprokremmos](/dam/asprokremmos/) **35.1%** (18.39 MCM) — steady
- [Achna](/dam/achna/) **7.8%** — zero inflow
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing

**In the media:**
- [Mazotos residents reject compensation measures over desalination plant](https://cyprus-mail.com/2026/11/03/mazotos-residents-reject-compensation-measures-over-desalination-plant) — Cyprus Mail
- [Agriculture Ministry Budget Rises to €532m, With 43% Allocated to Water](https://en.politis.com.cy/news/environment/1061681/agriculture-ministry-budget-rises-to-eur532m-with-43-allocated-to-water) — Politis
`;
};
