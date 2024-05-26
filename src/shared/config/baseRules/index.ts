import { eslintRules } from "./eslintRules"
import { importRules } from "./importRules"
import { stylisticRules } from "./stylisticRules"
import { typescriptEslintRules } from "./typescriptEslintRules"

export const baseRules = {
  ...eslintRules,
  ...importRules,
  ...stylisticRules,
  ...typescriptEslintRules,
} as const
