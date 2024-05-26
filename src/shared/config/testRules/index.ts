import { eslintRules } from "./eslintRules"
import { importRules } from "./importRules"
import { jestRules } from "./jestRules"

export const testRules = {
  ...eslintRules,
  ...importRules,
  ...jestRules,
} as const
