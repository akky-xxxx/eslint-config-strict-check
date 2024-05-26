import { eslintRules } from "./eslintRules"
import { importRules } from "./importRules"

export const storyRules = {
  ...eslintRules,
  ...importRules,
} as const
