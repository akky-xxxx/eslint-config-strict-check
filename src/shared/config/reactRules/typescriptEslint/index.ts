import { Severity } from "../../../const/Severity"

export const typescriptEslintConfig = {
  rules: {
    "@typescript-eslint/no-use-before-define": Severity.OFF,
  },
} as const
