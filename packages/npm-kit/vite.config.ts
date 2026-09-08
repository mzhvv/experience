// packages/npm-kit/vite.config.ts

import type { AliasOptions } from 'vite';

import { defineConfig, type Plugin } from 'vite';
import path from 'path';
import { glob } from 'glob';

import dts from 'vite-plugin-dts';

import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// !TODO - Псевдонимы в vite.config и vitest.config идентичны
export const alias = {
  '@': path.resolve(__dirname, './src'),
  '@bin': path.resolve(__dirname, './src/bin'),
  '@core': path.resolve(__dirname, './src/core'),
  '@libs': path.resolve(__dirname, './src/libs'),
  '@_packages': path.resolve(__dirname, './src/_packages'),
} satisfies AliasOptions;

export default defineConfig({
  plugins: [
    dts({
      staticImport: true,
      clearPureImport: true,
    }),
  ],

  resolve: {
    alias,
  },

  build: {
    // sourcemap: true,
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        ...Object.fromEntries(
          glob
            .sync('src/bin/*.ts')
            .map((file) => [
              file.replace(/^src\//, '').replace(/\.ts$/, ''),
              path.resolve(__dirname, file),
            ])
        ),
      },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
    },

    rollupOptions: {
      external: [
        // Node.js
        'fs',
        'path',
        'child_process',
        'crypto',
        'os',
        'url',
        // npm зависимости
        'dotenv',
      ],
      output: {
        preserveModules: true,
        dir: 'dist',
      },
    },
  },
});
