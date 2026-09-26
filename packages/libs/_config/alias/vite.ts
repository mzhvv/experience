// packages/npm-kit/_config/alias/vite.ts

import type { AliasOptions } from 'vite';

import path from 'path';

// import { fileURLToPath } from 'url';
// const __dirname = fileURLToPath(new URL('../..', import.meta.url));
import { getDirname } from '../libs/get-dirname';
const __dirname = getDirname(import.meta.url, '../..');

export const aliasVite = {
  '@': path.resolve(__dirname, './src'),
  '@libs': path.resolve(__dirname, './src/index.ts'),
} satisfies AliasOptions;
