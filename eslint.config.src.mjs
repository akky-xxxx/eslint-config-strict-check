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
  ...plugin.configs.typescriptMax,
  // eslint-config, eslint-plugin を無理やり import してるため
  {
    files: ["src/shared/utils/getCompatExtends/index.ts"],
    rules: Object.fromEntries(
      [
        "@typescript-eslint/no-unsafe-assignment",
        "@typescript-eslint/no-unsafe-call",
        "@typescript-eslint/no-unsafe-member-access",
        "@typescript-eslint/no-unsafe-return",
      ].map((ruleName) => [ruleName, 0]),
    ),
  },
  // eslint-config, eslint-plugin を無理やり import してるため
  {
    files: [
      "src/shared/const/FlatConfigForCommon/index.ts",
      "src/shared/const/FlatConfigForReact/index.ts",
    ],
    rules: Object.fromEntries(
      [
        "@typescript-eslint/no-unsafe-assignment",
        "@typescript-eslint/no-unsafe-member-access",
      ].map((ruleName) => [ruleName, 0]),
    ),
  },
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
