// packages/npm-kit/bin/publish-version-token.ts

import { updatePackageVersion, getNpmToken } from '@lib';
import { createPublishVersionToken } from '@core';

updatePackageVersion();
createPublishVersionToken(getNpmToken());
