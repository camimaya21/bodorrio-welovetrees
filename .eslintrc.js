module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    'jest/globals': true
  },
  extends: [
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:jest/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      classes: true
    }
  },
  rules: {
    'no-debugger': 0,
    'no-unused-vars': [
      1,
      {
        argsIgnorePattern: 'res|next|^err'
      }
    ],
    'arrow-body-style': [2, 'as-needed'],
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true
      }
    ],
    'no-param-reassign': [
      2,
      {
        props: false
      }
    ],
    'no-console': 0,
    'import/prefer-default-export': 0,
    import: 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        singleQuote: true,
        printWidth: 120,
        semi: false,
        tabWidth: 2
      }
    ]
  },
  plugins: ['prettier', 'jest']
}