#!/usr/bin/env node

// packages/libs/src/npm/bin/publish-version-with-token.ts

import { publishVersionWithToken } from '../core';
import { getNpmToken } from '../libs';

publishVersionWithToken(getNpmToken());
