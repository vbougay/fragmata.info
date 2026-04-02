import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for April 2, 2026 (parsed from 02-APR-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.246, totalSince: 14.771 }, storage: { current: { amount: 34.447, percentage: 30.0 }, lastYear: { amount: 22.477, percentage: 19.5 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.073, totalSince: 1.724 }, storage: { current: { amount: 2.034, percentage: 11.9 }, lastYear: { amount: 4.659, percentage: 27.2 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.019, totalSince: 0.984 }, storage: { current: { amount: 1.944, percentage: 14.0 }, lastYear: { amount: 3.795, percentage: 27.4 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.05, totalSince: 1.954 }, storage: { current: { amount: 4.507, percentage: 29.1 }, lastYear: { amount: 5.616, percentage: 36.2 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.124, totalSince: 5.114 }, storage: { current: { amount: 4.796, percentage: 35.5 }, lastYear: { amount: 3.521, percentage: 26.1 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.18, totalSince: 13.684 }, storage: { current: { amount: 1.51, percentage: 35.1 }, lastYear: { amount: 2.55, percentage: 59.3 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.038, totalSince: 1.096 }, storage: { current: { amount: 1.733, percentage: 51.0 }, lastYear: { amount: 1.317, percentage: 38.7 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.143, percentage: 2.1 }, lastYear: { amount: 1.284, percentage: 18.9 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.17, totalSince: 15.498 }, storage: { current: { amount: 18.155, percentage: 34.7 }, lastYear: { amount: 13.123, percentage: 25.1 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.089, totalSince: 7.48 }, storage: { current: { amount: 7.737, percentage: 45.1 }, lastYear: { amount: 4.516, percentage: 26.3 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.002, totalSince: 0.828 }, storage: { current: { amount: 1.734, percentage: 79.5 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.096, totalSince: 7.61 }, storage: { current: { amount: 9.756, percentage: 40.7 }, lastYear: { amount: 5.917, percentage: 24.7 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.386, percentage: 39.0 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.373, percentage: 43.4 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.243 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.17, percentage: 57.0 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.031, totalSince: 1.104 }, storage: { current: { amount: 1.105, percentage: 65.4 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 1.413 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.326, percentage: 22.8 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.315, percentage: 86.8 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.016, totalSince: 2.448 }, storage: { current: { amount: 2.8, percentage: 100.0 }, lastYear: { amount: 1.04, percentage: 37.1 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.047 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.471, percentage: 73.6 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.977, percentage: 66.8 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data - updated with 25/26 data through April 2, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:1.118, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:75.601 },
];

export const getReportDate = (): string => "02-APR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 13.29 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris crossed 30.0% (34.4 MCM) — new season high, 10.5pp above last year\'s 19.5%. Arminou transfer: 13.29 MCM.',
      el: 'Ο Κούρης ξεπέρασε 30.0% (34.4 ΕΚΜ) — νέο μέγιστο σεζόν, 10.5μ.π. πάνω από πέρυσι (19.5%). Μεταφορά: 13.29 ΕΚΜ.',
      ru: 'Курис пересёк 30.0% (34.4 МКМ) — новый сезонный максимум, +10.5пп выше прошлогодних 19.5%. Перекачка: 13.29 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 11.9% (2.03 MCM), still well below last year\'s 27.2%. One of the weakest recoveries in the Southern Conveyor.',
      el: 'Ο Καλαβασός στο 11.9% (2.03 ΕΚΜ), πολύ κάτω από πέρυσι (27.2%). Μία από τις πιο αδύναμες ανακάμψεις στο Νότιο Αγωγό.',
      ru: 'Калавасос на 11.9% (2.03 МКМ), значительно ниже прошлогодних 27.2%. Одно из слабейших восстановлений Южного конвейера.',
    },
    'Lefkara': {
      en: 'Lefkara at 14.0% (1.94 MCM), still well below last year\'s 27.4%. Seasonal inflow 0.98 MCM — muted recovery so far.',
      el: 'Η Λεύκαρα στο 14.0% (1.94 ΕΚΜ), πολύ κάτω από πέρυσι (27.4%). Εισροή σεζόν 0.98 ΕΚΜ — αδύναμη ανάκαμψη.',
      ru: 'Лефкара на 14.0% (1.94 МКМ), значительно ниже прошлогодних 27.4%. Приток за сезон 0.98 МКМ — слабое восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 29.1% (4.51 MCM), below last year\'s 36.2%. Seasonal inflow 1.95 MCM, steady but unspectacular.',
      el: 'Ο Διπόταμος στο 29.1% (4.51 ΕΚΜ), κάτω από πέρυσι (36.2%). Εισροή σεζόν 1.95 ΕΚΜ, σταθερή αλλά μη εντυπωσιακή.',
      ru: 'Дипотамос на 29.1% (4.51 МКМ), ниже прошлогодних 36.2%. Сезонный приток 1.95 МКМ, стабильный но скромный.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 35.5% (4.80 MCM), new season high — 9.4pp above last year (26.1%). Strong March surge continues.',
      el: 'Η Γερμασόγεια στο 35.5% (4.80 ΕΚΜ), νέο μέγιστο σεζόν — 9.4μ.π. πάνω από πέρυσι (26.1%). Ισχυρή ανάκαμψη Μαρτίου.',
      ru: 'Гермасойя на 35.5% (4.80 МКМ) — новый сезонный максимум, +9.4пп выше прошлогодних 26.1%. Мартовский рост продолжается.',
    },
    'Arminou': {
      en: 'Arminou at 35.1% (1.51 MCM) as transfers to Kouris continue — 13.29 MCM pumped since October. Transit corridor role.',
      el: 'Ο Αρμίνου στο 35.1% (1.51 ΕΚΜ) λόγω μεταφοράς στον Κούρη — 13.29 ΕΚΜ από Οκτώβριο. Ρόλος διαμετακόμισης.',
      ru: 'Арминоу на 35.1% (1.51 МКМ) из-за перекачки в Курис — 13.29 МКМ с октября. Роль транзитного коридора.',
    },
    'Polemidia': {
      en: 'Polemidia crossed 51.0% (1.73 MCM) — new season high, first time above 50%. Well above last year\'s 38.7%.',
      el: 'Η Πολεμίδια ξεπέρασε 51.0% (1.73 ΕΚΜ) — νέο μέγιστο σεζόν, πρώτη φορά πάνω από 50%. Πάνω από πέρυσι (38.7%).',
      ru: 'Полемидия пересекла 51.0% (1.73 МКМ) — новый сезонный максимум, впервые выше 50%. Значительно выше прошлогодних 38.7%.',
    },
    'Achna': {
      en: 'Achna critically low at 2.1% (0.14 MCM), zero inflow all season. Far below last year\'s 18.9%. No recovery in sight.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.1% (0.14 ΕΚΜ), χωρίς εισροή. Πολύ κάτω από πέρυσι (18.9%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.1% (0.14 МКМ), без притока за сезон. Далеко ниже прошлогодних 18.9%. Без перспектив.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 34.7% (18.2 MCM), new season high — 9.6pp above last year. Inflow 15.5 MCM since October.',
      el: 'Ο Ασπρόκρεμμος στο 34.7% (18.2 ΕΚΜ), νέο μέγιστο σεζόν — 9.6μ.π. πάνω από πέρυσι. Εισροή 15.5 ΕΚΜ.',
      ru: 'Аспрокреммос на 34.7% (18.2 МКМ) — новый сезонный максимум, +9.6пп выше прошлого года. Приток 15.5 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 45.1% (7.74 MCM), new season high — 18.8pp above last year\'s 26.3%. Inflow 7.48 MCM.',
      el: 'Ο Καννάβιου στο 45.1% (7.74 ΕΚΜ), νέο μέγιστο σεζόν — 18.8μ.π. πάνω από πέρυσι (26.3%). Εισροή 7.48 ΕΚΜ.',
      ru: 'Каннавиу на 45.1% (7.74 МКМ) — новый сезонный максимум, +18.8пп выше прошлогодних 26.3%. Приток 7.48 МКМ.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 79.5% (1.73 MCM), approaching capacity. Was 0% last year — exceptional recovery this season.',
      el: 'Ο Μαυροκόλυμπος στο 79.5% (1.73 ΕΚΜ), πλησιάζει πληρότητα. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 79.5% (1.73 МКМ), приближается к полной вместимости. Год назад на 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 40.7% (9.76 MCM), new season high — 16.0pp above last year\'s 24.7%. Inflow 7.61 MCM since October.',
      el: 'Ο Εύρετου στο 40.7% (9.76 ΕΚΜ), νέο μέγιστο σεζόν — 16.0μ.π. πάνω από πέρυσι (24.7%). Εισροή 7.61 ΕΚΜ.',
      ru: 'Эвретоу на 40.7% (9.76 МКМ) — новый сезонный максимум, +16.0пп выше прошлогодних 24.7%. Приток 7.61 МКМ.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), up from 39.0% last year. Overflowing since mid-March.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), αύξηση από 39.0% πέρυσι. Υπερχείλιση από μέσα Μαρτίου.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), рост с 39.0% год назад. Переливается с середины марта.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), up from 43.4% last year. Overflowing since mid-March.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), αύξηση από 43.4% πέρυσι. Υπερχείλιση από μέσα Μαρτίου.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), рост с 43.4% год назад. Переливается с середины марта.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 100% (0.30 MCM), overflowing since late March. Up from 57.0% last year — fourth Chrysochou dam full.',
      el: 'Η Αγία Μαρίνα στο 100% (0.30 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Από 57.0% πέρυσι — τέταρτο φράγμα Χρυσοχούς.',
      ru: 'Агия Марина на 100% (0.30 МКМ), переполняется с конца марта. Рост с 57.0% год назад — четвёртая дамба Хрисоху.',
    },
    'Vyzakia': {
      en: 'Vyzakia surged to 65.4% (1.11 MCM), 23× last year\'s 2.8% — biggest year-over-year ratio. New season high.',
      el: 'Τα Βυζακιά στο 65.4% (1.11 ΕΚΜ), 23× πέρυσι (2.8%) — μεγαλύτερη ετήσια αναλογία. Νέο υψηλό σεζόν.',
      ru: 'Визакия на 65.4% (1.11 МКМ), в 23 раза выше прошлогодних 2.8% — наибольшее соотношение. Новый максимум.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM), 4.4× last year\'s 22.8%. Overflowing since late March.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ), 4.4× πέρυσι (22.8%). Υπερχείλιση από τέλη Μαρτίου.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ), в 4.4 раза выше прошлогодних 22.8%. Переливается с конца марта.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), up from 86.8% last year. Overflowing since mid-March.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), αύξηση από 86.8% πέρυσι. Υπερχείλιση από μέσα Μαρτίου.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), рост с 86.8% год назад. Переливается с середины марта.',
    },
    'Tamassos': {
      en: 'Tamassos hit 100% (2.80 MCM) — 9th dam to overflow this season. Was 37.1% last year, now 2.7× higher.',
      el: 'Ο Ταμασός στο 100% (2.80 ΕΚΜ) — 9ο φράγμα που υπερχειλίζει. Από 37.1% πέρυσι, τώρα 2.7× υψηλότερα.',
      ru: 'Тамассос достиг 100% (2.80 МКМ) — 9-я дамба, переполнившаяся в этом сезоне. Год назад 37.1%, теперь в 2.7× выше.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), up from 73.6% last year. Overflowing since late March.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), αύξηση από 73.6% πέρυσι. Υπερχείλιση από τέλη Μαρτίου.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), рост с 73.6% год назад. Переливается с конца марта.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), up from 66.8% last year. Seasonal inflow 2.64 MCM.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), αύξηση από 66.8% πέρυσι. Εισροή σεζόν 2.64 ΕΚΜ.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), рост с 66.8% год назад. Приток за сезон 2.64 МКМ.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (24 Μαρτίου — 2 Απριλίου 2026)

Συνολική αποθήκευση **32.2%** (93.5 ΕΚΜ), αύξηση από 27.7% (80.6 ΕΚΜ) στις 24/3 — **+12.9 ΕΚΜ σε 9 ημέρες**. Τα αποθέματα τώρα **8.0μ.π. πάνω από πέρυσι** (24.2%). Εισροή σεζόν 25/26: 75.6 ΕΚΜ — 4× τη χρονιά 24/25. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 13.29 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Κούρης](/el/dam/kouris/) ξεπέρασε 30.0%** (34.4 ΕΚΜ) — ορόσημο για το μεγαλύτερο φράγμα, +10.5μ.π. πάνω από πέρυσι
- **[Πολεμίδια](/el/dam/polemidia/) ξεπέρασε 51.0%** — πρώτη φορά πάνω από 50% φέτος
- **[Ταμασός](/el/dam/tamassos/) 100%** — 9ο φράγμα που υπερχειλίζει τη σεζόν
- **[Βυζακιά](/el/dam/vyzakia/) 65.4%** (+3.6μ.π. σε 2 ημέρες) — 23× πέρυσι (2.8%)
- **[Γερμασόγεια](/el/dam/germasoyeia/) 35.5%** — νέο μέγιστο, +9.4μ.π. πάνω από πέρυσι
- [Καννάβιου](/el/dam/kannaviou/) 45.1% — νέο μέγιστο, +18.8μ.π. πάνω από πέρυσι
- [Αρμίνου](/el/dam/arminou/) 35.1% — 13.29 ΕΚΜ στον [Κούρη](/el/dam/kouris/) φέτος
- [Αχνά](/el/dam/achna/) παραμένει στο 2.1% χωρίς εισροή

**Στα μέσα:**
- [Ξεπέρασε το 30% η πληρότητα — 3ος καλύτερος Μάρτιος από το 1988](https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-30-tis-ekato-i-sinoliki-plirotita-fragmaton-3os-kaliteros-martios-se-thema-eisroon-apo-to-1988/) — KitasWeather
- [Υψίστης σημασίας η κατασκευή φραγμάτων](https://www.taxidromos24.com/2026/03/28/%CF%85%CF%88%CE%AF%CF%83%CF%84%CE%B7%CF%82-%CF%83%CE%B7%CE%BC%CE%B1%CF%83%CE%AF%CE%B1%CF%82-%CF%84%CE%B1-%CF%86%CF%81%CE%AC%CE%B3%CE%BC%CE%B1%CF%84%CE%B1-%CF%83%CF%84%CE%B7%CE%BD-%CE%BA%CF%8D%CF%80/) — Taxidromos24
- [Ρεκόρ εισροής νερού στα φράγματα το τελευταίο τριήμερο](https://www.alphanews.live/cyprus/rekor-eisrois-nerou-sta-fragmata-to-teleftaio-triimero/) — AlphaNews
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (24 марта — 2 апреля 2026)

Общий запас **32.2%** (93.5 МКМ), рост с 27.7% (80.6 МКМ) на 24/3 — **+12.9 МКМ за 9 дней**. Запасы теперь **на 8.0пп выше прошлогодних** (24.2%). Приток сезона 25/26: 75.6 МКМ — в 4 раза больше засушливого сезона 24/25. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 13.29 МКМ.

**Основные изменения:**
- **[Курис](/ru/dam/kouris/) пересёк 30.0%** (34.4 МКМ) — веха для крупнейшей дамбы, +10.5пп выше прошлого года
- **[Полемидия](/ru/dam/polemidia/) пересекла 51.0%** — впервые выше 50% в этом сезоне
- **[Тамассос](/ru/dam/tamassos/) 100%** — 9-я дамба, переполнившаяся в этом сезоне
- **[Визакия](/ru/dam/vyzakia/) 65.4%** (+3.6пп за 2 дня) — в 23 раза выше прошлогодних 2.8%
- **[Гермасойя](/ru/dam/germasoyeia/) 35.5%** — новый максимум, +9.4пп выше прошлого года
- [Каннавиу](/ru/dam/kannaviou/) 45.1% — новый максимум, +18.8пп выше прошлого года
- [Арминоу](/ru/dam/arminou/) 35.1% — 13.29 МКМ перекачано в [Курис](/ru/dam/kouris/) за сезон
- [Ахна](/ru/dam/achna/) остаётся на 2.1% без притока

**В СМИ:**
- [Третья дамба переполнилась в Пафосе](https://lenta.cy/tretja-damba-perepolnilas-v-pafose/) — Lenta.cy
- [На Кипре резко вырос приток воды в водохранилищах](https://ruscyprus.com/news/na-kipre-rezko-vyros-pritok-vodyv/54110) — RusCyprus
- [На Кипре — сезон дождей, но власти утверждают, что засуха продолжается](https://evropakipr.com/istorii/na-kipre-sezon-dozhdey-pochemu-vlasti-utverzhdayut-chto-na-ostrove-chetvertyy-god) — Европа Кипр
`;
  }
  return `
### Recent Changes (March 24 — April 2, 2026)

Total storage at **32.2%** (93.5 MCM), up from 27.7% (80.6 MCM) on Mar 24 — **+12.9 MCM in 9 days**. Reserves now **8.0pp above last year** (24.2%). Season total: 75.6 MCM — 4× the 2024/25 drought year. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 13.29 MCM.

**Notable movements:**
- **[Kouris](/dam/kouris/) crossed 30.0%** (34.4 MCM) — milestone for the largest dam, 10.5pp above last year
- **[Polemidia](/dam/polemidia/) crossed 51.0%** — first time above 50% this season
- **[Tamassos](/dam/tamassos/) hit 100%** — 9th dam to overflow this season
- **[Vyzakia](/dam/vyzakia/) at 65.4%** (+3.6pp in 2 days) — 23× last year's 2.8%
- **[Germasoyeia](/dam/germasoyeia/) at 35.5%** — new season high, 9.4pp above last year
- [Kannaviou](/dam/kannaviou/) at 45.1% — new season high, 18.8pp above last year
- [Arminou](/dam/arminou/) at 35.1% — 13.29 MCM pumped to [Kouris](/dam/kouris/) this season
- [Achna](/dam/achna/) still at 2.1% — zero inflow all season

**In the media:**
- [One more Paphos dam overflows](https://cyprus-mail.com/2026/03/28/one-more-paphos-dam-overflows) — Cyprus Mail
- [March rains boost Cyprus' water reserves as dam inflows reach 12.3 million cubic meters](https://famagusta-gazette.com/march-rains-boost-cyprus-water-reserves-as-dam-inflows-reach-12-3-million-cubic-meters/) — Famagusta Gazette
- [Rainfall helpful but Cyprus is far from water security, WDD official tells CNA](https://www.parikiaki.com/2026/03/rainfall-helpful-but-cyprus-is-far-from-water-security-wdd-official-tells-cna) — Parikiaki
`;
};
