const reactMaxLegacyConfig = require("../../../out/legacy/reactMax")

module.exports = {
  ...reactMaxLegacyConfig,
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  reportUnusedDisableDirectives: true,
}
