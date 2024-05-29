import { reactTestRules } from "../../shared/config/reactTestRules"
import { storyRules } from "../../shared/config/storyRules"
import { testRules } from "../../shared/config/testRules"
import { FilePatterns } from "../../shared/const/FilePatterns"
import { nextLegacyConfig } from "../nextLegacyConfig"

import type { EslintLegacyConfig } from "../../shared/types/EslintLegacyConfig"

export const nextMaxLegacyConfig = {
  extends: [
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:storybook/addon-interactions",
    "plugin:storybook/csf",
    "plugin:storybook/csf-strict",
    "plugin:storybook/recommended",
    ...nextLegacyConfig.extends,
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
    ...nextLegacyConfig.plugins,
    "jest",
    "storybook",
  ],
  rules: {
    ...nextLegacyConfig.rules,
  },
} satisfies EslintLegacyConfig
