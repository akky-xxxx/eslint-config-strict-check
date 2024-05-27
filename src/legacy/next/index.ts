import { reactHooksRules } from "../../shared/config/reactHooksRules"
import { react } from "../react"

import type { EslintLegacyConfig } from "../../shared/types/EslintLegacyConfig"

export const next = {
  extends: [
    // config 内で hooks の plugin 指定されているため、 hooks 関連は除外
    ...react.extends.filter((configName) => !configName.includes("hooks")),
    "next/core-web-vitals",
  ],
  plugins:
    // config 内で hooks の plugin 指定されているため、 hooks 関連は除外
    react.plugins.filter((configName) => !configName.includes("hooks")),
  rules: {
    ...react.rules,
    ...reactHooksRules,
  },
} satisfies EslintLegacyConfig
