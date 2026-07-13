# Kavya Pandya — portfolio

Personal academic portfolio. Built with **Next.js 15 (App Router)**, statically exported
(`output: 'export'`) and deployed to **GitHub Pages** via GitHub Actions — mirroring the
setup in `ParthPersonal/portfolio`, minus Tailwind (plain CSS here for a lighter footprint).

Live: https://pandyakavya.github.io/kavya-pandya-portfolio/

## Editing content

Almost everything lives in **`src/lib/site.ts`** — name, links, bio, news, research,
methods, publications, education. Edit that file; no JSX needed. Assets (`profile.jpg`,
`cv.pdf`) live in `public/`.

Design (fonts, colors, layout) is in `src/app/globals.css`.
Page structure is `src/app/page.tsx`; `<head>`/SEO/JSON-LD is `src/app/layout.tsx`.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000/kavya-pandya-portfolio
npm run build    # static export -> ./out
```

## Deployment

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and force-pushes
`out/` to the **`gh-pages`** branch. One-time setup in **Settings → Pages**: set
*Source = Deploy from a branch → `gh-pages` / (root)*.

> **URL / basePath note.** This is a *project* site served under
> `/kavya-pandya-portfolio/`, so `next.config.ts` sets `basePath`. If you rename the repo
> to `PandyaKavya.github.io` (a *user* site at the domain root), delete the `basePath` line.
