import { eslintRules } from "./eslintRules"
import { jsxA11yRules } from "./jsxA11yRules"
import { reactRules as pluginReactRules } from "./reactRules"

export const reactRules = {
  ...eslintRules,
  ...jsxA11yRules,
  ...pluginReactRules,
} as const
