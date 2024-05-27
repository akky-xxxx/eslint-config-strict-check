import { baseRules } from "../../shared/config/baseRules"
import { reactHooksRules } from "../../shared/config/reactHooksRules"
import { reactRules } from "../../shared/config/reactRules"
import { reactTestRules } from "../../shared/config/reactTestRules"
import { storyRules } from "../../shared/config/storyRules"
import { testRules } from "../../shared/config/testRules"
import { FilePatterns } from "../../shared/const/FilePatterns"

import type { EslintLegacyConfig } from "../../shared/types/EslintLegacyConfig"

export const nextMax = {
  extends: [
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:storybook/addon-interactions",
    "plugin:storybook/csf",
    "plugin:storybook/csf-strict",
    "plugin:storybook/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:unicorn/recommended",
    "eslint:recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "plugin:strict-check/legacy-react",
    "airbnb",
    "next/core-web-vitals",
  ],
  overrides: [
    {
      files: FilePatterns.TEST,
      rules: {
        ...testRules,
        ...reactTestRules,
      },
    },
    {
      files: FilePatterns.STORY,
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
    "storybook",
    "strict-check",
    "unicorn",
  ],
  rules: {
    ...baseRules,
    ...reactRules,
    ...reactHooksRules,
  },
} satisfies EslintLegacyConfig
