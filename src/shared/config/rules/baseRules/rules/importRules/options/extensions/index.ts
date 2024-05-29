import { Severity } from "../../../../../../../const/Severity"

import type { EslintRuleLevelAndOptions } from "../../../../../../../types/EslintRuleLevelAndOptions"

export const extensions = [
  Severity.ERROR,
  {
    js: "never",
    ts: "never",
  },
] as const satisfies EslintRuleLevelAndOptions
