import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.078, totalSince: 25.792 }, storage: { current: { amount: 47.388, percentage: 41.2 }, lastYear: { amount: 18.546, percentage: 16.1 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.004, totalSince: 4.197 }, storage: { current: { amount: 4.191, percentage: 24.5 }, lastYear: { amount: 3.203, percentage: 18.7 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 2.542, percentage: 18.4 }, lastYear: { amount: 2.278, percentage: 16.4 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.003, totalSince: 3.750 }, storage: { current: { amount: 5.526, percentage: 35.7 }, lastYear: { amount: 5.226, percentage: 33.7 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.002, totalSince: 8.959 }, storage: { current: { amount: 7.833, percentage: 58.0 }, lastYear: { amount: 2.340, percentage: 17.3 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.016, totalSince: 22.138 }, storage: { current: { amount: 2.442, percentage: 56.8 }, lastYear: { amount: 2.435, percentage: 56.6 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.747, percentage: 51.4 }, lastYear: { amount: 1.076, percentage: 31.6 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.127, percentage: 1.9 }, lastYear: { amount: 0.391, percentage: 5.8 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.243 }, storage: { current: { amount: 21.329, percentage: 40.7 }, lastYear: { amount: 9.646, percentage: 18.4 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.003, totalSince: 9.627 }, storage: { current: { amount: 8.637, percentage: 50.3 }, lastYear: { amount: 3.477, percentage: 20.3 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.644, percentage: 75.4 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 11.385, percentage: 47.4 }, lastYear: { amount: 4.726, percentage: 19.7 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.913, percentage: 92.2 }, lastYear: { amount: 0.205, percentage: 20.7 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.790, percentage: 91.9 }, lastYear: { amount: 0.229, percentage: 26.6 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.257, percentage: 86.2 }, lastYear: { amount: 0.067, percentage: 22.5 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.557, percentage: 92.1 }, lastYear: { amount: 0.020, percentage: 1.2 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.001, totalSince: 1.492 }, storage: { current: { amount: 1.359, percentage: 95.0 }, lastYear: { amount: 0.186, percentage: 13.0 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.312 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.182, percentage: 50.1 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.700, percentage: 96.4 }, lastYear: { amount: 0.783, percentage: 28.0 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.926, percentage: 96.3 }, lastYear: { amount: 1.333, percentage: 66.6 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 4.240, percentage: 95.2 }, lastYear: { amount: 2.468, percentage: 55.4 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through July 9, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:0.512, "Aug-Sep":0.0 }, total:114.895 },
];

export const getReportDate = (): string => "09-JUL-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 41.2% (47.4 MCM) — gradual summer drawdown; 25.1pp above last year\'s 16.1%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 41.2% (47.4 ΕΚΜ) — σταθερή καλοκαιρινή υποχώρηση. 25.1μ.π. πάνω από πέρυσι (16.1%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 41.2% (47.4 МКМ) — плавное летнее снижение. +25.1пп выше прошлогодних 16.1%. Перекачка Арминоу→Курис: 20.44 МКМ с октября.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 24.5% (4.19 MCM) — stable, above last year\'s 18.7%. Seasonal inflow 4.20 MCM, slow drawdown continues.',
      el: 'Ο Καλαβασός στο 24.5% (4.19 ΕΚΜ) — σταθερός, πάνω από πέρυσι (18.7%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 24.5% (4.19 МКМ) — стабильно, выше прошлогодних 18.7%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.4% (2.54 MCM) — holding above last year\'s 16.4%. Seasonal inflow 1.72 MCM, slow drawdown continues.',
      el: 'Η Λεύκαρα στο 18.4% (2.54 ΕΚΜ) — πάνω από πέρυσι (16.4%). Εισροή σεζόν 1.72 ΕΚΜ.',
      ru: 'Лефкара на 18.4% (2.54 МКМ) — выше прошлогодних 16.4%. Приток 1.72 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 35.7% (5.53 MCM) — easing in dry season; 2.0pp above last year\'s 33.7%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 35.7% (5.53 ΕΚΜ) — υποχωρεί στην ξηρή περίοδο, 2.0μ.π. πάνω από πέρυσι (33.7%). Ιστορικό max τον Μάιο.',
      ru: 'Дипотамос на 35.7% (5.53 МКМ) — снижение в сухой сезон, +2.0пп выше прошлогодних 33.7%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 58.0% (7.83 MCM) — slow decline from season high, 40.7pp above last year\'s 17.3%. Highest level since 2020.',
      el: 'Η Γερμασόγεια στο 58.0% (7.83 ΕΚΜ) — αργή υποχώρηση από το μέγιστο. 40.7μ.π. πάνω από πέρυσι (17.3%).',
      ru: 'Гермасойя на 58.0% (7.83 МКМ) — медленное снижение от сезонного максимума, +40.7пп выше прошлогодних 17.3%.',
    },
    'Arminou': {
      en: 'Arminou at 56.8% (2.44 MCM) — new season high, still climbing, defying the seasonal trend. Season inflow 22.1 MCM = 5.1× capacity; 20.44 MCM pumped to Kouris.',
      el: 'Ο Αρμίνου στο 56.8% (2.44 ΕΚΜ) — νέο μέγιστο σεζόν, ακόμα ανιών. Εισροή σεζόν: 22.1 ΕΚΜ = 5.1× χωρητικότητα.',
      ru: 'Арминоу на 56.8% (2.44 МКМ) — новый максимум сезона, продолжает расти. Приток сезона: 22.1 МКМ = 5.1× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 51.4% (1.75 MCM) — continuing decline from season peak; still 19.8pp above last year\'s 31.6%.',
      el: 'Η Πολεμίδια στο 51.4% (1.75 ΕΚΜ) — συνεχής υποχώρηση από το μέγιστο. 19.8μ.π. πάνω από πέρυσι (31.6%).',
      ru: 'Полемидия на 51.4% (1.75 МКМ) — продолжает снижаться от пика; +19.8пп выше прошлогодних 31.6%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.9% (0.13 MCM), zero inflow all season. Far below last year\'s 5.8%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.9% (0.13 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (5.8%).',
      ru: 'Ахна критически низкая — 1.9% (0.13 МКМ), без притока за сезон. Далеко ниже прошлогодних 5.8%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 40.7% (21.33 MCM) — slow drawdown, 22.3pp above last year\'s 18.4%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 40.7% (21.33 ΕΚΜ) — αργή υποχώρηση, 22.3μ.π. πάνω από πέρυσι (18.4%). Εισροή 20.2 ΕΚΜ.',
      ru: 'Аспрокреммос на 40.7% (21.33 МКМ) — медленное снижение, +22.3пп выше прошлогодних 18.4%. Приток 20.2 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 50.3% (8.64 MCM) — easing from season high, 30.0pp above last year\'s 20.3%. Seasonal inflow 9.63 MCM.',
      el: 'Ο Καννάβιου στο 50.3% (8.64 ΕΚΜ) — υποχωρεί ελαφρά, 30.0μ.π. πάνω από πέρυσι (20.3%). Εισροή 9.63 ΕΚΜ.',
      ru: 'Каннавиу на 50.3% (8.64 МКМ) — снижается от пика, +30.0пп выше прошлогодних 20.3%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 75.4% (1.64 MCM) — steady decliner this week. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 75.4% (1.64 ΕΚΜ) — σταθερή υποχώρηση εβδομάδας. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 75.4% (1.64 МКМ) — устойчивое снижение за неделю. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 47.4% (11.39 MCM) — drifting below 50%; 27.7pp above last year\'s 19.7%. Gradual drawdown continues.',
      el: 'Ο Εύρετου στο 47.4% (11.39 ΕΚΜ) — υποχωρεί κάτω από 50%. 27.7μ.π. πάνω από πέρυσι (19.7%).',
      ru: 'Эвретоу на 47.4% (11.39 МКМ) — опускается ниже 50%. +27.7пп выше прошлогодних 19.7%.',
    },
    'Argaka': {
      en: 'Argaka at 92.2% (0.91 MCM) — easing slowly from full. Up from 20.7% last year — more than 4× year over year.',
      el: 'Η Αργάκα στο 92.2% (0.91 ΕΚΜ) — αργή υποχώρηση. Από 20.7% πέρυσι — πάνω από 4× ανάκαμψη.',
      ru: 'Аргака на 92.2% (0.91 МКМ) — медленное снижение. Год назад 20.7% — более чем 4-кратный рост.',
    },
    'Pomos': {
      en: 'Pomos at 91.9% (0.79 MCM) — easing slowly below full. Up from 26.6% last year — more than tripled.',
      el: 'Ο Πόμος στο 91.9% (0.79 ΕΚΜ) — αργή υποχώρηση κάτω από 100%. Από 26.6% πέρυσι — πάνω από τριπλασιασμός.',
      ru: 'Помос на 91.9% (0.79 МКМ) — медленное снижение. Год назад 26.6%.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 86.2% (0.26 MCM) — holding steady. Up from 22.5% last year — 3.83× year-over-year recovery.',
      el: 'Η Αγία Μαρίνα στο 86.2% (0.26 ΕΚΜ) — σταθερή. Αύξηση από 22.5% πέρυσι — 3.83× ανάκαμψη.',
      ru: 'Агия Марина на 86.2% (0.26 МКМ) — стабильно. Год назад 22.5% — восстановление в 3.83×.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 92.1% (1.56 MCM) — slow decline from peak. Was 1.2% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 92.1% (1.56 ΕΚΜ) — αργή υποχώρηση. Από 1.2% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 92.1% (1.56 МКМ) — медленное снижение. Год назад 1.2% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 95.0% (1.36 MCM) — effectively full, very slow decline. Was 13.0% last year — 7.3× year-over-year recovery.',
      el: 'Ο Ξυλιάτος στο 95.0% (1.36 ΕΚΜ) — ουσιαστικά πλήρης, πολύ αργή υποχώρηση. Από 13.0% πέρυσι — 7.3× ανάκαμψη.',
      ru: 'Ксилиатос на 95.0% (1.36 МКМ) — фактически полон, очень медленное снижение. Год назад 13.0% — восстановление в 7.3×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 50.1% last year, holding at capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 50.1% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 50.1% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 96.4% (2.70 MCM) — essentially full, very slow decline. Was 28.0% last year — 3.4× year-over-year recovery.',
      el: 'Ο Ταμασός στο 96.4% (2.70 ΕΚΜ) — ουσιαστικά πλήρης. Από 28.0% πέρυσι — 3.4× ανάκαμψη.',
      ru: 'Тамассос на 96.4% (2.70 МКМ) — фактически полон. Год назад 28.0% — восстановление в 3.4×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 96.3% (1.93 MCM) — easing below full since early July. Up from 66.6% last year.',
      el: 'Η Κλήρου-Μαλούντα στο 96.3% (1.93 ΕΚΜ) — υποχωρεί κάτω από 100% από αρχές Ιουλίου. Αύξηση από 66.6% πέρυσι.',
      ru: 'Клиру-Малунта на 96.3% (1.93 МКМ) — снижается ниже полного уровня с начала июля. Рост с 66.6% год назад.',
    },
    'Solea': {
      en: 'Solea at 95.2% (4.24 MCM) — holding near full as dry season progresses. Up from 55.4% last year — 1.72× year-over-year improvement.',
      el: 'Η Σολέα στο 95.2% (4.24 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 55.4% πέρυσι — 1.72× βελτίωση.',
      ru: 'Солеа на 95.2% (4.24 МКМ) — удерживается вблизи полного уровня. Рост с 55.4% год назад — улучшение в 1.72×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (8 — 9 Ιουλίου 2026)

Συνολική αποθήκευση **41.3%** (120.0 ΕΚΜ) — σχεδόν αμετάβλητη σε 24 ώρες. Η κατανάλωση παραμένει η πιο αργή των τελευταίων χρόνων. Το χάσμα με πέρυσι στα **+25.2μ.π.** Εισροή σεζόν 25/26: **114.9 ΕΚΜ** (Ιούλιος: 0.51 ΕΚΜ). Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): **20.44 ΕΚΜ** από τον Οκτώβριο.

**Αξιοσημείωτα:**
- **[Αρμίνου](/el/dam/arminou/) 56.8%** (+0.6μ.π.) — νέο μέγιστο σεζόν, μοναδικός ανιών· οι μικρές εισροές υπερβαίνουν την άντληση προς [Κούρης](/el/dam/kouris/)
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — το τελευταίο φράγμα που υπερχειλίζει
- [Κούρης](/el/dam/kouris/) **41.2%** (47.4 ΕΚΜ) · [Καννάβιου](/el/dam/kannaviou/) **50.3%** · [Γερμασόγεια](/el/dam/germasoyeia/) **58.0%** — ελάχιστη μεταβολή
- [Αχνά](/el/dam/achna/) **1.9%** — μηδέν εισροή όλη τη σεζόν, χωρίς ελπίδα ανάκαμψης πριν το φθινόπωρο

**Στα μέσα:**
- [Farmers demand more irrigation water](https://cyprus-mail.com/2026/06/23/farmers-demand-more-irrigation-water) — Cyprus Mail
- [Ενίσχυση της υδατικής επάρκειας των ξενοδοχειακών μονάδων](https://www.gov.cy/moa-wdd/mi-katigoriopoiimeno/schedio-egkatastasis-mikron-idiotikon-monadon-afalatoseis-se-xenodocheiakes-monades/) — ΤΑΥ
- [Cyprus dam levels double compared to last year, WDD official](https://www.parikiaki.com/2026/06/cyprus-dam-levels-double-compared-to-last-year-wdd-official) — Parikiaki
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (8 — 9 июля 2026)

Общий запас **41.3%** (120.0 МКМ) — почти без изменений за сутки. Расход воды остаётся самым медленным за последние годы. Разрыв с прошлым годом: **+25.2пп**. Приток сезона 25/26: **114.9 МКМ** (июль: 0.51 МКМ). Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): **20.44 МКМ** с октября.

**Основные изменения:**
- **[Арминоу](/ru/dam/arminou/) 56.8%** (+0.6пп) — новый максимум сезона, единственное растущее водохранилище; притоки превышают перекачку в [Курис](/ru/dam/kouris/)
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — последнее водохранилище, которое переливается
- [Курис](/ru/dam/kouris/) **41.2%** (47.4 МКМ) · [Каннавиу](/ru/dam/kannaviou/) **50.3%** · [Гермасойя](/ru/dam/germasoyeia/) **58.0%** — почти без изменений
- [Ахна](/ru/dam/achna/) **1.9%** — без притока за весь сезон, восстановления до осени не предвидится

**В СМИ:**
- [Farmers demand more irrigation water](https://cyprus-mail.com/2026/06/23/farmers-demand-more-irrigation-water) — Cyprus Mail
- [Усиление водоснабжения гостиничных комплексов](https://www.gov.cy/moa-wdd/mi-katigoriopoiimeno/schedio-egkatastasis-mikron-idiotikon-monadon-afalatoseis-se-xenodocheiakes-monades/) — WDD
- [Cyprus dam levels double compared to last year, WDD official](https://www.parikiaki.com/2026/06/cyprus-dam-levels-double-compared-to-last-year-wdd-official) — Parikiaki
`;
  }
  return `
### Recent Changes (July 8 — July 9, 2026)

Total storage at **41.3%** (120.0 MCM) — essentially flat over 24 hours. This remains the slowest drawdown pace seen at this point in the summer for years. The gap over last year holds at **+25.2pp**. Season total inflow: **114.9 MCM** (July: 0.51 MCM). [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: **20.44 MCM** since October.

**Notable movements:**
- **[Arminou](/dam/arminou/) 56.8%** (+0.6pp) — new season high, the lone riser; light inflows keep outpacing pumping to [Kouris](/dam/kouris/)
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — the last dam still overflowing
- [Kouris](/dam/kouris/) **41.2%** (47.4 MCM) · [Kannaviou](/dam/kannaviou/) **50.3%** · [Germasoyeia](/dam/germasoyeia/) **58.0%** — negligible change
- [Achna](/dam/achna/) **1.9%** — zero inflow all season, no recovery expected before autumn

**In the media:**
- [Farmers demand more irrigation water](https://cyprus-mail.com/2026/06/23/farmers-demand-more-irrigation-water) — Cyprus Mail
- [Enhancing hotel water adequacy via small desalination units plan](https://www.gov.cy/moa-wdd/mi-katigoriopoiimeno/schedio-egkatastasis-mikron-idiotikon-monadon-afalatoseis-se-xenodocheiakes-monades/) — WDD
- [Cyprus dam levels double compared to last year, WDD official](https://www.parikiaki.com/2026/06/cyprus-dam-levels-double-compared-to-last-year-wdd-official) — Parikiaki
`;
};
