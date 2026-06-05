import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.070, totalSince: 24.478 }, storage: { current: { amount: 48.060, percentage: 41.8 }, lastYear: { amount: 20.564, percentage: 17.9 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.001, totalSince: 4.109 }, storage: { current: { amount: 4.213, percentage: 24.6 }, lastYear: { amount: 3.960, percentage: 23.2 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.0, totalSince: 1.697 }, storage: { current: { amount: 2.561, percentage: 18.5 }, lastYear: { amount: 2.370, percentage: 17.1 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.003, totalSince: 3.692 }, storage: { current: { amount: 5.920, percentage: 38.2 }, lastYear: { amount: 5.915, percentage: 38.2 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.005, totalSince: 8.801 }, storage: { current: { amount: 8.117, percentage: 60.1 }, lastYear: { amount: 2.871, percentage: 21.3 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.051, totalSince: 21.252 }, storage: { current: { amount: 1.992, percentage: 46.3 }, lastYear: { amount: 2.656, percentage: 61.8 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.0, totalSince: 1.619 }, storage: { current: { amount: 2.068, percentage: 60.8 }, lastYear: { amount: 1.183, percentage: 34.8 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.133, percentage: 2.0 }, lastYear: { amount: 0.491, percentage: 7.2 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.005, totalSince: 20.142 }, storage: { current: { amount: 21.924, percentage: 41.9 }, lastYear: { amount: 11.076, percentage: 21.1 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.013, totalSince: 9.442 }, storage: { current: { amount: 8.966, percentage: 52.2 }, lastYear: { amount: 3.883, percentage: 22.6 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.0, totalSince: 0.951 }, storage: { current: { amount: 1.879, percentage: 86.2 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.016, totalSince: 10.167 }, storage: { current: { amount: 12.043, percentage: 50.2 }, lastYear: { amount: 5.268, percentage: 21.9 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.001, totalSince: 1.035 }, storage: { current: { amount: 0.972, percentage: 98.2 }, lastYear: { amount: 0.314, percentage: 31.7 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.002, totalSince: 0.833 }, storage: { current: { amount: 0.860, percentage: 100.0 }, lastYear: { amount: 0.311, percentage: 36.2 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.001, totalSince: 0.282 }, storage: { current: { amount: 0.283, percentage: 95.0 }, lastYear: { amount: 0.132, percentage: 44.3 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.0, totalSince: 1.720 }, storage: { current: { amount: 1.649, percentage: 97.6 }, lastYear: { amount: 0.032, percentage: 1.9 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 1.467 }, storage: { current: { amount: 1.421, percentage: 99.4 }, lastYear: { amount: 0.260, percentage: 18.2 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.245, percentage: 67.5 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.001, totalSince: 2.649 }, storage: { current: { amount: 2.800, percentage: 100.0 }, lastYear: { amount: 0.908, percentage: 32.4 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.117 }, storage: { current: { amount: 2.000, percentage: 100.0 }, lastYear: { amount: 1.410, percentage: 70.5 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.436, percentage: 99.6 }, lastYear: { amount: 2.695, percentage: 60.5 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through June 5, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:0.685, July:0.0, "Aug-Sep":0.0 }, total:111.998 },
];

export const getReportDate = (): string => "05-JUN-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.14 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 41.8% (48.1 MCM) — near season high, 23.9pp above last year\'s 17.9%. Arminou→Kouris transfer: 20.14 MCM since October.',
      el: 'Ο Κούρης στο 41.8% (48.1 ΕΚΜ) — κοντά στο μέγιστο σεζόν, 23.9μ.π. πάνω από πέρυσι (17.9%). Μεταφορά Αρμίνου→Κούρης: 20.14 ΕΚΜ.',
      ru: 'Курис на 41.8% (48.1 МКМ) — вблизи сезонного максимума, +23.9пп выше прошлогодних 17.9%. Перекачка Арминоу→Курис: 20.14 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 24.6% (4.21 MCM) — above last year\'s 23.2%. Seasonal inflow 4.11 MCM, gradual recovery continuing.',
      el: 'Ο Καλαβασός στο 24.6% (4.21 ΕΚΜ) — πάνω από πέρυσι (23.2%). Εισροή σεζόν 4.11 ΕΚΜ, σταδιακή ανάκαμψη.',
      ru: 'Калавасос на 24.6% (4.21 МКМ) — выше прошлогодних 23.2%. Приток 4.11 МКМ за сезон, постепенное восстановление.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.5% (2.56 MCM) — slightly above last year\'s 17.1%. Seasonal inflow 1.70 MCM, slow recovery continues.',
      el: 'Η Λεύκαρα στο 18.5% (2.56 ΕΚΜ) — ελαφρά πάνω από πέρυσι (17.1%). Εισροή σεζόν 1.70 ΕΚΜ — αργή ανάκαμψη.',
      ru: 'Лефкара на 18.5% (2.56 МКМ) — чуть выше прошлогодних 17.1%. Приток 1.70 МКМ за сезон — медленное восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 38.2% (5.92 MCM) — near season high, just shy of historical max of 5.99 MCM. Steady with 3.69 MCM seasonal inflow.',
      el: 'Ο Διπόταμος στο 38.2% (5.92 ΕΚΜ) — κοντά στο μέγιστο σεζόν, λίγο κάτω από ιστορικό max 5.99 ΕΚΜ. 3.69 ΕΚΜ εισροή σεζόν.',
      ru: 'Дипотамос на 38.2% (5.92 МКМ) — вблизи сезонного максимума, чуть ниже исторического max 5.99 МКМ. Приток 3.69 МКМ.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 60.1% (8.12 MCM) — near season high, 38.8pp above last year\'s 21.3%. Highest level since 2020, summer drawdown beginning.',
      el: 'Η Γερμασόγεια στο 60.1% (8.12 ΕΚΜ) — κοντά στο μέγιστο σεζόν, 38.8μ.π. πάνω από πέρυσι (21.3%). Υψηλότερο από το 2020.',
      ru: 'Гермасойя на 60.1% (8.12 МКМ) — вблизи сезонного максимума, +38.8пп выше прошлогодних 21.3%. Высший уровень с 2020 года.',
    },
    'Arminou': {
      en: 'Arminou at 46.3% (1.99 MCM). Seasonal inflow 21.3 MCM = 4.9× capacity; 20.14 MCM pumped to Kouris since October.',
      el: 'Ο Αρμίνου στο 46.3% (1.99 ΕΚΜ). Εισροή σεζόν: 21.3 ΕΚΜ = 4.9× χωρητικότητα· 20.14 ΕΚΜ στον Κούρη από τον Οκτώβριο.',
      ru: 'Арминоу на 46.3% (1.99 МКМ). Приток: 21.3 МКМ = 4.9× ёмкости; 20.14 МКМ перекачано в Курис с октября.',
    },
    'Polemidia': {
      en: 'Polemidia at 60.8% (2.07 MCM) — easing from season peak, 26.0pp above last year\'s 34.8%. Dry season drawdown underway.',
      el: 'Η Πολεμίδια στο 60.8% (2.07 ΕΚΜ) — υποχωρεί από το μέγιστο, 26.0μ.π. πάνω από πέρυσι (34.8%). Αρχή ξηρής περιόδου.',
      ru: 'Полемидия на 60.8% (2.07 МКМ) — отступает от пика, +26.0пп выше прошлогодних 34.8%. Начало летнего спада.',
    },
    'Achna': {
      en: 'Achna critically low at 2.0% (0.13 MCM), zero inflow all season. Far below last year\'s 7.2%. No recovery expected.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.0% (0.13 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (7.2%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.0% (0.13 МКМ), без притока за сезон. Далеко ниже прошлогодних 7.2%. Восстановление не ожидается.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 41.9% (21.9 MCM) — near season high, 20.8pp above last year\'s 21.1%. Seasonal inflow 20.1 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 41.9% (21.9 ΕΚΜ) — κοντά στο μέγιστο σεζόν, 20.8μ.π. πάνω από πέρυσι (21.1%). Εισροή 20.1 ΕΚΜ.',
      ru: 'Аспрокреммос на 41.9% (21.9 МКМ) — вблизи сезонного максимума, +20.8пп выше прошлогодних 21.1%. Приток 20.1 МКМ за сезон.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 52.2% (8.97 MCM) — near season high, 29.6pp above last year\'s 22.6%. Seasonal inflow 9.44 MCM.',
      el: 'Ο Καννάβιου στο 52.2% (8.97 ΕΚΜ) — κοντά στο μέγιστο σεζόν, 29.6μ.π. πάνω από πέρυσι (22.6%). Εισροή σεζόν 9.44 ΕΚΜ.',
      ru: 'Каннавиу на 52.2% (8.97 МКМ) — вблизи сезонного максимума, +29.6пп выше прошлогодних 22.6%. Приток 9.44 МКМ за сезон.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 86.2% (1.88 MCM) — easing from near-full as dry season begins. Was 0% last year — exceptional recovery.',
      el: 'Ο Μαυροκόλυμπος στο 86.2% (1.88 ΕΚΜ) — υποχωρεί καθώς αρχίζει η ξηρή περίοδος. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 86.2% (1.88 МКМ) — снижается с началом сухого сезона. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 50.2% (12.04 MCM) — near season high, 28.3pp above last year\'s 21.9%. Holding above 50% milestone.',
      el: 'Ο Εύρετου στο 50.2% (12.04 ΕΚΜ) — κοντά στο μέγιστο σεζόν, 28.3μ.π. πάνω από πέρυσι (21.9%). Παραμένει πάνω από το 50%.',
      ru: 'Эвретоу на 50.2% (12.04 МКМ) — вблизи сезонного максимума, +28.3пп выше прошлогодних 21.9%. Удерживается выше 50%.',
    },
    'Argaka': {
      en: 'Argaka at 98.2% (0.97 MCM) — easing just below full as inflows stop. Up from 31.7% last year — nearly tripled year over year.',
      el: 'Η Αργάκα στο 98.2% (0.97 ΕΚΜ) — υποχωρεί κάτω από πλήρης. Από 31.7% πέρυσι — σχεδόν τριπλασιάστηκε.',
      ru: 'Аргака на 98.2% (0.97 МКМ) — опускается чуть ниже полного уровня. Год назад 31.7% — почти утроение.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), still overflowing. Up from 36.2% last year — more than doubled year over year.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), ακόμη υπερχειλίζει. Αύξηση από 36.2% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), всё ещё переливается. Рост с 36.2% год назад — более чем удвоение.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 95.0% (0.28 MCM) — easing from full as inflows slow. Up from 44.3% last year; more than doubled year over year.',
      el: 'Η Αγία Μαρίνα στο 95.0% (0.28 ΕΚΜ) — υποχωρεί από πλήρης. Από 44.3% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Агия Марина на 95.0% (0.28 МКМ) — опускается с полного уровня. Год назад 44.3% — более чем удвоение.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 97.6% (1.65 MCM) — easing from full. Was 1.9% last year — dramatic 50× year-over-year recovery.',
      el: 'Τα Βυζακιά στο 97.6% (1.65 ΕΚΜ) — υποχωρούν από πλήρης. Από 1.9% πέρυσι — 50× ανάκαμψη.',
      ru: 'Визакия на 97.6% (1.65 МКМ) — снижается с полного уровня. Год назад 1.9% — восстановление в 50×.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 99.4% (1.42 MCM) — effectively full. Was 18.2% last year — 5× year-over-year recovery.',
      el: 'Ο Ξυλιάτος στο 99.4% (1.42 ΕΚΜ) — ουσιαστικά πλήρης. Από 18.2% πέρυσι — 5× ανάκαμψη.',
      ru: 'Ксилиатос на 99.4% (1.42 МКМ) — фактически полон. Год назад 18.2% — восстановление в 5×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 67.5% last year, at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 67.5% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 67.5% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos full at 100% (2.80 MCM) — reached full capacity in mid-March. Was 32.4% last year — 3× year-over-year recovery.',
      el: 'Ο Ταμασός γεμάτος στο 100% (2.80 ΕΚΜ) — έφτασε στη χωρητικότητα στα μέσα Μαρτίου. Από 32.4% πέρυσι — 3× ΕΤΕ.',
      ru: 'Тамассос заполнен на 100% (2.80 МКМ) — достиг максимума в середине марта. Год назад 32.4% — восстановление в 3×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 70.5% last year — 1.4× year-over-year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 70.5% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 70.5% год назад — 1.4× год к году.',
    },
    'Solea': {
      en: 'Solea at 99.6% (4.44 MCM) — easing slightly from full as dry season begins. Up from 60.5% last year — 1.6× year-over-year improvement.',
      el: 'Η Σολέα στο 99.6% (4.44 ΕΚΜ) — ελαφρά υποχωρεί από πλήρης καθώς αρχίζει η ξηρή περίοδος. Αύξηση από 60.5% πέρυσι.',
      ru: 'Солеа на 99.6% (4.44 МКМ) — слегка снижается с началом сухого сезона. Рост с 60.5% год назад — улучшение в 1.6×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (27 Μαΐου — 5 Ιουνίου 2026)

Συνολική αποθήκευση **42.4%** (123.4 ΕΚΜ), από 42.3% (122.9 ΕΚΜ) στις 27/5 — **+0.1μ.π., +0.5 ΕΚΜ σε 9 ημέρες**. Το οροπέδιο παραμένει· τα αποθέματα ουσιαστικά ακίνητα καθώς η ξηρή περίοδος εδραιώνεται. **+21.3μ.π. πάνω από πέρυσι** (21.1%). Εισροή σεζόν 25/26: **112.0 ΕΚΜ** — ρεκόρ από το 1987. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): **20.14 ΕΚΜ** από τον Οκτώβριο.

**Αξιοσημείωτα:**
- **[Αρμίνου](/el/dam/arminou/) 46.3%** (1.99 ΕΚΜ) — ελαφρά άνοδος +0.4μ.π. καθώς η μεταφορά προς [Κούρη](/el/dam/kouris/) αγγίζει 20.14 ΕΚΜ
- **[Κούρης](/el/dam/kouris/) 41.8%** (48.1 ΕΚΜ) — σταθερά κοντά στο μέγιστο σεζόν, 23.9μ.π. πάνω από πέρυσι
- **[Γερμασόγεια](/el/dam/germasoyeia/) 60.1%** — παραμένει κοντά στο μέγιστο σεζόν, υψηλότερο από το 2020
- [Καννάβιου](/el/dam/kannaviou/) **52.2%** · [Εύρετου](/el/dam/evretou/) **50.2%** — σταθερά κοντά στα μέγιστα
- **Μικρά φράγματα συνεχίζουν να υποχωρούν**: [Ξυλιάτος](/el/dam/xyliatos/) 99.4%, [Βυζακιά](/el/dam/vyzakia/) 97.6%, [Μαυροκόλυμπος](/el/dam/mavrokolympos/) 86.2%
- **5 φράγματα στο 100%** — [Πόμος](/el/dam/pomos/), [Καλοπαναγιώτης](/el/dam/kalopanagiotis/), [Ταμασός](/el/dam/tamassos/), [Κλήρου-Μαλούντα](/el/dam/klirou-malounta/), [Σολέα](/el/dam/solea/) (99.6%)
- [Αχνά](/el/dam/achna/) **2.0%** — μηδέν εισροή όλη τη σεζόν

**Στα μέσα:**
- [Τα επίπεδα νερού στα φράγματα σχεδόν διπλάσια σε σχέση με πέρυσι](https://cyprus-mail.com/2026/06/02/dam-levels-almost-double-those-of-last-year) — Cyprus Mail
- [Αντικατάσταση αγωγών ύδρευσης στη Λεμεσό](https://cyprus-mail.com/2026/06/02/water-pipes-across-limassol-to-be-replaced) — Cyprus Mail
- [Ρεκόρ συνολικών εισροών νερού τον φετινό Μάιο](https://www.politis.com.cy/politis-news/cyprus/1005944/rekor-sinolikwn-eisrown-nerou-ghia-mina-maio-sta-fraghmata-sinekhizei-i-auksisi-sinolikis-plirotitas) — Πολίτης
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (27 мая — 5 июня 2026)

Общий запас **42.4%** (123.4 МКМ), с 42.3% (122.9 МКМ) на 27/5 — **+0.1пп, +0.5 МКМ за 9 дней**. Плато удерживается; запасы практически не движутся с наступлением сухого сезона. **+21.3пп выше прошлогодних** (21.1%). Приток сезона 25/26: **112.0 МКМ** — рекорд с 1987 года. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): **20.14 МКМ** с октября.

**Основные изменения:**
- **[Арминоу](/ru/dam/arminou/) 46.3%** (1.99 МКМ) — небольшой рост +0.4пп; перекачка в [Курис](/ru/dam/kouris/) достигла 20.14 МКМ
- **[Курис](/ru/dam/kouris/) 41.8%** (48.1 МКМ) — стабильно у сезонного максимума, +23.9пп выше прошлогоднего
- **[Гермасойя](/ru/dam/germasoyeia/) 60.1%** — удерживается вблизи сезонного максимума, высший уровень с 2020 года
- [Каннавиу](/ru/dam/kannaviou/) **52.2%** · [Эвретоу](/ru/dam/evretou/) **50.2%** — стабильно у максимумов
- **Малые дамбы продолжают снижаться**: [Ксилиатос](/ru/dam/xyliatos/) 99.4%, [Визакия](/ru/dam/vyzakia/) 97.6%, [Мавроколимпос](/ru/dam/mavrokolympos/) 86.2%
- **5 дамб на 100%** — [Помос](/ru/dam/pomos/), [Калопанайотис](/ru/dam/kalopanagiotis/), [Тамассос](/ru/dam/tamassos/), [Клиру-Малунта](/ru/dam/klirou-malounta/), [Солеа](/ru/dam/solea/) (99.6%)
- [Ахна](/ru/dam/achna/) **2.0%** — без притока за весь сезон

**В СМИ:**
- [Уровень воды в дамбах почти удвоился по сравнению с прошлым годом](https://cyprus-mail.com/2026/06/02/dam-levels-almost-double-those-of-last-year) — Cyprus Mail
- [Замена водопроводных труб в Лимассоле](https://cyprus-mail.com/2026/06/02/water-pipes-across-limassol-to-be-replaced) — Cyprus Mail
- [Рекордный приток в дамбы мая — лучший с 1987 года](https://cyprus-mail.com/2026/05/21/dams-record-best-may-inflows-since-1987) — Cyprus Mail
`;
  }
  return `
### Recent Changes (May 27 — June 5, 2026)

Total storage at **42.4%** (123.4 MCM), up from 42.3% (122.9 MCM) on May 27 — **+0.1pp, +0.5 MCM in 9 days**. The plateau holds; storage is essentially flat as the dry season takes firm hold. **+21.3pp above last year** (21.1%). Season total: **112.0 MCM** — record since 1987. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: **20.14 MCM** since October.

**Notable movements:**
- **[Arminou](/dam/arminou/) 46.3%** (1.99 MCM) — slight uptick (+0.4pp) as the [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer reaches 20.14 MCM
- **[Kouris](/dam/kouris/) 41.8%** (48.1 MCM) — holding near season high, 23.9pp above last year's 17.9%
- **[Germasoyeia](/dam/germasoyeia/) 60.1%** — near season high, highest since 2020; summer drawdown continues
- [Kannaviou](/dam/kannaviou/) **52.2%** · [Evretou](/dam/evretou/) **50.2%** — steady near season highs
- **Smaller dams continuing to ease**: [Xyliatos](/dam/xyliatos/) 99.4%, [Vyzakia](/dam/vyzakia/) 97.6%, [Mavrokolympos](/dam/mavrokolympos/) 86.2%
- **5 dams at 100%** — [Pomos](/dam/pomos/), [Kalopanagiotis](/dam/kalopanagiotis/), [Tamassos](/dam/tamassos/), [Klirou-Malounta](/dam/klirou-malounta/), [Solea](/dam/solea/) (99.6%)
- [Achna](/dam/achna/) **2.0%** — zero inflow all season

**In the media:**
- [Dam levels almost double those of last year](https://cyprus-mail.com/2026/06/02/dam-levels-almost-double-those-of-last-year) — Cyprus Mail
- [Water pipes across Limassol to be replaced](https://cyprus-mail.com/2026/06/02/water-pipes-across-limassol-to-be-replaced) — Cyprus Mail
- [Dams record best May inflows since 1987](https://cyprus-mail.com/2026/05/21/dams-record-best-may-inflows-since-1987) — Cyprus Mail
`;
};
