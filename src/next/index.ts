import { FlatCompat } from "@eslint/eslintrc"
import eslint from "@eslint/js"
import eslintPluginStrictCheck from "eslint-plugin-strict-check"
// eslint-disable-next-line import/no-unresolved
import typescriptEslint from "typescript-eslint"

import { baseRules } from "../shared/config/baseRules"
import { reactRules } from "../shared/config/reactRules"
import { testRules } from "../shared/config/testRules"
import { FilePatterns } from "../shared/const/FilePatterns"

import type { EslintFlatConfig } from "../shared/types/EslintFlatConfig"

// TODO 問題起きるかも
const compat = new FlatCompat()

export const nextFlatConfig = [
  ...typescriptEslint.configs.strict,
  // ...typescriptEslint.configs.stylistic,
  eslint.configs.recommended,
  // TODO flat config に対応したら書き換え
  ...compat.extends(
    "plugin:unicorn/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "eslint-config-airbnb",
    "eslint-config-airbnb/hooks",
    // TODO: config-next を適用させる
    //  読み込ませると下記のエラーが出る
    //  Failed to patch ESLint because the calling module was not recognized.
    // "eslint-config-next/core-web-vitals",
  ),
  eslintPluginStrictCheck.configs.react,
  {
    rules: {
      ...baseRules,
      ...reactRules,
    },
  },
  {
    files: FilePatterns.TEST,
    rules: {
      ...testRules,
    },
  },
] as const satisfies EslintFlatConfig[]
