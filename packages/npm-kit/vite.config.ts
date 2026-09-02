// packages/npm-kit/vite.config.ts

import type { AliasOptions } from 'vite';

import { defineConfig } from 'vite';
import path from 'path';

import dts from 'vite-plugin-dts';

import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const alias = {
  '@': path.resolve(__dirname, './src'),
  '@core': path.resolve(__dirname, './src/core'),
  '@libs': path.resolve(__dirname, './src/libs'),
} as const satisfies AliasOptions;

export default defineConfig({
  plugins: [dts()],

  resolve: {
    alias: alias,
  },

  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'npm-kit',
      formats: ['es'],
      fileName: 'index',
    },
  },
});
