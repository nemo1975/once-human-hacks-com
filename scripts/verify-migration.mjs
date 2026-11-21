import fs from 'node:fs';
import path from 'node:path';
import { resolveDistDir } from './dist-dir.mjs';
import { CHECKOUT_URLS } from '../src/config/checkout-redirects.mjs';

const SITE = 'https://oncehumanhacks.com';
const dist = resolveDistDir();
const root = process.cwd();

const failures = [];

function fail(msg) {
  failures.push(msg);
}

function readDist(rel) {
  const file = path.join(dist, rel);
  if (!fs.existsSync(file)) return null;
  return fs.readFileSync(file, 'utf8');
}

if (!fs.existsSync(dist)) {
  fail('dist/ missing — run npm run build');
} else {
  const home = readDist('index.html');
  if (home) {
    if (!home.includes('<title>Once Human Hacks for PC | Aimbot, ESP &amp; Radar</title>') && !home.includes('<title>Once Human Hacks for PC | Aimbot, ESP & Radar</title>')) {
      fail('Homepage title does not match required SEO title');
    }
    if (!home.includes('Once Human Hacks')) {
      fail('Homepage missing Once Human Hacks branding');
    }
    const canonical = home.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
    if (canonical !== `${SITE}/`) fail(`Home canonical expected ${SITE}/ got ${canonical}`);
    if (home.includes('csgocheats.net')) fail('Homepage still references csgocheats.net');
    if (home.includes('CSGO Cheats')) fail('Homepage still references CSGO Cheats');
    if (home.includes('Battlefield 6')) fail('Homepage still references Battlefield 6');
    if (home.includes('Sand Hacks')) fail('Homepage still references Sand Hacks');
    if (home.includes('SAND: Raiders')) fail('Homepage still references SAND: Raiders of Sophie');
    if (/\$\d+/.test(home)) fail('Homepage still shows dollar pricing');
  }

  const robots = fs.existsSync(path.join(dist, 'robots.txt'))
    ? fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8')
    : '';
  if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) fail('robots.txt sitemap URL incorrect');

  const sitemap = fs.existsSync(path.join(dist, 'sitemap-index.xml'))
    ? fs.readFileSync(path.join(dist, 'sitemap-index.xml'), 'utf8')
    : fs.existsSync(path.join(dist, 'sitemap.xml'))
      ? fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8')
      : '';
  if (sitemap.includes('csgocheats.net')) fail('Sitemap contains old domain');
  if (sitemap.includes('workers.dev') || sitemap.includes('pages.dev')) fail('Sitemap contains preview hosts');

  const complete = readDist('products/once-human-hacks/complete/index.html');
  if (complete) {
    if (complete.includes('cloud-dma') && complete.includes('hwid-spoofer')) {
      /* addon section present */
    } else if (!complete.includes('Cloud DMA') || !complete.includes('HWID Spoofer')) {
      fail('Product page missing Cloud DMA or HWID Spoofer cards');
    }
    if (/\$\d+/.test(complete)) fail('Product detail page still shows dollar pricing');
    if (!complete.includes(CHECKOUT_URLS.onceHuman) && !complete.includes(CHECKOUT_URLS.cs2)) {
      fail('Main checkout URL missing on product page');
    }
    if (complete.includes('CSGO')) fail('Complete product page still mentions CSGO');
    if (complete.includes('Sand Hacks')) fail('Complete product page still mentions Sand Hacks');
  } else {
    fail('Complete product page missing at products/once-human-hacks/complete/');
  }
}

const wrangler = fs.readFileSync(path.join(root, 'wrangler.toml'), 'utf8');
if (!wrangler.includes('name = "oncehumanhacks-com"')) fail('wrangler.toml worker name should be oncehumanhacks-com');
if (!wrangler.includes('main = "worker.mjs"')) fail('wrangler.toml should use worker.mjs for preview noindex');

console.log('\n=== Rebrand verification ===\n');
if (failures.length) {
  failures.forEach((f) => console.log(`FAIL: ${f}`));
  process.exit(1);
}
console.log('All rebrand checks passed.\n');
