#!/usr/bin/env node

// packages/libs/src/npm/bin/update-version-package.ts

import { updateVersionPackage } from '../libs';

const type = process.argv.includes('--minor')
  ? 'minor'
  : process.argv.includes('--major')
    ? 'major'
    : 'patch';

updateVersionPackage(type);
