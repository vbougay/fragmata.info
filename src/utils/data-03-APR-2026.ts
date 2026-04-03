import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for April 3, 2026 (parsed from 03-APR-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.458, totalSince: 15.229 }, storage: { current: { amount: 35.014, percentage: 30.4 }, lastYear: { amount: 22.477, percentage: 19.5 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.135, totalSince: 1.859 }, storage: { current: { amount: 2.166, percentage: 12.7 }, lastYear: { amount: 4.659, percentage: 27.2 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.076, totalSince: 1.06 }, storage: { current: { amount: 2.019, percentage: 14.6 }, lastYear: { amount: 3.775, percentage: 27.3 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.104, totalSince: 2.058 }, storage: { current: { amount: 4.604, percentage: 29.7 }, lastYear: { amount: 5.626, percentage: 36.3 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.283, totalSince: 5.397 }, storage: { current: { amount: 5.077, percentage: 37.6 }, lastYear: { amount: 3.516, percentage: 26.0 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.208, totalSince: 13.892 }, storage: { current: { amount: 1.574, percentage: 36.6 }, lastYear: { amount: 2.553, percentage: 59.4 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.017, totalSince: 1.113 }, storage: { current: { amount: 1.75, percentage: 51.5 }, lastYear: { amount: 1.315, percentage: 38.7 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.143, percentage: 2.1 }, lastYear: { amount: 1.268, percentage: 18.6 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.155, totalSince: 15.653 }, storage: { current: { amount: 18.3, percentage: 34.9 }, lastYear: { amount: 13.091, percentage: 25.0 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.052, totalSince: 7.532 }, storage: { current: { amount: 7.779, percentage: 45.3 }, lastYear: { amount: 4.504, percentage: 26.2 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.003, totalSince: 0.831 }, storage: { current: { amount: 1.75, percentage: 80.3 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.076, totalSince: 7.686 }, storage: { current: { amount: 9.83, percentage: 41.0 }, lastYear: { amount: 5.907, percentage: 24.6 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.386, percentage: 39.0 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.373, percentage: 43.4 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.243 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.171, percentage: 57.4 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.037, totalSince: 1.141 }, storage: { current: { amount: 1.142, percentage: 67.6 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 1.413 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.326, percentage: 22.8 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.315, percentage: 86.8 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.001, totalSince: 2.449 }, storage: { current: { amount: 2.8, percentage: 100.0 }, lastYear: { amount: 1.04, percentage: 37.1 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.048 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.471, percentage: 73.6 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.977, percentage: 66.8 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data - updated with 25/26 data through April 3, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:2.722, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:77.205 },
];

export const getReportDate = (): string => "03-APR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 13.43 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 30.4% (35.0 MCM) — new season high, 10.9pp above last year\'s 19.5%. Arminou transfer: 13.43 MCM since October.',
      el: 'Ο Κούρης στο 30.4% (35.0 ΕΚΜ) — νέο μέγιστο σεζόν, 10.9μ.π. πάνω από πέρυσι (19.5%). Μεταφορά: 13.43 ΕΚΜ.',
      ru: 'Курис на 30.4% (35.0 МКМ) — новый сезонный максимум, +10.9пп выше прошлогодних 19.5%. Перекачка: 13.43 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 12.7% (2.17 MCM), still well below last year\'s 27.2%. One of the weakest recoveries in the Southern Conveyor.',
      el: 'Ο Καλαβασός στο 12.7% (2.17 ΕΚΜ), πολύ κάτω από πέρυσι (27.2%). Μία από τις πιο αδύναμες ανακάμψεις στο Νότιο Αγωγό.',
      ru: 'Калавасос на 12.7% (2.17 МКМ), значительно ниже прошлогодних 27.2%. Одно из слабейших восстановлений Южного конвейера.',
    },
    'Lefkara': {
      en: 'Lefkara at 14.6% (2.02 MCM), still well below last year\'s 27.3%. Seasonal inflow 1.06 MCM — recovery remains muted.',
      el: 'Η Λεύκαρα στο 14.6% (2.02 ΕΚΜ), πολύ κάτω από πέρυσι (27.3%). Εισροή σεζόν 1.06 ΕΚΜ — αδύναμη ανάκαμψη.',
      ru: 'Лефкара на 14.6% (2.02 МКМ), значительно ниже прошлогодних 27.3%. Приток за сезон 1.06 МКМ — слабое восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 29.7% (4.60 MCM), closing on last year\'s 36.3%. Seasonal inflow 2.06 MCM — steady but gradual recovery.',
      el: 'Ο Διπόταμος στο 29.7% (4.60 ΕΚΜ), πλησιάζει πέρυσι (36.3%). Εισροή σεζόν 2.06 ΕΚΜ, σταθερή σταδιακή ανάκαμψη.',
      ru: 'Дипотамос на 29.7% (4.60 МКМ), приближается к прошлогодним 36.3%. Сезонный приток 2.06 МКМ — постепенное восстановление.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia surged to 37.6% (5.08 MCM) — new season high, 11.6pp above last year (26.0%). Biggest daily jumper among large dams.',
      el: 'Η Γερμασόγεια ξεπέρασε 37.6% (5.08 ΕΚΜ) — νέο μέγιστο σεζόν, 11.6μ.π. πάνω από πέρυσι (26.0%). Μεγαλύτερη αύξηση.',
      ru: 'Гермасойя взлетела до 37.6% (5.08 МКМ) — новый сезонный максимум, +11.6пп выше прошлого года (26.0%). Наибольший рост.',
    },
    'Arminou': {
      en: 'Arminou at 36.6% (1.57 MCM) as transfers to Kouris continue — 13.43 MCM pumped since October. Transit corridor role.',
      el: 'Ο Αρμίνου στο 36.6% (1.57 ΕΚΜ) λόγω μεταφοράς στον Κούρη — 13.43 ΕΚΜ από Οκτώβριο. Ρόλος διαμετακόμισης.',
      ru: 'Арминоу на 36.6% (1.57 МКМ) из-за перекачки в Курис — 13.43 МКМ с октября. Роль транзитного коридора.',
    },
    'Polemidia': {
      en: 'Polemidia at 51.5% (1.75 MCM) — holding above the 50% mark. Now 12.8pp above last year\'s 38.7%. New season high.',
      el: 'Η Πολεμίδια στο 51.5% (1.75 ΕΚΜ) — παραμένει πάνω από 50%. Τώρα 12.8μ.π. πάνω από πέρυσι (38.7%). Νέο υψηλό σεζόν.',
      ru: 'Полемидия на 51.5% (1.75 МКМ) — удерживается выше 50%. Сейчас +12.8пп выше прошлогодних 38.7%. Новый максимум.',
    },
    'Achna': {
      en: 'Achna critically low at 2.1% (0.14 MCM), zero inflow all season. Far below last year\'s 18.6%. No recovery in sight.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.1% (0.14 ΕΚΜ), χωρίς εισροή. Πολύ κάτω από πέρυσι (18.6%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.1% (0.14 МКМ), без притока за сезон. Далеко ниже прошлогодних 18.6%. Без перспектив.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 34.9% (18.3 MCM), new season high — 9.9pp above last year\'s 25.0%. Inflow 15.65 MCM since October.',
      el: 'Ο Ασπρόκρεμμος στο 34.9% (18.3 ΕΚΜ), νέο μέγιστο σεζόν — 9.9μ.π. πάνω από πέρυσι. Εισροή 15.65 ΕΚΜ.',
      ru: 'Аспрокреммос на 34.9% (18.3 МКМ) — новый сезонный максимум, +9.9пп выше прошлого года. Приток 15.65 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 45.3% (7.78 MCM) — new season high, 19.1pp above last year\'s 26.2%. Inflow 7.53 MCM since October.',
      el: 'Ο Καννάβιου στο 45.3% (7.78 ΕΚΜ), νέο μέγιστο σεζόν — 19.1μ.π. πάνω από πέρυσι (26.2%). Εισροή 7.53 ΕΚΜ.',
      ru: 'Каннавиу на 45.3% (7.78 МКМ) — новый сезонный максимум, +19.1пп выше прошлогодних 26.2%. Приток 7.53 МКМ.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos crossed 80% (1.75 MCM), approaching capacity. Was 0% last year — exceptional recovery this season.',
      el: 'Ο Μαυροκόλυμπος ξεπέρασε 80% (1.75 ΕΚΜ), πλησιάζει πληρότητα. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос пересёк 80% (1.75 МКМ), приближается к полной вместимости. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 41.0% (9.83 MCM) — new season high, 16.3pp above last year\'s 24.6%. Inflow 7.69 MCM since October.',
      el: 'Ο Εύρετου στο 41.0% (9.83 ΕΚΜ), νέο μέγιστο σεζόν — 16.3μ.π. πάνω από πέρυσι (24.6%). Εισροή 7.69 ΕΚΜ.',
      ru: 'Эвретоу на 41.0% (9.83 МКМ) — новый сезонный максимум, +16.3пп выше прошлогодних 24.6%. Приток 7.69 МКМ.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), overflowing since mid-March. Was 39.0% last year — more than doubled year over year.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Από 39.0% πέρυσι — υπερδιπλασιασμός.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), переливается с середины марта. Год назад 39.0% — удвоение год к году.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), overflowing since mid-March. Up from 43.4% last year — more than doubled.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 43.4% πέρυσι.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), переливается с середины марта. Рост с 43.4% год назад — более чем удвоение.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 100% (0.30 MCM), overflowing since late March. Up from 57.4% last year — fourth Chrysochou dam full.',
      el: 'Η Αγία Μαρίνα στο 100% (0.30 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Από 57.4% πέρυσι — τέταρτο φράγμα Χρυσοχούς.',
      ru: 'Агия Марина на 100% (0.30 МКМ), переливается с конца марта. Рост с 57.4% год назад — четвёртая дамба Хрисоху.',
    },
    'Vyzakia': {
      en: 'Vyzakia surged to 67.6% (1.14 MCM), 24× last year\'s 2.8% — biggest year-over-year ratio of any dam. New season high.',
      el: 'Τα Βυζακιά στο 67.6% (1.14 ΕΚΜ), 24× πέρυσι (2.8%) — μεγαλύτερη ετήσια αναλογία. Νέο υψηλό σεζόν.',
      ru: 'Визакия на 67.6% (1.14 МКМ), в 24 раза выше прошлогодних 2.8% — наибольшее соотношение. Новый максимум.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM), overflowing since late March. Was 22.8% last year — 4.4× year-over-year recovery.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Από 22.8% πέρυσι — 4.4× ανάκαμψη.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ), переливается с конца марта. Был 22.8% год назад — восстановление в 4.4×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-March. Up from 86.8% last year, at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 86.8% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины марта. Рост с 86.8% год назад, на полной мощности.',
    },
    'Tamassos': {
      en: 'Tamassos at 100% (2.80 MCM), overflowing since early April. Was 37.1% last year — recovery of 2.7× year over year.',
      el: 'Ο Ταμασός στο 100% (2.80 ΕΚΜ), υπερχείλιση από αρχές Απριλίου. Από 37.1% πέρυσι — 2.7× υψηλότερα.',
      ru: 'Тамассос на 100% (2.80 МКМ), переполняется с начала апреля. Год назад 37.1%, теперь в 2.7× выше.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 73.6% last year — 1.4× year-over-year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 73.6% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 73.6% год назад — 1.4× год к году.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), overflowing since mid-March. Up from 66.8% last year — 1.5× improvement.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 66.8% πέρυσι — 1.5× βελτίωση.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), переливается с середины марта. Рост с 66.8% год назад — улучшение в 1.5×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (27 Μαρτίου — 3 Απριλίου 2026)

Συνολική αποθήκευση **32.7%** (95.1 ΕΚΜ), αύξηση από 29.9% (87.0 ΕΚΜ) στις 27/3 — **+8.0 ΕΚΜ σε 7 ημέρες**. Τα αποθέματα τώρα **8.5μ.π. πάνω από πέρυσι** (24.2%). Εισροή σεζόν 25/26: 77.2 ΕΚΜ — 4.1× τη χρονιά 24/25. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 13.43 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Γερμασόγεια](/el/dam/germasoyeia/) 37.6%** — νέο μέγιστο σεζόν, +7.5μ.π. σε 7 ημέρες, 11.6μ.π. πάνω από πέρυσι
- **[Βυζακιά](/el/dam/vyzakia/) 67.6%** — 24× πέρυσι (2.8%), +14.3μ.π. σε 7 ημέρες
- **[Μαυροκόλυμπος](/el/dam/mavrokolympos/) ξεπέρασε 80%** (80.3%) — από 0% πέρυσι, πλησιάζει πληρότητα
- [Κούρης](/el/dam/kouris/) 30.4% — νέο μέγιστο, +10.9μ.π. πάνω από πέρυσι. Μεταφορά: 13.43 ΕΚΜ
- [Πολεμίδια](/el/dam/polemidia/) 51.5% — παραμένει πάνω από 50%, +12.8μ.π. πάνω από πέρυσι
- [Εύρετου](/el/dam/evretou/) 41.0% — νέο μέγιστο, +16.3μ.π. πάνω από πέρυσι
- 8 φράγματα υπερχειλίζουν στο 100%
- [Αχνά](/el/dam/achna/) παραμένει στο 2.1% χωρίς εισροή

**Στα μέσα:**
- [Σημαντικές εισροές νερού στα φράγματα](https://news.rik.cy/article/2026/4/2/semantikes-eisroes-nerou-sta-phragmata/) — RIK
- [Ξεπέρασε το 1 ΕΚΜ η εισροή — Υπερχείλισε Ταμασού](https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-1-ekm-i-sinoliki-eisroi-nerou-sta-fragmata-iperxilise-to-fragma-tis-tamasou/) — KitasWeather
- [Ξεπέρασε το 30% η πληρότητα — 3ος καλύτερος Μάρτιος από το 1988](https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-30-tis-ekato-i-sinoliki-plirotita-fragmaton-3os-kaliteros-martios-se-thema-eisroon-apo-to-1988/) — KitasWeather
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (27 марта — 3 апреля 2026)

Общий запас **32.7%** (95.1 МКМ), рост с 29.9% (87.0 МКМ) на 27/3 — **+8.0 МКМ за 7 дней**. Запасы теперь **на 8.5пп выше прошлогодних** (24.2%). Приток сезона 25/26: 77.2 МКМ — в 4.1 раза больше засушливого сезона 24/25. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 13.43 МКМ.

**Основные изменения:**
- **[Гермасойя](/ru/dam/germasoyeia/) 37.6%** — новый максимум, +7.5пп за 7 дней, +11.6пп выше прошлого года
- **[Визакия](/ru/dam/vyzakia/) 67.6%** — в 24 раза выше прошлогодних 2.8%, +14.3пп за 7 дней
- **[Мавроколимпос](/ru/dam/mavrokolympos/) пересёк 80%** (80.3%) — год назад 0%, приближается к полной мощности
- [Курис](/ru/dam/kouris/) 30.4% — новый максимум, +10.9пп выше прошлого года. Перекачка: 13.43 МКМ
- [Полемидия](/ru/dam/polemidia/) 51.5% — удерживается выше 50%, +12.8пп выше прошлого года
- [Эвретоу](/ru/dam/evretou/) 41.0% — новый максимум, +16.3пп выше прошлого года
- 8 дамб переливаются на 100%
- [Ахна](/ru/dam/achna/) остаётся на 2.1% без притока

**В СМИ:**
- [Приток воды в дамбы Кипра — рекордный за 30 лет!](https://evropakipr.com/novosti/pritok-vody-v-damby-kipra-rekordnyy-za-30-let) — Европа Кипр
- [Какая засуха?! Дамба Саиттас переполнилась!](https://evropakipr.com/novosti/kakaya-zasuha-damba-saittas-perepolnilas) — Европа Кипр
- [На Кипре резко вырос приток воды в водохранилищах](https://ruscyprus.com/news/na-kipre-rezko-vyros-pritok-vodyv/54110) — RusCyprus
`;
  }
  return `
### Recent Changes (March 27 — April 3, 2026)

Total storage at **32.7%** (95.1 MCM), up from 29.9% (87.0 MCM) on Mar 27 — **+8.0 MCM in 7 days**. Reserves now **8.5pp above last year** (24.2%). Season total: 77.2 MCM — 4.1× the 2024/25 drought year. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 13.43 MCM.

**Notable movements:**
- **[Germasoyeia](/dam/germasoyeia/) surged to 37.6%** — new season high, +7.5pp in 7 days, 11.6pp above last year
- **[Vyzakia](/dam/vyzakia/) 67.6%** — 24× last year's 2.8%, +14.3pp in 7 days
- **[Mavrokolympos](/dam/mavrokolympos/) crossed 80%** (80.3%) — was 0% last year, approaching capacity
- [Kouris](/dam/kouris/) 30.4% — new season high, 10.9pp above last year. Transfer: 13.43 MCM since October
- [Polemidia](/dam/polemidia/) 51.5% — holding above 50%, 12.8pp above last year
- [Evretou](/dam/evretou/) 41.0% — new season high, 16.3pp above last year
- 8 dams overflowing at 100%
- [Achna](/dam/achna/) still at 2.1% — zero inflow all season

**In the media:**
- [Amount of water in Cyprus' reservoirs nears 100m cubic metres](https://cyprus-mail.com/2026/04/02/amount-of-water-in-cyprus-reservoirs-nears-100m-cubic-metres) — Cyprus Mail
- [Rainfall helpful but Cyprus is far from water security, WDD official tells CNA](https://www.parikiaki.com/2026/03/rainfall-helpful-but-cyprus-is-far-from-water-security-wdd-official-tells-cna) — Parikiaki
- [One more Paphos dam overflows](https://cyprus-mail.com/2026/03/28/one-more-paphos-dam-overflows) — Cyprus Mail
`;
};
