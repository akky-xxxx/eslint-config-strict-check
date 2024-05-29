import eslint from "@eslint/js"
import eslintPluginStrictCheck from "eslint-plugin-strict-check"
// eslint-disable-next-line import/no-unresolved
import typescriptEslint from "typescript-eslint"

import { baseRules } from "../../shared/config/rules/baseRules"
import { reactRules } from "../../shared/config/rules/reactRules"
import { testRules } from "../../shared/config/rules/testRules"
import { FilePatterns } from "../../shared/const/FilePatterns"
import { getCompatExtends } from "../../shared/utils/getCompatExtends"

import type { EslintFlatConfig } from "../../shared/types/EslintFlatConfig"

export const nextFlatConfig = [
  ...typescriptEslint.configs.strict,
  // ...typescriptEslint.configs.stylistic,
  eslint.configs.recommended,
  ...getCompatExtends(
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
