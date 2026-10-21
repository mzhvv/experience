// projects/mzhvv/next-monorepo/prettier.config.mjs

import base from '../../../prettier.config.mjs';

export default {
  ...base,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: 'packages/ui/src/styles/globals.css',
  tailwindFunctions: ['cn', 'cva'],
};
