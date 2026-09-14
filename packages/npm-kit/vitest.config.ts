// packages/npm-kit/vitest.config.ts

import { defineConfig } from 'vitest/config';

import { aliasVite } from './_config/alias/vite';

export default defineConfig({
  resolve: { alias: aliasVite },

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
