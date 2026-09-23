#!/usr/bin/env node

// packages/libs/src/__cli/index.ts

import { getNpmToken } from '@/npm/libs';
import { publishVersionWithToken } from '../npm/core';

const [, , domain, command, ..._args] = process.argv;

async function cli() {
  switch (domain) {
    case 'npm':
      await handleNpm(command);
      break;
    case '--help':
    case undefined:
      // showHelp();
      break;
    default:
      console.error(`❌ Unknown domain: ${domain}`);
      // showHelp();
      process.exit(1);
  }
}

async function handleNpm(command: string | undefined) {
  switch (command) {
    case 'publish':
      publishVersionWithToken(getNpmToken());
      break;
    default:
      console.error(`❌ Unknown npm command: ${command}`);
      process.exit(1);
  }
}

cli();
