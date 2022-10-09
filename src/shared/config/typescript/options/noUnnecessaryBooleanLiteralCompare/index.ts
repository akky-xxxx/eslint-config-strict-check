import { Warn } from "../../../../const"

export const noUnnecessaryBooleanLiteralCompare = [
  Warn,
  {
    allowComparingNullableBooleansToFalse: false,
    allowComparingNullableBooleansToTrue: false,
  },
]
