import { Error, Off, Warn } from "../../const"
import { collectiveSetting } from "../../utils/collectiveSetting"
import { operatorLinebreak } from "./options/operatorLinebreak"

export = {
  rules: {
    /* eslint-disable no-magic-numbers */
    complexity: [Error, 5],
    "implicit-arrow-linebreak": [Off],
    "max-depth": [Error, 3],
    "max-len": Off, // fix by prettier
    "max-lines": [Error, { max: 100 }],
    "max-nested-callbacks": [Error, 3],
    "max-statements": [Error, 10],
    "multiline-comment-style": Off,
    "no-magic-numbers": Warn,
    "no-undefined": Warn,
    "no-unused-vars": Off, // check by tsc
    "operator-linebreak": operatorLinebreak,
    quotes: [Error, "double", { avoidEscape: true }],
    semi: [Error, "never"],
    "sort-keys": [Warn, "asc", { allowLineSeparatedGroups: true }],
    /* eslint-enable no-magic-numbers */
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
