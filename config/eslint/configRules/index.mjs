import { importRules } from "./importRules/index.mjs"
import { typescriptEslintRules } from "./typescriptEslintRules/index.mjs"

export const configRules = {
  ...importRules,
  ...typescriptEslintRules,
}
