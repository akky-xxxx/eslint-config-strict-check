import { operatorLinebreak } from "./options/operatorLinebreak"
import { Severity } from "../../const/Severity"

export = {
  rules: {
    "@stylistic/implicit-arrow-linebreak": [Severity.OFF],
    "@stylistic/operator-linebreak": operatorLinebreak,
    "@stylistic/quotes": [Severity.ERROR, "double", { avoidEscape: true }],
    "@stylistic/semi": [Severity.ERROR, "never"],
  },
}
