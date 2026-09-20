// packages/npm-kit/vite.config.ts

import { defineConfig } from 'vite';
import { glob } from 'glob';
import path from 'path';
import dts from 'vite-plugin-dts';

// import { getDirname } from './_config/libs/get-dirname';
import { aliasVite } from './_config/alias/vite';

const __dirname = process.cwd(); // getDirname(import.meta.url, '.');

export default defineConfig({
  plugins: [
    dts({
      entryRoot: 'src',

      staticImport: true,
      clearPureImport: true,

      exclude: ['_config/**', '_bin/**'],
    }),
  ],

  resolve: {
    alias: aliasVite,
  },

  build: {
    lib: {
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,

      entry: {
        ...Object.fromEntries(
          glob
            .sync('src/*/bin/*.ts')
            .map((file) => [
              file.replace(/^src\//, '').replace(/\.ts$/, ''),
              path.resolve(__dirname, file),
            ])
        ),
        ...Object.fromEntries(
          glob
            .sync('src/*/core/index.ts')
            .map((file) => [
              file.replace(/^src\//, '').replace(/\.ts$/, ''),
              path.resolve(__dirname, file),
            ])
        ),
        ...Object.fromEntries(
          glob
            .sync('src/*/libs/index.ts')
            .map((file) => [
              file.replace(/^src\//, '').replace(/\.ts$/, ''),
              path.resolve(__dirname, file),
            ])
        ),
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

/* 
  ✅ 20.09.26

  vite v6.4.3 building for production...
  ✓ 9 modules transformed.

  [vite:dts] Start generate declaration files...
  dist/npm/core/index.js                       0.12 kB │ gzip: 0.11 kB
  dist/npm/bin/add-scripts.js                  0.15 kB │ gzip: 0.13 kB
  dist/npm/bin/publish-version-with-token.js   0.23 kB │ gzip: 0.16 kB
  dist/npm/libs/get-npm-token.js               0.33 kB │ gzip: 0.23 kB
  dist/npm/libs/index.js                       0.45 kB │ gzip: 0.23 kB
  dist/npm/libs/update-package-version.js      0.53 kB │ gzip: 0.33 kB
  dist/npm/libs/npm.js                         0.55 kB │ gzip: 0.29 kB
  dist/npm/core/publish-version-with-token.js  0.81 kB │ gzip: 0.44 kB
  dist/npm/libs/add-scripts.js                 0.95 kB │ gzip: 0.49 kB
  [vite:dts] Declaration files built in 2950ms.

  ✓ built in 3.19s
*/
