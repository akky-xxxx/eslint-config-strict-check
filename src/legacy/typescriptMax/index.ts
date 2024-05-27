import { baseRules } from "../../shared/config/baseRules"
import { settings } from "../../shared/config/settings"
import { testRules } from "../../shared/config/testRules"
import { FilePatterns } from "../../shared/const/FilePatterns"

import type { EslintLegacyConfig } from "../../shared/types/EslintLegacyConfig"

export const typescriptMax = {
  extends: [
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:unicorn/recommended",
    "eslint:recommended",
    "airbnb-base",
    "prettier",
  ],
  overrides: [
    {
      files: FilePatterns.TEST,
      rules: {
        ...testRules,
      },
    },
  ],
  plugins: ["@stylistic", "@typescript-eslint", "jest", "unicorn"],
  rules: {
    ...baseRules,
  },
  settings: {
    ...settings,
  },
} satisfies EslintLegacyConfig
