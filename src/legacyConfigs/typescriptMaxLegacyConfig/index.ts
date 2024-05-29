import { testRules } from "../../shared/config/rules/testRules"
import { FilePatterns } from "../../shared/const/FilePatterns"
import { typescriptLegacyConfig } from "../typescriptLegacyConfig"

import type { EslintLegacyConfig } from "../../shared/types/EslintLegacyConfig"

export const typescriptMaxLegacyConfig = {
  extends: [
    "plugin:jest/recommended",
    "plugin:jest/style",
    ...typescriptLegacyConfig.extends,

  ],
  overrides: [
    {
      files: FilePatterns.TEST,
      rules: {
        ...testRules,
      },
    },
  ],
  plugins: [...typescriptLegacyConfig.plugins, "jest"],
  rules: {
    ...typescriptLegacyConfig.rules,
  },
  settings: {
    ...typescriptLegacyConfig.settings,
  },
} satisfies EslintLegacyConfig
