const { Warn } = require("../../../const")

exports.operatorLinebreak = [
  Warn,
  "after",
  {
    overrides: {
      ":": "ignore",
      "?": "ignore",
    },
  },
]
