import { eslintRules } from "./rules/eslintRules"
import { importRules } from "./rules/importRules"
import { jsxA11yRules } from "./rules/jsxA11yRules"
import { typescriptEslintRules } from "./rules/typescriptEslintRules"

import type { EslintRules } from "../../../types/EslintRules"

export const storyRules = {
  ...eslintRules,
  ...importRules,
  ...jsxA11yRules,
  ...typescriptEslintRules,
} as const satisfies EslintRules
