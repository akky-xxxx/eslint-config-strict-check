import { baseRules } from "../../shared/config/rules/baseRules"
import { testRules } from "../../shared/config/rules/testRules"
import { FilePatterns } from "../../shared/const/FilePatterns"
import { FlatConfigForCommon } from "../../shared/const/FlatConfigForCommon"
import { FlatConfigForTest } from "../../shared/const/FlatConfigForTest"
import { getCompatExtends } from "../../shared/utils/getCompatExtends"

import type { EslintFlatConfig } from "../../shared/types/EslintFlatConfig"

export const typescriptMaxFlatConfig = [
  // extends config
  ...FlatConfigForCommon,
  ...FlatConfigForTest,
  ...getCompatExtends("eslint-config-airbnb-base"),
  {
    rules: {
      ...baseRules,
    },
  },

  // for test
  {
    files: FilePatterns.TEST,
    rules: {
      ...testRules,
    },
  },
] as const satisfies EslintFlatConfig[]
