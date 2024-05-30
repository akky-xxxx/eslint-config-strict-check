import { Severity } from "../../../../../const/Severity"

import type { EslintRules } from "../../../../../types/EslintRules"

export const jsxA11yRules = {
  "jsx-a11y/anchor-is-valid": Severity.OFF,
} as const satisfies EslintRules
