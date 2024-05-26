import { Severity } from "../../../../../const/Severity"

export const booleanPropNaming = [
  Severity.ERROR,
  { rule: "^(is|has|enable|exist)[A-Z]([A-Za-z0-9]?)+" },
] as const
