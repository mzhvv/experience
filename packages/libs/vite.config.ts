// packages/npm-kit/vite.config.ts

import type { UserConfig } from 'vite';

import { defineConfig } from 'vite';
import path from 'path';

import dts from 'vite-plugin-dts';

// types

type DefaultMode = 'default';
type ViteMode = 'production';
type CustomMode = 'modular' | 'bundled';

type Builds = DefaultMode | ViteMode | CustomMode;

// const

const DEFAULT_MODE: DefaultMode = 'default';
const VITE_DEFAULT_MODE: ViteMode = 'production';
const CUSTOM_DEFAULT_MODE: CustomMode = 'modular';

// shared

const sharedUserConfig = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@libs': path.resolve(__dirname, './src/index.ts'),
    },
  },
  build: {
    rollupOptions: {
      external: ['fs', 'path', 'child_process', 'crypto', 'os', 'url', 'dotenv'],
    },
  },
} satisfies UserConfig;

//

const builds: Record<Builds, UserConfig> = {
  get default() {
    return builds[CUSTOM_DEFAULT_MODE];
  },

  get production() {
    return this.default;
  },

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
};

const buildsLibs = {
  isCustomMode(mode: UserConfig['mode']): mode is Builds {
    return mode in builds;
  },

  customModesList: Object.keys(builds)
    .filter((k) => k !== 'default')
    .join(', '),
};

export default defineConfig(({ mode }) => {
  // `vite build mode` - vite error

  // default
  if (mode === DEFAULT_MODE) {
    return builds.default;
  }

  // `vite build`
  if (mode === VITE_DEFAULT_MODE) {
    return builds.default;
  }

  // `vite build mode --НЕСУЩЕСТВУЮЩИЙ`
  const UNKNOWN_MODE: boolean = true;
  if (!buildsLibs.isCustomMode(mode)) {
    return builds.default;
  }

  return builds[mode];
});

// if (!isCustomMode) {
//   console.warn(`\n❗ Unknown --mode`);
//   console.warn(
//     `❓ Available: --mode [${buildsLibs.customModesList}] то vite build по улочанию взвращает ${VITE_DEFAULT_MODE}`
//   );

//   console.log(
//     `Using: ${(!isCustomMode && '"production" → ') || ''}"default" → "${CUSTOM_DEFAULT_MODE}"\n`
//   );

//   return builds.default;
// }
