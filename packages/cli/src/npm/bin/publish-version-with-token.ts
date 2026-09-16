#!/usr/bin/env node // packages/cli/src/npm/bin/publish-version-with-token.ts

import { getNpmToken } from '../../libs/env/get-npm-token'; // <- на ето пока не обращай внимание!!!

import { publishVersionWithToken } from '../core';

publishVersionWithToken(getNpmToken());
