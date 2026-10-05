// packages/libs/src/vite/config/create-vite-config/index.ts

import type { UserConfig } from 'vite';

export function createViteConfig<T extends Record<string, UserConfig>>(
  mode: UserConfig['mode'],
  builds: T,
  fallback: keyof T
): UserConfig {
  const defaultUserConfig = {
    get default(): UserConfig {
      return builds[fallback];
    },
  };

  const viteUserConfig = {
    get production(): UserConfig {
      return defaultUserConfig.default;
    },
  };

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

  //
  if (buildsLibs.isViteMode(mode)) {
    console.warn(`❗ 'vite build' → '${mode}' → DEFAULT_MODE = '${mode}'`);
    console.log(`❓ Available: --mode [${buildsLibs.modesList}]\n`);

    return viteUserConfig[mode];
  }

  if (buildsLibs.isDefaultMode(mode)) {
    console.warn(`❗ 'vite build --mode ${mode}' → DEFAULT_MODE = '${mode}'`);
    console.log(`❓ Available: --mode [${buildsLibs.modesList}]\n`);
    return defaultUserConfig[mode];
  }

  /* `vite build mode` - vite error */
  throw new Error(`Unknown --mode '${mode}'. Available: [${buildsLibs.modesList}]\n`);
}
