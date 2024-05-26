import { Severity } from "../../../const/Severity"

import type { EslintRules } from "../../../types/EslintRules"

export const typescriptEslintConfig = {
  rules: {
    "@typescript-eslint/no-use-before-define": Severity.OFF,
  },
} as const satisfies EslintRules
