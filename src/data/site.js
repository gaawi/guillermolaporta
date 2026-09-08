export const bio = {
  short: 'Guillermo Laporta is a flutist, composer and cultural producer based between New York City and Asturias, Spain. Co-founder and Executive Director of CreArtBox (NYC, 2013) and Festival ADAR (Spain, 2020), his practice integrates classical and contemporary chamber music with theatre, dance, video art and immersive design — what he calls the visual concert.',
  long: [
    'Guillermo Laporta is a flutist, composer, designer and cultural producer based between New York City and Spain. His practice integrates classical and contemporary chamber music with theatre, dance, video art and immersive design — what he calls the visual concert: a form in which visual and theatrical elements are as integral to the experience as the music itself.',
    'He co-founded CreArtBox in 2013 with pianist Josefina Urraca, building it from a small ensemble into a nationally recognized nonprofit with a roster of more than 20 professional artists and a 20+ performance season at venues including The DiMenna Center, Mark Morris Center, The William Vale, Greenwich House and the New York Society for Ethical Culture. CreArtBox traces its roots to Cre.Art Project, founded in Spain in 2006 with clarinetist Tagore González and supported by the Montehermoso Contemporary Creation Award. CreArtBox has received sustained support from the New York State Council on the Arts and recognition from The New Yorker, Broadway World and Time Out.',
    'In 2020 he founded the Association for the Development of the Arts in Rural Areas (ADAR) in Asturias and directs an itinerant festival bringing world-class chamber music performances, composer commissions and visual installations to underserved rural communities — transforming rural landscapes into immersive artistic environments. The festival is supported by the Government of the Principality of Asturias (€120,000 across four awards, 2021–25).',
    'As a flutist Laporta served as Co-Principal Flute of the Oviedo Filarmonía (2009–12), Principal Flute of the Herald Chamber Orchestra (2012–15) and the New York International Chamber Orchestra (2013–18). He has performed with the BBC Orchestra, Orquesta del Principado de Asturias, Le Train Bleu Ensemble and Orquesta Sinfónica de Euskadi at Carnegie Hall and Lincoln Center, sharing the stage with Sir Roger Norrington, Andrew Litton, Pablo González and Vladimir Ashkenazy. He has recorded for Warner, EMI and Naxos.',
    'His original creative work includes the opera-ballet-film Architecture of a Common Man (2023), the opera-ballet Two Roads (2019, a New Yorker Critics\' Pick, at The Tank and Plaxall Theater), the multimedia concert Queens Preludes (2021, toured to NYC, Madrid and Tokyo), the visual concert trilogy Fragile Form (2022), and AWAVE (2018–19), a solo album and immersive video installation presented in New York and Tokyo, supported by the Spanish Embassy and the Amphion Foundation.',
    'He holds an M.Mus. in Advanced Performance from the Royal College of Music, London (Jaime Martín, Paul Edmund Davies, Sue Thomas), an M.A. in Arts Management from Alcalá de Henares University, and a Superior Degree in Music from Musikene, San Sebastián. As a designer he has created lighting and set design for opera and theatre productions off-Broadway and in Toronto, and composed sound and music for virtual reality experiences released with Mozilla and other developers.'
  ],
  practiceNote: 'My practice has three sides that feed each other. I play the flute — chamber music, recitals and the occasional orchestral seat. I write pieces, mostly for chamber forces, and lately more for stage works that combine music, projection and design. And I run two organisations: CreArtBox in New York and Festival ADAR in rural Asturias. Most projects start as something practical — a venue, a programme, a deadline — and the composing follows from that. I tend to design my own visuals and lighting too, because the music and the room usually want to be thought about together. The day-to-day is grant writing, rehearsing, editing video, and patient logistics with collaborators on two continents.'
};

// Source: https://creartbox.nyc/concerts.html — kept in sync with the CreArtBox season listing.
const CB = 'https://creartbox.nyc/concerts';
const CBIMG = 'https://creartbox-media-cdn.b-cdn.net/webimg/projects_photos/20251212/comp/_MG_0154.jpg';

export const calendar = [
  {
    date: '2026-10-09', displayDate: 'Oct 5–9', year: '2026',
    title: 'Kuopio Conservatory Residency', subtitle: 'Residency · International',
    location: 'Kuopio Conservatory · Kuopio, Finland',
    url: `${CB}/kuopio-residency-2026.html`, image: CBIMG, status: 'Announced',
    note: 'Masterclasses and a staging workshop with conservatory students. Closed to the public except the showcase concert.',
  },
  {
    date: '2026-10-06', displayDate: 'Oct 6', year: '2026',
    title: 'Residency Showcase', subtitle: 'Residency · Kuopio Conservatory',
    location: 'Kamarimusiikkisali · Kuopio Music Centre, Finland',
    url: `${CB}/umbral-zero-kuopio-2026.html`, image: CBIMG, status: 'Announced',
    program: [
      { composer: 'Lili Boulanger',    work: 'Nocturne', dur: "3'" },
      { composer: 'Claude Debussy',    work: 'Violin Sonata in G minor · arr. flute and piano', dur: "13'" },
      { composer: 'Leoš Janáček',      work: 'Violin Sonata · I. Con moto, arr. flute and piano', dur: "5'" },
      { composer: 'Olivier Messiaen',  work: 'Le Merle noir', dur: "5'" },
      { composer: 'Frank Martin',      work: 'Ballade · for flute and piano', dur: "8'" },
      { composer: 'Manuel de Falla',   work: 'Siete canciones populares españolas · arr. flute and piano' },
    ],
  },
  {
    date: '2026-10-30', displayDate: 'Oct 30', year: '2026',
    title: 'Currents', subtitle: 'New York Series · Autumn',
    location: 'The DiMenna Center · 450 W 37th St, New York',
    url: `${CB}/currents-2026.html`, image: CBIMG, status: 'Announced',
    program: [
      { composer: 'Guillermo Laporta', work: 'Brown Leaves Moving' },
      { composer: 'Johannes Brahms',   work: 'Trio in A minor, Op. 114 · I. Allegro (viola, cello & piano)', dur: "8'" },
      { composer: 'Eric Moe',          work: 'Laminar Flow in Upsidedown Creek', dur: "5'" },
      { composer: 'Clara Schumann',    work: 'Three Romances, Op. 22', dur: "11'" },
      { composer: 'Robert Schumann',   work: 'Piano Quartet in E-flat major, Op. 47', dur: "28'" },
    ],
  },
  {
    date: '2026-11-06', displayDate: 'Nov 6', year: '2026',
    title: 'Engelbach-Hart Music Festival', subtitle: 'Touring · Fine Arts Series, Illinois College',
    location: 'Rammelkamp Chapel · Illinois College, Jacksonville, IL',
    url: `${CB}/illinois-college-piano-trio-2026.html`, image: CBIMG, status: 'Announced',
    program: [
      { composer: 'Nadia Boulanger',      work: 'Three Pieces for cello and piano · No. 1, Modéré', dur: "3'" },
      { composer: 'Ernest Bloch',         work: 'Three Nocturnes for Piano Trio', dur: "11'" },
      { composer: 'Andrea Casarrubios',   work: 'Silbo and 24 Mozas · for cello and piano', dur: "10'" },
      { composer: 'Lili Boulanger',       work: 'Nocturne · for violin and piano', dur: "4'" },
      { composer: 'György Kurtág',        work: 'Tre Pezzi', dur: "13'" },
      { composer: 'Sergei Rachmaninoff',  work: 'Trio élégiaque in G minor, No. 1', dur: "15'" },
      { composer: 'Dmitri Shostakovich',  work: 'Piano Trio No. 1 in C minor, Op. 8', dur: "14'" },
    ],
  },
  {
    date: '2026-12-11', displayDate: 'Dec 11', year: '2026',
    title: 'Winterlight', subtitle: 'New York Series · Winter',
    location: 'The DiMenna Center · 450 W 37th St, New York',
    url: `${CB}/tectonic-lullaby-2026.html`, image: CBIMG, status: 'Announced',
    program: [
      { composer: 'Hannah Selin',    work: 'Tectonic Lullaby · for piano quintet', dur: "10'", tag: 'World premiere' },
      { composer: 'Maurice Ravel',   work: "Ma Mère l'Oye", dur: "17'" },
      { composer: 'Oliver Caplan',   work: 'Canciones de Monteverde · for flute and string trio', dur: "12'", tag: 'Winner of open call' },
      { composer: 'Igor Stravinsky', work: 'Petroushka · chamber arrangement', dur: "40'" },
    ],
  },
  {
    date: '2026-12-12', displayDate: 'Dec 12', year: '2026',
    title: 'Queens Mother Goose', subtitle: 'Education · Queens Public Library',
    location: 'Queens Public Library · Queens, New York',
    url: `${CB}/queens-mother-goose-2026.html`, image: CBIMG, status: 'Announced',
    program: [
      { composer: 'Maurice Ravel', work: "Ma Mère l'Oye", dur: "17'" },
    ],
  },
  {
    date: '2027-02-28', displayDate: 'Feb 28', year: '2027',
    title: 'Chamber Music Society of Louisville', subtitle: 'Touring · The Chamber Music Society of Louisville',
    location: 'Comstock Hall · Louisville, KY',
    url: `${CB}/louisville-chamber-music-society-2027.html`, image: CBIMG, status: 'Announced',
    program: [
      { composer: 'Lili Boulanger',           work: 'Nocturne', dur: "5'" },
      { composer: 'Maurice Ravel',            work: "Ma Mère l'Oye", dur: "17'" },
      { composer: 'Wolfgang Amadeus Mozart',  work: 'Flute Quartet in D major, K. 285', dur: "20'" },
      { composer: 'Aaron Copland',            work: 'Duo for flute and piano', dur: "14'" },
      { composer: 'Antonín Dvořák',           work: 'Piano Quintet No. 2 in A major, Op. 81', dur: "40'" },
    ],
  },
  {
    date: '2027-04-18', displayDate: 'Apr 18', year: '2027',
    title: 'Masked Sounds', subtitle: 'Touring · Saugerties',
    location: 'Saugerties, New York',
    url: `${CB}/saugerties-2027.html`, image: CBIMG, status: 'Announced',
    program: [
      { composer: 'Joseph Haydn',      work: 'Piano Trio in D major, Hob. XV:16 · for flute, cello & piano', dur: "21'" },
      { composer: 'Felix Mendelssohn', work: 'Piano Trio No. 1 in D minor, Op. 49 · movements I and II, for flute, cello & piano', dur: "15'" },
      { composer: 'Aaron Copland',     work: 'Duo for Flute and Piano', dur: "14'" },
      { composer: 'Antonín Dvořák',    work: 'Dumky, Op. 90 · movements 1 and 2, for flute, cello & piano', dur: "10'" },
      { composer: 'Maurice Ravel',     work: 'Kaddisch from Deux mélodies hébraïques · for flute & piano', dur: "4'" },
    ],
  },
  {
    date: '2027-04-23', displayDate: 'Apr 23', year: '2027',
    title: 'Pressure and Release', subtitle: 'New York Series · Spring',
    location: 'The DiMenna Center · 450 W 37th St, New York',
    url: `${CB}/pressure-and-release-2027.html`, image: CBIMG, status: 'Announced',
    program: [
      { composer: 'Yurui (Rain)',           work: 'Flickered · for flute, violin, viola and piano', dur: "10'" },
      { composer: 'Alex Burtzos',           work: 'Islandi · for piano quartet', dur: "11'" },
      { composer: 'Luke Carlson',           work: 'Render', dur: "10'" },
      { composer: 'Gilad Cohen',            work: 'Ten Variations · for piano quintet', dur: "13'" },
      { composer: 'Samantha Leigh Sack',    work: 'Forcing Revelation · for piano quartet', dur: "10'" },
      { composer: 'Paul Novak',             work: 'Entwining · for clarinet, violin, cello and piano', dur: "10'" },
      { composer: 'Sam Wu',                 work: 'Mass Transit · for piano quintet', dur: "13'" },
    ],
  },
  {
    date: '2027-05-07', displayDate: 'May 7', year: '2027',
    title: 'Feverdream', subtitle: 'New York Series · Season close',
    location: 'The DiMenna Center · 450 W 37th St, New York',
    url: `${CB}/feverdream-2027.html`, image: CBIMG, status: 'Announced',
    program: [
      { composer: 'Zygmund de Somogyi', work: 'A Lighthouse Feverdream · for piano trio and narrator', dur: "8'" },
      { composer: 'Eli Tausen á Lava',  work: 'múrurin', dur: "8'" },
      { composer: 'Jean Sibelius',      work: 'Piano Quintet in G minor, JS 159', dur: "40'" },
    ],
  },
  {
    date: '2027-08-15', displayDate: 'Aug 2–15', year: '2027',
    title: 'Festival ADAR 2027', subtitle: 'Festival ADAR · 7th edition',
    location: 'Multiple venues · Asturias, Spain',
    url: `${CB}/festival-adar-2027.html`, image: '/images/2025-08-festival-adar.jpg', status: 'Announced',
    note: "Residencies, micro-concerts and 'ADAR en Ruta' stops in small Asturian towns, played in churches, hórreos and mountain villages. Full programme at festivaladar.com.",
  },
  {
    date: '2027-09-28', displayDate: 'Sep 28', year: '2027',
    title: 'Getsbury Community Concert Association', subtitle: 'Touring · Getsbury Community Concert Association',
    location: 'Getsbury Community Concert Association',
    url: `${CB}/getsbury-community-concert-2027.html`, image: CBIMG, status: 'Announced',
    note: 'Programme to be announced.',
  },
  {
    date: '2027-10-17', displayDate: 'Oct 17', year: '2027',
    title: 'The Chapel Restoration', subtitle: 'Touring · The Chapel Restoration',
    location: 'The Chapel Restoration',
    url: `${CB}/chapel-restoration-2027.html`, image: CBIMG, status: 'Announced',
    note: 'Programme to be announced.',
  },
];

export const visualWork = [
  { slug: 'musica-de-cristal',    num: '01', cat: 'installation', year: '2025', kind: 'Installation',    title: 'Música de Cristal',                  desc: 'Installation for flute, electronics and amplified glass. Festival ADAR, Asturias.', image: 'https://creartbox-media-cdn.b-cdn.net/webimg/projects_photos/20251004/LNB_MUSICA%20DE%20CRISTAL_IVAN%20MARTINEZ_7515.jpg', url: 'https://festivaladar.com/en/musica-de-cristal/' },
  { slug: 'progress-defiance',    num: '02', cat: 'installation', year: '2023', kind: 'Installation',    title: 'Progress > Defiance',                desc: 'Live flute and electronics installation. Capilla de los Dolores, Grado, Asturias.', image: 'https://creartbox-media-cdn.b-cdn.net/adarimages/ADAR_Eventos/2023/10_Micro_concierto_en_la_Capilla_de_los_Dolores_Grado_2023/31.jpg', url: 'https://festivaladar.com/en/micro-concert-capilla-dolores-grado-2023/' },
  { slug: 'circle-noir',          num: '03', cat: 'installation', year: '2023', kind: 'Installation',    title: 'Circle Noir',                        desc: 'Multimedia chamber music installation across two evenings at The William Vale, Brooklyn.', image: '/images/circle-noir.jpg', url: 'https://creartbox.nyc/pages/circle-noir-part2' },
  { slug: 'lighting-the-dark',    num: '04', cat: 'installation', year: '2021', kind: 'Installation',    title: 'Lighting the Dark',                  desc: 'Concert-installation for flute, piano and projection. Culture Lab Theater, Queens.', image: '/images/lighting-the-dark.jpg', url: 'https://creartbox.nyc/pages/lighting-the-dark' },
  { slug: 'tusks',                num: '05', cat: 'installation', year: '2018', kind: 'Installation',    title: 'Tusks',                              desc: 'Sculptural concert-installation for chamber ensemble. Plaxall Gallery, Long Island City.', image: '/images/tusks.jpg', url: '' },
  { slug: 'twilight-at-dawn',     num: '06', cat: 'video-art',   year: '2024', kind: 'Video art',       title: 'Twilight at Dawn — Cholodenko',      desc: 'World-premiere concert video for new work by Devin Cholodenko. DiMenna Center, NYC.', image: '/images/2025-10-beyond-surface.jpg', url: '' },
  { slug: 'vox-balaenae',         num: '07', cat: 'video-art',   year: '2023', kind: 'Video art',       title: 'Vox Balaenae — Crumb',               desc: "Concert video for George Crumb's Voice of the Whale. The William Vale, Brooklyn.", image: '/images/2025-05-perennial.jpg', url: '' },
  { slug: 'murder-ballades',      num: '08', cat: 'video-art',   year: '2023', kind: 'Video art',       title: 'Murder Ballades — Dessner',          desc: "Concert video for Bryce Dessner's Murder Ballades. The William Vale, Brooklyn.", image: '/images/2023-12-circle-noir.jpg', url: '' },
  { slug: 'pari-intervallo',      num: '09', cat: 'video-art',   year: '2022', kind: 'Video art',       title: 'Pari Intervallo — Pärt',             desc: 'Concert video for Arvo Pärt. CreArt Festival, NYC.', image: '/images/2023-12-mountains.jpg', url: '' },
  { slug: 'piano-phase',          num: '10', cat: 'video-art',   year: '2022', kind: 'Video art',       title: 'Piano Phase — Reich',                desc: "Concert video for Steve Reich's phase-music piano duet.", image: '/images/2022-04-childhood-memories.jpg', url: '' },
  { slug: 'quartet-end-of-time',  num: '11', cat: 'video-art',   year: '2019', kind: 'Video art',       title: 'Quartet for the End of Time — Messiaen', desc: "Concert video for Messiaen's chamber masterwork.", image: '/images/2018-09-just-as-they-are.jpg', url: '' },
  { slug: 'as-one',               num: '12', cat: 'design',      year: '2018', kind: 'Theater design',  title: 'As One',                             desc: 'Opera by Laura Kaminsky. Lighting and set design. 14th Street Y Theater, NYC.', image: '/images/2019-09-two-roads.jpg', url: '' },
  { slug: '8-million-protagonists',num: '13', cat: 'design',     year: '2014', kind: 'Theater design',  title: '8 Million Protagonists',             desc: 'Multimedia production. Lighting and set design. Here Arts Center, NYC.', image: '/images/2014-11-visuality-iv.jpg', url: '' },
  { slug: 'pedro-pan',            num: '14', cat: 'design',      year: '2016 / 2018', kind: 'Theater design', title: 'Pedro Pan',                   desc: 'Musical. Lighting and set design. The Chain Theater, NYC and Toronto Playhouse.', image: '/images/2018-08-folk-culture.jpg', url: '' },
  { slug: 'painted-alice',        num: '15', cat: 'design',      year: '2019', kind: 'Theater design',  title: 'Painted Alice',                      desc: 'Theater. Lighting design. Robert Moss Theater, NYC.', image: '/images/2019-08-end-of-time.jpg', url: '' },
  { slug: 'visuality',            num: '16', cat: 'design',      year: '2014–16', kind: 'Visual Concert', title: 'Visuality',                          desc: 'Concert-theater production placing live classical performance inside a theatrical visual system using image, staging and technology. Co-directed with Josefina Urraca. Queens Theater in the Park and Artosphere, Arlington, Virginia.', image: 'https://creartbox-media-cdn.b-cdn.net/webimg/projects_photos/20161203/001.jpg', url: 'https://creartbox.nyc/pages/visuality' },
  { slug: 'noctum',               num: '17', cat: 'design',      year: '2011', kind: 'Theater design',  title: 'Noctum',                             desc: 'Opera with music by Marcos Fernández. Dramaturg and visual designer. Flute and clarinet concerto with chamber ensemble and video. Audiencia Theater (Soria), Barakaldo Theater (Bilbao), San Francisco Concert Hall (Huesca).', image: '/images/2011-noctum.jpg', url: '' },
  { slug: 'london-the-show',      num: '18', cat: 'design',      year: '2009', kind: 'Theater design',  title: 'London: "The Show"',                 desc: 'Musical theater production with 100+ artists combining cinema, jazz, drum & bass, Indian classical music, contemporary dance, acrobatics and video mapping. Creator, designer and producer. Audiencia Theater (Soria), Palacio de Congresos (Huesca).', image: '/images/2009-london-show.jpg', url: '' },
];

export const portfolio = [
  {
    title: 'Architecture of a Common Man',
    year: '2023',
    type: 'Opera / film / ballet',
    tags: ['composition', 'libretto', 'screenplay', 'stage design'],
    text: 'A staged work combining live performance, cinema, movement and music. Guillermo created the music, dramaturgy, libretto and screenplay.'
  },
  {
    title: 'Fragile Form',
    year: '2022',
    type: 'Visual concert trilogy',
    tags: ['visual concert', 'projection', 'lighting', 'stage concept'],
    text: 'A trilogy exploring fragility, matter and transformation through chamber music, projected image and theatrical space.'
  },
  {
    title: 'Queens Preludes',
    year: '2021',
    type: 'Multimedia chamber work',
    tags: ['composition', 'flute', 'piano', 'video'],
    text: 'Twelve preludes for flute and piano exploring memory before life-changing events, presented as a multimedia concert.'
  },
  {
    title: 'Two Roads',
    year: '2019 / 2020',
    type: 'Opera / ballet',
    tags: ['composition', 'dramaturgy', 'libretto', 'dance'],
    text: 'A music-theater work about choice, memory and the paths that shape a life. New Yorker Critics\' Pick.'
  },
  {
    title: 'AWAVE',
    year: '2018 / 2020',
    type: 'Album / video installation / concert',
    tags: ['flute', 'piano', 'electronics', 'video'],
    text: 'Original music for flute, piano, electronics and video developed across productions in New York and Tokyo.'
  },
  {
    title: 'Visuality',
    year: '2014 / 2016',
    type: 'Concert theater',
    tags: ['visual art', 'technology', 'stage direction', 'music'],
    text: 'A production merging live classical music, visual art and technology into a theatrical concert experience.'
  },
  {
    title: 'Noctum',
    year: '2011',
    type: 'Opera',
    tags: ['composition', 'opera', 'visual narrative'],
    text: 'An early stage work integrating music, visual narrative and technology.'
  },
  {
    title: 'London: The Show',
    year: '2009',
    type: 'Musical theater',
    tags: ['composition', 'production', 'theater'],
    text: 'A large-scale production created in Europe, bringing together music, performance and a team of more than twenty artists.'
  }
];

export const catalogue = [
  {
    title: 'Architecture of a Common Man',
    year: '2023',
    category: 'Opera / film / ballet',
    instrumentation: 'Voices, chamber ensemble, film and movement',
    duration: '60-75 min',
    notes: 'Music, dramaturgy, libretto and screenplay.'
  },
  {
    title: 'Two Roads',
    year: '2019 / 2020',
    category: 'Opera / ballet',
    instrumentation: 'Voices, instrumental ensemble and dance',
    duration: 'ca. 60 min',
    notes: 'Music, dramaturgy and libretto. New Yorker Critics\' Pick.'
  },
  {
    title: 'Queens Preludes',
    year: '2021',
    category: 'Chamber music',
    instrumentation: 'Flute and piano',
    duration: 'ca. 35 min',
    notes: 'Twelve preludes written during the COVID period.'
  },
  {
    title: 'Suite AWAVE',
    year: '2018 / 2020',
    category: 'Multimedia music',
    instrumentation: 'Flute, piano, electronics and video',
    duration: 'ca. 45 min',
    notes: 'Album and multimedia concert project.'
  },
  {
    title: 'Twelve Preludes',
    year: '2020',
    category: 'Solo / chamber',
    instrumentation: 'Flute, with versions connected to piano and media',
    duration: 'ca. 35 min',
    notes: 'Recorded as part of Guillermo\'s solo discography.'
  },
  {
    title: 'Piano Trio "Craziest Thing"',
    year: '2019',
    category: 'Chamber music',
    instrumentation: 'Violin, cello and piano',
    duration: 'ca. 12 min',
    notes: ''
  },
  {
    title: 'Traveling / Balance / Ballet',
    year: '2018',
    category: 'Solo',
    instrumentation: 'Solo piano',
    duration: 'ca. 18 min',
    notes: ''
  },
  {
    title: 'Queens Log',
    year: '2021',
    category: 'Electroacoustic',
    instrumentation: 'Solo flute + field recordings',
    duration: 'ca. 20 min',
    notes: ''
  },
  {
    title: 'Música de Cristal',
    year: '2025',
    category: 'Electroacoustic',
    instrumentation: 'Flute, electronics and amplified glass',
    duration: 'ca. 30 min',
    notes: ''
  },
  {
    title: 'Harte Rate',
    year: '2020',
    category: 'Electroacoustic',
    instrumentation: 'Flute and electronics',
    duration: 'ca. 10 min',
    notes: ''
  },
  {
    title: 'Noctum',
    year: '2011',
    category: 'Opera',
    instrumentation: 'Stage work with music and visual narrative',
    duration: 'TBD',
    notes: 'Early opera in the visual-concert creative line.'
  },
  {
    title: 'London: The Show',
    year: '2009',
    category: 'Musical theater',
    instrumentation: 'Music theater ensemble',
    duration: 'Full evening',
    notes: 'Large-scale European production.'
  },
  {
    title: 'Cre.Art Project I',
    year: '2006',
    category: 'Visual concert',
    instrumentation: 'Chamber music, quadraphonic electroacoustic music, video and choreography',
    duration: 'TBD',
    notes: 'Supported by the Montehermoso Contemporary Creation Award.'
  }
];

// Discography — one list, newest first.
// Bandcamp slugs verified individually against creartbox.bandcamp.com (all HTTP 200).
// `spotify` is optional: when present the card links there, otherwise it falls back
// to Bandcamp. AWAVE and the Debussy & Respighi sonatas are not on Bandcamp and
// have no artwork on file yet — they carry no cover and link to the artist page.
const BC = 'https://creartbox.bandcamp.com/album';
const BC_ARTIST = 'https://creartbox.bandcamp.com';

export const discography = [
  { title: 'Architecture of a Common Man',            artist: 'Guillermo Laporta & CreArtBox',        year: '2023', kind: 'Studio', cover: '/covers/architecture-of-a-common-man.jpg',                  bandcamp: `${BC}/architecture-of-a-common-man`,
    description: 'Original compositions for the opera-ballet-film.' },
  { title: '12 Preludes',                             artist: 'Guillermo Laporta & CreArtBox',        year: '2023', kind: 'Studio', cover: '/covers/12-preludes.jpg',                                    bandcamp: `${BC}/12-preludes`,
    description: 'Original preludes connected to memory, image and travel.' },
  { title: 'Piano Quintet in G minor, Op. 49 (live)', artist: 'Granados',                             year: '2023', kind: 'Live',   cover: '/covers/piano-quintet-in-g-minor-op-49-live.jpg',            bandcamp: `${BC}/piano-quintet-in-g-minor-op-49-live` },
  { title: 'Piano Quartet in A minor, Op. 67 (live)', artist: 'Turina',                               year: '2023', kind: 'Live',   cover: '/covers/turina-piano-quartet.jpg',                           bandcamp: `${BC}/turina-piano-quartet` },
  { title: 'Piano Trio No. 1 in C minor, Op. 8 (live)', artist: 'Shostakovich',                       year: '2023', kind: 'Live',   cover: '/covers/piano-trio-no-1-in-c-minor-op-8-live.jpg',           bandcamp: `${BC}/piano-trio-no-1-in-c-minor-op-8-live` },
  { title: 'Heart Meditation',                        artist: 'Annamaria Kowalsky',                   year: '2023', kind: 'Live',   cover: '/covers/heart-meditation.jpg',                               bandcamp: `${BC}/heart-meditation` },
  { title: 'Trio for flute, viola & harp, Op. 18',    artist: 'Nikolayeva',                           year: '2023', kind: 'Live',   cover: '/covers/trio-for-flute-viola-harp-op-18.jpg',                bandcamp: `${BC}/trio-for-flute-viola-harp-op-18` },
  { title: 'Symphony No. 94 — Chamber version (live)', artist: 'Haydn',                               year: '2023', kind: 'Live',   cover: '/covers/symphony-no-94-chamber-version-live.jpg',            bandcamp: `${BC}/symphony-no-94-chamber-version-live` },
  { title: 'Petite Suite for flute, viola & harp (live)', artist: 'Jolivet',                          year: '2023', kind: 'Live',   cover: '/covers/petite-suite-for-flute-viola-harp-live.jpg',         bandcamp: `${BC}/petite-suite-for-flute-viola-harp-live` },
  { title: 'Mandalas in the Rubble (live, NY premiere)', artist: 'Dai Wei',                            year: '2023', kind: 'Live',   cover: '/covers/mandalas-in-the-rubble-live-new-york-premiere.jpg',  bandcamp: `${BC}/mandalas-in-the-rubble-live-new-york-premiere` },
  { title: 'Made of Wood',                            artist: 'Timo Andres',                          year: '2023', kind: 'Live',   cover: '/covers/made-of-wood.jpg',                                   bandcamp: `${BC}/made-of-wood` },
  { title: 'Petroushskates',                          artist: 'Joan Tower',                           year: '2023', kind: 'Live',   cover: '/covers/petroushskates.jpg',                                 bandcamp: `${BC}/petroushskates` },
  { title: 'Noctum — Concerto for flute & clarinet',  artist: 'Marcos Fernández',                     year: '2023', kind: 'Live',   cover: '/covers/noctum-concerto-for-flute-and-clarinet.jpg',         bandcamp: `${BC}/noctum-concerto-for-flute-and-clarinet` },
  { title: 'AWAVE',                                   artist: 'Guillermo Laporta',                    year: '2020', kind: 'Studio', cover: null,                                                         bandcamp: BC_ARTIST,
    description: 'Original compositions for flute, piano, electronics and video.' },
  { title: 'Brandenburg Concerto No. 5 (live)',       artist: 'J.S. Bach',                            year: '2019', kind: 'Live',   cover: '/covers/brandenburg-concerto-no-5-live.jpg',                 bandcamp: `${BC}/brandenburg-concerto-no-5-live` },
  { title: 'Quartet for the End of Time (live)',      artist: 'Messiaen',                             year: '2019', kind: 'Live',   cover: '/covers/quartet-for-the-end-of-time-live.jpg',               bandcamp: `${BC}/quartet-for-the-end-of-time-live` },
  { title: 'Debussy & Respighi Violin Sonatas',       artist: 'Guillermo Laporta',                    year: '2019', kind: 'Studio', cover: null,                                                         bandcamp: BC_ARTIST,
    description: 'Transcriptions for flute and piano.' },
  { title: 'Symphony No. 4 — Chamber version (live)', artist: 'Mahler · CreArtBox · Le Train Bleu',   year: '2018', kind: 'Live',   cover: '/covers/symphony-no-4-chamber-version-live.jpg',             bandcamp: `${BC}/symphony-no-4-chamber-version-live` },
  { title: 'CreArtProject I (live)',                  artist: 'Debussy · Wilson · Nilson · Higdon',   year: '2008', kind: 'Live',   cover: '/covers/creartproject-i-live.jpg',                           bandcamp: `${BC}/creartproject-i-live` },
];

// Derived views kept for the pages that still ask for them.
export const albums = discography.filter(r => r.kind === 'Studio').map(r => ({
  title: r.title, year: r.year, format: r.kind, description: r.description || '', url: r.spotify || r.bandcamp, cover: r.cover,
}));
export const liveRecordings = discography.filter(r => r.kind === 'Live').map(r => ({
  title: r.title, composer: r.artist, year: r.year, cover: r.cover, url: r.spotify || r.bandcamp,
}));


export const press = [
  { quote: 'Critics top pick for the best music, art and theatre.', source: 'The New Yorker' },
  { quote: 'A full scale set design and a unique visual approach.', source: 'I Care If You Listen' },
  { quote: 'Directed by CreArtBox\'s Guillermo Laporta and Josefina Urraca, the remarkable production fuses together a variety of art forms to create a wholly authentic, visually and aurally compelling experience.', source: 'Broadway World' },
  { quote: 'A new ensemble devoted to multidisciplinary events.', source: 'Time Out' },
  { quote: 'A shocking staging.', source: 'El País' },
  { quote: 'CreArt Festival offers unique take on classical music.', source: 'Queens Ledger' },
  { quote: 'You should check out this amazing presentation of Guillermo Laporta\'s AWAVE.', source: 'Times Ledger' },
  { quote: 'Innovative classical and chamber music series in collaboration of living composers, world-class soloists.', source: 'The Westsider' },
  { quote: 'Classical Group combines past and present with Grammy winner at Ethical NYC.', source: 'Broadway World' },
  { quote: 'The CreArtBox Music Festival has solidified its presence as one of the most sought-after classical music festivals.', source: 'Broadway World' },
  { quote: 'This piece had something for a wide variety of arts lovers, including music, animation, theater and dance.', source: 'Brightest Young Things' },
  { quote: 'If you need a break from your same old Spotify playlist, mark your calendars.', source: 'QGuide' }
];

export const funders = {
  us: [
    'New York State Council on the Arts (NYSCA)',
    'National Endowment for the Arts (NEA)',
    'NYC Department of Cultural Affairs (DCLA)',
    'New York Foundation for the Arts',
    'Queens Council on the Arts',
    'Flushing Town Hall',
    'Aaron Copland Fund for Music',
    'Amphion Foundation',
    'Mathis-Pfohl Foundation',
    'Tri-M Foundation',
    'The Ditson Fund',
    'Avaloch Music Residency',
    'City Artist Corps'
  ],
  europe: [
    'Government of the Principality of Asturias',
    'Spanish Embassy (US)',
    'Promete Foundation Talent Award',
    'Caja Madrid Scholarship',
    'Ibercaja Scholarship',
    'Montehermoso Creation Award',
    'SMA Chamber Music Competition'
  ]
};


export const mediaImages = [
  { title: 'Architecture of a Common Man', category: 'opera / film / ballet', src: '/images/2023-03-architecture.jpg', alt: 'Architecture of a Common Man production image' },
  { title: 'Musica Ricercata', category: 'NYC series', src: 'https://creartbox-media-cdn.b-cdn.net/webimg/projects_photos/20251212/comp/_MG_0161.jpg', alt: 'Musica Ricercata performance image' },
  { title: 'Música de Cristal', category: 'Festival ADAR', src: 'https://creartbox-media-cdn.b-cdn.net/webimg/projects_photos/20251004/LNB_MUSICA%20DE%20CRISTAL_IVAN%20MARTINEZ_7515.jpg', alt: 'Música de Cristal performance image' },
  { title: 'Festival ADAR 2025', category: 'rural arts', src: '/images/2025-08-festival-adar.jpg', alt: 'Festival ADAR 2025 image' },
  { title: 'Circle Noir', category: 'visual concert', src: '/images/circle-noir.jpg', alt: 'Circle Noir image' },
  { title: 'Queens Preludes', category: 'composition / performance', src: '/images/2021-10-queens-preludes.jpg', alt: 'Queens Preludes press image' }
];

export const homeImages = mediaImages.slice(0, 3);

export const imageIndex = [
  { title: 'Portrait', category: 'artist image', note: 'Primary portrait and media image' },
  { title: 'Performance', category: 'flute / chamber music', note: 'Concert photography and rehearsal documentation' },
  { title: 'Visual concerts', category: 'stage design', note: 'Lighting, projection and scenic design documentation' },
  { title: 'Installations', category: 'visual art', note: 'Site-specific and concert-based visual works' },
  { title: 'Festival ADAR', category: 'rural arts', note: 'Asturias, landscape, heritage and community projects' },
  { title: 'Archive', category: 'historical work', note: 'Early projects, production stills and press material' }
];
