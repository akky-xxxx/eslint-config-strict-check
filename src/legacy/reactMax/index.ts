import { baseRules } from "../../shared/config/baseRules"
import { reactRules } from "../../shared/config/reactRules"
import { reactTestRules } from "../../shared/config/reactTestRules"
import { storyRules } from "../../shared/config/storyRules"
import { testRules } from "../../shared/config/testRules"
import { FilePatterns } from "../../shared/const/FilePatterns"

import type { EslintLegacyConfig } from "../../shared/types/EslintLegacyConfig"

export const reactMax = {
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
