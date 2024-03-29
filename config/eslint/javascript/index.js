const { Off, Error, Warn } = require("../const")
const { collectiveSetting } = require("../utils/collectiveSetting")

module.exports = {
  rules: {
    "implicit-arrow-linebreak": Off,
    "max-depth": [Error, 3],
    "max-lines": [Error, { max: 100 }],
    "max-nested-callbacks": [Error, 3],
    "max-statements": [Error, 10],
    "multiline-comment-style": Off,
    "no-undefined": Warn,
    "no-unused-vars": Off,
    "no-use-before-define": Off,
    "sort-keys": [Warn, "asc", { allowLineSeparatedGroups: true }],
    complexity: [Error, 5],
  },
  overrides: [
    {
      files: ["**/*.{test,stories}.{ts,tsx}", "**/spy{/**,.ts}", "**/spec/**"],
      rules: collectiveSetting(
        [
          "complexity",
          "max-lines",
          "max-nested-callbacks",
          "max-statements",
          "no-console",
          "no-magic-numbers",
          "no-undefined",
          "sort-keys",
        ],
        Off,
      ),
    },
  ],
}
