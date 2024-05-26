import { Severity } from "../../../../../const/Severity"

import type { EslintRuleLevelAndOptions } from "../../../../../types/EslintRuleLevelAndOptions"

export const functionComponentDefinition = [
  Severity.ERROR,
  { namedComponents: "arrow-function" },
] as const satisfies EslintRuleLevelAndOptions
