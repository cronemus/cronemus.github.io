# CV source

Drop your LaTeX CV source here as `cv.tex` (plus any `.bib`, `.cls`, or
image files it needs).

Once `cv/cv.tex` exists, the deploy workflow
(`.github/workflows/deploy.yml`) compiles it on every push and publishes
the result at the stable URL:

    https://chanceronemus.com/files/cv.pdf

Every "Download CV" link on the site points at that URL, so updating your
CV means editing `cv.tex` and pushing — nothing else.

Until `cv.tex` is added, the committed fallback at `public/files/cv.pdf`
is served as-is. To update the CV without LaTeX, just replace that file.
