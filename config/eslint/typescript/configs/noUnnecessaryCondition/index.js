const { Error } = require("../../../const")
exports.noUnnecessaryCondition = [
  Error,
  {
    allowConstantLoopConditions: false,
    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
  },
]
