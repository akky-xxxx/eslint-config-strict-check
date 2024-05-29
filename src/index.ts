import { nextFlatConfig } from "./flatConfigs/nextFlatConfig"
import { nextMaxFlatConfig } from "./flatConfigs/nextMaxFlatConfig"
import { reactFlatConfig } from "./flatConfigs/reactFlatConfig"
import { reactMaxFlatConfig } from "./flatConfigs/reactMaxFlatConfig"
import { typescriptFlatConfig } from "./flatConfigs/typescriptFlatConfig"
import { typescriptMaxFlatConfig } from "./flatConfigs/typescriptMaxFlatConfig"
import { nextLegacyConfig } from "./legacyConfigs/nextLegacyConfig"
import { nextMaxLegacyConfig } from "./legacyConfigs/nextMaxLegacyConfig"
import { reactLegacyConfig } from "./legacyConfigs/reactLegacyConfig"
import { reactMaxLegacyConfig } from "./legacyConfigs/reactMaxLegacyConfig"
import { typescriptLegacyConfig } from "./legacyConfigs/typescriptLegacyConfig"
import { typescriptMaxLegacyConfig } from "./legacyConfigs/typescriptMaxLegacyConfig"

import type { ESLint } from "eslint"

const plugin = {
  meta: {
    name: "eslint-config-strict-check",
  },

  configs: {
    "legacy-next": nextLegacyConfig,
    "legacy-next-max": nextMaxLegacyConfig,
    "legacy-react": reactLegacyConfig,
    "legacy-react-max": reactMaxLegacyConfig,
    "legacy-typescript": typescriptLegacyConfig,
    "legacy-typescript-max": typescriptMaxLegacyConfig,
    "next": nextFlatConfig,
    "nextMax": nextMaxFlatConfig,
    "react": reactFlatConfig,
    "reactMax": reactMaxFlatConfig,
    "typescript": typescriptFlatConfig,
    "typescriptMax": typescriptMaxFlatConfig,
  },
} as const satisfies ESLint.Plugin

export = plugin
