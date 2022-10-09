type CollectiveSetting = (
  rules: readonly string[],
  settingValue: number,
) => Record<string, number>

/**
 * @remarks
 * set each rule values with settingValue
 */
export const collectiveSetting: CollectiveSetting = (rules, settingValue) =>
  Object.fromEntries(rules.map((rule) => [rule, settingValue]))
