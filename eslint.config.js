import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tsEslint from 'typescript-eslint'
import eslintConfigPrettier from "eslint-config-prettier/flat";
import prettierPlugin from 'eslint-plugin-prettier';
import eslintPluginImport from "eslint-plugin-import";
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default tsEslint.config(
  { ignores: [
      'dist',
      '**/*.css',
      '**/*.scss',
      '**/*.json',
      '**/*.d.ts',
] },
  {
    extends: [
      js.configs.recommended,
      ...tsEslint.configs.recommended,
      eslintConfigPrettier
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      import: eslintPluginImport,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
      'jsx-a11y': jsxA11y,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "no-shadow": "off",
      "no-alert": "error",
      "no-debugger": "error",
      "no-plusplus": "error",
      "no-unused-vars": "off",
      "no-magic-numbers": "off",
      "default-param-last": "off",
      "no-use-before-define": "off",
      "no-param-reassign": [
        "error",
        {
          "props": false
        }
      ],
      "react/jsx-props-no-spreading": "off",
      "no-multiple-empty-lines": [
        "error",
        {
          "max": 1
        }
      ],
      "@typescript-eslint/no-shadow": [
        "error"
      ],
      "@typescript-eslint/no-unused-vars": [
        "error"
      ],
      "@typescript-eslint/no-magic-numbers": "off",
      "@typescript-eslint/no-use-before-define": [
        "error"
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "prettier/prettier": "error",
      "react/prop-types": 0,
      "react/display-name": "off",
      "react/react-in-jsx-scope": "off",
      "react/destructuring-assignment": "error",
      "react/jsx-filename-extension": [
        1,
        {
          "extensions": [
            ".jsx",
            ".tsx"
          ]
        }
      ],
      "react/default-props-match-prop-types": [
        "error", { "allowRequiredDefaults": false }
      ],
      "react/function-component-definition": [
        2,
        {
          "namedComponents": "arrow-function",
          "unnamedComponents": "arrow-function"
        }
      ],
      "import/extensions": "off",
      "import/prefer-default-export": "off",
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          "pathGroupsExcludedImportTypes": [
            "react"
          ],
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          },
          "groups": [
            "builtin",
            "external",
            "parent",
            "sibling",
            "index"
          ],
          "pathGroups": [
            {
              "pattern": "react",
              "group": "external",
              "position": "before"
            }
          ]
        }
      ],
      "import/no-extraneous-dependencies": [
        "error",
        {
          "devDependencies": true,
          "optionalDependencies": true,
          "peerDependencies": true
        }
      ]
    },
  },
)
