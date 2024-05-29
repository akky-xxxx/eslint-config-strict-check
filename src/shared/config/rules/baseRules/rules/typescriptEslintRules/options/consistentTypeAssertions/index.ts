import { Severity } from "../../../../../../../const/Severity"

import type { EslintRuleLevelAndOptions } from "../../../../../../../types/EslintRuleLevelAndOptions"

export const consistentTypeAssertions = [
  Severity.ERROR,
  { assertionStyle: "never" },
] as const satisfies EslintRuleLevelAndOptions
