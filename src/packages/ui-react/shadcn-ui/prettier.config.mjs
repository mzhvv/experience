import { prettierConfig, prettierPluginTailwind } from '@w/prettier-config';

export default {
  ...prettierConfig,
  ...prettierPluginTailwind,
  tailwindStylesheet: 'src/styles/globals.css',
};
