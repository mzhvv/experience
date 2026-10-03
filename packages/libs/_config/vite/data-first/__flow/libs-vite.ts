// packages/libs/_config/vite/data-first/__flow/libs-vite.ts

import type { ConfigEnv, UserConfig } from 'vite';

import { createBuilds, createUserConfig } from '@/vite/config';
import { sharedUserConfig as _sharedUserConfig, builds as _builds } from '../../builds';

// #region builds

const sharedUserConfig = createUserConfig(_sharedUserConfig);
void sharedUserConfig;
const builds = createBuilds(_builds); // createBuilds<string>(_builds) → error: "'Pass only literals, there is no need to pass a string.'"

// #endregion
