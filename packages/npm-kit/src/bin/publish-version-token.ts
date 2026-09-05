#!/usr/bin/env node

// packages/npm-kit/src/bin/publish-version-token.ts

import { createPublishVersionToken } from '@core';
import { updatePackageVersion, getNpmToken } from '@libs';

updatePackageVersion();
createPublishVersionToken(getNpmToken());
