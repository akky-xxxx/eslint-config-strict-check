module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },

  plugins: ["@typescript-eslint", "jest", "tsdoc", "unicorn"],

  extends: [
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "airbnb",
    "prettier",
    "./config/eslint/import",
    "./config/eslint/jest",
    "./config/eslint/tsdoc",
    "./config/eslint/unicorn",
    "./config/eslint/javascript",
    "./config/eslint/typescript",
  ],
  ignorePatterns: ["**/libs/**/*", "**/coverage/**", "**/out/**"],
  reportUnusedDisableDirectives: true,
}
