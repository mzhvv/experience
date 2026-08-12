// projects/react/17/.stylelintrc.js

export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-property-sort-order-smacss'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'import',
          'use',
          'forward',
          'mixin',
          'include',
          'extend',
          'if',
          'else',
          'each',
          'for',
          'while',
          'return',
          'function',
          'debug',
          'warn',
          'error',
        ],
      },
    ],
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9]*$',
      {
        message: 'Используй camelCase для имен классов (CSS Modules)',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
};
