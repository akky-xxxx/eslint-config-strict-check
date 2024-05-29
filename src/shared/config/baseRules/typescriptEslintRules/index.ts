import { arrayType } from "./options/arrayType"
import { consistentTypeAssertions } from "./options/consistentTypeAssertions"
import { consistentTypeImports } from "./options/consistentTypeImports"
import { noConfusingVoidExpression } from "./options/noConfusingVoidExpression"
import { noUnnecessaryBooleanLiteralCompare } from "./options/noUnnecessaryBooleanLiteralCompare"
import { noUnnecessaryCondition } from "./options/noUnnecessaryCondition"
import { Severity } from "../../../const/Severity"

import type { EslintRules } from "../../../types/EslintRules"

export const typescriptEslintRules = {
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
  "@typescript-eslint/no-floating-promises": Severity.WARN, // TODO: off にする
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
} as const satisfies EslintRules
