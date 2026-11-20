import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { resolveDistDir } from './dist-dir.mjs';

const root = process.cwd();
const dist = resolveDistDir();
const SITE = 'https://sandhacks.com';

const findings = [];

function add(severity, area, problem, solution) {
  findings.push({ severity, area, problem, solution });
}

function walkHtml(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtml(full, acc);
    else if (entry.name.endsWith('.html')) acc.push(full);
  }
  return acc;
}

function distAssetExists(urlPath) {
  if (!urlPath.startsWith('/')) return false;
  const rel = urlPath.replace(/^\//, '').split('?')[0];
  const file = path.join(dist, rel);
  if (fs.existsSync(file)) return true;
  if (rel.endsWith('/')) return fs.existsSync(path.join(dist, rel, 'index.html'));
  return fs.existsSync(path.join(dist, `${rel}/index.html`));
}

/** @param {string} html */
function collectImageRefs(html) {
  const refs = new Set();
  for (const m of html.matchAll(/\b(?:src|srcset|href)=["']([^"']+)["']/gi)) {
    const v = m[1];
    for (const part of v.split(',')) {
      const url = part.trim().split(/\s+/)[0];
      if (url.startsWith('/images/')) refs.add(url);
    }
  }
  return [...refs];
}

// --- Dist presence ---
if (!fs.existsSync(dist)) {
  add('critical', 'Build', 'dist/ missing', 'Run `npm run build` before audit.');
} else {
  const htmlFiles = walkHtml(dist);
  const h1Issues = [];
  const missingImages = new Set();
  const pngInDist = [];

  for (const file of htmlFiles) {
    const rel = path.relative(dist, file).replace(/\\/g, '/');
    const html = fs.readFileSync(file, 'utf8');
    const h1 = (html.match(/<h1[\s>]/gi) ?? []).length;
    if (h1 !== 1) h1Issues.push(`${rel} (h1=${h1})`);

    for (const img of collectImageRefs(html)) {
      if (img.endsWith('.png') || img.endsWith('.jpg') || img.endsWith('.jpeg')) continue;
      if (!distAssetExists(img)) missingImages.add(img);
    }
  }

  walkHtml(path.join(dist, 'images')).forEach(() => {});
  function walkImages(dir) {
    if (!fs.existsSync(dir)) return;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const f = path.join(dir, e.name);
      if (e.isDirectory()) walkImages(f);
      else if (/\.png$/i.test(e.name)) pngInDist.push(path.relative(dist, f));
    }
  }
  walkImages(path.join(dist, 'images'));

  if (h1Issues.length) {
    add(
      'high',
      'SEO / accessibility',
      `Multiple or missing H1 on ${h1Issues.length} page(s): ${h1Issues.slice(0, 5).join('; ')}${h1Issues.length > 5 ? '…' : ''}`,
      'Demote extra section titles to `<h2>` (see `HeroSection`, product hub, FAQ blocks). Keep one visible `<h1>` per page.',
    );
  }

  if (missingImages.size) {
    add(
      'critical',
      'Images',
      `${missingImages.size} referenced asset(s) missing from dist: ${[...missingImages].slice(0, 6).join(', ')}`,
      'Run `npm run optimize:images`, rebuild, and redeploy. Ensure `public/images/` WebPs are committed or generated in CI before build.',
    );
  }

  if (pngInDist.some((p) => p.includes('gameplay') && fs.statSync(path.join(dist, p)).size > 80_000)) {
    add(
      'medium',
      'Performance',
      'Large PNG gameplay sources still in dist after prune',
      'Check `scripts/prune-dist-images.mjs` thresholds; pages should rely on WebP via `ResponsiveImage`.',
    );
  }

  const sitemapIndex = path.join(dist, 'sitemap-index.xml');
  if (!fs.existsSync(sitemapIndex)) {
    add('high', 'SEO', 'sitemap-index.xml missing', 'Run full build; verify `finalize-sitemap.mjs` runs.');
  }

  const blogSitemap = path.join(dist, 'sitemap-blog.xml');
  const blogCount = fs.existsSync(blogSitemap)
    ? (fs.readFileSync(blogSitemap, 'utf8').match(/<loc>/g) ?? []).length
    : 0;
  if (blogCount !== 13) {
    add(
      'medium',
      'Blog',
      `sitemap-blog.xml has ${blogCount} URLs (expected 13 incl. index)`,
      'Add posts under `content/blog/` and rebuild.',
    );
  }
}

// --- Source / ops ---
if (!process.env.INDEXNOW_KEY) {
  add(
    'low',
    'SEO',
    'IndexNow skipped (INDEXNOW_KEY not set)',
    'Set INDEXNOW_KEY in deploy env and re-run build to ping search engines after publishes.',
  );
}

const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
if (!pkg.scripts['verify:site']) {
  add(
    'low',
    'Tooling',
    'No npm script wraps `verify-site-pages.mjs`',
    'Add `"verify:site": "node scripts/verify-site-pages.mjs"` and run in CI with build.',
  );
}

try {
  const lock = fs.readFileSync(path.join(root, 'package-lock.json'), 'utf8');
  if (lock.includes('youtube-dl-exec')) {
    add(
      'info',
      'Dependencies',
      'youtube-dl-exec in devDependencies (frame extraction only)',
      'Safe for production deploy if `npm ci --omit=dev` is used; otherwise omit from production install.',
    );
  }
} catch {
  /* no lock */
}

// --- Content consistency (dist HTML) ---
if (fs.existsSync(dist)) {
  const home = path.join(dist, 'index.html');
  if (fs.existsSync(home)) {
    const html = fs.readFileSync(home, 'utf8');
    if (/100%\s*undetected|completely safe|never ban/i.test(html)) {
      add(
        'high',
        'Copy / compliance',
        'Risky absolute claims on homepage',
        'Replace with status-based wording (updates, risk exists, no guarantees).',
      );
    }
  }

  const blogIndex = path.join(dist, 'blog', 'index.html');
  if (fs.existsSync(blogIndex)) {
    const html = fs.readFileSync(blogIndex, 'utf8');
    if (html.includes('.jpg-640.webp') || html.includes('best-battlefield-6-cheats-640.webp') || html.includes('bf6-')) {
      add(
        'critical',
        'Blog images',
        'Stale blog hero WebP paths in built HTML',
        'Restart dev with `npx astro dev --force`; redeploy after heroImage PNG updates. Legacy map lives in `blogHeroImage.ts`.',
      );
    }
  }
}

// --- Git: gameplay assets ---
try {
  const untracked = execSync('git status --porcelain public/images/gameplay/', {
    cwd: root,
    encoding: 'utf8',
  }).trim();
  if (untracked.includes('??')) {
    add(
      'critical',
      'Deploy',
      'Gameplay image files are untracked in git',
      'Add SAND media later; placeholder.svg is the current hero asset.',
    );
  }
} catch {
  /* not a git repo or git missing */
}

// --- Report ---
const order = { critical: 0, high: 1, medium: 2, low: 3, info: 4 };
findings.sort((a, b) => order[a.severity] - order[b.severity]);

console.log('\n=== Full site audit ===\n');
if (!findings.length) {
  console.log('No automated issues detected beyond passing sub-audits.\n');
  process.exit(0);
}

for (const f of findings) {
  console.log(`[${f.severity.toUpperCase()}] ${f.area}`);
  console.log(`  Problem: ${f.problem}`);
  console.log(`  Solution: ${f.solution}\n`);
}

const worst = findings.some((f) => f.severity === 'critical' || f.severity === 'high');
process.exit(worst ? 1 : 0);
