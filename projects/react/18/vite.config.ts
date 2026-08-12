// projects/react/18/vite.config.ts

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import type { AliasOptions } from 'vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const alias = {
  '@': path.resolve(__dirname, './src'),
  '@packages': path.resolve(__dirname, './packages'),
} satisfies AliasOptions;

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias,
  },
});
