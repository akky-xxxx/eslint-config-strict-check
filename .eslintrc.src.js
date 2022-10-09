module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },

  extends: ["./out/typescript"],
  ignorePatterns: ["**/libs/**/*", "**/coverage/**", "**/out/**"],
  reportUnusedDisableDirectives: true,
}
