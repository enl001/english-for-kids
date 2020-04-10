module.exports = {
  parser: 'babel-eslint',

  env: {
    browser: true,
    es6: true,
  },

  extends: [
    'airbnb-base',
  ],
  rules: {
    'no-unused-vars': 'warn'
  },
  settings: {
    'import/resolver': 'webpack'
  }
}