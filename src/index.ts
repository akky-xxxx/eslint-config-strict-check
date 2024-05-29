import { legacy } from "./legacy"
// TODO: config-next を適用させる
//  読み込ませると下記のエラーが出る
//  Failed to patch ESLint because the calling module was not recognized.
// import { nextFlatConfig } from "./next"
// import { nextMaxFlatConfig } from "./nextMax"
import { reactFlatConfig } from "./react"
import { reactMaxFlatConfig } from "./reactMax"
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
    // "next": nextFlatConfig,
    // "nextMax": nextMaxFlatConfig,
    "react": reactFlatConfig,
    "reactMax": reactMaxFlatConfig,
    "typescript": typescriptFlatConfig,
    "typescriptMax": typescriptMaxFlatConfig,
  },
} as const satisfies ESLint.Plugin

export default plugin
