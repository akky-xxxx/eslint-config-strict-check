const typescriptMaxLegacyConfig = require("../../../out/legacy/typescriptMax")

module.exports = {
  ...typescriptMaxLegacyConfig,
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
