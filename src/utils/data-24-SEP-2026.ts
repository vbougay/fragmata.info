import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.008, totalSince: 27.216 }, storage: { current: { amount: 43.702, percentage: 38.0 }, lastYear: { amount: 13.407, percentage: 11.7 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.204 }, storage: { current: { amount: 3.785, percentage: 22.1 }, lastYear: { amount: 2.282, percentage: 13.3 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.742 }, storage: { current: { amount: 2.417, percentage: 17.5 }, lastYear: { amount: 2.069, percentage: 14.9 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.772 }, storage: { current: { amount: 4.164, percentage: 26.9 }, lastYear: { amount: 3.673, percentage: 23.7 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 6.668, percentage: 49.4 }, lastYear: { amount: 1.106, percentage: 8.2 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.006, totalSince: 22.493 }, storage: { current: { amount: 2.548, percentage: 59.3 }, lastYear: { amount: 1.913, percentage: 44.5 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.635 }, storage: { current: { amount: 1.461, percentage: 43.0 }, lastYear: { amount: 0.886, percentage: 26.1 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.205, percentage: 3.0 }, lastYear: { amount: 0.177, percentage: 2.6 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.330 }, storage: { current: { amount: 19.193, percentage: 36.6 }, lastYear: { amount: 5.788, percentage: 11.1 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 7.416, percentage: 43.2 }, lastYear: { amount: 2.371, percentage: 13.8 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 0.663, percentage: 30.4 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 9.469, percentage: 39.5 }, lastYear: { amount: 3.220, percentage: 13.4 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.468, percentage: 47.3 }, lastYear: { amount: 0.004, percentage: 0.4 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.541, percentage: 62.9 }, lastYear: { amount: 0.124, percentage: 14.4 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.144, percentage: 48.3 }, lastYear: { amount: 0.057, percentage: 19.1 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.262, percentage: 74.7 }, lastYear: { amount: 0.007, percentage: 0.4 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.109, percentage: 77.6 }, lastYear: { amount: 0.049, percentage: 3.4 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.322 }, storage: { current: { amount: 0.349, percentage: 96.1 }, lastYear: { amount: 0.046, percentage: 12.7 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.297, percentage: 82.0 }, lastYear: { amount: 0.552, percentage: 19.7 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.771, percentage: 88.6 }, lastYear: { amount: 1.151, percentage: 57.6 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 3.856, percentage: 86.6 }, lastYear: { amount: 2.065, percentage: 46.4 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through September 24, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":1.358 }, total:116.853 },
];

export const getReportDate = (): string => "24-SEP-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris unchanged at 38.0% (43.7 MCM) — a trace 0.008 MCM inflow, still 26.3pp above last year\'s 11.7%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης αμετάβλητος στο 38.0% (43.7 ΕΚΜ), 26.3μ.π. πάνω από πέρυσι (11.7%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис без изменений — 38.0% (43.7 МКМ), +26.3пп выше прошлогодних 11.7%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos unchanged at 22.1% (3.79 MCM), still 8.8pp above last year\'s 13.3%. Seasonal inflow 4.20 MCM.',
      el: 'Ο Καλαβασός αμετάβλητος στο 22.1% (3.79 ΕΚΜ), πάνω από πέρυσι (13.3%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос без изменений — 22.1% (3.79 МКМ), выше прошлогодних 13.3%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara unchanged at 17.5% (2.42 MCM), 2.6pp above last year\'s 14.9%. Seasonal inflow 1.74 MCM.',
      el: 'Η Λεύκαρα αμετάβλητη στο 17.5% (2.42 ΕΚΜ), πάνω από πέρυσι (14.9%). Εισροή σεζόν 1.74 ΕΚΜ.',
      ru: 'Лефкара без изменений — 17.5% (2.42 МКМ), выше прошлогодних 14.9%. Приток 1.74 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos unchanged at 26.9% (4.16 MCM), still 3.2pp above last year\'s 23.7%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος αμετάβλητος στο 26.9% (4.16 ΕΚΜ), 3.2μ.π. πάνω από πέρυσι (23.7%).',
      ru: 'Дипотамос без изменений — 26.9% (4.16 МКМ), +3.2пп выше прошлогодних 23.7%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia unchanged at 49.4% (6.67 MCM), still 41.2pp above last year\'s 8.2%.',
      el: 'Η Γερμασόγεια αμετάβλητη στο 49.4% (6.67 ΕΚΜ). 41.2μ.π. πάνω από πέρυσι (8.2%).',
      ru: 'Гермасойя без изменений — 49.4% (6.67 МКМ). +41.2пп выше прошлогодних 8.2%.',
    },
    'Arminou': {
      en: 'Arminou steady at 59.3% (2.55 MCM) after a trace 0.006 MCM inflow. Still 14.8pp above last year\'s 44.5%. Season inflow 22.5 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου σταθερός στο 59.3% (2.55 ΕΚΜ). 14.8μ.π. πάνω από πέρυσι (44.5%).',
      ru: 'Арминоу стабильно на 59.3% (2.55 МКМ). +14.8пп выше прошлогодних 44.5%.',
    },
    'Polemidia': {
      en: 'Polemidia unchanged at 43.0% (1.46 MCM), still 16.9pp above last year\'s 26.1%.',
      el: 'Η Πολεμίδια αμετάβλητη στο 43.0% (1.46 ΕΚΜ), 16.9μ.π. πάνω από πέρυσι (26.1%).',
      ru: 'Полемидия без изменений — 43.0% (1.46 МКМ), +16.9пп выше прошлогодних 26.1%.',
    },
    'Achna': {
      en: 'Achna unchanged at 3.0% (0.21 MCM), still above last year\'s 2.6% despite zero recorded inflow all season.',
      el: 'Η Αχνά αμετάβλητη στο 3.0% (0.21 ΕΚΜ), πάνω από πέρυσι (2.6%) παρά τη μηδενική εισροή.',
      ru: 'Ахна без изменений — 3.0% (0.21 МКМ), выше прошлогодних 2.6% несмотря на нулевой приток.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos unchanged at 36.6% (19.19 MCM), 25.5pp above last year\'s 11.1%. Seasonal inflow 20.3 MCM.',
      el: 'Ο Ασπρόκρεμμος αμετάβλητος στο 36.6% (19.19 ΕΚΜ), 25.5μ.π. πάνω από πέρυσι (11.1%).',
      ru: 'Аспрокреммос без изменений — 36.6% (19.19 МКМ), +25.5пп выше прошлогодних 11.1%.',
    },
    'Kannaviou': {
      en: 'Kannaviou unchanged at 43.2% (7.42 MCM), still 29.4pp above last year\'s 13.8%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου αμετάβλητος στο 43.2% (7.42 ΕΚΜ), 29.4μ.π. πάνω από πέρυσι (13.8%).',
      ru: 'Каннавиу без изменений — 43.2% (7.42 МКМ), +29.4пп выше прошлогодних 13.8%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos unchanged at 30.4% (0.66 MCM), ending a seven-period run of declines. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος αμετάβλητος στο 30.4% (0.66 ΕΚΜ), σταματά η επτάμηνη πτωτική πορεία. Από 0% πέρυσι.',
      ru: 'Мавроколимпос без изменений — 30.4% (0.66 МКМ), серия снижений прервалась. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou unchanged at 39.5% (9.47 MCM), still 26.1pp above last year\'s 13.4%.',
      el: 'Ο Εύρετου αμετάβλητος στο 39.5% (9.47 ΕΚΜ). 26.1μ.π. πάνω από πέρυσι (13.4%).',
      ru: 'Эвретоу без изменений — 39.5% (9.47 МКМ). +26.1пп выше прошлогодних 13.4%.',
    },
    'Argaka': {
      en: 'Argaka unchanged at 47.3% (0.47 MCM), ending its multi-week slide. Up from 0.4% last year — a 117× year-over-year recovery.',
      el: 'Η Αργάκα αμετάβλητη στο 47.3% (0.47 ΕΚΜ), σταματά η πολυεβδομαδιαία πτώση. Από 0.4% πέρυσι — 117× ανάκαμψη.',
      ru: 'Аргака без изменений — 47.3% (0.47 МКМ), многонедельное снижение прервалось. Год назад 0.4% — рост в 117×.',
    },
    'Pomos': {
      en: 'Pomos unchanged at 62.9% (0.54 MCM), ending its retreat from near-full. Up from 14.4% last year.',
      el: 'Ο Πόμος αμετάβλητος στο 62.9% (0.54 ΕΚΜ). Από 14.4% πέρυσι.',
      ru: 'Помос без изменений — 62.9% (0.54 МКМ). Год назад 14.4%.',
    },
    'Agia Marina': {
      en: 'Agia Marina unchanged at 48.3% (0.14 MCM), pausing its multi-week slide. Up from 19.1% last year.',
      el: 'Η Αγία Μαρίνα αμετάβλητη στο 48.3% (0.14 ΕΚΜ), σταματά η πολυεβδομαδιαία πτώση. Από 19.1% πέρυσι.',
      ru: 'Агия Марина без изменений — 48.3% (0.14 МКМ), многонедельное снижение приостановилось. Год назад 19.1%.',
    },
    'Vyzakia': {
      en: 'Vyzakia unchanged at 74.7% (1.26 MCM). Was 0.4% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά αμετάβλητα στο 74.7% (1.26 ΕΚΜ). Από 0.4% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия без изменений — 74.7% (1.26 МКМ). Год назад 0.4% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos unchanged at 77.6% (1.11 MCM). Was 3.4% last year.',
      el: 'Ο Ξυλιάτος αμετάβλητος στο 77.6% (1.11 ΕΚΜ). Από 3.4% πέρυσι.',
      ru: 'Ксилиатос без изменений — 77.6% (1.11 МКМ). Год назад 3.4%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis unchanged at 96.1% (0.35 MCM), still drifting off its overflow plateau. Up from 12.7% last year.',
      el: 'Ο Καλοπαναγιώτης αμετάβλητος στο 96.1% (0.35 ΕΚΜ), συνεχίζει να απομακρύνεται από το οροπέδιο υπερχείλισης. Αύξηση από 12.7% πέρυσι.',
      ru: 'Калопанайотис без изменений — 96.1% (0.35 МКМ), продолжает отходить от плато перелива. Рост с 12.7% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos unchanged at 82.0% (2.30 MCM). Was 19.7% last year — a 4.2× year-over-year recovery.',
      el: 'Ο Ταμασός αμετάβλητος στο 82.0% (2.30 ΕΚΜ). Από 19.7% πέρυσι — 4.2× ανάκαμψη.',
      ru: 'Тамассос без изменений — 82.0% (2.30 МКМ). Год назад 19.7% — восстановление в 4.2×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta unchanged at 88.6% (1.77 MCM). Up from 57.6% one year ago.',
      el: 'Η Κλήρου-Μαλούντα αμετάβλητη στο 88.6% (1.77 ΕΚΜ). Αύξηση από 57.6% πέρυσι.',
      ru: 'Клиру-Малунта без изменений — 88.6% (1.77 МКМ). Рост с 57.6% год назад.',
    },
    'Solea': {
      en: 'Solea unchanged at 86.6% (3.86 MCM). Up from 46.4% last year — 1.87× year-over-year improvement.',
      el: 'Η Σολέα αμετάβλητη στο 86.6% (3.86 ΕΚΜ). Αύξηση από 46.4% πέρυσι — 1.87× βελτίωση.',
      ru: 'Солеа без изменений — 86.6% (3.86 МКМ). Рост с 46.4% год назад — улучшение в 1.87×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (23 — 24 Σεπτεμβρίου 2026)

Δελτίο Πέμπτης: συνολική αποθήκευση αμετάβλητη στο **36.3%** (105.6 ΕΚΜ) — ίδια με την Τετάρτη, 23 Σεπτεμβρίου. Μόνο ο [Κούρης](/el/dam/kouris/) (0.008 ΕΚΜ) και ο [Αρμίνου](/el/dam/arminou/) (0.006 ΕΚΜ) κατέγραψαν ίχνη εισροής, εξισορροπημένα αλλού από εξάτμιση και κατανάλωση — το πιο ήσυχο δελτίο εδώ και εβδομάδες. Το χάσμα με πέρυσι διευρύνθηκε ελαφρώς στις **23.5 μονάδες**. Εισροή σεζόν: 116.9 ΕΚΜ (Αύγ-Σεπ μέχρι στιγμής: 1.36 ΕΚΜ). Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι 23 Σεπτεμβρίου):**
- Όλα τα 21 φράγματα παρέμειναν αμετάβλητα — καμία κίνηση άνω του 0.1μ.π.
- [Κούρης](/el/dam/kouris/) **38.0%** — ίχνη εισροής 0.008 ΕΚΜ
- [Αρμίνου](/el/dam/arminou/) **59.3%** — ίχνη εισροής 0.006 ΕΚΜ
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **96.1%** — αμετάβλητος, ακόμα κάτω από πλήρη χωρητικότητα
- [Αχνά](/el/dam/achna/) **3.0%** — αμετάβλητη, μηδενική εισροή όλη τη σεζόν

**Στα μέσα:**
- [Ο Χρίστος Σενέκης στον «Π»: Περισσότερο νερό στους γεωργούς](https://www.politis.com.cy/cyprus/perivallon/1034164/o-xristos-senekis-ston-p-perissotero-nero-stoys-gheorghous-ipo-tin-proypothesi-oti-den-tithetai-se-kindino-i-ydrefsi) — Πολίτης
- [Υπουργικό: Πρόταση από Σενέκη για επιπρόσθετες ποσότητες νερού σε γεωργούς](https://www.politis.com.cy/politis-news/cyprus/1033164/ypoyrghiko-protasi-apo-seneki-ghia-epiprosthetes-posotites-nerou-se-gheorghous) — Πολίτης

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (23 — 24 сентября 2026)

Бюллетень четверга: общий запас без изменений — **36.3%** (105.6 МКМ), как и в среду, 23 сентября. Лишь [Курис](/ru/dam/kouris/) (0.008 МКМ) и [Арминоу](/ru/dam/arminou/) (0.006 МКМ) зафиксировали следы притока, компенсированные испарением и расходом — самый тихий бюллетень за недели. Разрыв с прошлым годом немного увеличился до **23.5 пункта**. Приток сезона: 116.9 МКМ (авг-сен пока: 1.36 МКМ). Перекачка [Арминоу](/ru/dam/arminou/)→[Куриса](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за период с 23 сентября):**
- Все 21 водохранилище остались без изменений — ни одного движения более 0.1пп
- [Курис](/ru/dam/kouris/) **38.0%** — след притока 0.008 МКМ
- [Арминоу](/ru/dam/arminou/) **59.3%** — след притока 0.006 МКМ
- [Калопанайотис](/ru/dam/kalopanagiotis/) **96.1%** — без изменений, всё ещё не полон
- [Ахна](/ru/dam/achna/) **3.0%** — без изменений, нулевой приток за весь сезон

**В СМИ:**
- [Депутаты Кипра предупреждают, что водная политика может вынудить профессиональных фермеров уйти из сельского хозяйства](https://ruscyprus.com/news/deputaty-kipra-preduprezhdayut-chto-vodnaya/60057) — RusCyprus
- [Фермеры долины Хрисохус планируют акцию протеста из-за перебоев с орошением](https://www.kiprinform.com/news/fermery-doliny-hrisohus-planiruyut-akciyu-protesta-iz-za-pereboev-s-orosheniem/) — Cyprus Inform

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (September 23 — September 24, 2026)

Thursday's bulletin: total storage unchanged at **36.3%** (105.6 MCM) — the same as Wednesday, September 23. Only [Kouris](/dam/kouris/) (0.008 MCM) and [Arminou](/dam/arminou/) (0.006 MCM) logged trace inflow, offset elsewhere by evaporation and use — the quietest bulletin in weeks. The gap over last year widened slightly to **23.5 points**. Season inflow: 116.9 MCM (Aug-Sep so far: 1.36 MCM). The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. September 23):**
- All 21 reservoirs held flat — no movement above 0.1pp
- [Kouris](/dam/kouris/) **38.0%** — trace 0.008 MCM inflow
- [Arminou](/dam/arminou/) **59.3%** — trace 0.006 MCM inflow
- [Kalopanagiotis](/dam/kalopanagiotis/) **96.1%** — unchanged, still short of full
- [Achna](/dam/achna/) **3.0%** — unchanged, zero inflow all season

**In the media:**
- [Plan for irrigation water heads to cabinet](https://cyprus-mail.com/2026/09/15/plan-for-irrigation-water-heads-to-cabinet) — Cyprus Mail
- [Farmers to get additional 3.5m cubic metres of water](https://cyprus-mail.com/2026/09/16/farmers-to-get-additional-3-5m-cubic-metres-of-water) — Cyprus Mail
- [Implementation of four new desalination plants underway, minister says](https://www.parikiaki.com/2026/09/implementation-of-four-new-desalination-plants-underway-in-cyprus-minister-says/) — Parikiaki

🔗 https://fragmata.info
`;
};
