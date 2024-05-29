import { reactTestRules } from "../../shared/config/rules/reactTestRules"
import { storyRules } from "../../shared/config/rules/storyRules"
import { testRules } from "../../shared/config/rules/testRules"
import { FilePatterns } from "../../shared/const/FilePatterns"
import { reactLegacyConfig } from "../reactLegacyConfig"

import type { EslintLegacyConfig } from "../../shared/types/EslintLegacyConfig"

export const reactMaxLegacyConfig = {
  extends: [
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:storybook/addon-interactions",
    "plugin:storybook/csf",
    "plugin:storybook/csf-strict",
    "plugin:storybook/recommended",
    ...reactLegacyConfig.extends,
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
    ...reactLegacyConfig.plugins,
    "jest",
    "storybook",
  ],
  rules: {
    ...reactLegacyConfig.rules,
  },
} satisfies EslintLegacyConfig
