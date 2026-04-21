# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

Vanilla HTML, CSS, JavaScript — zero dependencies, zero build step. No npm, no framework, no bundler.

## Run Locally

```bash
open index.html          # direct in browser

docker build -t portfolio .
docker run -p 8080:80 portfolio   # → http://localhost:8080
```

## Architecture

Single-page portfolio with three files doing all the work:

| File | Role |
|------|------|
| `index.html` | Markup with `data-i18n` attributes for bilingual content |
| `script.js` | i18n engine, dynamic rendering, cursor, animations, form |
| `styles.css` | Full design system: CSS custom properties, dark/light themes |

**script.js internals:**
- Lines 4–227: bilingual dictionary (ES/EN) + i18n engine (`data-i18n` → `textContent`)
- Lines 238–386: renders SKILLS, EXPERIENCE, PROJECTS, ARTICLES arrays → `innerHTML`
- Lines 388+: theme toggle, custom cursor, IntersectionObserver scroll reveal, contact form

**i18n pattern:** Add `data-i18n="section.key"` to HTML, add matching keys to both `translations.es` and `translations.en` in script.js.

**Adding content** (skills, projects, experience, blog): edit the arrays near the top of `script.js`; the render functions pick them up automatically.

**Theme system:** CSS custom properties on `:root` with `[data-theme="light"]` override. Both dark and light values required when adding new color tokens.

**Persistence:** theme and language selections saved to `localStorage`.

## Deployment

Containerized with `nginx:alpine`. The Dockerfile copies `index.html`, `styles.css`, `script.js`, `favicon.svg`, and `CV-Juan-Pavas.pdf` to `/usr/share/nginx/html`.

```bash
docker build -t portfolio .
docker push <registry>/portfolio
```
