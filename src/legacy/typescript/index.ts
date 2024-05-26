import { baseRules } from "../../shared/config/baseRules"

import type { EslintLegacyConfig } from "../../shared/types/EslintLegacyConfig"

export const typescript = {
  extends: [
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:unicorn/recommended",
    "eslint:recommended",
    "airbnb-base",
    "prettier",
  ],
  plugins: ["@stylistic", "@typescript-eslint", "unicorn"],
  rules: {
    ...baseRules,
  },
} satisfies EslintLegacyConfig
