import { Severity } from "../../../const/Severity"

import type { EslintRules } from "../../../types/EslintRules"

export const importRules = {
  rules: {
    "import/no-extraneous-dependencies": Severity.OFF,
  },
} as const satisfies EslintRules
