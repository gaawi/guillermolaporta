// Software. Things Guillermo has built, as opposed to music he wrote for software
// other people built: those are interactive-audio credits and live in the resume
// under Sound Design.
//
// Every entry was checked live before being added, and `image` is a real
// screenshot of the thing itself, taken at 1200x750. Four of these sit behind a
// password, so their screenshot is the sign-in card: that is the product's own
// mark, not a mock-up. If you add an entry, add it with a real link and a real
// screenshot, or with neither, never with a placeholder.
//
// kind:    App · Web app · Studio · Tool
// status:  Live · In development · Archived

export const software = [
  {
    slug: 'creartbox-app',
    name: 'CreArtBox',
    tagline: 'Digital Concert Hall',
    kind: 'App',
    year: '2025',
    status: 'Live',
    description:
      'A chamber music streaming app: live and recorded performances, curated playlists, and original CreArtBox productions. Built deliberately small, 1.9 MB, and it collects no data.',
    features: [
      'Offline audio downloads',
      'Automatic English and Spanish detection',
      'Video and audio recordings',
      'Curated playlists',
    ],
    stack: ['iOS 26', 'iPadOS', 'macOS (Apple silicon)', 'visionOS'],
    image: 'images/software/creartbox-app.jpg',
    url: 'https://apps.apple.com/us/app/creartbox/id6746415261',
    urlLabel: 'App Store',
  },
  {
    slug: 'digital-concert-hall',
    name: 'Digital Concert Hall',
    tagline: 'Streaming platform for the CreArtBox catalogue',
    kind: 'Web app',
    year: '2026',
    status: 'Live',
    description:
      'The browser side of the CreArtBox Digital Concert Hall. Recordings are browsable by composer, era or playlist, each listed with its performers and the quality it was captured at.',
    features: [
      'Filters by era, from the 18th century to the 21st',
      'Composer and search indexes',
      'Playlists and user profiles',
      '4K, HD and lossless tiers',
    ],
    stack: ['Web', 'Vercel'],
    image: 'images/software/dch.jpg',
    url: 'https://digitalconcerthall.vercel.app/',
    urlLabel: 'Open',
  },
  {
    slug: 'vela',
    name: 'Vela',
    tagline: 'A CRM that runs on your own mail',
    kind: 'Web app',
    year: '2026',
    status: 'Live',
    description:
      'A private CRM for an arts producer, built on top of Gmail rather than beside it: bookings with venues, private fundraising, partners, press and grants, all read from the mail that already exists.',
    features: [
      'Several Gmail accounts connected at once',
      'Past mail imported, then kept in sync',
      'Contacts appear by themselves, matched by address',
      'One history per person across every account',
    ],
    stack: ['TypeScript', 'Gmail API', 'OAuth', 'Vercel'],
    caseStudy: 'software/vela/',
    image: 'images/software/vela.jpg',
    url: 'https://crm-vert-chi.vercel.app/',
    urlLabel: 'Open',
  },
  {
    slug: 'polen',
    name: 'Polen',
    tagline: 'Grant tracker',
    kind: 'Web app',
    year: '2026',
    status: 'Live',
    description:
      'Keeps the grant work in one place. Anyone can suggest a call through a public form without signing in; only the owner reads, accepts or rejects what comes in, which is enforced by the database rather than by the page.',
    features: [
      'Public suggestion form, no account needed',
      'Row-level security on every table',
      'Sign in by password or emailed link',
    ],
    stack: ['HTML', 'Supabase', 'PostgreSQL'],
    image: 'images/software/polen.jpg',
    url: 'https://gaawi.github.io/polen/',
    urlLabel: 'Open',
  },
  {
    slug: 'opencall',
    name: 'Open Call',
    tagline: 'Reading the applications to Festival ADAR',
    kind: 'Web app',
    year: '2026',
    status: 'Live',
    description:
      'Built to get through the Composer in Residence call. A CSV or Excel export of the applications goes in, and the reading, the shortlist and the published result come out the other side.',
    features: [
      'Import from CSV or Excel',
      'Work through candidates one by one',
      'Shortlist and results as separate stages',
    ],
    stack: ['Web', 'GitHub Pages'],
    image: 'images/software/opencall.jpg',
    url: 'https://gaawi.github.io/opencall/',
    urlLabel: 'Open',
  },
  {
    slug: 'editorial-cola',
    name: 'Editorial Cola',
    tagline: 'Approving posts the way they will be seen',
    kind: 'Web app',
    year: '2026',
    status: 'Live',
    description:
      'An approval queue for social posts that shows each one as it will actually appear on Instagram and Facebook, as a wall that scrolls like the app, rather than as rows in a spreadsheet. It does three things: show, decide, save.',
    features: [
      'Phone-sized preview of the real feed',
      'Four decisions on every post',
      'Drafts stay private until approved',
    ],
    stack: ['JavaScript', 'Vercel', 'GitHub auth'],
    image: 'images/software/editorial-cola.jpg',
    url: 'https://editorial-cola.vercel.app/',
    urlLabel: 'Open',
  },
  {
    slug: 'petate',
    name: 'Petate',
    tagline: 'One wardrobe across two countries',
    kind: 'Web app',
    year: '2026',
    status: 'Live',
    description:
      'A family clothing inventory for a household split between New York and Spain: wardrobes in both places, the suitcases that move between them, a photo of each garment and tags for season, size, condition and use.',
    features: [
      'Two homes and the luggage in between',
      'A photo per garment',
      'Same view on phone and desktop, in sync',
    ],
    stack: ['Static site', 'Supabase', 'GitHub Pages'],
    image: 'images/software/petate.jpg',
    url: 'https://gaawi.github.io/petate/',
    urlLabel: 'Open',
  },
  {
    slug: 'gaawi',
    name: 'Gaawi',
    tagline: 'Design and development studio',
    kind: 'Studio',
    year: '2013',
    status: 'Live',
    description:
      'An independent studio building brand identity, websites and marketing for artists and small businesses.',
    features: [],
    stack: ['HTML', 'CSS', 'WordPress', 'Shopify'],
    // No link and no screenshot on purpose: gaawi.com currently serves a GoDaddy
    // parking page offering the domain for sale, so linking it would send people
    // from the portfolio to a "for sale" sign. Put both back once it resolves to
    // the studio again.
    image: null,
    url: null,
    urlLabel: null,
  },
];
