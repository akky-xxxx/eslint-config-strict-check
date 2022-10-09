import { Error, Off, Warn } from "../../const"
import { collectiveSetting } from "../../utils/collectiveSetting"
import { arrayType } from "./options/arrayType"
import { consistentTypeAssertions } from "./options/consistentTypeAssertions"
import { consistentTypeImports } from "./options/consistentTypeImports"
import { noConfusingVoidExpression } from "./options/noConfusingVoidExpression"
import { noImplicitAnyCatch } from "./options/noImplicitAnyCatch"
import { noUnnecessaryBooleanLiteralCompare } from "./options/noUnnecessaryBooleanLiteralCompare"
import { noUnnecessaryCondition } from "./options/noUnnecessaryCondition"
import { sortTypeUnionIntersectionMembers } from "./options/sortTypeUnionIntersectionMembers"

export = {
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/array-type": arrayType,
    "@typescript-eslint/consistent-indexed-object-style": [Error, "record"],
    "@typescript-eslint/consistent-type-assertions": consistentTypeAssertions,
    "@typescript-eslint/consistent-type-definitions": [Error, "type"],
    "@typescript-eslint/consistent-type-imports": consistentTypeImports,
    "@typescript-eslint/explicit-module-boundary-types": Off,
    "@typescript-eslint/no-confusing-void-expression":
      noConfusingVoidExpression,
    "@typescript-eslint/no-implicit-any-catch": noImplicitAnyCatch,
    "@typescript-eslint/no-unnecessary-boolean-literal-compare":
      noUnnecessaryBooleanLiteralCompare,
    "@typescript-eslint/no-unnecessary-condition": noUnnecessaryCondition,
    "@typescript-eslint/no-unnecessary-type-arguments": Warn,
    "@typescript-eslint/prefer-string-starts-ends-with": Warn,
    "@typescript-eslint/sort-type-union-intersection-members":
      sortTypeUnionIntersectionMembers,
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
        Off,
      ),
    },
  ],
}
