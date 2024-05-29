const { typescript } = require("./out/legacy/typescript")

module.exports = {
  ...typescript,
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
      files: [
        "src/next/index.ts",
        "src/nextMax/index.ts",
        "src/react/index.ts",
        "src/reactMax/index.ts",
        "src/typescript/index.ts",
        "src/typescriptMax/index.ts",
      ],
      rules: Object.fromEntries(
        [
          "@typescript-eslint/no-unsafe-assignment",
          "@typescript-eslint/no-unsafe-call",
          "@typescript-eslint/no-unsafe-member-access",
        ].map((ruleName) => [ruleName, 0]),
      ),
    },
  ],
  rules: {
    ...typescript.rules,
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
