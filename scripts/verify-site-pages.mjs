import fs from 'node:fs';
import path from 'node:path';
import { resolveDistDir } from './dist-dir.mjs';

const dist = resolveDistDir();
const SITE = 'https://oncehumanhacks.com';

const samples = [
  { type: 'home', file: 'index.html' },
  { type: 'blog index', file: 'blog/index.html' },
  { type: 'blog post', file: 'blog/best-once-human-hacks/index.html' },
  { type: 'product hub', file: 'products/once-human-hacks/index.html' },
  { type: 'product detail', file: 'products/once-human-hacks/complete/index.html' },
  { type: 'forum', file: 'forum/index.html' },
  { type: 'FAQ', file: 'faq/index.html' },
  { type: 'support', file: 'support/index.html' },
  { type: '404', file: '404.html' },
];

function check(file) {
  const full = path.join(dist, file);
  if (!fs.existsSync(full)) return { pass: false, notes: ['missing'] };
  const html = fs.readFileSync(full, 'utf8');
  const h1 = (html.match(/<h1[\s>]/gi) ?? []).length;
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  const issues = [];
  if (h1 !== 1) issues.push(`h1=${h1}`);
  if (!canonical?.startsWith(SITE)) issues.push('canonical');
  return { pass: issues.length === 0, notes: issues };
}

console.log('\nSite page smoke (dist)\n');
console.log('Page type | PASS/FAIL | Notes');
console.log('--- | --- | ---');
let failed = 0;
for (const s of samples) {
  const r = check(s.file);
  if (!r.pass) failed += 1;
  console.log(`${s.type} | ${r.pass ? 'PASS' : 'FAIL'} | ${r.notes.join('; ') || '—'}`);
}
const sitemapBlog = fs.readFileSync(path.join(dist, 'sitemap-blog.xml'), 'utf8');
const blogUrls = (sitemapBlog.match(/<loc>/g) ?? []).length;
console.log(`\nsitemap-blog.xml URLs: ${blogUrls}\n`);
if (failed) process.exit(1);
