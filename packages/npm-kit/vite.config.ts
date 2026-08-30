// packages/npm-kit/vite.config.ts

import { defineConfig } from 'vite';
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';

import dts from 'vite-plugin-dts';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [dts()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@core': path.resolve(__dirname, './src/core'),
      '@lib': path.resolve(__dirname, './src/lib'),
    },
  },

  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),

      name: 'npm-kit',
      formats: ['es'],
      fileName: 'index',
    },
  },
});
