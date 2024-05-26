import { eslintRules } from "./eslintRules"
import { importRules } from "./importRules"
import { jsxA11yRules } from "./jsxA11yRules"

export const storyRules = {
  ...eslintRules,
  ...importRules,
  ...jsxA11yRules,
} as const
