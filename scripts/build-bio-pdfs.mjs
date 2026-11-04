// Renders the two bio print pages to PDF and writes them into public/downloads/.
//
// Run it against a build being served locally:
//   npm run build
//   npx http-server dist -p 8080      (or any static server)
//   node scripts/build-bio-pdfs.mjs http://localhost:8080
//
// The PDFs are committed, so re-run this whenever bio.short or bio.long change
// in src/data/site.js. The print pages stay the source; this only snapshots them.
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const origin = (process.argv[2] || 'http://localhost:8080').replace(/\/$/, '');
const pages = [
  { path: '/bio-short-print/', out: 'public/downloads/guillermo-laporta-bio-short.pdf' },
  { path: '/bio-long-print/',  out: 'public/downloads/guillermo-laporta-bio-long.pdf'  },
];

await mkdir('public/downloads', { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage();

for (const { path, out } of pages) {
  const res = await page.goto(origin + path, { waitUntil: 'networkidle', timeout: 30000 });
  if (!res || res.status() !== 200) throw new Error(`${path} returned ${res && res.status()}`);
  // printBackground stays off: these are text documents, and the dark footer and
  // the on-screen buttons are already hidden by the print stylesheet.
  await page.pdf({ path: out, format: 'A4', printBackground: false,
                   margin: { top: '18mm', bottom: '18mm', left: '16mm', right: '16mm' } });
  console.log(`${path} -> ${out}`);
}

await browser.close();
