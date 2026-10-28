// Software. Things Guillermo has built, as opposed to music he wrote for software
// other people built: those are interactive-audio credits and live in the resume
// under Sound Design.
//
// Every entry here was verified live before being added. `url` is checked to
// return 200. If you add one, add it with a real link or no link at all, not a
// placeholder.
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
      'The web side of the same catalogue. Recordings are browsable by composer, era or playlist, each listed with its performers and the quality it was captured at.',
    features: [
      'Filters by era, from the 18th century to the 21st',
      'Composer and search indexes',
      'Playlists and user profiles',
      '4K, HD and lossless tiers',
    ],
    stack: ['Web', 'Vercel'],
    url: 'https://digitalconcerthall.vercel.app/',
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
    url: 'https://gaawi.com',
    urlLabel: 'gaawi.com',
  },
];
