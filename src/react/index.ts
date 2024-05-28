import { FlatCompat } from "@eslint/eslintrc"
import eslint from "@eslint/js"
import eslintPluginStrictCheck from "eslint-plugin-strict-check"
import eslintPluginUnicorn from "eslint-plugin-unicorn"
// eslint-disable-next-line import/no-unresolved
import typescriptEslint from "typescript-eslint"

import { baseRules } from "../shared/config/baseRules"
import { reactRules } from "../shared/config/reactRules"

import type { EslintFlatConfig } from "../shared/types/EslintFlatConfig"

// TODO 問題起きるかも
const compat = new FlatCompat()

export const reactFlatConfig = [
  ...typescriptEslint.configs.strict,
  ...typescriptEslint.configs.stylistic,
  eslint.configs.recommended,
  {
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: eslintPluginUnicorn.configs.recommended.rules,
  },
  // TODO flat config に対応したら書き換え
  ...compat.extends(
    "plugin:unicorn/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "eslint-config-airbnb",
    "eslint-config-airbnb/hooks",
  ),
  ...eslintPluginStrictCheck.configs.react,
  {
    rules: {
      ...baseRules,
      ...reactRules,
    },
  },
] as const satisfies EslintFlatConfig[]
