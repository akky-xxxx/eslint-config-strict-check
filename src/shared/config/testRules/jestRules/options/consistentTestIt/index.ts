import { Severity } from "../../../../../const/Severity"

import type { EslintRuleLevelAndOptions } from "../../../../../types/EslintRuleLevelAndOptions"

export const consistentTestIt = [
  Severity.ERROR,
  {
    fn: "it",
    withinDescribe: "it",
  },
] as const satisfies EslintRuleLevelAndOptions
