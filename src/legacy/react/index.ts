import { reactRules } from "../../shared/config/reactRules"
import { typescript } from "../typescript"

import type { EslintLegacyConfig } from "../../shared/types/EslintLegacyConfig"

export const react = {
  extends: [
    ...typescript.extends,
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "plugin:strict-check/legacy-react",
    "airbnb",
    "airbnb/hooks",
  ],
  plugins: [
    ...typescript.plugins,
    "react",
    "react-hooks",
    "strict-check",
  ],
  rules: {
    ...typescript.rules,
    ...reactRules,
  },
} satisfies EslintLegacyConfig
