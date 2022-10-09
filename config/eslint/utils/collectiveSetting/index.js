exports.collectiveSetting = (rules, settingValue) =>
  Object.fromEntries(rules.map((rule) => [rule, settingValue]))
