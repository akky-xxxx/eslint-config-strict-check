const { Off, Error, Warn } = require("../const")
const { arrayType } = require("./configs/arrayType")
const {
  consistentTypeAssertions,
} = require("./configs/consistentTypeAssertions")
const { consistentTypeImports } = require("./configs/consistentTypeImports")
const {
  noConfusingVoidExpression,
} = require("./configs/noConfusingVoidExpression")
const {
  noUnnecessaryBooleanLiteralCompare,
} = require("./configs/noUnnecessaryBooleanLiteralCompare")
const { noUnnecessaryCondition } = require("./configs/noUnnecessaryCondition")
const { collectiveSetting } = require("../utils/collectiveSetting")

module.exports = {
  parser: "@typescript-eslint/parser",
  rules: {
    "no-magic-numbers": Off,
    "no-shadow": Off,

    "@typescript-eslint/array-type": arrayType,
    "@typescript-eslint/consistent-indexed-object-style": [Error, "record"],
    "@typescript-eslint/consistent-type-assertions": consistentTypeAssertions,
    "@typescript-eslint/consistent-type-definitions": [Error, "type"],
    "@typescript-eslint/consistent-type-imports": consistentTypeImports,
    "@typescript-eslint/explicit-module-boundary-types": Off,
    "@typescript-eslint/no-confusing-void-expression":
      noConfusingVoidExpression,
    "@typescript-eslint/no-floating-promises": Warn,
    "@typescript-eslint/no-magic-numbers": Warn,
    "@typescript-eslint/no-misused-promises": Warn,
    "@typescript-eslint/no-shadow": Warn,
    "@typescript-eslint/no-unnecessary-boolean-literal-compare":
      noUnnecessaryBooleanLiteralCompare,
    "@typescript-eslint/no-unnecessary-condition": noUnnecessaryCondition,
    "@typescript-eslint/no-unnecessary-type-arguments": Warn,
    "@typescript-eslint/no-use-before-define": Error,
    "@typescript-eslint/prefer-string-starts-ends-with": Warn,
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
      files: ["**/*.{test,stories}.{ts,tsx}", "**/spy{/**,.ts}", "**/spec/**"],
      rules: collectiveSetting(["@typescript-eslint/no-magic-numbers"], Off),
    },
    {
      files: ["**/*.test.{ts,tsx}"],
      rules: collectiveSetting(
        [
          "@typescript-eslint/no-unsafe-call",
          "@typescript-eslint/no-unsafe-member-access",
        ],
        Off,
      ),
    },
  ],
}
