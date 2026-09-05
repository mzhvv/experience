// packages/npm-kit/vitest.config.ts

import type { AliasOptions } from 'vite';

import { defineConfig } from 'vitest/config';
import path from 'path';

import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// !TODO - Псевдонимы в vite.config и vitest.config идентичны
export const alias = {
  '@': path.resolve(__dirname, './src'),
  '@bin': path.resolve(__dirname, './src/bin'),
  '@core': path.resolve(__dirname, './src/core'),
  '@libs': path.resolve(__dirname, './src/libs'),
} as const satisfies AliasOptions;

export default defineConfig({
  resolve: { alias },

  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: ['**/node_modules/**', '**/dist/**', '**/*.config.*', '**/index.ts'],
    },
  },
});
