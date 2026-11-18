# Portfolio

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-green)
![Deploy](https://img.shields.io/badge/deploy-vercel-black)
![Tech](https://img.shields.io/badge/stack-React%20%7C%20Tailwind%20%7C%20Motion-informational)

This repository contains my personal portfolio, developed to present projects, technical skills, and professional experience in software development.

## Overview

The portfolio showcases a selection of real-world projects, including freelance work, personal applications, and fullstack solutions. The focus is on performance, clean design, and practical problem-solving.

## Features

- Dark theme by default, with a one-click light theme (choice is remembered)
- Available in Portuguese, English and Spanish, each on its own URL (`/`, `/en/`, `/es/`), remembering the visitor's choice
- Hero slideshow with every live site, plus browser frames that scroll on hover
- SEO: every language is prerendered to static HTML at build time, with its own title, description, canonical, hreflang, Open Graph, sitemap and schema.org data (Person, ProfessionalService, FAQPage)
- FAQ section answering common client questions
- "In progress" tab, with private projects available on request
- Quote and contact forms that open the visitor's email app, no backend needed
- Motion with [Motion](https://motion.dev), respecting "reduce motion"

## Technologies

- React 19 + Vite
- Tailwind CSS v4
- Motion
- Lucide and React Icons

## Projects Included

- **Flávio Pisos e Revestimentos**: flooring store website (client)
- **Aline & Aramis**: wedding website with online gift registry (client)
- **Residencial Bem Cuidar**: senior living residence website (client)
- **SEA Treinamentos** and **Garcia Soluções Elétricas**: landing page and company website
- **Axyron Global**: offshore and wind energy company website (client)
- **60 industry templates** (clinics, restaurants, retail, home services, real estate, education, plus US-market sites in English), customizable through URL parameters
- In development: Trilha Fiel, FinTrack, NEXUS (AMD Developer Hackathon), Laura: The Temporal Ward, NEXUS.OS

Projects live in `src/Data/projetos.js`, templates in `src/Data/modelos.js`, interface text in `src/i18n/textos.js` and SEO metadata in `src/seo.js`.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Bryan-M-Almeida/portfolio.git
cd portfolio
npm install
npm run dev
```

## Deployment

The project is deployed on Vercel at [bryanmaciel.dev](https://www.bryanmaciel.dev). `npm run build` builds the client, renders each language with `src/entry-server.jsx` and writes `dist/index.html`, `dist/en/index.html`, `dist/es/index.html` and `dist/sitemap.xml` (`scripts/prerender.mjs`).

## Contact

GitHub: https://github.com/Bryan-M-Almeida

Portfolio: https://bryanmaciel.dev

## License

This project is licensed under the MIT License.
