import { spawnSync } from 'node:child_process';

const result = spawnSync(process.execPath, ['scripts/generate-brand-visuals.mjs'], {
  stdio: 'inherit',
  cwd: process.cwd(),
});

process.exit(result.status ?? 1);
