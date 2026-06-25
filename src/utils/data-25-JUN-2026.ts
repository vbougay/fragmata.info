import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.026, totalSince: 25.304 }, storage: { current: { amount: 47.873, percentage: 41.6 }, lastYear: { amount: 19.434, percentage: 16.9 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.178 }, storage: { current: { amount: 4.228, percentage: 24.7 }, lastYear: { amount: 3.549, percentage: 20.8 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.718 }, storage: { current: { amount: 2.557, percentage: 18.5 }, lastYear: { amount: 2.318, percentage: 16.7 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.743 }, storage: { current: { amount: 5.744, percentage: 37.1 }, lastYear: { amount: 5.533, percentage: 35.7 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.005, totalSince: 8.917 }, storage: { current: { amount: 8.001, percentage: 59.3 }, lastYear: { amount: 2.580, percentage: 19.1 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.020, totalSince: 21.921 }, storage: { current: { amount: 2.281, percentage: 53.0 }, lastYear: { amount: 2.533, percentage: 58.9 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.819, percentage: 53.5 }, lastYear: { amount: 1.118, percentage: 32.9 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.130, percentage: 1.9 }, lastYear: { amount: 0.417, percentage: 6.1 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.243 }, storage: { current: { amount: 21.632, percentage: 41.3 }, lastYear: { amount: 10.286, percentage: 19.6 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.003, totalSince: 9.582 }, storage: { current: { amount: 8.813, percentage: 51.3 }, lastYear: { amount: 3.659, percentage: 21.3 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.761, percentage: 80.8 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 11.768, percentage: 49.0 }, lastYear: { amount: 4.986, percentage: 20.8 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.954, percentage: 96.4 }, lastYear: { amount: 0.255, percentage: 25.8 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.835, percentage: 97.1 }, lastYear: { amount: 0.267, percentage: 31.0 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.253, percentage: 84.9 }, lastYear: { amount: 0.096, percentage: 32.2 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.607, percentage: 95.1 }, lastYear: { amount: 0.022, percentage: 1.3 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.486 }, storage: { current: { amount: 1.390, percentage: 97.2 }, lastYear: { amount: 0.222, percentage: 15.5 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.215, percentage: 59.2 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: -0.001, totalSince: 2.657 }, storage: { current: { amount: 2.782, percentage: 99.4 }, lastYear: { amount: 0.842, percentage: 30.1 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.138 }, storage: { current: { amount: 2.000, percentage: 100.0 }, lastYear: { amount: 1.370, percentage: 68.5 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: -0.002, totalSince: 2.634 }, storage: { current: { amount: 4.329, percentage: 97.2 }, lastYear: { amount: 2.573, percentage: 57.8 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through June 25, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:2.752, July:0.0, "Aug-Sep":0.0 }, total:114.065 },
];

export const getReportDate = (): string => "25-JUN-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 41.6% (47.9 MCM) — slow seasonal drawdown; 24.7pp above last year\'s 16.9%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 41.6% (47.9 ΕΚΜ) — αργή εποχιακή υποχώρηση. 24.7μ.π. πάνω από πέρυσι (16.9%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 41.6% (47.9 МКМ) — медленный сезонный спад. +24.7пп выше прошлогодних 16.9%. Перекачка Арминоу→Курис: 20.44 МКМ с октября.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 24.7% (4.23 MCM) — stable, above last year\'s 20.8%. Seasonal inflow 4.18 MCM, gradual drawdown continues.',
      el: 'Ο Καλαβασός στο 24.7% (4.23 ΕΚΜ) — σταθερός, πάνω από πέρυσι (20.8%). Εισροή σεζόν 4.18 ΕΚΜ.',
      ru: 'Калавасос на 24.7% (4.23 МКМ) — стабильно, выше прошлогодних 20.8%. Приток 4.18 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.5% (2.56 MCM) — holding above last year\'s 16.7%. Seasonal inflow 1.72 MCM, slow drawdown continues.',
      el: 'Η Λεύκαρα στο 18.5% (2.56 ΕΚΜ) — πάνω από πέρυσι (16.7%). Εισροή σεζόν 1.72 ΕΚΜ.',
      ru: 'Лефкара на 18.5% (2.56 МКМ) — выше прошлогодних 16.7%. Приток 1.72 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 37.1% (5.74 MCM) — easing in dry season; 1.4pp above last year\'s 35.7%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 37.1% (5.74 ΕΚΜ) — υποχωρεί στην ξηρή περίοδο, 1.4μ.π. πάνω από πέρυσι (35.7%). Ιστορικό max τον Μάιο.',
      ru: 'Дипотамос на 37.1% (5.74 МКМ) — снижение в сухой сезон, +1.4пп выше прошлогодних 35.7%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 59.3% (8.00 MCM) — easing slowly from season high, 40.2pp above last year\'s 19.1%. Highest level since 2020.',
      el: 'Η Γερμασόγεια στο 59.3% (8.00 ΕΚΜ) — αργή υποχώρηση από το μέγιστο. 40.2μ.π. πάνω από πέρυσι (19.1%).',
      ru: 'Гермасойя на 59.3% (8.00 МКМ) — медленное снижение от сезонного максимума, +40.2пп выше прошлогодних 19.1%.',
    },
    'Arminou': {
      en: 'Arminou climbing to 53.0% (2.28 MCM) — persistent light inflows outpacing pumping to Kouris. Season inflow 21.9 MCM = 5.1× capacity; 20.44 MCM pumped to Kouris.',
      el: 'Ο Αρμίνου ανεβαίνει στο 53.0% (2.28 ΕΚΜ) — μικρές σταθερές εισροές ξεπερνούν την άντληση. Εισροή σεζόν: 21.9 ΕΚΜ = 5.1× χωρητικότητα.',
      ru: 'Арминоу растёт до 53.0% (2.28 МКМ); притоки опережают перекачку в Курис. Приток сезона: 21.9 МКМ = 5.1× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 53.5% (1.82 MCM) — continuing slow decline from season peak; 20.6pp above last year\'s 32.9%.',
      el: 'Η Πολεμίδια στο 53.5% (1.82 ΕΚΜ) — συνεχής αργή υποχώρηση. 20.6μ.π. πάνω από πέρυσι (32.9%).',
      ru: 'Полемидия на 53.5% (1.82 МКМ) — продолжает медленно снижаться; +20.6пп выше прошлогодних 32.9%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.9% (0.13 MCM), zero inflow all season. Far below last year\'s 6.1%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.9% (0.13 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (6.1%).',
      ru: 'Ахна критически низкая — 1.9% (0.13 МКМ), без притока за сезон. Далеко ниже прошлогодних 6.1%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 41.3% (21.63 MCM) — slow drawdown, 21.7pp above last year\'s 19.6%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 41.3% (21.63 ΕΚΜ) — αργή υποχώρηση, 21.7μ.π. πάνω από πέρυσι (19.6%). Εισροή 20.2 ΕΚΜ.',
      ru: 'Аспрокреммос на 41.3% (21.63 МКМ) — медленное снижение, +21.7пп выше прошлогодних 19.6%. Приток 20.2 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 51.3% (8.81 MCM) — easing from season high, 30.0pp above last year\'s 21.3%. Seasonal inflow 9.58 MCM.',
      el: 'Ο Καννάβιου στο 51.3% (8.81 ΕΚΜ) — υποχωρεί ελαφρά, 30.0μ.π. πάνω από πέρυσι (21.3%). Εισροή 9.58 ΕΚΜ.',
      ru: 'Каннавиу на 51.3% (8.81 МКМ) — снижается от пика, +30.0пп выше прошлогодних 21.3%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 80.8% (1.76 MCM) — steady summer decline. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 80.8% (1.76 ΕΚΜ) — σταθερή καλοκαιρινή υποχώρηση. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 80.8% (1.76 МКМ) — устойчивое летнее снижение. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 49.0% (11.77 MCM) — below 50%; 28.2pp above last year\'s 20.8%. Slow drawdown continues.',
      el: 'Ο Εύρετου στο 49.0% (11.77 ΕΚΜ) — κάτω από 50%. 28.2μ.π. πάνω από πέρυσι (20.8%).',
      ru: 'Эвретоу на 49.0% (11.77 МКМ) — ниже 50%. +28.2пп выше прошлогодних 20.8%.',
    },
    'Argaka': {
      en: 'Argaka at 96.4% (0.95 MCM) — just below full, easing slowly. Up from 25.8% last year — nearly 4× year over year.',
      el: 'Η Αργάκα στο 96.4% (0.95 ΕΚΜ) — κοντά σε πλήρης, αργή υποχώρηση. Από 25.8% πέρυσι — σχεδόν 4× ανάκαμψη.',
      ru: 'Аргака на 96.4% (0.95 МКМ) — чуть ниже полного уровня. Год назад 25.8% — почти 4-кратный рост.',
    },
    'Pomos': {
      en: 'Pomos at 97.1% (0.84 MCM) — easing slowly below full. Up from 31.0% last year — more than tripled.',
      el: 'Ο Πόμος στο 97.1% (0.84 ΕΚΜ) — αργή υποχώρηση κάτω από 100%. Από 31.0% πέρυσι — πάνω από τριπλασιασμός.',
      ru: 'Помос на 97.1% (0.84 МКМ) — медленное снижение. Год назад 31.0%.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 84.9% (0.25 MCM) — dry season decline continuing. Up from 32.2% last year — 2.6× year-over-year recovery.',
      el: 'Η Αγία Μαρίνα στο 84.9% (0.25 ΕΚΜ) — συνεχής μείωση ξηρής περιόδου. Αύξηση από 32.2% πέρυσι — 2.6× ανάκαμψη.',
      ru: 'Агия Марина на 84.9% (0.25 МКМ) — снижение сухого сезона. Год назад 32.2% — восстановление в 2.6×.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 95.1% (1.61 MCM) — slow decline from peak. Was 1.3% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 95.1% (1.61 ΕΚΜ) — αργή υποχώρηση. Από 1.3% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 95.1% (1.61 МКМ) — медленное снижение. Год назад 1.3% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 97.2% (1.39 MCM) — effectively full, very slow decline. Was 15.5% last year — 6.3× year-over-year recovery.',
      el: 'Ο Ξυλιάτος στο 97.2% (1.39 ΕΚΜ) — ουσιαστικά πλήρης, πολύ αργή υποχώρηση. Από 15.5% πέρυσι — 6.3× ανάκαμψη.',
      ru: 'Ксилиатос на 97.2% (1.39 МКМ) — фактически полон, очень медленное снижение. Год назад 15.5% — восстановление в 6.3×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 59.2% last year, holding at capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 59.2% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 59.2% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 99.4% (2.78 MCM) — essentially full, very slow decline. Was 30.1% last year — 3.3× year-over-year recovery.',
      el: 'Ο Ταμασός στο 99.4% (2.78 ΕΚΜ) — ουσιαστικά πλήρης. Από 30.1% πέρυσι — 3.3× ανάκαμψη.',
      ru: 'Тамассос на 99.4% (2.78 МКМ) — фактически полон. Год назад 30.1% — восстановление в 3.3×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 68.5% last year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 68.5% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 68.5% год назад.',
    },
    'Solea': {
      en: 'Solea at 97.2% (4.33 MCM) — holding near full as dry season progresses. Up from 57.8% last year — 1.68× year-over-year improvement.',
      el: 'Η Σολέα στο 97.2% (4.33 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 57.8% πέρυσι — 1.68× βελτίωση.',
      ru: 'Солеа на 97.2% (4.33 МКМ) — удерживается вблизи полного уровня. Рост с 57.8% год назад — улучшение в 1.68×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (16 — 25 Ιουνίου 2026)

Συνολική αποθήκευση **42.0%** (122.0 ΕΚΜ) — μόλις -1.0 ΕΚΜ σε εννέα μέρες, πρακτικά αμετάβλητη. Το χάσμα με πέρυσι διευρύνεται σε **+22.2μ.π.** (19.8%), καθώς τα περσινά επίπεδα πέφτουν ταχύτερα. Εισροή σεζόν 25/26: **114.1 ΕΚΜ**. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): **20.44 ΕΚΜ** από τον Οκτώβριο.

**Αξιοσημείωτα:**
- **[Αρμίνου](/el/dam/arminou/) 53.0%** (+4.1μ.π. από 16/6) — ανεβαίνει σταθερά αντίθετα στην τάση· μικρές συνεχείς εισροές ξεπερνούν την άντληση στον [Κούρη](/el/dam/kouris/)
- **[Πολεμίδια](/el/dam/polemidia/) 53.5%** (-2.6μ.π.) · **[Αγία Μαρίνα](/el/dam/agia-marina/) 84.9%** (-4.0μ.π.) — οι μεγαλύτερες πτώσεις της εβδομάδας
- **[Πόμος](/el/dam/pomos/) 97.1%** (-2.2μ.π.) · **[Αργάκα](/el/dam/argaka/) 96.4%** — μικρά φράγματα αργά υποχωρούν
- [Κούρης](/el/dam/kouris/) **41.6%** (47.9 ΕΚΜ) · [Γερμασόγεια](/el/dam/germasoyeia/) **59.3%** — ουσιαστικά αμετάβλητοι
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) και [Κλήρου-Μαλούντα](/el/dam/klirou-malounta/) στο 100%· [Αχνά](/el/dam/achna/) **1.9%** — μηδέν εισροή όλη τη σεζόν

**Στα μέσα:**
- [ΤΑΥ: Σταδιακή διάθεση εξοπλισμού εξοικονόμησης νερού από τον Ιούνιο 2026](https://dialogos.com.cy/tay-stadiaki-diathesi-exoplismoy-exoikonomisis-neroy-apo-ton-ioynio-2026/) — Διάλογος
- [Καλοκαίρι-καμίνι: θερμό καλοκαίρι για Κύπρο, βροχές αναμένονται από Σεπτέμβριο](https://www.politis.com.cy/politis-news/cyprus/1013524/kalokairi-kamini-provlepoyn-ta-efropaika-kentra-ghia-tin-kypro-omos-sto-vathos-vrokhes-apo-ton-septemvrio) — Πολίτης
- [ΤΑΥ: Στο 42,4% η πληρότητα των φραγμάτων — Διπλάσια από πέρυσι](https://www.offsite.com.cy/eidiseis/koinonia/tay-sto-424-i-plirotita-ton-fragmaton-diplasia-apo-perysi) — Offsite
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (16 — 25 июня 2026)

Общий запас **42.0%** (122.0 МКМ) — всего -1.0 МКМ за девять дней, практически без изменений. Разрыв с прошлым годом расширяется до **+22.2пп** (19.8%), так как прошлогодние уровни падают быстрее. Приток сезона 25/26: **114.1 МКМ**. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): **20.44 МКМ** с октября.

**Основные изменения:**
- **[Арминоу](/ru/dam/arminou/) 53.0%** (+4.1пп с 16 июня) — уверенно растёт против тренда; небольшие постоянные притоки опережают перекачку в [Курис](/ru/dam/kouris/)
- **[Полемидия](/ru/dam/polemidia/) 53.5%** (-2.6пп) · **[Агия Марина](/ru/dam/agia-marina/) 84.9%** (-4.0пп) — наиболее заметные снижения за неделю
- **[Помос](/ru/dam/pomos/) 97.1%** (-2.2пп) · **[Аргака](/ru/dam/argaka/) 96.4%** — малые водохранилища медленно снижаются
- [Курис](/ru/dam/kouris/) **41.6%** (47.9 МКМ) · [Гермасойя](/ru/dam/germasoyeia/) **59.3%** — практически без изменений
- [Калопанайотис](/ru/dam/kalopanagiotis/) и [Клиру-Малунта](/ru/dam/klirou-malounta/) на 100%; [Ахна](/ru/dam/achna/) **1.9%** — без притока за весь сезон

**В СМИ:**
- [Уровень воды в дамбах Кипра вырос до 42,4% — почти вдвое больше прошлогоднего](https://ruscyprus.com/news/uroven-vody-v-dambah-kipra-vyros-do-42-4-na/58033) — RusCyprus
- [Измерения осадков — заполненность водохранилищ](https://kitasweather.com/news/fragmata-vroxoptosi/) — KitasWeather
- [Уровень воды в водохранилищах Кипра приближается к 100 млн кубометров](https://ruscyprus.com/news/uroven-vody-v-vodohranilishchah-kipra/54512) — RusCyprus
`;
  }
  return `
### Recent Changes (June 16 — 25, 2026)

Total storage at **42.0%** (122.0 MCM) — down just 1.0 MCM over nine days, essentially flat. The gap over last year is widening to **+22.2pp** (19.8%) as last year's levels fall faster. Season total inflow: **114.1 MCM**. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: **20.44 MCM** since October.

**Notable movements:**
- **[Arminou](/dam/arminou/) 53.0%** (+4.1pp since June 16) — steadily climbing against the seasonal tide; persistent light inflows keep outpacing pumping to [Kouris](/dam/kouris/)
- **[Polemidia](/dam/polemidia/) 53.5%** (-2.6pp) · **[Agia Marina](/dam/agia-marina/) 84.9%** (-4.0pp) — the week's clearest fallers
- **[Pomos](/dam/pomos/) 97.1%** (-2.2pp) · **[Argaka](/dam/argaka/) 96.4%** — small dams easing gradually
- [Kouris](/dam/kouris/) **41.6%** (47.9 MCM) · [Germasoyeia](/dam/germasoyeia/) **59.3%** — essentially unchanged
- [Kalopanagiotis](/dam/kalopanagiotis/) and [Klirou-Malounta](/dam/klirou-malounta/) remain at 100%; [Achna](/dam/achna/) **1.9%** — zero inflow all season

**In the media:**
- [Integrating energy and water planning](https://cyprus-mail.com/2026/06/20/integrating-energy-and-water-planning) — Cyprus Mail
- [Cyprus dam levels double compared to last year, WDD official](https://www.parikiaki.com/2026/06/cyprus-dam-levels-double-compared-to-last-year-wdd-official) — Parikiaki
- [WDD to distribute water-saving equipment from June 2026](https://dialogos.com.cy/tay-stadiaki-diathesi-exoplismoy-exoikonomisis-neroy-apo-ton-ioynio-2026/) — Dialogos
`;
};
