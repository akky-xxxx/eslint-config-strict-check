import { eslintRules } from "./eslintRules"
import { importRules } from "./importRules"

export const testRules = {
  ...eslintRules,
  ...importRules,
} as const
