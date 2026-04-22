# pavas.dev — Portfolio

Personal portfolio of **Juan Fernando Pavas Garzón**, Full-Stack Developer based in Medellín / Rionegro, Colombia.

🌐 [pavas.dev](https://pavas.dev)

## Stack

Astro 5 SSG · TypeScript · Vanilla CSS · Nginx · Docker

| Layer | Detail |
|-------|--------|
| Framework | Astro 5 with i18n routing (`/` = ES, `/en/` = EN) |
| Content | Astro Content Collections (JSON) + Zod validation |
| i18n | Typed locale files with `satisfies Locale` shape check |
| Styles | Vanilla CSS custom properties, dark/light theme |
| SEO | OG, Twitter Card, hreflang, JSON-LD, sitemap |
| Deploy | Multi-stage Docker: Node 22 builder → nginx:alpine |

## Run locally

```bash
npm install
npm run dev        # → http://localhost:4321

# Docker
docker build -t portfolio .
docker run -p 8080:80 portfolio   # → http://localhost:8080
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # serve dist/ locally
npm run check      # TypeScript type-check (requires @astrojs/check)
```

## Project structure

```
src/
  config/site.ts        # single source of truth — name, email, URLs
  content/
    config.ts           # Zod schemas for Content Collections
    projects/*.json     # bilingual project entries
    experience/*.json   # bilingual experience entries
  data/
    skills.ts           # skill groups with bilingual labels
    articles.ts         # blog article links
  i18n/
    locales/es.ts       # UI string source of truth
    locales/en.ts       # enforced shape via `satisfies Locale`
    index.ts            # typed useT(lang) helper
  components/           # Astro components (one per section)
  layouts/Layout.astro  # full SEO head, scripts, cursor
  pages/
    index.astro         # ES (default locale)
    en/index.astro      # EN
  styles/global.css     # design tokens, dark/light theme
public/
  favicon.svg
  CV-Juan-Pavas.pdf
```

## Adding content

See `.claude/skills/add-content/SKILL.md` for schemas and file locations.

## Deploy

```bash
docker build -t portfolio .
docker push <registry>/portfolio
```
