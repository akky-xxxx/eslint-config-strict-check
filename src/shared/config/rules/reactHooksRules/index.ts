import type { EslintRules } from "../../../types/EslintRules"

export const reactHooksRules = {
  // plugin の使用記述が重複しているため、airbnb/hooks を手動定義
  // plugin:react-hooks/recommended より airbnb/hooks の方が厳しいだけなので airbnb/hooks の設定を活かす
  "react-hooks/exhaustive-deps": 2,
  "react-hooks/rules-of-hooks": 2,
} as const satisfies EslintRules
