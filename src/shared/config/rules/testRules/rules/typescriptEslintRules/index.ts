import { Severity } from "../../../../../const/Severity"

import type { EslintRules } from "../../../../../types/EslintRules"

export const typescriptEslintRules = {
  "@typescript-eslint/no-magic-numbers": Severity.OFF,
  "@typescript-eslint/no-unsafe-call": Severity.OFF,
  "@typescript-eslint/no-unsafe-member-access": Severity.OFF,
} as const satisfies EslintRules
