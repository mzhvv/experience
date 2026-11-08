import { prettierConfig, prettierPluginTailwind } from '@workspace/prettier-config';

export default {
  ...prettierConfig,
  ...prettierPluginTailwind,
  tailwindStylesheet: '../shadcn-ui/src/styles/globals.css',
};
