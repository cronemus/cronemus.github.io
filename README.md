# chanceronemus.com

Static academic portfolio site for Chance B. Ronemus, built with
[Astro](https://astro.build) and deployed to GitHub Pages. Migrated from
WordPress.com in July 2026.

## Quick reference

| Task | How |
|---|---|
| Preview locally | `npm install` once, then `npm run dev` → http://localhost:4321 |
| Edit a page | Edit the matching file in `src/pages/` and push |
| Update the CV | Edit `cv/cv.tex` and push — CI compiles it to `/files/cv.pdf` |
| Add an image | Put it under `public/media/` and reference it as `/media/...` |
| Deploy | Push to `main` — GitHub Actions builds and deploys automatically |

## Structure

```
├── src/
│   ├── layouts/Base.astro    # header, nav, footer, <head> — edit nav here
│   ├── styles/global.css     # all site styling (light + dark theme)
│   └── pages/                # one .astro file per page; filename = URL slug
├── public/                   # served verbatim at site root
│   ├── media/                # images & PDFs (web-optimized, from WP migration)
│   └── files/cv.pdf          # the CV's stable URL (CI overwrites from cv/cv.tex)
├── cv/                       # LaTeX CV source (see cv/README.md)
└── .github/workflows/deploy.yml  # LaTeX compile + Astro build + Pages deploy
```

## Pages and URLs

URL slugs intentionally match the old WordPress site so external links keep
working: `/cv/`, `/research/` (Publications), `/teaching/` (Research Group),
`/media/`, `/photography/`, `/climbing/`. The page `/research-projects/`
exists but is not linked in the navigation.

## The CV pipeline

`public/files/cv.pdf` is the single stable URL for the CV — every download
button on the site points there. When `cv/cv.tex` exists, the deploy
workflow compiles it with latexmk and overwrites that file on every push,
so the site always serves the current CV. No LaTeX installed locally is
needed; CI does the compilation.

## Media notes

- `public/media/` holds web-optimized copies (≤1600 px, metadata stripped).
  Full-resolution originals live outside this repo in the local
  `media-originals/` folder of the content workspace.
- The `YYYY/MM/` folder structure is inherited from WordPress uploads; new
  images can go anywhere under `public/media/`.
