#!/usr/bin/env node // packages/cli/src/npm/bin/publish-version-with-token.ts

import { getNpmToken } from '../../env/libs/get-npm-token'; // <- на ето пока не обращай внимание!!!

import { publishVersionWithToken } from '../core';

publishVersionWithToken(getNpmToken());
