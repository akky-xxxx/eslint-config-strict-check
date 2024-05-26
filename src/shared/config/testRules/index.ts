import { eslintRules } from "./eslintRules"
import { importRules } from "./importRules"
import { jestRules } from "./jestRules"
import { typescriptEslintRules } from "./typescriptEslintRules"

import type { EslintRules } from "../../types/EslintRules"

export const testRules = {
  ...eslintRules,
  ...importRules,
  ...jestRules,
  ...typescriptEslintRules,
} as const satisfies EslintRules
