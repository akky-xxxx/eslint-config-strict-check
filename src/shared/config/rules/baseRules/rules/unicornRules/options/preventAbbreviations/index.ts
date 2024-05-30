import { Severity } from "../../../../../../../const/Severity"

import type { EslintRuleLevelAndOptions } from "../../../../../../../types/EslintRuleLevelAndOptions"

export const preventAbbreviations = [
  Severity.ERROR,
  {
    // TODO: allowList に変更する
    replacements: Object.fromEntries(
      [
        // TODO: "Prop", "Props" を追加する
        // 許容する略称一覧
        "props",
        "req",
        "res",
        "ref",
        "env",
      ].map((keyword) => [keyword, false]),
    ),
  },
] as const satisfies EslintRuleLevelAndOptions
