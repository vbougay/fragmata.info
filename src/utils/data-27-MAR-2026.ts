import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for March 27, 2026 (parsed from 27-MAR-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.304, totalSince: 13.367 }, storage: { current: { amount: 31.772, percentage: 27.6 }, lastYear: { amount: 22.731, percentage: 19.8 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.072, totalSince: 1.384 }, storage: { current: { amount: 1.71, percentage: 10.0 }, lastYear: { amount: 4.726, percentage: 27.6 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.024, totalSince: 0.866 }, storage: { current: { amount: 1.832, percentage: 13.2 }, lastYear: { amount: 3.913, percentage: 28.3 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.043, totalSince: 1.717 }, storage: { current: { amount: 4.259, percentage: 27.5 }, lastYear: { amount: 5.566, percentage: 35.9 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.219, totalSince: 4.377 }, storage: { current: { amount: 4.071, percentage: 30.2 }, lastYear: { amount: 3.559, percentage: 26.4 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.324, totalSince: 12.515 }, storage: { current: { amount: 1.745, percentage: 40.6 }, lastYear: { amount: 2.528, percentage: 58.8 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.045, totalSince: 1.021 }, storage: { current: { amount: 1.659, percentage: 48.8 }, lastYear: { amount: 1.329, percentage: 39.1 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.143, percentage: 2.1 }, lastYear: { amount: 1.345, percentage: 19.8 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.356, totalSince: 14.32 }, storage: { current: { amount: 17.075, percentage: 32.6 }, lastYear: { amount: 13.297, percentage: 25.4 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.182, totalSince: 6.899 }, storage: { current: { amount: 7.215, percentage: 42.0 }, lastYear: { amount: 4.567, percentage: 26.6 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.009, totalSince: 0.805 }, storage: { current: { amount: 1.61, percentage: 73.9 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.177, totalSince: 6.96 }, storage: { current: { amount: 9.117, percentage: 38.0 }, lastYear: { amount: 5.976, percentage: 24.9 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.378, percentage: 38.2 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.37, percentage: 43.0 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.008, totalSince: 0.239 }, storage: { current: { amount: 0.294, percentage: 98.7 }, lastYear: { amount: 0.166, percentage: 55.7 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.038, totalSince: 0.899 }, storage: { current: { amount: 0.9, percentage: 53.3 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 1.413 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.33, percentage: 23.1 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.315, percentage: 86.8 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.061, totalSince: 2.322 }, storage: { current: { amount: 2.68, percentage: 95.7 }, lastYear: { amount: 1.051, percentage: 37.5 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.041 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.473, percentage: 73.7 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.989, percentage: 67.1 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data - updated with new 25/26 data from current report
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:29.811, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:68.88 },
];

export const getReportDate = (): string => "27-MAR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 11.83 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 27.6% (31.8 MCM), new season high — 8pp above last year\'s 19.8%. Transfer from Arminou: 11.83 MCM since October.',
      el: 'Ο Κούρης στο 27.6% (31.8 ΕΚΜ), νέο μέγιστο σεζόν — 8μ.π. πάνω από πέρυσι (19.8%). Μεταφορά από Αρμίνου: 11.83 ΕΚΜ.',
      ru: 'Курис на 27.6% (31.8 МКМ) — новый сезонный максимум, +8пп выше прошлогодних 19.8%. Перекачка из Арминоу: 11.83 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos crossed 10% at 10.0% (1.71 MCM), still well below last year\'s 27.6%. Seasonal inflow 1.38 MCM.',
      el: 'Ο Καλαβασός ξεπέρασε το 10% στο 10.0% (1.71 ΕΚΜ), πολύ κάτω από πέρυσι (27.6%). Εισροή σεζόν 1.38 ΕΚΜ.',
      ru: 'Калавасос пересёк 10% — 10.0% (1.71 МКМ), значительно ниже прошлогодних 27.6%. Приток за сезон 1.38 МКМ.',
    },
    'Lefkara': {
      en: 'Lefkara at 13.2% (1.83 MCM), still well below last year\'s 28.3%. Seasonal inflow 0.87 MCM.',
      el: 'Η Λεύκαρα στο 13.2% (1.83 ΕΚΜ), πολύ κάτω από πέρυσι (28.3%). Εισροή σεζόν 0.87 ΕΚΜ.',
      ru: 'Лефкара на 13.2% (1.83 МКМ), значительно ниже прошлогодних 28.3%. Приток за сезон 0.87 МКМ.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 27.5% (4.26 MCM), below last year\'s 35.9%. Seasonal inflow 1.72 MCM.',
      el: 'Ο Διπόταμος στο 27.5% (4.26 ΕΚΜ), κάτω από πέρυσι (35.9%). Εισροή σεζόν 1.72 ΕΚΜ.',
      ru: 'Дипотамос на 27.5% (4.26 МКМ), ниже прошлогодних 35.9%. Сезонный приток 1.72 МКМ.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia crossed 30% at 30.2% (4.07 MCM) — new season high, now above last year (26.4%). Doubled in one week.',
      el: 'Η Γερμασόγεια ξεπέρασε το 30% στο 30.2% (4.07 ΕΚΜ) — νέο μέγιστο σεζόν, τώρα πάνω από πέρυσι (26.4%).',
      ru: 'Гермасойя пересекла 30% — 30.2% (4.07 МКМ), новый сезонный максимум, выше прошлогодних 26.4%. Удвоилась за неделю.',
    },
    'Arminou': {
      en: 'Arminou at 40.6% (1.75 MCM), dropped 5pp in one day from heavy Kouris transfer — 11.83 MCM pumped since October.',
      el: 'Ο Αρμίνου στο 40.6% (1.75 ΕΚΜ), πτώση 5μ.π. σε μία ημέρα λόγω μεταφοράς στον Κούρη — 11.83 ΕΚΜ από Οκτώβριο.',
      ru: 'Арминоу на 40.6% (1.75 МКМ), снизился на 5пп за день из-за перекачки в Курис — 11.83 МКМ с октября.',
    },
    'Polemidia': {
      en: 'Polemidia at 48.8% (1.66 MCM), approaching 50% — new season high. Above last year\'s 39.1%.',
      el: 'Η Πολεμίδια στο 48.8% (1.66 ΕΚΜ), πλησιάζει 50% — νέο μέγιστο σεζόν. Πάνω από πέρυσι (39.1%).',
      ru: 'Полемидия на 48.8% (1.66 МКМ), приближается к 50% — новый сезонный максимум. Выше прошлогодних 39.1%.',
    },
    'Achna': {
      en: 'Achna critically low at 2.1% (0.14 MCM), zero inflow this season. Far below last year\'s 19.8%.',
      el: 'Η Αχνα κρίσιμα χαμηλά στο 2.1% (0.14 ΕΚΜ), χωρίς εισροή. Πολύ κάτω από πέρυσι (19.8%).',
      ru: 'Ахна критически низкая — 2.1% (0.14 МКМ), без притока за сезон. Далеко ниже прошлогодних 19.8%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 32.6% (17.1 MCM), new season high — 7pp above last year. Inflow 14.32 MCM since October.',
      el: 'Ο Ασπρόκρεμμος στο 32.6% (17.1 ΕΚΜ), νέο μέγιστο σεζόν — 7μ.π. πάνω από πέρυσι. Εισροή 14.32 ΕΚΜ.',
      ru: 'Аспрокреммос на 32.6% (17.1 МКМ) — новый сезонный максимум, +7пп выше прошлого года. Приток 14.32 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 42.0% (7.22 MCM), new season high — 15pp above last year\'s 26.6%. Inflow 6.9 MCM.',
      el: 'Ο Καννάβιου στο 42.0% (7.22 ΕΚΜ), νέο μέγιστο σεζόν — 15μ.π. πάνω από πέρυσι (26.6%). Εισροή 6.9 ΕΚΜ.',
      ru: 'Каннавиу на 42.0% (7.22 МКМ) — новый сезонный максимум, +15пп выше прошлогодних 26.6%. Приток 6.9 МКМ.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 73.9% (1.61 MCM), new season high. Was 0% last year — exceptional recovery.',
      el: 'Ο Μαυροκόλυμπος στο 73.9% (1.61 ΕΚΜ), νέο μέγιστο σεζόν. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 73.9% (1.61 МКМ) — новый сезонный максимум. Год назад был на 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 38.0% (9.12 MCM), new season high — 13pp above last year\'s 24.9%. Inflow 6.96 MCM.',
      el: 'Ο Εύρετου στο 38.0% (9.12 ΕΚΜ), νέο μέγιστο σεζόν — 13μ.π. πάνω από πέρυσι (24.9%). Εισροή 6.96 ΕΚΜ.',
      ru: 'Эвретоу на 38.0% (9.12 МКМ) — новый сезонный максимум, +13пп выше прошлогодних 24.9%. Приток 6.96 МКМ.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), up from 38.2% last year. Overflowing.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), αύξηση από 38.2% πέρυσι. Υπερχείλιση.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), рост с 38.2% год назад. Переливается.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), up from 43.0% last year.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), αύξηση από 43.0% πέρυσι.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), рост с 43.0% год назад.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 98.7% (0.29 MCM), nearly full. Up from 55.7% last year.',
      el: 'Η Αγία Μαρίνα στο 98.7% (0.29 ΕΚΜ), σχεδόν γεμάτη. Αύξηση από 55.7% πέρυσι.',
      ru: 'Агия Марина на 98.7% (0.29 МКМ), почти заполнена. Рост с 55.7% год назад.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 53.3% (0.9 MCM), 19\u00d7 last year\'s 2.8%. Remarkable recovery continues.',
      el: 'Τα Βυζακιά στο 53.3% (0.9 ΕΚΜ), 19\u00d7 πέρυσι (2.8%). Εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 53.3% (0.9 МКМ), в 19 раз выше прошлогодних 2.8%. Замечательное восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM), 4.3\u00d7 last year\'s 23.1%. Overflowing since late March.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ), 4.3\u00d7 πέρυσι (23.1%). Υπερχείλιση από τέλη Μαρτίου.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ), в 4.3 раза выше прошлогодних 23.1%. Переливается с конца марта.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), up from 86.8% last year.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), αύξηση από 86.8% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), рост с 86.8% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 95.7% (2.68 MCM), 2.6\u00d7 last year\'s 37.5%. Approaching full capacity.',
      el: 'Ο Ταμασός στο 95.7% (2.68 ΕΚΜ), 2.6\u00d7 πέρυσι (37.5%). Πλησιάζει χωρητικότητα.',
      ru: 'Тамассос на 95.7% (2.68 МКМ), в 2.6 раза выше прошлогодних 37.5%. Приближается к полной вместимости.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), up from 73.7% last year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), αύξηση από 73.7% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), рост с 73.7% год назад.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), up from 67.1% last year. Seasonal inflow 2.64 MCM.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), αύξηση από 67.1% πέρυσι. Εισροή σεζόν 2.64 ΕΚΜ.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), рост с 67.1% год назад. Приток за сезон 2.64 МКМ.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (20 — 27 Μαρτίου 2026)

Συνολική αποθήκευση **29.9%** (87.0 ΕΚΜ), αύξηση από 22.7% (66.1 ΕΚΜ) στις 20/3 — +20.9 ΕΚΜ σε 7 ημέρες. Τα αποθέματα τώρα **5.4μ.π. πάνω από πέρυσι** (24.5%, 71.1 ΕΚΜ). Εισροή σεζόν 25/26: 68.9 ΕΚΜ — 3.7× από τη ξηρή χρονιά 24/25. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 11.83 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Γερμασόγεια](/el/dam/germasoyeia/) ξεπέρασε το 30%** στο 30.2% (4.07 ΕΚΜ) — υπερδιπλασιάστηκε από 14.1% σε μία εβδομάδα, τώρα πάνω από πέρυσι (26.4%)
- **[Κούρης](/el/dam/kouris/) 27.6%** (31.8 ΕΚΜ) — +7.4 ΕΚΜ σε 7 ημέρες, νέο μέγιστο σεζόν, +8μ.π. πάνω από πέρυσι
- **[Καννάβιου](/el/dam/kannaviou/) 42.0%** — +12.7μ.π. σε μία εβδομάδα, νέο μέγιστο, +15μ.π. πάνω από πέρυσι
- **[Ασπρόκρεμμος](/el/dam/asprokremmos/) 32.6%** (17.1 ΕΚΜ) — +4.9 ΕΚΜ σε μία εβδομάδα, συνεχίζει σε νέα ρεκόρ
- **[Βυζακιά](/el/dam/vyzakia/) 53.3%** — 19× πέρυσι (2.8%), μεγαλύτερη ετήσια αναλογία
- **[Πολεμίδια](/el/dam/polemidia/) 48.8%** — πλησιάζει 50%, νέο μέγιστο σεζόν
- [Αρμίνου](/el/dam/arminou/) μειώθηκε στο 40.6% — 11.83 ΕΚΜ στον [Κούρη](/el/dam/kouris/) φέτος
- [Αχνα](/el/dam/achna/) παραμένει στο 2.1% χωρίς εισροή

Η μείωση υδροδότησης 10% παραμένει σε ισχύ. Επτά φράγματα στο 100%: Ξυλιάτος, Καλοπαναγιώτης, Αργάκα, Πόμος, Κλήρου-Μαλούντα, Σολέα, και πρακτικά Αγία Μαρίνα (98.7%).

**Στα μέσα:**
- [Σημαντική αύξηση εισροών – Στο 27% πλέον η πληρότητα](https://www.sigmalive.com/news/local/1308295/simantiki-auksisi-eisroon-sta-fragmata-sto-27-pleon-i-plirotita) — SigmaLive
- [Ρεκόρ εισροής νερού στα φράγματα το τελευταίο τριήμερο](https://www.alphanews.live/cyprus/rekor-eisrois-nerou-sta-fragmata-to-teleftaio-triimero/) — AlphaNews
- [Αισιόδοξο το ΤΑΥ για καλές εισροές ως τέλος Μαρτίου](https://cyprustimes.com/koinonia/aisiodoxo-to-taf-gia-kales-eisroes-os-telos-martiou-se-kalyteri-moira-apo-persi/) — CyprusTimes
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (20 — 27 марта 2026)

Общий запас **29.9%** (87.0 МКМ), рост с 22.7% (66.1 МКМ) на 20/3 — +20.9 МКМ за 7 дней. Запасы теперь **на 5.4пп выше прошлогодних** (24.5%, 71.1 МКМ). Приток сезона 25/26: 68.9 МКМ — в 3.7 раза больше засушливого 24/25. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 11.83 МКМ.

**Основные изменения:**
- **[Гермасойя](/ru/dam/germasoyeia/) превысила 30%** — 30.2% (4.07 МКМ), более чем удвоилась с 14.1% за неделю, теперь выше прошлого года (26.4%)
- **[Курис](/ru/dam/kouris/) 27.6%** (31.8 МКМ) — +7.4 МКМ за 7 дней, новый сезонный максимум, +8пп выше прошлого года
- **[Каннавиу](/ru/dam/kannaviou/) 42.0%** — +12.7пп за неделю, новый максимум, +15пп выше прошлого года
- **[Аспрокреммос](/ru/dam/asprokremmos/) 32.6%** (17.1 МКМ) — +4.9 МКМ за неделю, продолжает бить рекорды
- **[Визакия](/ru/dam/vyzakia/) 53.3%** — в 19 раз выше прошлогодних 2.8%
- **[Полемидия](/ru/dam/polemidia/) 48.8%** — приближается к 50%, новый сезонный максимум
- [Арминоу](/ru/dam/arminou/) снизился до 40.6% — 11.83 МКМ перекачано в [Курис](/ru/dam/kouris/) за сезон
- [Ахна](/ru/dam/achna/) остаётся на 2.1% без притока

Сокращение водоснабжения на 10% продолжает действовать. Семь дамб заполнены на 100%: Ксилиатос, Калопанайотис, Аргака, Помос, Клиру-Малунта, Солеа и фактически Агия Марина (98.7%).

**В СМИ:**
- [На Кипре — сезон дождей, но власти утверждают, что засуха продолжается](https://evropakipr.com/istorii/na-kipre-sezon-dozhdey-pochemu-vlasti-utverzhdayut-chto-na-ostrove-chetvertyy-god) — Европа Кипр
- [Дожди победили засуху](https://vkcyprus.com/cyprus/1467412357679-dozhdi-pobedili-zasuhu/) — Вестник Кипра
- [Кипр не остался «без воды»](https://russiancyprus.news/news/society/cyprus-has-not-been-left-without-water/) — Russian Cyprus
`;
  }
  return `
### Recent Changes (March 20 — 27, 2026)

Total storage at **29.9%** (87.0 MCM), up from 22.7% (66.1 MCM) on Mar 20 — +20.9 MCM in 7 days. Reserves now **5.4pp above last year** (24.5%, 71.1 MCM). Total 25/26 inflow: 68.9 MCM — 3.7× the 2024/25 drought season. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 11.83 MCM since October.

**Notable movements:**
- **[Germasoyeia](/dam/germasoyeia/) crossed 30%** at 30.2% (4.07 MCM) — more than doubled from 14.1% a week ago, now above last year (26.4%)
- **[Kouris](/dam/kouris/) at 27.6%** (31.8 MCM) — +7.4 MCM in 7 days, new season high, 8pp above last year
- **[Kannaviou](/dam/kannaviou/) at 42.0%** — +12.7pp in a week, new season high, 15pp above last year
- **[Asprokremmos](/dam/asprokremmos/) at 32.6%** (17.1 MCM) — +4.9 MCM in a week, continues setting new highs
- **[Vyzakia](/dam/vyzakia/) at 53.3%** — 19× last year's 2.8%, strongest YoY multiplier
- **[Polemidia](/dam/polemidia/) at 48.8%** — approaching 50%, new season high
- [Arminou](/dam/arminou/) dropped to 40.6% despite heavy inflow — 11.83 MCM pumped to [Kouris](/dam/kouris/) this season
- [Achna](/dam/achna/) remains at 2.1% with zero inflow — Larnaca/Famagusta dams unresponsive to rainfall

The 10% island-wide water supply cut remains in effect. Seven dams now at 100%: Xyliatos, Kalopanagiotis, Argaka, Pomos, Klirou-Malounta, Solea, and effectively Agia Marina (98.7%).

**In the media:**
- [Rainfall helpful but Cyprus is far from water security](https://www.parikiaki.com/2026/03/rainfall-helpful-but-cyprus-is-far-from-water-security-wdd-official-tells-cna) — Parikiaki
- [Rainfall offers limited relief, Cyprus water reserves at 27 per cent capacity](https://cyprus-mail.com/2026/03/23/rainfall-offers-limited-relief-as-cyprus-water-reserves-remain-under-strain) — Cyprus Mail
- [Cyprus dam water levels rise after rainfall](https://en.sigmalive.com/cyprus-dam-water-levels-rise-after-rainfall/) — Sigmalive
`;
};
