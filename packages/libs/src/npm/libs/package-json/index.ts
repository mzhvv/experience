// packages/libs/src/npm/libs/package-json/index.ts

import { writeFileSync } from 'fs';
import { execSync } from 'child_process';

import type { PackageJson } from 'type-fest';

import { logger } from '@/logger';
import { readPackageJson } from '@/shared';

// #region publishPackageScripts()

function _publishPackageScripts(scripts: PackageJson['scripts']) {
  scripts['publish:patch'] = 'npm-kit-publish';
  scripts['publish:minor'] = 'npm-kit-publish --minor';
  scripts['publish:major'] = 'npm-kit-publish --major';
}

function addPackageScripts() {
  const { packageJson, packageJsonPath } = readPackageJson();

  if (!packageJson.scripts) {
    logger.fail('No "scripts" field in package.json');
    process.exit(1);
  }

  try {
    _publishPackageScripts(packageJson.scripts);

    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    logger.success('npm-kit:* scripts added to package.json');
  } catch (error) {
    logger.fail('Failed to update package.json', error);
    process.exit(1);
  }
}

// #endregion

// #region bumpPackageVersion()

type VersionType = 'patch' | 'minor' | 'major';

function _parsePackageVersionType(): VersionType {
  if (process.argv.includes('--minor')) return 'minor';
  if (process.argv.includes('--major')) return 'major';
  return 'patch';
}

function bumpPackageVersion(versionType: VersionType = _parsePackageVersionType()) {
  const { packageJson } = readPackageJson();

  if (!packageJson.version) {
    logger.fail('No "version" field in package.json');
    process.exit(1);
  }

  logger.job(`Bumping version (${versionType})...`);

  try {
    const output = execSync(`npm version ${versionType} --no-git-tag-version`, {
      encoding: 'utf8',
    });
    logger.job(`New version: ${output.trim()}`);
  } catch (error) {
    logger.fail('Failed to bump version', error);
    process.exit(1);
  }
}

// #endregion

export { addPackageScripts, bumpPackageVersion };
export const packageMethods = {
  addScripts: addPackageScripts,
  bumpVersion: bumpPackageVersion,
};
