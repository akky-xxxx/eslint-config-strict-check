import { reactRules } from "../../shared/config/reactRules"
import { typescriptLegacyConfig } from "../typescriptLegacyConfig"

import type { EslintLegacyConfig } from "../../shared/types/EslintLegacyConfig"

export const reactLegacyConfig = {
  extends: [
    ...typescriptLegacyConfig.extends,
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "plugin:strict-check/legacy-react",
    "airbnb",
    "airbnb/hooks",
  ],
  plugins: [
    ...typescriptLegacyConfig.plugins,
    "react",
    "react-hooks",
    "strict-check",
  ],
  rules: {
    ...typescriptLegacyConfig.rules,
    ...reactRules,
  },
} satisfies EslintLegacyConfig
