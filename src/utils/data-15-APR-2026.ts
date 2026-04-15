import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for April 15, 2026 (parsed from 15-APR-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.157, totalSince: 18.225 }, storage: { current: { amount: 39.333, percentage: 34.2 }, lastYear: { amount: 22.213, percentage: 19.3 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.043, totalSince: 2.919 }, storage: { current: { amount: 3.196, percentage: 18.7 }, lastYear: { amount: 4.604, percentage: 26.9 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.017, totalSince: 1.405 }, storage: { current: { amount: 2.349, percentage: 17.0 }, lastYear: { amount: 3.494, percentage: 25.2 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.031, totalSince: 2.891 }, storage: { current: { amount: 5.481, percentage: 35.4 }, lastYear: { amount: 5.723, percentage: 36.9 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.081, totalSince: 7.008 }, storage: { current: { amount: 6.655, percentage: 49.3 }, lastYear: { amount: 3.460, percentage: 25.6 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.133, totalSince: 16.227 }, storage: { current: { amount: 2.181, percentage: 50.7 }, lastYear: { amount: 2.618, percentage: 60.9 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.002, totalSince: 1.256 }, storage: { current: { amount: 1.888, percentage: 55.5 }, lastYear: { amount: 1.312, percentage: 38.6 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.149, percentage: 2.2 }, lastYear: { amount: 1.182, percentage: 17.4 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.065, totalSince: 17.245 }, storage: { current: { amount: 19.780, percentage: 37.8 }, lastYear: { amount: 12.752, percentage: 24.3 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.032, totalSince: 8.099 }, storage: { current: { amount: 8.219, percentage: 47.9 }, lastYear: { amount: 4.395, percentage: 25.6 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.002, totalSince: 0.903 }, storage: { current: { amount: 1.932, percentage: 88.6 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.051, totalSince: 8.432 }, storage: { current: { amount: 10.550, percentage: 44.0 }, lastYear: { amount: 5.814, percentage: 24.2 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.990, percentage: 100.0 }, lastYear: { amount: 0.390, percentage: 39.4 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.860, percentage: 100.0 }, lastYear: { amount: 0.376, percentage: 43.7 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.243 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.174, percentage: 58.4 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.022, totalSince: 1.504 }, storage: { current: { amount: 1.505, percentage: 89.1 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 1.413 }, storage: { current: { amount: 1.430, percentage: 100.0 }, lastYear: { amount: 0.323, percentage: 22.6 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.320, percentage: 88.2 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.005, totalSince: 2.575 }, storage: { current: { amount: 2.794, percentage: 99.8 }, lastYear: { amount: 1.020, percentage: 36.4 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.060 }, storage: { current: { amount: 2.000, percentage: 100.0 }, lastYear: { amount: 1.467, percentage: 73.4 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.935, percentage: 65.9 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data - updated with 25/26 data through April 15, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:15.385, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:89.868 },
];

export const getReportDate = (): string => "15-APR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 15.11 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 34.2% (39.3 MCM) — new season high, 14.9pp above last year\'s 19.3%. Arminou transfer: 15.11 MCM since October.',
      el: 'Ο Κούρης στο 34.2% (39.3 ΕΚΜ) — νέο μέγιστο σεζόν, 14.9μ.π. πάνω από πέρυσι (19.3%). Μεταφορά Αρμίνου: 15.11 ΕΚΜ.',
      ru: 'Курис на 34.2% (39.3 МКМ) — новый сезонный максимум, +14.9пп выше прошлогодних 19.3%. Перекачка Арминоу: 15.11 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 18.7% (3.20 MCM) — still 8.2pp below last year\'s 26.9%. Recovering slowly with 2.92 MCM seasonal inflow.',
      el: 'Ο Καλαβασός στο 18.7% (3.20 ΕΚΜ) — 8.2μ.π. κάτω από πέρυσι (26.9%). Αργή ανάκαμψη, εισροή σεζόν 2.92 ΕΚΜ.',
      ru: 'Калавасос на 18.7% (3.20 МКМ) — на 8.2пп ниже прошлогодних 26.9%. Медленное восстановление, приток 2.92 МКМ.',
    },
    'Lefkara': {
      en: 'Lefkara at 17.0% (2.35 MCM) — 8.2pp below last year\'s 25.2%. Seasonal inflow 1.41 MCM — recovery remains sluggish.',
      el: 'Η Λεύκαρα στο 17.0% (2.35 ΕΚΜ) — 8.2μ.π. κάτω από πέρυσι (25.2%). Εισροή σεζόν 1.41 ΕΚΜ — αδύναμη ανάκαμψη.',
      ru: 'Лефкара на 17.0% (2.35 МКМ) — на 8.2пп ниже прошлогодних 25.2%. Приток 1.41 МКМ — медленное восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 35.4% (5.48 MCM), now within 1.5pp of last year\'s 36.9%. Seasonal inflow 2.89 MCM — steady recovery.',
      el: 'Ο Διπόταμος στο 35.4% (5.48 ΕΚΜ), μόλις 1.5μ.π. κάτω από πέρυσι (36.9%). Εισροή σεζόν 2.89 ΕΚΜ, σταθερή ανάκαμψη.',
      ru: 'Дипотамос на 35.4% (5.48 МКМ), всего 1.5пп ниже прошлогодних 36.9%. Приток 2.89 МКМ — стабильное восстановление.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 49.3% (6.66 MCM) — new season high, just 0.7pp from 50%, 23.7pp above last year (25.6%).',
      el: 'Η Γερμασόγεια στο 49.3% (6.66 ΕΚΜ) — νέο μέγιστο, μόλις 0.7μ.π. από το 50%, 23.7μ.π. πάνω από πέρυσι (25.6%).',
      ru: 'Гермасойя на 49.3% (6.66 МКМ) — новый максимум, всего 0.7пп до 50%, +23.7пп выше прошлого года (25.6%).',
    },
    'Arminou': {
      en: 'Arminou crossed 50% to 50.7% (2.18 MCM) — new season high, rising sharply despite 15.11 MCM pumped to Kouris.',
      el: 'Ο Αρμίνου ξεπέρασε το 50% στο 50.7% (2.18 ΕΚΜ) — νέο μέγιστο, ανεβαίνει παρά τη μεταφορά 15.11 ΕΚΜ στον Κούρη.',
      ru: 'Арминоу пересёк 50% и достиг 50.7% (2.18 МКМ) — новый максимум, растёт несмотря на перекачку 15.11 МКМ в Курис.',
    },
    'Polemidia': {
      en: 'Polemidia at 55.5% (1.89 MCM) — new season high, 16.9pp above last year\'s 38.6%. Above 50% and climbing steadily.',
      el: 'Η Πολεμίδια στο 55.5% (1.89 ΕΚΜ) — νέο μέγιστο, 16.9μ.π. πάνω από πέρυσι (38.6%). Πάνω από 50%, συνεχής άνοδος.',
      ru: 'Полемидия на 55.5% (1.89 МКМ) — новый максимум, +16.9пп выше прошлогодних 38.6%. Выше 50% и стабильно растёт.',
    },
    'Achna': {
      en: 'Achna critically low at 2.2% (0.15 MCM), zero inflow all season. Far below last year\'s 17.4%. No recovery in sight.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.2% (0.15 ΕΚΜ), χωρίς εισροή. Πολύ κάτω από πέρυσι (17.4%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.2% (0.15 МКМ), без притока за сезон. Далеко ниже прошлогодних 17.4%. Без перспектив.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 37.8% (19.8 MCM) — new season high, 13.5pp above last year\'s 24.3%. Inflow 17.25 MCM since October.',
      el: 'Ο Ασπρόκρεμμος στο 37.8% (19.8 ΕΚΜ), νέο μέγιστο σεζόν — 13.5μ.π. πάνω από πέρυσι (24.3%). Εισροή 17.25 ΕΚΜ.',
      ru: 'Аспрокреммос на 37.8% (19.8 МКМ) — новый максимум, +13.5пп выше прошлого года (24.3%). Приток 17.25 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 47.9% (8.22 MCM) — new season high, 22.3pp above last year\'s 25.6%. Inflow 8.10 MCM since October.',
      el: 'Ο Καννάβιου στο 47.9% (8.22 ΕΚΜ), νέο μέγιστο σεζόν — 22.3μ.π. πάνω από πέρυσι (25.6%). Εισροή 8.10 ΕΚΜ.',
      ru: 'Каннавиу на 47.9% (8.22 МКМ) — новый максимум, +22.3пп выше прошлогодних 25.6%. Приток 8.10 МКМ.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 88.6% (1.93 MCM) — new season high, approaching 90%. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 88.6% (1.93 ΕΚΜ) — νέο μέγιστο, πλησιάζει 90%. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 88.6% (1.93 МКМ) — новый максимум, приближается к 90%. Год назад 0% — исключительный рост.',
    },
    'Evretou': {
      en: 'Evretou at 44.0% (10.6 MCM), holding above 10 MCM milestone. Now 19.8pp above last year\'s 24.2%. Inflow 8.43 MCM.',
      el: 'Ο Εύρετου στο 44.0% (10.6 ΕΚΜ), πάνω από 10 ΕΚΜ. Τώρα 19.8μ.π. πάνω από πέρυσι (24.2%). Εισροή 8.43 ΕΚΜ.',
      ru: 'Эвретоу на 44.0% (10.6 МКМ), удерживается выше 10 МКМ. Теперь +19.8пп выше прошлогодних 24.2%. Приток 8.43 МКМ.',
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
      en: 'Vyzakia surged to 89.1% (1.51 MCM) — up 11pp in a week, new season high. Was just 2.8% last year — 32× year-over-year.',
      el: 'Τα Βυζακιά εκτοξεύτηκαν στο 89.1% (1.51 ΕΚΜ) — +11μ.π. σε μια εβδομάδα, νέο μέγιστο. Από 2.8% πέρυσι — 32× ανάκαμψη.',
      ru: 'Визакия выросла до 89.1% (1.51 МКМ) — +11пп за неделю, новый максимум. Год назад 2.8% — восстановление в 32×.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM), overflowing since late March. Was 22.6% last year — 4.4× year-over-year recovery.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Από 22.6% πέρυσι — 4.4× ανάκαμψη.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ), переливается с конца марта. Был 22.6% год назад — восстановление в 4.4×.',
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
      en: 'Solea full at 100% (4.45 MCM), overflowing since mid-March. Up from 65.9% last year — 1.5× year-over-year improvement.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 65.9% πέρυσι — 1.5× βελτίωση.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), переливается с середины марта. Рост с 65.9% год назад — улучшение в 1.5×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (8 Απριλίου — 15 Απριλίου 2026)

Συνολική αποθήκευση **36.8%** (107.2 ΕΚΜ), άνοδος από 34.9% (101.5 ΕΚΜ) στις 8/4 — **+5.7 ΕΚΜ σε 7 ημέρες**. Τώρα **13.0μ.π. πάνω από πέρυσι** (23.8%). Εισροή σεζόν 25/26: 89.9 ΕΚΜ — 4.8× τη χρονιά 24/25. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 15.11 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Βυζακιά](/el/dam/vyzakia/) 89.1%** (+11.2μ.π.) — εκτοξεύτηκαν σε μια εβδομάδα, νέο μέγιστο σεζόν, 32× πέρυσι
- **[Αρμίνου](/el/dam/arminou/) 50.7%** — πέρασε το 50% παρά τη μεταφορά 15.11 ΕΚΜ στον [Κούρη](/el/dam/kouris/)
- [Γερμασόγεια](/el/dam/germasoyeia/) 49.3% (+5.2μ.π.) — μόλις 0.7μ.π. από το 50%, νέο μέγιστο
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) 88.6% (+3.4μ.π.) — πλησιάζει 90%, από 0% πέρυσι
- [Κούρης](/el/dam/kouris/) 34.2% (39.3 ΕΚΜ) — νέο μέγιστο σεζόν, 14.9μ.π. πάνω από πέρυσι
- 8 φράγματα παραμένουν στο 100%
- [Αχνά](/el/dam/achna/) εξακολουθεί να βρίσκεται στο 2.2% χωρίς εισροή

**Στα μέσα:**
- [Το ΤΑΥ δρα για να εξασφαλίσει την υδροδότηση του καλοκαιριού](https://cyprus-mail.com/2026/04/06/water-development-department-acts-to-secure-summer-water-supply/) — Cyprus Mail
- [Αυξάνεται η στάθμη φραγμάτων — αλλά συνεχίζεται η σύσταση για εξοικονόμηση νερού](https://cyprus-mail.com/2026/04/06/dam-levels-improve-but-water-caution-urged) — Cyprus Mail
- [Ξεπέρασαν τα 100 ΕΚΜ τα αποθέματα — συνεχίζουν εισροές Απριλίου](https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-ta-100-ekm-ta-sinolika-apothemata-nerou-sta-fragmata-sinexizoun-simantikes-eisroes-gia-mina-aprilio/) — KitasWeather
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (8 апреля — 15 апреля 2026)

Общий запас **36.8%** (107.2 МКМ), рост с 34.9% (101.5 МКМ) на 8/4 — **+5.7 МКМ за 7 дней**. Запасы теперь **на 13.0пп выше прошлогодних** (23.8%). Приток сезона 25/26: 89.9 МКМ — в 4.8 раза больше засушливого сезона 24/25. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 15.11 МКМ.

**Основные изменения:**
- **[Визакия](/ru/dam/vyzakia/) 89.1%** (+11.2пп) — резкий рост за неделю, новый сезонный максимум, в 32× выше прошлого года
- **[Арминоу](/ru/dam/arminou/) 50.7%** — пересёк отметку 50%, несмотря на перекачку 15.11 МКМ в [Курис](/ru/dam/kouris/)
- [Гермасойя](/ru/dam/germasoyeia/) 49.3% (+5.2пп) — всего 0.7пп до 50%, новый сезонный максимум
- [Мавроколимпос](/ru/dam/mavrokolympos/) 88.6% (+3.4пп) — приближается к 90%, год назад 0%
- [Курис](/ru/dam/kouris/) 34.2% (39.3 МКМ) — новый максимум, +14.9пп выше прошлого года
- 8 дамб остаются переполненными на 100%
- [Ахна](/ru/dam/achna/) по-прежнему на 2.2% — без притока за весь сезон

**В СМИ:**
- [WDD принимает меры для обеспечения водоснабжения летом](https://cyprus-mail.com/2026/04/06/water-development-department-acts-to-secure-summer-water-supply/) — Cyprus Mail
- [Уровень воды в дамбах улучшается, но призыв к экономии воды остаётся](https://cyprus-mail.com/2026/04/06/dam-levels-improve-but-water-caution-urged) — Cyprus Mail
- [За семь дней апреля на Кипре уже выпала месячная норма осадков](https://ruscyprus.com/news/za-sem-dney-aprelya-na-kipre-uzhe-vypala/54609) — RusCyprus
`;
  }
  return `
### Recent Changes (April 8 — April 15, 2026)

Total storage at **36.8%** (107.2 MCM), up from 34.9% (101.5 MCM) on Apr 8 — **+5.7 MCM in 7 days**. **13.0pp above last year** (23.8%). Season total: **89.9 MCM** — 4.8× the 2024/25 drought year. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 15.11 MCM.

**Notable movements:**
- **[Vyzakia](/dam/vyzakia/) at 89.1%** (+11.2pp in a week) — new season high, 32× last year's 2.8%
- **[Arminou](/dam/arminou/) at 50.7%** — crossed 50% milestone despite 15.11 MCM pumped to [Kouris](/dam/kouris/)
- [Germasoyeia](/dam/germasoyeia/) 49.3% (+5.2pp) — just 0.7pp from 50%, new season high
- [Mavrokolympos](/dam/mavrokolympos/) 88.6% (+3.4pp) — approaching 90%, up from 0% last year
- [Kouris](/dam/kouris/) 34.2% (39.3 MCM) — new season high, 14.9pp above last year
- 8 dams overflowing at 100%
- [Achna](/dam/achna/) still at 2.2% — zero inflow all season

**In the media:**
- [Water development department acts to secure summer water supply](https://cyprus-mail.com/2026/04/06/water-development-department-acts-to-secure-summer-water-supply/) — Cyprus Mail
- [Dam levels improve but water caution urged](https://cyprus-mail.com/2026/04/06/dam-levels-improve-but-water-caution-urged) — Cyprus Mail
- [Cyprus dams 33.9% full, better than last year but not quite satisfactory](https://www.cbn.com.cy/article/127740/cyprus-dams-33-9-full-better-than-last-year-but-not-quite-satisfactory-water-development-department-chief-engineer-says) — CBN
`;
};
