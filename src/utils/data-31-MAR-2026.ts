import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for March 31, 2026 (parsed from 31-MAR-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.202, totalSince: 14.379 }, storage: { current: { amount: 33.815, percentage: 29.4 }, lastYear: { amount: 22.5, percentage: 19.6 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.048, totalSince: 1.614 }, storage: { current: { amount: 1.93, percentage: 11.3 }, lastYear: { amount: 4.679, percentage: 27.4 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.019, totalSince: 0.951 }, storage: { current: { amount: 1.913, percentage: 13.8 }, lastYear: { amount: 3.838, percentage: 27.7 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.033, totalSince: 1.876 }, storage: { current: { amount: 4.425, percentage: 28.5 }, lastYear: { amount: 5.591, percentage: 36.1 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.133, totalSince: 4.901 }, storage: { current: { amount: 4.585, percentage: 34.0 }, lastYear: { amount: 3.53, percentage: 26.1 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.177, totalSince: 13.36 }, storage: { current: { amount: 1.474, percentage: 34.3 }, lastYear: { amount: 2.543, percentage: 59.1 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.011, totalSince: 1.051 }, storage: { current: { amount: 1.688, percentage: 49.6 }, lastYear: { amount: 1.322, percentage: 38.9 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.143, percentage: 2.1 }, lastYear: { amount: 1.288, percentage: 18.9 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.17, totalSince: 15.197 }, storage: { current: { amount: 17.882, percentage: 34.1 }, lastYear: { amount: 13.178, percentage: 25.2 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.084, totalSince: 7.313 }, storage: { current: { amount: 7.59, percentage: 44.2 }, lastYear: { amount: 4.532, percentage: 26.4 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.004, totalSince: 0.824 }, storage: { current: { amount: 1.723, percentage: 79.0 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.115, totalSince: 7.445 }, storage: { current: { amount: 9.595, percentage: 40.0 }, lastYear: { amount: 5.937, percentage: 24.7 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.383, percentage: 38.7 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.372, percentage: 43.3 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.243 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.169, percentage: 56.7 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.03, totalSince: 1.043 }, storage: { current: { amount: 1.044, percentage: 61.8 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 1.413 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.328, percentage: 22.9 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.315, percentage: 86.8 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.016, totalSince: 2.416 }, storage: { current: { amount: 2.77, percentage: 98.9 }, lastYear: { amount: 1.04, percentage: 37.1 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.045 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.471, percentage: 73.6 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.984, percentage: 67.0 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data - updated with 25/26 data through end of March 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:34.639, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:73.708 },
];

export const getReportDate = (): string => "31-MAR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 13.01 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 29.4% (33.8 MCM), new season high — 9.8pp above last year\'s 19.6%. Arminou transfer: 13.01 MCM since October.',
      el: 'Ο Κούρης στο 29.4% (33.8 ΕΚΜ), νέο μέγιστο σεζόν — 9.8μ.π. πάνω από πέρυσι (19.6%). Μεταφορά από Αρμίνου: 13.01 ΕΚΜ.',
      ru: 'Курис на 29.4% (33.8 МКМ) — новый сезонный максимум, +9.8пп выше прошлогодних 19.6%. Перекачка из Арминоу: 13.01 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 11.3% (1.93 MCM), still well below last year\'s 27.4%. One of the weakest recoveries in the Southern Conveyor.',
      el: 'Ο Καλαβασός στο 11.3% (1.93 ΕΚΜ), πολύ κάτω από πέρυσι (27.4%). Μία από τις πιο αδύναμες ανακάμψεις στο Νότιο Αγωγό.',
      ru: 'Калавасос на 11.3% (1.93 МКМ), значительно ниже прошлогодних 27.4%. Одно из слабейших восстановлений Южного конвейера.',
    },
    'Lefkara': {
      en: 'Lefkara at 13.8% (1.91 MCM), still well below last year\'s 27.7%. Seasonal inflow 0.95 MCM — muted recovery so far.',
      el: 'Η Λεύκαρα στο 13.8% (1.91 ΕΚΜ), πολύ κάτω από πέρυσι (27.7%). Εισροή σεζόν 0.95 ΕΚΜ — αδύναμη ανάκαμψη.',
      ru: 'Лефкара на 13.8% (1.91 МКМ), значительно ниже прошлогодних 27.7%. Приток за сезон 0.95 МКМ — слабое восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 28.5% (4.43 MCM), below last year\'s 36.1%. Seasonal inflow 1.88 MCM, steady but unspectacular.',
      el: 'Ο Διπόταμος στο 28.5% (4.43 ΕΚΜ), κάτω από πέρυσι (36.1%). Εισροή σεζόν 1.88 ΕΚΜ, σταθερή αλλά μη εντυπωσιακή.',
      ru: 'Дипотамос на 28.5% (4.43 МКМ), ниже прошлогодних 36.1%. Сезонный приток 1.88 МКМ, стабильный но скромный.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 34.0% (4.59 MCM), new season high — 7.9pp above last year (26.1%). Surged from 14% in two weeks.',
      el: 'Η Γερμασόγεια στο 34.0% (4.59 ΕΚΜ), νέο μέγιστο σεζόν — 7.9μ.π. πάνω από πέρυσι (26.1%). Ανάκαμψη από 14% σε δύο εβδομάδες.',
      ru: 'Гермасойя на 34.0% (4.59 МКМ) — новый сезонный максимум, +7.9пп выше прошлогодних 26.1%. Рост с 14% за две недели.',
    },
    'Arminou': {
      en: 'Arminou at 34.3% (1.47 MCM) as transfers to Kouris intensify — 13.01 MCM pumped since October. Transit corridor role.',
      el: 'Ο Αρμίνου στο 34.3% (1.47 ΕΚΜ) λόγω εντατικής μεταφοράς στον Κούρη — 13.01 ΕΚΜ από Οκτώβριο. Ρόλος διαμετακόμισης.',
      ru: 'Арминоу на 34.3% (1.47 МКМ) из-за интенсивной перекачки в Курис — 13.01 МКМ с октября. Роль транзитного коридора.',
    },
    'Polemidia': {
      en: 'Polemidia at 49.6% (1.69 MCM), closing in on 50% — new season high. Well above last year\'s 38.9%.',
      el: 'Η Πολεμίδια στο 49.6% (1.69 ΕΚΜ), πλησιάζει 50% — νέο μέγιστο σεζόν. Πολύ πάνω από πέρυσι (38.9%).',
      ru: 'Полемидия на 49.6% (1.69 МКМ), приближается к 50% — новый сезонный максимум. Значительно выше прошлогодних 38.9%.',
    },
    'Achna': {
      en: 'Achna critically low at 2.1% (0.14 MCM), zero inflow all season. Far below last year\'s 18.9%. No recovery in sight.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.1% (0.14 ΕΚΜ), χωρίς εισροή. Πολύ κάτω από πέρυσι (18.9%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.1% (0.14 МКМ), без притока за сезон. Далеко ниже прошлогодних 18.9%. Без перспектив.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 34.1% (17.9 MCM), new season high — 8.9pp above last year. Inflow 15.2 MCM since October.',
      el: 'Ο Ασπρόκρεμμος στο 34.1% (17.9 ΕΚΜ), νέο μέγιστο σεζόν — 8.9μ.π. πάνω από πέρυσι. Εισροή 15.2 ΕΚΜ.',
      ru: 'Аспрокреммос на 34.1% (17.9 МКМ) — новый сезонный максимум, +8.9пп выше прошлого года. Приток 15.2 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 44.2% (7.59 MCM), new season high — 17.8pp above last year\'s 26.4%. Inflow 7.31 MCM.',
      el: 'Ο Καννάβιου στο 44.2% (7.59 ΕΚΜ), νέο μέγιστο σεζόν — 17.8μ.π. πάνω από πέρυσι (26.4%). Εισροή 7.31 ΕΚΜ.',
      ru: 'Каннавиу на 44.2% (7.59 МКМ) — новый сезонный максимум, +17.8пп выше прошлогодних 26.4%. Приток 7.31 МКМ.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 79.0% (1.72 MCM), approaching capacity. Was 0% last year — exceptional recovery this season.',
      el: 'Ο Μαυροκόλυμπος στο 79.0% (1.72 ΕΚΜ), πλησιάζει πληρότητα. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 79.0% (1.72 МКМ), приближается к полной вместимости. Год назад на 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou crossed 40.0% (9.60 MCM), new season high — 15.3pp above last year\'s 24.7%. Inflow 7.45 MCM.',
      el: 'Ο Εύρετου ξεπέρασε 40.0% (9.60 ΕΚΜ), νέο μέγιστο σεζόν — 15.3μ.π. πάνω από πέρυσι (24.7%). Εισροή 7.45 ΕΚΜ.',
      ru: 'Эвретоу пересёк 40.0% (9.60 МКМ) — новый сезонный максимум, +15.3пп выше прошлогодних 24.7%. Приток 7.45 МКМ.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), up from 38.7% last year. Overflowing since mid-March.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), αύξηση από 38.7% πέρυσι. Υπερχείλιση από μέσα Μαρτίου.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), рост с 38.7% год назад. Переливается с середины марта.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), up from 43.3% last year. Overflowing since mid-March.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), αύξηση από 43.3% πέρυσι. Υπερχείλιση από μέσα Μαρτίου.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), рост с 43.3% год назад. Переливается с середины марта.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 100% (0.30 MCM), overflowed on March 28. Up from 56.7% last year — third Chrysochou dam full.',
      el: 'Η Αγία Μαρίνα στο 100% (0.30 ΕΚΜ), υπερχείλισε στις 28/3. Από 56.7% πέρυσι — τρίτο φράγμα Χρυσοχούς πλήρες.',
      ru: 'Агия Марина на 100% (0.30 МКМ), переполнилась 28 марта. Рост с 56.7% год назад — третья дамба Хрисоху.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 61.8% (1.04 MCM), 22× last year\'s 2.8% — biggest year-over-year ratio. New season high.',
      el: 'Τα Βυζακιά στο 61.8% (1.04 ΕΚΜ), 22× πέρυσι (2.8%) — μεγαλύτερη ετήσια αναλογία. Νέο υψηλό σεζόν.',
      ru: 'Визакия на 61.8% (1.04 МКМ), в 22 раза выше прошлогодних 2.8% — наибольшее соотношение. Новый максимум.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM), 4.4× last year\'s 22.9%. Overflowing since late March.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ), 4.4× πέρυσι (22.9%). Υπερχείλιση από τέλη Μαρτίου.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ), в 4.4 раза выше прошлогодних 22.9%. Переливается с конца марта.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), up from 86.8% last year. Overflowing since mid-March.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), αύξηση από 86.8% πέρυσι. Υπερχείλιση από μέσα Μαρτίου.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), рост с 86.8% год назад. Переливается с середины марта.',
    },
    'Tamassos': {
      en: 'Tamassos at 98.9% (2.77 MCM), near capacity — 2.7× last year\'s 37.1%. Expected to overflow imminently.',
      el: 'Ο Ταμασός στο 98.9% (2.77 ΕΚΜ), σχεδόν γεμάτος — 2.7× πέρυσι (37.1%). Αναμένεται υπερχείλιση άμεσα.',
      ru: 'Тамассос на 98.9% (2.77 МКМ), почти заполнен — в 2.7 раза выше прошлогодних 37.1%. Ожидается переполнение.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), up from 73.6% last year. Overflowing since late March.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), αύξηση από 73.6% πέρυσι. Υπερχείλιση από τέλη Μαρτίου.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), рост с 73.6% год назад. Переливается с конца марта.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), up from 67.0% last year. Seasonal inflow 2.64 MCM.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), αύξηση από 67.0% πέρυσι. Εισροή σεζόν 2.64 ΕΚΜ.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), рост с 67.0% год назад. Приток за сезон 2.64 МКМ.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (23 — 31 Μαρτίου 2026)

Συνολική αποθήκευση **31.5%** (91.7 ΕΚΜ), αύξηση από 26.9% (78.1 ΕΚΜ) στις 23/3 — **+13.6 ΕΚΜ σε 8 ημέρες**. Τα αποθέματα τώρα **7.2μ.π. πάνω από πέρυσι** (24.3%). Εισροή Μαρτίου 2026: 34.6 ΕΚΜ — 3ος καλύτερος Μάρτιος από το 1988. Εισροή σεζόν 25/26: 73.7 ΕΚΜ — σχεδόν 4× τη χρονιά 24/25. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 13.01 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Εύρετου](/el/dam/evretou/) ξεπέρασε 40.0%** (9.60 ΕΚΜ) — νέο υψηλό σεζόν, 15.3μ.π. πάνω από πέρυσι
- **[Βυζακιά](/el/dam/vyzakia/) 61.8%** — 22× πέρυσι (2.8%), μεγαλύτερη ετήσια αναλογία
- **[Κούρης](/el/dam/kouris/) 29.4%** (33.8 ΕΚΜ) — νέο μέγιστο σεζόν, +9.8μ.π. πάνω από πέρυσι
- **[Γερμασόγεια](/el/dam/germasoyeia/) 34.0%** — νέο μέγιστο, +7.9μ.π. πάνω από πέρυσι
- **[Αρμίνου](/el/dam/arminou/) 34.3%** — 13.01 ΕΚΜ στον [Κούρη](/el/dam/kouris/) φέτος
- [Πολεμίδια](/el/dam/polemidia/) 49.6% — πλησιάζει 50%, νέο μέγιστο σεζόν
- [Ταμασός](/el/dam/tamassos/) 98.9% — αναμένεται υπερχείλιση άμεσα
- [Αχνά](/el/dam/achna/) παραμένει στο 2.1% χωρίς εισροή

**Στα μέσα:**
- [Ξεπέρασε το 30% η πληρότητα — 3ος καλύτερος Μάρτιος από το 1988](https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-30-tis-ekato-i-sinoliki-plirotita-fragmaton-3os-kaliteros-martios-se-thema-eisroon-apo-to-1988/) — KitasWeather
- [Υψίστης σημασίας η κατασκευή φραγμάτων](https://www.taxidromos24.com/2026/03/28/%CF%85%CF%88%CE%AF%CF%83%CF%84%CE%B7%CF%82-%CF%83%CE%B7%CE%BC%CE%B1%CF%83%CE%AF%CE%B1%CF%82-%CF%84%CE%B1-%CF%86%CF%81%CE%AC%CE%B3%CE%BC%CE%B1%CF%84%CE%B1-%CF%83%CF%84%CE%B7%CE%BD-%CE%BA%CF%8D%CF%80/) — Taxidromos24
- [Ρεκόρ εισροής νερού στα φράγματα το τελευταίο τριήμερο](https://www.alphanews.live/cyprus/rekor-eisrois-nerou-sta-fragmata-to-teleftaio-triimero/) — AlphaNews
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (23 — 31 марта 2026)

Общий запас **31.5%** (91.7 МКМ), рост с 26.9% (78.1 МКМ) на 23/3 — **+13.6 МКМ за 8 дней**. Запасы теперь **на 7.2пп выше прошлогодних** (24.3%). Приток за март 2026: 34.6 МКМ — 3-й лучший март с 1988 года. Приток сезона 25/26: 73.7 МКМ — почти в 4 раза больше засушливого сезона 24/25. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 13.01 МКМ.

**Основные изменения:**
- **[Эвретоу](/ru/dam/evretou/) превысил 40.0%** (9.60 МКМ) — новый сезонный максимум, +15.3пп выше прошлого года
- **[Визакия](/ru/dam/vyzakia/) 61.8%** — в 22 раза выше прошлогодних 2.8%, наибольшее соотношение
- **[Курис](/ru/dam/kouris/) 29.4%** (33.8 МКМ) — новый сезонный максимум, +9.8пп выше прошлого года
- **[Гермасойя](/ru/dam/germasoyeia/) 34.0%** — новый максимум, +7.9пп выше прошлого года
- **[Арминоу](/ru/dam/arminou/) 34.3%** — 13.01 МКМ перекачано в [Курис](/ru/dam/kouris/) за сезон
- [Полемидия](/ru/dam/polemidia/) 49.6% — приближается к 50%, новый сезонный максимум
- [Тамассос](/ru/dam/tamassos/) 98.9% — ожидается переполнение в ближайшее время
- [Ахна](/ru/dam/achna/) остаётся на 2.1% без притока

**В СМИ:**
- [Третья дамба переполнилась в Пафосе](https://lenta.cy/tretja-damba-perepolnilas-v-pafose/) — Lenta.cy
- [На Кипре резко вырос приток воды в водохранилищах](https://ruscyprus.com/news/na-kipre-rezko-vyros-pritok-vodyv/54110) — RusCyprus
- [На Кипре — сезон дождей, но власти утверждают, что засуха продолжается](https://evropakipr.com/istorii/na-kipre-sezon-dozhdey-pochemu-vlasti-utverzhdayut-chto-na-ostrove-chetvertyy-god) — Европа Кипр
`;
  }
  return `
### Recent Changes (March 23 — 31, 2026)

Total storage at **31.5%** (91.7 MCM), up from 26.9% (78.1 MCM) on Mar 23 — **+13.6 MCM in 8 days**. Reserves now **7.2pp above last year** (24.3%). March 2026 inflow: 34.6 MCM — 3rd best March since 1988. Season total: 73.7 MCM — nearly 4× the 2024/25 drought year. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 13.01 MCM.

**Notable movements:**
- **[Evretou](/dam/evretou/) crossed 40.0%** (9.60 MCM) — new season high, 15.3pp above last year
- **[Vyzakia](/dam/vyzakia/) at 61.8%** — 22× last year's 2.8%, biggest year-over-year ratio
- **[Kouris](/dam/kouris/) at 29.4%** (33.8 MCM) — new season high, 9.8pp above last year
- **[Germasoyeia](/dam/germasoyeia/) at 34.0%** — new season high, 7.9pp above last year
- **[Arminou](/dam/arminou/) at 34.3%** — 13.01 MCM pumped to [Kouris](/dam/kouris/) this season
- [Polemidia](/dam/polemidia/) at 49.6% — closing in on 50%, new season high
- [Tamassos](/dam/tamassos/) at 98.9% — expected to overflow imminently
- [Achna](/dam/achna/) still at 2.1% — zero inflow all season

**In the media:**
- [One more Paphos dam overflows](https://cyprus-mail.com/2026/03/28/one-more-paphos-dam-overflows) — Cyprus Mail
- [March rains boost Cyprus' water reserves as dam inflows reach 12.3 million cubic meters](https://famagusta-gazette.com/march-rains-boost-cyprus-water-reserves-as-dam-inflows-reach-12-3-million-cubic-meters/) — Famagusta Gazette
- [Rainfall helpful but Cyprus is far from water security, WDD official tells CNA](https://www.parikiaki.com/2026/03/rainfall-helpful-but-cyprus-is-far-from-water-security-wdd-official-tells-cna) — Parikiaki
`;
};
