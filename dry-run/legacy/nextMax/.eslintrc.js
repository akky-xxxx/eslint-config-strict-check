const { nextMax } = require("../../../out/legacy/nextMax")

module.exports = {
  ...nextMax,
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  reportUnusedDisableDirectives: true,

  rules: {
    ...nextMax.rules,
    // turn off for the dry-run
    "@next/next/no-html-link-for-pages": 0,
  },
}
