import { operatorLinebreak } from "./options/operatorLinebreak"
import { Severity } from "../../../../../const/Severity"

import type { EslintRules } from "../../../../../types/EslintRules"

export const stylisticRules = {
  "@stylistic/implicit-arrow-linebreak": [Severity.OFF],
  "@stylistic/operator-linebreak": operatorLinebreak,
  "@stylistic/quotes": [Severity.ERROR, "double", { avoidEscape: true }],
  "@stylistic/semi": [Severity.ERROR, "never"],
} as const satisfies EslintRules
