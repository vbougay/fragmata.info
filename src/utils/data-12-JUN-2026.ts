import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.050, totalSince: 24.829 }, storage: { current: { amount: 48.229, percentage: 41.9 }, lastYear: { amount: 20.304, percentage: 17.7 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.005, totalSince: 4.135 }, storage: { current: { amount: 4.224, percentage: 24.7 }, lastYear: { amount: 3.827, percentage: 22.4 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.001, totalSince: 1.702 }, storage: { current: { amount: 2.558, percentage: 18.5 }, lastYear: { amount: 2.347, percentage: 16.9 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.003, totalSince: 3.713 }, storage: { current: { amount: 5.862, percentage: 37.8 }, lastYear: { amount: 5.780, percentage: 37.3 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.004, totalSince: 8.835 }, storage: { current: { amount: 8.070, percentage: 59.8 }, lastYear: { amount: 2.775, percentage: 20.6 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.039, totalSince: 21.556 }, storage: { current: { amount: 2.058, percentage: 47.9 }, lastYear: { amount: 2.616, percentage: 60.8 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.0, totalSince: 1.619 }, storage: { current: { amount: 1.971, percentage: 58.0 }, lastYear: { amount: 1.161, percentage: 34.1 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.133, percentage: 2.0 }, lastYear: { amount: 0.436, percentage: 6.4 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.003, totalSince: 20.190 }, storage: { current: { amount: 21.850, percentage: 41.7 }, lastYear: { amount: 10.802, percentage: 20.6 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.008, totalSince: 9.508 }, storage: { current: { amount: 8.932, percentage: 52.0 }, lastYear: { amount: 3.807, percentage: 22.2 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.0, totalSince: 0.951 }, storage: { current: { amount: 1.796, percentage: 82.4 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.004, totalSince: 10.198 }, storage: { current: { amount: 11.967, percentage: 49.9 }, lastYear: { amount: 5.182, percentage: 21.6 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.001, totalSince: 1.038 }, storage: { current: { amount: 0.968, percentage: 97.8 }, lastYear: { amount: 0.300, percentage: 30.3 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.002, totalSince: 0.841 }, storage: { current: { amount: 0.860, percentage: 100.0 }, lastYear: { amount: 0.298, percentage: 34.7 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.282 }, storage: { current: { amount: 0.272, percentage: 91.3 }, lastYear: { amount: 0.124, percentage: 41.6 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.0, totalSince: 1.723 }, storage: { current: { amount: 1.643, percentage: 97.2 }, lastYear: { amount: 0.022, percentage: 1.3 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.001, totalSince: 1.473 }, storage: { current: { amount: 1.406, percentage: 98.3 }, lastYear: { amount: 0.248, percentage: 17.3 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.236, percentage: 65.0 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.001, totalSince: 2.651 }, storage: { current: { amount: 2.794, percentage: 99.8 }, lastYear: { amount: 0.876, percentage: 31.3 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.124 }, storage: { current: { amount: 2.000, percentage: 100.0 }, lastYear: { amount: 1.397, percentage: 69.9 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.400, percentage: 98.8 }, lastYear: { amount: 2.648, percentage: 59.5 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through June 12, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:1.591, July:0.0, "Aug-Sep":0.0 }, total:112.904 },
];

export const getReportDate = (): string => "12-JUN-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.35 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 41.9% (48.2 MCM) — plateau continues for 14th day; small daily inflow sustains level. 24.2pp above last year\'s 17.7%. Arminou→Kouris transfer: 20.35 MCM since October.',
      el: 'Ο Κούρης στο 41.9% (48.2 ΕΚΜ) — οροπέδιο για 14η ημέρα· μικρή εισροή διατηρεί το επίπεδο. 24.2μ.π. πάνω από πέρυσι (17.7%). Μεταφορά Αρμίνου→Κούρης: 20.35 ΕΚΜ.',
      ru: 'Курис на 41.9% (48.2 МКМ) — плато 14 дней; небольшой приток удерживает уровень. +24.2пп выше прошлогодних 17.7%. Перекачка Арминоу→Курис: 20.35 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 24.7% (4.22 MCM) — stable, slightly above last year\'s 22.4%. Seasonal inflow 4.14 MCM, gradual recovery continuing.',
      el: 'Ο Καλαβασός στο 24.7% (4.22 ΕΚΜ) — σταθερός, ελαφρά πάνω από πέρυσι (22.4%). Εισροή σεζόν 4.14 ΕΚΜ.',
      ru: 'Калавасос на 24.7% (4.22 МКМ) — стабильно, чуть выше прошлогодних 22.4%. Приток 4.14 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.5% (2.56 MCM) — holding above last year\'s 16.9%. Seasonal inflow 1.70 MCM, slow recovery continues.',
      el: 'Η Λεύκαρα στο 18.5% (2.56 ΕΚΜ) — πάνω από πέρυσι (16.9%). Εισροή σεζόν 1.70 ΕΚΜ.',
      ru: 'Лефкара на 18.5% (2.56 МКМ) — выше прошлогодних 16.9%. Приток 1.70 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 37.8% (5.86 MCM) — easing from historical max of 5.99 MCM, above last year\'s 37.3%. Dry season drawdown underway.',
      el: 'Ο Διπόταμος στο 37.8% (5.86 ΕΚΜ) — υποχωρεί από το ιστορικό max 5.99 ΕΚΜ, πάνω από πέρυσι (37.3%). Ξηρή περίοδος.',
      ru: 'Дипотамос на 37.8% (5.86 МКМ) — снижается с исторического max 5.99 МКМ, выше прошлогодних 37.3%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 59.8% (8.07 MCM) — easing from season high of 60%, 39.2pp above last year\'s 20.6%. Highest level since 2020.',
      el: 'Η Γερμασόγεια στο 59.8% (8.07 ΕΚΜ) — υποχωρεί από το μέγιστο 60%, 39.2μ.π. πάνω από πέρυσι (20.6%). Υψηλότερο από το 2020.',
      ru: 'Гермасойя на 59.8% (8.07 МКМ) — отступает от пика 60%, +39.2пп выше прошлогодних 20.6%. Высший уровень с 2020 года.',
    },
    'Arminou': {
      en: 'Arminou at 47.9% (2.06 MCM). Seasonal inflow 21.6 MCM = 5.0× capacity; 20.35 MCM pumped to Kouris since October.',
      el: 'Ο Αρμίνου στο 47.9% (2.06 ΕΚΜ). Εισροή σεζόν: 21.6 ΕΚΜ = 5.0× χωρητικότητα· 20.35 ΕΚΜ στον Κούρη από τον Οκτώβριο.',
      ru: 'Арминоу на 47.9% (2.06 МКМ). Приток: 21.6 МКМ = 5.0× ёмкости; 20.35 МКМ перекачано в Курис с октября.',
    },
    'Polemidia': {
      en: 'Polemidia at 58.0% (1.97 MCM) — declining from season peak, 23.9pp above last year\'s 34.1%. Dry season drawdown continues.',
      el: 'Η Πολεμίδια στο 58.0% (1.97 ΕΚΜ) — μειώνεται από το μέγιστο, 23.9μ.π. πάνω από πέρυσι (34.1%). Ξηρή περίοδος.',
      ru: 'Полемидия на 58.0% (1.97 МКМ) — снижается от пика, +23.9пп выше прошлогодних 34.1%.',
    },
    'Achna': {
      en: 'Achna critically low at 2.0% (0.13 MCM), zero inflow all season. Far below last year\'s 6.4%. No recovery expected.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.0% (0.13 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (6.4%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.0% (0.13 МКМ), без притока за сезон. Далеко ниже прошлогодних 6.4%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 41.7% (21.85 MCM) — stable near season high, 21.1pp above last year\'s 20.6%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 41.7% (21.85 ΕΚΜ) — σταθερός κοντά στο μέγιστο, 21.1μ.π. πάνω από πέρυσι (20.6%). Εισροή 20.2 ΕΚΜ.',
      ru: 'Аспрокреммос на 41.7% (21.85 МКМ) — стабильно у пика, +21.1пп выше прошлогодних 20.6%. Приток 20.2 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 52.0% (8.93 MCM) — easing from season high, 29.8pp above last year\'s 22.2%. Seasonal inflow 9.51 MCM.',
      el: 'Ο Καννάβιου στο 52.0% (8.93 ΕΚΜ) — υποχωρεί ελαφρά, 29.8μ.π. πάνω από πέρυσι (22.2%). Εισροή 9.51 ΕΚΜ.',
      ru: 'Каннавиу на 52.0% (8.93 МКМ) — снижается от пика, +29.8пп выше прошлогодних 22.2%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 82.4% (1.80 MCM) — continuing dry-season decline. Was 0% last year — exceptional recovery this season.',
      el: 'Ο Μαυροκόλυμπος στο 82.4% (1.80 ΕΚΜ) — συνεχής καλοκαιρινή υποχώρηση. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 82.4% (1.80 МКМ) — продолжает снижаться. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 49.9% (11.97 MCM) — holding just below 50%, 28.3pp above last year\'s 21.6%. Slow drawdown continues.',
      el: 'Ο Εύρετου στο 49.9% (11.97 ΕΚΜ) — κάτω από 50%, 28.3μ.π. πάνω από πέρυσι (21.6%). Αργή μείωση συνεχίζεται.',
      ru: 'Эвретоу на 49.9% (11.97 МКМ) — чуть ниже 50%, +28.3пп выше прошлогодних 21.6%. Медленный спад.',
    },
    'Argaka': {
      en: 'Argaka at 97.8% (0.97 MCM) — just below full, easing from season high. Up from 30.3% last year — more than tripled.',
      el: 'Η Αργάκα στο 97.8% (0.97 ΕΚΜ) — κοντά σε πλήρης, υποχωρεί ελαφρά. Από 30.3% πέρυσι — πάνω από τριπλασιασμός.',
      ru: 'Аргака на 97.8% (0.97 МКМ) — чуть ниже полного уровня. Год назад 30.3% — более чем утроение.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), still at capacity. Up from 34.7% last year — nearly tripled year over year.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), παραμένει πλήρης. Αύξηση από 34.7% πέρυσι — σχεδόν τριπλασιασμός.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), удерживается на максимуме. Рост с 34.7% год назад.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 91.3% (0.27 MCM) — declining from full as dry season progresses. Up from 41.6% last year; more than doubled.',
      el: 'Η Αγία Μαρίνα στο 91.3% (0.27 ΕΚΜ) — υποχωρεί από πλήρης καθώς η ξηρή περίοδος προχωρά. Από 41.6% πέρυσι.',
      ru: 'Агия Марина на 91.3% (0.27 МКМ) — снижается в ходе сухого сезона. Год назад 41.6% — более чем удвоение.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 97.2% (1.64 MCM) — easing from full. Was 1.3% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 97.2% (1.64 ΕΚΜ) — υποχωρούν από πλήρης. Από 1.3% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 97.2% (1.64 МКМ) — снижается с полного уровня. Год назад 1.3%.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 98.3% (1.41 MCM) — effectively full. Was 17.3% last year — 5.7× year-over-year recovery.',
      el: 'Ο Ξυλιάτος στο 98.3% (1.41 ΕΚΜ) — ουσιαστικά πλήρης. Από 17.3% πέρυσι — 5.7× ανάκαμψη.',
      ru: 'Ксилиатос на 98.3% (1.41 МКМ) — фактически полон. Год назад 17.3% — восстановление в 5.7×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 65.0% last year, at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 65.0% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 65.0% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 99.8% (2.79 MCM) — essentially full, very slow decline. Was 31.3% last year — 3× year-over-year recovery.',
      el: 'Ο Ταμασός στο 99.8% (2.79 ΕΚΜ) — ουσιαστικά πλήρης, πολύ αργή υποχώρηση. Από 31.3% πέρυσι — 3× ανάκαμψη.',
      ru: 'Тамассос на 99.8% (2.79 МКМ) — фактически полон, очень медленно снижается. Год назад 31.3% — восстановление в 3×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 69.9% last year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 69.9% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 69.9% год назад.',
    },
    'Solea': {
      en: 'Solea at 98.8% (4.40 MCM) — holding near full as dry season progresses. Up from 59.5% last year — 1.66× year-over-year improvement.',
      el: 'Η Σολέα στο 98.8% (4.40 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 59.5% πέρυσι — 1.66× βελτίωση.',
      ru: 'Солеа на 98.8% (4.40 МКМ) — удерживается вблизи полного уровня. Рост с 59.5% год назад — улучшение в 1.66×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (2 — 12 Ιουνίου 2026)

Συνολική αποθήκευση **42.4%** (123.2 ΕΚΜ) — **14η συνεχόμενη ημέρα** χωρίς αλλαγή στην κεφαλίδα, ενώ τα φράγματα συνεχίζουν να αποστραγγίζονται ήρεμα κατά τη διάρκεια της ξηρής περιόδου. Σήμερα εισρέουσαν **0.12 ΕΚΜ** — λίγο περισσότερο από χθες. **+21.7μ.π. πάνω από πέρυσι** (20.7%). Εισροή σεζόν 25/26: **112.9 ΕΚΜ**. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): **20.35 ΕΚΜ** από τον Οκτώβριο.

**Αξιοσημείωτα:**
- **[Αρμίνου](/el/dam/arminou/) 47.9%** (+0.2μ.π.) — μικρή εισροή 0.039 ΕΚΜ εξακολουθεί να αντισταθμίζει την άντληση στον [Κούρη](/el/dam/kouris/)
- **[Μαυροκόλυμπος](/el/dam/mavrokolympos/) 82.4%** (-0.1μ.π.) — σταθερή καλοκαιρινή υποχώρηση· ήταν 0% πέρυσι
- **[Εύρετου](/el/dam/evretou/) 49.9%** — παραμένει κάτω από 50% για 2η ημέρα
- [Κούρης](/el/dam/kouris/) **41.9%** (48.2 ΕΚΜ) · [Γερμασόγεια](/el/dam/germasoyeia/) **59.8%** — σταθερά κοντά στα μέγιστα σεζόν
- **3 φράγματα στο 100%** — [Πόμος](/el/dam/pomos/), [Καλοπαναγιώτης](/el/dam/kalopanagiotis/), [Κλήρου-Μαλούντα](/el/dam/klirou-malounta/); [Ταμασός](/el/dam/tamassos/) 99.8%, [Σολέα](/el/dam/solea/) 98.8%
- [Αχνά](/el/dam/achna/) **2.0%** — μηδέν εισροή όλη τη σεζόν
- Υπουργικό Συμβούλιο ενέκρινε επιπλέον **3.5 ΕΚΜ** νερού για άρδευση (2.0 ΕΚΜ Πάφος + 1.5 ΕΚΜ ΝΑΒ)

**Στα μέσα:**
- [Υπουργικό: Έγκριση 3,5 εκ. κυβικά μέτρα επιπλέον νερού για άρδευση](https://cyprus-mail.com/2026/06/09/cabinet-approves-3-5-million-cubic-metres-of-additional-water-supply) — Cyprus Mail
- [Τα επίπεδα νερού στα φράγματα σχεδόν διπλάσια σε σχέση με πέρυσι](https://cyprus-mail.com/2026/06/02/dam-levels-almost-double-those-of-last-year) — Cyprus Mail
- [ΤΑΥ: Στο 42,4% η πληρότητα των φραγμάτων — Διπλάσια από πέρυσι](https://www.offsite.com.cy/eidiseis/koinonia/tay-sto-424-i-plirotita-ton-fragmaton-diplasia-apo-perysi) — Offsite
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (2 — 12 июня 2026)

Общий запас **42.4%** (123.2 МКМ) — **14-й день подряд без изменений** в заголовке: водохранилища продолжают медленно снижаться в условиях сухого сезона. Сегодня поступило **0.12 МКМ** — немного больше вчерашнего. **+21.7пп выше прошлогодних** (20.7%). Приток сезона 25/26: **112.9 МКМ**. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): **20.35 МКМ** с октября.

**Основные изменения:**
- **[Арминоу](/ru/dam/arminou/) 47.9%** (+0.2пп) — небольшой приток 0.039 МКМ/день продолжает компенсировать перекачку в [Курис](/ru/dam/kouris/)
- **[Мавроколимпос](/ru/dam/mavrokolympos/) 82.4%** (-0.1пп) — устойчивое летнее снижение; год назад 0%
- **[Эвретоу](/ru/dam/evretou/) 49.9%** — остаётся ниже отметки 50% второй день подряд
- [Курис](/ru/dam/kouris/) **41.9%** (48.2 МКМ) · [Гермасойя](/ru/dam/germasoyeia/) **59.8%** — стабильно у сезонных максимумов
- **3 дамбы на 100%** — [Помос](/ru/dam/pomos/), [Калопанайотис](/ru/dam/kalopanagiotis/), [Клиру-Малунта](/ru/dam/klirou-malounta/); [Тамассос](/ru/dam/tamassos/) 99.8%, [Солеа](/ru/dam/solea/) 98.8%
- [Ахна](/ru/dam/achna/) **2.0%** — без притока за весь сезон
- Кабмин утвердил дополнительные **3.5 МКМ** воды для орошения (2.0 МКМ — Пафос, 1.5 МКМ — Южный канал)

**В СМИ:**
- [Кабмин одобрил дополнительно 3,5 млн кубометров воды для орошения](https://cyprus-mail.com/2026/06/09/cabinet-approves-3-5-million-cubic-metres-of-additional-water-supply) — Cyprus Mail
- [Уровень воды в дамбах Кипра вырос до 42,4%](https://ruscyprus.com/news/uroven-vody-v-dambah-kipra-vyros-do-42-4-na/58033) — RusCyprus
- [Уровень воды в дамбах почти удвоился по сравнению с прошлым годом](https://cyprus-mail.com/2026/06/02/dam-levels-almost-double-those-of-last-year) — Cyprus Mail
`;
  }
  return `
### Recent Changes (June 2 — 12, 2026)

Total storage at **42.4%** (123.2 MCM) — **14th straight day unchanged** in the headline, as reservoirs continue their quiet drawdown through the dry season. Today's inflow of **0.12 MCM** was slightly more than yesterday. **+21.7pp above last year** (20.7%). Season total inflow: **112.9 MCM**. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: **20.35 MCM** since October.

**Notable movements:**
- **[Arminou](/dam/arminou/) 47.9%** (+0.2pp) — small 0.039 MCM/day inflow still offsetting ongoing pumping to [Kouris](/dam/kouris/)
- **[Mavrokolympos](/dam/mavrokolympos/) 82.4%** (-0.1pp) — steady summer decline from peak; was 0% last year
- **[Evretou](/dam/evretou/) 49.9%** — holding just below 50% for second consecutive day
- [Kouris](/dam/kouris/) **41.9%** (48.2 MCM) · [Germasoyeia](/dam/germasoyeia/) **59.8%** — stable near season highs
- **3 dams at 100%** — [Pomos](/dam/pomos/), [Kalopanagiotis](/dam/kalopanagiotis/), [Klirou-Malounta](/dam/klirou-malounta/); [Tamassos](/dam/tamassos/) 99.8%, [Solea](/dam/solea/) 98.8%
- [Achna](/dam/achna/) **2.0%** — zero inflow all season
- Cabinet approved extra **3.5 MCM** for irrigation on June 9: 2.0 MCM for Paphos, 1.5 MCM for Southern Conveyor

**In the media:**
- [Cabinet approves 3.5 million cubic metres of additional water supply](https://cyprus-mail.com/2026/06/09/cabinet-approves-3-5-million-cubic-metres-of-additional-water-supply) — Cyprus Mail
- [Dam levels almost double those of last year](https://cyprus-mail.com/2026/06/02/dam-levels-almost-double-those-of-last-year) — Cyprus Mail
- [WDD: Dam fullness at 42.4% — double last year's](https://www.offsite.com.cy/eidiseis/koinonia/tay-sto-424-i-plirotita-ton-fragmaton-diplasia-apo-perysi) — Offsite
`;
};
