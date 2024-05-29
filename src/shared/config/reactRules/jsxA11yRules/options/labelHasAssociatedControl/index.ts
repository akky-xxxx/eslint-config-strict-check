import { Severity } from "../../../../../const/Severity"

import type { EslintRuleLevelAndOptions } from "../../../../../types/EslintRuleLevelAndOptions"

export const labelHasAssociatedControl = [
  Severity.ERROR,
  {
    controlComponents: ["StyledTextarea"],
  },
] as const satisfies EslintRuleLevelAndOptions
