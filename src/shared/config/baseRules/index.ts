import { eslintRules } from "./eslintRules"
import { importRules } from "./importRules"

export const baseRules = {
  ...eslintRules,
  ...importRules,
} as const
