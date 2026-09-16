// packages/npm-kit/_config/alias/vite.ts

import type { AliasOptions } from 'vite';

import path from 'path';

// import { getDirname } from '../libs/get-dirname';
// const __dirname = getDirname(import.meta.url, '../..');
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(new URL('../..', import.meta.url));

export const aliasVite = {
  '@': path.resolve(__dirname, './src'),
  '@env': path.resolve(__dirname, './src/env'),
  '@npm': path.resolve(__dirname, './src/npm'),
  '@package': path.resolve(__dirname, './src/package'),
  '@packages': path.resolve(__dirname, './src/_packages'),
} satisfies AliasOptions;
