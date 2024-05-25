const preventAbbreviations = [
  2,
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

export const unicornRules = {
  "unicorn/consistent-destructuring": 1,
  "unicorn/explicit-length-check": 0,
  "unicorn/filename-case": 0,
  "unicorn/new-for-builtins": 0,
  "unicorn/no-array-callback-reference": 0,
  "unicorn/no-array-for-each": 0,
  "unicorn/no-array-reduce": 0,
  "unicorn/no-lonely-if": 0,
  "unicorn/no-new-array": 0,
  "unicorn/no-null": 0,
  "unicorn/no-useless-undefined": 0,
  "unicorn/prefer-module": 0,
  "unicorn/prefer-node-protocol": 0,
  "unicorn/prefer-number-properties": 0,
  "unicorn/prevent-abbreviations": preventAbbreviations,
}
