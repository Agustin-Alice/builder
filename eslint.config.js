import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      prettier, // Agregar Prettier como plugin
    },
    rules: {
      eqeqeq: 'error',
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'no-magic-numbers': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-undef': 'error',
      'no-trailing-spaces': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      'prettier/prettier': 'error',
    },
  },

  {
    files: ['**/*.{js,jsx}'],
    rules: {
      ...prettierConfig.rules,
    },
  },
]
