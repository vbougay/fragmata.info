import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.094, totalSince: 20.075 }, storage: { current: { amount: 42.467, percentage: 36.9 }, lastYear: { amount: 21.883, percentage: 19.0 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.026, totalSince: 3.474 }, storage: { current: { amount: 3.713, percentage: 21.7 }, lastYear: { amount: 4.438, percentage: 26.0 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.007, totalSince: 1.561 }, storage: { current: { amount: 2.484, percentage: 17.9 }, lastYear: { amount: 3.161, percentage: 22.8 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.013, totalSince: 3.229 }, storage: { current: { amount: 5.836, percentage: 37.7 }, lastYear: { amount: 5.805, percentage: 37.5 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.047, totalSince: 7.751 }, storage: { current: { amount: 7.356, percentage: 54.5 }, lastYear: { amount: 3.317, percentage: 24.6 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.071, totalSince: 17.554 }, storage: { current: { amount: 1.726, percentage: 40.1 }, lastYear: { amount: 2.641, percentage: 61.4 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.011, totalSince: 1.370 }, storage: { current: { amount: 1.992, percentage: 58.6 }, lastYear: { amount: 1.272, percentage: 37.4 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.149, percentage: 2.2 }, lastYear: { amount: 0.992, percentage: 14.6 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.039, totalSince: 18.121 }, storage: { current: { amount: 20.504, percentage: 39.1 }, lastYear: { amount: 12.356, percentage: 23.6 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.021, totalSince: 8.434 }, storage: { current: { amount: 8.416, percentage: 49.0 }, lastYear: { amount: 4.266, percentage: 24.8 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.002, totalSince: 0.922 }, storage: { current: { amount: 1.962, percentage: 90.0 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.031, totalSince: 8.933 }, storage: { current: { amount: 11.017, percentage: 45.9 }, lastYear: { amount: 5.68, percentage: 23.7 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.381, percentage: 38.5 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.378, percentage: 44.0 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.243 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.177, percentage: 59.4 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.0, totalSince: 1.689 }, storage: { current: { amount: 1.69, percentage: 100.0 }, lastYear: { amount: 0.046, percentage: 2.7 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.002, totalSince: 1.419 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.311, percentage: 21.7 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.305, percentage: 84.0 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.001, totalSince: 2.592 }, storage: { current: { amount: 2.8, percentage: 100.0 }, lastYear: { amount: 1.0, percentage: 35.7 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.071 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.459, percentage: 73.0 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.866, percentage: 64.3 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through April 28, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:22.39, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:96.873 },
];

export const getReportDate = (): string => "28-APR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 16.86 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 36.9% (42.5 MCM) — new season high, 17.9pp above last year\'s 19.0%. Arminou→Kouris transfer: 16.86 MCM since October.',
      el: 'Ο Κούρης στο 36.9% (42.5 ΕΚΜ) — νέο μέγιστο σεζόν, 17.9μ.π. πάνω από πέρυσι (19.0%). Μεταφορά Αρμίνου→Κούρης: 16.86 ΕΚΜ.',
      ru: 'Курис на 36.9% (42.5 МКМ) — новый сезонный максимум, +17.9пп выше прошлогодних 19.0%. Перекачка Арминоу→Курис: 16.86 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 21.7% (3.71 MCM) — 4.3pp below last year\'s 26.0%. Seasonal inflow 3.47 MCM, slow but steady gain.',
      el: 'Ο Καλαβασός στο 21.7% (3.71 ΕΚΜ) — 4.3μ.π. κάτω από πέρυσι (26.0%). Εισροή σεζόν 3.47 ΕΚΜ, αργή αλλά σταθερή άνοδος.',
      ru: 'Калавасос на 21.7% (3.71 МКМ) — на 4.3пп ниже прошлогодних 26.0%. Приток 3.47 МКМ за сезон — медленный, но стабильный рост.',
    },
    'Lefkara': {
      en: 'Lefkara at 17.9% (2.48 MCM) — 4.9pp below last year\'s 22.8%. Seasonal inflow 1.56 MCM, slow recovery continues.',
      el: 'Η Λεύκαρα στο 17.9% (2.48 ΕΚΜ) — 4.9μ.π. κάτω από πέρυσι (22.8%). Εισροή σεζόν 1.56 ΕΚΜ — αργή ανάκαμψη.',
      ru: 'Лефкара на 17.9% (2.48 МКМ) — на 4.9пп ниже прошлогодних 22.8%. Приток 1.56 МКМ за сезон — медленное восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 37.7% (5.84 MCM) — essentially matching last year\'s 37.5%. Stable with 3.23 MCM seasonal inflow.',
      el: 'Ο Διπόταμος στο 37.7% (5.84 ΕΚΜ) — ισόβαθμος με πέρυσι (37.5%). Σταθερός με 3.23 ΕΚΜ εισροή σεζόν.',
      ru: 'Дипотамос на 37.7% (5.84 МКМ) — практически на уровне прошлогодних 37.5%. Стабильное положение, приток 3.23 МКМ за сезон.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 54.5% (7.36 MCM) — new season high, seventh consecutive day above 50%. 29.9pp above last year\'s 24.6%.',
      el: 'Η Γερμασόγεια στο 54.5% (7.36 ΕΚΜ) — νέο μέγιστο σεζόν, 7η σερί ημέρα πάνω από 50%. 29.9μ.π. πάνω από πέρυσι (24.6%).',
      ru: 'Гермасойя на 54.5% (7.36 МКМ) — новый максимум, 7-й день подряд выше 50%. +29.9пп выше прошлогодних 24.6%.',
    },
    'Arminou': {
      en: 'Arminou at 40.1% (1.73 MCM) — new season high; 16.86 MCM pumped to Kouris since October, transfer ongoing. 21.3pp below last year.',
      el: 'Ο Αρμίνου στο 40.1% (1.73 ΕΚΜ) — νέο μέγιστο· 16.86 ΕΚΜ στον Κούρη από τον Οκτώβριο. 21.3μ.π. κάτω από πέρυσι (61.4%).',
      ru: 'Арминоу на 40.1% (1.73 МКМ) — новый максимум; 16.86 МКМ перекачано в Курис с октября. На 21.3пп ниже прошлогодних 61.4%.',
    },
    'Polemidia': {
      en: 'Polemidia at 58.6% (1.99 MCM) — new season high, 21.2pp above last year\'s 37.4%. Steady upward trend continues.',
      el: 'Η Πολεμίδια στο 58.6% (1.99 ΕΚΜ) — νέο μέγιστο σεζόν, 21.2μ.π. πάνω από πέρυσι (37.4%). Σταθερή ανοδική τάση.',
      ru: 'Полемидия на 58.6% (1.99 МКМ) — новый сезонный максимум, +21.2пп выше прошлогодних 37.4%. Устойчивый восходящий тренд.',
    },
    'Achna': {
      en: 'Achna critically low at 2.2% (0.15 MCM), zero inflow all season. Far below last year\'s 14.6%. No recovery expected.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.2% (0.15 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (14.6%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.2% (0.15 МКМ), без притока за сезон. Далеко ниже прошлогодних 14.6%. Восстановление не ожидается.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 39.1% (20.5 MCM) — new season high, 15.5pp above last year\'s 23.6%. Seasonal inflow 18.12 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 39.1% (20.5 ΕΚΜ) — νέο μέγιστο, 15.5μ.π. πάνω από πέρυσι (23.6%). Εισροή 18.12 ΕΚΜ σεζόν.',
      ru: 'Аспрокреммос на 39.1% (20.5 МКМ) — новый максимум, +15.5пп выше прошлого года (23.6%). Приток 18.12 МКМ за сезон.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 49.0% (8.42 MCM) — new season high, 24.2pp above last year\'s 24.8%. One good rain from the 50% milestone.',
      el: 'Ο Καννάβιου στο 49.0% (8.42 ΕΚΜ) — νέο μέγιστο, 24.2μ.π. πάνω από πέρυσι (24.8%). Μια καλή βροχή για το 50%.',
      ru: 'Каннавиу на 49.0% (8.42 МКМ) — новый максимум, +24.2пп выше прошлогодних 24.8%. Один хороший дождь до отметки 50%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 90.0% (1.96 MCM) — holding near full. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 90.0% (1.96 ΕΚΜ) — σχεδόν πλήρης. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 90.0% (1.96 МКМ) — близко к заполнению. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 45.9% (11.02 MCM) — new season high, 22.2pp above last year\'s 23.7%. Inflow 8.93 MCM since October.',
      el: 'Ο Εύρετου στο 45.9% (11.02 ΕΚΜ) — νέο μέγιστο σεζόν, 22.2μ.π. πάνω από πέρυσι (23.7%). Εισροή 8.93 ΕΚΜ.',
      ru: 'Эвретоу на 45.9% (11.02 МКМ) — новый сезонный максимум, +22.2пп выше прошлогодних 23.7%. Приток 8.93 МКМ.',
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
      en: 'Agia Marina at 100% (0.30 MCM), overflowing. Up from 59.4% last year — Chrysochou region fully topped up.',
      el: 'Η Αγία Μαρίνα στο 100% (0.30 ΕΚΜ), υπερχείλιση. Από 59.4% πέρυσι — Χρυσοχούς πλήρης.',
      ru: 'Агия Марина на 100% (0.30 МКМ), переливается. Рост с 59.4% год назад — Хрисоху полностью заполнена.',
    },
    'Vyzakia': {
      en: 'Vyzakia full at 100% (1.69 MCM) — filled to capacity Apr 27. Was 2.7% last year — 37× year-over-year recovery.',
      el: 'Τα Βυζακιά γεμάτα στο 100% (1.69 ΕΚΜ) — έφτασαν στη χωρητικότητα στις 27/4. Από 2.7% πέρυσι — 37× ανάκαμψη.',
      ru: 'Визакия заполнена на 100% (1.69 МКМ) — достигла максимума 27 апреля. Год назад 2.7% — восстановление в 37×.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM) — reached full capacity Apr 28, 10th dam to fill this season. Was 21.7% last year — 4.6× recovery.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ) — έφτασε στη χωρητικότητα στις 28/4, 10ο φράγμα σεζόν. Από 21.7% πέρυσι — 4.6× ανάκαμψη.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ) — достиг максимума 28 апреля, 10-я дамба сезона. Год назад 21.7% — восстановление в 4.6×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 84.0% last year, at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 84.0% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 84.0% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos full at 100% (2.80 MCM) — overflowing since late March. Was 35.7% last year — 2.8× year-over-year recovery.',
      el: 'Ο Ταμασός γεμάτος στο 100% (2.80 ΕΚΜ) — υπερχείλιση από τέλη Μαρτίου. Από 35.7% πέρυσι — 2.8× ΕΤΕ.',
      ru: 'Тамассос заполнен на 100% (2.80 МКМ) — переливается с конца марта. Год назад 35.7% — в 2.8× год к году.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 73.0% last year — 1.4× year-over-year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 73.0% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 73.0% год назад — 1.4× год к году.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), overflowing since mid-March. Up from 64.3% last year — 1.6× year-over-year improvement.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 64.3% πέρυσι — 1.6× βελτίωση.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), переливается с середины марта. Рост с 64.3% год назад — улучшение в 1.6×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (20 Απριλίου — 28 Απριλίου 2026)

Συνολική αποθήκευση **38.9%** (113.3 ΕΚΜ), άνοδος από 37.9% (110.2 ΕΚΜ) στις 20/4 — **+3.1 ΕΚΜ σε 8 ημέρες**. Νέο μέγιστο σεζόν. **15.7μ.π. πάνω από πέρυσι** (23.2%). Εισροή σεζόν 25/26: **96.9 ΕΚΜ** — ο Απρίλιος 2026 με 22.4 ΕΚΜ παραμένει **2ος καλύτερος Απρίλιος** στα αρχεία. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 16.86 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Ξυλιάτος](/el/dam/xyliatos/) 100%** — συμπληρώθηκε στις 28/4, **10ο φράγμα** της σεζόν στο πλήρες. Από 21.7% πέρυσι (4.6×)
- **[Βυζακιά](/el/dam/vyzakia/) 100%** — πλήρης από 27/4. Από 2.7% πέρυσι (37×)
- [Αρμίνου](/el/dam/arminou/) 40.1% (+5.2μ.π. από 20/4) — νέο μέγιστο, ισχυρή ανάκαμψη παρά τη συνεχή αντλία
- [Γερμασόγεια](/el/dam/germasoyeia/) 54.5% (+2.4μ.π. από 20/4) — νέο μέγιστο, 7η ημέρα πάνω από 50%
- [Κούρης](/el/dam/kouris/) 36.9% (42.5 ΕΚΜ, +1.0μ.π.) — νέο μέγιστο, 17.9μ.π. πάνω από πέρυσι
- 10 φράγματα στο 100% — [Αχνά](/el/dam/achna/) εξακολουθεί στο 2.2% χωρίς εισροή

**Στα μέσα:**
- [Σε επίπεδα εξαιρετικής πολυομβρίας πέρασε ο Απρίλιος 2026 — πάνω από 170% μέσης βροχόπτωσης](https://kitasweather.com/news/fragmata-vroxoptosi/se-epipeda-ekseritikis-poliomvrias-perase-o-aprilios-kseperase-to-170-tis-ekato-i-mesi-vroxoptosi-apriliou/) — KitasWeather
- [Εισροές άνω 2 ΕΚΜ τελευταίο τριήμερο — πληρότητα πλησιάζει 40%](https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-ta-2-ekm-oi-eisroes-nerou-to-telefteo-triimero-plisiazei-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
- [Πληρότητα φραγμάτων στο 38%, πάνω από πέρυσι](https://cyprus-mail.com/2026/04/20/dam-capacity-reaches-38-up-from-last-year) — Cyprus Mail
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (20 апреля — 28 апреля 2026)

Общий запас **38.9%** (113.3 МКМ), рост с 37.9% (110.2 МКМ) на 20/4 — **+3.1 МКМ за 8 дней**. Новый сезонный максимум. Запасы **на 15.7пп выше прошлогодних** (23.2%). Приток сезона 25/26: **96.9 МКМ** — апрель 2026 с 22.4 МКМ остаётся **2-м лучшим апрелем в истории**. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 16.86 МКМ.

**Основные изменения:**
- **[Ксилиатос](/ru/dam/xyliatos/) 100%** — заполнен 28 апреля, **10-я дамба** сезона у максимума. Год назад 21.7% (4.6×)
- **[Визакия](/ru/dam/vyzakia/) 100%** — заполнена с 27 апреля. Год назад 2.7% (37×)
- [Арминоу](/ru/dam/arminou/) 40.1% (+5.2пп с 20/4) — новый максимум, мощный отскок вопреки продолжающейся перекачке
- [Гермасойя](/ru/dam/germasoyeia/) 54.5% (+2.4пп с 20/4) — новый максимум, 7-й день подряд выше 50%
- [Курис](/ru/dam/kouris/) 36.9% (42.5 МКМ, +1.0пп) — новый максимум, +17.9пп выше прошлого года
- 10 дамб на 100%; [Ахна](/ru/dam/achna/) по-прежнему 2.2% — без притока за сезон

**В СМИ:**
- [Апрель 2026 — исключительный уровень осадков, более 170% нормы](https://kitasweather.com/news/fragmata-vroxoptosi/se-epipeda-ekseritikis-poliomvrias-perase-o-aprilios-kseperase-to-170-tis-ekato-i-mesi-vroxoptosi-apriliou/) — KitasWeather
- [За зиму водохранилища Кипра выросли почти вчетверо: с 9,6% до 38%](https://lenta.cy/za-zimu-vodohranilishha-kipra-vyrosli-pochti-vchetvero-s-9-6-do-38/) — Lenta.cy
- [Водохранилища Кипра заполнились до 37,9% после недавних дождей](https://ruscyprus.com/news/vodohranilishcha-kipra-zapolnilis-do-37-9/55028) — RusCyprus
`;
  }
  return `
### Recent Changes (April 20 — April 28, 2026)

Total storage at **38.9%** (113.3 MCM), up from 37.9% (110.2 MCM) on Apr 20 — **+3.1 MCM in 8 days**. New season high. **15.7pp above last year** (23.2%). Season total: **96.9 MCM** — April 2026 at 22.4 MCM remains the **2nd highest April on record**. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 16.86 MCM.

**Notable movements:**
- **[Xyliatos](/dam/xyliatos/) reaches 100%** — officially full on Apr 28, the **10th dam** to fill this season. Was 21.7% last year (4.6×)
- **[Vyzakia](/dam/vyzakia/) 100%** — filled to capacity Apr 27. Was 2.7% last year (37×)
- [Arminou](/dam/arminou/) 40.1% (+5.2pp since Apr 20) — new season high, strong rebound despite 16.86 MCM pumped to Kouris since October
- [Germasoyeia](/dam/germasoyeia/) 54.5% (+2.4pp since Apr 20) — new season high, seventh consecutive day above 50%
- [Kouris](/dam/kouris/) 36.9% (42.5 MCM, +1.0pp) — new season high, 17.9pp above last year
- 10 dams at 100%; [Achna](/dam/achna/) remains 2.2% — zero inflow all season

**In the media:**
- [April 2026 reaches exceptional rainfall levels — over 170% of monthly average](https://kitasweather.com/news/fragmata-vroxoptosi/se-epipeda-ekseritikis-poliomvrias-perase-o-aprilios-kseperase-to-170-tis-ekato-i-mesi-vroxoptosi-apriliou/) — KitasWeather
- [Water scarcity in Cyprus: how can we effectively manage the crisis?](https://cyprus-mail.com/2026/04/22/water-scarcity-in-cyprus-how-can-we-effectively-manage-the-crisis) — Cyprus Mail
- [Dam capacity reaches 38%, up from last year](https://cyprus-mail.com/2026/04/20/dam-capacity-reaches-38-up-from-last-year) — Cyprus Mail
`;
};
