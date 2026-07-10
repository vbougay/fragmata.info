import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.038, totalSince: 25.830 }, storage: { current: { amount: 47.370, percentage: 41.2 }, lastYear: { amount: 18.475, percentage: 16.1 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.197 }, storage: { current: { amount: 4.187, percentage: 24.5 }, lastYear: { amount: 3.172, percentage: 18.5 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 2.541, percentage: 18.3 }, lastYear: { amount: 2.276, percentage: 16.4 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.750 }, storage: { current: { amount: 5.516, percentage: 35.6 }, lastYear: { amount: 5.202, percentage: 33.6 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.959 }, storage: { current: { amount: 7.810, percentage: 57.9 }, lastYear: { amount: 2.325, percentage: 17.2 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.016, totalSince: 22.154 }, storage: { current: { amount: 2.454, percentage: 57.1 }, lastYear: { amount: 2.428, percentage: 56.5 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.742, percentage: 51.2 }, lastYear: { amount: 1.072, percentage: 31.5 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.127, percentage: 1.9 }, lastYear: { amount: 0.389, percentage: 5.7 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.243 }, storage: { current: { amount: 21.314, percentage: 40.7 }, lastYear: { amount: 9.601, percentage: 18.3 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.003, totalSince: 9.630 }, storage: { current: { amount: 8.626, percentage: 50.2 }, lastYear: { amount: 3.464, percentage: 20.2 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.638, percentage: 75.1 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 11.348, percentage: 47.3 }, lastYear: { amount: 4.709, percentage: 19.6 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.893, percentage: 90.2 }, lastYear: { amount: 0.202, percentage: 20.4 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.783, percentage: 91.0 }, lastYear: { amount: 0.226, percentage: 26.3 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.257, percentage: 86.2 }, lastYear: { amount: 0.066, percentage: 22.1 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.554, percentage: 92.0 }, lastYear: { amount: 0.020, percentage: 1.2 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.357, percentage: 94.9 }, lastYear: { amount: 0.183, percentage: 12.8 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.312 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.180, percentage: 49.6 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.697, percentage: 96.3 }, lastYear: { amount: 0.783, percentage: 28.0 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.922, percentage: 96.1 }, lastYear: { amount: 1.328, percentage: 66.4 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 4.234, percentage: 95.1 }, lastYear: { amount: 2.456, percentage: 55.1 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through July 10, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:0.569, "Aug-Sep":0.0 }, total:114.952 },
];

export const getReportDate = (): string => "10-JUL-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 41.2% (47.4 MCM) — essentially flat overnight; 25.1pp above last year\'s 16.1%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 41.2% (47.4 ΕΚΜ) — σχεδόν αμετάβλητος. 25.1μ.π. πάνω από πέρυσι (16.1%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 41.2% (47.4 МКМ) — почти без изменений. +25.1пп выше прошлогодних 16.1%. Перекачка Арминоу→Курис: 20.44 МКМ с октября.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 24.5% (4.19 MCM) — stable, above last year\'s 18.5%. Seasonal inflow 4.20 MCM, slow drawdown continues.',
      el: 'Ο Καλαβασός στο 24.5% (4.19 ΕΚΜ) — σταθερός, πάνω από πέρυσι (18.5%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 24.5% (4.19 МКМ) — стабильно, выше прошлогодних 18.5%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.3% (2.54 MCM) — holding above last year\'s 16.4%. Seasonal inflow 1.72 MCM, slow drawdown continues.',
      el: 'Η Λεύκαρα στο 18.3% (2.54 ΕΚΜ) — πάνω από πέρυσι (16.4%). Εισροή σεζόν 1.72 ΕΚΜ.',
      ru: 'Лефкара на 18.3% (2.54 МКМ) — выше прошлогодних 16.4%. Приток 1.72 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 35.6% (5.52 MCM) — easing in dry season; 2.0pp above last year\'s 33.6%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 35.6% (5.52 ΕΚΜ) — υποχωρεί στην ξηρή περίοδο, 2.0μ.π. πάνω από πέρυσι (33.6%). Ιστορικό max τον Μάιο.',
      ru: 'Дипотамос на 35.6% (5.52 МКМ) — снижение в сухой сезон, +2.0пп выше прошлогодних 33.6%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 57.9% (7.81 MCM) — slow decline from season high, 40.7pp above last year\'s 17.2%. Highest level since 2020.',
      el: 'Η Γερμασόγεια στο 57.9% (7.81 ΕΚΜ) — αργή υποχώρηση από το μέγιστο. 40.7μ.π. πάνω από πέρυσι (17.2%).',
      ru: 'Гермасойя на 57.9% (7.81 МКМ) — медленное снижение от сезонного максимума, +40.7пп выше прошлогодних 17.2%.',
    },
    'Arminou': {
      en: 'Arminou at 57.1% (2.45 MCM) — new season high, still climbing, defying the seasonal trend. Season inflow 22.2 MCM = 5.2× capacity; 20.44 MCM pumped to Kouris.',
      el: 'Ο Αρμίνου στο 57.1% (2.45 ΕΚΜ) — νέο μέγιστο σεζόν, ακόμα ανιών. Εισροή σεζόν: 22.2 ΕΚΜ = 5.2× χωρητικότητα.',
      ru: 'Арминоу на 57.1% (2.45 МКМ) — новый максимум сезона, продолжает расти. Приток сезона: 22.2 МКМ = 5.2× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 51.2% (1.74 MCM) — continuing decline from season peak; still 19.7pp above last year\'s 31.5%.',
      el: 'Η Πολεμίδια στο 51.2% (1.74 ΕΚΜ) — συνεχής υποχώρηση από το μέγιστο. 19.7μ.π. πάνω από πέρυσι (31.5%).',
      ru: 'Полемидия на 51.2% (1.74 МКМ) — продолжает снижаться от пика; +19.7пп выше прошлогодних 31.5%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.9% (0.13 MCM), zero inflow all season. Far below last year\'s 5.7%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.9% (0.13 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (5.7%).',
      ru: 'Ахна критически низкая — 1.9% (0.13 МКМ), без притока за сезон. Далеко ниже прошлогодних 5.7%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 40.7% (21.31 MCM) — slow drawdown, 22.4pp above last year\'s 18.3%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 40.7% (21.31 ΕΚΜ) — αργή υποχώρηση, 22.4μ.π. πάνω από πέρυσι (18.3%). Εισροή 20.2 ΕΚΜ.',
      ru: 'Аспрокреммос на 40.7% (21.31 МКМ) — медленное снижение, +22.4пп выше прошлогодних 18.3%. Приток 20.2 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 50.2% (8.63 MCM) — easing from season high, 30.0pp above last year\'s 20.2%. Seasonal inflow 9.63 MCM.',
      el: 'Ο Καννάβιου στο 50.2% (8.63 ΕΚΜ) — υποχωρεί ελαφρά, 30.0μ.π. πάνω από πέρυσι (20.2%). Εισροή 9.63 ΕΚΜ.',
      ru: 'Каннавиу на 50.2% (8.63 МКМ) — снижается от пика, +30.0пп выше прошлогодних 20.2%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 75.1% (1.64 MCM) — steady decliner this week. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 75.1% (1.64 ΕΚΜ) — σταθερή υποχώρηση εβδομάδας. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 75.1% (1.64 МКМ) — устойчивое снижение за неделю. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 47.3% (11.35 MCM) — drifting below 50%; 27.7pp above last year\'s 19.6%. Gradual drawdown continues.',
      el: 'Ο Εύρετου στο 47.3% (11.35 ΕΚΜ) — υποχωρεί κάτω από 50%. 27.7μ.π. πάνω από πέρυσι (19.6%).',
      ru: 'Эвретоу на 47.3% (11.35 МКМ) — опускается ниже 50%. +27.7пп выше прошлогодних 19.6%.',
    },
    'Argaka': {
      en: 'Argaka at 90.2% (0.89 MCM) — easing steadily from full, down 2.0pp in a day. Up from 20.4% last year — more than 4× year over year.',
      el: 'Η Αργάκα στο 90.2% (0.89 ΕΚΜ) — σταθερή υποχώρηση, -2.0μ.π. σε μία ημέρα. Από 20.4% πέρυσι — πάνω από 4× ανάκαμψη.',
      ru: 'Аргака на 90.2% (0.89 МКМ) — заметное снижение, -2.0пп за сутки. Год назад 20.4% — более чем 4-кратный рост.',
    },
    'Pomos': {
      en: 'Pomos at 91.0% (0.78 MCM) — easing below full. Up from 26.3% last year — more than tripled.',
      el: 'Ο Πόμος στο 91.0% (0.78 ΕΚΜ) — αργή υποχώρηση κάτω από 100%. Από 26.3% πέρυσι — πάνω από τριπλασιασμός.',
      ru: 'Помос на 91.0% (0.78 МКМ) — медленное снижение. Год назад 26.3%.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 86.2% (0.26 MCM) — holding steady. Up from 22.1% last year — 3.89× year-over-year recovery.',
      el: 'Η Αγία Μαρίνα στο 86.2% (0.26 ΕΚΜ) — σταθερή. Αύξηση από 22.1% πέρυσι — 3.89× ανάκαμψη.',
      ru: 'Агия Марина на 86.2% (0.26 МКМ) — стабильно. Год назад 22.1% — восстановление в 3.89×.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 92.0% (1.55 MCM) — slow decline from peak. Was 1.2% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 92.0% (1.55 ΕΚΜ) — αργή υποχώρηση. Από 1.2% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 92.0% (1.55 МКМ) — медленное снижение. Год назад 1.2% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 94.9% (1.36 MCM) — effectively full, very slow decline. Was 12.8% last year — 7.4× year-over-year recovery.',
      el: 'Ο Ξυλιάτος στο 94.9% (1.36 ΕΚΜ) — ουσιαστικά πλήρης, πολύ αργή υποχώρηση. Από 12.8% πέρυσι — 7.4× ανάκαμψη.',
      ru: 'Ксилиатос на 94.9% (1.36 МКМ) — фактически полон, очень медленное снижение. Год назад 12.8% — восстановление в 7.4×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 49.6% last year, holding at capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 49.6% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 49.6% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 96.3% (2.70 MCM) — essentially full, very slow decline. Was 28.0% last year — 3.4× year-over-year recovery.',
      el: 'Ο Ταμασός στο 96.3% (2.70 ΕΚΜ) — ουσιαστικά πλήρης. Από 28.0% πέρυσι — 3.4× ανάκαμψη.',
      ru: 'Тамассос на 96.3% (2.70 МКМ) — фактически полон. Год назад 28.0% — восстановление в 3.4×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 96.1% (1.92 MCM) — easing below full since early July. Up from 66.4% last year.',
      el: 'Η Κλήρου-Μαλούντα στο 96.1% (1.92 ΕΚΜ) — υποχωρεί κάτω από 100% από αρχές Ιουλίου. Αύξηση από 66.4% πέρυσι.',
      ru: 'Клиру-Малунта на 96.1% (1.92 МКМ) — снижается ниже полного уровня с начала июля. Рост с 66.4% год назад.',
    },
    'Solea': {
      en: 'Solea at 95.1% (4.23 MCM) — holding near full as dry season progresses. Up from 55.1% last year — 1.72× year-over-year improvement.',
      el: 'Η Σολέα στο 95.1% (4.23 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 55.1% πέρυσι — 1.72× βελτίωση.',
      ru: 'Солеа на 95.1% (4.23 МКМ) — удерживается вблизи полного уровня. Рост с 55.1% год назад — улучшение в 1.72×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (9 — 10 Ιουλίου 2026)

Συνολική αποθήκευση **41.2%** (119.9 ΕΚΜ) — σχεδόν αμετάβλητη σε 24 ώρες, η πιο αργή αποστράγγιση καλοκαιριού των τελευταίων ετών συνεχίζεται. Το χάσμα με πέρυσι στα **+22.7μ.π.** Εισροή σεζόν 25/26: **115.0 ΕΚΜ** (Ιούλιος: 0.57 ΕΚΜ). Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): **20.44 ΕΚΜ** από τον Οκτώβριο.

**Αξιοσημείωτα:**
- **[Αρμίνου](/el/dam/arminou/) 57.1%** (+0.3μ.π.) — νέο μέγιστο σεζόν, μοναδικός ανιών· οι μικρές εισροές υπερβαίνουν την άντληση προς [Κούρης](/el/dam/kouris/)
- **[Αργάκα](/el/dam/argaka/) 90.2%** (-2.0μ.π.) — η πιο αισθητή πτώση της ημέρας, υποχωρεί πιο απότομα από τα άλλα φράγματα Χρυσοχούς
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — το τελευταίο φράγμα που υπερχειλίζει
- [Κούρης](/el/dam/kouris/) **41.2%** (47.4 ΕΚΜ) · [Καννάβιου](/el/dam/kannaviou/) **50.2%** · [Γερμασόγεια](/el/dam/germasoyeia/) **57.9%** — ελάχιστη μεταβολή
- [Αχνά](/el/dam/achna/) **1.9%** — μηδέν εισροή όλη τη σεζόν, χωρίς ελπίδα ανάκαμψης πριν το φθινόπωρο

**Στα μέσα:**
- [Farmers demand more irrigation water](https://cyprus-mail.com/2026/06/23/farmers-demand-more-irrigation-water) — Cyprus Mail
- [Ενίσχυση της υδατικής επάρκειας των ξενοδοχειακών μονάδων](https://www.gov.cy/moa-wdd/mi-katigoriopoiimeno/schedio-egkatastasis-mikron-idiotikon-monadon-afalatoseis-se-xenodocheiakes-monades/) — ΤΑΥ
- [Cyprus dam levels double compared to last year, WDD official](https://www.parikiaki.com/2026/06/cyprus-dam-levels-double-compared-to-last-year-wdd-official) — Parikiaki
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (9 — 10 июля 2026)

Общий запас **41.2%** (119.9 МКМ) — почти без изменений за сутки, самый медленный темп летнего расхода за последние годы сохраняется. Разрыв с прошлым годом: **+22.7пп**. Приток сезона 25/26: **115.0 МКМ** (июль: 0.57 МКМ). Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): **20.44 МКМ** с октября.

**Основные изменения:**
- **[Арминоу](/ru/dam/arminou/) 57.1%** (+0.3пп) — новый максимум сезона, единственное растущее водохранилище; притоки превышают перекачку в [Курис](/ru/dam/kouris/)
- **[Аргака](/ru/dam/argaka/) 90.2%** (-2.0пп) — самое заметное снижение за сутки, опускается быстрее других водохранилищ Хрисохус
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — последнее водохранилище, которое переливается
- [Курис](/ru/dam/kouris/) **41.2%** (47.4 МКМ) · [Каннавиу](/ru/dam/kannaviou/) **50.2%** · [Гермасойя](/ru/dam/germasoyeia/) **57.9%** — почти без изменений
- [Ахна](/ru/dam/achna/) **1.9%** — без притока за весь сезон, восстановления до осени не предвидится

**В СМИ:**
- [Farmers demand more irrigation water](https://cyprus-mail.com/2026/06/23/farmers-demand-more-irrigation-water) — Cyprus Mail
- [Усиление водоснабжения гостиничных комплексов](https://www.gov.cy/moa-wdd/mi-katigoriopoiimeno/schedio-egkatastasis-mikron-idiotikon-monadon-afalatoseis-se-xenodocheiakes-monades/) — WDD
- [Cyprus dam levels double compared to last year, WDD official](https://www.parikiaki.com/2026/06/cyprus-dam-levels-double-compared-to-last-year-wdd-official) — Parikiaki
`;
  }
  return `
### Recent Changes (July 9 — July 10, 2026)

Total storage at **41.2%** (119.9 MCM) — essentially flat over 24 hours, continuing the slowest summer drawdown pace seen in years. The gap over last year holds at **+22.7pp**. Season total inflow: **115.0 MCM** (July: 0.57 MCM). [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: **20.44 MCM** since October.

**Notable movements:**
- **[Arminou](/dam/arminou/) 57.1%** (+0.3pp) — new season high, the lone riser; light inflows keep outpacing pumping to [Kouris](/dam/kouris/)
- **[Argaka](/dam/argaka/) 90.2%** (-2.0pp) — the sharpest single-day drop, easing faster than its Chrysochou neighbors
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — the last dam still overflowing
- [Kouris](/dam/kouris/) **41.2%** (47.4 MCM) · [Kannaviou](/dam/kannaviou/) **50.2%** · [Germasoyeia](/dam/germasoyeia/) **57.9%** — negligible change
- [Achna](/dam/achna/) **1.9%** — zero inflow all season, no recovery expected before autumn

**In the media:**
- [Farmers demand more irrigation water](https://cyprus-mail.com/2026/06/23/farmers-demand-more-irrigation-water) — Cyprus Mail
- [Enhancing hotel water adequacy via small desalination units plan](https://www.gov.cy/moa-wdd/mi-katigoriopoiimeno/schedio-egkatastasis-mikron-idiotikon-monadon-afalatoseis-se-xenodocheiakes-monades/) — WDD
- [Cyprus dam levels double compared to last year, WDD official](https://www.parikiaki.com/2026/06/cyprus-dam-levels-double-compared-to-last-year-wdd-official) — Parikiaki
`;
};
