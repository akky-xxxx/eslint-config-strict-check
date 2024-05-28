import { FlatCompat } from "@eslint/eslintrc"
import eslint from "@eslint/js"
import eslintPluginStrictCheck from "eslint-plugin-strict-check"
import eslintPluginUnicorn from "eslint-plugin-unicorn"
// eslint-disable-next-line import/no-unresolved
import typescriptEslint from "typescript-eslint"

import { baseRules } from "../shared/config/baseRules"
import { reactRules } from "../shared/config/reactRules"
import { storyRules } from "../shared/config/storyRules"
import { testRules } from "../shared/config/testRules"
import { FilePatterns } from "../shared/const/FilePatterns"

import type { EslintFlatConfig } from "../shared/types/EslintFlatConfig"

// TODO 問題起きるかも
const compat = new FlatCompat()

export const nextMaxFlatConfig = [
  ...typescriptEslint.configs.strict,
  ...typescriptEslint.configs.stylistic,
  eslint.configs.recommended,
  {
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: eslintPluginUnicorn.configs.recommended.rules,
  },
  // TODO flat config に対応したら書き換え
  ...compat.extends(
    "plugin:unicorn/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "eslint-config-airbnb",
    "eslint-config-airbnb/hooks",
    "eslint-config-next/core-web-vitals",
  ),
  ...eslintPluginStrictCheck.configs.react,
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
  {
    files: FilePatterns.STORY,
    rules: {
      ...storyRules,
    },
  },
] as const satisfies EslintFlatConfig[]
