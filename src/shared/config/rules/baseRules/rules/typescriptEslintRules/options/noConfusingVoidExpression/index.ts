import { Severity } from "../../../../../../../const/Severity"

import type { EslintRuleLevelAndOptions } from "../../../../../../../types/EslintRuleLevelAndOptions"

export const noConfusingVoidExpression = [
  Severity.ERROR,
  { ignoreVoidOperator: true },
] as const satisfies EslintRuleLevelAndOptions
