// src/projects/mzhvv-0/next-app/prettier.config.mjs

import prettierСonfig from '@experience/prettier-config';

const config = {
  ...prettierСonfig,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: 'src/app/globals.css',
  tailwindFunctions: ['cn', 'cva'],
};

export default config;
