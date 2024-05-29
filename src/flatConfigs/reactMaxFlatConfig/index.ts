import { baseRules } from "../../shared/config/rules/baseRules"
import { reactRules } from "../../shared/config/rules/reactRules"
import { storyRules } from "../../shared/config/rules/storyRules"
import { testRules } from "../../shared/config/rules/testRules"
import { FilePatterns } from "../../shared/const/FilePatterns"
import { FlatConfigForCommon } from "../../shared/const/FlatConfigForCommon"
import { FlatConfigForReact } from "../../shared/const/FlatConfigForReact"
import { FlatConfigForStorybook } from "../../shared/const/FlatConfigForStorybook"
import { FlatConfigForTest } from "../../shared/const/FlatConfigForTest"

import type { EslintFlatConfig } from "../../shared/types/EslintFlatConfig"

export const reactMaxFlatConfig = [
  // extends config
  ...FlatConfigForCommon,
  ...FlatConfigForReact,
  ...FlatConfigForTest,
  {
    rules: {
      ...baseRules,
      ...reactRules,
    },
  },

  // for test
  {
    files: FilePatterns.TEST,
    rules: {
      ...testRules,
    },
  },

  // for storybook
  ...FlatConfigForStorybook,
  {
    files: FilePatterns.STORY,
    rules: {
      ...storyRules,
    },
  },
] as const satisfies EslintFlatConfig[]
