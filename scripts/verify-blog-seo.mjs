import fs from 'node:fs';
import path from 'node:path';
import { resolveDistDir } from './dist-dir.mjs';

const SITE = 'https://sandhacks.com';
const dist = resolveDistDir();

/** @param {string} html */
function stripTags(html) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ');
}

function walkHtml(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtml(full, acc);
    else if (entry.name.endsWith('.html')) acc.push(full);
  }
  return acc;
}

/** @param {string} html */
function getCanonical(html) {
  return html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1] ?? null;
}

/** @param {string} html */
function getHreflangs(html) {
  return [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/gi)].map((m) => ({
    lang: m[1],
    href: m[2],
  }));
}

/** @param {string} html */
function metaDescription(html) {
  return html.match(/<meta name="description" content="([^"]*)"/i)?.[1] ?? '';
}

/** @param {string} html */
function jsonLdBlocks(html) {
  return [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
}

const pages = walkHtml(dist).filter((file) => file.includes(`${path.sep}blog${path.sep}`));
if (pages.length === 0) {
  console.error('verify-blog-seo: no blog HTML in dist');
  process.exit(1);
}

const sitemapBlog = fs.existsSync(path.join(dist, 'sitemap-blog.xml'))
  ? fs.readFileSync(path.join(dist, 'sitemap-blog.xml'), 'utf8')
  : '';

const results = [];

for (const file of pages) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(dist, file).replace(/\\/g, '/');
  const urlPath = rel === 'index.html' ? '/' : `/${rel.replace(/index\.html$/, '')}`;
  if (/http-equiv="refresh"/i.test(html) || /Redirecting to:/i.test(html)) continue;
  const canonical = getCanonical(html);
  const hreflangs = getHreflangs(html);
  const h1s = [...html.matchAll(/<h1[\s>]/gi)];
  const desc = metaDescription(html);
  const issues = [];

  if (h1s.length !== 1) issues.push(`h1 count ${h1s.length}`);
  if (!canonical?.startsWith(SITE)) issues.push('canonical host');
  if (canonical && !canonical.endsWith('/') && !canonical.includes('.')) issues.push('canonical trailing slash');
  for (const alt of hreflangs) {
    if (alt.href !== canonical) issues.push(`hreflang ${alt.lang} mismatch`);
  }
  if (desc.length < 120 || desc.length > 165) issues.push(`meta description length ${desc.length}`);

  for (const block of jsonLdBlocks(html)) {
    try {
      JSON.parse(block);
    } catch {
      issues.push('invalid JSON-LD');
      break;
    }
  }

  if (rel.includes('/blog/') && rel !== 'blog/index.html') {
    const slug = rel.replace('blog/', '').replace('/index.html', '');
    if (!sitemapBlog.includes(`${SITE}/blog/${slug}/`)) issues.push('missing from sitemap-blog.xml');
  }

  results.push({ page: urlPath, pass: issues.length === 0, issues });
}

const index = results.find((r) => r.page === '/blog/');
if (!index) results.push({ page: '/blog/', pass: false, issues: ['blog index missing'] });

let failed = 0;
console.log('\nBlog SEO verification\n');
console.log('Page | PASS/FAIL | Notes');
console.log('--- | --- | ---');
for (const row of results.sort((a, b) => a.page.localeCompare(b.page))) {
  if (!row.pass) failed += 1;
  console.log(`${row.page} | ${row.pass ? 'PASS' : 'FAIL'} | ${row.issues.join('; ') || '—'}`);
}

if (failed) process.exit(1);
console.log('\nAll blog pages passed.\n');
