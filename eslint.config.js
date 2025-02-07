import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: ['dist'],  // Ignore the 'dist' folder
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,  // Use browser globals for front-end development
      parserOptions: {
        ecmaVersion: 'latest',  // Use the latest ECMAScript version
        ecmaFeatures: { jsx: true },  // Support JSX
        sourceType: 'module',  // Use ES module syntax
      },
    },
    settings: {
      react: { version: '18.3' },  // React version for compatibility
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,  // For React Refresh (Fast Refresh)
    },
    rules: {
      ...js.configs.recommended.rules,  // Use ESLint's recommended JS rules
      ...react.configs.recommended.rules,  // Use React's recommended rules
      ...react.configs['jsx-runtime'].rules,  // JSX runtime rules
      ...reactHooks.configs.recommended.rules,  // React Hooks rules
      'react/jsx-no-target-blank': 'off',  // Turn off this rule if not needed
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },  // Allow constant export for React Refresh
      ],
    },
  },
];
