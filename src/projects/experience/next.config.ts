import type { NextConfig } from 'next';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

function findRepoRoot(start: string): string {
  let dir = start;
  while (dir !== dirname(dir)) {
    if (existsSync(join(dir, 'pnpm-workspace.yaml')) || existsSync(join(dir, 'turbo.json'))) {
      return dir;
    }
    dir = dirname(dir);
  }
  throw new Error('Repo root not found');
}

const currentProject = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // outputFileTracingRoot: join(
  //   dirname(fileURLToPath(import.meta.url)),
  //   '../../..' // src/projects/mzhvv/
  // ),
  outputFileTracingRoot: findRepoRoot(currentProject),
};

export default nextConfig;
