import { react } from "./react"
import { reactMax } from "./reactMax"
import { typescript } from "./typescript"
import { typescriptMax } from "./typescriptMax"

import type { EslintLegacyConfig } from "../shared/types/EslintLegacyConfig"

export const legacy = {
  react,
  reactMax,
  typescript,
  typescriptMax,
} as const satisfies Record<string, EslintLegacyConfig>
