#!/usr/bin/env node

// packages/libs/src/__cli/index.ts

import { npmCore, npmLibs } from '@/npm';

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
      npmCore.publish.versionWithToken(npmLibs.token.get());
      break;
    default:
      console.error(`❌ Unknown npm command: ${command}`);
      process.exit(1);
  }
}

cli();
