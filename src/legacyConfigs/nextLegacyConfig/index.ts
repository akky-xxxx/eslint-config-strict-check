import { reactHooksRules } from "../../shared/config/rules/reactHooksRules"
import { reactLegacyConfig } from "../reactLegacyConfig"

import type { EslintLegacyConfig } from "../../shared/types/EslintLegacyConfig"

export const nextLegacyConfig = {
  extends: [
    // config 内で hooks の plugin 指定されているため、 hooks 関連は除外
    ...reactLegacyConfig.extends.filter((configName) => !configName.includes("hooks")),
    "next/core-web-vitals",
  ],
  plugins:
    // config 内で hooks の plugin 指定されているため、 hooks 関連は除外
    reactLegacyConfig.plugins.filter((configName) => !configName.includes("hooks")),
  rules: {
    ...reactLegacyConfig.rules,
    ...reactHooksRules,
  },
} satisfies EslintLegacyConfig
