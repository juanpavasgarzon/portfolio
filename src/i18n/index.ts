import { es } from './locales/es';
import { en } from './locales/en';

export type Lang           = 'es' | 'en';
export type TranslationKey = keyof typeof es;

const locales = { es, en };

export function useT(lang: Lang): (key: TranslationKey) => string {
  const dict = locales[lang];
  return (key) => dict[key] as string;
}
