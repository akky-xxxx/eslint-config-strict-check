import { Severity } from "../../../../../const/Severity"

import type { EslintRuleLevelAndOptions } from "../../../../../types/EslintRuleLevelAndOptions"

export const jsxSortProps = [
  Severity.ERROR,
  {
    callbacksLast: true,
    multiline: "last",
    reservedFirst: true,
    shorthandFirst: true,
  },
] as const satisfies EslintRuleLevelAndOptions
