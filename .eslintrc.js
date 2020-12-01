module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    semi: ['error', 'never'],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-mixed-operators': 'off',
  },
}
