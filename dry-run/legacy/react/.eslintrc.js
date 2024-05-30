const reactLegacyConfig = require("../../../out/legacy/react")

module.exports = {
  ...reactLegacyConfig,
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  reportUnusedDisableDirectives: true,
}
