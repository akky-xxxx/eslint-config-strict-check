import { preventAbbreviations } from "./options/preventAbbreviations"
import { Severity } from "../../const/Severity"

export = {
  rules: {
    "unicorn/explicit-length-check": Severity.OFF,
    "unicorn/filename-case": Severity.OFF,
    "unicorn/new-for-builtins": Severity.OFF,
    "unicorn/no-array-callback-reference": Severity.OFF,
    "unicorn/no-array-for-each": Severity.OFF,
    "unicorn/no-array-reduce": Severity.OFF,
    "unicorn/no-lonely-if": Severity.OFF,
    "unicorn/no-new-array": Severity.OFF,
    "unicorn/no-null": Severity.OFF,
    "unicorn/no-useless-undefined": Severity.OFF,
    "unicorn/prefer-module": Severity.OFF,
    "unicorn/prefer-node-protocol": Severity.OFF,
    "unicorn/prefer-number-properties": Severity.OFF,
    "unicorn/prevent-abbreviations": preventAbbreviations,
  },
}
