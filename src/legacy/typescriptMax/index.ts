import { testRules } from "../../shared/config/testRules"
import { FilePatterns } from "../../shared/const/FilePatterns"
import { typescript } from "../typescript"

import type { EslintLegacyConfig } from "../../shared/types/EslintLegacyConfig"

export const typescriptMax = {
  extends: [
    "plugin:jest/recommended",
    "plugin:jest/style",
    ...typescript.extends,

  ],
  overrides: [
    {
      files: FilePatterns.TEST,
      rules: {
        ...testRules,
      },
    },
  ],
  plugins: [...typescript.plugins, "jest"],
  rules: {
    ...typescript.rules,
  },
  settings: {
    ...typescript.settings,
  },
} satisfies EslintLegacyConfig
