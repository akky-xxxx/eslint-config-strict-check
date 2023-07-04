type CollectiveSetting = (
  rules: readonly string[],
  settingValue: number,
) => Record<string, number>

/**
 * @description
 * set each rule values with settingValue
 * @param rules - ルール名
 * @param settingValue - severity
 * @returns Record<"ruleName", severity>
 */
export const collectiveSetting: CollectiveSetting = (rules, settingValue) =>
  Object.fromEntries(rules.map((rule) => [rule, settingValue]))
