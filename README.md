# Marcus Lundberg Portfolio

Personal portfolio built with React + Vite.

## Tech Stack

- React
- React Router (`HashRouter`)
- Vite
- GitHub Pages

## Run Locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Production Build

```bash
npm run build
```

Build output is generated in `dist/`.

## Deployment

### GitHub Actions (recommended)

Deployment workflow is configured in:

- `.github/workflows/deploy.yml`

Push to `main` triggers automatic deploy.

In GitHub repo settings:

1. Go to `Settings -> Pages`
2. Set `Source` to `GitHub Actions`

### Fallback: `gh-pages` branch (manual)

If needed, deploy manually:

```bash
npx gh-pages@6 -d dist -b gh-pages
```

Then set:

1. `Settings -> Pages`
2. `Source: Deploy from a branch`
3. Branch: `gh-pages`, folder: `/(root)`
