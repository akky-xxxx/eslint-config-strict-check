import eslint from "@eslint/js"
// eslint-disable-next-line import/no-unresolved
import typescriptEslint from "typescript-eslint"

import { getCompatExtends } from "../../utils/getCompatExtends"

import type { EslintFlatConfig } from "../../types/EslintFlatConfig"

export const FlatConfigForCommon: EslintFlatConfig[] = [
  ...typescriptEslint.configs.recommendedTypeChecked,
  // ...typescriptEslint.configs.stylistic,
  eslint.configs.recommended,
  ...getCompatExtends("plugin:unicorn/recommended"),
] as const
