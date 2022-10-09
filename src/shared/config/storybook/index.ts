// import が発生したら disable を削除
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
module.exports = {
  extends: [
    "plugin:storybook/addon-interactions",
    "plugin:storybook/csf",
    "plugin:storybook/csf-strict",
    "plugin:storybook/recommended",
  ],
}
