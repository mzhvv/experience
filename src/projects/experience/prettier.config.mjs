import { prettierConfig, prettierPluginTailwind } from '@workspace/prettier-config';

const config = {
  ...prettierConfig,
  ...prettierPluginTailwind,
  tailwindStylesheet: 'src/app/current.css',
};

export default config;
