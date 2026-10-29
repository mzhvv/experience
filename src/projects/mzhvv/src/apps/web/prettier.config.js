// src/projects/mzhvv/monorepo/apps/web/prettier.config.js

import { prettierConfig, prettierPluginTailwind } from '@packages/prettier-config';

export default {
  ...prettierConfig,
  ...prettierPluginTailwind,
  tailwindStylesheet: 'src/app/globals.css',
};
