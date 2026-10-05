// packages/libs/vite.config.ts

import path from 'path';
import dts from 'vite-plugin-dts';

import type { AliasOptions, ConfigEnv, UserConfig } from 'vite';
import { defineConfig } from 'vite';

import { createBuilds, createUserConfig, createViteConfig } from './src/vite';

// DRY
export const alias = {
  '@': path.resolve(__dirname, './src'),
  '@libs': path.resolve(__dirname, './src/index.ts'),
} satisfies AliasOptions;

// const sharedUserConfig = {...} satisfies UserConfig;
// createUserConfig - обертка
const sharedUserConfig = createUserConfig({
  resolve: { alias },
  build: {
    rollupOptions: {
      external: ['fs', 'path', 'child_process', 'crypto', 'os', 'url', 'dotenv'],
    },
  },
});

// export const builds = {...} satisfies Record<string, UserConfig>;
// createBuilds - обертка
const builds = createBuilds({
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
          index: path.resolve(__dirname, 'src/index.ts'),
          '__cli/index': path.resolve(__dirname, 'src/__cli/index.ts'),
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
          index: path.resolve(__dirname, 'src/index.ts'),
          '__cli/index': path.resolve(__dirname, 'src/__cli/index.ts'),
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
});

function viteConfig({ mode }: ConfigEnv): UserConfig {
  return createViteConfig(mode, builds, 'modular');
}

export default defineConfig(viteConfig);
