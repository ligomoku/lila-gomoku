import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsEslintParser from "@typescript-eslint/parser";
import pluginQuery from "@tanstack/eslint-plugin-query";
import pluginRouter from "@tanstack/eslint-plugin-router";
import jsxA11y from "eslint-plugin-jsx-a11y";
import pluginImport from "eslint-plugin-import";

import namingConventionTypesGen from "./rules/naming-convention-types-gen.js";

export default [
  {
    ignores: ["dist", "**/*.gen.ts", "messages.ts"],
  },

  js.configs.recommended,

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      parser: tsEslintParser,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@tanstack/query": pluginQuery,
      "@tanstack/router": pluginRouter,
      "import": pluginImport,
      "jsx-a11y": jsxA11y,
      "@typescript-eslint": tsEslintPlugin,
      custom: {
        rules: {
          "naming-convention-types-gen": namingConventionTypesGen,
          "@tanstack/router/create-route-property-order": "error",
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: "warn",
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        { allowExpressions: true },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        { selector: "typeLike", format: ["PascalCase"] },
        { selector: "variable", format: ["camelCase", "UPPER_CASE"] },
      ],

      "react/prop-types": "off",
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-no-bind": ["error", { allowArrowFunctions: true }],
      "react/jsx-no-useless-fragment": "error",
      "react/self-closing-comp": "error",
      "react/jsx-no-constructed-context-values": "error",
      "react/no-array-index-key": "error",
      "react/jsx-key": "error",

      ...reactHooks.configs.recommended.rules,

      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "**/*.stories.*",
            "**/*.test.*",
            "**/.storybook/**",
            "**/vite.config.*",
            "**/*.config.*",
            "**/*.spec.*",
          ],
        },
      ],

      "jsx-a11y/no-autofocus": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/alt-text": "error",
      "custom/naming-convention-types-gen": "error",
    },
  },
];
