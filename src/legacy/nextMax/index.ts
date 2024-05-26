import { baseRules } from "../../shared/config/baseRules"
import { reactRules } from "../../shared/config/reactRules"
import { reactTestRules } from "../../shared/config/reactTestRules"
import { storyRules } from "../../shared/config/storyRules"
import { testRules } from "../../shared/config/testRules"

import type { EslintLegacyConfig } from "../../shared/types/EslintLegacyConfig"

export const nextMax = {
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
    "next/core-web-vitals",
  ],
  overrides: [
    {
      files: ["**/{spec,test}/**", "**/*.{spec,test}.*"],
      rules: {
        ...testRules,
        ...reactTestRules,
      },
    },
    {
      files: ["**/{stories,story}/**", "**/*.{stories,story}.*"],
      rules: {
        ...storyRules,
      },
    },
  ],
  plugins: [
    "@stylistic",
    "@typescript-eslint",
    "jest",
    "react",
    "react-hooks",
    "storybook",
    "strict-check",
    "unicorn",
  ],
  rules: {
    ...baseRules,
    ...reactRules,
  },
} satisfies EslintLegacyConfig
