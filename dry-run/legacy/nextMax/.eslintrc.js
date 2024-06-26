const nextMaxLegacyConfig = require("../../../out/legacy/nextMax")

module.exports = {
  ...nextMaxLegacyConfig,
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  reportUnusedDisableDirectives: true,

  rules: {
    ...nextMaxLegacyConfig.rules,
    // turn off for the dry-run
    "@next/next/no-html-link-for-pages": 0,
  },
}
