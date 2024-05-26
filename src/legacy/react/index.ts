import { baseRules } from "../../shared/config/baseRules"
import { reactRules } from "../../shared/config/reactRules"

import type { EslintLegacyConfig } from "../../shared/types/EslintLegacyConfig"

export const react = {
  extends: [
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:unicorn/recommended",
    "eslint:recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "plugin:strict-check/legacy-react",
    "airbnb",
    "plugin:react-hooks/recommended",
    "airbnb/hooks",
  ],
  plugins: [
    "@stylistic",
    "@typescript-eslint",
    "react",
    "react-hooks",
    "strict-check",
    "unicorn",
  ],
  rules: {
    ...baseRules,
    ...reactRules,
  },
} satisfies EslintLegacyConfig
