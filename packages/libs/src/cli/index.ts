#!/usr/bin/env node

// packages/libs/src/cli/index.ts

import { getNpmToken } from '@/npm/libs';
import { publishVersionWithToken } from '../npm/core';
import { addScriptsPackage, updateVersionPackage } from '../npm/libs/package';

const [, , domain, command, ..._args] = process.argv;

async function main() {
  switch (domain) {
    case 'npm':
      await handleNpm(command);
      break;
    case 'package':
      await handlePackage(command);
      break;
    case '--help':
    case undefined:
      showHelp();
      break;
    default:
      console.error(`❌ Unknown domain: ${domain}`);
      showHelp();
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

async function handlePackage(command: string | undefined) {
  switch (command) {
    case 'add-scripts':
      addScriptsPackage();
      break;
    case 'update-version':
      updateVersionPackage();
      break;
    default:
      console.error(`❌ Unknown package command: ${command}`);
      process.exit(1);
  }
}

function showHelp() {
  console.log(`
@mzhvv/libs

Usage: npx mzhvv-libs <domain> <command> [options]

Domains:
  npm
    publish            Publish package with token
                         --minor   bump minor
                         --major   bump major
  package
    add-scripts        Add npm-kit scripts
    update-version     Bump version
                         --minor
                         --major

Examples:
  npx libs npm publish --minor
  npx libs package add-scripts
  npx libs package update-version --major
`);
}

main();
