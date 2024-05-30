import { baseRules } from "../../shared/config/rules/baseRules"
import { reactRules } from "../../shared/config/rules/reactRules"
import { FlatConfigForCommon } from "../../shared/const/FlatConfigForCommon"
import { FlatConfigForReact } from "../../shared/const/FlatConfigForReact"

import type { EslintFlatConfig } from "../../shared/types/EslintFlatConfig"

export const reactFlatConfig = [
  // extends config
  ...FlatConfigForCommon,
  ...FlatConfigForReact,
  {
    rules: {
      ...baseRules,
      ...reactRules,
    },
  },
] as const satisfies EslintFlatConfig[]
