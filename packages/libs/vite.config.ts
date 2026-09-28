// packages/npm-kit/vite.config.ts

import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@libs': path.resolve(__dirname, './src/index.ts'),
    },
  },

  plugins: [
    dts({
      entryRoot: 'src',

      staticImport: true,
      clearPureImport: true,

      exclude: ['_config/**', '_bin/**', '**/*.test.ts'],
    }),
  ],

  build: {
    lib: {
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,

      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        '__cli/index': path.resolve(__dirname, 'src/__cli/index.ts'),

        /* ✅  circular dependency

          'npm/index': path.resolve(__dirname, 'src/npm/index.ts'),

          ⚠️

          при сборке игнорирует src/npm/index.ts
          но в dist/__cli/index.js прямые импорты - preserveModules: true

          src/npm/index.ts
            export * from './core';
            export * from './libs';

          src/__cli/index.ts (игнорирует)
            import { npmCore, npmLibs } from '@/npm';

          dist/__cli/index.js
            import { npmCore as o } from "../npm/core/index.js";
            import { npmLibs as s } from "../npm/libs/index.js";
        */
      },
    },

    rollupOptions: {
      external: ['fs', 'path', 'child_process', 'crypto', 'os', 'url', 'dotenv'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
  },
});
