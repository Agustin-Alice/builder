import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

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
    },
    rules: {
      eqeqeq: 'error', // Requiere el uso de igualdad estricta (=== y !==) en lugar de == y !=
      'no-console': 'warn', // Muestra una advertencia cuando se utiliza console.log()
      'no-unused-vars': 'warn', // Muestra una advertencia cuando hay variables declaradas pero no utilizadas
      semi: ['error', 'always'], // Requiere el uso de punto y coma al final de las declaraciones
      quotes: ['error', 'single'], // Requiere el uso de comillas simples en lugar de dobles
      indent: ['error', 2], // Requiere una indentación de 2 espacios
      'no-magic-numbers': 'warn', // Muestra una advertencia cuando se utilizan números mágicos (números sin explicación)
      'no-var': 'error', // Requiere el uso de let o const en lugar de var
      'prefer-const': 'error', // Requiere el uso de const cuando una variable no es reasignada
      'no-undef': 'error', // Previene el uso de variables no definidas
      'no-trailing-spaces': 'error', // Previene espacios en blanco al final de las líneas
      'comma-dangle': ['error', 'always-multiline'], // Requiere una coma al final de las listas de elementos
    },
  },
];
