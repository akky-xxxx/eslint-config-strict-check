const { Off, Warn } = require("../const")
const { preventAbbreviations } = require("./configs/preventAbbreviations")

module.exports = {
  plugins: ["unicorn"],
  rules: {
    "unicorn/consistent-destructuring": Warn,
    "unicorn/explicit-length-check": Off,
    "unicorn/filename-case": Off,
    "unicorn/new-for-builtins": Off,
    "unicorn/no-array-callback-reference": Off,
    "unicorn/no-array-for-each": Off,
    "unicorn/no-array-reduce": Off,
    "unicorn/no-lonely-if": Off,
    "unicorn/no-new-array": Off,
    "unicorn/no-null": Off,
    "unicorn/no-useless-undefined": Off,
    "unicorn/prefer-module": Off,
    "unicorn/prefer-node-protocol": Off,
    "unicorn/prefer-number-properties": Off,
    "unicorn/prevent-abbreviations": preventAbbreviations,
  },
}
