import { baseRules } from "../../shared/config/baseRules"
import { reactHooksRules } from "../../shared/config/reactHooksRules"
import { reactRules } from "../../shared/config/reactRules"

import type { EslintLegacyConfig } from "../../shared/types/EslintLegacyConfig"

export const next = {
  extends: [
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:unicorn/recommended",
    "eslint:recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "plugin:strict-check/legacy-react",
    "airbnb",
    "next/core-web-vitals",
  ],
  plugins: [
    "@stylistic",
    "@typescript-eslint",
    "react",
    "strict-check",
    "unicorn",
  ],
  rules: {
    ...baseRules,
    ...reactRules,
    ...reactHooksRules,
  },
} satisfies EslintLegacyConfig
