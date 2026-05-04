import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.382, totalSince: 20.828 }, storage: { current: { amount: 43.038, percentage: 37.4 }, lastYear: { amount: 21.793, percentage: 19.0 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.093, totalSince: 3.621 }, storage: { current: { amount: 3.844, percentage: 22.5 }, lastYear: { amount: 4.393, percentage: 25.7 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.030, totalSince: 1.603 }, storage: { current: { amount: 2.516, percentage: 18.2 }, lastYear: { amount: 3.085, percentage: 22.3 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.078, totalSince: 3.347 }, storage: { current: { amount: 5.899, percentage: 38.1 }, lastYear: { amount: 5.821, percentage: 37.6 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.096, totalSince: 8.034 }, storage: { current: { amount: 7.622, percentage: 56.5 }, lastYear: { amount: 3.283, percentage: 24.3 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.265, totalSince: 18.086 }, storage: { current: { amount: 2.114, percentage: 49.2 }, lastYear: { amount: 2.641, percentage: 61.4 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.023, totalSince: 1.430 }, storage: { current: { amount: 2.049, percentage: 60.3 }, lastYear: { amount: 1.27, percentage: 37.4 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.149, percentage: 2.2 }, lastYear: { amount: 0.932, percentage: 13.7 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.190, totalSince: 18.446 }, storage: { current: { amount: 20.758, percentage: 39.6 }, lastYear: { amount: 12.262, percentage: 23.4 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.112, totalSince: 8.585 }, storage: { current: { amount: 8.495, percentage: 49.5 }, lastYear: { amount: 4.23, percentage: 24.6 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.003, totalSince: 0.927 }, storage: { current: { amount: 1.953, percentage: 89.6 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.094, totalSince: 9.102 }, storage: { current: { amount: 11.171, percentage: 46.5 }, lastYear: { amount: 5.646, percentage: 23.5 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.375, percentage: 37.9 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.375, percentage: 43.6 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.004, totalSince: 0.247 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.175, percentage: 58.7 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.0, totalSince: 1.689 }, storage: { current: { amount: 1.69, percentage: 100.0 }, lastYear: { amount: 0.045, percentage: 2.7 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 1.419 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.307, percentage: 21.5 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.298, percentage: 82.1 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.003, totalSince: 2.760 }, storage: { current: { amount: 2.8, percentage: 100.0 }, lastYear: { amount: 0.99, percentage: 35.4 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.003, totalSince: 1.104 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.456, percentage: 72.8 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.852, percentage: 64.0 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through May 4, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:1.370, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:99.462 },
];

export const getReportDate = (): string => "04-MAY-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 17.0 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 37.4% (43.0 MCM) — new season high, 18.4pp above last year\'s 19.0%. Arminou→Kouris transfer: 17.0 MCM since October.',
      el: 'Ο Κούρης στο 37.4% (43.0 ΕΚΜ) — νέο μέγιστο σεζόν, 18.4μ.π. πάνω από πέρυσι (19.0%). Μεταφορά Αρμίνου→Κούρης: 17.0 ΕΚΜ.',
      ru: 'Курис на 37.4% (43.0 МКМ) — новый сезонный максимум, +18.4пп выше прошлогодних 19.0%. Перекачка Арминоу→Курис: 17.0 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 22.5% (3.84 MCM) — 3.2pp below last year\'s 25.7%. Seasonal inflow 3.62 MCM, slow but steady recovery.',
      el: 'Ο Καλαβασός στο 22.5% (3.84 ΕΚΜ) — 3.2μ.π. κάτω από πέρυσι (25.7%). Εισροή σεζόν 3.62 ΕΚΜ.',
      ru: 'Калавасос на 22.5% (3.84 МКМ) — на 3.2пп ниже прошлогодних 25.7%. Приток 3.62 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.2% (2.52 MCM) — 4.1pp below last year\'s 22.3%. Seasonal inflow 1.60 MCM, slow recovery continues.',
      el: 'Η Λεύκαρα στο 18.2% (2.52 ΕΚΜ) — 4.1μ.π. κάτω από πέρυσι (22.3%). Εισροή σεζόν 1.60 ΕΚΜ — αργή ανάκαμψη.',
      ru: 'Лефкара на 18.2% (2.52 МКМ) — на 4.1пп ниже прошлогодних 22.3%. Приток 1.60 МКМ за сезон — медленное восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 38.1% (5.90 MCM) — slightly above last year\'s 37.6%. Stable at 3.35 MCM seasonal inflow, holding steady.',
      el: 'Ο Διπόταμος στο 38.1% (5.90 ΕΚΜ) — ελαφρά πάνω από πέρυσι (37.6%). Σταθερός με 3.35 ΕΚΜ εισροή σεζόν.',
      ru: 'Дипотамос на 38.1% (5.90 МКМ) — незначительно выше прошлогодних 37.6%. Стабильное положение, приток 3.35 МКМ за сезон.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 56.5% (7.62 MCM) — new season high, 32.2pp above last year\'s 24.3%. Was at 14% in mid-March — a 42pp gain in 7 weeks.',
      el: 'Η Γερμασόγεια στο 56.5% (7.62 ΕΚΜ) — νέο μέγιστο σεζόν, 32.2μ.π. πάνω από πέρυσι (24.3%). Τον Μάρτιο ήταν στο 14% — άνοδος 42μ.π. σε 7 εβδομάδες.',
      ru: 'Гермасойя на 56.5% (7.62 МКМ) — новый максимум, +32.2пп выше прошлогодних 24.3%. В марте была 14% — прирост в 42пп за 7 недель.',
    },
    'Arminou': {
      en: 'Arminou at 49.2% (2.11 MCM) — new season high, +10pp gain in 7 days; 17.0 MCM pumped to Kouris since October. Seasonal inflow 18.1 MCM.',
      el: 'Ο Αρμίνου στο 49.2% (2.11 ΕΚΜ) — νέο μέγιστο, +10μ.π. σε 7 ημέρες· 17.0 ΕΚΜ στον Κούρη από τον Οκτώβριο. Εισροή 18.1 ΕΚΜ σεζόν.',
      ru: 'Арминоу на 49.2% (2.11 МКМ) — новый максимум, +10пп за 7 дней; 17.0 МКМ перекачано в Курис с октября. Приток 18.1 МКМ за сезон.',
    },
    'Polemidia': {
      en: 'Polemidia at 60.3% (2.05 MCM) — new season high, 22.9pp above last year\'s 37.4%. Consistent gains throughout spring.',
      el: 'Η Πολεμίδια στο 60.3% (2.05 ΕΚΜ) — νέο μέγιστο σεζόν, 22.9μ.π. πάνω από πέρυσι (37.4%). Συνεχής άνοδος εφέτος.',
      ru: 'Полемидия на 60.3% (2.05 МКМ) — новый сезонный максимум, +22.9пп выше прошлогодних 37.4%. Постоянный рост весной.',
    },
    'Achna': {
      en: 'Achna critically low at 2.2% (0.15 MCM), zero inflow all season. Far below last year\'s 13.7%. No recovery expected.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.2% (0.15 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (13.7%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.2% (0.15 МКМ), без притока за сезон. Далеко ниже прошлогодних 13.7%. Восстановление не ожидается.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 39.6% (20.76 MCM) — new season high, 16.2pp above last year\'s 23.4%. Seasonal inflow 18.45 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 39.6% (20.76 ΕΚΜ) — νέο μέγιστο, 16.2μ.π. πάνω από πέρυσι (23.4%). Εισροή 18.45 ΕΚΜ σεζόν.',
      ru: 'Аспрокреммос на 39.6% (20.76 МКМ) — новый максимум, +16.2пп выше прошлого года (23.4%). Приток 18.45 МКМ за сезон.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 49.5% (8.50 MCM) — new season high, 24.9pp above last year\'s 24.6%. Approaching the 50% milestone.',
      el: 'Ο Καννάβιου στο 49.5% (8.50 ΕΚΜ) — νέο μέγιστο, 24.9μ.π. πάνω από πέρυσι (24.6%). Πλησιάζει το ορόσημο 50%.',
      ru: 'Каннавиу на 49.5% (8.50 МКМ) — новый максимум, +24.9пп выше прошлогодних 24.6%. Приближается к отметке 50%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 89.6% (1.95 MCM) — holding near full capacity. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 89.6% (1.95 ΕΚΜ) — σχεδόν πλήρης. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 89.6% (1.95 МКМ) — близко к заполнению. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 46.5% (11.17 MCM) — new season high, 23.0pp above last year\'s 23.5%. Inflow 9.10 MCM since October.',
      el: 'Ο Εύρετου στο 46.5% (11.17 ΕΚΜ) — νέο μέγιστο σεζόν, 23.0μ.π. πάνω από πέρυσι (23.5%). Εισροή 9.10 ΕΚΜ.',
      ru: 'Эвретоу на 46.5% (11.17 МКМ) — новый сезонный максимум, +23.0пп выше прошлогодних 23.5%. Приток 9.10 МКМ.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), continuously overflowing. Up from 37.9% last year — more than doubled year over year.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), συνεχής υπερχείλιση. Από 37.9% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), продолжает переливаться. Год назад 37.9% — более чем удвоение.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), continuously overflowing. Up from 43.6% last year — more than doubled year over year.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), συνεχής υπερχείλιση. Αύξηση από 43.6% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), продолжает переливаться. Рост с 43.6% год назад — более чем удвоение.',
    },
    'Agia Marina': {
      en: 'Agia Marina full at 100% (0.30 MCM) — reached capacity May 4. Up from 58.7% last year; Chrysochou region all dams at full.',
      el: 'Η Αγία Μαρίνα γεμάτη στο 100% (0.30 ΕΚΜ) — έφτασε χωρητικότητα 4/5. Από 58.7% πέρυσι — ο Χρυσοχούς πλήρης.',
      ru: 'Агия Марина заполнена на 100% (0.30 МКМ) — достигла максимума 4 мая. Рост с 58.7% год назад; все дамбы Хрисоху полны.',
    },
    'Vyzakia': {
      en: 'Vyzakia full at 100% (1.69 MCM) — filled to capacity Apr 27. Was 2.7% last year — 37× year-over-year recovery.',
      el: 'Τα Βυζακιά γεμάτα στο 100% (1.69 ΕΚΜ) — έφτασαν στη χωρητικότητα στις 27/4. Από 2.7% πέρυσι — 37× ανάκαμψη.',
      ru: 'Визакия заполнена на 100% (1.69 МКМ) — достигла максимума 27 апреля. Год назад 2.7% — восстановление в 37×.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM) — filled Apr 28, holding at capacity. Was 21.5% last year — 4.6× year-over-year recovery.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ) — γέμισε 28/4, παραμένει στη χωρητικότητα. Από 21.5% πέρυσι — 4.6× ανάκαμψη.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ) — заполнен 28 апреля. Год назад 21.5% — восстановление в 4.6×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 82.1% last year, at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 82.1% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 82.1% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos full at 100% (2.80 MCM) — overflowing since late March. Was 35.4% last year — 2.8× year-over-year recovery.',
      el: 'Ο Ταμασός γεμάτος στο 100% (2.80 ΕΚΜ) — υπερχείλιση από τέλη Μαρτίου. Από 35.4% πέρυσι — 2.8× ΕΤΕ.',
      ru: 'Тамассос заполнен на 100% (2.80 МКМ) — переливается с конца марта. Год назад 35.4% — в 2.8× год к году.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 72.8% last year — 1.4× year-over-year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 72.8% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 72.8% год назад — 1.4× год к году.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), overflowing since mid-March. Up from 64.0% last year — 1.6× year-over-year improvement.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 64.0% πέρυσι — 1.6× βελτίωση.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), переливается с середины марта. Рост с 64.0% год назад — улучшение в 1.6×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (27 Απριλίου — 4 Μαΐου 2026)

Συνολική αποθήκευση **39.6%** (115.2 ΕΚΜ), άνοδος από 38.8% (113.0 ΕΚΜ) στις 27/4 — **+0.8μ.π., +2.3 ΕΚΜ σε 7 ημέρες**. Νέο μέγιστο σεζόν. **16.6μ.π. πάνω από πέρυσι** (23.0%). Εισροή σεζόν 25/26: **99.5 ΕΚΜ** — μόλις 0.5 ΕΚΜ από το ορόσημο των 100 ΕΚΜ. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 17.0 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Αρμίνου](/el/dam/arminou/) 49.2%** (+10.2μ.π. από 27/4) — νέο μέγιστο σεζόν, εντυπωσιακή ανάκαμψη παρά τη μεταφορά 17.0 ΕΚΜ στον [Κούρη](/el/dam/kouris/)
- **[Γερμασόγεια](/el/dam/germasoyeia/) 56.5%** (+2.3μ.π. από 27/4) — νέο μέγιστο, 32.2μ.π. πάνω από πέρυσι. Τον Μάρτιο ήταν στο 14%
- [Πολεμίδια](/el/dam/polemidia/) 60.3% — νέο μέγιστο, 22.9μ.π. πάνω από πέρυσι
- [Αγία Μαρίνα](/el/dam/agia-marina/) 100% — γέμισε, ο Χρυσοχούς με όλα τα φράγματα πλήρη
- [Καννάβιου](/el/dam/kannaviou/) 49.5% — πλησιάζει το 50%
- 9 φράγματα στο 100%· [Αχνά](/el/dam/achna/) 2.2% — μηδέν εισροή όλη τη σεζόν

**Στα μέσα:**
- [Ξεπέρασε το 180% η μέση βροχόπτωση Απριλίου — στο 39.1% η πληρότητα φραγμάτων](https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-180-tis-ekato-i-mesi-vroxoptosi-apriliou-sinoliki-plirotita-fragmaton/) — KitasWeather
- [Μάρτης κι Απρίλης: οι καλύτεροι μήνες για εισροή νερού στα φράγματα τα τελευταία 40 χρόνια](https://www.offsite.com.cy/eidiseis/koinonia/martis-ki-aprilis-oi-kalyteroi-mines-gia-eisroi-neroy-sta-fragmata-ta-teleytaia) — Offsite
- [Τμήμα Αναπτύξεως Υδάτων: μέτρα για εξασφάλιση θερινής υδροδότησης](https://cyprus-mail.com/2026/04/06/water-development-department-acts-to-secure-summer-water-supply) — Cyprus Mail
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (27 апреля — 4 мая 2026)

Общий запас **39.6%** (115.2 МКМ), рост с 38.8% (113.0 МКМ) на 27/4 — **+0.8пп, +2.3 МКМ за 7 дней**. Новый сезонный максимум. Запасы **на 16.6пп выше прошлогодних** (23.0%). Приток сезона 25/26: **99.5 МКМ** — всего 0.5 МКМ до отметки 100 МКМ. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 17.0 МКМ.

**Основные изменения:**
- **[Арминоу](/ru/dam/arminou/) 49.2%** (+10.2пп с 27/4) — новый максимум сезона, впечатляющее восстановление, несмотря на 17.0 МКМ перекачанных в [Курис](/ru/dam/kouris/)
- **[Гермасойя](/ru/dam/germasoyeia/) 56.5%** (+2.3пп с 27/4) — новый максимум, +32.2пп выше прошлого года. В марте была 14%
- [Полемидия](/ru/dam/polemidia/) 60.3% — новый максимум, +22.9пп выше прошлого года
- [Агия Марина](/ru/dam/agia-marina/) 100% — заполнена; все дамбы Хрисоху теперь полные
- [Каннавиу](/ru/dam/kannaviou/) 49.5% — приближается к отметке 50%
- 9 дамб на 100%; [Ахна](/ru/dam/achna/) 2.2% — без притока за весь сезон

**В СМИ:**
- [Апрельские осадки превысили 180% нормы — наполненность дамб 39.1%](https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-180-tis-ekato-i-mesi-vroxoptosi-apriliou-sinoliki-plirotita-fragmaton/) — KitasWeather
- [Март и апрель — лучшие месяцы по притоку воды в дамбы за 40 лет](https://www.offsite.com.cy/eidiseis/koinonia/martis-ki-aprilis-oi-kalyteroi-mines-gia-eisroi-neroy-sta-fragmata-ta-teleytaia) — Offsite
- [Водохранилища Кипра улучшились после апрельского притока](https://en.sigmalive.com/water-reserves-in-cyprus-improve-after-april-inflows/) — Sigmalive
`;
  }
  return `
### Recent Changes (April 27 — May 4, 2026)

Total storage at **39.6%** (115.2 MCM), up from 38.8% (113.0 MCM) on Apr 27 — **+0.8pp, +2.3 MCM in 7 days**. New season high. **16.6pp above last year** (23.0%). Season total: **99.5 MCM** — just 0.5 MCM short of the 100 MCM milestone. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 17.0 MCM.

**Notable movements:**
- **[Arminou](/dam/arminou/) 49.2%** (+10.2pp since Apr 27) — new season high; extraordinary recovery despite 17.0 MCM pumped to [Kouris](/dam/kouris/) since October
- **[Germasoyeia](/dam/germasoyeia/) 56.5%** (+2.3pp since Apr 27) — new season high, 32.2pp above last year. Was at just 14% in mid-March
- [Polemidia](/dam/polemidia/) 60.3% — new season high, 22.9pp above last year
- [Agia Marina](/dam/agia-marina/) reached 100% — all four Chrysochou dams now at full capacity
- [Kannaviou](/dam/kannaviou/) 49.5% — inching toward the 50% milestone
- 9 dams at 100%; [Achna](/dam/achna/) 2.2% — zero inflow all season

**In the media:**
- [April precipitation exceeded 180% of average — dam fullness at 39.1%](https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-180-tis-ekato-i-mesi-vroxoptosi-apriliou-sinoliki-plirotita-fragmaton/) — KitasWeather
- [March and April were the best months for dam inflows in 40 years](https://www.offsite.com.cy/eidiseis/koinonia/martis-ki-aprilis-oi-kalyteroi-mines-gia-eisroi-neroy-sta-fragmata-ta-teleytaia) — Offsite
- [Water development department acts to secure summer water supply](https://cyprus-mail.com/2026/04/06/water-development-department-acts-to-secure-summer-water-supply) — Cyprus Mail
`;
};
