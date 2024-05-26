import { baseRules } from "../../shared/config/baseRules"
import { testRules } from "../../shared/config/testRules"

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
      files: ["**/{spec,test}/**", "**/*.{spec,test}.*"],
      rules: {
        ...testRules,
      },
    },
  ],
  plugins: ["@stylistic", "@typescript-eslint", "jest", "unicorn"],
  rules: {
    ...baseRules,
  },
} satisfies EslintLegacyConfig
