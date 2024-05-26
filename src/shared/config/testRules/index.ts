import { eslintRules } from "./eslintRules"
import { importRules } from "./importRules"
import { jestRules } from "./jestRules"
import { typescriptEslintRules } from "./typescriptEslintRules"

export const testRules = {
  ...eslintRules,
  ...importRules,
  ...jestRules,
  ...typescriptEslintRules,
} as const
