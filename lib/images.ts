import { withBasePath } from './basePath';

// Central image manifest. URL-encoded paths handle spaces/parens in filenames.
// All URLs are prefixed with the GitHub Pages base path.
const enc = (name: string) => withBasePath(`/images/${encodeURIComponent(name)}`);

export const portraits = {
  primary: enc('charmi.jpg'),
  candid: enc('charmi(1).jpg'),
  soft: enc('charmi.jpeg'),
};

export type ProjectKey =
  | 'AltTask'
  | 'WebNX'
  | 'Cryo India'
  | 'Plasma Motors'
  | 'Ice Cream App'
  | 'Element Retail'
  | 'NovaPath'
  | 'CrypttoShala'
  | 'Giant Riding Club'
  | 'The EcoGenesis'
  | 'Sahil Foods';

export const projectImages: Record<ProjectKey, { hero: string; alt: string; stack: string[] }> = {
  AltTask: {
    hero: enc('AltTask.png'),
    alt: enc('alttasklogo.png'),
    stack: [enc('AltTask.png'), enc('alttasklogo.png')],
  },
  WebNX: {
    hero: enc('lodestar.png'),
    alt: enc('lodestar(1).png'),
    stack: [enc('lodestar.png'), enc('lodestar(1).png'), enc('aii.png')],
  },
  'Cryo India': {
    hero: enc('cryoindia.png'),
    alt: enc('atcryo.png'),
    stack: [enc('cryoindia.png'), enc('cryoindia(1).png'), enc('atcryo.png'), enc('atcryo(1).png')],
  },
  'Plasma Motors': {
    hero: enc('plasma.png'),
    alt: enc('plasmaapp.png'),
    stack: [enc('plasma.png'), enc('plasma.jpg'), enc('plasmaapp.png'), enc('plasmaapps.png')],
  },
  'Ice Cream App': {
    hero: enc('Icecream-app.jpg'),
    alt: enc('Icecream-app(1).jpg'),
    stack: [enc('Icecream-app.jpg'), enc('Icecream-app(1).jpg')],
  },
  'Element Retail': {
    hero: enc('Giant1.jpg'),
    alt: enc('Ambassador-ride-teaser.jpg'),
    stack: [
      enc('Giant1.jpg'),
      enc('Ambassador-ride-teaser.jpg'),
      enc('Alumni-Ride.jpg'),
      enc('New-year-ride.jpg'),
      enc('Christmasday-ride.jpg'),
    ],
  },
  NovaPath: {
    hero: enc('dariyaav.png'),
    alt: enc('dariyaav(1).png'),
    stack: [enc('dariyaav.png'), enc('dariyaav(1).png')],
  },
  CrypttoShala: {
    hero: enc('leiktro.png'),
    alt: enc('leiktro(1).png'),
    stack: [enc('leiktro.png'), enc('leiktro(1).png')],
  },
  'Giant Riding Club': {
    hero: enc('Ahmedabad ride 1.png'),
    alt: enc('Ahmedabad.png'),
    stack: [
      enc('Ahmedabad ride 1.png'),
      enc('Ahmedabad.png'),
      enc('Alumini Ride rose gold.png'),
      enc('Ambassador ride silver.png'),
      enc('New year Ride.png'),
      enc('Zwift (2).png'),
    ],
  },
  'The EcoGenesis': {
    hero: enc('eco.png'),
    alt: enc('eco(1).png'),
    stack: [enc('eco.png'), enc('eco(1).png'), enc('ebook.png'), enc('ebook(1).png')],
  },
  'Sahil Foods': {
    hero: enc('sahil.png'),
    alt: enc('sahil(1).png'),
    stack: [enc('sahil.png'), enc('sahil(1).png')],
  },
};

export const socialPosters = [
  enc('post 1.png'),
  enc('post 2.png'),
  enc('post 3.png'),
  enc('post 4.png'),
  enc('post 5.png'),
  enc('post 6.png'),
  enc('post 7.png'),
  enc('post 8.png'),
  enc('post 9.png'),
  enc('post 10.png'),
  enc('post 11.png'),
];

export const occasionPosters = [
  enc('Independence-day.jpg'),
  enc('Janmashtami.jpg'),
  enc('mothers-day.jpg'),
];

export const editorialAssets = {
  bookCovers: [enc('bookcover1.png'), enc('bookcover2.png')],
  graphicDesign: [enc('graphic-design.png'), enc('graphic-design(1).png')],
  misc: [enc('unnamed.png'), enc('1.jpg')],
};

// Lookup helpers
export const heroFor = (title: ProjectKey) => projectImages[title].hero;

// Reels (vertical 9:16 motion work)
const reel = (slug: string) => withBasePath(`/images/reels/${slug}.mp4`);
const poster = (slug: string) => withBasePath(`/images/reels/posters/${slug}.jpg`);

export type Reel = {
  slug: string;
  src: string;
  poster: string;
  title: string;
  tag: string;
};

export const reels: Reel[] = [
  { slug: 'VAGzJ3FbkJA', src: reel('VAGzJ3FbkJA'), poster: poster('VAGzJ3FbkJA'), title: 'Ride Drop', tag: 'Cycling / Social' },
  { slug: 'VAHI4FOp5DQ', src: reel('VAHI4FOp5DQ'), poster: poster('VAHI4FOp5DQ'), title: 'Element Edit', tag: 'Retail / Brand' },
  { slug: 'VAHI4NHMfSg', src: reel('VAHI4NHMfSg'), poster: poster('VAHI4NHMfSg'), title: 'Studio Cut', tag: 'In-house / Motion' },
  { slug: 'VAGzJ45qBKE', src: reel('VAGzJ45qBKE'), poster: poster('VAGzJ45qBKE'), title: 'Pace Sequence', tag: 'Sport / Edit' },
  { slug: 'VAHI4BkSwFQ', src: reel('VAHI4BkSwFQ'), poster: poster('VAHI4BkSwFQ'), title: 'Field Notes', tag: 'Campaign / Edit' },
  { slug: 'VAHI4DtaYLU', src: reel('VAHI4DtaYLU'), poster: poster('VAHI4DtaYLU'), title: 'Soft Launch', tag: 'Social / Reveal' },
  { slug: 'VAGzJujV-Vw', src: reel('VAGzJujV-Vw'), poster: poster('VAGzJujV-Vw'), title: 'Tempo Ride', tag: 'Giant / Motion' },
  { slug: 'VAHI4AYGNlU', src: reel('VAHI4AYGNlU'), poster: poster('VAHI4AYGNlU'), title: 'Brand Moment', tag: 'Identity / Reveal' },
  { slug: 'VAHI4BD5DXU', src: reel('VAHI4BD5DXU'), poster: poster('VAHI4BD5DXU'), title: 'Open House', tag: 'Retail / Loop' },
  { slug: 'VAHC3W3HQ_k', src: reel('VAHC3W3HQ_k'), poster: poster('VAHC3W3HQ_k'), title: 'After Hours', tag: 'Atmosphere / Edit' },
  { slug: 'VAGzJ9QJipo', src: reel('VAGzJ9QJipo'), poster: poster('VAGzJ9QJipo'), title: 'Quick Cut', tag: 'Promo / Social' },
  { slug: 'VAHI4IccN94', src: reel('VAHI4IccN94'), poster: poster('VAHI4IccN94'), title: 'Notebook', tag: 'Studio / Diary' },
];

export const featuredReel = reels[1]; // Element Edit — longest hero reel
