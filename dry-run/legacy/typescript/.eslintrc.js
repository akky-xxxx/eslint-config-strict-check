const { typescript } = require("../../../out/legacy/typescript")

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
  reportUnusedDisableDirectives: true,
}
