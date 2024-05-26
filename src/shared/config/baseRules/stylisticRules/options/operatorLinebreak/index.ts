import { Severity } from "../../../../../const/Severity"

export const operatorLinebreak = [
  Severity.WARN,
  "after",
  {
    overrides: {
      ":": "ignore",
      "?": "ignore",
    },
  },
]
