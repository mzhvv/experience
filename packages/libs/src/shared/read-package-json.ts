// packages/libs/src/shared/read-package-json.ts

import { resolve } from 'path';
import { readFileSync, existsSync } from 'fs';

import type { PackageJson } from 'type-fest';

import { logger } from '@/logger';

export function readPackageJson() {
  const packageJsonPath = resolve(process.cwd(), 'package.json');
  if (!existsSync(packageJsonPath)) {
    logger.fail('package.json not found in current directory');
    process.exit(1);
  }

  let packageJson: PackageJson;
  try {
    packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
  } catch (error) {
    logger.fail('Failed to parse package.json', error);
    process.exit(1);
  }

  return { packageJson, packageJsonPath };
}
