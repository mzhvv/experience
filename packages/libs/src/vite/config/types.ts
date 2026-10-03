// packages/libs/src/vite/config/types.ts

import type { UserConfig } from 'vite';

export type SharedUserConfig = UserConfig;
export type Builds = Record<string, UserConfig>;
