// packages/npm-kit/src/core/publish-version-token.ts

import { updatePackageVersion, createPublishVersionToken, getNpmToken } from '@libs';

export function publishVersionWithToken() {
  updatePackageVersion();
  createPublishVersionToken(getNpmToken());
}
