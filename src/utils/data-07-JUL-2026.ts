import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.020, totalSince: 25.586 }, storage: { current: { amount: 47.295, percentage: 41.1 }, lastYear: { amount: 18.668, percentage: 16.2 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.178 }, storage: { current: { amount: 4.180, percentage: 24.4 }, lastYear: { amount: 3.262, percentage: 19.1 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.718 }, storage: { current: { amount: 2.539, percentage: 18.3 }, lastYear: { amount: 2.282, percentage: 16.5 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.743 }, storage: { current: { amount: 5.556, percentage: 35.8 }, lastYear: { amount: 5.275, percentage: 34.0 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.955 }, storage: { current: { amount: 7.863, percentage: 58.2 }, lastYear: { amount: 2.374, percentage: 17.6 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.011, totalSince: 22.096 }, storage: { current: { amount: 2.408, percentage: 56.0 }, lastYear: { amount: 2.449, percentage: 57.0 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.757, percentage: 51.7 }, lastYear: { amount: 1.081, percentage: 31.8 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.127, percentage: 1.9 }, lastYear: { amount: 0.395, percentage: 5.8 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.243 }, storage: { current: { amount: 21.365, percentage: 40.8 }, lastYear: { amount: 9.756, percentage: 18.6 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.004, totalSince: 9.620 }, storage: { current: { amount: 8.660, percentage: 50.4 }, lastYear: { amount: 3.505, percentage: 20.4 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.662, percentage: 76.2 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 11.467, percentage: 47.8 }, lastYear: { amount: 4.760, percentage: 19.8 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.913, percentage: 92.2 }, lastYear: { amount: 0.210, percentage: 21.2 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.790, percentage: 91.9 }, lastYear: { amount: 0.234, percentage: 27.2 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.257, percentage: 86.2 }, lastYear: { amount: 0.070, percentage: 23.5 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.563, percentage: 92.5 }, lastYear: { amount: 0.020, percentage: 1.2 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.005, totalSince: 1.491 }, storage: { current: { amount: 1.362, percentage: 95.2 }, lastYear: { amount: 0.193, percentage: 13.5 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.312 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.186, percentage: 51.2 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.707, percentage: 96.7 }, lastYear: { amount: 0.793, percentage: 28.3 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.929, percentage: 96.5 }, lastYear: { amount: 1.339, percentage: 67.0 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 4.249, percentage: 95.4 }, lastYear: { amount: 2.480, percentage: 55.7 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through July 7, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:0.221, "Aug-Sep":0.0 }, total:114.604 },
];

export const getReportDate = (): string => "07-JUL-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 41.1% (47.3 MCM) — gradual summer drawdown; 24.9pp above last year\'s 16.2%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 41.1% (47.3 ΕΚΜ) — σταθερή καλοκαιρινή υποχώρηση. 24.9μ.π. πάνω από πέρυσι (16.2%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 41.1% (47.3 МКМ) — плавное летнее снижение. +24.9пп выше прошлогодних 16.2%. Перекачка Арминоу→Курис: 20.44 МКМ с октября.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 24.4% (4.18 MCM) — stable, above last year\'s 19.1%. Seasonal inflow 4.18 MCM, slow drawdown continues.',
      el: 'Ο Καλαβασός στο 24.4% (4.18 ΕΚΜ) — σταθερός, πάνω από πέρυσι (19.1%). Εισροή σεζόν 4.18 ΕΚΜ.',
      ru: 'Калавасос на 24.4% (4.18 МКМ) — стабильно, выше прошлогодних 19.1%. Приток 4.18 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.3% (2.54 MCM) — holding above last year\'s 16.5%. Seasonal inflow 1.72 MCM, slow drawdown continues.',
      el: 'Η Λεύκαρα στο 18.3% (2.54 ΕΚΜ) — πάνω από πέρυσι (16.5%). Εισροή σεζόν 1.72 ΕΚΜ.',
      ru: 'Лефкара на 18.3% (2.54 МКМ) — выше прошлогодних 16.5%. Приток 1.72 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 35.8% (5.56 MCM) — easing in dry season; 1.8pp above last year\'s 34.0%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 35.8% (5.56 ΕΚΜ) — υποχωρεί στην ξηρή περίοδο, 1.8μ.π. πάνω από πέρυσι (34.0%). Ιστορικό max τον Μάιο.',
      ru: 'Дипотамос на 35.8% (5.56 МКМ) — снижение в сухой сезон, +1.8пп выше прошлогодних 34.0%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 58.2% (7.86 MCM) — slow decline from season high, 40.6pp above last year\'s 17.6%. Highest level since 2020.',
      el: 'Η Γερμασόγεια στο 58.2% (7.86 ΕΚΜ) — αργή υποχώρηση από το μέγιστο. 40.6μ.π. πάνω από πέρυσι (17.6%).',
      ru: 'Гермасойя на 58.2% (7.86 МКМ) — медленное снижение от сезонного максимума, +40.6пп выше прошлогодних 17.6%.',
    },
    'Arminou': {
      en: 'Arminou at 56.0% (2.41 MCM) — new season high, still climbing, defying the seasonal trend. Season inflow 22.1 MCM = 5.1× capacity; 20.44 MCM pumped to Kouris.',
      el: 'Ο Αρμίνου στο 56.0% (2.41 ΕΚΜ) — νέο μέγιστο σεζόν, ακόμα ανιών. Εισροή σεζόν: 22.1 ΕΚΜ = 5.1× χωρητικότητα.',
      ru: 'Арминоу на 56.0% (2.41 МКМ) — новый максимум сезона, продолжает расти. Приток сезона: 22.1 МКМ = 5.1× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 51.7% (1.76 MCM) — continuing decline from season peak; still 19.9pp above last year\'s 31.8%.',
      el: 'Η Πολεμίδια στο 51.7% (1.76 ΕΚΜ) — συνεχής υποχώρηση από το μέγιστο. 19.9μ.π. πάνω από πέρυσι (31.8%).',
      ru: 'Полемидия на 51.7% (1.76 МКМ) — продолжает снижаться от пика; +19.9пп выше прошлогодних 31.8%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.9% (0.13 MCM), zero inflow all season. Far below last year\'s 5.8%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.9% (0.13 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (5.8%).',
      ru: 'Ахна критически низкая — 1.9% (0.13 МКМ), без притока за сезон. Далеко ниже прошлогодних 5.8%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 40.8% (21.37 MCM) — slow drawdown, 22.2pp above last year\'s 18.6%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 40.8% (21.37 ΕΚΜ) — αργή υποχώρηση, 22.2μ.π. πάνω από πέρυσι (18.6%). Εισροή 20.2 ΕΚΜ.',
      ru: 'Аспрокреммос на 40.8% (21.37 МКМ) — медленное снижение, +22.2пп выше прошлогодних 18.6%. Приток 20.2 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 50.4% (8.66 MCM) — easing from season high, 30.0pp above last year\'s 20.4%. Seasonal inflow 9.62 MCM.',
      el: 'Ο Καννάβιου στο 50.4% (8.66 ΕΚΜ) — υποχωρεί ελαφρά, 30.0μ.π. πάνω από πέρυσι (20.4%). Εισροή 9.62 ΕΚΜ.',
      ru: 'Каннавиу на 50.4% (8.66 МКМ) — снижается от пика, +30.0пп выше прошлогодних 20.4%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 76.2% (1.66 MCM) — steady decliner this week. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 76.2% (1.66 ΕΚΜ) — σταθερή υποχώρηση εβδομάδας. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 76.2% (1.66 МКМ) — устойчивое снижение за неделю. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 47.8% (11.47 MCM) — drifting below 50%; 28.0pp above last year\'s 19.8%. Gradual drawdown continues.',
      el: 'Ο Εύρετου στο 47.8% (11.47 ΕΚΜ) — υποχωρεί κάτω από 50%. 28.0μ.π. πάνω από πέρυσι (19.8%).',
      ru: 'Эвретоу на 47.8% (11.47 МКМ) — опускается ниже 50%. +28.0пп выше прошлогодних 19.8%.',
    },
    'Argaka': {
      en: 'Argaka at 92.2% (0.91 MCM) — easing slowly from full. Up from 21.2% last year — more than 4× year over year.',
      el: 'Η Αργάκα στο 92.2% (0.91 ΕΚΜ) — αργή υποχώρηση. Από 21.2% πέρυσι — πάνω από 4× ανάκαμψη.',
      ru: 'Аргака на 92.2% (0.91 МКМ) — медленное снижение. Год назад 21.2% — более чем 4-кратный рост.',
    },
    'Pomos': {
      en: 'Pomos at 91.9% (0.79 MCM) — easing slowly below full. Up from 27.2% last year — more than tripled.',
      el: 'Ο Πόμος στο 91.9% (0.79 ΕΚΜ) — αργή υποχώρηση κάτω από 100%. Από 27.2% πέρυσι — πάνω από τριπλασιασμός.',
      ru: 'Помос на 91.9% (0.79 МКМ) — медленное снижение. Год назад 27.2%.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 86.2% (0.26 MCM) — holding steady. Up from 23.5% last year — 3.67× year-over-year recovery.',
      el: 'Η Αγία Μαρίνα στο 86.2% (0.26 ΕΚΜ) — σταθερή. Αύξηση από 23.5% πέρυσι — 3.67× ανάκαμψη.',
      ru: 'Агия Марина на 86.2% (0.26 МКМ) — стабильно. Год назад 23.5% — восстановление в 3.67×.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 92.5% (1.56 MCM) — slow decline from peak. Was 1.2% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 92.5% (1.56 ΕΚΜ) — αργή υποχώρηση. Από 1.2% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 92.5% (1.56 МКМ) — медленное снижение. Год назад 1.2% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 95.2% (1.36 MCM) — effectively full, very slow decline. Was 13.5% last year — 7.1× year-over-year recovery.',
      el: 'Ο Ξυλιάτος στο 95.2% (1.36 ΕΚΜ) — ουσιαστικά πλήρης, πολύ αργή υποχώρηση. Από 13.5% πέρυσι — 7.1× ανάκαμψη.',
      ru: 'Ксилиатос на 95.2% (1.36 МКМ) — фактически полон, очень медленное снижение. Год назад 13.5% — восстановление в 7.1×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 51.2% last year, holding at capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 51.2% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 51.2% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 96.7% (2.71 MCM) — essentially full, very slow decline. Was 28.3% last year — 3.4× year-over-year recovery.',
      el: 'Ο Ταμασός στο 96.7% (2.71 ΕΚΜ) — ουσιαστικά πλήρης. Από 28.3% πέρυσι — 3.4× ανάκαμψη.',
      ru: 'Тамассос на 96.7% (2.71 МКМ) — фактически полон. Год назад 28.3% — восстановление в 3.4×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 96.5% (1.93 MCM) — easing below full since early July. Up from 67.0% last year.',
      el: 'Η Κλήρου-Μαλούντα στο 96.5% (1.93 ΕΚΜ) — υποχωρεί κάτω από 100% από αρχές Ιουλίου. Αύξηση από 67.0% πέρυσι.',
      ru: 'Клиру-Малунта на 96.5% (1.93 МКМ) — снижается ниже полного уровня с начала июля. Рост с 67.0% год назад.',
    },
    'Solea': {
      en: 'Solea at 95.4% (4.25 MCM) — holding near full as dry season progresses. Up from 55.7% last year — 1.71× year-over-year improvement.',
      el: 'Η Σολέα στο 95.4% (4.25 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 55.7% πέρυσι — 1.71× βελτίωση.',
      ru: 'Солеа на 95.4% (4.25 МКМ) — удерживается вблизи полного уровня. Рост с 55.7% год назад — улучшение в 1.71×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (30 Ιουνίου — 7 Ιουλίου 2026)

Συνολική αποθήκευση **41.3%** (120.1 ΕΚΜ) — μόλις -1.1 ΕΚΜ σε επτά μέρες. Η κατανάλωση παραμένει η πιο αργή των τελευταίων χρόνων. Το χάσμα με πέρυσι στα **+22.5μ.π.** Εισροή σεζόν 25/26: **114.6 ΕΚΜ** (Ιούλιος: 0.22 ΕΚΜ). Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): **20.44 ΕΚΜ** από τον Οκτώβριο.

**Αξιοσημείωτα:**
- **[Αρμίνου](/el/dam/arminou/) 56.0%** (+1.4μ.π. από 30/6) — νέο μέγιστο σεζόν, μοναδικός ανιών· οι μικρές εισροές υπερβαίνουν την άντληση προς [Κούρης](/el/dam/kouris/)
- **[Μαυροκόλυμπος](/el/dam/mavrokolympos/) 76.2%** (-3.8μ.π. από 30/6) — η μεγαλύτερη πτώση της εβδομάδας· από 0% πέρυσι
- [Κλήρου-Μαλούντα](/el/dam/klirou-malounta/) **96.5%** — κάτω από 100% από αρχές Ιουλίου· πλέον μόνο ο [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) υπερχειλίζει
- [Κούρης](/el/dam/kouris/) **41.1%** (47.3 ΕΚΜ) · [Καννάβιου](/el/dam/kannaviou/) **50.4%** — ελάχιστη μεταβολή
- [Αχνά](/el/dam/achna/) **1.9%** — μηδέν εισροή όλη τη σεζόν, χωρίς ελπίδα ανάκαμψης πριν το φθινόπωρο

**Στα μέσα:**
- [Αγρότες ζητούν περισσότερο νερό άρδευσης](https://cyprus-mail.com/2026/06/23/farmers-demand-more-irrigation-water) — Cyprus Mail
- [ΤΑΥ: Στο 42,4% η πληρότητα των φραγμάτων — Διπλάσια από πέρυσι](https://www.offsite.com.cy/eidiseis/koinonia/tay-sto-424-i-plirotita-ton-fragmaton-diplasia-apo-perysi) — Offsite
- [Cyprus dam levels double compared to last year, WDD official](https://www.parikiaki.com/2026/06/cyprus-dam-levels-double-compared-to-last-year-wdd-official) — Parikiaki
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (30 июня — 7 июля 2026)

Общий запас **41.3%** (120.1 МКМ) — всего -1.1 МКМ за семь дней. Расход воды остаётся самым медленным за последние годы. Разрыв с прошлым годом: **+22.5пп**. Приток сезона 25/26: **114.6 МКМ** (июль: 0.22 МКМ). Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): **20.44 МКМ** с октября.

**Основные изменения:**
- **[Арминоу](/ru/dam/arminou/) 56.0%** (+1.4пп с 30/6) — новый максимум сезона, единственное растущее водохранилище; притоки превышают перекачку в [Курис](/ru/dam/kouris/)
- **[Мавроколимпос](/ru/dam/mavrokolympos/) 76.2%** (-3.8пп с 30/6) — самое сильное падение недели; год назад был 0%
- [Клиру-Малунта](/ru/dam/klirou-malounta/) **96.5%** — ниже 100% с начала июля; теперь переливается только [Калопанайотис](/ru/dam/kalopanagiotis/)
- [Курис](/ru/dam/kouris/) **41.1%** (47.3 МКМ) · [Каннавиу](/ru/dam/kannaviou/) **50.4%** — почти без изменений
- [Ахна](/ru/dam/achna/) **1.9%** — без притока за весь сезон, восстановления до осени не предвидится

**В СМИ:**
- [Farmers demand more irrigation water](https://cyprus-mail.com/2026/06/23/farmers-demand-more-irrigation-water) — Cyprus Mail
- [Уровень воды в дамбах Кипра вырос до 42,4%](https://ruscyprus.com/news/uroven-vody-v-dambah-kipra-vyros-do-42-4-na/58033) — RusCyprus
- [Cyprus dam levels double compared to last year, WDD official](https://www.parikiaki.com/2026/06/cyprus-dam-levels-double-compared-to-last-year-wdd-official) — Parikiaki
`;
  }
  return `
### Recent Changes (June 30 — July 7, 2026)

Total storage at **41.3%** (120.1 MCM) — just -1.1 MCM over seven days. This remains the slowest drawdown pace seen at this point in the summer for years. The gap over last year holds at **+22.5pp**. Season total inflow: **114.6 MCM** (July: 0.22 MCM). [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: **20.44 MCM** since October.

**Notable movements:**
- **[Arminou](/dam/arminou/) 56.0%** (+1.4pp since June 30) — new season high, the lone riser; light inflows keep outpacing pumping to [Kouris](/dam/kouris/)
- **[Mavrokolympos](/dam/mavrokolympos/) 76.2%** (-3.8pp since June 30) — the week's biggest decliner; started the year at 0%
- [Klirou-Malounta](/dam/klirou-malounta/) **96.5%** — below full since early July; only [Kalopanagiotis](/dam/kalopanagiotis/) still overflows
- [Kouris](/dam/kouris/) **41.1%** (47.3 MCM) · [Kannaviou](/dam/kannaviou/) **50.4%** — negligible change
- [Achna](/dam/achna/) **1.9%** — zero inflow all season, no recovery expected before autumn

**In the media:**
- [Farmers demand more irrigation water](https://cyprus-mail.com/2026/06/23/farmers-demand-more-irrigation-water) — Cyprus Mail
- [Integrating energy and water planning](https://cyprus-mail.com/2026/06/20/integrating-energy-and-water-planning) — Cyprus Mail
- [Cyprus dam levels double compared to last year, WDD official](https://www.parikiaki.com/2026/06/cyprus-dam-levels-double-compared-to-last-year-wdd-official) — Parikiaki
`;
};
