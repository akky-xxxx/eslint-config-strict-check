import { Severity } from "../../../const/Severity"

export const eslintRules = {
  "complexity": Severity.OFF,
  "max-lines": Severity.OFF,
  "max-nested-callbacks": Severity.OFF,
  "max-statements": Severity.OFF,
  "no-console": Severity.OFF,
  "no-magic-numbers": Severity.OFF,
  "no-undefined": Severity.OFF,
  "sort-keys": Severity.OFF,
} as const
