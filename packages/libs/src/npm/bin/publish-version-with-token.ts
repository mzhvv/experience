#!/usr/bin/env node // packages/libs/src/npm/bin/publish-version-with-token.ts

import { getNpmToken } from '@env/libs';

import { publishVersionWithToken } from '../core';

publishVersionWithToken(getNpmToken());
