// packages/libs/src/package-json/bump-version.ts

import { execSync } from 'child_process';
import { logLibs } from '@/log';
import { readPackageJson } from './read';

type ParsePackageJsonVersionType = 'patch' | 'minor' | 'major';

function parsePackageJsonVersionType(): ParsePackageJsonVersionType {
  if (process.argv.includes('--minor')) return 'minor';
  if (process.argv.includes('--major')) return 'major';
  return 'patch';
}

function bumpPackageJsonVersion(
  versionType: ParsePackageJsonVersionType = parsePackageJsonVersionType()
) {
  const { packageJson } = readPackageJson();

  if (!packageJson.version) {
    logLibs.fail('No "version" field in package.json');
    process.exit(1);
  }

  logLibs.job(`Bumping version (${versionType})...`);

  try {
    const output = execSync(`npm version ${versionType} --no-git-tag-version`, {
      encoding: 'utf8',
    });
    logLibs.job(`New version: ${output.trim()}`);
  } catch (error) {
    logLibs.fail('Failed to bump version', error);
    process.exit(1);
  }
}

export type { ParsePackageJsonVersionType };
export { bumpPackageJsonVersion, parsePackageJsonVersionType };
