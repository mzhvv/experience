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
        cli: path.resolve(__dirname, 'src/__cli/index.ts'),
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
