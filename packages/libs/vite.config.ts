// packages/npm-kit/vite.config.ts

import { defineConfig, type UserConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';

// #region types

type Builds = 'default' | 'build2';

// #endregion

// #region shared

const alias = {
  '@': path.resolve(__dirname, './src'),
  '@libs': path.resolve(__dirname, './src/index.ts'),
};

const plugins = [
  dts({
    entryRoot: 'src',
    staticImport: true,
    clearPureImport: true,
    exclude: ['_config/**', '_bin/**', '**/*.test.ts'],
  }),
];

const external = ['fs', 'path', 'child_process', 'crypto', 'os', 'url', 'dotenv'];

// #endregion

const builds: Record<Builds, UserConfig> = {
  default: {
    resolve: { alias },
    plugins: plugins,
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
        external,
        output: {
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
      },
    },
  },

  build2: {
    resolve: { alias },
    plugins: plugins,
    build: {
      lib: {
        formats: ['es'],
        fileName: (_format, entryName) => `${entryName}.js`,
        entry: {
          '__cli/index': path.resolve(__dirname, 'src/__cli/index.ts'),
        },
      },
      rollupOptions: {
        external,
        output: {
          dir: 'dist/bundled',
          entryFileNames: '[name].js',
        },
      },
    },
  },
};

export default defineConfig(({ mode }) => {
  /** type guard: валидность mode */
  function _builds(_mode: string): _mode is Builds {
    return _mode in builds;
  }

  if (!_builds(mode)) {
    console.warn(
      `⚠️ Unknown mode: "${mode}".\n\tAvailable: vite build --mode [${Object.keys(builds).join(', ')}].\n\tUsing: "default".`
    );

    return builds.default;
  }

  return builds[mode];
});
