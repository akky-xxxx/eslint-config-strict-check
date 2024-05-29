import eslint from "@eslint/js"
// eslint-disable-next-line import/no-unresolved
import typescriptEslint from "typescript-eslint"

import { baseRules } from "../../shared/config/rules/baseRules"
import { getCompatExtends } from "../../shared/utils/getCompatExtends"

import type { EslintFlatConfig } from "../../shared/types/EslintFlatConfig"

export const typescriptFlatConfig = [
  ...typescriptEslint.configs.strict,
  // ...typescriptEslint.configs.stylistic,
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
] as const satisfies EslintFlatConfig[]
