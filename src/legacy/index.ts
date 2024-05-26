import { typescript } from "./typescript"

import type { EslintLegacyConfig } from "../shared/types/EslintLegacyConfig"

export const legacy = {
  typescript,
} as const satisfies Record<string, EslintLegacyConfig>
