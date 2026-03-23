import { type Locale } from '@/utils/locale';

export interface ArticleMeta {
  slug: string;
  date: string;
  dataSetId: string;
  author: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

export const ARTICLES: ArticleMeta[] = [
  {
    slug: '2026-03-23-reserves-exceed-last-year',
    date: '2026-03-23',
    dataSetId: '23-MAR-2026',
    author: 'Vladimir Bugay',
    title: {
      en: 'Cyprus Reservoirs Exceed Last Year for the First Time — 12 mln. m³ in 3 Days, Xyliatos Overflows',
      el: 'Τα φράγματα Κύπρου ξεπέρασαν πέρυσι για πρώτη φορά — 12 εκ. m³ σε 3 ημέρες, ο Ξυλιάτος υπερχείλισε',
      ru: 'Водохранилища Кипра впервые превысили прошлогодний уровень — 12 млн. м³ за 3 дня, Ксилиатос вышел из берегов',
    },
    description: {
      en: 'Exceptional Troodos rainfall delivers 12 mln. m³ in 72 hours, pushing total storage to 26.9% — above last year for the first time this season.',
      el: 'Εξαιρετικές βροχοπτώσεις Τροόδους αποδίδουν 12 εκ. m³ σε 72 ώρες, ανεβάζοντας αποθέματα στο 26.9% — πάνω από πέρυσι για πρώτη φορά φέτος.',
      ru: 'Исключительные осадки на Троодосе приносят 12 млн. м³ за 72 часа, поднимая общий запас до 26.9% — впервые в этом сезоне выше прошлогоднего уровня.',
    },
  },
  {
    slug: '2026-03-02-cyprus-reservoirs-forecast',
    date: '2026-03-02',
    dataSetId: '02-MAR-2026',
    author: 'Vladimir Bugay',
    title: {
      en: 'Cyprus Reservoirs at 20.6% with Forecast Down to 7% — But 38 Years of Data Promise a Turnaround',
      el: 'Ταμιευτήρες Κύπρου στο 20.6% με πρόβλεψη πτώσης στο 7% — Αλλά 38 χρόνια δεδομένων υπόσχονται ανάκαμψη',
      ru: 'Водохранилища Кипра: 20.6% и прогноз до 7% — но данные за 38 лет обещают разворот',
    },
    description: {
      en: 'Analysis of current Cyprus reservoir levels and forecast based on 38 years of hydrological data.',
      el: 'Ανάλυση τρεχόντων επιπέδων ταμιευτήρων Κύπρου και πρόβλεψη βάσει 38 ετών υδρολογικών δεδομένων.',
      ru: 'Анализ текущего состояния водохранилищ Кипра и прогноз на основе 38 лет гидрологических данных.',
    },
  },
  {
    slug: '2026-03-18-drought-retreating',
    date: '2026-03-18',
    dataSetId: '18-MAR-2026',
    author: 'Vladimir Bugay',
    title: {
      en: 'Is the Drought Retreating? 12 of 21 Cyprus Reservoirs Exceed Last Year\'s Levels',
      el: 'Υποχωρεί η ξηρασία; 12 από 21 ταμιευτήρες Κύπρου ξεπέρασαν τα περυσινά επίπεδα',
      ru: 'Засуха отступает? 12 из 21 водохранилища Кипра превысили прошлогодний уровень',
    },
    description: {
      en: 'Updated Fragmata analysis: forecast improved, water deficit unlikely.',
      el: 'Ενημερωμένη ανάλυση Fragmata: η πρόβλεψη βελτιώθηκε, το έλλειμμα νερού απίθανο.',
      ru: 'Обновлённый анализ Fragmata: прогноз улучшился, дефицит маловероятен.',
    },
  },
];

export function getAllArticles(): ArticleMeta[] {
  return [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return ARTICLES.map((a) => a.slug);
}
