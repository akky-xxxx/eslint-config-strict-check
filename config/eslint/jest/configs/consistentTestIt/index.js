const { Error } = require("../../../const")

exports.consistentTestIt = [
  Error,
  {
    fn: "it",
    withinDescribe: "it",
  },
]
