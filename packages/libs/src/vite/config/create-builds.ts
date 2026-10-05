// packages/libs/src/vite/config/create-builds.ts

import type { UserConfig } from 'vite';

export function createBuilds<K extends string>(
  builds: Record<K, UserConfig> &
    (string extends K
      ? { 'Pass only literals, there is no need to pass a string.': true }
      : unknown)
): Record<K, UserConfig> {
  return builds;
}
