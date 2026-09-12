// packages/npm-kit/_config/alias/vite.ts

import type { AliasOptions } from 'vite';
import path from 'path';

// import { getDirname } from '../_libs/get-dirname';
// const __dirname = getDirname(import.meta.url, '../..');
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(new URL('../..', import.meta.url));

export const aliasVite = {
  '@': path.resolve(__dirname, './src'),
  '@bin': path.resolve(__dirname, './src/bin'),
  '@core': path.resolve(__dirname, './src/core'),
  '@libs': path.resolve(__dirname, './src/libs'),
  '@packages': path.resolve(__dirname, './src/_packages'),
} satisfies AliasOptions;
