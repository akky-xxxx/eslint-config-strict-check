import { Severity } from "../../../../../../../const/Severity"

import type { EslintRuleLevelAndOptions } from "../../../../../../../types/EslintRuleLevelAndOptions"

export const order = [
  Severity.ERROR,
  {
    "newlines-between": "always",

    "alphabetize": { order: "asc" },

    "groups": [
      ["builtin", "external"],
      "internal",
      ["parent", "sibling", "index"],
      "object",
      "type",
    ],
  },
] as const satisfies EslintRuleLevelAndOptions
