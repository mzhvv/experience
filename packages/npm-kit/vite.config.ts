// packages/npm-kit/vite.config.ts

import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

import dts from 'vite-plugin-dts';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),

      name: 'npm-kit',
      formats: ['es'],
      fileName: 'index',
    },
  },
});
