// packages/libs/src/npm/core/publish-version-with-token.ts

import { execSync } from 'child_process';

import { npmLibs } from '../libs';

export function publishVersionWithToken(token: string): void {
  try {
    console.log('🚀 npm-kit: publishing...');
    updateVersionPackage();

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
