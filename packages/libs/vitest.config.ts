// packages/libs/vitest.config.ts

import { defineConfig } from 'vitest/config';

import { alias } from './vite.config';

export default defineConfig({
  resolve: { alias },

  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.test.ts', '_config/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/**/*.ts', '_config/**/*.ts'],
      exclude: ['**/*.test.ts', '**/*.d.ts', '**/types.ts', '**/index.ts'],
    },
  },
});
