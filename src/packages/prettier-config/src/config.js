// src/packages/prettier-config/src/config.js

export default {
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  printWidth: 100,

  overrides: [
    {
      files: '*.json',
      options: {
        parser: 'jsonc',
        trailingComma: 'none',
      },
    },
  ],
};
