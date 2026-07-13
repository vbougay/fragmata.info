import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.044, totalSince: 25.874 }, storage: { current: { amount: 47.240, percentage: 41.1 }, lastYear: { amount: 18.320, percentage: 15.9 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.197 }, storage: { current: { amount: 4.167, percentage: 24.4 }, lastYear: { amount: 3.080, percentage: 18.0 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.001, totalSince: 1.724 }, storage: { current: { amount: 2.538, percentage: 18.3 }, lastYear: { amount: 2.266, percentage: 16.4 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.750 }, storage: { current: { amount: 5.466, percentage: 35.3 }, lastYear: { amount: 5.134, percentage: 33.1 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.959 }, storage: { current: { amount: 7.764, percentage: 57.5 }, lastYear: { amount: 2.273, percentage: 16.8 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.024, totalSince: 22.178 }, storage: { current: { amount: 2.474, percentage: 57.5 }, lastYear: { amount: 2.404, percentage: 55.9 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.001, totalSince: 1.620 }, storage: { current: { amount: 1.728, percentage: 50.8 }, lastYear: { amount: 1.062, percentage: 31.2 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.127, percentage: 1.9 }, lastYear: { amount: 0.384, percentage: 5.6 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.024, totalSince: 20.267 }, storage: { current: { amount: 21.257, percentage: 40.6 }, lastYear: { amount: 9.459, percentage: 18.1 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.009, totalSince: 9.639 }, storage: { current: { amount: 8.586, percentage: 50.0 }, lastYear: { amount: 3.420, percentage: 19.9 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.613, percentage: 74.0 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 11.274, percentage: 47.0 }, lastYear: { amount: 4.647, percentage: 19.4 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.874, percentage: 88.3 }, lastYear: { amount: 0.189, percentage: 19.1 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.770, percentage: 89.5 }, lastYear: { amount: 0.220, percentage: 25.6 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.257, percentage: 86.2 }, lastYear: { amount: 0.061, percentage: 20.5 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.537, percentage: 90.9 }, lastYear: { amount: 0.019, percentage: 1.1 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.001, totalSince: 1.493 }, storage: { current: { amount: 1.346, percentage: 94.1 }, lastYear: { amount: 0.183, percentage: 12.8 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.312 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.175, percentage: 48.2 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: -0.011, totalSince: 2.647 }, storage: { current: { amount: 2.683, percentage: 95.8 }, lastYear: { amount: 0.776, percentage: 27.7 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.010, totalSince: 1.153 }, storage: { current: { amount: 1.934, percentage: 96.7 }, lastYear: { amount: 1.323, percentage: 66.1 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: -0.014, totalSince: 2.622 }, storage: { current: { amount: 4.214, percentage: 94.6 }, lastYear: { amount: 2.442, percentage: 54.8 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through July 13, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:0.673, "Aug-Sep":0.0 }, total:115.056 },
];

export const getReportDate = (): string => "13-JUL-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 41.1% (47.2 MCM) — essentially flat over three days; 25.2pp above last year\'s 15.9%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 41.1% (47.2 ΕΚΜ) — σχεδόν αμετάβλητος σε τρεις ημέρες. 25.2μ.π. πάνω από πέρυσι (15.9%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 41.1% (47.2 МКМ) — почти без изменений за три дня. +25.2пп выше прошлогодних 15.9%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 24.4% (4.17 MCM) — stable, well above last year\'s 18.0%. Seasonal inflow 4.20 MCM, slow drawdown continues.',
      el: 'Ο Καλαβασός στο 24.4% (4.17 ΕΚΜ) — σταθερός, πάνω από πέρυσι (18.0%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 24.4% (4.17 МКМ) — стабильно, выше прошлогодних 18.0%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.3% (2.54 MCM) — essentially unchanged, above last year\'s 16.4%. Seasonal inflow 1.72 MCM.',
      el: 'Η Λεύκαρα στο 18.3% (2.54 ΕΚΜ) — αμετάβλητη, πάνω από πέρυσι (16.4%). Εισροή σεζόν 1.72 ΕΚΜ.',
      ru: 'Лефкара на 18.3% (2.54 МКМ) — без изменений, выше прошлогодних 16.4%. Приток 1.72 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 35.3% (5.47 MCM) — easing in dry season; 2.2pp above last year\'s 33.1%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 35.3% (5.47 ΕΚΜ) — υποχωρεί στην ξηρή περίοδο, 2.2μ.π. πάνω από πέρυσι (33.1%).',
      ru: 'Дипотамос на 35.3% (5.47 МКМ) — снижение в сухой сезон, +2.2пп выше прошлогодних 33.1%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 57.5% (7.76 MCM) — slow decline from season high, 40.7pp above last year\'s 16.8%. Highest level since 2020.',
      el: 'Η Γερμασόγεια στο 57.5% (7.76 ΕΚΜ) — αργή υποχώρηση από το μέγιστο. 40.7μ.π. πάνω από πέρυσι (16.8%).',
      ru: 'Гермасойя на 57.5% (7.76 МКМ) — медленное снижение от максимума. +40.7пп выше прошлогодних 16.8%.',
    },
    'Arminou': {
      en: 'Arminou at 57.5% (2.47 MCM) — new season high again, still climbing against the seasonal trend. Season inflow 22.2 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 57.5% (2.47 ΕΚΜ) — νέο μέγιστο σεζόν ξανά, ακόμα ανιών. Εισροή σεζόν: 22.2 ΕΚΜ = 5.2× χωρητικότητα.',
      ru: 'Арминоу на 57.5% (2.47 МКМ) — новый максимум сезона, продолжает расти. Приток сезона: 22.2 МКМ = 5.2× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 50.8% (1.73 MCM) — continuing decline from season peak; still 19.6pp above last year\'s 31.2%.',
      el: 'Η Πολεμίδια στο 50.8% (1.73 ΕΚΜ) — συνεχής υποχώρηση από το μέγιστο. 19.6μ.π. πάνω από πέρυσι (31.2%).',
      ru: 'Полемидия на 50.8% (1.73 МКМ) — продолжает снижаться от пика; +19.6пп выше прошлогодних 31.2%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.9% (0.13 MCM), zero inflow all season. Far below last year\'s 5.6%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.9% (0.13 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (5.6%).',
      ru: 'Ахна критически низкая — 1.9% (0.13 МКМ), без притока за сезон. Далеко ниже прошлогодних 5.6%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 40.6% (21.26 MCM) — slow drawdown, 22.5pp above last year\'s 18.1%. Seasonal inflow 20.3 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 40.6% (21.26 ΕΚΜ) — αργή υποχώρηση, 22.5μ.π. πάνω από πέρυσι (18.1%).',
      ru: 'Аспрокреммос на 40.6% (21.26 МКМ) — медленное снижение, +22.5пп выше прошлогодних 18.1%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 50.0% (8.59 MCM) — easing from season high, 30.1pp above last year\'s 19.9%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 50.0% (8.59 ΕΚΜ) — υποχωρεί ελαφρά, 30.1μ.π. πάνω από πέρυσι (19.9%).',
      ru: 'Каннавиу на 50.0% (8.59 МКМ) — снижается от пика, +30.1пп выше прошлогодних 19.9%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 74.0% (1.61 MCM) — steady decline continues. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 74.0% (1.61 ΕΚΜ) — σταθερή υποχώρηση συνεχίζεται. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 74.0% (1.61 МКМ) — устойчивое снижение продолжается. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 47.0% (11.27 MCM) — drifting further below 50%; 27.6pp above last year\'s 19.4%.',
      el: 'Ο Εύρετου στο 47.0% (11.27 ΕΚΜ) — υποχωρεί περαιτέρω κάτω από 50%. 27.6μ.π. πάνω από πέρυσι (19.4%).',
      ru: 'Эвретоу на 47.0% (11.27 МКМ) — опускается дальше ниже 50%. +27.6пп выше прошлогодних 19.4%.',
    },
    'Argaka': {
      en: 'Argaka at 88.3% (0.87 MCM) — steepest drop of the week, down 1.9pp. Up from 19.1% last year — more than 4× year over year.',
      el: 'Η Αργάκα στο 88.3% (0.87 ΕΚΜ) — η μεγαλύτερη πτώση της εβδομάδας, -1.9μ.π. Από 19.1% πέρυσι — πάνω από 4× ανάκαμψη.',
      ru: 'Аргака на 88.3% (0.87 МКМ) — самое резкое снижение за неделю, -1.9пп. Год назад 19.1% — более чем 4-кратный рост.',
    },
    'Pomos': {
      en: 'Pomos at 89.5% (0.77 MCM) — easing further below full, down 1.5pp. Up from 25.6% last year — more than tripled.',
      el: 'Ο Πόμος στο 89.5% (0.77 ΕΚΜ) — αργή υποχώρηση κάτω από 100%, -1.5μ.π. Από 25.6% πέρυσι — πάνω από τριπλασιασμός.',
      ru: 'Помос на 89.5% (0.77 МКМ) — медленное снижение ниже полного уровня, -1.5пп. Год назад 25.6%.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 86.2% (0.26 MCM) — unchanged for days. Up from 20.5% last year — more than 4× year-over-year recovery.',
      el: 'Η Αγία Μαρίνα στο 86.2% (0.26 ΕΚΜ) — αμετάβλητη επί ημέρες. Από 20.5% πέρυσι — πάνω από 4× ανάκαμψη.',
      ru: 'Агия Марина на 86.2% (0.26 МКМ) — без изменений уже несколько дней. Год назад 20.5% — рост более чем в 4×.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 90.9% (1.54 MCM) — slow decline from peak. Was 1.1% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 90.9% (1.54 ΕΚΜ) — αργή υποχώρηση. Από 1.1% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 90.9% (1.54 МКМ) — медленное снижение от пика. Год назад 1.1% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 94.1% (1.35 MCM) — very slow decline continues. Was 12.8% last year — 7.4× year-over-year recovery.',
      el: 'Ο Ξυλιάτος στο 94.1% (1.35 ΕΚΜ) — πολύ αργή υποχώρηση συνεχίζεται. Από 12.8% πέρυσι — 7.4× ανάκαμψη.',
      ru: 'Ксилиатос на 94.1% (1.35 МКМ) — очень медленное снижение продолжается. Год назад 12.8% — восстановление в 7.4×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 48.2% last year, holding at capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 48.2% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 48.2% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 95.8% (2.68 MCM) — easing slowly from full. Was 27.7% last year — 3.5× year-over-year recovery.',
      el: 'Ο Ταμασός στο 95.8% (2.68 ΕΚΜ) — αργή υποχώρηση από το πλήρες. Από 27.7% πέρυσι — 3.5× ανάκαμψη.',
      ru: 'Тамассос на 95.8% (2.68 МКМ) — медленное снижение от полного уровня. Год назад 27.7% — восстановление в 3.5×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 96.7% (1.93 MCM) — ticked back up near full. Up from 66.1% last year.',
      el: 'Η Κλήρου-Μαλούντα στο 96.7% (1.93 ΕΚΜ) — ανέβηκε ξανά κοντά στο πλήρες. Αύξηση από 66.1% πέρυσι.',
      ru: 'Клиру-Малунта на 96.7% (1.93 МКМ) — снова поднялась ближе к полному уровню. Рост с 66.1% год назад.',
    },
    'Solea': {
      en: 'Solea at 94.6% (4.21 MCM) — holding near full as dry season progresses. Up from 54.8% last year — 1.73× year-over-year improvement.',
      el: 'Η Σολέα στο 94.6% (4.21 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 54.8% πέρυσι — 1.73× βελτίωση.',
      ru: 'Солеа на 94.6% (4.21 МКМ) — удерживается вблизи полного уровня. Рост с 54.8% год назад — улучшение в 1.73×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (10 — 13 Ιουλίου 2026)

Συνολική αποθήκευση **41.1%** (119.4 ΕΚΜ) — υποχωρεί ελαφρά από 41.2% στις 10 Ιουλίου, διατηρώντας τον πιο αργό ρυθμό καλοκαιρινής αποστράγγισης των τελευταίων ετών. Το χάσμα με πέρυσι παραμένει κοντά στο **+22.7μ.π.** Εισροή σεζόν 25/26: **115.1 ΕΚΜ** (Ιούλιος: 0.67 ΕΚΜ, ενισχυμένη από σποραδικές καλοκαιρινές βροχές). Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**, αμετάβλητη από τις αρχές Ιουλίου — η άντληση φαίνεται να έχει σταματήσει καθώς η δική του εισροή κρατά τον Αρμίνου ανιόντα.

**Αξιοσημείωτα:**
- **[Αρμίνου](/el/dam/arminou/) 57.5%** (+0.4μ.π.) — νέο μέγιστο σεζόν ξανά, το μόνο φράγμα που ανεβαίνει
- **[Αργάκα](/el/dam/argaka/) 88.3%** (-1.9μ.π.) — η πιο απότομη πτώση της εβδομάδας, συνεχίζει την υποχώρηση από το πλήρες
- [Κλήρου-Μαλούντα](/el/dam/klirou-malounta/) **96.7%** (+0.6μ.π.) — το μοναδικό ανιόν φράγμα ανάμεσα στα Εμπλουτιστικά
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
### Последние изменения (10 — 13 июля 2026)

Общий запас **41.1%** (119.4 МКМ) — небольшое снижение с 41.2% 10 июля, самый медленный темп летнего расхода за последние годы сохраняется. Разрыв с прошлым годом держится около **+22.7пп**. Приток сезона 25/26: **115.1 МКМ** (июль: 0.67 МКМ, за счёт отдельных летних ливней). Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/) держится на **20.44 МКМ**, без изменений с начала июля — похоже, перекачка приостановлена, пока собственный приток продолжает поднимать Арминоу.

**Основные изменения:**
- **[Арминоу](/ru/dam/arminou/) 57.5%** (+0.4пп) — новый максимум сезона, единственное растущее водохранилище
- **[Аргака](/ru/dam/argaka/) 88.3%** (-1.9пп) — самое резкое снижение за неделю, продолжает опускаться от полного уровня
- [Клиру-Малунта](/ru/dam/klirou-malounta/) **96.7%** (+0.6пп) — единственное растущее водохранилище среди эмплуатиста (Recharge/Other)
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — по-прежнему единственное переливающееся водохранилище
- [Ахна](/ru/dam/achna/) **1.9%** — без изменений, без притока за весь сезон

**В СМИ:**
- [Government investing €168m to tackle water shortage, minister says](https://cyprus-mail.com/2026/07/05/government-investing-e168m-to-tackle-water-shortage-minister-says) — Cyprus Mail
- [Летние дожди дают небольшую подпитку водохранилищам, но готовят почву для больших притоков](https://www.politis.com.cy/politis-news/cyprus/1018398/teleftaies-vrokhes-mikri-sineisfora-sta-fraghmata-omos-strwnoyn-khali-ghia-prwimes-meghales-eisroes) — Politis
- [MPs warn water crisis threatens future of farming](https://cyprus-mail.com/2026/06/30/mps-warn-water-crisis-threatens-future-of-farming) — Cyprus Mail
`;
  }
  return `
### Recent Changes (July 10 — July 13, 2026)

Total storage eased to **41.1%** (119.4 MCM) — down modestly from 41.2% on July 10, keeping the slowest summer drawdown pace in years. The gap over last year holds near **+22.7pp**. Season total inflow: **115.1 MCM** (July so far: 0.67 MCM, boosted by scattered summer storms). The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer holds at **20.44 MCM**, unchanged since early July — pumping appears paused as Arminou's own inflow keeps it climbing.

**Notable movements:**
- **[Arminou](/dam/arminou/) 57.5%** (+0.4pp) — another new season high, still the only main-region reservoir rising
- **[Argaka](/dam/argaka/) 88.3%** (-1.9pp) — the steepest drop of the week, extending its slide off full capacity
- [Klirou-Malounta](/dam/klirou-malounta/) **96.7%** (+0.6pp) — the lone riser among the Recharge/Other dams
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing
- [Achna](/dam/achna/) **1.9%** — unchanged, zero inflow all season

**In the media:**
- [Government investing €168m to tackle water shortage, minister says](https://cyprus-mail.com/2026/07/05/government-investing-e168m-to-tackle-water-shortage-minister-says) — Cyprus Mail
- [Summer rains give reservoirs a small boost, but set up conditions for larger inflows ahead](https://www.politis.com.cy/politis-news/cyprus/1018398/teleftaies-vrokhes-mikri-sineisfora-sta-fraghmata-omos-strwnoyn-khali-ghia-prwimes-meghales-eisroes) — Politis
- [MPs warn water crisis threatens future of farming](https://cyprus-mail.com/2026/06/30/mps-warn-water-crisis-threatens-future-of-farming) — Cyprus Mail
`;
};
