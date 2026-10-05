// packages/libs/src/vite/config/create-user-config.ts

import type { UserConfig } from 'vite';

export function createUserConfig<T extends UserConfig>(config: T): T {
  return config;
}
