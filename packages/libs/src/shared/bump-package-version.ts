// packages/libs/src/npm/libs/bump-package-version.ts

import { execSync } from 'child_process';
import { readPackageJson, log } from '@/shared';

type VersionType = 'patch' | 'minor' | 'major';

function parsePackageVersionType(): VersionType {
  if (process.argv.includes('--minor')) return 'minor';
  if (process.argv.includes('--major')) return 'major';
  return 'patch';
}

function bumpPackageVersion(versionType: VersionType = parsePackageVersionType()) {
  const { packageJson } = readPackageJson();

  if (!packageJson.version) {
    log.fail('No "version" field in package.json');
    process.exit(1);
  }

  log.job(`Bumping version (${versionType})...`);

  try {
    const output = execSync(`npm version ${versionType} --no-git-tag-version`, {
      encoding: 'utf8',
    });
    log.job(`New version: ${output.trim()}`);
  } catch (error) {
    log.fail('Failed to bump version', error);
    process.exit(1);
  }
}

export { bumpPackageVersion, parsePackageVersionType, type VersionType };
