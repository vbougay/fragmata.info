import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.058, totalSince: 24.675 }, storage: { current: { amount: 48.192, percentage: 41.9 }, lastYear: { amount: 20.434, percentage: 17.8 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.004, totalSince: 4.118 }, storage: { current: { amount: 4.213, percentage: 24.6 }, lastYear: { amount: 3.882, percentage: 22.7 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.001, totalSince: 1.699 }, storage: { current: { amount: 2.558, percentage: 18.5 }, lastYear: { amount: 2.358, percentage: 17.0 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.004, totalSince: 3.703 }, storage: { current: { amount: 5.889, percentage: 38.0 }, lastYear: { amount: 5.859, percentage: 37.8 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.005, totalSince: 8.823 }, storage: { current: { amount: 8.094, percentage: 60.0 }, lastYear: { amount: 2.817, percentage: 20.9 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.045, totalSince: 21.437 }, storage: { current: { amount: 2.041, percentage: 47.5 }, lastYear: { amount: 2.634, percentage: 61.3 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.0, totalSince: 1.619 }, storage: { current: { amount: 1.997, percentage: 58.7 }, lastYear: { amount: 1.169, percentage: 34.4 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.133, percentage: 2.0 }, lastYear: { amount: 0.471, percentage: 6.9 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.020, totalSince: 20.178 }, storage: { current: { amount: 21.880, percentage: 41.8 }, lastYear: { amount: 10.919, percentage: 20.8 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.008, totalSince: 9.484 }, storage: { current: { amount: 8.949, percentage: 52.1 }, lastYear: { amount: 3.839, percentage: 22.4 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.0, totalSince: 0.951 }, storage: { current: { amount: 1.813, percentage: 83.2 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.010, totalSince: 10.188 }, storage: { current: { amount: 12.005, percentage: 50.0 }, lastYear: { amount: 5.221, percentage: 21.8 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.037 }, storage: { current: { amount: 0.971, percentage: 98.1 }, lastYear: { amount: 0.302, percentage: 30.5 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.001, totalSince: 0.837 }, storage: { current: { amount: 0.860, percentage: 100.0 }, lastYear: { amount: 0.301, percentage: 35.0 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.282 }, storage: { current: { amount: 0.276, percentage: 92.6 }, lastYear: { amount: 0.126, percentage: 42.3 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.0, totalSince: 1.723 }, storage: { current: { amount: 1.652, percentage: 97.8 }, lastYear: { amount: 0.025, percentage: 1.5 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.001, totalSince: 1.470 }, storage: { current: { amount: 1.409, percentage: 98.5 }, lastYear: { amount: 0.252, percentage: 17.6 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.240, percentage: 66.1 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.0, totalSince: 2.650 }, storage: { current: { amount: 2.796, percentage: 99.9 }, lastYear: { amount: 0.888, percentage: 31.7 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.0, totalSince: 1.120 }, storage: { current: { amount: 2.000, percentage: 100.0 }, lastYear: { amount: 1.401, percentage: 70.1 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.407, percentage: 99.0 }, lastYear: { amount: 2.677, percentage: 60.1 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through June 9, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:1.222, July:0.0, "Aug-Sep":0.0 }, total:112.535 },
];

export const getReportDate = (): string => "09-JUN-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.26 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 41.9% (48.2 MCM) — holding near season high, 24.1pp above last year\'s 17.8%. Arminou→Kouris transfer: 20.26 MCM since October.',
      el: 'Ο Κούρης στο 41.9% (48.2 ΕΚΜ) — σταθερός κοντά στο μέγιστο σεζόν, 24.1μ.π. πάνω από πέρυσι (17.8%). Μεταφορά Αρμίνου→Κούρης: 20.26 ΕΚΜ.',
      ru: 'Курис на 41.9% (48.2 МКМ) — удерживается у сезонного максимума, +24.1пп выше прошлогодних 17.8%. Перекачка Арминоу→Курис: 20.26 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 24.6% (4.21 MCM) — slightly above last year\'s 22.7%. Seasonal inflow 4.12 MCM, gradual recovery continuing.',
      el: 'Ο Καλαβασός στο 24.6% (4.21 ΕΚΜ) — ελαφρά πάνω από πέρυσι (22.7%). Εισροή σεζόν 4.12 ΕΚΜ, σταδιακή ανάκαμψη.',
      ru: 'Калавасос на 24.6% (4.21 МКМ) — чуть выше прошлогодних 22.7%. Приток 4.12 МКМ за сезон, постепенное восстановление.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.5% (2.56 MCM) — slightly above last year\'s 17.0%. Seasonal inflow 1.70 MCM, slow recovery continues.',
      el: 'Η Λεύκαρα στο 18.5% (2.56 ΕΚΜ) — ελαφρά πάνω από πέρυσι (17.0%). Εισροή σεζόν 1.70 ΕΚΜ — αργή ανάκαμψη.',
      ru: 'Лефкара на 18.5% (2.56 МКМ) — чуть выше прошлогодних 17.0%. Приток 1.70 МКМ за сезон — медленное восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 38.0% (5.89 MCM) — just below historical max of 5.99 MCM. Dry season drawdown now underway.',
      el: 'Ο Διπόταμος στο 38.0% (5.89 ΕΚΜ) — λίγο κάτω από ιστορικό max 5.99 ΕΚΜ. Η ξηρή περίοδος ξεκίνησε.',
      ru: 'Дипотамос на 38.0% (5.89 МКМ) — чуть ниже исторического max 5.99 МКМ. Летний спад начался.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 60.0% (8.09 MCM) — near season high, 39.1pp above last year\'s 20.9%. Highest level since 2020, summer drawdown underway.',
      el: 'Η Γερμασόγεια στο 60.0% (8.09 ΕΚΜ) — κοντά στο μέγιστο σεζόν, 39.1μ.π. πάνω από πέρυσι (20.9%). Υψηλότερο από το 2020.',
      ru: 'Гермасойя на 60.0% (8.09 МКМ) — вблизи сезонного максимума, +39.1пп выше прошлогодних 20.9%. Высший уровень с 2020 года.',
    },
    'Arminou': {
      en: 'Arminou at 47.5% (2.04 MCM). Seasonal inflow 21.4 MCM = 5.0× capacity; 20.26 MCM pumped to Kouris since October.',
      el: 'Ο Αρμίνου στο 47.5% (2.04 ΕΚΜ). Εισροή σεζόν: 21.4 ΕΚΜ = 5.0× χωρητικότητα· 20.26 ΕΚΜ στον Κούρη από τον Οκτώβριο.',
      ru: 'Арминоу на 47.5% (2.04 МКМ). Приток: 21.4 МКМ = 5.0× ёмкости; 20.26 МКМ перекачано в Курис с октября.',
    },
    'Polemidia': {
      en: 'Polemidia at 58.7% (2.00 MCM) — easing from season peak, 24.3pp above last year\'s 34.4%. Dry season drawdown underway.',
      el: 'Η Πολεμίδια στο 58.7% (2.00 ΕΚΜ) — υποχωρεί από το μέγιστο, 24.3μ.π. πάνω από πέρυσι (34.4%). Αρχή ξηρής περιόδου.',
      ru: 'Полемидия на 58.7% (2.00 МКМ) — отступает от пика, +24.3пп выше прошлогодних 34.4%. Начало летнего спада.',
    },
    'Achna': {
      en: 'Achna critically low at 2.0% (0.13 MCM), zero inflow all season. Far below last year\'s 6.9%. No recovery expected.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.0% (0.13 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (6.9%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.0% (0.13 МКМ), без притока за сезон. Далеко ниже прошлогодних 6.9%. Восстановление не ожидается.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 41.8% (21.9 MCM) — near season high, 21.0pp above last year\'s 20.8%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 41.8% (21.9 ΕΚΜ) — κοντά στο μέγιστο σεζόν, 21.0μ.π. πάνω από πέρυσι (20.8%). Εισροή 20.2 ΕΚΜ.',
      ru: 'Аспрокреммос на 41.8% (21.9 МКМ) — вблизи сезонного максимума, +21.0пп выше прошлогодних 20.8%. Приток 20.2 МКМ за сезон.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 52.1% (8.95 MCM) — easing from season high, 29.7pp above last year\'s 22.4%. Seasonal inflow 9.48 MCM.',
      el: 'Ο Καννάβιου στο 52.1% (8.95 ΕΚΜ) — υποχωρεί ελαφρά από το μέγιστο, 29.7μ.π. πάνω από πέρυσι (22.4%). Εισροή σεζόν 9.48 ΕΚΜ.',
      ru: 'Каннавиу на 52.1% (8.95 МКМ) — слегка снижается от пика, +29.7пп выше прошлогодних 22.4%. Приток 9.48 МКМ за сезон.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 83.2% (1.81 MCM) — easing from near-full as dry season progresses. Was 0% last year — exceptional recovery.',
      el: 'Ο Μαυροκόλυμπος στο 83.2% (1.81 ΕΚΜ) — υποχωρεί καθώς προχωρά η ξηρή περίοδος. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 83.2% (1.81 МКМ) — снижается в ходе сухого сезона. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 50.0% (12.0 MCM) — exactly at half capacity, 28.2pp above last year\'s 21.8%. Holding above 50% as drawdown continues.',
      el: 'Ο Εύρετου στο 50.0% (12.0 ΕΚΜ) — ακριβώς στο μισό, 28.2μ.π. πάνω από πέρυσι (21.8%). Παραμένει πάνω από το 50%.',
      ru: 'Эвретоу на 50.0% (12.0 МКМ) — ровно на половине, +28.2пп выше прошлогодних 21.8%. Удерживается выше 50%.',
    },
    'Argaka': {
      en: 'Argaka at 98.1% (0.97 MCM) — just below full. Up from 30.5% last year — more than tripled year over year.',
      el: 'Η Αργάκα στο 98.1% (0.97 ΕΚΜ) — λίγο κάτω από πλήρης. Από 30.5% πέρυσι — πάνω από τριπλασιασμός.',
      ru: 'Аргака на 98.1% (0.97 МКМ) — чуть ниже полного уровня. Год назад 30.5% — более чем утроение.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), still at capacity. Up from 35.0% last year — nearly tripled year over year.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), παραμένει πλήρης. Αύξηση από 35.0% πέρυσι — σχεδόν τριπλασιασμός.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), удерживается на максимуме. Рост с 35.0% год назад — почти утроение.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 92.6% (0.28 MCM) — easing from full as inflows stop. Up from 42.3% last year; more than doubled year over year.',
      el: 'Η Αγία Μαρίνα στο 92.6% (0.28 ΕΚΜ) — υποχωρεί από πλήρης. Από 42.3% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Агия Марина на 92.6% (0.28 МКМ) — опускается с полного уровня. Год назад 42.3% — более чем удвоение.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 97.8% (1.65 MCM) — easing from full. Was 1.5% last year — dramatic 65× year-over-year recovery.',
      el: 'Τα Βυζακιά στο 97.8% (1.65 ΕΚΜ) — υποχωρούν από πλήρης. Από 1.5% πέρυσι — 65× ανάκαμψη.',
      ru: 'Визакия на 97.8% (1.65 МКМ) — снижается с полного уровня. Год назад 1.5% — восстановление в 65×.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 98.5% (1.41 MCM) — effectively full. Was 17.6% last year — 5.6× year-over-year recovery.',
      el: 'Ο Ξυλιάτος στο 98.5% (1.41 ΕΚΜ) — ουσιαστικά πλήρης. Από 17.6% πέρυσι — 5.6× ανάκαμψη.',
      ru: 'Ксилиатос на 98.5% (1.41 МКМ) — фактически полон. Год назад 17.6% — восстановление в 5.6×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 66.1% last year, at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 66.1% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 66.1% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 99.9% (2.80 MCM) — essentially full, easing slightly. Was 31.7% last year — 3× year-over-year recovery.',
      el: 'Ο Ταμασός στο 99.9% (2.80 ΕΚΜ) — ουσιαστικά πλήρης, ελαφρά υποχωρεί. Από 31.7% πέρυσι — 3× ΕΤΕ.',
      ru: 'Тамассос на 99.9% (2.80 МКМ) — фактически полон, слегка снижается. Год назад 31.7% — восстановление в 3×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 70.1% last year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 70.1% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 70.1% год назад.',
    },
    'Solea': {
      en: 'Solea at 99.0% (4.41 MCM) — easing from full as dry season progresses. Up from 60.1% last year — 1.6× year-over-year improvement.',
      el: 'Η Σολέα στο 99.0% (4.41 ΕΚΜ) — υποχωρεί από πλήρης καθώς προχωρά η ξηρή περίοδος. Αύξηση από 60.1% πέρυσι.',
      ru: 'Солеа на 99.0% (4.41 МКМ) — снижается с полного уровня с ходом сухого сезона. Рост с 60.1% год назад — улучшение в 1.6×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (29 Μαΐου — 9 Ιουνίου 2026)

Συνολική αποθήκευση **42.4%** (123.3 ΕΚΜ), σχεδόν αμετάβλητη από 42.4% (123.3 ΕΚΜ) στις 29/5 — **-0.005 ΕΚΜ σε 24 ώρες**. Το οροπέδιο παραμένει σταθερό — η ξηρή περίοδος έχει πλέον πλήρως εδραιωθεί. **+21.4μ.π. πάνω από πέρυσι** (21.0%). Εισροή σεζόν 25/26: **112.5 ΕΚΜ**. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): **20.26 ΕΚΜ** από τον Οκτώβριο.

**Αξιοσημείωτα:**
- **[Αρμίνου](/el/dam/arminou/) 47.5%** (+0.3μ.π.) — μικρή εισροή 0.045 ΕΚΜ παρά τη συνεχιζόμενη μεταφορά· συνολική μεταφορά 20.26 ΕΚΜ
- [Κούρης](/el/dam/kouris/) **41.9%** (48.2 ΕΚΜ) · [Γερμασόγεια](/el/dam/germasoyeia/) **60.0%** — σταθεροί κοντά στα μέγιστα σεζόν
- **[Μαυροκόλυμπος](/el/dam/mavrokolympos/) 83.2%** (-0.5μ.π.) — συνεχής υποχώρηση από το μέγιστο
- [Εύρετου](/el/dam/evretou/) **50.0%** — ακριβώς στο μισό, υποχωρεί ελαφρά
- **4 φράγματα στο 100%** — [Πόμος](/el/dam/pomos/), [Καλοπαναγιώτης](/el/dam/kalopanagiotis/), [Κλήρου-Μαλούντα](/el/dam/klirou-malounta/), [Ταμασός](/el/dam/tamassos/) (99.9%), [Σολέα](/el/dam/solea/) (99.0%)
- [Αχνά](/el/dam/achna/) **2.0%** — μηδέν εισροή όλη τη σεζόν

**Στα μέσα:**
- [Τα επίπεδα νερού στα φράγματα σχεδόν διπλάσια σε σχέση με πέρυσι](https://cyprus-mail.com/2026/06/02/dam-levels-almost-double-those-of-last-year) — Cyprus Mail
- [ΤΑΥ: Στο 42,4% η πληρότητα των φραγμάτων — Διπλάσια από πέρυσι](https://www.offsite.com.cy/eidiseis/koinonia/tay-sto-424-i-plirotita-ton-fragmaton-diplasia-apo-perysi) — Offsite
- [Αντικατάσταση αγωγών ύδρευσης στη Λεμεσό](https://cyprus-mail.com/2026/06/02/water-pipes-across-limassol-to-be-replaced) — Cyprus Mail
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (29 мая — 9 июня 2026)

Общий запас **42.4%** (123.3 МКМ) — практически без изменений с 42.4% (123.3 МКМ) на 29/5 — **-0.005 МКМ за 24 часа**. Плато держится уверенно: сухой сезон полностью вступил в силу. **+21.4пп выше прошлогодних** (21.0%). Приток сезона 25/26: **112.5 МКМ**. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): **20.26 МКМ** с октября.

**Основные изменения:**
- **[Арминоу](/ru/dam/arminou/) 47.5%** (+0.3пп) — небольшой приток 0.045 МКМ несмотря на продолжение перекачки в [Курис](/ru/dam/kouris/); итоговая перекачка 20.26 МКМ
- [Курис](/ru/dam/kouris/) **41.9%** (48.2 МКМ) · [Гермасойя](/ru/dam/germasoyeia/) **60.0%** — стабильны у сезонных максимумов
- **[Мавроколимпос](/ru/dam/mavrokolympos/) 83.2%** (-0.5пп) — продолжает снижаться от пика
- [Эвретоу](/ru/dam/evretou/) **50.0%** — ровно на половине, слегка снижается
- **4 дамбы на 100%** — [Помос](/ru/dam/pomos/), [Калопанайотис](/ru/dam/kalopanagiotis/), [Клиру-Малунта](/ru/dam/klirou-malounta/), [Тамассос](/ru/dam/tamassos/) (99.9%), [Солеа](/ru/dam/solea/) (99.0%)
- [Ахна](/ru/dam/achna/) **2.0%** — без притока за весь сезон

**В СМИ:**
- [Уровень воды в дамбах почти удвоился по сравнению с прошлым годом](https://cyprus-mail.com/2026/06/02/dam-levels-almost-double-those-of-last-year) — Cyprus Mail
- [Уровень воды в дамбах Кипра вырос до 42,4%](https://ruscyprus.com/news/uroven-vody-v-dambah-kipra-vyros-do-42-4-na/58033) — RusCyprus
- [Замена водопроводных труб в Лимассоле](https://cyprus-mail.com/2026/06/02/water-pipes-across-limassol-to-be-replaced) — Cyprus Mail
`;
  }
  return `
### Recent Changes (May 29 — June 9, 2026)

Total storage at **42.4%** (123.3 MCM) — essentially flat for 11 days, -0.005 MCM in the past 24 hours. The plateau holds firm as the dry season fully takes over. **+21.4pp above last year** (21.0%). Season total inflow: **112.5 MCM**. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: **20.26 MCM** since October.

**Notable movements:**
- **[Arminou](/dam/arminou/) 47.5%** (+0.3pp) — 0.045 MCM inflow in 24h despite ongoing pumping to [Kouris](/dam/kouris/); total transfer now 20.26 MCM
- [Kouris](/dam/kouris/) **41.9%** (48.2 MCM) · [Germasoyeia](/dam/germasoyeia/) **60.0%** — steady near season highs
- **[Mavrokolympos](/dam/mavrokolympos/) 83.2%** (-0.5pp) — steady dry-season decline from peak
- [Evretou](/dam/evretou/) **50.0%** — exactly at half capacity, inching down
- **4 dams at 100%** — [Pomos](/dam/pomos/), [Kalopanagiotis](/dam/kalopanagiotis/), [Klirou-Malounta](/dam/klirou-malounta/), [Tamassos](/dam/tamassos/) (99.9%), [Solea](/dam/solea/) (99.0%)
- [Achna](/dam/achna/) **2.0%** — zero inflow all season

**In the media:**
- [Dam levels almost double those of last year](https://cyprus-mail.com/2026/06/02/dam-levels-almost-double-those-of-last-year) — Cyprus Mail
- [WDD: Dam fullness at 42.4% — double last year's](https://www.offsite.com.cy/eidiseis/koinonia/tay-sto-424-i-plirotita-ton-fragmaton-diplasia-apo-perysi) — Offsite
- [Water pipes across Limassol to be replaced](https://cyprus-mail.com/2026/06/02/water-pipes-across-limassol-to-be-replaced) — Cyprus Mail
`;
};
