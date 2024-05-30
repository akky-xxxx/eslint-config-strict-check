import { Severity } from "../../../../../../../const/Severity"

import type { EslintRuleLevelAndOptions } from "../../../../../../../types/EslintRuleLevelAndOptions"

export const noUnnecessaryCondition = [
  Severity.ERROR,
  {
    allowConstantLoopConditions: false,
    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
  },
] as const satisfies EslintRuleLevelAndOptions
