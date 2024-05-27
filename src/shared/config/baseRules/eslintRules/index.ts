import { Severity } from "../../../const/Severity"

import type { EslintRules } from "../../../types/EslintRules"

export const eslintRules = {
  /* eslint-disable @typescript-eslint/no-magic-numbers */
  "complexity": [Severity.ERROR, 5],
  "max-depth": [Severity.ERROR, 3],
  "max-len": Severity.OFF, // check by stylistic
  "max-lines": [Severity.ERROR, { max: 100 }],
  "max-nested-callbacks": [Severity.ERROR, 3],
  "max-statements": [Severity.ERROR, 10],
  "multiline-comment-style": Severity.OFF,
  "no-magic-numbers": Severity.WARN, // TODO: off にして typescript-eslint に移乗する
  "no-undefined": Severity.WARN, // TODO: off にする
  "no-unused-vars": Severity.OFF, // check by tsc
  "no-use-before-define": Severity.OFF, // check by typescript-eslint
  "object-curly-newline": Severity.OFF, // check by stylistic
  "quotes": Severity.OFF, // check by stylistic
  "semi": Severity.OFF, // check by stylistic
  "sort-keys": [Severity.WARN, "asc", { allowLineSeparatedGroups: true }],
  /* eslint-enable @typescript-eslint/no-magic-numbers */
} as const satisfies EslintRules
