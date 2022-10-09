import { Error, Off } from "../../const"
import { collectiveSetting } from "../../utils/collectiveSetting"
import { extensions } from "./options/extensions"
import { order } from "./options/order"

export = {
  rules: {
    "import/extensions": extensions,
    "import/no-default-export": Error,
    "import/order": order,
    "import/prefer-default-export": Off,
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
      rules: collectiveSetting(["import/no-default-export"], Off),
    },
  ],
}
