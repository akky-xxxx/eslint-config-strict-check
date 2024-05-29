const { reactMax } = require("../../../out/legacy/reactMax")

module.exports = {
  ...reactMax,
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  reportUnusedDisableDirectives: true,
}
