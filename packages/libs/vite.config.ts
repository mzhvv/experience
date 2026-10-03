// packages/libs/vite.config.ts

import { defineConfig } from 'vite';
import { viteConfig } from './_config/vite';

export default defineConfig(viteConfig.v1);
// export default defineConfig((env) => viteConfig.v1(env));
