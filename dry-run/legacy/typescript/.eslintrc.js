const typescriptLegacyConfig = require("../../../out/legacy/typescript")

module.exports = {
  ...typescriptLegacyConfig,
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  reportUnusedDisableDirectives: true,
}
