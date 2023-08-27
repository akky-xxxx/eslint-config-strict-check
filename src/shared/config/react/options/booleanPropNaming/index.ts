import { Severity } from "../../../../const/Severity"

// eslint-disable-next-line unicorn/prevent-abbreviations
export const booleanPropNaming = [
  Severity.ERROR,
  { rule: "^(is|has|enable|exist)[A-Z]([A-Za-z0-9]?)+" },
]
