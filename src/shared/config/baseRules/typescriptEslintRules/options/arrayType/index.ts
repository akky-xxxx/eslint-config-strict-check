import { Severity } from "../../../../../const/Severity"

import type { EslintRuleLevelAndOptions } from "../../../../../types/EslintRuleLevelAndOptions"

export const arrayType =
  [Severity.ERROR, { default: "array" }] as const satisfies EslintRuleLevelAndOptions
