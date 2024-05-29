import { eslintRules } from "./rules/eslintRules"
import { jsxA11yRules } from "./rules/jsxA11yRules"
import { reactRules as pluginReactRules } from "./rules/reactRules"
import { typescriptEslintConfig } from "./rules/typescriptEslint"

import type { EslintRules } from "../../../types/EslintRules"

export const reactRules = {
  ...eslintRules,
  ...jsxA11yRules,
  ...pluginReactRules,
  ...typescriptEslintConfig,
} as const satisfies EslintRules
