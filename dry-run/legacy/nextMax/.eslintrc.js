const { nextMax } = require("../../../out/legacy/nextMax")

module.exports = {
  ...nextMax,
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  reportUnusedDisableDirectives: true,
}
