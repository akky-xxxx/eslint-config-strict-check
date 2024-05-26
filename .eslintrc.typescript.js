const { typescriptMax } = require("./out/legacy/typescriptMax")

module.exports = {
  ...typescriptMax,
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.typescript.json"],
  },
  ignorePatterns: ["**/libs/**/*", "**/coverage/**", "**/out/**"],
  reportUnusedDisableDirectives: true,
}
