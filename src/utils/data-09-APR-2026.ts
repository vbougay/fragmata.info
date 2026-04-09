import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for April 9, 2026 (parsed from 09-APR-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.257, totalSince: 17.079 }, storage: { current: { amount: 37.505, percentage: 32.6 }, lastYear: { amount: 22.339, percentage: 19.4 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.073, totalSince: 2.508 }, storage: { current: { amount: 2.800, percentage: 16.4 }, lastYear: { amount: 4.639, percentage: 27.1 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.026, totalSince: 1.289 }, storage: { current: { amount: 2.241, percentage: 16.2 }, lastYear: { amount: 3.637, percentage: 26.3 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.083, totalSince: 2.571 }, storage: { current: { amount: 5.126, percentage: 33.1 }, lastYear: { amount: 5.705, percentage: 36.8 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.138, totalSince: 6.421 }, storage: { current: { amount: 6.087, percentage: 45.1 }, lastYear: { amount: 3.497, percentage: 25.9 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.231, totalSince: 15.248 }, storage: { current: { amount: 2.066, percentage: 48.0 }, lastYear: { amount: 2.583, percentage: 60.1 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.012, totalSince: 1.211 }, storage: { current: { amount: 1.846, percentage: 54.3 }, lastYear: { amount: 1.309, percentage: 38.5 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.147, percentage: 2.2 }, lastYear: { amount: 1.228, percentage: 18.1 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.132, totalSince: 16.682 }, storage: { current: { amount: 19.275, percentage: 36.8 }, lastYear: { amount: 12.913, percentage: 24.7 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.048, totalSince: 7.864 }, storage: { current: { amount: 8.049, percentage: 46.9 }, lastYear: { amount: 4.442, percentage: 25.9 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.004, totalSince: 0.882 }, storage: { current: { amount: 1.871, percentage: 85.8 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.079, totalSince: 8.146 }, storage: { current: { amount: 10.277, percentage: 42.8 }, lastYear: { amount: 5.848, percentage: 24.4 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.990, percentage: 100.0 }, lastYear: { amount: 0.386, percentage: 39.0 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.860, percentage: 100.0 }, lastYear: { amount: 0.376, percentage: 43.7 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.243 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.171, percentage: 57.4 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.034, totalSince: 1.350 }, storage: { current: { amount: 1.351, percentage: 79.9 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 1.413 }, storage: { current: { amount: 1.430, percentage: 100.0 }, lastYear: { amount: 0.326, percentage: 22.8 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.318, percentage: 87.6 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.001, totalSince: 2.455 }, storage: { current: { amount: 2.680, percentage: 95.7 }, lastYear: { amount: 1.032, percentage: 36.9 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.054 }, storage: { current: { amount: 2.000, percentage: 100.0 }, lastYear: { amount: 1.470, percentage: 73.5 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.959, percentage: 66.4 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data - updated with 25/26 data through April 9, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:10.522, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:85.005 },
];

export const getReportDate = (): string => "09-APR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 14.27 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 32.6% (37.5 MCM) — new season high, 13.2pp above last year\'s 19.4%. Arminou transfer: 14.27 MCM since October.',
      el: 'Ο Κούρης στο 32.6% (37.5 ΕΚΜ) — νέο μέγιστο σεζόν, 13.2μ.π. πάνω από πέρυσι (19.4%). Μεταφορά Αρμίνου: 14.27 ΕΚΜ.',
      ru: 'Курис на 32.6% (37.5 МКМ) — новый сезонный максимум, +13.2пп выше прошлогодних 19.4%. Перекачка Арминоу: 14.27 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 16.4% (2.80 MCM) — 10.7pp below last year\'s 27.1%. Steady but slow recovery with 2.51 MCM seasonal inflow.',
      el: 'Ο Καλαβασός στο 16.4% (2.80 ΕΚΜ) — 10.7μ.π. κάτω από πέρυσι (27.1%). Αργή ανάκαμψη, εισροή σεζόν 2.51 ΕΚΜ.',
      ru: 'Калавасос на 16.4% (2.80 МКМ) — на 10.7пп ниже прошлогодних 27.1%. Медленное восстановление, приток 2.51 МКМ.',
    },
    'Lefkara': {
      en: 'Lefkara at 16.2% (2.24 MCM) — 10.1pp below last year\'s 26.3%. Seasonal inflow 1.29 MCM — recovery remains sluggish.',
      el: 'Η Λεύκαρα στο 16.2% (2.24 ΕΚΜ) — 10.1μ.π. κάτω από πέρυσι (26.3%). Εισροή σεζόν 1.29 ΕΚΜ — αδύναμη ανάκαμψη.',
      ru: 'Лефкара на 16.2% (2.24 МКМ) — на 10.1пп ниже прошлогодних 26.3%. Приток 1.29 МКМ — медленное восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 33.1% (5.13 MCM), closing gap on last year\'s 36.8%. Seasonal inflow 2.57 MCM — steady recovery underway.',
      el: 'Ο Διπόταμος στο 33.1% (5.13 ΕΚΜ), πλησιάζει πέρυσι (36.8%). Εισροή σεζόν 2.57 ΕΚΜ, σταθερή ανάκαμψη.',
      ru: 'Дипотамос на 33.1% (5.13 МКМ), сокращает разрыв с прошлогодними 36.8%. Приток 2.57 МКМ — стабильное восстановление.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 45.1% (6.09 MCM) — new season high, 19.2pp above last year (25.9%). Season inflow 6.42 MCM and rising.',
      el: 'Η Γερμασόγεια στο 45.1% (6.09 ΕΚΜ) — νέο μέγιστο σεζόν, 19.2μ.π. πάνω από πέρυσι (25.9%). Εισροή 6.42 ΕΚΜ.',
      ru: 'Гермасойя на 45.1% (6.09 МКМ) — новый сезонный максимум, +19.2пп выше прошлого года (25.9%). Приток 6.42 МКМ.',
    },
    'Arminou': {
      en: 'Arminou at 48.0% (2.07 MCM) — new season high, rising sharply despite 14.27 MCM pumped to Kouris since October.',
      el: 'Ο Αρμίνου στο 48.0% (2.07 ΕΚΜ) — νέο μέγιστο σεζόν, ανεβαίνει παρά τη μεταφορά 14.27 ΕΚΜ στον [Κούρη](/el/dam/kouris/).',
      ru: 'Арминоу на 48.0% (2.07 МКМ) — новый сезонный максимум, растёт несмотря на перекачку 14.27 МКМ в Курис.',
    },
    'Polemidia': {
      en: 'Polemidia at 54.3% (1.85 MCM) — above 50%. Now 15.8pp above last year\'s 38.5%. New season high, steady rise continues.',
      el: 'Η Πολεμίδια στο 54.3% (1.85 ΕΚΜ) — πάνω από 50%. Τώρα 15.8μ.π. πάνω από πέρυσι (38.5%). Νέο μέγιστο σεζόν.',
      ru: 'Полемидия на 54.3% (1.85 МКМ) — выше 50%. Сейчас +15.8пп выше прошлогодних 38.5%. Новый сезонный максимум.',
    },
    'Achna': {
      en: 'Achna critically low at 2.2% (0.15 MCM), zero inflow all season. Far below last year\'s 18.1%. No recovery in sight.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.2% (0.15 ΕΚΜ), χωρίς εισροή. Πολύ κάτω από πέρυσι (18.1%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.2% (0.15 МКМ), без притока за сезон. Далеко ниже прошлогодних 18.1%. Без перспектив.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 36.8% (19.3 MCM) — new season high, 12.1pp above last year\'s 24.7%. Inflow 16.68 MCM since October.',
      el: 'Ο Ασπρόκρεμμος στο 36.8% (19.3 ΕΚΜ), νέο μέγιστο σεζόν — 12.1μ.π. πάνω από πέρυσι (24.7%). Εισροή 16.68 ΕΚΜ.',
      ru: 'Аспрокреммос на 36.8% (19.3 МКМ) — новый сезонный максимум, +12.1пп выше прошлого года (24.7%). Приток 16.68 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 46.9% (8.05 MCM) — new season high, 21.0pp above last year\'s 25.9%. Inflow 7.86 MCM since October.',
      el: 'Ο Καννάβιου στο 46.9% (8.05 ΕΚΜ), νέο μέγιστο σεζόν — 21.0μ.π. πάνω από πέρυσι (25.9%). Εισροή 7.86 ΕΚΜ.',
      ru: 'Каннавиу на 46.9% (8.05 МКМ) — новый сезонный максимум, +21.0пп выше прошлогодних 25.9%. Приток 7.86 МКМ.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 85.8% (1.87 MCM) — new season high, approaching 86%. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 85.8% (1.87 ΕΚΜ) — νέο μέγιστο σεζόν, πλησιάζει 86%. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 85.8% (1.87 МКМ) — новый сезонный максимум, приближается к 86%. Год назад 0% — исключительный рост.',
    },
    'Evretou': {
      en: 'Evretou at 42.8% (10.3 MCM), holding above 10 MCM. Now 18.4pp above last year\'s 24.4%. Inflow 8.15 MCM this season.',
      el: 'Ο Εύρετου στο 42.8% (10.3 ΕΚΜ), πάνω από 10 ΕΚΜ. Τώρα 18.4μ.π. πάνω από πέρυσι (24.4%). Εισροή 8.15 ΕΚΜ.',
      ru: 'Эвретоу на 42.8% (10.3 МКМ), удерживается выше 10 МКМ. Теперь +18.4пп выше прошлогодних 24.4%. Приток 8.15 МКМ.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), continuing to overflow. More than doubled year over year from 39.0% — Chrysochou thriving.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), συνεχής υπερχείλιση. Από 39.0% πέρυσι — πάνω από διπλασιασμός, Χρυσοχούς άριστα.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), продолжает переливаться. Год назад 39.0% — более чем удвоение, Хрисоху процветает.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), continuously overflowing. Up from 43.7% last year — more than doubled year over year.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), συνεχής υπερχείλιση. Αύξηση από 43.7% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), продолжает переливаться. Рост с 43.7% год назад — более чем удвоение.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 100% (0.30 MCM), overflowing since late March. Up from 57.4% last year — Chrysochou region fully topped up.',
      el: 'Η Αγία Μαρίνα στο 100% (0.30 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Από 57.4% πέρυσι — Χρυσοχούς πλήρης.',
      ru: 'Агия Марина на 100% (0.30 МКМ), переливается с конца марта. Рост с 57.4% год назад — Хрисоху полностью заполнена.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 79.9% (1.35 MCM) — approaching 80%, new season high. Was just 2.8% last year — 29× year-over-year recovery.',
      el: 'Τα Βυζακιά στο 79.9% (1.35 ΕΚΜ) — πλησιάζουν 80%, νέο μέγιστο σεζόν. Από 2.8% πέρυσι — 29× ανάκαμψη έτους.',
      ru: 'Визакия на 79.9% (1.35 МКМ) — приближается к 80%, новый сезонный максимум. Год назад 2.8% — восстановление в 29×.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM), overflowing since late March. Was 22.8% last year — 4.4× year-over-year recovery.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Από 22.8% πέρυσι — 4.4× ανάκαμψη.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ), переливается с конца марта. Был 22.8% год назад — восстановление в 4.4×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-March. Up from 87.6% last year, at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 87.6% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины марта. Рост с 87.6% год назад, полная мощность.',
    },
    'Tamassos': {
      en: 'Tamassos at 95.7% (2.68 MCM) — near capacity, slight dip from 98.9% after recharge use. Was 36.9% last year — 2.6× YoY.',
      el: 'Ο Ταμασός στο 95.7% (2.68 ΕΚΜ) — σχεδόν πλήρης, μικρή μείωση από 98.9% μετά χρήση ανατροφοδότησης. Από 36.9% πέρυσι.',
      ru: 'Тамассос на 95.7% (2.68 МКМ) — почти полный, небольшое снижение после пополнения запасов. Год назад 36.9% — в 2.6×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 73.5% last year — 1.4× year-over-year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 73.5% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 73.5% год назад — 1.4× год к году.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), overflowing since mid-March. Up from 66.4% last year — 1.5× year-over-year improvement.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 66.4% πέρυσι — 1.5× βελτίωση.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), переливается с середины марта. Рост с 66.4% год назад — улучшение в 1.5×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (2 Απριλίου — 9 Απριλίου 2026)

Συνολική αποθήκευση **35.3%** (102.6 ΕΚΜ), άνοδος από 32.2% (93.5 ΕΚΜ) στις 2/4 — **+9.1 ΕΚΜ σε 7 ημέρες**. Τα αποθέματα παραμένουν πάνω από **100 ΕΚΜ** για **3η συνεχόμενη μέρα**. Τώρα **11.3μ.π. πάνω από πέρυσι** (24.0%). Εισροή σεζόν 25/26: 85.0 ΕΚΜ — 4.6× τη χρονιά 24/25. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 14.27 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Βυζακιά](/el/dam/vyzakia/) 79.9%** (+2.0μ.π.) — μόλις 0.1μ.π. από το 80%, 29× πέρυσι (2.8%)
- **[Αρμίνου](/el/dam/arminou/) 48.0%** (+2.0μ.π.) — νέο μέγιστο σεζόν παρά τη μεταφορά 14.27 ΕΚΜ στον [Κούρη](/el/dam/kouris/)
- [Γερμασόγεια](/el/dam/germasoyeia/) 45.1% (+1.0μ.π.) — νέο μέγιστο, 19.2μ.π. πάνω από πέρυσι
- [Κούρης](/el/dam/kouris/) 32.6% (37.5 ΕΚΜ) — νέο μέγιστο σεζόν, 13.2μ.π. πάνω από πέρυσι
- 8 φράγματα υπερχειλίζουν στο 100%
- [Αχνά](/el/dam/achna/) παραμένει στο 2.2% χωρίς εισροή

**Στα μέσα:**
- [Αυξάνεται η στάθμη φραγμάτων — αλλά συνεχίζεται η σύσταση για εξοικονόμηση νερού](https://cyprus-mail.com/2026/04/06/dam-levels-improve-but-water-caution-urged) — Cyprus Mail
- [Ξεπέρασαν τα 100 ΕΚΜ τα αποθέματα — συνεχίζουν εισροές Απριλίου](https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-ta-100-ekm-ta-sinolika-apothemata-nerou-sta-fragmata-sinexizoun-simantikes-eisroes-gia-mina-aprilio/) — KitasWeather
- [Σημαντικές εισροές νερού στα φράγματα](https://news.rik.cy/article/2026/4/2/semantikes-eisroes-nerou-sta-phragmata/) — RIK
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (2 апреля — 9 апреля 2026)

Общий запас **35.3%** (102.6 МКМ), рост с 32.2% (93.5 МКМ) на 2/4 — **+9.1 МКМ за 7 дней**. Запасы держатся выше **100 МКМ** уже **3 дня подряд**. Запасы теперь **на 11.3пп выше прошлогодних** (24.0%). Приток сезона 25/26: 85.0 МКМ — в 4.6 раза больше засушливого сезона 24/25. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 14.27 МКМ.

**Основные изменения:**
- **[Визакия](/ru/dam/vyzakia/) 79.9%** (+2.0пп) — всего 0.1пп до 80%, в 29 раз выше прошлого года (2.8%)
- **[Арминоу](/ru/dam/arminou/) 48.0%** (+2.0пп) — новый максимум, несмотря на перекачку 14.27 МКМ в [Курис](/ru/dam/kouris/)
- [Гермасойя](/ru/dam/germasoyeia/) 45.1% (+1.0пп) — новый сезонный максимум, +19.2пп выше прошлого года
- [Курис](/ru/dam/kouris/) 32.6% (37.5 МКМ) — новый максимум, +13.2пп выше прошлого года
- 8 дамб переливаются на 100%
- [Ахна](/ru/dam/achna/) остаётся на 2.2% без притока

**В СМИ:**
- [Уровень воды в дамбах улучшается, но призыв к экономии воды остаётся](https://cyprus-mail.com/2026/04/06/dam-levels-improve-but-water-caution-urged) — Cyprus Mail
- [Уровень воды в водохранилищах Кипра приближается к 100 млн кубометров](https://ruscyprus.com/news/uroven-vody-v-vodohranilishchah-kipra/54512) — RusCyprus
- [Приток воды в дамбы Кипра — рекордный за 30 лет!](https://evropakipr.com/novosti/pritok-vody-v-damby-kipra-rekordnyy-za-30-let) — Европа Кипр
`;
  }
  return `
### Recent Changes (April 2 — April 9, 2026)

Total storage at **35.3%** (102.6 MCM), up from 32.2% (93.5 MCM) on Apr 2 — **+9.1 MCM in 7 days**. Reserves holding above **100 MCM** for the **3rd consecutive day**. **11.3pp above last year** (24.0%). Season total: **85.0 MCM** — 4.6× the 2024/25 drought year. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 14.27 MCM.

**Notable movements:**
- **[Vyzakia](/dam/vyzakia/) at 79.9%** (+2.0pp) — just 0.1pp from 80%, 29× last year's 2.8%
- **[Arminou](/dam/arminou/) at 48.0%** (+2.0pp) — new season high despite 14.27 MCM pumped to [Kouris](/dam/kouris/)
- [Germasoyeia](/dam/germasoyeia/) 45.1% (+1.0pp) — new season high, 19.2pp above last year
- [Kouris](/dam/kouris/) 32.6% (37.5 MCM) — new season high, 13.2pp above last year
- 8 dams overflowing at 100%
- [Achna](/dam/achna/) still at 2.2% — zero inflow all season

**In the media:**
- [Dam levels improve but water caution urged](https://cyprus-mail.com/2026/04/06/dam-levels-improve-but-water-caution-urged) — Cyprus Mail
- [Cyprus dams 33.9% full, better than last year but not quite satisfactory](https://www.cbn.com.cy/article/127740/cyprus-dams-33-9-full-better-than-last-year-but-not-quite-satisfactory-water-development-department-chief-engineer-says) — CBN
- [Amount of water in Cyprus' reservoirs nears 100m cubic metres](https://cyprus-mail.com/2026/04/02/amount-of-water-in-cyprus-reservoirs-nears-100m-cubic-metres) — Cyprus Mail
`;
};
