const { next } = require("../../../out/legacy/next")

module.exports = {
  ...next,
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  reportUnusedDisableDirectives: true,

  rules: {
    // turn off for the dry-run
    "@next/next/no-html-link-for-pages": 0,
  },
}
