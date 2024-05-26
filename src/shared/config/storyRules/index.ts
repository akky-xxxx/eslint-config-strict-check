import { eslintRules } from "./eslintRules"
import { importRules } from "./importRules"
import { jsxA11yRules } from "./jsxA11yRules"
import { typescriptEslintRules } from "./typescriptEslintRules"

import type { EslintRules } from "../../types/EslintRules"

export const storyRules = {
  ...eslintRules,
  ...importRules,
  ...jsxA11yRules,
  ...typescriptEslintRules,
} as const satisfies EslintRules
