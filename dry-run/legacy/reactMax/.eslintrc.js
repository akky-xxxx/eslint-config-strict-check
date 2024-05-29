const { reactMaxLegacyConfig } = require("../../../out/legacyConfigs/reactMaxLegacyConfig")

module.exports = {
  ...reactMaxLegacyConfig,
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  reportUnusedDisableDirectives: true,
}
