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

export const nextMaxFlatConfig = [
  // extends config
  ...FlatConfigForCommon,
  // TODO: config-next を適用させる
  //  読み込ませると下記のエラーが出る
  //  Failed to patch ESLint because the calling module was not recognized.
  // "eslint-config-next/core-web-vitals",
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
