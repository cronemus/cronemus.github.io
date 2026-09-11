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
filename. The PDF **auto-publishes from the LaTeX source** in the separate
repo `~/Desktop/CV/Ronemus-CV-Tex`: compiling `main.tex` there runs
`publish-cv.sh` (wired via that repo's `.latexmkrc` `$success_cmd`), which
copies the freshly built PDF to `public/files/cv.pdf` and commits + pushes
it — so the Pages deploy refreshes the CV automatically. To update the CV,
recompile it in that repo; don't hand-edit `public/files/cv.pdf` (a direct
replace works in a pinch). `deploy.yml` also carries a **dormant** CI path
that would compile `cv/cv.tex` if it ever existed — currently unused; we
deliberately publish the locally-built PDF instead.

## Verification

`npm run build` must pass before pushing. After content edits that touch
media paths, check for broken references:
`grep -rho '/media/[^"'"'"' )]*' src/ | sort -u | while read p; do [ -f "public$p" ] || echo "MISSING $p"; done`

## Adding a blog later

**News list** (built 2026-09-10): `src/data/news.ts` holds dated one-line
entries; `src/components/NewsList.astro` renders them newest-first (`limit`
prop); `/news/` shows all, the homepage shows the latest three. To post news,
append an object to the array — no other file changes needed. Use `label`
for season-level dates ("Summer 2026"). There is no blog, RSS, or content
collection by design; keep entries to one sentence.

## Inbox from _UCALGARY hub
- 2026-09-09 — Tinguiririca paper published online 2026-09-08 (*JGR: Solid Earth* 131(9), e2026JB034002, https://doi.org/10.1029/2026JB034002, open access) — `src/content/cv-body.html` still says *in press*; it regenerates from the CV build (dispatched to the CV spoke), so after that build check the CV / Publications page shows the full citation with a DOI link; if a news line exists anywhere on the site, add one — see ~/Documents/_UCALGARY/DECISIONS.md
