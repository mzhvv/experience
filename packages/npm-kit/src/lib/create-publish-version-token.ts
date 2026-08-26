// packages/npm-kit/src/lib/create-publish-version-token.ts

import { execSync } from 'child_process';

import { updatePackageVersion } from './update-package-version';

export function createPublishVersionToken(token: string): void {
  updatePackageVersion();
  execSync('npm run build', { stdio: 'inherit' });
  execSync(`npm config set //registry.npmjs.org/:_authToken=${token}`, { stdio: 'inherit' });
  execSync('npm publish --access public', { stdio: 'inherit' });
  execSync('npm config delete //registry.npmjs.org/:_authToken', { stdio: 'inherit' });

  console.log('✅ Published successfully!');
}
