import { legacy } from "./legacy"
import { typescriptFlatConfig } from "./typescript"
import { typescriptMaxFlatConfig } from "./typescriptMax"

import type { ESLint } from "eslint"

const plugin = {
  meta: {
    name: "eslint-config-strict-check",
  },

  configs: {
    "legacy-react": legacy.react,
    "legacy-typescript": legacy.typescript,
    "legacy-typescriptMax": legacy.typescriptMax,
    "typescript": typescriptFlatConfig,
    "typescriptMax": typescriptMaxFlatConfig,
  },
} as const satisfies ESLint.Plugin

export default plugin
