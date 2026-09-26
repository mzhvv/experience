// packages/libs/src/package-json/read.ts

import { resolve } from 'path';
import { readFileSync, existsSync } from 'fs';

import type { PackageJson } from 'type-fest';

import { log } from '@/log';

function readPackageJson() {
  const packageJsonPath = resolve(process.cwd(), 'package.json');
  if (!existsSync(packageJsonPath)) {
    log.fail('package.json not found in current directory');
    process.exit(1);
  }

  let packageJson: PackageJson;
  try {
    packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
  } catch (error) {
    log.fail('Failed to parse package.json', error);
    process.exit(1);
  }

  return { packageJson, packageJsonPath };
}

export { readPackageJson };
