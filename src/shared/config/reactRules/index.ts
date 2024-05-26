import { eslintRules } from "./eslintRules"
import { jsxA11yRules } from "./jsxA11yRules"
import { reactRules as pluginReactRules } from "./reactRules"
import { typescriptEslintConfig } from "./typescriptEslint"

export const reactRules = {
  ...eslintRules,
  ...jsxA11yRules,
  ...pluginReactRules,
  ...typescriptEslintConfig,
} as const
