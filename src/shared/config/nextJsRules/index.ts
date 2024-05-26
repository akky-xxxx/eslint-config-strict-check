import { importRules } from "./importRules"

import type { EslintRules } from "../../types/EslintRules"

export const nextJsRules = {
  ...importRules,
} as const satisfies EslintRules
