/**
 * Verifies git remote + remote fetch for Cloudflare Workers Builds.
 * Does NOT test Cloudflare's GitHub integration (dashboard-only).
 */
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const EXPECTED =
  'https://github.com/haniarooziroti/Filters-bf6che-t.org.git';
const EXPECTED_SLUG = 'haniarooziroti/Filters-bf6che-t.org';
const OLD_REPO = 'battlefield-6-hacks-.net.git';
const root = process.cwd();

const failures = [];
const notes = [];

function fail(msg) {
  failures.push(msg);
}

function sh(cmd) {
  return execSync(cmd, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
}

let origin;
try {
  origin = sh('git remote get-url origin');
} catch {
  fail('Could not read git remote origin');
  process.exit(1);
}

if (origin !== EXPECTED && !origin.includes('Filters-bf6che-t.org.git')) {
  fail(`origin must be ${EXPECTED} (got ${origin})`);
}
if (origin.includes(OLD_REPO)) {
  fail('origin still points at battlefield-6-hacks-.net');
}

let branch;
try {
  branch = sh('git branch --show-current');
} catch {
  fail('Could not read current branch');
}
if (branch !== 'main') {
  fail(`Production branch should be main (got ${branch ?? 'unknown'})`);
}

const tracking = sh('git rev-parse --abbrev-ref --symbolic-full-name @{u}');
if (!tracking.endsWith('origin/main')) {
  fail(`Branch should track origin/main (got ${tracking || 'none'})`);
}

let remoteMain;
try {
  remoteMain = sh(`git ls-remote ${EXPECTED} refs/heads/main`).split(/\s+/)[0];
} catch (e) {
  fail(`git ls-remote failed for ${EXPECTED}: ${e.message}`);
}

let localHead;
try {
  localHead = sh('git rev-parse HEAD');
} catch {
  fail('Could not read local HEAD');
}

if (remoteMain && localHead && remoteMain !== localHead) {
  notes.push(
    `Local HEAD (${localHead.slice(0, 7)}) differs from origin/main (${remoteMain.slice(0, 7)}); push before expecting Cloudflare to build latest.`,
  );
}

const required = [
  'package.json',
  'package-lock.json',
  'astro.config.mjs',
  'wrangler.toml',
  'worker.mjs',
  'src',
  'public',
];
for (const rel of required) {
  if (!fs.existsSync(path.join(root, rel))) {
    fail(`Missing required path: ${rel}`);
  }
}

for (const rel of ['package.json', 'package-lock.json', 'wrangler.toml', 'worker.mjs', 'astro.config.mjs']) {
  try {
    sh(`git cat-file -e HEAD:${rel}`);
  } catch {
    fail(`Not committed on HEAD: ${rel}`);
  }
}
for (const dir of ['src', 'public']) {
  try {
    sh(`git ls-tree HEAD ${dir}`);
  } catch {
    fail(`Not committed on HEAD: ${dir}/`);
  }
}

notes.push(
  `Remote OK for git clone URL: ${EXPECTED} (branch main → ${remoteMain?.slice(0, 7) ?? '?'})`,
);
notes.push(
  'Cloudflare "Fetching repository failed" is usually: wrong repo selected in Workers Builds, private repo without Cloudflare GitHub App access, or stale GitHub connection.',
);
notes.push(
  `In GitHub → Settings → Integrations → Applications → Cloudflare Workers and Pages: grant access to ${EXPECTED_SLUG} (not ${OLD_REPO.replace('.git', '')}).`,
);
notes.push('Unauthenticated https://github.com/' + EXPECTED_SLUG + ' returns 404 when the repo is private — that is expected.');

if (failures.length) {
  console.error('verify-github-for-cloudflare: FAIL');
  for (const f of failures) console.error(`  - ${f}`);
  for (const n of notes) console.error(`  note: ${n}`);
  process.exit(1);
}

console.log('verify-github-for-cloudflare: PASS');
for (const n of notes) console.log(`  ${n}`);