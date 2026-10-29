#!/usr/bin/env node

// src/packages/prettier-config/bin/format.js

import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const configPath = join(__dirname, '..', 'src', 'config.js');
const ignorePath = join(__dirname, '..', '..', '..', '..', '.prettierignore');

execSync(`npx prettier --config "${configPath}" --ignore-path "${ignorePath}" --write .`, {
  stdio: 'inherit',
});
