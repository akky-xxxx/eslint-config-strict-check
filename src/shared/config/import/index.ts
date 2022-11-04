import { Severity } from "../../const/Severity"
import { collectiveSetting } from "../../utils/collectiveSetting"
import { extensions } from "./options/extensions"
import { order } from "./options/order"

export = {
  rules: {
    "import/extensions": extensions,
    "import/no-default-export": Severity.ERROR,
    "import/order": order,
    "import/prefer-default-export": Severity.OFF,
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
      rules: collectiveSetting(
        ["import/no-extraneous-dependencies"],
        Severity.OFF,
      ),
    },
    {
      files: ["**/pages/**/*.{api,page}.{tsx,ts}", "**/*.stories.{ts,tsx}"],
      rules: collectiveSetting(["import/no-default-export"], Severity.OFF),
    },
  ],
}
