import { Severity } from "../../../../../const/Severity"

export const noUnnecessaryCondition = [
  Severity.ERROR,
  {
    allowConstantLoopConditions: false,
    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
  },
] as const
