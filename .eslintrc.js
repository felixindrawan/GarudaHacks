module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': ['error'],
  },
};
