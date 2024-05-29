import { reactTestRules } from "../../shared/config/reactTestRules"
import { storyRules } from "../../shared/config/storyRules"
import { testRules } from "../../shared/config/testRules"
import { FilePatterns } from "../../shared/const/FilePatterns"
import { next } from "../next"

import type { EslintLegacyConfig } from "../../shared/types/EslintLegacyConfig"

export const nextMax = {
  extends: [
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:storybook/addon-interactions",
    "plugin:storybook/csf",
    "plugin:storybook/csf-strict",
    "plugin:storybook/recommended",
    ...next.extends,
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
    ...next.plugins,
    "jest",
    "storybook",
  ],
  rules: {
    ...next.rules,
  },
} satisfies EslintLegacyConfig
