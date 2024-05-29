const { reactLegacyConfig } = require("../../../out/legacyConfigs/reactLegacyConfig")

module.exports = {
  ...reactLegacyConfig,
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  reportUnusedDisableDirectives: true,
}
