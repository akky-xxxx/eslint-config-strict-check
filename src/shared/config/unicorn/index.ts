import { Off } from "../../const"
import { preventAbbreviations } from "./options/preventAbbreviations"

export = {
  rules: {
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
