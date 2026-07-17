# CodeciderLab

Codecider Lab Website — *Code + Cider, Co-Decider*

The official website of **Codecider Lab**: we distribute software built by the lab across categories (Work Automation, Multimedia, Information, Utilities), each with its own discussion board. English by default, with a Korean (KO) toggle.

## Tech Stack

- React 19 + Vite
- react-router-dom
- Custom lightweight i18n (EN/KO), localStorage-persisted

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site and deploys it to GitHub Pages under `/CodeciderLab/`.

## Adding Software

Add an entry to `src/data/software.js` — the category listing, detail page, and discussion board are generated automatically.
