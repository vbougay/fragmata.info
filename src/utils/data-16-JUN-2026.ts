import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.052, totalSince: 24.982 }, storage: { current: { amount: 48.267, percentage: 42.0 }, lastYear: { amount: 20.115, percentage: 17.5 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.006, totalSince: 4.163 }, storage: { current: { amount: 4.243, percentage: 24.8 }, lastYear: { amount: 3.724, percentage: 21.8 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.001, totalSince: 1.717 }, storage: { current: { amount: 2.569, percentage: 18.5 }, lastYear: { amount: 2.338, percentage: 16.9 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.004, totalSince: 3.731 }, storage: { current: { amount: 5.842, percentage: 37.7 }, lastYear: { amount: 5.723, percentage: 36.9 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.011, totalSince: 8.871 }, storage: { current: { amount: 8.063, percentage: 59.7 }, lastYear: { amount: 2.721, percentage: 20.2 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.030, totalSince: 21.705 }, storage: { current: { amount: 2.101, percentage: 48.9 }, lastYear: { amount: 2.590, percentage: 60.2 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.909, percentage: 56.1 }, lastYear: { amount: 1.148, percentage: 33.8 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.133, percentage: 2.0 }, lastYear: { amount: 0.428, percentage: 6.3 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.006, totalSince: 20.206 }, storage: { current: { amount: 21.778, percentage: 41.6 }, lastYear: { amount: 10.657, percentage: 20.3 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.009, totalSince: 9.541 }, storage: { current: { amount: 8.904, percentage: 51.9 }, lastYear: { amount: 3.761, percentage: 21.9 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.788, percentage: 82.0 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 11.924, percentage: 49.7 }, lastYear: { amount: 5.124, percentage: 21.4 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.964, percentage: 97.4 }, lastYear: { amount: 0.279, percentage: 28.2 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.843 }, storage: { current: { amount: 0.854, percentage: 99.3 }, lastYear: { amount: 0.285, percentage: 33.1 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.265, percentage: 88.9 }, lastYear: { amount: 0.111, percentage: 37.2 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.620, percentage: 95.9 }, lastYear: { amount: 0.022, percentage: 1.3 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.001, totalSince: 1.478 }, storage: { current: { amount: 1.402, percentage: 98.0 }, lastYear: { amount: 0.239, percentage: 16.7 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.233, percentage: 64.2 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.001, totalSince: 2.655 }, storage: { current: { amount: 2.794, percentage: 99.8 }, lastYear: { amount: 0.867, percentage: 31.0 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.129 }, storage: { current: { amount: 2.000, percentage: 100.0 }, lastYear: { amount: 1.385, percentage: 69.3 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.016, totalSince: 2.652 }, storage: { current: { amount: 4.375, percentage: 98.2 }, lastYear: { amount: 2.630, percentage: 59.1 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through June 16, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:2.053, July:0.0, "Aug-Sep":0.0 }, total:113.366 },
];

export const getReportDate = (): string => "16-JUN-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 42.0% (48.3 MCM) — flat as dry season begins; 24.5pp above last year\'s 17.5%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 42.0% (48.3 ΕΚΜ) — σταθερός στην αρχή της ξηρής περιόδου. 24.5μ.π. πάνω από πέρυσι (17.5%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 42.0% (48.3 МКМ) — стабильно в начале сухого сезона. +24.5пп выше прошлогодних 17.5%. Перекачка Арминоу→Курис: 20.44 МКМ с октября.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 24.8% (4.24 MCM) — stable, slightly above last year\'s 21.8%. Seasonal inflow 4.16 MCM, gradual drawdown underway.',
      el: 'Ο Καλαβασός στο 24.8% (4.24 ΕΚΜ) — σταθερός, ελαφρά πάνω από πέρυσι (21.8%). Εισροή σεζόν 4.16 ΕΚΜ.',
      ru: 'Калавасос на 24.8% (4.24 МКМ) — стабильно, чуть выше прошлогодних 21.8%. Приток 4.16 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.5% (2.57 MCM) — holding above last year\'s 16.9%. Seasonal inflow 1.72 MCM, slow drawdown continues.',
      el: 'Η Λεύκαρα στο 18.5% (2.57 ΕΚΜ) — πάνω από πέρυσι (16.9%). Εισροή σεζόν 1.72 ΕΚΜ.',
      ru: 'Лефкара на 18.5% (2.57 МКМ) — выше прошлогодних 16.9%. Приток 1.72 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 37.7% (5.84 MCM) — easing from historical max of 5.99 MCM, above last year\'s 36.9%. Dry season drawdown underway.',
      el: 'Ο Διπόταμος στο 37.7% (5.84 ΕΚΜ) — υποχωρεί από το ιστορικό max 5.99 ΕΚΜ, πάνω από πέρυσι (36.9%). Ξηρή περίοδος.',
      ru: 'Дипотамос на 37.7% (5.84 МКМ) — снижается с исторического max 5.99 МКМ, выше прошлогодних 36.9%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 59.7% (8.06 MCM) — easing from season high of 60%, 39.5pp above last year\'s 20.2%. Highest level since 2020.',
      el: 'Η Γερμασόγεια στο 59.7% (8.06 ΕΚΜ) — υποχωρεί από το μέγιστο 60%, 39.5μ.π. πάνω από πέρυσι (20.2%). Υψηλότερο από το 2020.',
      ru: 'Гермасойя на 59.7% (8.06 МКМ) — отступает от пика 60%, +39.5пп выше прошлогодних 20.2%. Высший уровень с 2020 года.',
    },
    'Arminou': {
      en: 'Arminou at 48.9% (2.10 MCM). Seasonal inflow 21.7 MCM = 5.0× capacity; 20.44 MCM pumped to Kouris since October.',
      el: 'Ο Αρμίνου στο 48.9% (2.10 ΕΚΜ). Εισροή σεζόν: 21.7 ΕΚΜ = 5.0× χωρητικότητα· 20.44 ΕΚΜ στον Κούρη από τον Οκτώβριο.',
      ru: 'Арминоу на 48.9% (2.10 МКМ). Приток: 21.7 МКМ = 5.0× ёмкости; 20.44 МКМ перекачано в Курис с октября.',
    },
    'Polemidia': {
      en: 'Polemidia at 56.1% (1.91 MCM) — declining from season peak; down 2.6pp since June 9. Still 22.3pp above last year\'s 33.8%.',
      el: 'Η Πολεμίδια στο 56.1% (1.91 ΕΚΜ) — μειώνεται από το μέγιστο, -2.6μ.π. από 9 Ιουνίου. Ακόμη 22.3μ.π. πάνω από πέρυσι (33.8%).',
      ru: 'Полемидия на 56.1% (1.91 МКМ) — снижается от пика; -2.6пп с 9 июня. Всё ещё +22.3пп выше прошлогодних 33.8%.',
    },
    'Achna': {
      en: 'Achna critically low at 2.0% (0.13 MCM), zero inflow all season. Far below last year\'s 6.3%. No recovery expected.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.0% (0.13 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (6.3%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.0% (0.13 МКМ), без притока за сезон. Далеко ниже прошлогодних 6.3%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 41.6% (21.78 MCM) — easing from season high, 21.3pp above last year\'s 20.3%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 41.6% (21.78 ΕΚΜ) — υποχωρεί ελαφρά, 21.3μ.π. πάνω από πέρυσι (20.3%). Εισροή 20.2 ΕΚΜ.',
      ru: 'Аспрокреммос на 41.6% (21.78 МКМ) — снижается от пика, +21.3пп выше прошлогодних 20.3%. Приток 20.2 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 51.9% (8.90 MCM) — easing from season high, 30.0pp above last year\'s 21.9%. Seasonal inflow 9.54 MCM.',
      el: 'Ο Καννάβιου στο 51.9% (8.90 ΕΚΜ) — υποχωρεί ελαφρά, 30.0μ.π. πάνω από πέρυσι (21.9%). Εισροή 9.54 ΕΚΜ.',
      ru: 'Каннавиу на 51.9% (8.90 МКМ) — снижается от пика, +30.0пп выше прошлогодних 21.9%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 82.0% (1.79 MCM) — summer decline continues, down 1.2pp since June 9. Was 0% last year — exceptional recovery.',
      el: 'Ο Μαυροκόλυμπος στο 82.0% (1.79 ΕΚΜ) — καλοκαιρινή υποχώρηση, -1.2μ.π. από 9 Ιουνίου. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 82.0% (1.79 МКМ) — летнее снижение, -1.2пп с 9 июня. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 49.7% (11.92 MCM) — below 50% for the fourth consecutive day; 28.3pp above last year\'s 21.4%. Slow drawdown continues.',
      el: 'Ο Εύρετου στο 49.7% (11.92 ΕΚΜ) — κάτω από 50% για τέταρτη συνεχόμενη ημέρα. 28.3μ.π. πάνω από πέρυσι (21.4%).',
      ru: 'Эвретоу на 49.7% (11.92 МКМ) — ниже 50% четвёртый день подряд. +28.3пп выше прошлогодних 21.4%.',
    },
    'Argaka': {
      en: 'Argaka at 97.4% (0.96 MCM) — just below full, easing slowly. Up from 28.2% last year — more than tripled year over year.',
      el: 'Η Αργάκα στο 97.4% (0.96 ΕΚΜ) — κοντά σε πλήρης, αργή υποχώρηση. Από 28.2% πέρυσι — πάνω από τριπλασιασμός.',
      ru: 'Аргака на 97.4% (0.96 МКМ) — чуть ниже полного уровня. Год назад 28.2% — более чем утроение.',
    },
    'Pomos': {
      en: 'Pomos at 99.3% (0.85 MCM) — easing slowly after dropping below full. Up from 33.1% last year — nearly tripled.',
      el: 'Ο Πόμος στο 99.3% (0.85 ΕΚΜ) — αργή υποχώρηση μετά τη μείωση από 100%. Από 33.1% πέρυσι — σχεδόν τριπλασιασμός.',
      ru: 'Помос на 99.3% (0.85 МКМ) — медленное снижение после опускания ниже 100%. Год назад 33.1%.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 88.9% (0.27 MCM) — dry season decline continuing, down 3.7pp since June 9. Up from 37.2% last year.',
      el: 'Η Αγία Μαρίνα στο 88.9% (0.27 ΕΚΜ) — μείωση ξηρής περιόδου, -3.7μ.π. από 9 Ιουνίου. Αύξηση από 37.2% πέρυσι.',
      ru: 'Агия Марина на 88.9% (0.27 МКМ) — снижение сухого сезона, -3.7пп с 9 июня. Год назад 37.2%.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 95.9% (1.62 MCM) — easing from full, down 1.9pp since June 9. Was 1.3% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 95.9% (1.62 ΕΚΜ) — υποχωρούν, -1.9μ.π. από 9 Ιουνίου. Από 1.3% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 95.9% (1.62 МКМ) — снижается, -1.9пп с 9 июня. Год назад 1.3%.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 98.0% (1.40 MCM) — effectively full, very slow decline. Was 16.7% last year — 5.9× year-over-year recovery.',
      el: 'Ο Ξυλιάτος στο 98.0% (1.40 ΕΚΜ) — ουσιαστικά πλήρης, αργή υποχώρηση. Από 16.7% πέρυσι — 5.9× ανάκαμψη.',
      ru: 'Ксилиатос на 98.0% (1.40 МКМ) — фактически полон, очень медленное снижение. Год назад 16.7% — восстановление в 5.9×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 64.2% last year, holding at capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 64.2% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 64.2% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 99.8% (2.79 MCM) — essentially full, very slow decline. Was 31.0% last year — 3.2× year-over-year recovery.',
      el: 'Ο Ταμασός στο 99.8% (2.79 ΕΚΜ) — ουσιαστικά πλήρης, πολύ αργή υποχώρηση. Από 31.0% πέρυσι — 3.2× ανάκαμψη.',
      ru: 'Тамассос на 99.8% (2.79 МКМ) — фактически полон, очень медленно снижается. Год назад 31.0% — восстановление в 3.2×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 69.3% last year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 69.3% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 69.3% год назад.',
    },
    'Solea': {
      en: 'Solea at 98.2% (4.38 MCM) — holding near full as dry season progresses. Up from 59.1% last year — 1.66× year-over-year improvement.',
      el: 'Η Σολέα στο 98.2% (4.38 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 59.1% πέρυσι — 1.66× βελτίωση.',
      ru: 'Солеа на 98.2% (4.38 МКМ) — удерживается вблизи полного уровня. Рост с 59.1% год назад — улучшение в 1.66×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (9 — 16 Ιουνίου 2026)

Συνολική αποθήκευση **42.3%** (123.0 ΕΚΜ) — ουσιαστικά σταθερή για μία εβδομάδα, με ελάχιστη μείωση -0.1μ.π. από 42.4%. Η ξηρή περίοδος εδραιώνεται αθόρυβα. **+21.8μ.π. πάνω από πέρυσι** (20.5%). Εισροή σεζόν 25/26: **113.4 ΕΚΜ**. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): **20.44 ΕΚΜ** από τον Οκτώβριο.

**Αξιοσημείωτα:**
- **[Αρμίνου](/el/dam/arminou/) 48.9%** (+1.4μ.π. την εβδομάδα) — μικρές καθημερινές εισροές εξακολουθούν να αντιστρατεύονται την άντληση στον [Κούρη](/el/dam/kouris/)
- **[Πολεμίδια](/el/dam/polemidia/) 56.1%** (-2.6μ.π.) — εμφανέστατη εβδομαδιαία υποχώρηση από το μέγιστο σεζόν
- **[Αγία Μαρίνα](/el/dam/agia-marina/) 88.9%** (-3.7μ.π.) · **[Βυζακιά](/el/dam/vyzakia/) 95.9%** (-1.9μ.π.) — σταθερή εποχιακή μείωση
- **[Εύρετου](/el/dam/evretou/) 49.7%** — τέταρτη συνεχόμενη ημέρα κάτω από 50%
- **[Μαυροκόλυμπος](/el/dam/mavrokolympos/) 82.0%** (-1.2μ.π.) — σταθερή καλοκαιρινή υποχώρηση· ήταν 0% πέρυσι
- [Κούρης](/el/dam/kouris/) **42.0%** (48.3 ΕΚΜ) · [Γερμασόγεια](/el/dam/germasoyeia/) **59.7%** — σταθεροί κοντά στα μέγιστά τους
- [Αχνά](/el/dam/achna/) **2.0%** — μηδέν εισροή όλη τη σεζόν· [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) και [Κλήρου-Μαλούντα](/el/dam/klirou-malounta/) στο 100%

**Στα μέσα:**
- [Υπουργικό: Έγκριση 3,5 εκ. κυβικά μέτρα επιπλέον νερού για άρδευση](https://cyprus-mail.com/2026/06/09/cabinet-approves-3-5-million-cubic-metres-of-additional-water-supply) — Cyprus Mail
- [Μετρήσεις βροχόπτωσης 10-11/06 — Πληρότητα φραγμάτων](https://kitasweather.com/news/fragmata-vroxoptosi/metriseis-vroxoptosis-telefteou-2imerou-10-11-6-plirotita-fragmaton/) — KitasWeather
- [Τα επίπεδα νερού στα φράγματα σχεδόν διπλάσια σε σχέση με πέρυσι](https://cyprus-mail.com/2026/06/02/dam-levels-almost-double-those-of-last-year) — Cyprus Mail
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (9 — 16 июня 2026)

Общий запас **42.3%** (123.0 МКМ) — фактически без изменений за неделю, минус 0.1пп от 42.4%. Сухой сезон утверждается тихо, без резких скачков. **+21.8пп выше прошлогодних** (20.5%). Приток сезона 25/26: **113.4 МКМ**. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): **20.44 МКМ** с октября.

**Основные изменения:**
- **[Арминоу](/ru/dam/arminou/) 48.9%** (+1.4пп за неделю) — небольшие ежедневные притоки продолжают противостоять перекачке в [Курис](/ru/dam/kouris/)
- **[Полемидия](/ru/dam/polemidia/) 56.1%** (-2.6пп) — заметное недельное снижение от сезонного максимума
- **[Агия Марина](/ru/dam/agia-marina/) 88.9%** (-3.7пп) · **[Визакия](/ru/dam/vyzakia/) 95.9%** (-1.9пп) — устойчивое сезонное снижение
- **[Эвретоу](/ru/dam/evretou/) 49.7%** — четвёртый день подряд ниже отметки 50%
- **[Мавроколимпос](/ru/dam/mavrokolympos/) 82.0%** (-1.2пп) — плавное летнее снижение; год назад 0%
- [Курис](/ru/dam/kouris/) **42.0%** (48.3 МКМ) · [Гермасойя](/ru/dam/germasoyeia/) **59.7%** — стабильно у сезонных максимумов
- [Ахна](/ru/dam/achna/) **2.0%** — без притока за весь сезон; [Калопанайотис](/ru/dam/kalopanagiotis/) и [Клиру-Малунта](/ru/dam/klirou-malounta/) на 100%

**В СМИ:**
- [Кабмин одобрил дополнительно 3,5 млн кубометров воды для орошения](https://cyprus-mail.com/2026/06/09/cabinet-approves-3-5-million-cubic-metres-of-additional-water-supply) — Cyprus Mail
- [Измерения осадков 10-11/06 — заполненность водохранилищ](https://kitasweather.com/news/fragmata-vroxoptosi/metriseis-vroxoptosis-telefteou-2imerou-10-11-6-plirotita-fragmaton/) — KitasWeather
- [Уровень воды в дамбах почти удвоился по сравнению с прошлым годом](https://cyprus-mail.com/2026/06/02/dam-levels-almost-double-those-of-last-year) — Cyprus Mail
`;
  }
  return `
### Recent Changes (June 9 — 16, 2026)

Total storage at **42.3%** (123.0 MCM) — essentially flat for the week, down just 0.1pp from the 42.4% plateau. The dry season is establishing itself quietly. **+21.8pp above last year** (20.5%). Season total inflow: **113.4 MCM**. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: **20.44 MCM** since October.

**Notable movements:**
- **[Arminou](/dam/arminou/) 48.9%** (+1.4pp over the week) — persistent small daily inflows continue to outpace pumping to [Kouris](/dam/kouris/)
- **[Polemidia](/dam/polemidia/) 56.1%** (-2.6pp) — clearest weekly drop, easing from season high
- **[Agia Marina](/dam/agia-marina/) 88.9%** (-3.7pp) · **[Vyzakia](/dam/vyzakia/) 95.9%** (-1.9pp) — steady seasonal drawdown
- **[Evretou](/dam/evretou/) 49.7%** — fourth consecutive day below 50%
- **[Mavrokolympos](/dam/mavrokolympos/) 82.0%** (-1.2pp) — gradual summer decline; was 0% last year
- [Kouris](/dam/kouris/) **42.0%** (48.3 MCM) · [Germasoyeia](/dam/germasoyeia/) **59.7%** — stable near season highs
- [Achna](/dam/achna/) **2.0%** — zero inflow all season; [Kalopanagiotis](/dam/kalopanagiotis/) and [Klirou-Malounta](/dam/klirou-malounta/) remain at 100%

**In the media:**
- [Cabinet approves 3.5 million cubic metres of additional water supply](https://cyprus-mail.com/2026/06/09/cabinet-approves-3-5-million-cubic-metres-of-additional-water-supply) — Cyprus Mail
- [Rainfall measurements June 10-11 — dam fullness levels](https://kitasweather.com/news/fragmata-vroxoptosi/metriseis-vroxoptosis-telefteou-2imerou-10-11-6-plirotita-fragmaton/) — KitasWeather
- [Dam levels almost double those of last year](https://cyprus-mail.com/2026/06/02/dam-levels-almost-double-those-of-last-year) — Cyprus Mail
`;
};
