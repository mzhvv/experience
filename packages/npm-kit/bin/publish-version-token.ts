// packages/npm-kit/bin/publish-version-token.ts

import { updatePackageVersion, getNpmToken } from '@libs';
import { createPublishVersionToken } from '@core';

updatePackageVersion();
createPublishVersionToken(getNpmToken());
