import { Severity } from "../../../../../../../const/Severity"

import type { EslintRuleLevelAndOptions } from "../../../../../../../types/EslintRuleLevelAndOptions"

export const consistentTypeImports = [
  Severity.ERROR,
  { prefer: "type-imports" },
] as const satisfies EslintRuleLevelAndOptions
