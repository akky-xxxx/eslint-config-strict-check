import { FlatCompat } from "@eslint/eslintrc"
import eslint from "@eslint/js"
import eslintPluginUnicorn from "eslint-plugin-unicorn"
// eslint-disable-next-line import/no-unresolved
import typescriptEslint from "typescript-eslint"

import { baseRules } from "../shared/config/baseRules"

import type { EslintFlatConfig } from "../shared/types/EslintFlatConfig"

// TODO 問題起きるかも
const compat = new FlatCompat()

export const typescriptFlatConfig = [
  ...typescriptEslint.configs.strict,
  ...typescriptEslint.configs.stylistic,
  eslint.configs.recommended,
  ...compat.extends("eslint-config-airbnb-base"), // TODO flat config に対応したら書き換え
  {
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: eslintPluginUnicorn.configs.recommended.rules,
  },
  {
    rules: {
      ...baseRules,
    },
  },
] as const satisfies EslintFlatConfig[]
