// packages/libs/src/npm/libs/package-json/index.ts

import type { PackageJson } from 'type-fest';
import { writeFileSync } from 'fs';
import { log, readPackageJson } from '@/shared';

function _publishPackageScripts(scripts: PackageJson['scripts']) {
  scripts['publish:patch'] = 'npm-kit-publish';
  scripts['publish:minor'] = 'npm-kit-publish --minor';
  scripts['publish:major'] = 'npm-kit-publish --major';
}

function addPackageScripts() {
  const { packageJson, packageJsonPath } = readPackageJson();

  if (!packageJson.scripts) {
    log.fail('No "scripts" field in package.json');
    process.exit(1);
  }

  try {
    _publishPackageScripts(packageJson.scripts);

    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    log.success('npm-kit:* scripts added to package.json');
  } catch (error) {
    log.fail('Failed to update package.json', error);
    process.exit(1);
  }
}

export { addPackageScripts };
