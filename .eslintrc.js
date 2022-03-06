module.exports = {
  extends: [
    'airbnb',
  ],
  env: {
    browser: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  settings: {
  },
  rules: {
    'no-unused-vars': 'warn',
    // 'consistent-return': 'off',
    'react/button-has-type': 'off',
    // camelcase: 'off',
    // 'no-multi-spaces': 'off',
    // 'react/jsx-curly-spacing': 'off',
    'react/jsx-filename-extension': 'off',
    // 'react/jsx-props-no-spreading': 'off',
    // 'import/no-cycle': 'off',
    'jsx-quotes': ['warn', 'prefer-single'],
    // radix: 'off',
    'padded-blocks': 'off',
    // 'linebreak-style': ['warn', 'unix'],

    // 'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
    // 'comma-dangle': ['error', 'always-multiline'],
    // 'object-curly-newline': ['error', { multiline: true, consistent: true }],
    // 'object-property-newline': 'error',
    // semi: ['error', 'always'],
    'react/function-component-definition': 'off',
    'import/no-unresolved': 'warn',
    'react/react-in-jsx-scope': 'off',
  },
};
