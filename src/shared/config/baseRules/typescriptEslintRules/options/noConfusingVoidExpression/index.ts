import { Severity } from "../../../../../const/Severity"

export const noConfusingVoidExpression = [
  Severity.ERROR,
  { ignoreVoidOperator: true },
] as const
