import { eslintRules } from "./rules/eslintRules"
import { importRules } from "./rules/importRules"
import { jestRules } from "./rules/jestRules"
import { typescriptEslintRules } from "./rules/typescriptEslintRules"

import type { EslintRules } from "../../../types/EslintRules"

export const testRules = {
  ...eslintRules,
  ...importRules,
  ...jestRules,
  ...typescriptEslintRules,
} as const satisfies EslintRules
