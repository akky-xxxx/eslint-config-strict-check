import { Severity } from "../../../../../const/Severity"

import type { EslintRuleLevelAndOptions } from "../../../../../types/EslintRuleLevelAndOptions"

export const booleanPropNaming = [
  Severity.ERROR,
  { rule: "^(is|has|enable|exist)[A-Z]([A-Za-z0-9]?)+" },
] as const satisfies EslintRuleLevelAndOptions
