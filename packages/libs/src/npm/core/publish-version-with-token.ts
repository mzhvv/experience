// packages/cli/src/npm/core/publish-version-with-token.ts

import { execSync } from 'child_process';

import { updatePackageVersion } from '../../package/update-package-version'; // <- на ето пока не обращай внимание!!!

import { npmLibs } from '../libs';

export function publishVersionWithToken(token: string): void {
  try {
    console.log('🚀 npm-kit: publishing...');
    updatePackageVersion();

    console.log('📦 Building...');
    execSync('npm run build', { stdio: 'inherit' });

    console.log('🔑 Setting auth token...');
    npmLibs.config.authToken.set(token);

    console.log('📤 Publishing...');
    npmLibs.publish();

    console.log('✅ Published successfully!');
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('❌ Failed to publish:', message);
    process.exit(1);
  } finally {
    console.log('🧹 Removing auth token...');
    npmLibs.config.authToken.delete();
  }
}
