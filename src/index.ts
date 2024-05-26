import { legacy } from "./legacy"
import { typescriptFlatConfig } from "./typescript"

import type { ESLint } from "eslint"

const plugin = {
  meta: {
    name: "eslint-config-strict-check",
  },

  configs: {
    "legacy-typescript": legacy.typescript,
    "typescript": typescriptFlatConfig,
  },
} as const satisfies ESLint.Plugin

export default plugin
