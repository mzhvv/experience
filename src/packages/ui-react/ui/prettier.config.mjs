import { prettierConfig, prettierPluginTailwind } from '@w/prettier-config';

export default {
  ...prettierConfig,
  ...prettierPluginTailwind,
  tailwindStylesheet: '../shadcn-ui/src/styles/globals.css',
};
