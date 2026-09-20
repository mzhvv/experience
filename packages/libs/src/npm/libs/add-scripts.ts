// packages/libs/src/npm/libs/add-scripts.ts

import type { PackageJson } from 'type-fest';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

function _publishScripts(packageJson: PackageJson) {
  packageJson.scripts['publish:patch'] = 'npm-kit-publish';
  packageJson.scripts['publish:minor'] = 'npm-kit-publish --minor';
  packageJson.scripts['publish:major'] = 'npm-kit-publish --major';
}

export function addScripts() {
  console.log('🚀 npm-kit: adding scripts to package.json...');

  const packageJsonPath = resolve(process.cwd(), 'package.json');
  if (!existsSync(packageJsonPath)) {
    console.error('❌ package.json not found in current directory');
    process.exit(1);
  }

  console.log('📦 Found package.json, adding scripts...');

  const packageJson: PackageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
  packageJson.scripts = packageJson.scripts || {};

  try {
    _publishScripts(packageJson);

    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    console.log('✅ npm-kit:* scripts added to package.json');
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('❌ Failed to update package.json:', message);
    process.exit(1);
  }
}
