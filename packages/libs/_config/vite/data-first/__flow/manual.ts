// packages/libs/_config/vite/data-first/__flow/manual.ts

import type { ConfigEnv, UserConfig } from 'vite';

import type { Builds, SharedUserConfig } from '@/vite/config';
import { sharedUserConfig as _sharedUserConfig, builds as _builds } from '../../builds';

// #region builds

const sharedUserConfig = _sharedUserConfig satisfies SharedUserConfig;
void sharedUserConfig;
const builds = _builds satisfies Builds;

// #endregion
// #region ↓

type Mode = keyof typeof builds;
const DEFAULT_MODE: Mode = 'modular';

const defaultUserConfig = {
  get default(): UserConfig {
    return builds[DEFAULT_MODE];
  },
};

const viteUserConfig = {
  get production(): UserConfig {
    return defaultUserConfig.default;
  },
};

// type DefaultMode = keyof typeof defaultUserConfig;
// type ViteMode = keyof typeof viteUserConfig;

// #endregion
// #region libs

const sharedBuildsLibs = {
  createIsMode<K extends string>(
    configs: Record<K, UserConfig>
  ): (mode: UserConfig['mode']) => mode is K {
    return (mode): mode is K => {
      return typeof mode === 'string' && mode in configs;
    };
  },
  createList: (props: Record<string, UserConfig>) => Object.keys(props).join(', '),
};

const buildsLibs = {
  // isViteMode(mode: UserConfig['mode']): mode is ViteMode {
  //   return mode in viteUserConfig;
  // },
  // isDefaultMode(mode: UserConfig['mode']): mode is DefaultMode {
  //   return mode in defaultUserConfig;
  // },
  // isMode(mode: UserConfig['mode']): mode is Mode {
  //   return mode in builds;
  // },
  isViteMode: sharedBuildsLibs.createIsMode(viteUserConfig),
  isDefaultMode: sharedBuildsLibs.createIsMode(defaultUserConfig),
  isMode: sharedBuildsLibs.createIsMode(builds),

  modesList: sharedBuildsLibs.createList(builds),
};

// #endregion
// #region config

export function viteConfig({ mode }: ConfigEnv): UserConfig {
  if (buildsLibs.isViteMode(mode)) {
    console.warn(`❗ 'vite build' → '${mode}' → DEFAULT_MODE = '${DEFAULT_MODE}'`);
    console.log(`❓ Available: --mode [${buildsLibs.modesList}]\n`);

    return viteUserConfig[mode];
  }

  if (buildsLibs.isDefaultMode(mode)) {
    console.warn(`❗ 'vite build --mode ${mode}' → DEFAULT_MODE = '${DEFAULT_MODE}'`);
    console.log(`❓ Available: --mode [${buildsLibs.modesList}]\n`);
    return defaultUserConfig[mode];
  }

  /* `vite build mode` - vite error */
  throw new Error(`Unknown --mode '${mode}'. Available: [${buildsLibs.modesList}]\n`);
}

// #endregion
