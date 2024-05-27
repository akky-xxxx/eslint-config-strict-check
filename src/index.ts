import { legacy } from "./legacy"
import { typescriptFlatConfig } from "./typescript"
import { typescriptMaxFlatConfig } from "./typescriptMax"

import type { ESLint } from "eslint"

const plugin = {
  meta: {
    name: "eslint-config-strict-check",
  },

  configs: {
    "legacy-next": legacy.next,
    "legacy-next-max": legacy.nextMax,
    "legacy-react": legacy.react,
    "legacy-react-max": legacy.reactMax,
    "legacy-typescript": legacy.typescript,
    "legacy-typescript-max": legacy.typescriptMax,
    "typescript": typescriptFlatConfig,
    "typescriptMax": typescriptMaxFlatConfig,
  },
} as const satisfies ESLint.Plugin

export default plugin
