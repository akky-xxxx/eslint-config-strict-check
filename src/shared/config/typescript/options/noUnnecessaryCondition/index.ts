import { Error } from "../../../../const"

export const noUnnecessaryCondition = [
  Error,
  {
    allowConstantLoopConditions: false,
    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
  },
]
