const { Off, Error } = require("../const")
const { operatorLinebreak } = require("./configs/operatorLinebreak")

module.exports = {
  rules: {
    "@stylistic/implicit-arrow-linebreak": [Off],
    "@stylistic/operator-linebreak": operatorLinebreak,
    "@stylistic/quotes": [Error, "double", { avoidEscape: true }],
    "@stylistic/semi": [Error, "never"],
  },
}
