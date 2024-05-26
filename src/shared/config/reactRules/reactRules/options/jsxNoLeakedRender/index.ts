import { Severity } from "../../../../../const/Severity"

import type { EslintRuleLevelAndOptions } from "../../../../../types/EslintRuleLevelAndOptions"

export const jsxNoLeakedRender = [
  Severity.ERROR,
  { validStrategies: ["ternary", "coerce"] },
] as const satisfies EslintRuleLevelAndOptions
