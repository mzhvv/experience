// packages/npm-kit/src/lib/update-package-version.ts

import { execSync } from 'child_process';
import { resolve } from 'path';
import { readFileSync } from 'fs';

export function updatePackageVersion(): void {
  const type = process.argv.includes('--minor')
    ? 'minor'
    : process.argv.includes('--major')
      ? 'major'
      : 'patch';

  console.log(`📦 Updating version (${type})...`);

  execSync(`npm version ${type} --no-git-tag-version`, { stdio: 'inherit' });

  const pkg = JSON.parse(readFileSync(resolve(process.cwd(), 'package.json'), 'utf-8'));
  console.log(`📌 New version: ${pkg.version}`);
}
