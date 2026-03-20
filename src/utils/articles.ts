import { type Locale } from '@/utils/locale';

export interface ArticleMeta {
  slug: string;
  date: string;
  author: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

export const ARTICLES: ArticleMeta[] = [
  {
    slug: '2026-03-02-cyprus-reservoirs-forecast',
    date: '2026-03-02',
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
