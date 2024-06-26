import { baseRules } from "../../shared/config/rules/baseRules"
import { settings } from "../../shared/config/settings"

import type { EslintLegacyConfig } from "../../shared/types/EslintLegacyConfig"

export const typescriptLegacyConfig = {
  extends: [
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:unicorn/recommended",
    "eslint:recommended",
    "airbnb-base",
    "prettier", // TODO: 消す
  ],
  plugins: ["@stylistic", "@typescript-eslint", "unicorn"],
  rules: {
    ...baseRules,
  },
  settings: {
    ...settings,
  },
} satisfies EslintLegacyConfig
