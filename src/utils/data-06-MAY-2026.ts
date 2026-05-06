import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.315, totalSince: 21.516 }, storage: { current: { amount: 43.649, percentage: 38.0 }, lastYear: { amount: 21.669, percentage: 18.8 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.013, totalSince: 3.655 }, storage: { current: { amount: 3.872, percentage: 22.6 }, lastYear: { amount: 4.4, percentage: 25.7 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.004, totalSince: 1.615 }, storage: { current: { amount: 2.525, percentage: 18.2 }, lastYear: { amount: 2.971, percentage: 21.5 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.014, totalSince: 3.39 }, storage: { current: { amount: 5.915, percentage: 38.2 }, lastYear: { amount: 5.847, percentage: 37.7 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.033, totalSince: 8.106 }, storage: { current: { amount: 7.689, percentage: 57.0 }, lastYear: { amount: 3.24, percentage: 24.0 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.24, totalSince: 18.705 }, storage: { current: { amount: 2.685, percentage: 62.4 }, lastYear: { amount: 2.713, percentage: 63.1 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.017, totalSince: 1.462 }, storage: { current: { amount: 2.08, percentage: 61.2 }, lastYear: { amount: 1.275, percentage: 37.5 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.149, percentage: 2.2 }, lastYear: { amount: 0.913, percentage: 13.4 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.166, totalSince: 18.848 }, storage: { current: { amount: 21.142, percentage: 40.4 }, lastYear: { amount: 12.168, percentage: 23.2 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.08, totalSince: 8.795 }, storage: { current: { amount: 8.683, percentage: 50.6 }, lastYear: { amount: 4.196, percentage: 24.4 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.004, totalSince: 0.939 }, storage: { current: { amount: 1.962, percentage: 90.0 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.1, totalSince: 9.382 }, storage: { current: { amount: 11.444, percentage: 47.7 }, lastYear: { amount: 5.637, percentage: 23.5 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.373, percentage: 37.7 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.371, percentage: 43.1 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.247 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.176, percentage: 59.1 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.0, totalSince: 1.689 }, storage: { current: { amount: 1.69, percentage: 100.0 }, lastYear: { amount: 0.044, percentage: 2.6 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 1.419 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.304, percentage: 21.3 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.297, percentage: 81.8 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.001, totalSince: 2.6 }, storage: { current: { amount: 2.8, percentage: 100.0 }, lastYear: { amount: 0.985, percentage: 35.2 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.079 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.45, percentage: 72.5 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.84, percentage: 63.8 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through May 6, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:3.774, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:101.866 },
];

export const getReportDate = (): string => "06-MAY-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 17.02 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 38.0% (43.6 MCM) — new season high, 19.2pp above last year\'s 18.8%. Arminou→Kouris transfer: 17.02 MCM since October.',
      el: 'Ο Κούρης στο 38.0% (43.6 ΕΚΜ) — νέο μέγιστο σεζόν, 19.2μ.π. πάνω από πέρυσι (18.8%). Μεταφορά Αρμίνου→Κούρης: 17.02 ΕΚΜ.',
      ru: 'Курис на 38.0% (43.6 МКМ) — новый сезонный максимум, +19.2пп выше прошлогодних 18.8%. Перекачка Арминоу→Курис: 17.02 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 22.6% (3.87 MCM) — 3.1pp below last year\'s 25.7%. Seasonal inflow 3.66 MCM, gradual recovery continuing.',
      el: 'Ο Καλαβασός στο 22.6% (3.87 ΕΚΜ) — 3.1μ.π. κάτω από πέρυσι (25.7%). Εισροή σεζόν 3.66 ΕΚΜ, σταδιακή ανάκαμψη.',
      ru: 'Калавасос на 22.6% (3.87 МКМ) — на 3.1пп ниже прошлогодних 25.7%. Приток 3.66 МКМ за сезон, постепенное восстановление.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.2% (2.53 MCM) — 3.3pp below last year\'s 21.5%. Seasonal inflow 1.62 MCM, slow recovery continues.',
      el: 'Η Λεύκαρα στο 18.2% (2.53 ΕΚΜ) — 3.3μ.π. κάτω από πέρυσι (21.5%). Εισροή σεζόν 1.62 ΕΚΜ — αργή ανάκαμψη.',
      ru: 'Лефкара на 18.2% (2.53 МКМ) — на 3.3пп ниже прошлогодних 21.5%. Приток 1.62 МКМ за сезон — медленное восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 38.2% (5.92 MCM) — slightly above last year\'s 37.7%. Holding steady at 3.39 MCM seasonal inflow.',
      el: 'Ο Διπόταμος στο 38.2% (5.92 ΕΚΜ) — ελαφρά πάνω από πέρυσι (37.7%). Σταθερός με 3.39 ΕΚΜ εισροή σεζόν.',
      ru: 'Дипотамос на 38.2% (5.92 МКМ) — незначительно выше прошлогодних 37.7%. Стабильное положение, приток 3.39 МКМ за сезон.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 57.0% (7.69 MCM) — new season high, 33pp above last year\'s 24.0%. Was at 14% in mid-March — a 43pp gain in 7 weeks.',
      el: 'Η Γερμασόγεια στο 57.0% (7.69 ΕΚΜ) — νέο μέγιστο σεζόν, 33μ.π. πάνω από πέρυσι (24.0%). Τον Μάρτιο ήταν στο 14% — άνοδος 43μ.π. σε 7 εβδομάδες.',
      ru: 'Гермасойя на 57.0% (7.69 МКМ) — новый максимум, +33пп выше прошлогодних 24.0%. В марте была 14% — прирост в 43пп за 7 недель.',
    },
    'Arminou': {
      en: 'Arminou at 62.4% (2.69 MCM) — just 0.7pp below last year despite 17.02 MCM pumped to Kouris. Seasonal inflow 18.7 MCM = 4.3× its own capacity.',
      el: 'Ο Αρμίνου στο 62.4% (2.69 ΕΚΜ) — μόλις 0.7μ.π. κάτω από πέρυσι, παρά τη μεταφορά 17.02 ΕΚΜ στον Κούρη. Εισροή 18.7 ΕΚΜ = 4.3× η χωρητικότητά του.',
      ru: 'Арминоу на 62.4% (2.69 МКМ) — лишь на 0.7пп ниже прошлого года, несмотря на 17.02 МКМ перекачанных в Курис. Приток 18.7 МКМ = 4.3× его ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 61.2% (2.08 MCM) — new season high, 23.7pp above last year\'s 37.5%. Consistent gains throughout spring.',
      el: 'Η Πολεμίδια στο 61.2% (2.08 ΕΚΜ) — νέο μέγιστο σεζόν, 23.7μ.π. πάνω από πέρυσι (37.5%). Συνεχής άνοδος εφέτος.',
      ru: 'Полемидия на 61.2% (2.08 МКМ) — новый сезонный максимум, +23.7пп выше прошлогодних 37.5%. Постоянный рост весной.',
    },
    'Achna': {
      en: 'Achna critically low at 2.2% (0.15 MCM), zero inflow all season. Far below last year\'s 13.4%. No recovery expected.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.2% (0.15 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (13.4%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.2% (0.15 МКМ), без притока за сезон. Далеко ниже прошлогодних 13.4%. Восстановление не ожидается.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 40.4% (21.1 MCM) — new season high, 17.2pp above last year\'s 23.2%. Seasonal inflow 18.8 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 40.4% (21.1 ΕΚΜ) — νέο μέγιστο σεζόν, 17.2μ.π. πάνω από πέρυσι (23.2%). Εισροή 18.8 ΕΚΜ.',
      ru: 'Аспрокреммос на 40.4% (21.1 МКМ) — новый максимум, +17.2пп выше прошлогодних 23.2%. Приток 18.8 МКМ за сезон.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 50.6% (8.68 MCM) — above 50% milestone; 26.2pp above last year\'s 24.4%. Seasonal inflow 8.80 MCM.',
      el: 'Ο Καννάβιου στο 50.6% (8.68 ΕΚΜ) — πάνω από 50%; 26.2μ.π. πάνω από πέρυσι (24.4%). Εισροή σεζόν 8.80 ΕΚΜ.',
      ru: 'Каннавиу на 50.6% (8.68 МКМ) — выше отметки 50%; +26.2пп выше прошлогодних 24.4%. Приток 8.80 МКМ за сезон.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 90.0% (1.96 MCM) — holding near full capacity. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 90.0% (1.96 ΕΚΜ) — σχεδόν πλήρης. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 90.0% (1.96 МКМ) — близко к заполнению. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 47.7% (11.4 MCM) — new season high, 24.2pp above last year\'s 23.5%. Seasonal inflow 9.38 MCM.',
      el: 'Ο Εύρετου στο 47.7% (11.4 ΕΚΜ) — νέο μέγιστο σεζόν, 24.2μ.π. πάνω από πέρυσι (23.5%). Εισροή 9.38 ΕΚΜ.',
      ru: 'Эвретоу на 47.7% (11.4 МКМ) — новый сезонный максимум, +24.2пп выше прошлогодних 23.5%. Приток 9.38 МКМ.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), continuously overflowing. Up from 37.7% last year — more than doubled year over year.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), συνεχής υπερχείλιση. Από 37.7% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), продолжает переливаться. Год назад 37.7% — более чем удвоение.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), continuously overflowing. Up from 43.1% last year — more than doubled year over year.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), συνεχής υπερχείλιση. Αύξηση από 43.1% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), продолжает переливаться. Рост с 43.1% год назад — более чем удвоение.',
    },
    'Agia Marina': {
      en: 'Agia Marina full at 100% (0.30 MCM). Up from 59.1% last year; all four Chrysochou dams remain at full capacity.',
      el: 'Η Αγία Μαρίνα γεμάτη στο 100% (0.30 ΕΚΜ). Από 59.1% πέρυσι — ο Χρυσοχούς εξακολουθεί να είναι πλήρης.',
      ru: 'Агия Марина заполнена на 100% (0.30 МКМ). Рост с 59.1% год назад; все дамбы Хрисоху по-прежнему полны.',
    },
    'Vyzakia': {
      en: 'Vyzakia full at 100% (1.69 MCM) — filled Apr 27, maintaining capacity. Was 2.6% last year — 38× year-over-year recovery.',
      el: 'Τα Βυζακιά γεμάτα στο 100% (1.69 ΕΚΜ) — γέμισαν 27/4, στη χωρητικότητα. Από 2.6% πέρυσι — 38× ανάκαμψη.',
      ru: 'Визакия заполнена на 100% (1.69 МКМ) — заполнена 27 апреля. Год назад 2.6% — восстановление в 38×.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM) — filled Apr 28, holding at capacity. Was 21.3% last year — 4.7× year-over-year recovery.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ) — γέμισε 28/4, παραμένει στη χωρητικότητα. Από 21.3% πέρυσι — 4.7× ανάκαμψη.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ) — заполнен 28 апреля. Год назад 21.3% — восстановление в 4.7×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 81.8% last year, at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 81.8% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 81.8% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos full at 100% (2.80 MCM) — overflowing since late March. Was 35.2% last year — 2.8× year-over-year recovery.',
      el: 'Ο Ταμασός γεμάτος στο 100% (2.80 ΕΚΜ) — υπερχείλιση από τέλη Μαρτίου. Από 35.2% πέρυσι — 2.8× ΕΤΕ.',
      ru: 'Тамассос заполнен на 100% (2.80 МКМ) — переливается с конца марта. Год назад 35.2% — в 2.8× год к году.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 72.5% last year — 1.4× year-over-year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 72.5% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 72.5% год назад — 1.4× год к году.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), overflowing since mid-March. Up from 63.8% last year — 1.6× year-over-year improvement.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 63.8% πέρυσι — 1.6× βελτίωση.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), переливается с середины марта. Рост с 63.8% год назад — улучшение в 1.6×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (27 Απριλίου — 6 Μαΐου 2026)

Συνολική αποθήκευση **40.4%** (117.4 ΕΚΜ), άνοδος από 38.8% (113.0 ΕΚΜ) στις 27/4 — **+1.6μ.π., +4.4 ΕΚΜ σε 9 ημέρες**. Νέο μέγιστο σεζόν. **17.5μ.π. πάνω από πέρυσι** (22.9%). Εισροή σεζόν 25/26: **101.9 ΕΚΜ**. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 17.02 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Αρμίνου](/el/dam/arminou/) 62.4%** (+23.4μ.π. σε 9 ημέρες) — ανεβαίνει συνεχώς παρά τη μεταφορά 17 ΕΚΜ στον [Κούρη](/el/dam/kouris/). Εισροή σεζόν: 18.7 ΕΚΜ = 4.3× η χωρητικότητά του
- [Γερμασόγεια](/el/dam/germasoyeia/) **57.0%** — νέο μέγιστο, 33μ.π. πάνω από πέρυσι
- [Πολεμίδια](/el/dam/polemidia/) **61.2%** — νέο μέγιστο σεζόν, 23.7μ.π. πάνω από πέρυσι
- [Ασπρόκρεμμος](/el/dam/asprokremmos/) **40.4%** — νέο μέγιστο, 17.2μ.π. πάνω από πέρυσι
- [Εύρετου](/el/dam/evretou/) **47.7%** — νέο μέγιστο, 24.2μ.π. πάνω από πέρυσι
- 9 φράγματα στο 100%· [Αχνά](/el/dam/achna/) 2.2% — μηδέν εισροή όλη τη σεζόν

**Στα μέσα:**
- [Ρεκόρ 24ωρης εισροής για Μάιο — Ξεπέρασε το 40% η πληρότητα φραγμάτων](https://kitasweather.com/news/fragmata-vroxoptosi/rekor-24oris-sinolikis-eisrois-nerou-sta-fragmata-gia-mina-maio-kseperase-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
- [Ο Απρίλης, ο δεύτερος καλύτερος της δεκαετίας για τα φράγματα](https://www.alphanews.live/cyprus/o-aprilis-o-defteros-kalyteros-tis-dekaetias-gia-ta-fragmata/) — AlphaNews
- [Τα φράγματα στο 39.6% — 115.2 ΕΚΜ](https://cyprus-mail.com/2026/05/04/dams-at-39-6-per-cent-capacity) — Cyprus Mail
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (27 апреля — 6 мая 2026)

Общий запас **40.4%** (117.4 МКМ), рост с 38.8% (113.0 МКМ) на 27/4 — **+1.6пп, +4.4 МКМ за 9 дней**. Новый сезонный максимум. Запасы **на 17.5пп выше прошлогодних** (22.9%). Приток сезона 25/26: **101.9 МКМ**. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 17.02 МКМ.

**Основные изменения:**
- **[Арминоу](/ru/dam/arminou/) 62.4%** (+23.4пп за 9 дней) — продолжает расти несмотря на 17 МКМ перекачанных в [Курис](/ru/dam/kouris/). Приток за сезон: 18.7 МКМ = 4.3× его ёмкости
- [Гермасойя](/ru/dam/germasoyeia/) **57.0%** — новый максимум, +33пп выше прошлого года
- [Полемидия](/ru/dam/polemidia/) **61.2%** — новый максимум сезона, +23.7пп выше прошлого года
- [Аспрокреммос](/ru/dam/asprokremmos/) **40.4%** — новый максимум, +17.2пп выше прошлого года
- [Эвретоу](/ru/dam/evretou/) **47.7%** — новый максимум, +24.2пп выше прошлого года
- 9 дамб на 100%; [Ахна](/ru/dam/achna/) 2.2% — без притока за весь сезон

**В СМИ:**
- [Рекордный суточный приток для мая — наполненность дамб превысила 40%](https://kitasweather.com/news/fragmata-vroxoptosi/rekor-24oris-sinolikis-eisrois-nerou-sta-fragmata-gia-mina-maio-kseperase-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
- [Апрель — второй лучший месяц десятилетия для дамб](https://www.alphanews.live/cyprus/o-aprilis-o-defteros-kalyteros-tis-dekaetias-gia-ta-fragmata/) — AlphaNews
- [Дамбы на 39.6% — 115.2 МКМ воды](https://cyprus-mail.com/2026/05/04/dams-at-39-6-per-cent-capacity) — Cyprus Mail
`;
  }
  return `
### Recent Changes (April 27 — May 6, 2026)

Total storage at **40.4%** (117.4 MCM), up from 38.8% (113.0 MCM) on Apr 27 — **+1.6pp, +4.4 MCM in 9 days**. New season high. **17.5pp above last year** (22.9%). Season total: **101.9 MCM**. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 17.02 MCM.

**Notable movements:**
- **[Arminou](/dam/arminou/) 62.4%** (+23.4pp in 9 days) — keeps rising despite 17 MCM pumped to [Kouris](/dam/kouris/). Season inflow: 18.7 MCM = 4.3× its own capacity
- [Germasoyeia](/dam/germasoyeia/) **57.0%** — new season high, 33pp above last year
- [Polemidia](/dam/polemidia/) **61.2%** — new season high, 23.7pp above last year
- [Asprokremmos](/dam/asprokremmos/) **40.4%** — new season high, 17.2pp above last year
- [Evretou](/dam/evretou/) **47.7%** — new season high, 24.2pp above last year
- 9 dams at 100%; [Achna](/dam/achna/) 2.2% — zero inflow all season

**In the media:**
- [Record 24h inflow for May — dam fullness crosses 40%](https://kitasweather.com/news/fragmata-vroxoptosi/rekor-24oris-sinolikis-eisrois-nerou-sta-fragmata-gia-mina-maio-kseperase-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
- [April: second best month of the decade for Cyprus dams](https://www.alphanews.live/cyprus/o-aprilis-o-defteros-kalyteros-tis-dekaetias-gia-ta-fragmata/) — AlphaNews
- [Dams at 39.6 per cent capacity](https://cyprus-mail.com/2026/05/04/dams-at-39-6-per-cent-capacity) — Cyprus Mail
`;
};
