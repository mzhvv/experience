#!/usr/bin/env node
// packages/npm-kit/src/bin/publish-version-token.ts

import { createPublishVersionToken } from '@core';
import { getNpmToken } from '@libs';

createPublishVersionToken(getNpmToken());
