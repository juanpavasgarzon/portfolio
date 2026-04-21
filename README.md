# pavas.dev — Portfolio

Personal portfolio of **Juan Fernando Pavas Garzón**, Full-Stack Developer based in Medellín / Rionegro, Colombia.

🌐 [portfolio.pavas.io](https://portfolio.pavas.io)

## Stack

Vanilla HTML, CSS, and JavaScript — no frameworks, no build step.

| File | Purpose |
|------|---------|
| `index.html` | Markup + i18n data attributes |
| `styles.css` | All styles (custom properties, dark/light theme) |
| `script.js` | i18n, animations, custom cursor, contact form |
| `favicon.svg` | SVG favicon matching the nav logo |
| `CV-Juan-Pavas.pdf` | Downloadable CV |

## Features

- Dark / light theme toggle
- Spanish / English i18n
- Custom animated cursor
- Scroll-reveal animations
- Contact form via `mailto:`
- Served via nginx on Docker

## Run locally

```bash
# Plain browser
open index.html

# Docker
docker build -t portfolio .
docker run -p 8080:80 portfolio
# → http://localhost:8080
```

## Deploy

The site is containerized with nginx:alpine. Build and push the image to your registry, then deploy to your host of choice.

```bash
docker build -t portfolio .
docker push <registry>/portfolio
```
