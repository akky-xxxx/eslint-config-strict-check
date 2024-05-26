import type { Linter } from "eslint"

export type EslintRules =
  Record<string, Linter.RuleEntry | readonly [Linter.RuleLevel, ...readonly unknown[]]>
