import plugin from "./out/index.js"
import { settings } from "./config/eslint/settings/index.mjs"

export default [
  {
    ignores: [
      "*.*",
      ".yarn/**",
      "config/**",
      "coverage/**",
      "dry-run/**",
      "node_modules/**",
      "out/**",
      "scripts/**",
    ],
  },
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
  ...plugin.default.configs.typescriptMax,
  {
    // TODO: プロジェクト向け用とプロダクトコードのルールを合わせたら削除
    rules: {
      "quote-props": 0,
      "operator-linebreak": 0,
      "unicorn/prevent-abbreviations": 0,
    },
    settings: {
      ...settings.importSettings,
    },
  },
  {
    files: ["**/*.ts"],
  },
]
