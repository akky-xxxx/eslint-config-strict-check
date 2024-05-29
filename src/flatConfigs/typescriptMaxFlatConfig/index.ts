import eslint from "@eslint/js"
// eslint-disable-next-line import/no-unresolved
import typescriptEslint from "typescript-eslint"

import { baseRules } from "../../shared/config/rules/baseRules"
import { testRules } from "../../shared/config/rules/testRules"
import { FilePatterns } from "../../shared/const/FilePatterns"
import { getCompatExtends } from "../../shared/utils/getCompatExtends"

import type { EslintFlatConfig } from "../../shared/types/EslintFlatConfig"

export const typescriptMaxFlatConfig = [
  ...typescriptEslint.configs.strict,
  // ...typescriptEslint.configs.stylistic,
  ...getCompatExtends(
    "plugin:jest/recommended",
    "plugin:jest/style",
  ),
  eslint.configs.recommended,
  ...getCompatExtends(
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
