module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 0,
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-extra-parens': 'error',
    'no-extra-semi': 'error',
    'no-unreachable': 'error',
    'no-fallthrough': 'error',
    'no-lone-blocks': 'error',
    'no-use-before-define': 'error',
    'block-spacing': 'error',
    'no-const-assign': 'error',
    'no-var': 'error',
    'arrow-spacing': 'error',
    'no-negated-condition': 'error',
    'object-curly-newline': ['error', { 'multiline': true }],
    // 'indent': ['error', 4],
  }
}
