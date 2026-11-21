import fs from 'node:fs';
import path from 'node:path';
import { resolveDistDir } from './dist-dir.mjs';

const dist = resolveDistDir();
const siteOrigin = 'https://oncehumanhacks.com';

function walkHtml(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtml(full, acc);
    else if (entry.name.endsWith('.html')) acc.push(full);
  }
  return acc;
}

function collectInternalHrefs(html) {
  const hrefs = new Set();
  for (const m of html.matchAll(/\bhref="(\/[^"#?]*)/gi)) {
    hrefs.add(m[1]);
  }
  return [...hrefs];
}

function distHasPath(href) {
  const clean = href.endsWith('/') ? href : `${href}/`;
  const file = path.join(dist, clean.slice(1), 'index.html');
  if (fs.existsSync(file)) return true;
  const direct = path.join(dist, href.slice(1));
  return fs.existsSync(direct);
}

const skip = new Set(['/go/']);
const htmlFiles = walkHtml(dist);
const broken = new Map();

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(dist, file).replace(/\\/g, '/');
  for (const href of collectInternalHrefs(html)) {
    if (skip.has(href) || href.startsWith('/go/')) continue;
    if (!distHasPath(href)) {
      const list = broken.get(href) ?? [];
      list.push(rel);
      broken.set(href, list);
    }
  }
}

if (broken.size) {
  console.error('\nBroken internal links in dist:\n');
  for (const [href, files] of [...broken.entries()].sort()) {
    console.error(`${href} ← ${files.slice(0, 3).join(', ')}${files.length > 3 ? '…' : ''}`);
  }
  process.exit(1);
}

console.log(`Internal link check OK (${htmlFiles.length} HTML files).`);
