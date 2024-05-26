import { typescript } from "./typescript"
import { typescriptMax } from "./typescriptMax"

import type { EslintLegacyConfig } from "../shared/types/EslintLegacyConfig"

export const legacy = {
  typescript,
  typescriptMax,
} as const satisfies Record<string, EslintLegacyConfig>
