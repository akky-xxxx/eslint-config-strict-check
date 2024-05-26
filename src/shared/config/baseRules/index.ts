import { eslintRules } from "./eslintRules"
import { importRules } from "./importRules"
import { stylisticRules } from "./stylisticRules"

export const baseRules = {
  ...eslintRules,
  ...importRules,
  ...stylisticRules,
} as const
