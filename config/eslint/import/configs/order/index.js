const { Error } = require("../../../const")

exports.order = [
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
]
