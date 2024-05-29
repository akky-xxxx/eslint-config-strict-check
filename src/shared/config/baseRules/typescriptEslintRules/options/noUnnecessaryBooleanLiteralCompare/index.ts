import { Severity } from "../../../../../const/Severity"

import type { EslintRuleLevelAndOptions } from "../../../../../types/EslintRuleLevelAndOptions"

export const noUnnecessaryBooleanLiteralCompare = [
  Severity.WARN,
  {
    allowComparingNullableBooleansToFalse: false,
    allowComparingNullableBooleansToTrue: false,
  },
] as const satisfies EslintRuleLevelAndOptions
