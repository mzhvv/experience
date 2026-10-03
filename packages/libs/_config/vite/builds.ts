// packages/libs/_config/vite/builds.ts

import type { UserConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';

/* sharedUserConfig
  const sharedUserConfig = {...} satisfies UserConfig;
  Сужение автокомплита ✅
*/
export const sharedUserConfig = {
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
      '@libs': path.resolve(process.cwd(), './src/index.ts'),
    },
  },
  build: {
    rollupOptions: {
      external: ['fs', 'path', 'child_process', 'crypto', 'os', 'url', 'dotenv'],
    },
  },
} satisfies UserConfig;

/* builds
  const builds = {...} satisfies Record<string, UserConfig>>; 
  type Mode = keyof typeof builds; → "modular" | "bundled" ✅
  satisfies проверяет, но не расширяет тип переменной

  const builds: Record<string, UserConfig> = {...}; 
  type Mode = keyof typeof builds; → string ❌
  Аннотация расширяет тип, литералы теряются
*/
export const builds = {
  modular: {
    resolve: { alias: sharedUserConfig.resolve.alias },
    plugins: [
      dts({
        entryRoot: 'src',
        staticImport: true,
        clearPureImport: true,
        include: ['src/**/*.ts'],
      }),
    ],
    build: {
      lib: {
        formats: ['es'],
        fileName: (_format, entryName) => `${entryName}.js`,
        entry: {
          index: path.resolve(process.cwd(), 'src/index.ts'),
          '__cli/index': path.resolve(process.cwd(), 'src/__cli/index.ts'),
        },
      },
      rollupOptions: {
        external: sharedUserConfig.build.rollupOptions.external,
        output: {
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
      },
    },
  },

  bundled: {
    resolve: { alias: sharedUserConfig.resolve.alias },
    plugins: [
      dts({
        entryRoot: 'src',
        staticImport: true,
        clearPureImport: true,
        include: ['src/**/*.ts'],
      }),
    ],
    build: {
      lib: {
        formats: ['es'],
        fileName: (_format, entryName) => `${entryName}.js`,
        entry: {
          index: path.resolve(process.cwd(), 'src/index.ts'),
          '__cli/index': path.resolve(process.cwd(), 'src/__cli/index.ts'),
        },
      },
      rollupOptions: {
        external: sharedUserConfig.build.rollupOptions.external,
        output: {
          dir: 'dist',
          entryFileNames: '[name].js',
        },
      },
    },
  },
} satisfies Record<string, UserConfig>;
