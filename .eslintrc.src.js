const { typescriptMaxLegacyConfig } = require("./out/legacyConfigs/typescriptMaxLegacyConfig")

module.exports = {
  ...typescriptMaxLegacyConfig,
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },

  ignorePatterns: ["**/libs/**/*", "**/coverage/**", "**/out/**"],
  reportUnusedDisableDirectives: true,

  overrides: [
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
  ],
  rules: {
    ...typescriptMaxLegacyConfig.rules,
    // TODO: overrides で打ち消す
    "import/no-default-export": 0,
    "unicorn/prevent-abbreviations": [
      2,
      {
        // TODO: src 側のルールを変更したらこちら削除
        allowList: Object.fromEntries(
          ["Prop", "Props"].map((keyword) => [keyword, true]),
        ),
      },
    ],
  },
}
