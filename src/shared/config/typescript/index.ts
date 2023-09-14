import { arrayType } from "./options/arrayType"
import { consistentTypeAssertions } from "./options/consistentTypeAssertions"
import { consistentTypeImports } from "./options/consistentTypeImports"
import { noConfusingVoidExpression } from "./options/noConfusingVoidExpression"
import { noUnnecessaryBooleanLiteralCompare } from "./options/noUnnecessaryBooleanLiteralCompare"
import { noUnnecessaryCondition } from "./options/noUnnecessaryCondition"
import { Severity } from "../../const/Severity"
import { collectiveSetting } from "../../utils/collectiveSetting"

export = {
  parser: "@typescript-eslint/parser",
  rules: {
    "no-magic-numbers": Severity.OFF,
    "no-shadow": Severity.OFF,

    "@typescript-eslint/adjacent-overload-signatures": Severity.ERROR,
    "@typescript-eslint/array-type": arrayType,
    "@typescript-eslint/consistent-indexed-object-style": [
      Severity.ERROR,
      "record",
    ],
    "@typescript-eslint/consistent-type-assertions": consistentTypeAssertions,
    "@typescript-eslint/consistent-type-definitions": [Severity.ERROR, "type"],
    "@typescript-eslint/consistent-type-imports": consistentTypeImports,
    "@typescript-eslint/explicit-module-boundary-types": Severity.OFF,
    "@typescript-eslint/no-confusing-void-expression":
      noConfusingVoidExpression,
    "@typescript-eslint/no-empty-function": Severity.ERROR,
    "@typescript-eslint/no-empty-interface": Severity.WARN,
    "@typescript-eslint/no-floating-promises": Severity.WARN,
    "@typescript-eslint/no-inferrable-types": Severity.WARN,
    "@typescript-eslint/no-magic-numbers": Severity.WARN,
    "@typescript-eslint/no-misused-promises": Severity.WARN,
    "@typescript-eslint/no-non-null-assertion": Severity.ERROR,
    "@typescript-eslint/no-shadow": Severity.WARN,
    "@typescript-eslint/no-unnecessary-boolean-literal-compare":
      noUnnecessaryBooleanLiteralCompare,
    "@typescript-eslint/no-unnecessary-condition": noUnnecessaryCondition,
    "@typescript-eslint/no-unnecessary-type-arguments": Severity.WARN,
    "@typescript-eslint/no-use-before-define": Severity.ERROR,
    "@typescript-eslint/prefer-namespace-keyword": Severity.ERROR,
    "@typescript-eslint/prefer-string-starts-ends-with": Severity.WARN,
    "@typescript-eslint/sort-type-constituents": Severity.ERROR,
  },

  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },

  overrides: [
    {
      files: ["**/*.test.{ts,tsx}"],
      rules: collectiveSetting(
        [
          "@typescript-eslint/no-unsafe-call",
          "@typescript-eslint/no-unsafe-member-access",
        ],
        Severity.OFF,
      ),
    },
    {
      files: ["**/*.{test,stories}.{ts,tsx}", "**/spy{/**,.ts}", "**/spec/**"],
      rules: collectiveSetting(
        ["@typescript-eslint/no-magic-numbers"],
        Severity.OFF,
      ),
    },
    {
      // Transfer to @typescript-eslint/no-use-before-define
      files: ["**/*.*"],
      rules: collectiveSetting(["no-use-before-define"], Severity.OFF),
    },
    {
      files: ["**/*.tsx"],
      rules: collectiveSetting(
        ["@typescript-eslint/no-use-before-define"],
        Severity.OFF,
      ),
    },
  ],
}
