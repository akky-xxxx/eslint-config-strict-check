import { Severity } from "../../../const/Severity"

import type { EslintRules } from "../../../types/EslintRules"

export const typescriptEslintConfig = {
  "@typescript-eslint/no-use-before-define": Severity.OFF,
} as const satisfies EslintRules
