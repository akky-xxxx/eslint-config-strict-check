import { collectiveSetting } from "../../../../../src/shared/utils/collectiveSetting"

describe("utils/collectiveSetting", () => {
  it.each([
    [["rule/name"], 0, { "rule/name": 0 }],
    [
      ["rule/name1", "rule/name2", "rule/name3"],
      1,
      {
        "rule/name1": 1,
        "rule/name2": 1,
        "rule/name3": 1,
      },
    ],
  ] as const)(
    'when arguments is "%o", "%s". return "%o"',
    (rules, settingValue, expectedValue) => {
      const result = collectiveSetting(rules, settingValue)
      expect(result).toStrictEqual(expectedValue)
    },
  )
})
