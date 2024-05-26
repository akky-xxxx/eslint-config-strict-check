import { Severity } from "../../../../../const/Severity"

export const consistentTestIt = [
  Severity.ERROR,
  {
    fn: "it",
    withinDescribe: "it",
  },
] as const
