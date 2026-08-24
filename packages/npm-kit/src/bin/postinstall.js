// packages/npm-kit/src/bin/postinstall.js

import { writeFileSync, readFileSync } from 'fs';
import { resolve } from 'path';

const packageJsonPath = resolve(process.cwd(), 'package.json');

try {
  const pkg = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

  pkg.scripts = pkg.scripts || {};
  pkg.scripts['publish:patch'] = 'npm-kit-publish';
  pkg.scripts['publish:minor'] = 'npm-kit-publish --minor';
  pkg.scripts['publish:major'] = 'npm-kit-publish --major';

  writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2) + '\n');
  console.log('✅ npm-kit scripts added to package.json');
} catch (error) {
  console.error('❌ Failed to update package.json:', error.message);
}
