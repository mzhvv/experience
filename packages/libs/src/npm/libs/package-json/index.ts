// packages/libs/src/npm/libs/package/index.ts

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

// #region addScriptsPackage()

function _publishScripts(scripts: PackageJson['scripts']) {
  scripts['publish:patch'] = 'npm-kit-publish';
  scripts['publish:minor'] = 'npm-kit-publish --minor';
  scripts['publish:major'] = 'npm-kit-publish --major';
}

export function addScriptsPackage() {
  const { packageJson, packageJsonPath } = _readPackageJson();

  if (!packageJson.scripts) {
    _log.fail('No "scripts" field in package.json');
  }

  try {
    _publishScripts(packageJson.scripts);

    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    _log.success('npm-kit:* scripts added to package.json');
  } catch (error) {
    _log.fail('Failed to update package.json', error);
  }
}

// #endregion

// #region updateVersionPackage()

type VersionType = 'patch' | 'minor' | 'major';

function _parseVersionType(): VersionType {
  if (process.argv.includes('--minor')) return 'minor';
  if (process.argv.includes('--major')) return 'major';
  return 'patch';
}

export function updateVersionPackage(versionType: VersionType = _parseVersionType()) {
  const { packageJson } = _readPackageJson();

  if (!packageJson.version) {
    _log.fail('No "version" field in package.json');
  }

  _log.job(`Updating version (${versionType})...`);

  try {
    const output = execSync(`npm version ${versionType} --no-git-tag-version`, {
      encoding: 'utf8',
    });
    _log.job(`New version: ${output.trim()}`);
  } catch (error) {
    _log.fail('Failed to update version', error);
  }
}

// #endregion
