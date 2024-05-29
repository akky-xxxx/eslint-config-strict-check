import { Severity } from "../../../../../const/Severity"

import type { EslintRules } from "../../../../../types/EslintRules"

export const importRules = {
  "import/no-default-export": Severity.OFF,
} as const satisfies EslintRules
