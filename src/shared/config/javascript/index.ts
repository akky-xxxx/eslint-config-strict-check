import { Severity } from "../../const/Severity"
import { collectiveSetting } from "../../utils/collectiveSetting"

export = {
  rules: {
    /* eslint-disable @typescript-eslint/no-magic-numbers */
    complexity: [Severity.ERROR, 5],
    "max-depth": [Severity.ERROR, 3],
    "max-len": Severity.OFF, // fix by prettier
    "max-lines": [Severity.ERROR, { max: 100 }],
    "max-nested-callbacks": [Severity.ERROR, 3],
    "max-statements": [Severity.ERROR, 10],
    "multiline-comment-style": Severity.OFF,
    "no-magic-numbers": Severity.WARN,
    "no-undefined": Severity.WARN,
    "no-unused-vars": Severity.OFF, // check by tsc
    "sort-keys": [Severity.WARN, "asc", { allowLineSeparatedGroups: true }],
    /* eslint-enable @typescript-eslint/no-magic-numbers */
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
        Severity.OFF,
      ),
    },
  ],
}
