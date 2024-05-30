const nextLegacyConfig = require("../../../out/legacy/next")

module.exports = {
  ...nextLegacyConfig,
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  reportUnusedDisableDirectives: true,

  rules: {
    ...nextLegacyConfig.rules,
    // turn off for the dry-run
    "@next/next/no-html-link-for-pages": 0,
  },
}
