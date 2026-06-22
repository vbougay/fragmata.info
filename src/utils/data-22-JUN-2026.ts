import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.105, totalSince: 25.207 }, storage: { current: { amount: 48.041, percentage: 41.8 }, lastYear: { amount: 19.731, percentage: 17.2 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.009, totalSince: 4.178 }, storage: { current: { amount: 4.239, percentage: 24.8 }, lastYear: { amount: 3.571, percentage: 20.9 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.718 }, storage: { current: { amount: 2.561, percentage: 18.5 }, lastYear: { amount: 2.325, percentage: 16.8 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.003, totalSince: 3.742 }, storage: { current: { amount: 5.785, percentage: 37.3 }, lastYear: { amount: 5.610, percentage: 36.2 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.020, totalSince: 8.902 }, storage: { current: { amount: 8.024, percentage: 59.4 }, lastYear: { amount: 2.628, percentage: 19.5 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.075, totalSince: 21.859 }, storage: { current: { amount: 2.231, percentage: 51.9 }, lastYear: { amount: 2.552, percentage: 59.3 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.838, percentage: 54.1 }, lastYear: { amount: 1.128, percentage: 33.2 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.130, percentage: 1.9 }, lastYear: { amount: 0.422, percentage: 6.2 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.011, totalSince: 20.237 }, storage: { current: { amount: 21.690, percentage: 41.4 }, lastYear: { amount: 10.421, percentage: 19.9 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.023, totalSince: 9.574 }, storage: { current: { amount: 8.847, percentage: 51.5 }, lastYear: { amount: 3.693, percentage: 21.5 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.767, percentage: 81.1 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 11.822, percentage: 49.3 }, lastYear: { amount: 5.037, percentage: 21.0 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.957, percentage: 96.7 }, lastYear: { amount: 0.264, percentage: 26.7 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.840, percentage: 97.7 }, lastYear: { amount: 0.272, percentage: 31.6 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.257, percentage: 86.2 }, lastYear: { amount: 0.101, percentage: 33.9 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.607, percentage: 95.1 }, lastYear: { amount: 0.022, percentage: 1.3 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.004, totalSince: 1.485 }, storage: { current: { amount: 1.396, percentage: 97.6 }, lastYear: { amount: 0.228, percentage: 15.9 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.220, percentage: 60.6 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.788, percentage: 99.6 }, lastYear: { amount: 0.849, percentage: 30.3 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.003, totalSince: 1.135 }, storage: { current: { amount: 2.000, percentage: 100.0 }, lastYear: { amount: 1.373, percentage: 68.7 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 4.349, percentage: 97.6 }, lastYear: { amount: 2.591, percentage: 58.2 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through June 22, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:2.562, July:0.0, "Aug-Sep":0.0 }, total:113.875 },
];

export const getReportDate = (): string => "22-JUN-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 41.8% (48.0 MCM) — slow seasonal drawdown as dry season deepens; 24.6pp above last year\'s 17.2%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 41.8% (48.0 ΕΚΜ) — αργή εποχιακή υποχώρηση. 24.6μ.π. πάνω από πέρυσι (17.2%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 41.8% (48.0 МКМ) — медленный сезонный спад. +24.6пп выше прошлогодних 17.2%. Перекачка Арминоу→Курис: 20.44 МКМ с октября.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 24.8% (4.24 MCM) — stable, above last year\'s 20.9%. Seasonal inflow 4.18 MCM, gradual drawdown continues.',
      el: 'Ο Καλαβασός στο 24.8% (4.24 ΕΚΜ) — σταθερός, πάνω από πέρυσι (20.9%). Εισροή σεζόν 4.18 ΕΚΜ.',
      ru: 'Калавасос на 24.8% (4.24 МКМ) — стабильно, выше прошлогодних 20.9%. Приток 4.18 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.5% (2.56 MCM) — holding above last year\'s 16.8%. Seasonal inflow 1.72 MCM, slow drawdown continues.',
      el: 'Η Λεύκαρα στο 18.5% (2.56 ΕΚΜ) — πάνω από πέρυσι (16.8%). Εισροή σεζόν 1.72 ΕΚΜ.',
      ru: 'Лефкара на 18.5% (2.56 МКМ) — выше прошлогодних 16.8%. Приток 1.72 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 37.3% (5.79 MCM) — easing in dry season; above last year\'s 36.2%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 37.3% (5.79 ΕΚΜ) — υποχωρεί στην ξηρή περίοδο, πάνω από πέρυσι (36.2%). Ιστορικό max 5.99 ΕΚΜ τον Μάιο.',
      ru: 'Дипотамос на 37.3% (5.79 МКМ) — снижение в сухой сезон, выше прошлогодних 36.2%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 59.4% (8.02 MCM) — easing slowly from season high, 39.9pp above last year\'s 19.5%. Highest level since 2020.',
      el: 'Η Γερμασόγεια στο 59.4% (8.02 ΕΚΜ) — αργή υποχώρηση από το μέγιστο. 39.9μ.π. πάνω από πέρυσι (19.5%). Υψηλότερο από το 2020.',
      ru: 'Гермасойя на 59.4% (8.02 МКМ) — медленное снижение от сезонного максимума, +39.9пп выше прошлогодних 19.5%.',
    },
    'Arminou': {
      en: 'Arminou climbing to 51.9% (2.23 MCM) — small inflows still outpacing pumping. Seasonal inflow 21.9 MCM = 5.1× capacity; 20.44 MCM pumped to Kouris.',
      el: 'Ο Αρμίνου ανεβαίνει στο 51.9% (2.23 ΕΚΜ) — μικρές εισροές ξεπερνούν την άντληση. Εισροή σεζόν: 21.9 ΕΚΜ = 5.1× χωρητικότητα· 20.44 ΕΚΜ στον Κούρη.',
      ru: 'Арминоу растёт до 51.9% (2.23 МКМ); притоки опережают перекачку. Приток: 21.9 МКМ = 5.1× ёмкости; 20.44 МКМ в Курис.',
    },
    'Polemidia': {
      en: 'Polemidia at 54.1% (1.84 MCM) — clearest weekly faller, easing from season peak; 20.9pp above last year\'s 33.2%.',
      el: 'Η Πολεμίδια στο 54.1% (1.84 ΕΚΜ) — η πιο εμφανής εβδομαδιαία υποχώρηση. 20.9μ.π. πάνω από πέρυσι (33.2%).',
      ru: 'Полемидия на 54.1% (1.84 МКМ) — самое заметное недельное снижение; +20.9пп выше прошлогодних 33.2%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.9% (0.13 MCM), zero inflow all season. Far below last year\'s 6.2%. No recovery expected.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.9% (0.13 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (6.2%).',
      ru: 'Ахна критически низкая — 1.9% (0.13 МКМ), без притока за сезон. Далеко ниже прошлогодних 6.2%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 41.4% (21.69 MCM) — slow drawdown continues, 21.5pp above last year\'s 19.9%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 41.4% (21.69 ΕΚΜ) — αργή υποχώρηση, 21.5μ.π. πάνω από πέρυσι (19.9%). Εισροή 20.2 ΕΚΜ.',
      ru: 'Аспрокреммос на 41.4% (21.69 МКМ) — медленное снижение, +21.5пп выше прошлогодних 19.9%. Приток 20.2 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 51.5% (8.85 MCM) — easing from season high, 30.0pp above last year\'s 21.5%. Seasonal inflow 9.57 MCM.',
      el: 'Ο Καννάβιου στο 51.5% (8.85 ΕΚΜ) — υποχωρεί ελαφρά, 30.0μ.π. πάνω από πέρυσι (21.5%). Εισροή 9.57 ΕΚΜ.',
      ru: 'Каннавиу на 51.5% (8.85 МКМ) — снижается от пика, +30.0пп выше прошлогодних 21.5%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 81.1% (1.77 MCM) — steady summer decline. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 81.1% (1.77 ΕΚΜ) — σταθερή καλοκαιρινή υποχώρηση. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 81.1% (1.77 МКМ) — устойчивое летнее снижение. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 49.3% (11.82 MCM) — holding just below 50%; 28.3pp above last year\'s 21.0%. Slow drawdown continues.',
      el: 'Ο Εύρετου στο 49.3% (11.82 ΕΚΜ) — λίγο κάτω από 50%. 28.3μ.π. πάνω από πέρυσι (21.0%).',
      ru: 'Эвретоу на 49.3% (11.82 МКМ) — чуть ниже 50%. +28.3пп выше прошлогодних 21.0%.',
    },
    'Argaka': {
      en: 'Argaka at 96.7% (0.96 MCM) — just below full, easing slowly. Up from 26.7% last year — more than tripled year over year.',
      el: 'Η Αργάκα στο 96.7% (0.96 ΕΚΜ) — κοντά σε πλήρης, αργή υποχώρηση. Από 26.7% πέρυσι — πάνω από τριπλασιασμός.',
      ru: 'Аргака на 96.7% (0.96 МКМ) — чуть ниже полного уровня. Год назад 26.7% — более чем утроение.',
    },
    'Pomos': {
      en: 'Pomos at 97.7% (0.84 MCM) — easing slowly below full. Up from 31.6% last year — more than tripled.',
      el: 'Ο Πόμος στο 97.7% (0.84 ΕΚΜ) — αργή υποχώρηση κάτω από 100%. Από 31.6% πέρυσι — πάνω από τριπλασιασμός.',
      ru: 'Помос на 97.7% (0.84 МКМ) — медленное снижение. Год назад 31.6%.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 86.2% (0.26 MCM) — dry season decline continuing. Up from 33.9% last year — 2.5× year-over-year recovery.',
      el: 'Η Αγία Μαρίνα στο 86.2% (0.26 ΕΚΜ) — συνεχής μείωση ξηρής περιόδου. Αύξηση από 33.9% πέρυσι — 2.5× ανάκαμψη.',
      ru: 'Агия Марина на 86.2% (0.26 МКМ) — снижение сухого сезона. Год назад 33.9% — восстановление в 2.5×.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 95.1% (1.61 MCM) — slow decline from peak. Was 1.3% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 95.1% (1.61 ΕΚΜ) — αργή υποχώρηση. Από 1.3% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 95.1% (1.61 МКМ) — медленное снижение. Год назад 1.3% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 97.6% (1.40 MCM) — effectively full, very slow decline. Was 15.9% last year — 6.1× year-over-year recovery.',
      el: 'Ο Ξυλιάτος στο 97.6% (1.40 ΕΚΜ) — ουσιαστικά πλήρης, πολύ αργή υποχώρηση. Από 15.9% πέρυσι — 6.1× ανάκαμψη.',
      ru: 'Ксилиатос на 97.6% (1.40 МКМ) — фактически полон, очень медленное снижение. Год назад 15.9% — восстановление в 6.1×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 60.6% last year, holding at capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 60.6% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 60.6% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 99.6% (2.79 MCM) — essentially full, very slow decline. Was 30.3% last year — 3.3× year-over-year recovery.',
      el: 'Ο Ταμασός στο 99.6% (2.79 ΕΚΜ) — ουσιαστικά πλήρης. Από 30.3% πέρυσι — 3.3× ανάκαμψη.',
      ru: 'Тамассос на 99.6% (2.79 МКМ) — фактически полон. Год назад 30.3% — восстановление в 3.3×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 68.7% last year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 68.7% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 68.7% год назад.',
    },
    'Solea': {
      en: 'Solea at 97.6% (4.35 MCM) — holding near full as dry season progresses. Up from 58.2% last year — 1.68× year-over-year improvement.',
      el: 'Η Σολέα στο 97.6% (4.35 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 58.2% πέρυσι — 1.68× βελτίωση.',
      ru: 'Солеа на 97.6% (4.35 МКМ) — удерживается вблизи полного уровня. Рост с 58.2% год назад — улучшение в 1.68×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (15 — 22 Ιουνίου 2026)

Συνολική αποθήκευση **42.1%** (122.4 ΕΚΜ) — το plateau υποχωρεί αργά καθώς εδραιώνεται η ξηρή περίοδος. Το χάσμα με πέρυσι διευρύνεται σε **+22.1μ.π.** (20.0%), καθώς τα περσινά επίπεδα πέφτουν ταχύτερα. Εισροή σεζόν 25/26: **113.9 ΕΚΜ**. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): **20.44 ΕΚΜ** από τον Οκτώβριο.

**Αξιοσημείωτα:**
- **[Αρμίνου](/el/dam/arminou/) 51.9%** (+1.5μ.π. σε τρεις μέρες) — συνεχίζει να ανεβαίνει αντίθετα στην τάση· μικρές εισροές ξεπερνούν την άντληση στον [Κούρη](/el/dam/kouris/)
- **[Πολεμίδια](/el/dam/polemidia/) 54.1%** (-1.6μ.π.) — η πιο εμφανής εβδομαδιαία υποχώρηση
- **[Αγία Μαρίνα](/el/dam/agia-marina/) 86.2%** · **[Βυζακιά](/el/dam/vyzakia/) 95.1%** — σταθερή εποχιακή μείωση των μικρών φραγμάτων
- **[Εύρετου](/el/dam/evretou/) 49.3%** — παραμένει λίγο κάτω από 50%
- [Κούρης](/el/dam/kouris/) **41.8%** (48.0 ΕΚΜ) · [Γερμασόγεια](/el/dam/germasoyeia/) **59.4%** — αργή υποχώρηση κοντά στα μέγιστά τους
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) και [Κλήρου-Μαλούντα](/el/dam/klirou-malounta/) στο 100%· [Αχνά](/el/dam/achna/) **1.9%** — μηδέν εισροή όλη τη σεζόν

**Στα μέσα:**
- [Μετρήσεις βροχόπτωσης — Πληρότητα φραγμάτων](https://kitasweather.com/news/fragmata-vroxoptosi/) — KitasWeather
- [Κυπριακά φράγματα: επίπεδα διπλάσια σε σχέση με πέρυσι](https://www.parikiaki.com/2026/06/cyprus-dam-levels-double-compared-to-last-year-wdd-official) — Parikiaki
- [ΤΑΥ: Στο 42% η πληρότητα των φραγμάτων — Διπλάσια από πέρυσι](https://www.offsite.com.cy/eidiseis/koinonia/tay-sto-424-i-plirotita-ton-fragmaton-diplasia-apo-perysi) — Offsite
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (15 — 22 июня 2026)

Общий запас **42.1%** (122.4 МКМ) — плато медленно снижается по мере установления сухого сезона. Разрыв с прошлым годом расширяется до **+22.1пп** (20.0%), так как прошлогодние уровни падают быстрее. Приток сезона 25/26: **113.9 МКМ**. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): **20.44 МКМ** с октября.

**Основные изменения:**
- **[Арминоу](/ru/dam/arminou/) 51.9%** (+1.5пп за три дня) — продолжает расти против тренда; небольшие притоки опережают перекачку в [Курис](/ru/dam/kouris/)
- **[Полемидия](/ru/dam/polemidia/) 54.1%** (-1.6пп) — наиболее заметное недельное снижение
- **[Агия Марина](/ru/dam/agia-marina/) 86.2%** · **[Визакия](/ru/dam/vyzakia/) 95.1%** — устойчивое сезонное снижение малых водохранилищ
- **[Эвретоу](/ru/dam/evretou/) 49.3%** — удерживается чуть ниже 50%
- [Курис](/ru/dam/kouris/) **41.8%** (48.0 МКМ) · [Гермасойя](/ru/dam/germasoyeia/) **59.4%** — медленное снижение у сезонных максимумов
- [Калопанайотис](/ru/dam/kalopanagiotis/) и [Клиру-Малунта](/ru/dam/klirou-malounta/) на 100%; [Ахна](/ru/dam/achna/) **1.9%** — без притока за весь сезон

**В СМИ:**
- [Измерения осадков — заполненность водохранилищ](https://kitasweather.com/news/fragmata-vroxoptosi/) — KitasWeather
- [Уровень воды в дамбах Кипра почти вдвое выше прошлогоднего](https://ruscyprus.com/news/uroven-vody-v-dambah-kipra-vyros-do-42-4-na/58033) — RusCyprus
- [Уровень воды в дамбах почти вдвое превышает прошлогодний](https://www.parikiaki.com/2026/06/cyprus-dam-levels-double-compared-to-last-year-wdd-official) — Parikiaki
`;
  }
  return `
### Recent Changes (June 15 — 22, 2026)

Total storage at **42.1%** (122.4 MCM) — the plateau is easing slowly as the dry season settles in. The gap over last year is widening to **+22.1pp** (20.0%) as last year's levels fall faster. Season total inflow: **113.9 MCM**. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: **20.44 MCM** since October.

**Notable movements:**
- **[Arminou](/dam/arminou/) 51.9%** (+1.5pp in three days) — still climbing against the trend; small inflows continue to outpace pumping to [Kouris](/dam/kouris/)
- **[Polemidia](/dam/polemidia/) 54.1%** (-1.6pp) — the week's clearest faller, easing from its season peak
- **[Agia Marina](/dam/agia-marina/) 86.2%** · **[Vyzakia](/dam/vyzakia/) 95.1%** — steady seasonal drawdown across the small dams
- **[Evretou](/dam/evretou/) 49.3%** — holding just below 50%
- [Kouris](/dam/kouris/) **41.8%** (48.0 MCM) · [Germasoyeia](/dam/germasoyeia/) **59.4%** — slow drawdown near season highs
- [Kalopanagiotis](/dam/kalopanagiotis/) and [Klirou-Malounta](/dam/klirou-malounta/) remain at 100%; [Achna](/dam/achna/) **1.9%** — zero inflow all season

**In the media:**
- [Rainfall measurements — dam fullness levels](https://kitasweather.com/news/fragmata-vroxoptosi/) — KitasWeather
- [Cyprus dam levels double compared to last year, WDD official](https://www.parikiaki.com/2026/06/cyprus-dam-levels-double-compared-to-last-year-wdd-official) — Parikiaki
- [Dam levels almost double those of last year](https://cyprus-mail.com/2026/06/02/dam-levels-almost-double-those-of-last-year) — Cyprus Mail
`;
};
