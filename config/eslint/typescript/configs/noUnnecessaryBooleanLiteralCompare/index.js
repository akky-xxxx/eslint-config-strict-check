const { Warn } = require("../../../const")
exports.noUnnecessaryBooleanLiteralCompare = [
  Warn,
  {
    allowComparingNullableBooleansToTrue: false,
    allowComparingNullableBooleansToFalse: false,
  },
]
