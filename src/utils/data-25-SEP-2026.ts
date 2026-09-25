import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.004, totalSince: 27.220 }, storage: { current: { amount: 43.474, percentage: 37.8 }, lastYear: { amount: 13.341, percentage: 11.6 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.204 }, storage: { current: { amount: 3.771, percentage: 22.1 }, lastYear: { amount: 2.270, percentage: 13.3 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.742 }, storage: { current: { amount: 2.412, percentage: 17.4 }, lastYear: { amount: 2.067, percentage: 14.9 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.772 }, storage: { current: { amount: 4.090, percentage: 26.4 }, lastYear: { amount: 3.651, percentage: 23.6 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 6.655, percentage: 49.3 }, lastYear: { amount: 1.095, percentage: 8.1 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.004, totalSince: 22.497 }, storage: { current: { amount: 2.550, percentage: 59.3 }, lastYear: { amount: 1.907, percentage: 44.3 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.635 }, storage: { current: { amount: 1.459, percentage: 42.9 }, lastYear: { amount: 0.884, percentage: 26.0 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.284, percentage: 4.2 }, lastYear: { amount: 0.168, percentage: 2.5 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.330 }, storage: { current: { amount: 19.126, percentage: 36.5 }, lastYear: { amount: 5.754, percentage: 11.0 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 7.384, percentage: 43.0 }, lastYear: { amount: 2.358, percentage: 13.7 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 0.650, percentage: 29.8 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 9.430, percentage: 39.3 }, lastYear: { amount: 3.197, percentage: 13.3 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.461, percentage: 46.6 }, lastYear: { amount: 0.004, percentage: 0.4 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.534, percentage: 62.1 }, lastYear: { amount: 0.124, percentage: 14.4 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.141, percentage: 47.3 }, lastYear: { amount: 0.057, percentage: 19.1 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.257, percentage: 74.4 }, lastYear: { amount: 0.007, percentage: 0.4 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.104, percentage: 77.2 }, lastYear: { amount: 0.047, percentage: 3.3 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.322 }, storage: { current: { amount: 0.349, percentage: 96.1 }, lastYear: { amount: 0.045, percentage: 12.4 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.288, percentage: 81.7 }, lastYear: { amount: 0.550, percentage: 19.6 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.766, percentage: 88.3 }, lastYear: { amount: 1.149, percentage: 57.5 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 3.849, percentage: 86.4 }, lastYear: { amount: 2.058, percentage: 46.2 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through September 25, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":1.366 }, total:116.861 },
];

export const getReportDate = (): string => "25-SEP-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris down slightly to 37.8% (43.5 MCM), a 0.23 MCM draw, still 26.2pp above last year\'s 11.6%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης ελαφρώς χαμηλότερος στο 37.8% (43.5 ΕΚΜ), 26.2μ.π. πάνω από πέρυσι (11.6%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис немного снизился — 37.8% (43.5 МКМ), +26.2пп выше прошлогодних 11.6%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos steady at 22.1% (3.77 MCM), still 8.8pp above last year\'s 13.3%. Seasonal inflow 4.20 MCM.',
      el: 'Ο Καλαβασός σταθερός στο 22.1% (3.77 ΕΚΜ), πάνω από πέρυσι (13.3%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос стабильно — 22.1% (3.77 МКМ), выше прошлогодних 13.3%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara steady at 17.4% (2.41 MCM), 2.5pp above last year\'s 14.9%. Seasonal inflow 1.74 MCM.',
      el: 'Η Λεύκαρα σταθερή στο 17.4% (2.41 ΕΚΜ), πάνω από πέρυσι (14.9%). Εισροή σεζόν 1.74 ΕΚΜ.',
      ru: 'Лефкара стабильно — 17.4% (2.41 МКМ), выше прошлогодних 14.9%.',
    },
    'Dipotamos': {
      en: 'Dipotamos down to 26.4% (4.09 MCM), 2.8pp above last year\'s 23.6%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος χαμηλότερος στο 26.4% (4.09 ΕΚΜ), 2.8μ.π. πάνω από πέρυσι (23.6%).',
      ru: 'Дипотамос снизился — 26.4% (4.09 МКМ), +2.8пп выше прошлогодних 23.6%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia steady at 49.3% (6.66 MCM), still 41.2pp above last year\'s 8.1%.',
      el: 'Η Γερμασόγεια σταθερή στο 49.3% (6.66 ΕΚΜ). 41.2μ.π. πάνω από πέρυσι (8.1%).',
      ru: 'Гермасойя стабильно — 49.3% (6.66 МКМ). +41.2пп выше прошлогодних 8.1%.',
    },
    'Arminou': {
      en: 'Arminou steady at 59.3% (2.55 MCM) after a trace 0.004 MCM inflow. Still 15.0pp above last year\'s 44.3%. Season inflow 22.5 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου σταθερός στο 59.3% (2.55 ΕΚΜ). 15.0μ.π. πάνω από πέρυσι (44.3%).',
      ru: 'Арминоу стабильно на 59.3% (2.55 МКМ). +15.0пп выше прошлогодних 44.3%.',
    },
    'Polemidia': {
      en: 'Polemidia steady at 42.9% (1.46 MCM), still 16.9pp above last year\'s 26.0%.',
      el: 'Η Πολεμίδια σταθερή στο 42.9% (1.46 ΕΚΜ), 16.9μ.π. πάνω από πέρυσι (26.0%).',
      ru: 'Полемидия стабильно — 42.9% (1.46 МКМ), +16.9пп выше прошлогодних 26.0%.',
    },
    'Achna': {
      en: 'Achna up to 4.2% (0.28 MCM), a sudden 1.2pp jump despite zero recorded inflow all season — the third such unexplained rise this month.',
      el: 'Η Αχνά στο 4.2% (0.28 ΕΚΜ), απότομη άνοδος 1.2μ.π. παρά τη μηδενική εισροή όλη τη σεζόν.',
      ru: 'Ахна выросла до 4.2% (0.28 МКМ), скачок на 1.2пп несмотря на нулевой приток за весь сезон.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos down slightly to 36.5% (19.13 MCM), 25.5pp above last year\'s 11.0%. Seasonal inflow 20.3 MCM.',
      el: 'Ο Ασπρόκρεμμος ελαφρώς χαμηλότερος στο 36.5% (19.13 ΕΚΜ), 25.5μ.π. πάνω από πέρυσι (11.0%).',
      ru: 'Аспрокреммос немного снизился — 36.5% (19.13 МКМ), +25.5пп выше прошлогодних 11.0%.',
    },
    'Kannaviou': {
      en: 'Kannaviou steady at 43.0% (7.38 MCM), still 29.3pp above last year\'s 13.7%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου σταθερός στο 43.0% (7.38 ΕΚΜ), 29.3μ.π. πάνω από πέρυσι (13.7%).',
      ru: 'Каннавиу стабильно — 43.0% (7.38 МКМ), +29.3пп выше прошлогодних 13.7%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos down slightly to 29.8% (0.65 MCM), resuming its slow decline. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος ελαφρώς χαμηλότερος στο 29.8% (0.65 ΕΚΜ). Από 0% πέρυσι.',
      ru: 'Мавроколимпос немного снизился — 29.8% (0.65 МКМ). Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou steady at 39.3% (9.43 MCM), still 26.0pp above last year\'s 13.3%.',
      el: 'Ο Εύρετου σταθερός στο 39.3% (9.43 ΕΚΜ). 26.0μ.π. πάνω από πέρυσι (13.3%).',
      ru: 'Эвретоу стабильно — 39.3% (9.43 МКМ). +26.0пп выше прошлогодних 13.3%.',
    },
    'Argaka': {
      en: 'Argaka down to 46.6% (0.46 MCM), resuming its multi-week slide. Up from 0.4% last year — a 115× year-over-year recovery.',
      el: 'Η Αργάκα χαμηλότερα στο 46.6% (0.46 ΕΚΜ), συνεχίζει η πολυεβδομαδιαία πτώση. Από 0.4% πέρυσι.',
      ru: 'Аргака снизилась — 46.6% (0.46 МКМ), многонедельное снижение возобновилось. Год назад 0.4%.',
    },
    'Pomos': {
      en: 'Pomos down to 62.1% (0.53 MCM), resuming its retreat from near-full. Up from 14.4% last year.',
      el: 'Ο Πόμος χαμηλότερα στο 62.1% (0.53 ΕΚΜ). Από 14.4% πέρυσι.',
      ru: 'Помос снизился — 62.1% (0.53 МКМ). Год назад 14.4%.',
    },
    'Agia Marina': {
      en: 'Agia Marina down to 47.3% (0.14 MCM), resuming its multi-week slide. Up from 19.1% last year.',
      el: 'Η Αγία Μαρίνα χαμηλότερα στο 47.3% (0.14 ΕΚΜ), συνεχίζει η πολυεβδομαδιαία πτώση. Από 19.1% πέρυσι.',
      ru: 'Агия Марина снизилась — 47.3% (0.14 МКМ), многонедельное снижение возобновилось. Год назад 19.1%.',
    },
    'Vyzakia': {
      en: 'Vyzakia steady at 74.4% (1.26 MCM). Was 0.4% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά σταθερά στο 74.4% (1.26 ΕΚΜ). Από 0.4% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия стабильно — 74.4% (1.26 МКМ). Год назад 0.4% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos steady at 77.2% (1.10 MCM). Was 3.3% last year.',
      el: 'Ο Ξυλιάτος σταθερός στο 77.2% (1.10 ΕΚΜ). Από 3.3% πέρυσι.',
      ru: 'Ксилиатос стабильно — 77.2% (1.10 МКМ). Год назад 3.3%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis steady at 96.1% (0.35 MCM), still short of full. Up from 12.4% last year.',
      el: 'Ο Καλοπαναγιώτης σταθερός στο 96.1% (0.35 ΕΚΜ), ακόμα κάτω από πλήρη χωρητικότητα. Αύξηση από 12.4% πέρυσι.',
      ru: 'Калопанайотис стабильно — 96.1% (0.35 МКМ), всё ещё не полон. Рост с 12.4% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos down slightly to 81.7% (2.29 MCM). Was 19.6% last year — a 4.2× year-over-year recovery.',
      el: 'Ο Ταμασός ελαφρώς χαμηλότερος στο 81.7% (2.29 ΕΚΜ). Από 19.6% πέρυσι — 4.2× ανάκαμψη.',
      ru: 'Тамассос немного снизился — 81.7% (2.29 МКМ). Год назад 19.6% — восстановление в 4.2×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta steady at 88.3% (1.77 MCM). Up from 57.5% one year ago.',
      el: 'Η Κλήρου-Μαλούντα σταθερή στο 88.3% (1.77 ΕΚΜ). Αύξηση από 57.5% πέρυσι.',
      ru: 'Клиру-Малунта стабильно — 88.3% (1.77 МКМ). Рост с 57.5% год назад.',
    },
    'Solea': {
      en: 'Solea steady at 86.4% (3.85 MCM). Up from 46.2% last year — 1.87× year-over-year improvement.',
      el: 'Η Σολέα σταθερή στο 86.4% (3.85 ΕΚΜ). Αύξηση από 46.2% πέρυσι — 1.87× βελτίωση.',
      ru: 'Солеа стабильно — 86.4% (3.85 МКМ). Рост с 46.2% год назад — улучшение в 1.87×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (24 — 25 Σεπτεμβρίου 2026)

Δελτίο Παρασκευής: συνολική αποθήκευση **36.15%** (105.1 ΕΚΜ) — μειωμένη από 36.3% (105.6 ΕΚΜ) την Πέμπτη, 24 Σεπτεμβρίου, μια απώλεια περίπου 0.5 ΕΚΜ, η ίδια αργή πτωτική πορεία συνεχίζεται. Ο [Κούρης](/el/dam/kouris/) κατέγραψε τη μεγαλύτερη απόλυτη πτώση (-0.23 ΕΚΜ). Η [Αχνά](/el/dam/achna/) ξεχώρισε με απότομη άνοδο 1.2μ.π. στο 4.2%, παρά τη μηδενική εισροή — η τρίτη τέτοια ανεξήγητη κίνηση τον τελευταίο μήνα. Το χάσμα με πέρυσι παρέμεινε σχεδόν σταθερό στις **23.4 μονάδες**. Εισροή σεζόν: 116.9 ΕΚΜ (Αύγ-Σεπ μέχρι στιγμής: 1.37 ΕΚΜ). Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι 24 Σεπτεμβρίου):**
- [Αχνά](/el/dam/achna/) **4.2%** (+1.2μ.π.) — απότομη άνοδος παρά τη μηδενική εισροή όλη τη σεζόν
- [Κούρης](/el/dam/kouris/) **37.8%** (-0.2μ.π.) — η μεγαλύτερη απόλυτη πτώση (-0.23 ΕΚΜ)
- [Διπόταμος](/el/dam/dipotamos/) **26.4%** (-0.5μ.π.) — η μεγαλύτερη ποσοστιαία πτώση στον Νότιο Αγωγό
- [Πωμός](/el/dam/pomos/) **62.1%** (-0.8μ.π.) — συνεχίζει η υποχώρηση από σχεδόν πλήρη
- [Αγία Μαρίνα](/el/dam/agia-marina/) **47.3%** (-1.0μ.π.) — συνεχίζει η πολυεβδομαδιαία πτώση
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **96.1%** — σχεδόν αμετάβλητος, ακόμα κάτω από πλήρη χωρητικότητα

**Στα μέσα:**
- [Ο Χρίστος Σενέκης στον «Π»: Περισσότερο νερό στους γεωργούς](https://www.politis.com.cy/cyprus/perivallon/1034164/o-xristos-senekis-ston-p-perissotero-nero-stoys-gheorghous-ipo-tin-proypothesi-oti-den-tithetai-se-kindino-i-ydrefsi) — Πολίτης
- [Υπουργικό: Πρόταση από Σενέκη για επιπρόσθετες ποσότητες νερού σε γεωργούς](https://www.politis.com.cy/politis-news/cyprus/1033164/ypoyrghiko-protasi-apo-seneki-ghia-epiprosthetes-posotites-nerou-se-gheorghous) — Πολίτης

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (24 — 25 сентября 2026)

Бюллетень пятницы: общий запас **36.15%** (105.1 МКМ) — снижение с 36.3% (105.6 МКМ) в четверг, 24 сентября, потеря около 0.5 МКМ, тот же медленный темп сработки продолжается. [Курис](/ru/dam/kouris/) показал наибольшее абсолютное снижение (-0.23 МКМ). [Ахна](/ru/dam/achna/) выделилась резким скачком на 1.2пп до 4.2%, несмотря на нулевой приток — третий подобный необъяснимый скачок за месяц. Разрыв с прошлым годом остался практически без изменений — **23.4 пункта**. Приток сезона: 116.9 МКМ (авг-сен пока: 1.37 МКМ). Перекачка [Арминоу](/ru/dam/arminou/)→[Куриса](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за период с 24 сентября):**
- [Ахна](/ru/dam/achna/) **4.2%** (+1.2пп) — резкий скачок несмотря на нулевой приток за весь сезон
- [Курис](/ru/dam/kouris/) **37.8%** (-0.2пп) — наибольшее абсолютное снижение (-0.23 МКМ)
- [Дипотамос](/ru/dam/dipotamos/) **26.4%** (-0.5пп) — наибольшее процентное снижение в Южном канале
- [Помос](/ru/dam/pomos/) **62.1%** (-0.8пп) — продолжается отход от почти полного уровня
- [Агия Марина](/ru/dam/agia-marina/) **47.3%** (-1.0пп) — многонедельное снижение продолжается
- [Калопанайотис](/ru/dam/kalopanagiotis/) **96.1%** — почти без изменений, всё ещё не полон

**В СМИ:**
- [Депутаты Кипра предупреждают, что водная политика может вынудить профессиональных фермеров уйти из сельского хозяйства](https://ruscyprus.com/news/deputaty-kipra-preduprezhdayut-chto-vodnaya/60057) — RusCyprus
- [Фермеры долины Хрисохус планируют акцию протеста из-за перебоев с орошением](https://www.kiprinform.com/news/fermery-doliny-hrisohus-planiruyut-akciyu-protesta-iz-za-pereboev-s-orosheniem/) — Cyprus Inform

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (September 24 — September 25, 2026)

Friday's bulletin: total storage **36.15%** (105.1 MCM) — down from 36.3% (105.6 MCM) on Thursday, September 24, a loss of roughly 0.5 MCM, the same slow drawdown pace continuing. [Kouris](/dam/kouris/) posted the largest absolute drop (-0.23 MCM). [Achna](/dam/achna/) stood out with a sudden 1.2pp jump to 4.2% despite zero recorded inflow all season — the third such unexplained rise this month. The gap over last year held almost steady at **23.4 points**. Season inflow: 116.9 MCM (Aug-Sep so far: 1.37 MCM). The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. September 24):**
- [Achna](/dam/achna/) **4.2%** (+1.2pp) — sudden jump despite zero recorded inflow all season
- [Kouris](/dam/kouris/) **37.8%** (-0.2pp) — the largest absolute drop (-0.23 MCM)
- [Dipotamos](/dam/dipotamos/) **26.4%** (-0.5pp) — the steepest pp drop on the Southern Conveyor
- [Pomos](/dam/pomos/) **62.1%** (-0.8pp) — continued retreat from near-full
- [Agia Marina](/dam/agia-marina/) **47.3%** (-1.0pp) — multi-week slide continues
- [Kalopanagiotis](/dam/kalopanagiotis/) **96.1%** — nearly unchanged, still short of full

**In the media:**
- [Plan for irrigation water heads to cabinet](https://cyprus-mail.com/2026/09/15/plan-for-irrigation-water-heads-to-cabinet) — Cyprus Mail
- [Farmers to get additional 3.5m cubic metres of water](https://cyprus-mail.com/2026/09/16/farmers-to-get-additional-3-5m-cubic-metres-of-water) — Cyprus Mail
- [Implementation of four new desalination plants underway, minister says](https://www.parikiaki.com/2026/09/implementation-of-four-new-desalination-plants-underway-in-cyprus-minister-says/) — Parikiaki

🔗 https://fragmata.info
`;
};
