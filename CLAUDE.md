# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

Static Astro site for chanceronemus.com — academic portfolio of Chance B.
Ronemus (geoscientist). Deployed to GitHub Pages via
`.github/workflows/deploy.yml` on push to `main`. Migrated from
WordPress.com in July 2026; URL slugs are preserved from the old site and
must not change without adding a redirect page.

## Conventions

- **Pages** are `.astro` files in `src/pages/`, wrapped in
  `<Base title="… — Chance B. Ronemus">` from `src/layouts/Base.astro`.
  Content is flat semantic HTML (no wrapper divs): direct children of
  `<Base>` get prose width from CSS; use class `wide`, `gallery` (uniform
  grid), or `masonry` (aspect-preserving columns) on a direct child to go
  wide.
- **Styling** lives only in `src/styles/global.css` (CSS variables, light +
  dark themes). No inline styles; no per-page style blocks unless truly
  page-specific. Available classes: `buttons`/`button`, `gallery`,
  `masonry`, `video-embed`, `publication`, `headshot`, `caption`, `center`.
- **Images**: `<figure><img src="/media/…" alt="…" loading="lazy" /><figcaption>…</figcaption></figure>`.
  Always write meaningful alt text. Optimize new photos before committing
  (≤1600 px long edge, quality ~82; `magick in.jpg -auto-orient -strip
  -resize '1600x1600>' -quality 82 out.jpg`).
- **Navigation** is the `nav` array in `src/layouts/Base.astro` — one place.
- **YouTube embeds** use `youtube-nocookie.com` inside
  `<div class="video-embed">`.

## The CV rule (important)

The CV has exactly one URL: `/files/cv.pdf`. Never link a dated CV
filename. To update the CV, edit `cv/cv.tex` (CI recompiles and publishes
it) or, if no LaTeX source exists yet, replace `public/files/cv.pdf`.

## Verification

`npm run build` must pass before pushing. After content edits that touch
media paths, check for broken references:
`grep -rho '/media/[^"'"'"' )]*' src/ | sort -u | while read p; do [ -f "public$p" ] || echo "MISSING $p"; done`

## Adding a blog later

Planned but not built: use an Astro content collection
(`src/content/posts/*.md`) with a listing page and RSS via
`@astrojs/rss`. Keep post URLs under `/posts/…`.
