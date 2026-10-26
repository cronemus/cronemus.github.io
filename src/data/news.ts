// Dated one-line updates shown on the homepage (latest few) and at /news/ (all).
//
// To add an entry: append an object anywhere in the array — entries are sorted
// by `date` (newest first) at render time. Keep `html` to one sentence; inline
// <a> links are fine. `date` is an ISO date used for sorting and, by default,
// for display ("September 8, 2026"). Set `label` to override the displayed date
// when only a season or month is meaningful ("Summer 2026"). Set `image` to show
// a photo under the sentence (optimize it into public/media first).

export interface NewsItem {
  date: string;   // YYYY-MM-DD
  html: string;   // one sentence; inline HTML allowed
  label?: string; // optional display override for the date
  image?: {       // optional photo shown under the sentence
    src: string;
    alt: string;
    caption?: string; // inline HTML allowed
  };
}

export const news: NewsItem[] = [
  {
    date: '2026-10-26',
    html:
      'Our paper on Miocene surface uplift and moisture-source change in the southern Central Andes (~32°S), resolved with paired volcanic glass and pedogenic carbonate isotopes, has been accepted in <em>Earth and Planetary Science Letters</em>.',
    image: {
      src: '/media/2026/10/manantiales-paleoelevation.png',
      alt: 'Graph of paleoelevation in kilometres against age in millions of years for seven sample groups: estimates of about 0.5 to 0.9 km before 18.5 Ma rise to about 2.2 to 2.6 km by 17 to 15 Ma, near the modern Manantiales basin elevation of about 2.55 km.',
      caption:
        'Paleoelevation estimates for the Manantiales basin from pedogenic carbonate (circles) and volcanic glass (triangles); carbonate data record ~1.9 km of surface uplift, mostly between ~18.6 and 16.5 Ma. MCO, Miocene Climatic Optimum.',
    },
  },
  {
    date: '2026-10-14',
    label: 'October 2026',
    html:
      'A great GSA Connects in Denver: <a href="/teaching/">Amarissa Cramer and Tiana Hursh</a> presented posters on the detrital zircon and basin record of coastal Chile, and I convened the Pardee Keynote Symposium <em>Bottoms Up</em> and a session on the pre-Neogene tectonic evolution of South America, co-taught a short course on detrital geochronology data, and gave an invited talk, <em>Whence the lustrous stones?</em>, on the provenance of Paleogene gravels in the Andean foreland.',
    image: {
      src: '/media/2026/10/gsa-2026-cramer-hursh-posters.jpg',
      alt: 'Amarissa Cramer and Tiana Hursh, arms raised in celebration, standing at either end of their two research posters in the GSA Connects poster hall',
      caption:
        'Amarissa Cramer (left) and Tiana Hursh (right) with their posters, &ldquo;No allochthons allowed&rdquo; and &ldquo;Faulted and twice drowned.&rdquo;',
    },
  },
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
