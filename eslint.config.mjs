import { FlatCompat } from "@eslint/eslintrc"
import eslint from "@eslint/js"
import stylistic from "@stylistic/eslint-plugin"
import eslintPluginJest from "eslint-plugin-jest"
import eslintPluginUnicorn from "eslint-plugin-unicorn"
import path from "node:path"
import { fileURLToPath } from "node:url"
import typescriptEslint from "typescript-eslint"

import { baseRules } from "./config/eslint/baseRules/index.mjs"
import { configRules } from "./config/eslint/configRules/index.mjs"
import { scriptRules } from "./config/eslint/scriptRules/index.mjs"
import { settings } from "./config/eslint/settings/index.mjs"
import { testRules } from "./config/eslint/testRules/index.mjs"

const compat = new FlatCompat({
  baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
})

export default typescriptEslint.config(
  eslint.configs.recommended,
  {
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: eslintPluginUnicorn.configs.recommended.rules,
  },
  ...typescriptEslint.configs.strict,
  ...typescriptEslint.configs.stylistic,
  eslintPluginJest.configs["flat/recommended"],
  eslintPluginJest.configs["flat/style"],
  ...compat.extends("eslint-config-airbnb-base"),
  stylistic.configs["recommended-flat"],
  {
    ignores: [
      "**/coverage/**",
      "**/dry-run/**",
      "**/out/**",
      "*eslintrc*",
      ".yarn",
      "eslint.config.src.mjs",
    ],
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: 2,
    },
  },
  {
    files: ["src/**/*.ts"],
    rules: {
      ...baseRules,
    },
    settings: {
      ...settings.importSettings,
    },
  },
  {
    files: ["spec/**/*.ts"],
    rules: {
      ...baseRules,
      ...testRules,
    },
    settings: {
      ...settings.importSettings,
    },
  },
  {
    files: ["scripts/**/*.js"],
    rules: {
      ...baseRules,
      ...scriptRules,
    },
  },
  {
    files: ["*.{js,mjs}", "config/**/*.{js,mjs}"],
    rules: {
      ...baseRules,
      ...configRules,
    },
  },
)
