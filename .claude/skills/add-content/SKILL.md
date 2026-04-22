---
name: add-content
description: Add a new entry to the portfolio (project, experience, skill, or blog article). Reminds Claude of the exact schemas and file locations.
---

## New project → `src/content/projects/<slug>.json`

```json
{
  "order": 7,
  "kind": "Live · Full-Stack",
  "chips": ["React", "Node.js"],
  "links": [
    { "label": "Live",   "href": "https://..." },
    { "label": "GitHub", "href": "https://..." }
  ],
  "name": { "es": "Nombre",      "en": "Name" },
  "desc": { "es": "Descripción.", "en": "Description." }
}
```

## New experience → `src/content/experience/<slug>.json`

```json
{
  "order": 4,
  "company": "Company Name",
  "chips": ["TypeScript", "React"],
  "role":    { "es": "Rol",     "en": "Role" },
  "summary": { "es": "Resumen.", "en": "Summary." },
  "bullets": [
    { "es": "Logro 1.", "en": "Achievement 1." },
    { "es": "Logro 2.", "en": "Achievement 2." },
    { "es": "Logro 3.", "en": "Achievement 3." }
  ]
}
```

Astro validates both against Zod schemas in `src/content/config.ts` at build time.

## New article → `src/data/articles.ts`

Add to `ARTICLES` array:
```ts
{
  slug:     'my-article',
  tag:      { es: 'Categoría', en: 'Category' },
  title:    { es: 'Título',    en: 'Title' },
  date:     { es: '1 Ene 2025', en: 'Jan 1, 2025' },
  readTime: '5 min',
  href: {
    es: 'https://newsletter.pavas.io/es/articles/...',
    en: 'https://newsletter.pavas.io/en/articles/...',
  },
}
```

## New skill → `src/data/skills.ts`

Add to right `items` array inside `SKILLS`:
```ts
{ name: 'SkillName', slug: 'simpleicons-slug', level: 'senior' | 'mid', docsUrl: 'https://...' }
```

## New UI string → both locale files

Add key to **both** `src/i18n/locales/es.ts` and `src/i18n/locales/en.ts`.
TS errors at build if `en.ts` missing any key from `es.ts` (`satisfies Locale`).

## Verify

```bash
npm run build
```