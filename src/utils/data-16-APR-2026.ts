import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for April 16, 2026 (parsed from 16-APR-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.122, totalSince: 18.347 }, storage: { current: { amount: 39.545, percentage: 34.4 }, lastYear: { amount: 22.179, percentage: 19.3 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.056, totalSince: 2.975 }, storage: { current: { amount: 3.249, percentage: 19.0 }, lastYear: { amount: 4.600, percentage: 26.9 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.019, totalSince: 1.424 }, storage: { current: { amount: 2.366, percentage: 17.1 }, lastYear: { amount: 3.467, percentage: 25.0 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.035, totalSince: 2.926 }, storage: { current: { amount: 5.521, percentage: 35.6 }, lastYear: { amount: 5.723, percentage: 36.9 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.078, totalSince: 7.086 }, storage: { current: { amount: 6.730, percentage: 49.9 }, lastYear: { amount: 3.455, percentage: 25.6 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.119, totalSince: 16.346 }, storage: { current: { amount: 2.156, percentage: 50.1 }, lastYear: { amount: 2.621, percentage: 61.0 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.009, totalSince: 1.265 }, storage: { current: { amount: 1.896, percentage: 55.8 }, lastYear: { amount: 1.309, percentage: 38.5 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.149, percentage: 2.2 }, lastYear: { amount: 1.182, percentage: 17.4 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.078, totalSince: 17.323 }, storage: { current: { amount: 19.849, percentage: 37.9 }, lastYear: { amount: 12.726, percentage: 24.3 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.026, totalSince: 8.125 }, storage: { current: { amount: 8.235, percentage: 48.0 }, lastYear: { amount: 4.387, percentage: 25.6 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.002, totalSince: 0.905 }, storage: { current: { amount: 1.952, percentage: 89.5 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.045, totalSince: 8.477 }, storage: { current: { amount: 10.593, percentage: 44.1 }, lastYear: { amount: 5.805, percentage: 24.2 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.990, percentage: 100.0 }, lastYear: { amount: 0.390, percentage: 39.4 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.860, percentage: 100.0 }, lastYear: { amount: 0.376, percentage: 43.7 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.243 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.174, percentage: 58.4 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.021, totalSince: 1.525 }, storage: { current: { amount: 1.526, percentage: 90.3 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 1.413 }, storage: { current: { amount: 1.430, percentage: 100.0 }, lastYear: { amount: 0.322, percentage: 22.5 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.320, percentage: 88.2 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.001, totalSince: 2.576 }, storage: { current: { amount: 2.794, percentage: 99.8 }, lastYear: { amount: 1.020, percentage: 36.4 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.061 }, storage: { current: { amount: 2.000, percentage: 100.0 }, lastYear: { amount: 1.467, percentage: 73.4 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.930, percentage: 65.8 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data - updated with 25/26 data through April 16, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:15.995, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:90.478 },
];

export const getReportDate = (): string => "16-APR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 15.25 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 34.4% (39.5 MCM) — new season high, 15.1pp above last year\'s 19.3%. Arminou→Kouris transfer: 15.25 MCM since October.',
      el: 'Ο Κούρης στο 34.4% (39.5 ΕΚΜ) — νέο μέγιστο σεζόν, 15.1μ.π. πάνω από πέρυσι (19.3%). Μεταφορά Αρμίνου→Κούρης: 15.25 ΕΚΜ.',
      ru: 'Курис на 34.4% (39.5 МКМ) — новый сезонный максимум, +15.1пп выше прошлогодних 19.3%. Перекачка Арминоу→Курис: 15.25 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 19.0% (3.25 MCM) — still 7.9pp below last year\'s 26.9%. Recovering slowly with 2.98 MCM seasonal inflow.',
      el: 'Ο Καλαβασός στο 19.0% (3.25 ΕΚΜ) — 7.9μ.π. κάτω από πέρυσι (26.9%). Αργή ανάκαμψη, εισροή σεζόν 2.98 ΕΚΜ.',
      ru: 'Калавасос на 19.0% (3.25 МКМ) — на 7.9пп ниже прошлогодних 26.9%. Медленное восстановление, приток 2.98 МКМ.',
    },
    'Lefkara': {
      en: 'Lefkara at 17.1% (2.37 MCM) — 7.9pp below last year\'s 25.0%. Seasonal inflow 1.42 MCM — recovery remains sluggish.',
      el: 'Η Λεύκαρα στο 17.1% (2.37 ΕΚΜ) — 7.9μ.π. κάτω από πέρυσι (25.0%). Εισροή σεζόν 1.42 ΕΚΜ — αδύναμη ανάκαμψη.',
      ru: 'Лефкара на 17.1% (2.37 МКМ) — на 7.9пп ниже прошлогодних 25.0%. Приток 1.42 МКМ — медленное восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 35.6% (5.52 MCM), within 1.3pp of last year\'s 36.9%. Seasonal inflow 2.93 MCM — steady recovery.',
      el: 'Ο Διπόταμος στο 35.6% (5.52 ΕΚΜ), μόλις 1.3μ.π. κάτω από πέρυσι (36.9%). Εισροή σεζόν 2.93 ΕΚΜ, σταθερή ανάκαμψη.',
      ru: 'Дипотамос на 35.6% (5.52 МКМ), всего 1.3пп ниже прошлогодних 36.9%. Приток 2.93 МКМ — стабильное восстановление.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 49.9% (6.73 MCM) — new season high, touching the 50% milestone. 24.3pp above last year (25.6%).',
      el: 'Η Γερμασόγεια στο 49.9% (6.73 ΕΚΜ) — νέο μέγιστο σεζόν, αγγίζει το 50%. 24.3μ.π. πάνω από πέρυσι (25.6%).',
      ru: 'Гермасойя на 49.9% (6.73 МКМ) — новый сезонный максимум, достигает отметки 50%. +24.3пп выше прошлого года (25.6%).',
    },
    'Arminou': {
      en: 'Arminou holding above 50% at 50.1% (2.16 MCM) — strong despite 15.25 MCM pumped to Kouris since October.',
      el: 'Ο Αρμίνου παραμένει πάνω από 50% στο 50.1% (2.16 ΕΚΜ) — ισχυρός παρά τη μεταφορά 15.25 ΕΚΜ στον Κούρη.',
      ru: 'Арминоу удерживается выше 50% — 50.1% (2.16 МКМ), несмотря на перекачку 15.25 МКМ в Курис с октября.',
    },
    'Polemidia': {
      en: 'Polemidia at 55.8% (1.90 MCM) — new season high, 17.3pp above last year\'s 38.5%. Steadily climbing above 50%.',
      el: 'Η Πολεμίδια στο 55.8% (1.90 ΕΚΜ) — νέο μέγιστο, 17.3μ.π. πάνω από πέρυσι (38.5%). Συνεχής άνοδος πάνω από 50%.',
      ru: 'Полемидия на 55.8% (1.90 МКМ) — новый максимум, +17.3пп выше прошлогодних 38.5%. Стабильно растёт выше 50%.',
    },
    'Achna': {
      en: 'Achna critically low at 2.2% (0.15 MCM), zero inflow all season. Far below last year\'s 17.4%. No recovery in sight.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.2% (0.15 ΕΚΜ), χωρίς εισροή. Πολύ κάτω από πέρυσι (17.4%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.2% (0.15 МКМ), без притока за сезон. Далеко ниже прошлогодних 17.4%. Без перспектив.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 37.9% (19.8 MCM) — new season high, 13.6pp above last year\'s 24.3%. Inflow 17.32 MCM since October.',
      el: 'Ο Ασπρόκρεμμος στο 37.9% (19.8 ΕΚΜ), νέο μέγιστο σεζόν — 13.6μ.π. πάνω από πέρυσι (24.3%). Εισροή 17.32 ΕΚΜ.',
      ru: 'Аспрокреммос на 37.9% (19.8 МКМ) — новый максимум, +13.6пп выше прошлого года (24.3%). Приток 17.32 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 48.0% (8.24 MCM) — new season high, 22.4pp above last year\'s 25.6%. Inflow 8.13 MCM since October.',
      el: 'Ο Καννάβιου στο 48.0% (8.24 ΕΚΜ), νέο μέγιστο σεζόν — 22.4μ.π. πάνω από πέρυσι (25.6%). Εισροή 8.13 ΕΚΜ.',
      ru: 'Каннавиу на 48.0% (8.24 МКМ) — новый максимум, +22.4пп выше прошлогодних 25.6%. Приток 8.13 МКМ.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 89.5% (1.95 MCM) — new season high, closing in on 90%. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 89.5% (1.95 ΕΚΜ) — νέο μέγιστο, κοντά στο 90%. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 89.5% (1.95 МКМ) — новый максимум, приближается к 90%. Год назад 0% — исключительный рост.',
    },
    'Evretou': {
      en: 'Evretou at 44.1% (10.6 MCM), holding above 10 MCM. Now 19.9pp above last year\'s 24.2%. Inflow 8.48 MCM.',
      el: 'Ο Εύρετου στο 44.1% (10.6 ΕΚΜ), πάνω από 10 ΕΚΜ. Τώρα 19.9μ.π. πάνω από πέρυσι (24.2%). Εισροή 8.48 ΕΚΜ.',
      ru: 'Эвретоу на 44.1% (10.6 МКМ), удерживается выше 10 МКМ. Теперь +19.9пп выше прошлогодних 24.2%. Приток 8.48 МКМ.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), continuing to overflow. More than doubled year over year from 39.4% — Chrysochou thriving.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), συνεχής υπερχείλιση. Από 39.4% πέρυσι — πάνω από διπλασιασμός, Χρυσοχούς άριστα.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), продолжает переливаться. Год назад 39.4% — более чем удвоение, Хрисоху процветает.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), continuously overflowing. Up from 43.7% last year — more than doubled year over year.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), συνεχής υπερχείλιση. Αύξηση από 43.7% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), продолжает переливаться. Рост с 43.7% год назад — более чем удвоение.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 100% (0.30 MCM), overflowing since late March. Up from 58.4% last year — Chrysochou region fully topped up.',
      el: 'Η Αγία Μαρίνα στο 100% (0.30 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Από 58.4% πέρυσι — Χρυσοχούς πλήρης.',
      ru: 'Агия Марина на 100% (0.30 МКМ), переливается с конца марта. Рост с 58.4% год назад — Хрисоху полностью заполнена.',
    },
    'Vyzakia': {
      en: 'Vyzakia crossed 90% to 90.3% (1.53 MCM) — new season high. Was just 2.8% last year — 32× year-over-year recovery.',
      el: 'Τα Βυζακιά ξεπέρασαν το 90% στο 90.3% (1.53 ΕΚΜ) — νέο μέγιστο σεζόν. Από 2.8% πέρυσι — ανάκαμψη 32×.',
      ru: 'Визакия пересекла 90% — 90.3% (1.53 МКМ), новый сезонный максимум. Год назад 2.8% — восстановление в 32×.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM), overflowing since late March. Was 22.5% last year — 4.4× year-over-year recovery.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Από 22.5% πέρυσι — 4.4× ανάκαμψη.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ), переливается с конца марта. Был 22.5% год назад — восстановление в 4.4×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-March. Up from 88.2% last year, at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 88.2% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины марта. Рост с 88.2% год назад, полная мощность.',
    },
    'Tamassos': {
      en: 'Tamassos near capacity at 99.8% (2.79 MCM) — almost full after weeks of strong inflow. Was 36.4% last year — 2.7× YoY.',
      el: 'Ο Ταμασός σχεδόν πλήρης στο 99.8% (2.79 ΕΚΜ) — μετά από εβδομάδες έντονης εισροής. Από 36.4% πέρυσι — 2.7× ΕΤΕ.',
      ru: 'Тамассос почти полный — 99.8% (2.79 МКМ), после недель сильного притока. Год назад 36.4% — в 2.7× год к году.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 73.4% last year — 1.4× year-over-year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 73.4% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 73.4% год назад — 1.4× год к году.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), overflowing since mid-March. Up from 65.8% last year — 1.5× year-over-year improvement.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 65.8% πέρυσι — 1.5× βελτίωση.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), переливается с середины марта. Рост с 65.8% год назад — улучшение в 1.5×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (9 Απριλίου — 16 Απριλίου 2026)

Συνολική αποθήκευση **37.0%** (107.7 ΕΚΜ), άνοδος από 35.3% (102.6 ΕΚΜ) στις 9/4 — **+5.1 ΕΚΜ σε 7 ημέρες**. Τώρα **13.3μ.π. πάνω από πέρυσι** (23.8%). Εισροή σεζόν 25/26: 90.5 ΕΚΜ — 4.8× τη χρονιά 24/25. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 15.25 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Βυζακιά](/el/dam/vyzakia/) 90.3%** — πέρασαν το 90%, νέο μέγιστο σεζόν, 32× πέρυσι (2.8%)
- **[Γερμασόγεια](/el/dam/germasoyeia/) 49.9%** (+0.6μ.π.) — νέο μέγιστο, αγγίζει το 50%, 24.3μ.π. πάνω από πέρυσι
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) 89.5% (+0.9μ.π.) — νέο μέγιστο, κοντά στο 90%, από 0% πέρυσι
- [Αρμίνου](/el/dam/arminou/) 50.1% — παραμένει πάνω από 50% παρά τη μεταφορά 15.25 ΕΚΜ στον [Κούρη](/el/dam/kouris/)
- [Κούρης](/el/dam/kouris/) 34.4% (39.5 ΕΚΜ) — νέο μέγιστο σεζόν, 15.1μ.π. πάνω από πέρυσι
- 8 φράγματα παραμένουν στο 100% — [Αχνά](/el/dam/achna/) εξακολουθεί στο 2.2% χωρίς εισροή

**Στα μέσα:**
- [Πληρότητα φραγμάτων πλησιάζει το 37% — 4+ ΕΚΜ εισροές το τελευταίο 5ήμερο](https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-ta-4-ekm-oi-sinolikes-eisroes-nerou-to-telefteo-5imero-plisiazei-to-37-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
- [Βροχόπτωση Απριλίου στο 127% — μετρήσεις Μεγάλης Πέμπτης - Μ. Σαββάτου](https://kitasweather.com/news/fragmata-vroxoptosi/sto-127-tis-ekato-anilthe-i-mesi-vroxoptosi-apriliou-metriseis-vroxoptosis-megalis-pemptis-megalou-savvatou/) — KitasWeather
- [ΤΑΥ: Μέτρα για εξασφάλιση υδροδότησης καλοκαιριού](https://cyprus-mail.com/2026/04/06/water-development-department-acts-to-secure-summer-water-supply/) — Cyprus Mail
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (9 апреля — 16 апреля 2026)

Общий запас **37.0%** (107.7 МКМ), рост с 35.3% (102.6 МКМ) на 9/4 — **+5.1 МКМ за 7 дней**. Запасы теперь **на 13.3пп выше прошлогодних** (23.8%). Приток сезона 25/26: 90.5 МКМ — в 4.8 раза больше засушливого сезона 24/25. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 15.25 МКМ.

**Основные изменения:**
- **[Визакия](/ru/dam/vyzakia/) 90.3%** — пересекла отметку 90%, новый сезонный максимум, в 32× выше прошлого года (2.8%)
- **[Гермасойя](/ru/dam/germasoyeia/) 49.9%** (+0.6пп) — новый максимум, практически достигла 50%, +24.3пп выше прошлого года
- [Мавроколимпос](/ru/dam/mavrokolympos/) 89.5% (+0.9пп) — новый максимум, приближается к 90%, год назад 0%
- [Арминоу](/ru/dam/arminou/) 50.1% — удерживается выше 50%, несмотря на перекачку 15.25 МКМ в [Курис](/ru/dam/kouris/)
- [Курис](/ru/dam/kouris/) 34.4% (39.5 МКМ) — новый сезонный максимум, +15.1пп выше прошлого года
- 8 дамб остаются переполненными; [Ахна](/ru/dam/achna/) по-прежнему 2.2% — без притока за сезон

**В СМИ:**
- [Уровень воды приближается к 37% — свыше 4 МКМ притока за 5 дней](https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-ta-4-ekm-oi-sinolikes-eisroes-nerou-to-telefteo-5imero-plisiazei-to-37-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
- [За семь дней апреля на Кипре уже выпала месячная норма осадков](https://ruscyprus.com/news/za-sem-dney-aprelya-na-kipre-uzhe-vypala/54609) — RusCyprus
- [WDD принимает меры для обеспечения водоснабжения летом](https://cyprus-mail.com/2026/04/06/water-development-department-acts-to-secure-summer-water-supply/) — Cyprus Mail
`;
  }
  return `
### Recent Changes (April 9 — April 16, 2026)

Total storage at **37.0%** (107.7 MCM), up from 35.3% (102.6 MCM) on Apr 9 — **+5.1 MCM in 7 days**. **13.3pp above last year** (23.8%). Season total: **90.5 MCM** — 4.8× the 2024/25 drought year. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 15.25 MCM.

**Notable movements:**
- **[Vyzakia](/dam/vyzakia/) crossed 90% to 90.3%** — new season high, 32× last year's 2.8%
- **[Germasoyeia](/dam/germasoyeia/) at 49.9%** (+0.6pp) — new season high, touching the 50% milestone, 24.3pp above last year
- [Mavrokolympos](/dam/mavrokolympos/) 89.5% (+0.9pp) — new season high, approaching 90%, was 0% last year
- [Arminou](/dam/arminou/) holding at 50.1% despite 15.25 MCM pumped to [Kouris](/dam/kouris/)
- [Kouris](/dam/kouris/) 34.4% (39.5 MCM) — new season high, 15.1pp above last year
- 8 dams overflowing at 100%; [Achna](/dam/achna/) still 2.2% — zero inflow all season

**In the media:**
- [Dam fullness approaching 37% — 4+ MCM inflows in last 5 days](https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-ta-4-ekm-oi-sinolikes-eisroes-nerou-to-telefteo-5imero-plisiazei-to-37-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
- [Water development department acts to secure summer water supply](https://cyprus-mail.com/2026/04/06/water-development-department-acts-to-secure-summer-water-supply/) — Cyprus Mail
- [Dam levels improve but water caution urged](https://cyprus-mail.com/2026/04/06/dam-levels-improve-but-water-caution-urged) — Cyprus Mail
`;
};
