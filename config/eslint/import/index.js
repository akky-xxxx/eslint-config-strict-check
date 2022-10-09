const { Off, Error } = require("../const")
const { extensions } = require("./configs/extensions")
const { order } = require("./configs/order")
const { collectiveSetting } = require("../utils/collectiveSetting")

module.exports = {
  rules: {
    "import/prefer-default-export": Off,
    "import/no-default-export": Error,
    "import/order": order,
    "import/extensions": extensions,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
      },
    },
  },
  overrides: [
    {
      files: ["**/*.{test,stories}.{ts,tsx}"],
      rules: collectiveSetting(["import/no-extraneous-dependencies"], Off),
    },
    {
      files: ["**/pages/**/*.{api,page}.{tsx,ts}", "**/*.stories.{ts,tsx}"],
      rules: collectiveSetting(["mport/no-default-export"], Off),
    },
  ],
}
