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

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function mainText(html) {
  const main = html.match(/<main[^>]*id="main-content"[^>]*>([\s\S]*?)<\/main>/i)?.[1];
  return stripHtml(main ?? html);
}

function wordCount(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

const pages = walkHtml(dist)
  .map((file) => {
    const rel = path.relative(dist, file).replace(/\\/g, '/');
    const url = rel === 'index.html' ? '/' : `/${rel.replace(/index\.html$/, '')}`;
    const html = fs.readFileSync(file, 'utf8');
    return { url, words: wordCount(mainText(html)) };
  })
  .sort((a, b) => a.words - b.words);

console.log('Main content word counts (approx.):\n');
for (const p of pages) {
  console.log(`${String(p.words).padStart(5)}  ${p.url}`);
}
