import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.016, totalSince: 25.907 }, storage: { current: { amount: 47.129, percentage: 41.0 }, lastYear: { amount: 18.232, percentage: 15.9 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.197 }, storage: { current: { amount: 4.155, percentage: 24.3 }, lastYear: { amount: 3.020, percentage: 17.7 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.724 }, storage: { current: { amount: 2.534, percentage: 18.3 }, lastYear: { amount: 2.260, percentage: 16.3 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.007, totalSince: 3.761 }, storage: { current: { amount: 5.441, percentage: 35.1 }, lastYear: { amount: 5.091, percentage: 32.8 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.015, totalSince: 8.991 }, storage: { current: { amount: 7.749, percentage: 57.4 }, lastYear: { amount: 2.240, percentage: 16.6 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.000, totalSince: 22.178 }, storage: { current: { amount: 2.464, percentage: 57.3 }, lastYear: { amount: 2.392, percentage: 55.6 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.001, totalSince: 1.621 }, storage: { current: { amount: 1.715, percentage: 50.4 }, lastYear: { amount: 1.057, percentage: 31.1 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.127, percentage: 1.9 }, lastYear: { amount: 0.380, percentage: 5.6 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.008, totalSince: 20.282 }, storage: { current: { amount: 21.228, percentage: 40.5 }, lastYear: { amount: 9.357, percentage: 17.9 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.003, totalSince: 9.642 }, storage: { current: { amount: 8.558, percentage: 49.8 }, lastYear: { amount: 3.392, percentage: 19.8 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.599, percentage: 73.3 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 11.207, percentage: 46.7 }, lastYear: { amount: 4.607, percentage: 19.2 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.871, percentage: 88.0 }, lastYear: { amount: 0.183, percentage: 18.5 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.766, percentage: 89.1 }, lastYear: { amount: 0.215, percentage: 25.0 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.257, percentage: 86.2 }, lastYear: { amount: 0.061, percentage: 20.5 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.531, percentage: 90.6 }, lastYear: { amount: 0.016, percentage: 0.9 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.001, totalSince: 1.494 }, storage: { current: { amount: 1.342, percentage: 93.8 }, lastYear: { amount: 0.183, percentage: 12.8 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.312 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.172, percentage: 47.4 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: -0.003, totalSince: 2.644 }, storage: { current: { amount: 2.674, percentage: 95.5 }, lastYear: { amount: 0.769, percentage: 27.5 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.001, totalSince: 1.152 }, storage: { current: { amount: 1.931, percentage: 96.6 }, lastYear: { amount: 1.319, percentage: 66.0 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.004, totalSince: 2.628 }, storage: { current: { amount: 4.208, percentage: 94.5 }, lastYear: { amount: 2.428, percentage: 54.5 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through July 15, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:0.769, "Aug-Sep":0.0 }, total:115.152 },
];

export const getReportDate = (): string => "15-JUL-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 41.0% (47.1 MCM) — essentially flat, 25.1pp above last year\'s 15.9%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 41.0% (47.1 ΕΚΜ) — σχεδόν αμετάβλητος. 25.1μ.π. πάνω από πέρυσι (15.9%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 41.0% (47.1 МКМ) — почти без изменений. +25.1пп выше прошлогодних 15.9%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 24.3% (4.16 MCM) — stable, well above last year\'s 17.7%. Seasonal inflow 4.20 MCM, slow drawdown continues.',
      el: 'Ο Καλαβασός στο 24.3% (4.16 ΕΚΜ) — σταθερός, πάνω από πέρυσι (17.7%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 24.3% (4.16 МКМ) — стабильно, выше прошлогодних 17.7%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.3% (2.53 MCM) — essentially unchanged, above last year\'s 16.3%. Seasonal inflow 1.72 MCM.',
      el: 'Η Λεύκαρα στο 18.3% (2.53 ΕΚΜ) — αμετάβλητη, πάνω από πέρυσι (16.3%). Εισροή σεζόν 1.72 ΕΚΜ.',
      ru: 'Лефкара на 18.3% (2.53 МКМ) — без изменений, выше прошлогодних 16.3%. Приток 1.72 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 35.1% (5.44 MCM) — easing in dry season; 2.3pp above last year\'s 32.8%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 35.1% (5.44 ΕΚΜ) — υποχωρεί στην ξηρή περίοδο, 2.3μ.π. πάνω από πέρυσι (32.8%).',
      ru: 'Дипотамос на 35.1% (5.44 МКМ) — снижение в сухой сезон, +2.3пп выше прошлогодних 32.8%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 57.4% (7.75 MCM) — holding near season high, 40.8pp above last year\'s 16.6%. Highest level since 2020.',
      el: 'Η Γερμασόγεια στο 57.4% (7.75 ΕΚΜ) — κοντά στο μέγιστο σεζόν. 40.8μ.π. πάνω από πέρυσι (16.6%).',
      ru: 'Гермасойя на 57.4% (7.75 МКМ) — вблизи максимума сезона. +40.8пп выше прошлогодних 16.6%.',
    },
    'Arminou': {
      en: 'Arminou at 57.3% (2.46 MCM) — easing slightly off its season high, still 1.7pp above last year\'s 55.6%. Season inflow 22.2 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 57.3% (2.46 ΕΚΜ) — ελαφρά υποχώρηση από το μέγιστο σεζόν. Εισροή σεζόν: 22.2 ΕΚΜ = 5.2× χωρητικότητα.',
      ru: 'Арминоу на 57.3% (2.46 МКМ) — небольшое снижение от максимума сезона. Приток сезона: 22.2 МКМ = 5.2× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 50.4% (1.72 MCM) — continuing decline from season peak; still 19.3pp above last year\'s 31.1%.',
      el: 'Η Πολεμίδια στο 50.4% (1.72 ΕΚΜ) — συνεχής υποχώρηση από το μέγιστο. 19.3μ.π. πάνω από πέρυσι (31.1%).',
      ru: 'Полемидия на 50.4% (1.72 МКМ) — продолжает снижаться от пика; +19.3пп выше прошлогодних 31.1%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.9% (0.13 MCM), zero inflow all season. Far below last year\'s 5.6%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.9% (0.13 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (5.6%).',
      ru: 'Ахна критически низкая — 1.9% (0.13 МКМ), без притока за сезон. Далеко ниже прошлогодних 5.6%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 40.5% (21.23 MCM) — slow drawdown, 22.6pp above last year\'s 17.9%. Seasonal inflow 20.3 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 40.5% (21.23 ΕΚΜ) — αργή υποχώρηση, 22.6μ.π. πάνω από πέρυσι (17.9%).',
      ru: 'Аспрокреммос на 40.5% (21.23 МКМ) — медленное снижение, +22.6пп выше прошлогодних 17.9%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 49.8% (8.56 MCM) — easing from season high, 30.0pp above last year\'s 19.8%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 49.8% (8.56 ΕΚΜ) — υποχωρεί ελαφρά, 30.0μ.π. πάνω από πέρυσι (19.8%).',
      ru: 'Каннавиу на 49.8% (8.56 МКМ) — снижается от пика, +30.0пп выше прошлогодних 19.8%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 73.3% (1.60 MCM) — steady decline continues. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 73.3% (1.60 ΕΚΜ) — σταθερή υποχώρηση συνεχίζεται. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 73.3% (1.60 МКМ) — устойчивое снижение продолжается. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 46.7% (11.21 MCM) — drifting further below 50%; 27.5pp above last year\'s 19.2%.',
      el: 'Ο Εύρετου στο 46.7% (11.21 ΕΚΜ) — υποχωρεί περαιτέρω κάτω από 50%. 27.5μ.π. πάνω από πέρυσι (19.2%).',
      ru: 'Эвретоу на 46.7% (11.21 МКМ) — опускается дальше ниже 50%. +27.5пп выше прошлогодних 19.2%.',
    },
    'Argaka': {
      en: 'Argaka at 88.0% (0.87 MCM) — unchanged from July 14. Up from 18.5% last year — more than 4× year over year.',
      el: 'Η Αργάκα στο 88.0% (0.87 ΕΚΜ) — αμετάβλητη από τις 14 Ιουλίου. Από 18.5% πέρυσι — πάνω από 4× ανάκαμψη.',
      ru: 'Аргака на 88.0% (0.87 МКМ) — без изменений с 14 июля. Год назад 18.5% — более чем 4-кратный рост.',
    },
    'Pomos': {
      en: 'Pomos at 89.1% (0.77 MCM) — steady near full. Up from 25.0% last year — more than tripled.',
      el: 'Ο Πόμος στο 89.1% (0.77 ΕΚΜ) — σταθερός κοντά στο πλήρες. Από 25.0% πέρυσι — πάνω από τριπλασιασμός.',
      ru: 'Помос на 89.1% (0.77 МКМ) — стабильно у полного уровня. Год назад 25.0%.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 86.2% (0.26 MCM) — unchanged for days. Up from 20.5% last year — more than 4× year-over-year recovery.',
      el: 'Η Αγία Μαρίνα στο 86.2% (0.26 ΕΚΜ) — αμετάβλητη επί ημέρες. Από 20.5% πέρυσι — πάνω από 4× ανάκαμψη.',
      ru: 'Агия Марина на 86.2% (0.26 МКМ) — без изменений уже несколько дней. Год назад 20.5% — рост более чем в 4×.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 90.6% (1.53 MCM) — slow decline from peak. Was 0.9% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 90.6% (1.53 ΕΚΜ) — αργή υποχώρηση. Από 0.9% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 90.6% (1.53 МКМ) — медленное снижение от пика. Год назад 0.9% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 93.8% (1.34 MCM) — very slow decline continues. Was 12.8% last year — 7.3× year-over-year recovery.',
      el: 'Ο Ξυλιάτος στο 93.8% (1.34 ΕΚΜ) — πολύ αργή υποχώρηση συνεχίζεται. Από 12.8% πέρυσι — 7.3× ανάκαμψη.',
      ru: 'Ксилиатос на 93.8% (1.34 МКМ) — очень медленное снижение продолжается. Год назад 12.8% — восстановление в 7.3×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 47.4% last year, holding at capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 47.4% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 47.4% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 95.5% (2.67 MCM) — easing slowly from full. Was 27.5% last year — 3.5× year-over-year recovery.',
      el: 'Ο Ταμασός στο 95.5% (2.67 ΕΚΜ) — αργή υποχώρηση από το πλήρες. Από 27.5% πέρυσι — 3.5× ανάκαμψη.',
      ru: 'Тамассос на 95.5% (2.67 МКМ) — медленное снижение от полного уровня. Год назад 27.5% — восстановление в 3.5×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 96.6% (1.93 MCM) — steady near full. Up from 66.0% last year.',
      el: 'Η Κλήρου-Μαλούντα στο 96.6% (1.93 ΕΚΜ) — σταθερή κοντά στο πλήρες. Αύξηση από 66.0% πέρυσι.',
      ru: 'Клиру-Малунта на 96.6% (1.93 МКМ) — стабильно у полного уровня. Рост с 66.0% год назад.',
    },
    'Solea': {
      en: 'Solea at 94.5% (4.21 MCM) — holding near full as dry season progresses. Up from 54.5% last year — 1.73× year-over-year improvement.',
      el: 'Η Σολέα στο 94.5% (4.21 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 54.5% πέρυσι — 1.73× βελτίωση.',
      ru: 'Солеа на 94.5% (4.21 МКМ) — удерживается вблизи полного уровня. Рост с 54.5% год назад — улучшение в 1.73×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (14 — 15 Ιουλίου 2026)

Συνολική αποθήκευση **40.9%** (119.0 ΕΚΜ) — σχεδόν αμετάβλητη από 41.0% χθες, καθώς η καλοκαιρινή αποστράγγιση παραμένει η πιο αργή εδώ και χρόνια. Το χάσμα με πέρυσι παραμένει κοντά στο **+22.8μ.π.** Εισροή σεζόν 25/26: **115.2 ΕΚΜ** (Ιούλιος: 0.77 ΕΚΜ). Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**, αμετάβλητη.

**Αξιοσημείωτα:**
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **73.3%** (-0.3μ.π.) — η μεγαλύτερη ημερήσια πτώση, συνεχίζει τη σταθερή υποχώρηση
- [Ταμασός](/el/dam/tamassos/) **95.5%** (-0.2μ.π.) και [Βυζακιά](/el/dam/vyzakia/) **90.6%** (-0.2μ.π.) — αργή υποχώρηση από το πλήρες
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — παραμένει το μόνο φράγμα σε υπερχείλιση
- [Αχνά](/el/dam/achna/) **1.9%** — αμετάβλητη, μηδέν εισροή όλη τη σεζόν

**Στα μέσα:**
- [Government investing €168m to tackle water shortage, minister says](https://cyprus-mail.com/2026/07/05/government-investing-e168m-to-tackle-water-shortage-minister-says) — Cyprus Mail
- [Τελευταίες βροχές: Μικρή συνεισφορά στα φράγματα, όμως «στρώνουν χαλί» για πρώιμες μεγάλες εισροές](https://www.politis.com.cy/politis-news/cyprus/1018398/teleftaies-vrokhes-mikri-sineisfora-sta-fraghmata-omos-strwnoyn-khali-ghia-prwimes-meghales-eisroes) — Politis
- [MPs warn water crisis threatens future of farming](https://cyprus-mail.com/2026/06/30/mps-warn-water-crisis-threatens-future-of-farming) — Cyprus Mail
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (14 — 15 июля 2026)

Общий запас **40.9%** (119.0 МКМ) — почти без изменений с 41.0% вчера, летний расход по-прежнему самый медленный за последние годы. Разрыв с прошлым годом держится около **+22.8пп**. Приток сезона 25/26: **115.2 МКМ** (июль: 0.77 МКМ). Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/) держится на **20.44 МКМ**, без изменений.

**Основные изменения:**
- [Мавроколимпос](/ru/dam/mavrokolympos/) **73.3%** (-0.3пп) — крупнейшее суточное снижение, продолжает устойчиво снижаться
- [Тамассос](/ru/dam/tamassos/) **95.5%** (-0.2пп) и [Визакия](/ru/dam/vyzakia/) **90.6%** (-0.2пп) — медленное снижение от полного уровня
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — по-прежнему единственное переливающееся водохранилище
- [Ахна](/ru/dam/achna/) **1.9%** — без изменений, без притока за весь сезон

**В СМИ:**
- [Government investing €168m to tackle water shortage, minister says](https://cyprus-mail.com/2026/07/05/government-investing-e168m-to-tackle-water-shortage-minister-says) — Cyprus Mail
- [Летние дожди дают небольшую подпитку водохранилищам, но готовят почву для больших притоков](https://www.politis.com.cy/politis-news/cyprus/1018398/teleftaies-vrokhes-mikri-sineisfora-sta-fraghmata-omos-strwnoyn-khali-ghia-prwimes-meghales-eisroes) — Politis
- [MPs warn water crisis threatens future of farming](https://cyprus-mail.com/2026/06/30/mps-warn-water-crisis-threatens-future-of-farming) — Cyprus Mail
`;
  }
  return `
### Recent Changes (July 14 — July 15, 2026)

Total storage held at **40.9%** (119.0 MCM) — essentially unchanged from 41.0% yesterday, keeping the slowest summer drawdown pace in years. The gap over last year holds near **+22.8pp**. Season total inflow: **115.2 MCM** (July so far: 0.77 MCM). The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**, unchanged.

**Notable movements:**
- [Mavrokolympos](/dam/mavrokolympos/) **73.3%** (-0.3pp) — the largest single-day drop, continuing its steady decline
- [Tamassos](/dam/tamassos/) **95.5%** (-0.2pp) and [Vyzakia](/dam/vyzakia/) **90.6%** (-0.2pp) — easing slowly off full capacity
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing
- [Achna](/dam/achna/) **1.9%** — unchanged, zero inflow all season

**In the media:**
- [Government investing €168m to tackle water shortage, minister says](https://cyprus-mail.com/2026/07/05/government-investing-e168m-to-tackle-water-shortage-minister-says) — Cyprus Mail
- [Summer rains give reservoirs a small boost, but set up conditions for larger inflows ahead](https://www.politis.com.cy/politis-news/cyprus/1018398/teleftaies-vrokhes-mikri-sineisfora-sta-fraghmata-omos-strwnoyn-khali-ghia-prwimes-meghales-eisroes) — Politis
- [MPs warn water crisis threatens future of farming](https://cyprus-mail.com/2026/06/30/mps-warn-water-crisis-threatens-future-of-farming) — Cyprus Mail
`;
};
