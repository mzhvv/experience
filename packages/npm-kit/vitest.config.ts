// packages/npm-kit/vitest.config.ts

import type { AliasOptions } from 'vite';

import { defineConfig } from 'vitest/config';
import path from 'path';

import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const alias = {
  '@': path.resolve(__dirname, './src'),
  '@core': path.resolve(__dirname, './src/core'),
  '@lib': path.resolve(__dirname, './src/lib'),
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
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/__tests__/**',
        '**/*.config.*',
        '**/index.ts',
      ],
    },
  },
});
