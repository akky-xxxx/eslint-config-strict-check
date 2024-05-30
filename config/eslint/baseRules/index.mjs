import { eslintRules } from "./eslintRules/index.mjs"
import { importRules } from "./importRules/index.mjs"
import { stylisticRules } from "./stylisticRules/index.mjs"
import { typescriptEslintRules } from "./typescriptEslintRules/index.mjs"
import { unicornRules } from "./unicornRules/index.mjs"

export const baseRules = {
  ...eslintRules,
  ...importRules,
  ...stylisticRules,
  ...typescriptEslintRules,
  ...unicornRules,
}
