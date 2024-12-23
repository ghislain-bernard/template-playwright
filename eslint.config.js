// ------------------------------------------- ghislain.bernard@gmail.com ------------------------------------------- //
const globals = require('globals');
//
const stylistic = require('@stylistic/eslint-plugin-js');
//
module.exports = [
  {
    files: ['server.js'],
    languageOptions: {
      sourceType: 'script'
    }
  },
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.node }
    },
    plugins: {
      '@stylistic/js': stylistic
    },
    rules: {
      '@stylistic/js/indent': ['warn', 2],
      '@stylistic/js/no-extra-semi': 'warn',
      '@stylistic/js/no-mixed-spaces-and-tabs': 'warn',
      '@stylistic/js/no-multi-spaces': 'warn',
      '@stylistic/js/no-multiple-empty-lines': ['warn', { max: 0 }],
      '@stylistic/js/quotes': ['warn', 'single', { avoidEscape: true }],
      '@stylistic/js/semi': 'warn',
      curly: ['warn', 'multi'],
      eqeqeq: 'warn',
      'for-direction': 'warn',
      'no-const-assign': 'warn',
      'no-global-assign': 'warn',
      'no-redeclare': 'warn',
      'no-self-assign': 'warn',
      'no-undef': 'warn',
      'no-unreachable': 'warn',
      'no-unused-vars': 'warn',
      'no-var': 'warn',
      'prefer-const': 'warn',
      strict: ['warn', 'global'],
      'valid-typeof': 'warn'
    }
  }
];
// ------------------------------------------- ghislain.bernard@gmail.com ------------------------------------------- //
