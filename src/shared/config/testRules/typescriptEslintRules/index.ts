import { Severity } from "../../../const/Severity"

export const typescriptEslintRules = {
  rules: {
    "@typescript-eslint/no-magic-numbers": Severity.OFF,
    "@typescript-eslint/no-unsafe-call": Severity.OFF,
    "@typescript-eslint/no-unsafe-member-access": Severity.OFF,
  },
} as const
