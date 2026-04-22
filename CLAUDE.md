# CLAUDE.md

## Stack

Astro 5 (SSG) · TypeScript strict · Vanilla CSS · Zero runtime framework

## Run Locally

```bash
npm install
npm run dev       # → http://localhost:4321

docker build -t portfolio .
docker run -p 8080:80 portfolio   # → http://localhost:8080
```

## Architecture

```
src/
  config/
    site.ts              ← single source of truth (email, URLs, name, avatar)
  content/
    config.ts            ← Zod schemas for Astro Content Collections
    experience/*.json    ← bilingual { es, en } per field
    projects/*.json      ← bilingual { es, en } per field
  data/
    skills.ts            ← SkillGroup[] with inline { es, en } labels
    articles.ts          ← Article[] with inline { es, en } fields
  i18n/
    index.ts             ← useT(lang) → (key: TranslationKey) => string
    locales/
      es.ts              ← source of truth (as const)
      en.ts              ← (as const satisfies Locale) — TS errors if key missing
  layouts/
    Layout.astro         ← base HTML, full SEO head, all client scripts
  components/
    Nav / Hero / Skills / Experience / Projects / Blog / Contact / Footer
  pages/
    index.astro          ← / (español)
    en/index.astro       ← /en/ (english)
  styles/
    global.css
public/
  favicon.svg · CV-Juan-Pavas.pdf · robots.txt
```

## Path alias

`@/` → `src/`. All imports use this alias.

## i18n

- `es.ts` = source of truth for all UI translation keys
- `en.ts` uses `satisfies Locale` — TS compile-error if key missing
- `useT(lang)` returns typed `(key: TranslationKey) => string`
- Content (projects, experience, articles) carries own bilingual data — no i18n keys needed

## Content Collections

Projects and experience in `src/content/`. Add entry via JSON file:

```bash
src/content/projects/myproject.json
src/content/experience/mycompany.json
```

Required fields from Zod schemas in `src/content/config.ts`. Astro validates at build time.

## Adding content

- **New project/experience** → JSON in `src/content/` (Zod-validated, bilingual inline)
- **New article** → entry in `src/data/articles.ts`
- **New skill** → item in `src/data/skills.ts`
- **New UI string** → key in `src/i18n/locales/es.ts` **and** `src/i18n/locales/en.ts`

## Site config

All author data, email, URLs, social links in `src/config/site.ts`. Never hardcode elsewhere.

## SEO

Full meta in `src/layouts/Layout.astro`: title, description, canonical, OG, Twitter Card, hreflang, JSON-LD Person schema, sitemap, robots.txt.

## Deployment

Multi-stage Docker: Node 22 builds → nginx:alpine serves `dist/`.