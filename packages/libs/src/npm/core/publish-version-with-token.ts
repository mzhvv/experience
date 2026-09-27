// packages/libs/src/npm/core/publish-version-with-token.ts

import { execSync } from 'child_process';
import { log, packageJsonLibs } from '@libs';
import { npmLibs } from '../libs';

export function publishVersionWithToken(token: string) {
  try {
    log.job('🚀 npm-kit: publishing...');
    packageJsonLibs.bumpVersion();

    log.job('📦 Building...');
    execSync('npm run build', { stdio: 'inherit' });

    log.job('🔑 Setting auth token...');
    npmLibs.commands.authToken.set(token);

    log.job('📤 Publishing...');
    npmLibs.commands.publish();

    log.success('Published successfully!');
  } catch (error) {
    log.fail('Failed to publish', error);
    process.exit(1);
  } finally {
    log.job('🧹 Removing auth token...');
    npmLibs.commands.authToken.delete();
  }
}
