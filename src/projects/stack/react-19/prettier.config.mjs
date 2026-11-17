import { prettierConfig, prettierPluginTailwind } from '@w/prettier-config';

const config = {
  ...prettierConfig,
  ...prettierPluginTailwind,
  tailwindStylesheet: 'src/app/index.css',
};

export default config;
