import type { Lang } from '@/i18n';

export interface Article {
  slug:     string;
  tag:      Record<Lang, string>;
  title:    Record<Lang, string>;
  date:     Record<Lang, string>;
  readTime: string;
  href:     Record<Lang, string>;
}

export const ARTICLES: Article[] = [
  {
    slug:     'clean-code-fundamentals',
    tag:      { es: 'Arquitectura', en: 'Architecture' },
    title:    { es: 'Fundamentos para un código limpio, flexible y escalable', en: 'Fundamentals for clean, flexible, scalable code' },
    date:     { es: '15 Ene 2025', en: 'Jan 15, 2025' },
    readTime: '10 min',
    href: {
      es: 'https://newsletter.pavas.io/es/articles/676be9ca-316d-49c4-8255-b91e4d832c0d',
      en: 'https://newsletter.pavas.io/en/articles/676be9ca-316d-49c4-8255-b91e4d832c0d',
    },
  },
];
