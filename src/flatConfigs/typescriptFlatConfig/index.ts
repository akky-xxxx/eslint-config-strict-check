import { baseRules } from "../../shared/config/rules/baseRules"
import { FlatConfigForCommon } from "../../shared/const/FlatConfigForCommon"
import { getCompatExtends } from "../../shared/utils/getCompatExtends"

import type { EslintFlatConfig } from "../../shared/types/EslintFlatConfig"

export const typescriptFlatConfig = [
  // extends config
  ...FlatConfigForCommon,
  ...getCompatExtends("eslint-config-airbnb-base"),
  {
    rules: {
      ...baseRules,
    },
  },
] as const satisfies EslintFlatConfig[]
