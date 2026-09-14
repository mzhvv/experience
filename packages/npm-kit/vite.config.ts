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
      external: ['fs', 'path', 'child_process', 'crypto', 'os', 'url', 'dotenv'],
      output: {
        preserveModules: true,
        dir: 'dist',
      },
    },
  },
});
