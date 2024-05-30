import { anchorIsValid } from "./options/anchorIsValid"
import { labelHasAssociatedControl } from "./options/labelHasAssociatedControl"

import type { EslintRules } from "../../../../../types/EslintRules"

export const jsxA11yRules = {
  "jsx-a11y/anchor-is-valid": anchorIsValid,
  "jsx-a11y/label-has-associated-control": labelHasAssociatedControl,
} as const satisfies EslintRules
