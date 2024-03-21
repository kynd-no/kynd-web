module.exports = {
  root: true,
  extends: [
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/stylistic',
    'plugin:astro/jsx-a11y-strict',
    'plugin:astro/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  ],
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'astro/no-set-html-directive': 'error',
    'astro/no-set-text-directive': 'error',
    'astro/prefer-class-list-directive': 'error',
    'astro/prefer-object-class-list': 'error',
    'astro/prefer-split-class-list': 'error',
    'astro/jsx-a11y/no-redundant-roles': [
      'error',
      {
        ol: ['list'],
        ul: ['list'],
      },
    ],
  },
};
