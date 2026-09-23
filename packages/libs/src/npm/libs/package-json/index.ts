// packages/libs/src/npm/libs/package-json/index.ts

import { resolve } from 'path';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';

import type { PackageJson } from 'type-fest';

// #region shared

const _log = {
  job: function _job(message: string) {
    console.log(`   ${message}`);
  },

  success: function _success(message: string) {
    console.log(`✅ ${message}`);
  },

  fail: function _fail(message: string, error?: unknown): never {
    const details = error instanceof Error ? error.message : error ? String(error) : '';
    console.error(`❌ ${message}${details ? `: ${details}` : ''}`);
    process.exit(1);
  },
};

function _readPackageJson() {
  const packageJsonPath = resolve(process.cwd(), 'package.json');
  if (!existsSync(packageJsonPath)) {
    _log.fail('package.json not found in current directory');
  }

  let packageJson: PackageJson;
  try {
    packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
  } catch (error) {
    _log.fail('Failed to parse package.json', error);
  }

  return { packageJson, packageJsonPath };
}

// #endregion

// #region publishPackageScripts()

function _publishPackageScripts(scripts: PackageJson['scripts']) {
  scripts['publish:patch'] = 'npm-kit-publish';
  scripts['publish:minor'] = 'npm-kit-publish --minor';
  scripts['publish:major'] = 'npm-kit-publish --major';
}

function addPackageScripts() {
  const { packageJson, packageJsonPath } = _readPackageJson();

  if (!packageJson.scripts) {
    _log.fail('No "scripts" field in package.json');
  }

  try {
    _publishPackageScripts(packageJson.scripts);

    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    _log.success('npm-kit:* scripts added to package.json');
  } catch (error) {
    _log.fail('Failed to update package.json', error);
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
  const { packageJson } = _readPackageJson();

  if (!packageJson.version) {
    _log.fail('No "version" field in package.json');
  }

  _log.job(`Bumping version (${versionType})...`);

  try {
    const output = execSync(`npm version ${versionType} --no-git-tag-version`, {
      encoding: 'utf8',
    });
    _log.job(`New version: ${output.trim()}`);
  } catch (error) {
    _log.fail('Failed to bump version', error);
  }
}

// #endregion

export { addPackageScripts, bumpPackageVersion };
export const packageMethods = {
  addScripts: addPackageScripts,
  bumpVersion: bumpPackageVersion,
};
