import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.105, totalSince: 20.348 }, storage: { current: { amount: 42.709, percentage: 37.1 }, lastYear: { amount: 21.838, percentage: 19.0 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.013, totalSince: 3.514 }, storage: { current: { amount: 3.747, percentage: 21.9 }, lastYear: { amount: 4.393, percentage: 25.7 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.004, totalSince: 1.569 }, storage: { current: { amount: 2.488, percentage: 18.0 }, lastYear: { amount: 3.115, percentage: 22.5 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.010, totalSince: 3.257 }, storage: { current: { amount: 5.857, percentage: 37.8 }, lastYear: { amount: 5.816, percentage: 37.5 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.071, totalSince: 7.906 }, storage: { current: { amount: 7.503, percentage: 55.6 }, lastYear: { amount: 3.294, percentage: 24.4 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.089, totalSince: 17.742 }, storage: { current: { amount: 1.866, percentage: 43.4 }, lastYear: { amount: 2.641, percentage: 61.4 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.017, totalSince: 1.401 }, storage: { current: { amount: 2.021, percentage: 59.4 }, lastYear: { amount: 1.274, percentage: 37.5 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.149, percentage: 2.2 }, lastYear: { amount: 0.968, percentage: 14.2 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.044, totalSince: 18.217 }, storage: { current: { amount: 20.574, percentage: 39.3 }, lastYear: { amount: 12.293, percentage: 23.5 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.013, totalSince: 8.461 }, storage: { current: { amount: 8.416, percentage: 49.0 }, lastYear: { amount: 4.242, percentage: 24.7 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.0, totalSince: 0.924 }, storage: { current: { amount: 1.957, percentage: 89.8 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.025, totalSince: 8.984 }, storage: { current: { amount: 11.061, percentage: 46.1 }, lastYear: { amount: 5.656, percentage: 23.6 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.381, percentage: 38.5 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.378, percentage: 44.0 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.243 }, storage: { current: { amount: 0.295, percentage: 99.0 }, lastYear: { amount: 0.177, percentage: 59.4 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.0, totalSince: 1.689 }, storage: { current: { amount: 1.69, percentage: 100.0 }, lastYear: { amount: 0.046, percentage: 2.7 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 1.419 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.311, percentage: 21.7 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.300, percentage: 82.6 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.001, totalSince: 2.594 }, storage: { current: { amount: 2.8, percentage: 100.0 }, lastYear: { amount: 0.997, percentage: 35.6 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.073 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.456, percentage: 72.8 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.856, percentage: 64.1 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through April 30, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.289, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:97.772 },
];

export const getReportDate = (): string => "30-APR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 16.9 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 37.1% (42.7 MCM) — new season high, 18.1pp above last year\'s 19.0%. Arminou→Kouris transfer: 16.9 MCM since October.',
      el: 'Ο Κούρης στο 37.1% (42.7 ΕΚΜ) — νέο μέγιστο σεζόν, 18.1μ.π. πάνω από πέρυσι (19.0%). Μεταφορά Αρμίνου→Κούρης: 16.9 ΕΚΜ.',
      ru: 'Курис на 37.1% (42.7 МКМ) — новый сезонный максимум, +18.1пп выше прошлогодних 19.0%. Перекачка Арминоу→Курис: 16.9 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 21.9% (3.75 MCM) — 3.8pp below last year\'s 25.7%. Seasonal inflow 3.51 MCM, slow but steady recovery.',
      el: 'Ο Καλαβασός στο 21.9% (3.75 ΕΚΜ) — 3.8μ.π. κάτω από πέρυσι (25.7%). Εισροή σεζόν 3.51 ΕΚΜ.',
      ru: 'Калавасос на 21.9% (3.75 МКМ) — на 3.8пп ниже прошлогодних 25.7%. Приток 3.51 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.0% (2.49 MCM) — 4.5pp below last year\'s 22.5%. Seasonal inflow 1.57 MCM, slow recovery continues.',
      el: 'Η Λεύκαρα στο 18.0% (2.49 ΕΚΜ) — 4.5μ.π. κάτω από πέρυσι (22.5%). Εισροή σεζόν 1.57 ΕΚΜ — αργή ανάκαμψη.',
      ru: 'Лефкара на 18.0% (2.49 МКМ) — на 4.5пп ниже прошлогодних 22.5%. Приток 1.57 МКМ за сезон — медленное восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 37.8% (5.86 MCM) — matching last year\'s 37.5%. Stable at 3.26 MCM seasonal inflow, holding steady.',
      el: 'Ο Διπόταμος στο 37.8% (5.86 ΕΚΜ) — ισόβαθμος με πέρυσι (37.5%). Σταθερός με 3.26 ΕΚΜ εισροή σεζόν.',
      ru: 'Дипотамос на 37.8% (5.86 МКМ) — практически на уровне прошлогодних 37.5%. Стабильное положение, приток 3.26 МКМ за сезон.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 55.6% (7.50 MCM) — new season high, crossed 55%. Was 14% in mid-March; 31.2pp above last year\'s 24.4%.',
      el: 'Η Γερμασόγεια στο 55.6% (7.50 ΕΚΜ) — νέο μέγιστο σεζόν, πέρασε το 55%. Τον Μάρτιο ήταν στο 14%· 31.2μ.π. πάνω από πέρυσι.',
      ru: 'Гермасойя на 55.6% (7.50 МКМ) — новый максимум, пересекла 55%. В марте была 14%; +31.2пп выше прошлогодних 24.4%.',
    },
    'Arminou': {
      en: 'Arminou at 43.4% (1.87 MCM) — new season high; 16.9 MCM pumped to Kouris since October, transfer ongoing. 18pp below last year.',
      el: 'Ο Αρμίνου στο 43.4% (1.87 ΕΚΜ) — νέο μέγιστο· 16.9 ΕΚΜ στον Κούρη από τον Οκτώβριο. 18μ.π. κάτω από πέρυσι (61.4%).',
      ru: 'Арминоу на 43.4% (1.87 МКМ) — новый максимум; 16.9 МКМ перекачано в Курис с октября. На 18пп ниже прошлогодних 61.4%.',
    },
    'Polemidia': {
      en: 'Polemidia at 59.4% (2.02 MCM) — new season high, 21.9pp above last year\'s 37.5%. Consistent gains throughout April.',
      el: 'Η Πολεμίδια στο 59.4% (2.02 ΕΚΜ) — νέο μέγιστο σεζόν, 21.9μ.π. πάνω από πέρυσι (37.5%). Συνεχής άνοδος τον Απρίλιο.',
      ru: 'Полемидия на 59.4% (2.02 МКМ) — новый сезонный максимум, +21.9пп выше прошлогодних 37.5%. Постоянный рост в течение апреля.',
    },
    'Achna': {
      en: 'Achna critically low at 2.2% (0.15 MCM), zero inflow all season. Far below last year\'s 14.2%. No recovery expected.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.2% (0.15 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (14.2%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.2% (0.15 МКМ), без притока за сезон. Далеко ниже прошлогодних 14.2%. Восстановление не ожидается.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 39.3% (20.6 MCM) — new season high, 15.8pp above last year\'s 23.5%. Seasonal inflow 18.22 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 39.3% (20.6 ΕΚΜ) — νέο μέγιστο, 15.8μ.π. πάνω από πέρυσι (23.5%). Εισροή 18.22 ΕΚΜ σεζόν.',
      ru: 'Аспрокреммос на 39.3% (20.6 МКМ) — новый максимум, +15.8пп выше прошлого года (23.5%). Приток 18.22 МКМ за сезон.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 49.0% (8.42 MCM) — new season high, 24.3pp above last year\'s 24.7%. One good rain from the 50% milestone.',
      el: 'Ο Καννάβιου στο 49.0% (8.42 ΕΚΜ) — νέο μέγιστο, 24.3μ.π. πάνω από πέρυσι (24.7%). Μια καλή βροχή για το 50%.',
      ru: 'Каннавиу на 49.0% (8.42 МКМ) — новый максимум, +24.3пп выше прошлогодних 24.7%. Один хороший дождь до отметки 50%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 89.8% (1.96 MCM) — holding near full capacity. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 89.8% (1.96 ΕΚΜ) — σχεδόν πλήρης. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 89.8% (1.96 МКМ) — близко к заполнению. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 46.1% (11.06 MCM) — new season high, 22.5pp above last year\'s 23.6%. Inflow 8.98 MCM since October.',
      el: 'Ο Εύρετου στο 46.1% (11.06 ΕΚΜ) — νέο μέγιστο σεζόν, 22.5μ.π. πάνω από πέρυσι (23.6%). Εισροή 8.98 ΕΚΜ.',
      ru: 'Эвретоу на 46.1% (11.06 МКМ) — новый сезонный максимум, +22.5пп выше прошлогодних 23.6%. Приток 8.98 МКМ.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), continuously overflowing. Up from 38.5% last year — more than doubled year over year.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), συνεχής υπερχείλιση. Από 38.5% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), продолжает переливаться. Год назад 38.5% — более чем удвоение.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), continuously overflowing. Up from 44.0% last year — more than doubled year over year.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), συνεχής υπερχείλιση. Αύξηση από 44.0% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), продолжает переливаться. Рост с 44.0% год назад — более чем удвоение.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 99.0% (0.30 MCM) — near full capacity for weeks. Up from 59.4% last year; Chrysochou region fully topped up.',
      el: 'Η Αγία Μαρίνα στο 99.0% (0.30 ΕΚΜ) — σχεδόν πλήρης. Από 59.4% πέρυσι — ο Χρυσοχούς πλήρης.',
      ru: 'Агия Марина на 99.0% (0.30 МКМ) — у предела наполнения. Рост с 59.4% год назад; Хрисоху полностью заполнена.',
    },
    'Vyzakia': {
      en: 'Vyzakia full at 100% (1.69 MCM) — filled to capacity Apr 27. Was 2.7% last year — 37× year-over-year recovery.',
      el: 'Τα Βυζακιά γεμάτα στο 100% (1.69 ΕΚΜ) — έφτασαν στη χωρητικότητα στις 27/4. Από 2.7% πέρυσι — 37× ανάκαμψη.',
      ru: 'Визакия заполнена на 100% (1.69 МКМ) — достигла максимума 27 апреля. Год назад 2.7% — восстановление в 37×.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM) — filled Apr 28, 10th dam to reach capacity this season. Was 21.7% last year — 4.6× recovery.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ) — γέμισε 28/4, 10ο φράγμα σεζόν. Από 21.7% πέρυσι — 4.6× ανάκαμψη.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ) — заполнен 28 апреля, 10-я дамба сезона. Год назад 21.7% — восстановление в 4.6×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 82.6% last year, at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 82.6% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 82.6% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos full at 100% (2.80 MCM) — overflowing since late March. Was 35.6% last year — 2.8× year-over-year recovery.',
      el: 'Ο Ταμασός γεμάτος στο 100% (2.80 ΕΚΜ) — υπερχείλιση από τέλη Μαρτίου. Από 35.6% πέρυσι — 2.8× ΕΤΕ.',
      ru: 'Тамассос заполнен на 100% (2.80 МКМ) — переливается с конца марта. Год назад 35.6% — в 2.8× год к году.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 72.8% last year — 1.4× year-over-year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 72.8% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 72.8% год назад — 1.4× год к году.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), overflowing since mid-March. Up from 64.1% last year — 1.6× year-over-year improvement.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 64.1% πέρυσι — 1.6× βελτίωση.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), переливается с середины марта. Рост с 64.1% год назад — улучшение в 1.6×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (20 Απριλίου — 30 Απριλίου 2026)

Συνολική αποθήκευση **39.2%** (114.0 ΕΚΜ), άνοδος από 37.9% (110.2 ΕΚΜ) στις 20/4 — **+1.3μ.π., +3.8 ΕΚΜ σε 10 ημέρες**. Νέο μέγιστο σεζόν. **16.1μ.π. πάνω από πέρυσι** (23.1%). Ο Απρίλιος 2026 κλείνει με **23.3 ΕΚΜ — 2ος καλύτερος Απρίλιος** στα αρχεία από το 1988. Εισροή σεζόν 25/26: **97.8 ΕΚΜ**. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 16.9 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Αρμίνου](/el/dam/arminou/) 43.4%** (+8.5μ.π. από 20/4) — νέο μέγιστο σεζόν, εντυπωσιακή ανάκαμψη παρά τη μεταφορά 16.9 ΕΚΜ στον [Κούρη](/el/dam/kouris/)
- **[Γερμασόγεια](/el/dam/germasoyeia/) 55.6%** (+3.5μ.π. από 20/4) — νέο μέγιστο, 31.2μ.π. πάνω από πέρυσι. Τον Μάρτιο ήταν στο 14%
- [Βυζακιά](/el/dam/vyzakia/) γέμισε στο 100% στις 27/4 — 9ο φράγμα της σεζόν (από 2.7% πέρυσι, 37× ανάκαμψη)
- [Πολεμίδια](/el/dam/polemidia/) 59.4% — νέο μέγιστο, 21.9μ.π. πάνω από πέρυσι
- [Κούρης](/el/dam/kouris/) 37.1% (42.7 ΕΚΜ) — νέο μέγιστο, 18.1μ.π. πάνω από πέρυσι
- 8 φράγματα στο 100%· [Αχνά](/el/dam/achna/) 2.2% — μηδέν εισροή όλη τη σεζόν

**Στα μέσα:**
- [Μάρτης και Απρίλης: οι καλύτεροι μήνες εισροών τα τελευταία 40 χρόνια](https://www.offsite.com.cy/eidiseis/koinonia/martis-ki-aprilis-oi-kalyteroi-mines-gia-eisroi-neroy-sta-fragmata-ta-teleytaia) — Offsite
- [Ξεπέρασαν τα 100 ΕΚΜ τα αποθέματα — συνεχίζουν εισροές Απριλίου](https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-ta-100-ekm-ta-sinolika-apothemata-nerou-sta-fragmata-sinexizoun-simantikes-eisroes-gia-mina-aprilio/) — KitasWeather
- [Αποθέματα νερού: βελτίωση μετά τις εισροές Απριλίου](https://en.sigmalive.com/water-reserves-in-cyprus-improve-after-april-inflows/) — Sigmalive
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (20 апреля — 30 апреля 2026)

Общий запас **39.2%** (114.0 МКМ), рост с 37.9% (110.2 МКМ) на 20/4 — **+1.3пп, +3.8 МКМ за 10 дней**. Новый сезонный максимум. Запасы **на 16.1пп выше прошлогодних** (23.1%). Апрель 2026 закрывается с **23.3 МКМ — 2-й лучший апрель в истории** с 1988 года. Приток сезона 25/26: **97.8 МКМ**. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 16.9 МКМ.

**Основные изменения:**
- **[Арминоу](/ru/dam/arminou/) 43.4%** (+8.5пп с 20/4) — новый максимум сезона, впечатляющее восстановление, несмотря на 16.9 МКМ перекачанных в [Курис](/ru/dam/kouris/)
- **[Гермасойя](/ru/dam/germasoyeia/) 55.6%** (+3.5пп с 20/4) — новый максимум, +31.2пп выше прошлого года. В марте была 14%
- [Визакия](/ru/dam/vyzakia/) заполнена 27/4 — 9-я дамба сезона (год назад 2.7%, восстановление в 37×)
- [Полемидия](/ru/dam/polemidia/) 59.4% — новый максимум, +21.9пп выше прошлого года
- [Курис](/ru/dam/kouris/) 37.1% (42.7 МКМ) — новый максимум, +18.1пп выше прошлого года
- 8 дамб на 100%; [Ахна](/ru/dam/achna/) 2.2% — без притока за весь сезон

**В СМИ:**
- [Март и апрель — лучшие месяцы по притоку воды в дамбы за 40 лет](https://www.offsite.com.cy/eidiseis/koinonia/martis-ki-aprilis-oi-kalyteroi-mines-gia-eisroi-neroy-sta-fragmata-ta-teleytaia) — Offsite
- [Водохранилища Кипра превысили 100 МКМ — апрельский приток продолжается](https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-ta-100-ekm-ta-sinolika-apothemata-nerou-sta-fragmata-sinexizoun-simantikes-eisroes-gia-mina-aprilio/) — KitasWeather
- [Водные резервы Кипра улучшились после апрельского притока](https://en.sigmalive.com/water-reserves-in-cyprus-improve-after-april-inflows/) — Sigmalive
`;
  }
  return `
### Recent Changes (April 20 — April 30, 2026)

Total storage at **39.2%** (114.0 MCM), up from 37.9% (110.2 MCM) on Apr 20 — **+1.3pp, +3.8 MCM in 10 days**. New season high. **16.1pp above last year** (23.1%). April 2026 closes at **23.3 MCM — 2nd highest April on record** since 1988. Season total: **97.8 MCM** — 5.2× the drought year 24/25. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 16.9 MCM.

**Notable movements:**
- **[Arminou](/dam/arminou/) 43.4%** (+8.5pp since Apr 20) — new season high; impressive rebound despite 16.9 MCM pumped to [Kouris](/dam/kouris/) since October
- **[Germasoyeia](/dam/germasoyeia/) 55.6%** (+3.5pp since Apr 20) — new season high, 31.2pp above last year. Was at just 14% in mid-March
- [Vyzakia](/dam/vyzakia/) filled to 100% on Apr 27 — 9th dam to reach full capacity (was 2.7% last year, 37× recovery)
- [Polemidia](/dam/polemidia/) 59.4% — new season high, 21.9pp above last year
- [Kouris](/dam/kouris/) 37.1% (42.7 MCM) — new season high, 18.1pp above last year
- 8 dams at 100%; [Achna](/dam/achna/) 2.2% — zero inflow all season

**In the media:**
- [March and April were the best months for dam inflows in 40 years](https://www.offsite.com.cy/eidiseis/koinonia/martis-ki-aprilis-oi-kalyteroi-mines-gia-eisroi-nerou-sta-fragmata-ta-teleytaia) — Offsite
- [Reservoirs exceed 100 MCM — April inflows continue](https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-ta-100-ekm-ta-sinolika-apothemata-nerou-sta-fragmata-sinexizoun-simantikes-eisroes-gia-mina-aprilio/) — KitasWeather
- [Water reserves in Cyprus improve after April inflows](https://en.sigmalive.com/water-reserves-in-cyprus-improve-after-april-inflows/) — Sigmalive
`;
};
