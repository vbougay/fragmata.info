import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.066, totalSince: 25.402 }, storage: { current: { amount: 47.611, percentage: 41.4 }, lastYear: { amount: 19.107, percentage: 16.6 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.178 }, storage: { current: { amount: 4.210, percentage: 24.6 }, lastYear: { amount: 3.495, percentage: 20.4 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.718 }, storage: { current: { amount: 2.551, percentage: 18.4 }, lastYear: { amount: 2.309, percentage: 16.7 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.743 }, storage: { current: { amount: 5.682, percentage: 36.7 }, lastYear: { amount: 5.449, percentage: 35.2 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.018, totalSince: 8.940 }, storage: { current: { amount: 7.978, percentage: 59.1 }, lastYear: { amount: 2.510, percentage: 18.6 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.052, totalSince: 21.993 }, storage: { current: { amount: 2.337, percentage: 54.3 }, lastYear: { amount: 2.506, percentage: 58.3 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.793, percentage: 52.7 }, lastYear: { amount: 1.107, percentage: 32.6 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.128, percentage: 1.9 }, lastYear: { amount: 0.409, percentage: 6.0 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.243 }, storage: { current: { amount: 21.531, percentage: 41.1 }, lastYear: { amount: 10.122, percentage: 19.3 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.006, totalSince: 9.591 }, storage: { current: { amount: 8.762, percentage: 51.0 }, lastYear: { amount: 3.615, percentage: 21.1 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.755, percentage: 80.5 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 11.677, percentage: 48.7 }, lastYear: { amount: 4.916, percentage: 20.5 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.950, percentage: 96.0 }, lastYear: { amount: 0.237, percentage: 23.9 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.828, percentage: 96.3 }, lastYear: { amount: 0.254, percentage: 29.5 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.257, percentage: 86.2 }, lastYear: { amount: 0.087, percentage: 29.2 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.600, percentage: 94.7 }, lastYear: { amount: 0.021, percentage: 1.2 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.486 }, storage: { current: { amount: 1.382, percentage: 96.6 }, lastYear: { amount: 0.212, percentage: 14.8 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.001, totalSince: 0.312 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.209, percentage: 57.6 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.740, percentage: 97.9 }, lastYear: { amount: 0.820, percentage: 29.3 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.003, totalSince: 1.142 }, storage: { current: { amount: 2.000, percentage: 100.0 }, lastYear: { amount: 1.356, percentage: 67.8 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 4.307, percentage: 96.7 }, lastYear: { amount: 2.544, percentage: 57.1 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through June 29, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:2.955, July:0.0, "Aug-Sep":0.0 }, total:114.268 },
];

export const getReportDate = (): string => "29-JUN-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 41.4% (47.6 MCM) — gradual summer drawdown; 24.8pp above last year\'s 16.6%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 41.4% (47.6 ΕΚΜ) — σταθερή καλοκαιρινή υποχώρηση. 24.8μ.π. πάνω από πέρυσι (16.6%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 41.4% (47.6 МКМ) — плавное летнее снижение. +24.8пп выше прошлогодних 16.6%. Перекачка Арминоу→Курис: 20.44 МКМ с октября.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 24.6% (4.21 MCM) — stable, above last year\'s 20.4%. Seasonal inflow 4.18 MCM, gradual drawdown continues.',
      el: 'Ο Καλαβασός στο 24.6% (4.21 ΕΚΜ) — σταθερός, πάνω από πέρυσι (20.4%). Εισροή σεζόν 4.18 ΕΚΜ.',
      ru: 'Калавасос на 24.6% (4.21 МКМ) — стабильно, выше прошлогодних 20.4%. Приток 4.18 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.4% (2.55 MCM) — holding above last year\'s 16.7%. Seasonal inflow 1.72 MCM, slow drawdown continues.',
      el: 'Η Λεύκαρα στο 18.4% (2.55 ΕΚΜ) — πάνω από πέρυσι (16.7%). Εισροή σεζόν 1.72 ΕΚΜ.',
      ru: 'Лефкара на 18.4% (2.55 МКМ) — выше прошлогодних 16.7%. Приток 1.72 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 36.7% (5.68 MCM) — easing in dry season; 1.5pp above last year\'s 35.2%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 36.7% (5.68 ΕΚΜ) — υποχωρεί στην ξηρή περίοδο, 1.5μ.π. πάνω από πέρυσι (35.2%). Ιστορικό max τον Μάιο.',
      ru: 'Дипотамос на 36.7% (5.68 МКМ) — снижение в сухой сезон, +1.5пп выше прошлогодних 35.2%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 59.1% (7.98 MCM) — slow decline from season high, 40.5pp above last year\'s 18.6%. Highest level since 2020.',
      el: 'Η Γερμασόγεια στο 59.1% (7.98 ΕΚΜ) — αργή υποχώρηση από το μέγιστο. 40.5μ.π. πάνω από πέρυσι (18.6%).',
      ru: 'Гермасойя на 59.1% (7.98 МКМ) — медленное снижение от сезонного максимума, +40.5пп выше прошлогодних 18.6%.',
    },
    'Arminou': {
      en: 'Arminou at 54.3% (2.34 MCM) — up +3.9pp in 10 days, defying the seasonal trend. Season inflow 22.0 MCM = 5.1× capacity; 20.44 MCM pumped to Kouris.',
      el: 'Ο Αρμίνου στο 54.3% (2.34 ΕΚΜ) — +3.9μ.π. σε 10 μέρες, αντίθετα στη σεζονική τάση. Εισροή σεζόν: 22.0 ΕΚΜ = 5.1× χωρητικότητα.',
      ru: 'Арминоу на 54.3% (2.34 МКМ) — рост на +3.9пп за 10 дней вопреки сезонной тенденции. Приток сезона: 22.0 МКМ = 5.1× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 52.7% (1.79 MCM) — continuing decline from season peak; still 20.1pp above last year\'s 32.6%.',
      el: 'Η Πολεμίδια στο 52.7% (1.79 ΕΚΜ) — συνεχής υποχώρηση από το μέγιστο. 20.1μ.π. πάνω από πέρυσι (32.6%).',
      ru: 'Полемидия на 52.7% (1.79 МКМ) — продолжает снижаться от пика; +20.1пп выше прошлогодних 32.6%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.9% (0.13 MCM), zero inflow all season. Far below last year\'s 6.0%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.9% (0.13 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (6.0%).',
      ru: 'Ахна критически низкая — 1.9% (0.13 МКМ), без притока за сезон. Далеко ниже прошлогодних 6.0%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 41.1% (21.53 MCM) — slow drawdown, 21.8pp above last year\'s 19.3%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 41.1% (21.53 ΕΚΜ) — αργή υποχώρηση, 21.8μ.π. πάνω από πέρυσι (19.3%). Εισροή 20.2 ΕΚΜ.',
      ru: 'Аспрокреммос на 41.1% (21.53 МКМ) — медленное снижение, +21.8пп выше прошлогодних 19.3%. Приток 20.2 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 51.0% (8.76 MCM) — easing from season high, 29.9pp above last year\'s 21.1%. Seasonal inflow 9.59 MCM.',
      el: 'Ο Καννάβιου στο 51.0% (8.76 ΕΚΜ) — υποχωρεί ελαφρά, 29.9μ.π. πάνω από πέρυσι (21.1%). Εισροή 9.59 ΕΚΜ.',
      ru: 'Каннавиу на 51.0% (8.76 МКМ) — снижается от пика, +29.9пп выше прошлогодних 21.1%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 80.5% (1.76 MCM) — steady summer decline. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 80.5% (1.76 ΕΚΜ) — σταθερή καλοκαιρινή υποχώρηση. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 80.5% (1.76 МКМ) — устойчивое летнее снижение. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 48.7% (11.68 MCM) — drifting below 50%; 28.2pp above last year\'s 20.5%. Gradual drawdown continues.',
      el: 'Ο Εύρετου στο 48.7% (11.68 ΕΚΜ) — υποχωρεί κάτω από 50%. 28.2μ.π. πάνω από πέρυσι (20.5%).',
      ru: 'Эвретоу на 48.7% (11.68 МКМ) — опускается ниже 50%. +28.2пп выше прошлогодних 20.5%.',
    },
    'Argaka': {
      en: 'Argaka at 96.0% (0.95 MCM) — just below full, easing slowly. Up from 23.9% last year — more than 4× year over year.',
      el: 'Η Αργάκα στο 96.0% (0.95 ΕΚΜ) — κοντά σε πλήρης, αργή υποχώρηση. Από 23.9% πέρυσι — πάνω από 4× ανάκαμψη.',
      ru: 'Аргака на 96.0% (0.95 МКМ) — чуть ниже полного уровня. Год назад 23.9% — более чем 4-кратный рост.',
    },
    'Pomos': {
      en: 'Pomos at 96.3% (0.83 MCM) — easing slowly below full. Up from 29.5% last year — more than tripled.',
      el: 'Ο Πόμος στο 96.3% (0.83 ΕΚΜ) — αργή υποχώρηση κάτω από 100%. Από 29.5% πέρυσι — πάνω από τριπλασιασμός.',
      ru: 'Помос на 96.3% (0.83 МКМ) — медленное снижение. Год назад 29.5%.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 86.2% (0.26 MCM) — holding steady. Up from 29.2% last year — 2.95× year-over-year recovery.',
      el: 'Η Αγία Μαρίνα στο 86.2% (0.26 ΕΚΜ) — σταθερή. Αύξηση από 29.2% πέρυσι — 2.95× ανάκαμψη.',
      ru: 'Агия Марина на 86.2% (0.26 МКМ) — стабильно. Год назад 29.2% — восстановление в 2.95×.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 94.7% (1.60 MCM) — slow decline from peak. Was 1.2% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 94.7% (1.60 ΕΚΜ) — αργή υποχώρηση. Από 1.2% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 94.7% (1.60 МКМ) — медленное снижение. Год назад 1.2% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 96.6% (1.38 MCM) — effectively full, very slow decline. Was 14.8% last year — 6.5× year-over-year recovery.',
      el: 'Ο Ξυλιάτος στο 96.6% (1.38 ΕΚΜ) — ουσιαστικά πλήρης, πολύ αργή υποχώρηση. Από 14.8% πέρυσι — 6.5× ανάκαμψη.',
      ru: 'Ксилиатос на 96.6% (1.38 МКМ) — фактически полон, очень медленное снижение. Год назад 14.8% — восстановление в 6.5×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 57.6% last year, holding at capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 57.6% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 57.6% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 97.9% (2.74 MCM) — essentially full, very slow decline. Was 29.3% last year — 3.3× year-over-year recovery.',
      el: 'Ο Ταμασός στο 97.9% (2.74 ΕΚΜ) — ουσιαστικά πλήρης. Από 29.3% πέρυσι — 3.3× ανάκαμψη.',
      ru: 'Тамассос на 97.9% (2.74 МКМ) — фактически полон. Год назад 29.3% — восстановление в 3.3×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 67.8% last year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 67.8% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 67.8% год назад.',
    },
    'Solea': {
      en: 'Solea at 96.7% (4.31 MCM) — holding near full as dry season progresses. Up from 57.1% last year — 1.69× year-over-year improvement.',
      el: 'Η Σολέα στο 96.7% (4.31 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 57.1% πέρυσι — 1.69× βελτίωση.',
      ru: 'Солеа на 96.7% (4.31 МКМ) — удерживается вблизи полного уровня. Рост с 57.1% год назад — улучшение в 1.69×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (19 — 29 Ιουνίου 2026)

Συνολική αποθήκευση **41.7%** (121.4 ΕΚΜ) — μόλις -0.5 ΕΚΜ σε 3 μέρες, -1.3 ΕΚΜ σε 10 μέρες. Η κατανάλωση παραμένει η πιο αργή των τελευταίων χρόνων. Το χάσμα με πέρυσι στα **+22.3μ.π.** Εισροή σεζόν 25/26: **114.3 ΕΚΜ**. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): **20.44 ΕΚΜ** από τον Οκτώβριο.

**Αξιοσημείωτα:**
- **[Αρμίνου](/el/dam/arminou/) 54.3%** (+3.9μ.π. από 19/6) — μοναδικός ανιών τάδε στη σεζόν· σταθερές μικρές εισροές υπερβαίνουν την άντληση προς [Κούρης](/el/dam/kouris/)
- **[Πολεμίδια](/el/dam/polemidia/) 52.7%** (-2.9μ.π. από 19/6) — σαφέστερη υποχώρηση τις τελευταίες 10 μέρες
- **[Εύρετου](/el/dam/evretou/) 48.7%** — συνεχίζει να ολισθαίνει κάτω από 50%· αγρότες ζητούν αύξηση νερού άρδευσης
- [Κούρης](/el/dam/kouris/) **41.4%** (47.6 ΕΚΜ) · [Γερμασόγεια](/el/dam/germasoyeia/) **59.1%** — ελάχιστη μεταβολή
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) και [Κλήρου-Μαλούντα](/el/dam/klirou-malounta/) στο 100%· [Αχνά](/el/dam/achna/) **1.9%** — μηδέν εισροή όλη τη σεζόν

**Στα μέσα:**
- [Αγρότες ζητούν περισσότερο νερό άρδευσης](https://cyprus-mail.com/2026/06/23/farmers-demand-more-irrigation-water) — Cyprus Mail
- [ΤΑΥ: Σταδιακή διάθεση εξοπλισμού εξοικονόμησης νερού από τον Ιούνιο 2026](https://dialogos.com.cy/tay-stadiaki-diathesi-exoplismoy-exoikonomisis-neroy-apo-ton-ioynio-2026/) — Διάλογος
- [ΤΑΥ: Στο 42,4% η πληρότητα των φραγμάτων — Διπλάσια από πέρυσι](https://www.offsite.com.cy/eidiseis/koinonia/tay-sto-424-i-plirotita-ton-fragmaton-diplasia-apo-perysi) — Offsite
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (19 — 29 июня 2026)

Общий запас **41.7%** (121.4 МКМ) — всего -0.5 МКМ за 3 дня, -1.3 МКМ за 10 дней. Расход воды остаётся самым медленным за последние годы. Разрыв с прошлым годом: **+22.3пп**. Приток сезона 25/26: **114.3 МКМ**. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): **20.44 МКМ** с октября.

**Основные изменения:**
- **[Арминоу](/ru/dam/arminou/) 54.3%** (+3.9пп с 19/6) — единственное растущее водохранилище сезона; малые притоки стабильно превышают перекачку в [Курис](/ru/dam/kouris/)
- **[Полемидия](/ru/dam/polemidia/) 52.7%** (-2.9пп с 19/6) — наиболее выраженное снижение за 10 дней
- **[Эвретоу](/ru/dam/evretou/) 48.7%** — продолжает опускаться ниже 50%; фермеры требуют больше воды для орошения
- [Курис](/ru/dam/kouris/) **41.4%** (47.6 МКМ) · [Гермасойя](/ru/dam/germasoyeia/) **59.1%** — почти без изменений
- [Калопанайотис](/ru/dam/kalopanagiotis/) и [Клиру-Малунта](/ru/dam/klirou-malounta/) на 100%; [Ахна](/ru/dam/achna/) **1.9%** — без притока за весь сезон

**В СМИ:**
- [Farmers demand more irrigation water](https://cyprus-mail.com/2026/06/23/farmers-demand-more-irrigation-water) — Cyprus Mail
- [Сельхозорганизации Кипра требуют увеличить объёмы воды для орошения](https://ruscyprus.com/news/selskohozyaystvennye-organizacii-kipra/59528) — RusCyprus
- [Уровень воды в дамбах Кипра вырос до 42,4%](https://ruscyprus.com/news/uroven-vody-v-dambah-kipra-vyros-do-42-4-na/58033) — RusCyprus
`;
  }
  return `
### Recent Changes (June 19 — 29, 2026)

Total storage at **41.7%** (121.4 MCM) — just -0.5 MCM in three days, -1.3 MCM over ten days. This is the slowest drawdown pace seen at this point in the summer for years. The gap over last year holds at **+22.3pp**. Season total inflow: **114.3 MCM**. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: **20.44 MCM** since October.

**Notable movements:**
- **[Arminou](/dam/arminou/) 54.3%** (+3.9pp since June 19) — the lone riser of the season; consistent light inflows continue outpacing pumping to [Kouris](/dam/kouris/)
- **[Polemidia](/dam/polemidia/) 52.7%** (-2.9pp since June 19) — the clearest faller over the 10-day window
- **[Evretou](/dam/evretou/) 48.7%** — slipping further below 50%; farmers are calling for more irrigation allocations
- [Kouris](/dam/kouris/) **41.4%** (47.6 MCM) · [Germasoyeia](/dam/germasoyeia/) **59.1%** — negligible change
- [Kalopanagiotis](/dam/kalopanagiotis/) and [Klirou-Malounta](/dam/klirou-malounta/) remain at 100%; [Achna](/dam/achna/) **1.9%** — zero inflow all season

**In the media:**
- [Farmers demand more irrigation water](https://cyprus-mail.com/2026/06/23/farmers-demand-more-irrigation-water) — Cyprus Mail
- [Integrating energy and water planning](https://cyprus-mail.com/2026/06/20/integrating-energy-and-water-planning) — Cyprus Mail
- [Cyprus dam levels double compared to last year, WDD official](https://www.parikiaki.com/2026/06/cyprus-dam-levels-double-compared-to-last-year-wdd-official) — Parikiaki
`;
};
