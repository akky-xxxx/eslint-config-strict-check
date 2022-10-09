const { Error } = require("../../../const")
exports.preventAbbreviations = [
  Error,
  {
    replacements: Object.fromEntries(
      [
        // 許容する略称一覧
        "props",
        "req",
        "res",
        "ref",
        "env",
      ].map((keyword) => [keyword, false]),
    ),
  },
]
