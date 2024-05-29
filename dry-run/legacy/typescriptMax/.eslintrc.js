const { typescriptMax } = require("../../../out/legacy/typescriptMax")

module.exports = {
  ...typescriptMax,
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  reportUnusedDisableDirectives: true,
}
