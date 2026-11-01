import { prettierConfig, prettierPluginTailwind } from '@workspace/prettier-config';

export default {
  ...prettierConfig,
  ...prettierPluginTailwind,
  tailwindStylesheet: 'src/styles/globals.css',
};
