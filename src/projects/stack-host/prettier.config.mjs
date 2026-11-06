import { prettierConfig, prettierPluginTailwind } from '@workspace/prettier-config';

const config = {
  ...prettierConfig,
  ...prettierPluginTailwind,
  tailwindStylesheet: 'src/app/globals.css',
};

export default config;
