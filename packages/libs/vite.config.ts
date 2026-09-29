// packages/npm-kit/vite.config.ts

import type { AliasOptions, UserConfig } from 'vite';
import type { ExternalOption } from 'rollup';

import { defineConfig } from 'vite';
import path from 'path';

import dts from 'vite-plugin-dts';

// #region types

type Builds = 'default' | 'modular' | 'bundled';

// #endregion

// #region shared

const alias: AliasOptions = {
  '@': path.resolve(__dirname, './src'),
  '@libs': path.resolve(__dirname, './src/index.ts'),
};

const externalRollupOptions: ExternalOption = [
  'fs',
  'path',
  'child_process',
  'crypto',
  'os',
  'url',
  'dotenv',
];

// #endregion
const DEFAULT_BUILD: Exclude<Builds, 'default'> = 'modular'; // ⚠️
const builds: Record<Builds, UserConfig> = {
  get default() {
    return builds[DEFAULT_BUILD];
  },

  modular: {
    resolve: { alias },
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
        external: externalRollupOptions,
        output: {
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
      },
    },
  },

  bundled: {
    resolve: { alias },
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
        external: externalRollupOptions,
        output: {
          dir: 'dist',
          entryFileNames: '[name].js',
        },
      },
    },
  },
};

const buildsLibs = {
  isCustomMode(mode: string): mode is Builds {
    return mode in builds;
  },

  customModesList: Object.keys(builds)
    .filter((k) => k !== 'default')
    .join(', '),
};

export default defineConfig(({ mode }) => {
  const isCustomMode = buildsLibs.isCustomMode(mode); // если "modular" или "bundled"
  // const isViteMode = mode === 'production'; // если `vite build` то mode === "production"

  if (!isCustomMode) {
    console.warn(`\n❗ Unknown --mode: default vite mode "${mode}"`);

    console.warn(`❓ Available: vite build --mode [${buildsLibs.customModesList}]\n`);

    console.warn(
      `Using: ${(!isCustomMode && '"production" → ') || ''}"default" → "${DEFAULT_BUILD}"\n`
    );

    return builds.default;
  }

  return builds[mode];
});
