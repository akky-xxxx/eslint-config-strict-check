import eslint from "@eslint/js"
import eslintPluginStrictCheck from "eslint-plugin-strict-check"
// eslint-disable-next-line import/no-unresolved
import typescriptEslint from "typescript-eslint"

import { baseRules } from "../../shared/config/rules/baseRules"
import { reactRules } from "../../shared/config/rules/reactRules"
import { getCompatExtends } from "../../shared/utils/getCompatExtends"

import type { EslintFlatConfig } from "../../shared/types/EslintFlatConfig"

export const reactFlatConfig = [
  ...typescriptEslint.configs.recommendedTypeChecked,
  // ...typescriptEslint.configs.stylistic,
  eslint.configs.recommended,
  ...getCompatExtends(
    "plugin:unicorn/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "eslint-config-airbnb",
    "eslint-config-airbnb/hooks",
  ),
  eslintPluginStrictCheck.configs.react,
  {
    rules: {
      ...baseRules,
      ...reactRules,
    },
  },
] as const satisfies EslintFlatConfig[]
