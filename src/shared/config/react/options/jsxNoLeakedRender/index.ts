import { Severity } from "../../../../const/Severity"

export const jsxNoLeakedRender = [
  Severity.ERROR,
  { validStrategies: ["ternary", "coerce"] },
]
