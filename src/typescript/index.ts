import path from "path"

export = {
  plugins: ["@typescript-eslint", "jest", "tsdoc", "unicorn"],

  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:unicorn/recommended",
    "eslint:recommended",
    "airbnb-base",
    "prettier",
    ...[
      "../shared/config/import",
      "../shared/config/jest",
      "../shared/config/tsdoc",
      "../shared/config/unicorn",
      "../shared/config/javascript",
      "../shared/config/typescript",
    ].map((configPath) => path.resolve(__dirname, configPath)),
  ],
}
