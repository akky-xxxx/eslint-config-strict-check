const { Off } = require("./config/eslint/const")

module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.react.json"],
  },
  extends: ["./out/next"],
  ignorePatterns: ["**/libs/**/*", "**/coverage/**", "**/out/**"],
  reportUnusedDisableDirectives: true,

  rules: {
    // turn off for the dry-run
    "@next/next/no-html-link-for-pages": Off,
  },
}
