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

      exclude: ['_config/**', '_bin/**', '**/*.test.ts'],
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
        cli: path.resolve(__dirname, 'src/cli/index.ts'),
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
