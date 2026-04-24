import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.110, totalSince: 19.579 }, storage: { current: { amount: 41.987, percentage: 36.5 }, lastYear: { amount: 21.974, percentage: 19.1 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.036, totalSince: 3.362 }, storage: { current: { amount: 3.612, percentage: 21.1 }, lastYear: { amount: 4.492, percentage: 26.3 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.008, totalSince: 1.523 }, storage: { current: { amount: 2.451, percentage: 17.7 }, lastYear: { amount: 3.261, percentage: 23.5 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.021, totalSince: 3.176 }, storage: { current: { amount: 5.785, percentage: 37.3 }, lastYear: { amount: 5.785, percentage: 37.3 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.040, totalSince: 7.559 }, storage: { current: { amount: 7.175, percentage: 53.1 }, lastYear: { amount: 3.368, percentage: 24.9 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.106, totalSince: 17.232 }, storage: { current: { amount: 1.52, percentage: 35.3 }, lastYear: { amount: 2.636, percentage: 61.3 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.019, totalSince: 1.341 }, storage: { current: { amount: 1.966, percentage: 57.8 }, lastYear: { amount: 1.27, percentage: 37.4 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.149, percentage: 2.2 }, lastYear: { amount: 1.061, percentage: 15.6 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.039, totalSince: 17.977 }, storage: { current: { amount: 20.405, percentage: 39.0 }, lastYear: { amount: 12.482, percentage: 23.8 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.026, totalSince: 8.351 }, storage: { current: { amount: 8.377, percentage: 48.8 }, lastYear: { amount: 4.309, percentage: 25.1 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.001, totalSince: 0.920 }, storage: { current: { amount: 1.974, percentage: 90.6 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.031, totalSince: 8.814 }, storage: { current: { amount: 10.908, percentage: 45.5 }, lastYear: { amount: 5.72, percentage: 23.8 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.385, percentage: 38.9 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.378, percentage: 44.0 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.243 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.177, percentage: 59.4 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.008, totalSince: 1.651 }, storage: { current: { amount: 1.652, percentage: 97.8 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 1.417 }, storage: { current: { amount: 1.429, percentage: 99.9 }, lastYear: { amount: 0.314, percentage: 22.0 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.315, percentage: 86.8 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.001, totalSince: 2.59 }, storage: { current: { amount: 2.8, percentage: 100.0 }, lastYear: { amount: 1.002, percentage: 35.8 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.069 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.46, percentage: 73.0 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.893, percentage: 65.0 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through April 24, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:20.76, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:95.243 },
];

export const getReportDate = (): string => "24-APR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 16.74 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 36.5% (42.0 MCM) — new season high, 17.4pp above last year\'s 19.1%. Arminou→Kouris transfer: 16.74 MCM since October.',
      el: 'Ο Κούρης στο 36.5% (42.0 ΕΚΜ) — νέο μέγιστο σεζόν, 17.4μ.π. πάνω από πέρυσι (19.1%). Μεταφορά Αρμίνου→Κούρης: 16.74 ΕΚΜ.',
      ru: 'Курис на 36.5% (42.0 МКМ) — новый сезонный максимум, +17.4пп выше прошлогодних 19.1%. Перекачка Арминоу→Курис: 16.74 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 21.1% (3.61 MCM) — still 5.2pp below last year\'s 26.3%. Steady inflow with 3.36 MCM received this season.',
      el: 'Ο Καλαβασός στο 21.1% (3.61 ΕΚΜ) — 5.2μ.π. κάτω από πέρυσι (26.3%). Σταθερή εισροή, 3.36 ΕΚΜ εφέτος.',
      ru: 'Калавасос на 21.1% (3.61 МКМ) — на 5.2пп ниже прошлогодних 26.3%. Стабильный приток, 3.36 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 17.7% (2.45 MCM) — 5.8pp below last year\'s 23.5%. Seasonal inflow 1.52 MCM — slow but steady recovery.',
      el: 'Η Λεύκαρα στο 17.7% (2.45 ΕΚΜ) — 5.8μ.π. κάτω από πέρυσι (23.5%). Εισροή σεζόν 1.52 ΕΚΜ — αργή αλλά σταθερή ανάκαμψη.',
      ru: 'Лефкара на 17.7% (2.45 МКМ) — на 5.8пп ниже прошлогодних 23.5%. Приток 1.52 МКМ — медленное, но стабильное восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 37.3% (5.79 MCM) — exactly matching last year\'s level. Seasonal inflow 3.18 MCM, stable over the past week.',
      el: 'Ο Διπόταμος στο 37.3% (5.79 ΕΚΜ) — ισόβαθμος με πέρυσι. Εισροή 3.18 ΕΚΜ, σταθερός την τελευταία εβδομάδα.',
      ru: 'Дипотамос на 37.3% (5.79 МКМ) — точно на уровне прошлого года. Приток 3.18 МКМ — стабильное положение.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 53.1% (7.18 MCM) — new season high, fifth day above 50%. 28.2pp above last year\'s 24.9%.',
      el: 'Η Γερμασόγεια στο 53.1% (7.18 ΕΚΜ) — νέο μέγιστο, πέμπτη ημέρα πάνω από 50%. 28.2μ.π. πάνω από πέρυσι (24.9%).',
      ru: 'Гермасойя на 53.1% (7.18 МКМ) — новый максимум, пятый день выше 50%. +28.2пп выше прошлогодних 24.9%.',
    },
    'Arminou': {
      en: 'Arminou at 35.3% (1.52 MCM) — 16.74 MCM pumped to Kouris since October; transfer continues. 26.0pp below last year.',
      el: 'Ο Αρμίνου στο 35.3% (1.52 ΕΚΜ) — 16.74 ΕΚΜ στον Κούρη από τον Οκτώβριο. 26.0μ.π. κάτω από πέρυσι.',
      ru: 'Арминоу на 35.3% (1.52 МКМ) — 16.74 МКМ перекачано в Курис с октября. На 26.0пп ниже прошлогодних.',
    },
    'Polemidia': {
      en: 'Polemidia at 57.8% (1.97 MCM) — new season high, 20.4pp above last year\'s 37.4%. Steady climb continues.',
      el: 'Η Πολεμίδια στο 57.8% (1.97 ΕΚΜ) — νέο μέγιστο σεζόν, 20.4μ.π. πάνω από πέρυσι (37.4%). Σταθερή άνοδος.',
      ru: 'Полемидия на 57.8% (1.97 МКМ) — новый сезонный максимум, +20.4пп выше прошлогодних 37.4%. Устойчивый рост.',
    },
    'Achna': {
      en: 'Achna critically low at 2.2% (0.15 MCM), zero inflow all season. Far below last year\'s 15.6%. No recovery in sight.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.2% (0.15 ΕΚΜ), χωρίς εισροή. Πολύ κάτω από πέρυσι (15.6%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.2% (0.15 МКМ), без притока за сезон. Далеко ниже прошлогодних 15.6%. Без перспектив.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 39.0% (20.4 MCM) — new season high, 15.2pp above last year\'s 23.8%. Inflow 17.98 MCM this season.',
      el: 'Ο Ασπρόκρεμμος στο 39.0% (20.4 ΕΚΜ) — νέο μέγιστο, 15.2μ.π. πάνω από πέρυσι (23.8%). Εισροή 17.98 ΕΚΜ.',
      ru: 'Аспрокреммос на 39.0% (20.4 МКМ) — новый максимум, +15.2пп выше прошлого года (23.8%). Приток 17.98 МКМ за сезон.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 48.8% (8.38 MCM) — new season high, 23.7pp above last year\'s 25.1%. One good rain from the 50% milestone.',
      el: 'Ο Καννάβιου στο 48.8% (8.38 ΕΚΜ) — νέο μέγιστο, 23.7μ.π. πάνω από πέρυσι (25.1%). Μια καλή βροχή από το 50%.',
      ru: 'Каннавиу на 48.8% (8.38 МКМ) — новый максимум, +23.7пп выше прошлогодних 25.1%. Одного дождя до отметки 50%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 90.6% (1.97 MCM) — holding above 90%, new season high. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 90.6% (1.97 ΕΚΜ) — πάνω από 90%, νέο μέγιστο. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 90.6% (1.97 МКМ) — выше 90%, новый максимум. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 45.5% (10.9 MCM) — new season high, 21.7pp above last year\'s 23.8%. Inflow 8.81 MCM since October.',
      el: 'Ο Εύρετου στο 45.5% (10.9 ΕΚΜ) — νέο μέγιστο σεζόν, 21.7μ.π. πάνω από πέρυσι (23.8%). Εισροή 8.81 ΕΚΜ.',
      ru: 'Эвретоу на 45.5% (10.9 МКМ) — новый сезонный максимум, +21.7пп выше прошлогодних 23.8%. Приток 8.81 МКМ.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), continuously overflowing. Up from 38.9% last year — more than doubled year over year.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), συνεχής υπερχείλιση. Από 38.9% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), продолжает переливаться. Год назад 38.9% — более чем удвоение.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), continuously overflowing. Up from 44.0% last year — more than doubled year over year.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), συνεχής υπερχείλιση. Αύξηση από 44.0% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), продолжает переливаться. Рост с 44.0% год назад — более чем удвоение.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 100% (0.30 MCM), overflowing since late March. Up from 59.4% last year — Chrysochou region fully topped up.',
      el: 'Η Αγία Μαρίνα στο 100% (0.30 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Από 59.4% πέρυσι — Χρυσοχούς πλήρης.',
      ru: 'Агия Марина на 100% (0.30 МКМ), переливается с конца марта. Рост с 59.4% год назад — Хрисоху полностью заполнена.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 97.8% (1.65 MCM) — new season high, overflow imminent. Was 2.8% last year — 34× year-over-year recovery.',
      el: 'Τα Βυζακιά στο 97.8% (1.65 ΕΚΜ) — νέο μέγιστο σεζόν, επικείμενη υπερχείλιση. Από 2.8% πέρυσι — ανάκαμψη 34×.',
      ru: 'Визакия на 97.8% (1.65 МКМ) — новый сезонный максимум, переполнение неизбежно. Год назад 2.8% — восстановление в 34×.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 99.9% (1.43 MCM) — effectively at overflow capacity for weeks. Was 22.0% last year — 4.5× year-over-year recovery.',
      el: 'Ο Ξυλιάτος στο 99.9% (1.43 ΕΚΜ) — ουσιαστικά σε υπερχείλιση εδώ και εβδομάδες. Από 22.0% πέρυσι — 4.5× ανάκαμψη.',
      ru: 'Ксилиатос на 99.9% (1.43 МКМ) — фактически на уровне перелива уже несколько недель. Год назад 22.0% — восстановление в 4.5×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 86.8% last year, at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 86.8% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 86.8% год назад, полная мощность.',
    },
    'Tamassos': {
      en: 'Tamassos full at 100% (2.80 MCM) — overflowing since late March. Was 35.8% last year — 2.8× year-over-year recovery.',
      el: 'Ο Ταμασός γεμάτος στο 100% (2.80 ΕΚΜ) — υπερχείλιση από τέλη Μαρτίου. Από 35.8% πέρυσι — 2.8× ΕΤΕ.',
      ru: 'Тамассос заполнен на 100% (2.80 МКМ) — переливается с конца марта. Год назад 35.8% — в 2.8× год к году.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 73.0% last year — 1.4× year-over-year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 73.0% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 73.0% год назад — 1.4× год к году.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), overflowing since mid-March. Up from 65.0% last year — 1.5× year-over-year improvement.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 65.0% πέρυσι — 1.5× βελτίωση.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), переливается с середины марта. Рост с 65.0% год назад — улучшение в 1.5×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (16 Απριλίου — 24 Απριλίου 2026)

Συνολική αποθήκευση **38.5%** (111.9 ΕΚΜ), άνοδος από 37.0% (107.7 ΕΚΜ) στις 16/4 — **+4.2 ΕΚΜ σε 8 ημέρες**. Νέο μέγιστο σεζόν. **15.1μ.π. πάνω από πέρυσι** (23.4%). Εισροή σεζόν 25/26: **95.2 ΕΚΜ** — ο Απρίλιος 2026 με 20.76 ΕΚΜ παραμένει ο **2ος καλύτερος Απρίλιος** στα αρχεία. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 16.74 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Βυζακιά](/el/dam/vyzakia/) 97.8%** (+0.9μ.π.) — νέο μέγιστο σεζόν, υπερχείλιση επικείμενη, 34× πέρυσι (2.8%)
- **[Πολεμίδια](/el/dam/polemidia/) 57.8%** (+0.5μ.π.) — νέο μέγιστο σεζόν, 20.4μ.π. πάνω από πέρυσι
- **[Γερμασόγεια](/el/dam/germasoyeia/) 53.1%** (+0.3μ.π.) — νέο μέγιστο, 5η ημέρα πάνω από 50%
- [Κούρης](/el/dam/kouris/) 36.5% (42.0 ΕΚΜ, +4.5 ΕΚΜ από 16/4) — νέο μέγιστο, 17.4μ.π. πάνω από πέρυσι
- [Ασπρόκρεμμος](/el/dam/asprokremmos/) 39.0% (+1.8μ.π. από 16/4) — νέο μέγιστο
- 8 φράγματα στο 100% — [Αχνά](/el/dam/achna/) εξακολουθεί στο 2.2% χωρίς εισροή

**Στα μέσα:**
- [Σε επίπεδα εξαιρετικής πολυομβρίας πέρασε ο Απρίλιος 2026](https://kitasweather.com/news/fragmata-vroxoptosi/se-epipeda-ekseritikis-poliomvrias-perase-o-aprilios-kseperase-to-170-tis-ekato-i-mesi-vroxoptosi-apriliou/) — KitasWeather
- [Εισροές νερού άνω των 2 ΕΚΜ το τελευταίο τριήμερο — πλησιάζει 40%](https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-ta-2-ekm-oi-eisroes-nerou-to-telefteo-triimero-plisiazei-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
- [Ζήτημα διαχείρισης νερού στην Κύπρο — πως να διαχειριστούμε αποτελεσματικά](https://cyprus-mail.com/2026/04/22/water-scarcity-in-cyprus-how-can-we-effectively-manage-the-crisis) — Cyprus Mail
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (16 апреля — 24 апреля 2026)

Общий запас **38.5%** (111.9 МКМ), рост с 37.0% (107.7 МКМ) на 16/4 — **+4.2 МКМ за 8 дней**. Новый сезонный максимум. Запасы **на 15.1пп выше прошлогодних** (23.4%). Приток сезона 25/26: **95.2 МКМ** — апрель 2026 с 20.76 МКМ по-прежнему остаётся **2-м лучшим апрелем в истории**. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 16.74 МКМ.

**Основные изменения:**
- **[Визакия](/ru/dam/vyzakia/) 97.8%** (+0.9пп) — новый максимум, переполнение неизбежно, 34× прошлогодних 2.8%
- **[Полемидия](/ru/dam/polemidia/) 57.8%** (+0.5пп) — новый сезонный максимум, +20.4пп выше прошлого года
- **[Гермасойя](/ru/dam/germasoyeia/) 53.1%** (+0.3пп) — новый максимум, пятый день выше 50%
- [Курис](/ru/dam/kouris/) 36.5% (42.0 МКМ, +4.5 МКМ с 16/4) — новый максимум, +17.4пп выше прошлого года
- [Аспрокреммос](/ru/dam/asprokremmos/) 39.0% (+1.8пп с 16/4) — новый максимум
- 8 дамб переполнены; [Ахна](/ru/dam/achna/) по-прежнему 2.2% — без притока за сезон

**В СМИ:**
- [Апрель 2026 прошёл при исключительно высоком уровне осадков — более 170% от нормы](https://kitasweather.com/news/fragmata-vroxoptosi/se-epipeda-ekseritikis-poliomvrias-perase-o-aprilios-kseperase-to-170-tis-ekato-i-mesi-vroxoptosi-apriliou/) — KitasWeather
- [За зиму водохранилища Кипра выросли почти вчетверо: с 9,6% до 38%](https://lenta.cy/za-zimu-vodohranilishha-kipra-vyrosli-pochti-vchetvero-s-9-6-do-38/) — Lenta.cy
- [Управление водными ресурсами Кипра: как справиться с кризисом](https://cyprus-mail.com/2026/04/22/water-scarcity-in-cyprus-how-can-we-effectively-manage-the-crisis) — Cyprus Mail
`;
  }
  return `
### Recent Changes (April 16 — April 24, 2026)

Total storage at **38.5%** (111.9 MCM), up from 37.0% (107.7 MCM) on Apr 16 — **+4.2 MCM in 8 days**. New season high. **15.1pp above last year** (23.4%). Season total: **95.2 MCM** — April 2026 at 20.76 MCM remains the **2nd highest April on record**. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 16.74 MCM.

**Notable movements:**
- **[Vyzakia](/dam/vyzakia/) at 97.8%** (+0.9pp) — new season high, overflow imminent, 34× last year's 2.8%
- **[Polemidia](/dam/polemidia/) 57.8%** (+0.5pp) — new season high, 20.4pp above last year
- **[Germasoyeia](/dam/germasoyeia/) 53.1%** (+0.3pp) — new season high, fifth day above 50%
- [Kouris](/dam/kouris/) 36.5% (42.0 MCM, +4.5 MCM since Apr 16) — new season high, 17.4pp above last year
- [Asprokremmos](/dam/asprokremmos/) 39.0% (+1.8pp since Apr 16) — new season high
- 8 dams overflowing at 100%; [Achna](/dam/achna/) still 2.2% — zero inflow all season

**In the media:**
- [April 2026 reaches exceptional rainfall levels — over 170% of monthly average](https://kitasweather.com/news/fragmata-vroxoptosi/se-epipeda-ekseritikis-poliomvrias-perase-o-aprilios-kseperase-to-170-tis-ekato-i-mesi-vroxoptosi-apriliou/) — KitasWeather
- [Dam capacity reaches 38%, up from last year](https://cyprus-mail.com/2026/04/20/dam-capacity-reaches-38-up-from-last-year) — Cyprus Mail
- [Water scarcity in Cyprus: how can we effectively manage the crisis?](https://cyprus-mail.com/2026/04/22/water-scarcity-in-cyprus-how-can-we-effectively-manage-the-crisis) — Cyprus Mail
`;
};
