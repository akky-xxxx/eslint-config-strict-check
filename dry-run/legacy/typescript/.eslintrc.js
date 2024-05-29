const { typescriptLegacyConfig } = require("../../../out/legacyConfigs/typescriptLegacyConfig")

module.exports = {
  ...typescriptLegacyConfig,
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  reportUnusedDisableDirectives: true,
}
