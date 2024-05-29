import { FlatCompat } from "@eslint/eslintrc"
import eslint from "@eslint/js"
// eslint-disable-next-line import/no-unresolved
import typescriptEslint from "typescript-eslint"

import { baseRules } from "../../shared/config/baseRules"
import { testRules } from "../../shared/config/testRules"
import { FilePatterns } from "../../shared/const/FilePatterns"

import type { EslintFlatConfig } from "../../shared/types/EslintFlatConfig"

// TODO 問題起きるかも
const compat = new FlatCompat()

export const typescriptMaxFlatConfig = [
  ...typescriptEslint.configs.strict,
  // ...typescriptEslint.configs.stylistic,
  ...compat.extends(
    "plugin:jest/recommended",
    "plugin:jest/style",
  ),
  eslint.configs.recommended,
  // TODO flat config に対応したら書き換え
  ...compat.extends(
    "eslint-config-airbnb-base",
    "plugin:unicorn/recommended",
  ),
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
