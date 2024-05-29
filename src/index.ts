import { legacy } from "./legacy"
import { nextFlatConfig } from "./flatConfigs/next"
import { nextMaxFlatConfig } from "./flatConfigs/nextMax"
import { reactFlatConfig } from "./flatConfigs/react"
import { reactMaxFlatConfig } from "./flatConfigs/reactMax"
import { typescriptFlatConfig } from "./flatConfigs/typescript"
import { typescriptMaxFlatConfig } from "./flatConfigs/typescriptMax"

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
    "next": nextFlatConfig,
    "nextMax": nextMaxFlatConfig,
    "react": reactFlatConfig,
    "reactMax": reactMaxFlatConfig,
    "typescript": typescriptFlatConfig,
    "typescriptMax": typescriptMaxFlatConfig,
  },
} as const satisfies ESLint.Plugin

export default plugin
