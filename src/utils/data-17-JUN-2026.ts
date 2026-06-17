import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.044, totalSince: 25.026 }, storage: { current: { amount: 48.229, percentage: 41.9 }, lastYear: { amount: 20.057, percentage: 17.4 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.006, totalSince: 4.169 }, storage: { current: { amount: 4.247, percentage: 24.8 }, lastYear: { amount: 3.679, percentage: 21.5 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.001, totalSince: 1.718 }, storage: { current: { amount: 2.569, percentage: 18.5 }, lastYear: { amount: 2.336, percentage: 16.9 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.005, totalSince: 3.736 }, storage: { current: { amount: 5.834, percentage: 37.6 }, lastYear: { amount: 5.703, percentage: 36.8 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.003, totalSince: 8.874 }, storage: { current: { amount: 8.055, percentage: 59.7 }, lastYear: { amount: 2.709, percentage: 20.1 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.031, totalSince: 21.736 }, storage: { current: { amount: 2.128, percentage: 49.5 }, lastYear: { amount: 2.585, percentage: 60.1 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.903, percentage: 56.0 }, lastYear: { amount: 1.145, percentage: 33.7 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.132, percentage: 1.9 }, lastYear: { amount: 0.426, percentage: 6.3 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.006, totalSince: 20.212 }, storage: { current: { amount: 21.763, percentage: 41.6 }, lastYear: { amount: 10.619, percentage: 20.3 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.004, totalSince: 9.545 }, storage: { current: { amount: 8.893, percentage: 51.8 }, lastYear: { amount: 3.75, percentage: 21.8 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.784, percentage: 81.8 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 11.905, percentage: 49.6 }, lastYear: { amount: 5.107, percentage: 21.3 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.962, percentage: 97.2 }, lastYear: { amount: 0.277, percentage: 28.0 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.001, totalSince: 0.844 }, storage: { current: { amount: 0.853, percentage: 99.2 }, lastYear: { amount: 0.284, percentage: 33.0 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.263, percentage: 88.3 }, lastYear: { amount: 0.110, percentage: 36.9 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.618, percentage: 95.7 }, lastYear: { amount: 0.022, percentage: 1.3 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.001, totalSince: 1.479 }, storage: { current: { amount: 1.401, percentage: 98.0 }, lastYear: { amount: 0.238, percentage: 16.6 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.231, percentage: 63.6 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.001, totalSince: 2.656 }, storage: { current: { amount: 2.794, percentage: 99.8 }, lastYear: { amount: 0.866, percentage: 30.9 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.130 }, storage: { current: { amount: 2.000, percentage: 100.0 }, lastYear: { amount: 1.384, percentage: 69.2 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 4.371, percentage: 98.1 }, lastYear: { amount: 2.623, percentage: 58.9 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through June 17, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:2.155, July:0.0, "Aug-Sep":0.0 }, total:113.468 },
];

export const getReportDate = (): string => "17-JUN-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 41.9% (48.2 MCM) — easing 0.1pp as dry season deepens; 24.5pp above last year\'s 17.4%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 41.9% (48.2 ΕΚΜ) — μικρή υποχώρηση στην ξηρή περίοδο. 24.5μ.π. πάνω από πέρυσι (17.4%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 41.9% (48.2 МКМ) — небольшое снижение в сухой сезон. +24.5пп выше прошлогодних 17.4%. Перекачка Арминоу→Курис: 20.44 МКМ с октября.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 24.8% (4.25 MCM) — stable, above last year\'s 21.5%. Seasonal inflow 4.17 MCM, gradual drawdown continues.',
      el: 'Ο Καλαβασός στο 24.8% (4.25 ΕΚΜ) — σταθερός, πάνω από πέρυσι (21.5%). Εισροή σεζόν 4.17 ΕΚΜ.',
      ru: 'Калавасос на 24.8% (4.25 МКМ) — стабильно, выше прошлогодних 21.5%. Приток 4.17 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.5% (2.57 MCM) — holding above last year\'s 16.9%. Seasonal inflow 1.72 MCM, slow drawdown continues.',
      el: 'Η Λεύκαρα στο 18.5% (2.57 ΕΚΜ) — πάνω από πέρυσι (16.9%). Εισροή σεζόν 1.72 ΕΚΜ.',
      ru: 'Лефкара на 18.5% (2.57 МКМ) — выше прошлогодних 16.9%. Приток 1.72 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 37.6% (5.83 MCM) — easing below June 16; above last year\'s 36.8%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 37.6% (5.83 ΕΚΜ) — υποχωρεί ελαφρά, πάνω από πέρυσι (36.8%). Ιστορικό max 5.99 ΕΚΜ τον Μάιο.',
      ru: 'Дипотамос на 37.6% (5.83 МКМ) — небольшое снижение, выше прошлогодних 36.8%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 59.7% (8.06 MCM) — holding near season high, 39.6pp above last year\'s 20.1%. Highest level since 2020.',
      el: 'Η Γερμασόγεια στο 59.7% (8.06 ΕΚΜ) — παραμένει κοντά στο μέγιστο. 39.6μ.π. πάνω από πέρυσι (20.1%). Υψηλότερο από το 2020.',
      ru: 'Гермасойя на 59.7% (8.06 МКМ) — удерживается у сезонного максимума, +39.6пп выше прошлогодних 20.1%.',
    },
    'Arminou': {
      en: 'Arminou at 49.5% (2.13 MCM). Seasonal inflow 21.7 MCM = 5.1× capacity; 20.44 MCM pumped to Kouris since October.',
      el: 'Ο Αρμίνου στο 49.5% (2.13 ΕΚΜ). Εισροή σεζόν: 21.7 ΕΚΜ = 5.1× χωρητικότητα· 20.44 ΕΚΜ στον Κούρη από τον Οκτώβριο.',
      ru: 'Арминоу на 49.5% (2.13 МКМ). Приток: 21.7 МКМ = 5.1× ёмкости; 20.44 МКМ перекачано в Курис с октября.',
    },
    'Polemidia': {
      en: 'Polemidia at 56.0% (1.90 MCM) — easing further from season peak; 22.3pp above last year\'s 33.7%.',
      el: 'Η Πολεμίδια στο 56.0% (1.90 ΕΚΜ) — συνεχής υποχώρηση από το μέγιστο. 22.3μ.π. πάνω από πέρυσι (33.7%).',
      ru: 'Полемидия на 56.0% (1.90 МКМ) — продолжает снижаться от пика; +22.3пп выше прошлогодних 33.7%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.9% (0.13 MCM), zero inflow all season. Far below last year\'s 6.3%. No recovery expected.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.9% (0.13 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (6.3%).',
      ru: 'Ахна критически низкая — 1.9% (0.13 МКМ), без притока за сезон. Далеко ниже прошлогодних 6.3%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 41.6% (21.76 MCM) — slow drawdown continues, 21.3pp above last year\'s 20.3%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 41.6% (21.76 ΕΚΜ) — αργή υποχώρηση, 21.3μ.π. πάνω από πέρυσι (20.3%). Εισροή 20.2 ΕΚΜ.',
      ru: 'Аспрокреммос на 41.6% (21.76 МКМ) — медленное снижение, +21.3пп выше прошлогодних 20.3%. Приток 20.2 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 51.8% (8.89 MCM) — easing from season high, 30.0pp above last year\'s 21.8%. Seasonal inflow 9.55 MCM.',
      el: 'Ο Καννάβιου στο 51.8% (8.89 ΕΚΜ) — υποχωρεί ελαφρά, 30.0μ.π. πάνω από πέρυσι (21.8%). Εισροή 9.55 ΕΚΜ.',
      ru: 'Каннавиу на 51.8% (8.89 МКМ) — снижается от пика, +30.0пп выше прошлогодних 21.8%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 81.8% (1.78 MCM) — steady summer decline. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 81.8% (1.78 ΕΚΜ) — σταθερή καλοκαιρινή υποχώρηση. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 81.8% (1.78 МКМ) — устойчивое летнее снижение. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 49.6% (11.91 MCM) — dipping below 50% again; 28.3pp above last year\'s 21.3%. Slow drawdown continues.',
      el: 'Ο Εύρετου στο 49.6% (11.91 ΕΚΜ) — κάτω από 50% ξανά. 28.3μ.π. πάνω από πέρυσι (21.3%).',
      ru: 'Эвретоу на 49.6% (11.91 МКМ) — ниже 50%. +28.3пп выше прошлогодних 21.3%.',
    },
    'Argaka': {
      en: 'Argaka at 97.2% (0.96 MCM) — just below full, easing slowly. Up from 28.0% last year — more than tripled year over year.',
      el: 'Η Αργάκα στο 97.2% (0.96 ΕΚΜ) — κοντά σε πλήρης, αργή υποχώρηση. Από 28.0% πέρυσι — πάνω από τριπλασιασμός.',
      ru: 'Аргака на 97.2% (0.96 МКМ) — чуть ниже полного уровня. Год назад 28.0% — более чем утроение.',
    },
    'Pomos': {
      en: 'Pomos at 99.2% (0.85 MCM) — easing slowly below full. Up from 33.0% last year — nearly tripled.',
      el: 'Ο Πόμος στο 99.2% (0.85 ΕΚΜ) — αργή υποχώρηση κάτω από 100%. Από 33.0% πέρυσι — σχεδόν τριπλασιασμός.',
      ru: 'Помос на 99.2% (0.85 МКМ) — медленное снижение. Год назад 33.0%.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 88.3% (0.26 MCM) — dry season decline continuing. Up from 36.9% last year — 2.4× year-over-year recovery.',
      el: 'Η Αγία Μαρίνα στο 88.3% (0.26 ΕΚΜ) — συνεχής μείωση ξηρής περιόδου. Αύξηση από 36.9% πέρυσι — 2.4× ανάκαμψη.',
      ru: 'Агия Марина на 88.3% (0.26 МКМ) — снижение сухого сезона. Год назад 36.9% — восстановление в 2.4×.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 95.7% (1.62 MCM) — slow decline from peak. Was 1.3% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 95.7% (1.62 ΕΚΜ) — αργή υποχώρηση. Από 1.3% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 95.7% (1.62 МКМ) — медленное снижение. Год назад 1.3% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 98.0% (1.40 MCM) — effectively full, very slow decline. Was 16.6% last year — 5.9× year-over-year recovery.',
      el: 'Ο Ξυλιάτος στο 98.0% (1.40 ΕΚΜ) — ουσιαστικά πλήρης, πολύ αργή υποχώρηση. Από 16.6% πέρυσι — 5.9× ανάκαμψη.',
      ru: 'Ксилиатос на 98.0% (1.40 МКМ) — фактически полон, очень медленное снижение. Год назад 16.6% — восстановление в 5.9×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 63.6% last year, holding at capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 63.6% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 63.6% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 99.8% (2.79 MCM) — essentially full, very slow decline. Was 30.9% last year — 3.2× year-over-year recovery.',
      el: 'Ο Ταμασός στο 99.8% (2.79 ΕΚΜ) — ουσιαστικά πλήρης. Από 30.9% πέρυσι — 3.2× ανάκαμψη.',
      ru: 'Тамассос на 99.8% (2.79 МКМ) — фактически полон. Год назад 30.9% — восстановление в 3.2×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 69.2% last year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 69.2% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 69.2% год назад.',
    },
    'Solea': {
      en: 'Solea at 98.1% (4.37 MCM) — holding near full as dry season progresses. Up from 58.9% last year — 1.67× year-over-year improvement.',
      el: 'Η Σολέα στο 98.1% (4.37 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 58.9% πέρυσι — 1.67× βελτίωση.',
      ru: 'Солеа на 98.1% (4.37 МКМ) — удерживается вблизи полного уровня. Рост с 58.9% год назад — улучшение в 1.67×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (10 — 17 Ιουνίου 2026)

Συνολική αποθήκευση **42.3%** (122.9 ΕΚΜ) — σταθερά επίπεδη για σχεδόν δύο εβδομάδες. Η ξηρή περίοδος αρχίζει να κάνει αισθητή την παρουσία της με αργές μειώσεις στα μικρότερα φράγματα. **+21.9μ.π. πάνω από πέρυσι** (20.4%). Εισροή σεζόν 25/26: **113.5 ΕΚΜ**. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): **20.44 ΕΚΜ** από τον Οκτώβριο.

**Αξιοσημείωτα:**
- **[Αρμίνου](/el/dam/arminou/) 49.5%** (+0.6μ.π. από 10 Ιουνίου) — μικρές εισροές συνεχίζουν να αντισταθμίζουν την άντληση στον [Κούρη](/el/dam/kouris/)
- **[Πολεμίδια](/el/dam/polemidia/) 56.0%** (-2.9μ.π. από 10 Ιουνίου) — η πιο εμφανής εβδομαδιαία υποχώρηση
- **[Αγία Μαρίνα](/el/dam/agia-marina/) 88.3%** (-4.1μ.π.) · **[Βυζακιά](/el/dam/vyzakia/) 95.7%** (-2.1μ.π.) — σταθερή εποχιακή μείωση
- **[Εύρετου](/el/dam/evretou/) 49.6%** — παραμένει κάτω από 50%
- **[Μαυροκόλυμπος](/el/dam/mavrokolympos/) 81.8%** (-1.5μ.π.) — σταθερή καλοκαιρινή υποχώρηση· ήταν 0% πέρυσι
- [Κούρης](/el/dam/kouris/) **41.9%** (48.2 ΕΚΜ) · [Γερμασόγεια](/el/dam/germasoyeia/) **59.7%** — σταθεροί κοντά στα μέγιστά τους
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) και [Κλήρου-Μαλούντα](/el/dam/klirou-malounta/) στο 100%· [Αχνά](/el/dam/achna/) **1.9%** — μηδέν εισροή όλη τη σεζόν

**Στα μέσα:**
- [Μετρήσεις βροχόπτωσης 15/06 — Πληρότητα φραγμάτων](https://kitasweather.com/news/fragmata-vroxoptosi/metriseis-vroxoptosis-telefteou-triimerou-plirotita-fragmaton-15-6/) — KitasWeather
- [Κυπριακά φράγματα: επίπεδα διπλάσια σε σχέση με πέρυσι](https://www.parikiaki.com/2026/06/cyprus-dam-levels-double-compared-to-last-year-wdd-official) — Parikiaki
- [ΤΑΥ: Στο 42,4% η πληρότητα των φραγμάτων — Διπλάσια από πέρυσι](https://www.offsite.com.cy/eidiseis/koinonia/tay-sto-424-i-plirotita-ton-fragmaton-diplasia-apo-perysi) — Offsite
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (10 — 17 июня 2026)

Общий запас **42.3%** (122.9 МКМ) — фактически без изменений почти две недели. Сухой сезон набирает силу, медленно снижая уровни в небольших водохранилищах. **+21.9пп выше прошлогодних** (20.4%). Приток сезона 25/26: **113.5 МКМ**. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): **20.44 МКМ** с октября.

**Основные изменения:**
- **[Арминоу](/ru/dam/arminou/) 49.5%** (+0.6пп с 10 июня) — небольшие притоки продолжают компенсировать перекачку в [Курис](/ru/dam/kouris/)
- **[Полемидия](/ru/dam/polemidia/) 56.0%** (-2.9пп с 10 июня) — наиболее заметное недельное снижение
- **[Агия Марина](/ru/dam/agia-marina/) 88.3%** (-4.1пп) · **[Визакия](/ru/dam/vyzakia/) 95.7%** (-2.1пп) — устойчивое сезонное снижение
- **[Эвретоу](/ru/dam/evretou/) 49.6%** — удерживается ниже 50%
- **[Мавроколимпос](/ru/dam/mavrokolympos/) 81.8%** (-1.5пп) — плавное летнее снижение; год назад 0%
- [Курис](/ru/dam/kouris/) **41.9%** (48.2 МКМ) · [Гермасойя](/ru/dam/germasoyeia/) **59.7%** — стабильно у сезонных максимумов
- [Калопанайотис](/ru/dam/kalopanagiotis/) и [Клиру-Малунта](/ru/dam/klirou-malounta/) на 100%; [Ахна](/ru/dam/achna/) **1.9%** — без притока за весь сезон

**В СМИ:**
- [Измерения осадков 15/06 — заполненность водохранилищ](https://kitasweather.com/news/fragmata-vroxoptosi/metriseis-vroxoptosis-telefteou-triimerou-plirotita-fragmaton-15-6/) — KitasWeather
- [Уровень воды в дамбах Кипра вырос до 42,4% — почти вдвое больше прошлогоднего](https://ruscyprus.com/news/uroven-vody-v-dambah-kipra-vyros-do-42-4-na/58033) — RusCyprus
- [Уровень воды в дамбах почти вдвое превышает прошлогодний](https://www.parikiaki.com/2026/06/cyprus-dam-levels-double-compared-to-last-year-wdd-official) — Parikiaki
`;
  }
  return `
### Recent Changes (June 10 — 17, 2026)

Total storage at **42.3%** (122.9 MCM) — essentially flat for nearly two weeks. The dry season is quietly tightening its grip with slow declines in smaller reservoirs. **+21.9pp above last year** (20.4%). Season total inflow: **113.5 MCM**. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: **20.44 MCM** since October.

**Notable movements:**
- **[Arminou](/dam/arminou/) 49.5%** (+0.6pp since June 10) — small inflows continue to offset pumping to [Kouris](/dam/kouris/)
- **[Polemidia](/dam/polemidia/) 56.0%** (-2.9pp since June 10) — clearest weekly drop, easing from season high
- **[Agia Marina](/dam/agia-marina/) 88.3%** (-4.1pp) · **[Vyzakia](/dam/vyzakia/) 95.7%** (-2.1pp) — steady seasonal drawdown
- **[Evretou](/dam/evretou/) 49.6%** — holding below 50%
- **[Mavrokolympos](/dam/mavrokolympos/) 81.8%** (-1.5pp) — gradual summer decline; was 0% last year
- [Kouris](/dam/kouris/) **41.9%** (48.2 MCM) · [Germasoyeia](/dam/germasoyeia/) **59.7%** — stable near season highs
- [Kalopanagiotis](/dam/kalopanagiotis/) and [Klirou-Malounta](/dam/klirou-malounta/) remain at 100%; [Achna](/dam/achna/) **1.9%** — zero inflow all season

**In the media:**
- [Rainfall measurements June 15 — dam fullness levels](https://kitasweather.com/news/fragmata-vroxoptosi/metriseis-vroxoptosis-telefteou-triimerou-plirotita-fragmaton-15-6/) — KitasWeather
- [Cyprus dam levels double compared to last year, WDD official](https://www.parikiaki.com/2026/06/cyprus-dam-levels-double-compared-to-last-year-wdd-official) — Parikiaki
- [Dam levels almost double those of last year](https://cyprus-mail.com/2026/06/02/dam-levels-almost-double-those-of-last-year) — Cyprus Mail
`;
};
