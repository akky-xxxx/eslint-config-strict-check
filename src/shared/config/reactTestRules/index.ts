import { jsxA11yRules } from "./jsxA11yRules"

import type { EslintRules } from "../../types/EslintRules"

export const reactTestRules = {
  ...jsxA11yRules,
} as const satisfies EslintRules
