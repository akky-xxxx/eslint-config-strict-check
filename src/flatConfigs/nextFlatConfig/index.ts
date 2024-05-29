import { baseRules } from "../../shared/config/rules/baseRules"
import { reactRules } from "../../shared/config/rules/reactRules"
import { FlatConfigForCommon } from "../../shared/const/FlatConfigForCommon"
import { FlatConfigForReact } from "../../shared/const/FlatConfigForReact"

import type { EslintFlatConfig } from "../../shared/types/EslintFlatConfig"

export const nextFlatConfig = [
  // extends config
  ...FlatConfigForCommon,
  // TODO: config-next を適用させる
  //  読み込ませると下記のエラーが出る
  //  Failed to patch ESLint because the calling module was not recognized.
  // "eslint-config-next/core-web-vitals",
  ...FlatConfigForReact,
  {
    rules: {
      ...baseRules,
      ...reactRules,
    },
  },
] as const satisfies EslintFlatConfig[]
