// packages/libs/src/vite/config/libs.ts

import type { UserConfig } from 'vite';

export function createUserConfig<T extends UserConfig>(config: T): T {
  return config;
}

// export function createBuilds<K extends string>(
//   builds: Record<K, UserConfig>
// ): Record<K, UserConfig> {
//   return builds;
// }

export function createBuilds<K extends string>(
  builds: Record<K, UserConfig> &
    (string extends K
      ? { 'Pass only literals, there is no need to pass a string.': true }
      : unknown)
): Record<K, UserConfig> {
  return builds;
}
