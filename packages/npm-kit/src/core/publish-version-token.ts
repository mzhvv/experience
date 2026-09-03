// packages/npm-kit/src/core/publish-version-token.ts

import { updatePackageVersion, createPublishVersionToken, getNpmToken } from '@libs';

updatePackageVersion();
createPublishVersionToken(getNpmToken());
