// src/projects/mzhvv/monorepo/prettier.config.mjs

import prettierСonfig from '@experience/prettier-config';

export default {
  ...prettierСonfig,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: 'packages/ui/src/styles/globals.css',
  tailwindFunctions: ['cn', 'cva'],
};
