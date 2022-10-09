import { Error } from "../../../../const"

export const order = [
  Error,
  {
    "newlines-between": "always",

    alphabetize: { order: "asc" },

    groups: [
      ["builtin", "external"],
      "internal",
      ["parent", "sibling", "index"],
      "object",
      "type",
    ],
  },
] as const
