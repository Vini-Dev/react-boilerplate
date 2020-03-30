module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'eslint-plugin-import-helpers'
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-underscore-dangle': ["error", { "allow": ["_id"] }],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js']
      }
    ],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': 'off',
    'camelcase': [2, {
      properties: 'never',
      ignoreDestructuring: true
    }],
    'import-helpers/order-imports': [
      'warn',
      { // example configuration
        newlinesBetween: 'always',
        groups: [
          '/ˆreact/',
          'module',
          '/^@shared/',
          ['parent', 'sibling', 'index'],
        ],
        // alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src'
      }
    }
  }
};
