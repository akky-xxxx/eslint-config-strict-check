import path from "path"

export = {
  plugins: ["@typescript-eslint", "jest", "storybook", "tsdoc", "unicorn"],

  extends: [
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "airbnb",
    "prettier",
    ...[
      "../shared/config/import",
      "../shared/config/jest",
      "../shared/config/tsdoc",
      "../shared/config/jsx-a11y",
      "../shared/config/unicorn",
      "../shared/config/javascript",
      "../shared/config/typescript",
    ].map((configPath) => path.resolve(__dirname, configPath)),
  ],
}
