import { eslintRules } from "./rules/eslintRules"
import { importRules } from "./rules/importRules"
// import { stylisticRules } from "./rules/stylisticRules"
import { typescriptEslintRules } from "./rules/typescriptEslintRules"
import { unicornRules } from "./rules/unicornRules"

import type { EslintRules } from "../../../types/EslintRules"

export const baseRules = {
  ...eslintRules,
  ...importRules,
  // ...stylisticRules,
  ...typescriptEslintRules,
  ...unicornRules,
} as const satisfies EslintRules
