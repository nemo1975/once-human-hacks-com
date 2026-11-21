import fs from 'node:fs';
import path from 'node:path';
import { resolveDistDir } from './dist-dir.mjs';

const dist = resolveDistDir();

function walkHtml(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtml(full, acc);
    else if (entry.name.endsWith('.html')) acc.push(full);
  }
  return acc;
}

/** @param {string} html */
function anchorTexts(html) {
  return [...html.matchAll(/<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)].map((m) => ({
    href: m[1],
    text: m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(),
  }));
}

/** @param {string} html */
function headingTexts(html) {
  return [...html.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map((m) =>
    m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().toLowerCase(),
  );
}

const blogFiles = walkHtml(dist).filter((f) => f.includes(`${path.sep}blog${path.sep}`));
const pageTypes = [
  { label: 'blog index', match: (rel) => rel === 'blog/index.html' },
  { label: 'blog post', match: (rel) => rel.startsWith('blog/') && rel !== 'blog/index.html' },
];

const summary = [];

for (const type of pageTypes) {
  const files = blogFiles.filter((f) => type.match(path.relative(dist, f).replace(/\\/g, '/')));
  let pass = true;
  const notes = [];

  for (const file of files) {
    const html = fs.readFileSync(file, 'utf8');
    const rel = path.relative(dist, file).replace(/\\/g, '/');
    const anchors = anchorTexts(html).filter((a) => a.href.startsWith('/') || a.href.includes('oncehumanhacks.com'));
    const byText = new Map();
    for (const a of anchors) {
      if (!a.text || a.text.length < 3) continue;
      const key = a.text.toLowerCase();
      const list = byText.get(key) ?? [];
      list.push(a.href);
      byText.set(key, list);
    }
    for (const [text, hrefs] of byText) {
      const unique = new Set(hrefs);
      if (unique.size > 1) {
        pass = false;
        notes.push(`${rel}: duplicate anchor "${text}"`);
      }
      if (text.length > 80) {
        pass = false;
        notes.push(`${rel}: long anchor (${text.length} chars)`);
      }
    }

    const headings = headingTexts(html);
    const dupHeadings = headings.filter((h, i) => headings.indexOf(h) !== i);
    if (dupHeadings.length) {
      pass = false;
      notes.push(`${rel}: duplicate heading "${dupHeadings[0]}"`);
    }

    if (/\bclick here\b|\bread more\b/i.test(html)) {
      pass = false;
      notes.push(`${rel}: weak anchor phrase`);
    }
  }

  summary.push({ type: type.label, count: files.length, pass, notes: notes.slice(0, 8) });
}

console.log('\nBlog HTML audit\n');
console.log('Page type | Count | PASS/FAIL | Notes');
console.log('--- | --- | --- | ---');
let failed = 0;
for (const row of summary) {
  if (!row.pass) failed += 1;
  console.log(`${row.type} | ${row.count} | ${row.pass ? 'PASS' : 'FAIL'} | ${row.notes.join('; ') || '—'}`);
}

if (failed) process.exit(1);
console.log('\nBlog HTML audit passed.\n');
