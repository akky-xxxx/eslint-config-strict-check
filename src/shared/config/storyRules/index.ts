import { eslintRules } from "./eslintRules"
import { importRules } from "./importRules"
import { jsxA11yRules } from "./jsxA11yRules"
import { typescriptEslintRules } from "./typescriptEslintRules"

export const storyRules = {
  ...eslintRules,
  ...importRules,
  ...jsxA11yRules,
  ...typescriptEslintRules,
} as const
