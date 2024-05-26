import { Severity } from "../../../../../const/Severity"

export const noUnnecessaryBooleanLiteralCompare = [
  Severity.WARN,
  {
    allowComparingNullableBooleansToFalse: false,
    allowComparingNullableBooleansToTrue: false,
  },
]
