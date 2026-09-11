// Dated one-line updates shown on the homepage (latest few) and at /news/ (all).
//
// To add an entry: append an object anywhere in the array — entries are sorted
// by `date` (newest first) at render time. Keep `html` to one sentence; inline
// <a> links are fine. `date` is an ISO date used for sorting and, by default,
// for display ("September 8, 2026"). Set `label` to override the displayed date
// when only a season or month is meaningful ("Summer 2026").

export interface NewsItem {
  date: string;   // YYYY-MM-DD
  html: string;   // one sentence; inline HTML allowed
  label?: string; // optional display override for the date
}

export const news: NewsItem[] = [
  {
    date: '2026-09-08',
    html:
      'Our paper on Cretaceous thinning and rapid Neogene thickening of the Andean crust at ~35°S is out, open access, in <a href="https://doi.org/10.1029/2026JB034002"><em>JGR: Solid Earth</em></a>.',
  },
  {
    date: '2026-09-01',
    label: 'Fall 2026',
    html:
      'I started as an Assistant Professor in the Department of Earth, Energy &amp; Environment at the University of Calgary, and I am <a href="/join/">recruiting M.Sc. and Ph.D. students</a> for funded positions.',
  },
  {
    date: '2026-07-01',
    label: 'Summer 2026',
    html:
      'I spent the summer as a Visiting Postdoctoral Scholar at Stanford University, working with Stephan Graham on the Mesozoic forearc record of coastal Chile.',
  },
  {
    date: '2026-05-01',
    label: 'Spring 2026',
    html:
      'Congratulations to Parker Hazelbush on finishing his B.S. at Idaho State, and to Tiana Hursh on presenting our coastal Chile basin work at the ISU Research and Creative Works Symposium.',
  },
  {
    date: '2026-02-01',
    label: 'Winter 2025–26',
    html:
      'Six weeks of fieldwork in the Coastal Cordillera of Chile with ISU undergraduates, targeting the Triassic–Jurassic forearc basin record of terrane accretion; see the <a href="/teaching/">research group page</a> for photos.',
  },
  {
    date: '2025-11-01',
    label: 'Fall 2025',
    html:
      'Presented new crustal-thickness results from the southern Central Andes at GSA Connects, and gave invited talks at Idaho State, the University of Alaska Fairbanks, and the Montana Bureau of Mines and Geology.',
  },
  {
    date: '2025-08-01',
    label: '2025',
    html:
      'Awarded an NSF Earth Sciences Postdoctoral Fellowship (EAR-PF) and joined Kurt Sundell’s group at Idaho State University to study terrane accretion in the Chilean forearc.',
  },
  {
    date: '2025-05-01',
    label: 'Spring 2025',
    html:
      'Defended my Ph.D. at the University of Arizona: <em>Cretaceous to Cenozoic Evolution of the Southern Central Andes and Basins Therein</em> (advisor Peter DeCelles).',
  },
];
