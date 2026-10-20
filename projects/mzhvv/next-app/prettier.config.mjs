// projects/mzhvv/next-app/prettier.config.mjs

import base from '../../../prettier.config.mjs';

const config = {
  ...base,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: 'app/globals.css',
  tailwindFunctions: ['cn', 'cva'],
};

export default config;
