import { prettierConfig, prettierPluginTailwind } from '@w/prettier-config';

const config = {
  ...prettierConfig,
  ...prettierPluginTailwind,
  tailwindStylesheet: 'src/app/current.css',
};

export default config;
