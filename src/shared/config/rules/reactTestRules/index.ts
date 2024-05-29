import { jsxA11yRules } from "./rules/jsxA11yRules"

import type { EslintRules } from "../../../types/EslintRules"

export const reactTestRules = {
  ...jsxA11yRules,
} as const satisfies EslintRules
