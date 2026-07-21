# Codecider Lab Website — Developer Guide

> Started 2026-07-14 · React 19 + Vite 8 · Live: https://codeciderluke.github.io/CodeciderLab/

## 1. Project Overview

The official website of Codecider Lab. Its purpose is to distribute the software built by
the lab across topic-based categories, and to run a dedicated discussion board for each
piece of software so visitors can share feedback freely.

**Brand concept** (based on `CodeCider.png`)

- **Code + Cider** — a blend of "code" and a fermented drink: ferment ideas into something valuable.
- **Co-Decider** — an intelligent partner where the AI and the user decide together.
- Visuals: navy (`#1a2b4a`) + cider green (`#3faf4e`), with a bottle-motif logo in which
  Python / C++ / JS / React badges float like carbonation bubbles inside the bottle.

## 2. Tech Stack

| Area | Choice | Notes |
|---|---|---|
| Framework | React 19 + Vite 8 | JavaScript (no TypeScript) |
| Routing | react-router-dom | BrowserRouter + `basename=import.meta.env.BASE_URL` |
| i18n | Custom Context (`src/i18n/`) | English by default, KO toggle, persisted to localStorage |
| Boards | localStorage | Client-only (no server backend) |
| Styling | Single CSS file (`src/index.css`) | CSS-variable design system |
| Deploy | GitHub Actions → GitHub Pages | Auto-deploy on push to main |

## 3. Project Structure

```
codeciderweb/
├── .github/workflows/deploy.yml   # Automatic Pages deploy
├── public/favicon.svg             # Bottle-motif favicon
├── src/
│   ├── main.jsx                   # Router + LanguageProvider bootstrap
│   ├── App.jsx                    # Route definitions, ScrollToTop
│   ├── index.css                  # Whole design system
│   ├── i18n/
│   │   ├── LanguageContext.jsx    # lang state, toggleLang, t() hook
│   │   └── translations.js        # EN/KO string dictionary
│   ├── data/
│   │   ├── categories.jsx         # 6 categories (icon SVG + color), legacy-id redirect map
│   │   └── software.js            # Software registry (bilingual)
│   ├── components/
│   │   ├── Logo.jsx               # Bottle logo (animated option)
│   │   ├── Header.jsx / Footer.jsx
│   │   ├── CategoryCard.jsx / SoftwareCard.jsx
│   │   └── Board.jsx              # Board (posts/comments, localStorage)
│   └── pages/
│       ├── Home.jsx               # Hero → Latest Software → Categories
│       ├── SoftwareIndex.jsx      # Category listing
│       ├── CategoryPage.jsx       # Software listing per category
│       ├── SoftwareDetail.jsx     # Overview/features/benchmark/tech stack + discussion tab
│       ├── BoardsIndex.jsx / BoardPage.jsx
│       ├── About.jsx              # Why Codecider + mission/operations/roadmap
│       └── NotFound.jsx
└── vite.config.js                 # base = VITE_BASE (Pages: /CodeciderLab/)
```

### Routes

| Path | Page |
|---|---|
| `/` | Home (hero, latest software, categories) |
| `/software` | Category listing |
| `/software/:categoryId` | Software per category |
| `/software/:categoryId/:softwareId` | Detail (overview / discussion tabs) |
| `/software/<old category id>[/:softwareId]` | Redirects to the current id (see 4.1) |
| `/boards`, `/boards/:softwareId` | Board listing / individual board |
| `/about` | About the organization |

## 4. Key Features

### 4.1 Software Categories (6 types, each with its own icon + color)

Order follows the definitions in `src/data/categories.jsx`. The taxonomy is unified along a
single axis — **"what the user does with it" (problem domain)** — into these 6 categories.

| ID | Name | Color | Scope |
|---|---|---|---|
| `file-system` | File & System | `#46a758` | Compression, file sorting, system info, everyday utilities |
| `media` | Media | `#7c5cd6` | Photo / video / audio processing & classification |
| `automation` | Automation | `#3a7bd5` | RPA, workflows, IoT, smart home, repetitive work/life tasks |
| `ai` | AI Tools | `#5b6ef5` | LLM agents, chatbots, AI-powered apps |
| `knowledge` | Information & Learning | `#e8913a` | Reference, dashboards, knowledge, tutorials, education |
| `experiments` | Experiments & Fun | `#e0559a` | Games, interactive toys, creative experiments |

These 6 categories replace the earlier 8-category scheme (`automation`, `multimedia`,
`information`, `utilities`, `life-automation`, `ai-agent`, `play-toy`, `education`). That
scheme mixed classification axes, split "automation" three ways, and left many categories
empty. To keep existing links alive, the old ids are preserved in the
`legacyCategoryRedirects` map in `categories.jsx` (`utilities`, `information` → `file-system`;
`multimedia` → `media`; `life-automation` → `automation`; `ai-agent` → `ai`;
`play-toy` → `experiments`; `education` → `knowledge`), and `App.jsx` generates redirect
routes from that map. When changing a category id in the future, add one line to the map the
same way.

### 4.2 Internationalization (EN default / KO toggle)

- The `EN | KO` toggle in the header → `LanguageContext` switches all UI strings.
- The selected language is stored in `localStorage('codecider-lang')`.
- UI strings live in `translations.js`; software copy lives in `software.js` as `{ en, ko }`.

### 4.3 Software Detail Page

Version / release date / license / language metadata, overview, key features, benchmark,
tech stack, and Download / GitHub buttons. A tab switches to the discussion board.

**Registered software** (per `src/data/software.js`)

| Software | Category | License | Summary |
|---|---|---|---|
| [ultra-fast-zip](https://github.com/codeciderluke/ultra-fast-zip) | File & System | MIT | Block-based Zstandard compression tool using the .ufz format |
| [ultra-fast-copy](https://github.com/codeciderluke/ultra-fast-copy) | File & System | MIT | High-performance Windows file copy/move tool (CLI + PySide6 GUI) |
| [human-photo-classifier](https://github.com/codeciderluke/human-photo-classifier) | Media | AGPL-3.0 | Photo classification via YOLOv11 person detection |
| [photo-time-classifier](https://github.com/codeciderluke/photo-time-classifier) | Media | AGPL-3.0 | Sorting photos by EXIF capture time |
| [Mycom-Information](https://github.com/codeciderluke/Mycom-Information) | File & System | GPL-3.0-or-later | PC hardware/software spec dashboard |
| [My-Network-Monitor](https://github.com/codeciderluke/My-Network-Monitor) | File & System | MIT | Real-time Windows network traffic monitor (PySide6) |
| [openLLM-Analyzer](https://github.com/codeciderluke/openLLM-Analyzer) | AI Tools | MIT | Read-only inspector for Ollama models & GGUF/Modelfiles |
| [Document-Translator](https://github.com/codeciderluke/Document-Translator) | Automation | MIT (frontend) | Local EN/JA/KO/ZH text & document translator with layout-preserving export |

### 4.4 Boards

- An independent board per software (`Board.jsx`, key: `codecider-board-<id>`).
- Post creation (name/title/body) + comments, with a collapsible/expandable list.
- Currently localStorage-based → stored per visitor's browser (server integration is future work).

### 4.5 Logo (`Logo.jsx`)

- SVG bottle: gradient glass + green cap + highlight.
- Inside are JS (yellow square), Python (blue/yellow circles), React (atom), C++ (blue circle) badges and bubbles.
- The `animated` prop → badge bob + rising-bubble animation (home hero only).

## 5. Deploy Pipeline

1. Push to `main` → `.github/workflows/deploy.yml` runs.
2. `npm ci && npm run build` (`VITE_BASE=/CodeciderLab/`).
3. Copy `dist/index.html → dist/404.html` (SPA deep-link fallback).
4. Publish to GitHub Pages via `actions/deploy-pages`.

Local development: `npm run dev` (http://localhost:5173) · Build: `npm run build`

## 6. How to Add Software

Add a single item to the `src/data/software.js` array and the category listing, detail page,
and board are generated automatically. Required fields:

```js
{
  id: 'my-tool',            // URL slug + board key
  name: 'My Tool',
  category: 'file-system',  // an id from categories.jsx
  version: '1.0.0', released: 'YYYY-MM-DD',
  license: 'MIT', language: 'Python 3.11+',
  github: '...', downloadUrl: '...',
  summary: { en, ko }, overview: { en, ko },
  features: { en: [...], ko: [...] },
  techStack: [...],
  benchmark: { en, ko },     // optional — the section is dropped from the detail page if absent
}
```

`category` must be a current id from `categories.jsx`. `SoftwareDetail` checks that the URL's
`categoryId` matches `item.category`, so an old id will 404.

## 7. Development History

1. Scaffolded the Vite React app and built the whole site (categories / i18n / detail / boards).
2. Logo redesign — the floating-language-badge-in-a-bottle concept, simplified header,
   moved the "Why Codecider?" section from Home → About.
3. Reordered home sections: Latest Software above Categories.
4. GitHub deploy — made the repo public, set up the Pages + Actions pipeline.
5. Category rework — replaced the 8-category scheme with the current single-axis 6-category scheme.

## 8. Roadmap

- [ ] Board server backend (Firebase/Supabase, etc.) — share posts across all visitors.
- [ ] Ads/sponsorship area (operating model), premium content (selling full source & docs).
- [ ] Register more software and expand categories.
- [ ] Connect a custom domain (optional).
