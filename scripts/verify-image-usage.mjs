import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const counts = new Map();

function bump(src) {
  if (!src.startsWith('/images/gameplay/')) return;
  counts.set(src, (counts.get(src) ?? 0) + 1);
}

const seo = fs.readFileSync(path.join(root, 'src/config/seo.ts'), 'utf8');
const og = seo.match(/DEFAULT_OG_IMAGE = '([^']+)'/)?.[1];
if (og) bump(og);

const products = fs.readFileSync(path.join(root, 'src/data/products.ts'), 'utf8');
for (const m of products.matchAll(/`\$\{gameplay\}\/([^`]+)`/g)) {
  bump(`/images/gameplay/${m[1]}`);
}

const blogDir = path.join(root, 'content/blog');
for (const file of fs.readdirSync(blogDir).filter((f) => f.endsWith('.md'))) {
  const text = fs.readFileSync(path.join(blogDir, file), 'utf8');
  const hero = text.match(/^heroImage:\s*(.+)$/m)?.[1]?.trim();
  if (hero) bump(hero);
}

let bad = false;
for (const [src, n] of [...counts.entries()].sort()) {
  console.log(`${src}: ${n}`);
}

if (bad) process.exit(1);
console.log('Image usage OK.');
