import { FlatCompat } from "@eslint/eslintrc"
import eslint from "@eslint/js"
import eslintPluginJest from "eslint-plugin-jest"
import eslintPluginUnicorn from "eslint-plugin-unicorn"
// eslint-disable-next-line import/no-unresolved
import typescriptEslint from "typescript-eslint"

import { baseRules } from "../shared/config/baseRules"
import { testRules } from "../shared/config/testRules"
import { FilePatterns } from "../shared/const/FilePatterns"

import type { EslintFlatConfig } from "../shared/types/EslintFlatConfig"

// TODO 問題起きるかも
const compat = new FlatCompat()

export const typescriptMaxFlatConfig = [
  ...typescriptEslint.configs.strict,
  ...typescriptEslint.configs.stylistic,
  eslintPluginJest.configs.recommended,
  eslintPluginJest.configs.style,
  eslint.configs.recommended,
  ...compat.extends("eslint-config-airbnb-base"), // TODO flat config に対応したら書き換え
  {
    plugins: {
      jest: eslintPluginJest,
      unicorn: eslintPluginUnicorn,
    },
    rules: eslintPluginUnicorn.configs.recommended.rules,
  },
  {
    rules: {
      ...baseRules,
    },
  },
  {
    files: FilePatterns.TEST,
    rules: {
      ...testRules,
    },
  },
] as const satisfies EslintFlatConfig[]
