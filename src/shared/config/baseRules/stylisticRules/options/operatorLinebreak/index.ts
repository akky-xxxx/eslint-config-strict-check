import { Severity } from "../../../../../const/Severity"

import type { EslintRuleLevelAndOptions } from "../../../../../types/EslintRuleLevelAndOptions"

export const operatorLinebreak = [
  Severity.WARN,
  "after",
  {
    overrides: {
      ":": "ignore",
      "?": "ignore",
    },
  },
] as const satisfies EslintRuleLevelAndOptions
