import { eslintRules } from "./eslintRules"
import { importRules } from "./importRules"
// import { stylisticRules } from "./stylisticRules"
import { typescriptEslintRules } from "./typescriptEslintRules"
import { unicornRules } from "./unicornRules"

import type { EslintRules } from "../../types/EslintRules"

export const baseRules = {
  ...eslintRules,
  ...importRules,
  // ...stylisticRules,
  ...typescriptEslintRules,
  ...unicornRules,
} as const satisfies EslintRules
