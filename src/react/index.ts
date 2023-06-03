import { Extends } from "../shared/const/Extends"
import { Plugins } from "../shared/const/Plugins"
import { ReactExtends } from "../shared/const/ReactExtends"
import { getConfigFullPath } from "../shared/utils/getConfigFullPath"

export = {
  plugins: [...Plugins, "react", "react-hooks", "strict-check"],

  extends: [
    ...Extends,
    ...ReactExtends,
    "prettier",
    ...[
      "../shared/config/import",
      "../shared/config/tsdoc",
      "../shared/config/jsx-a11y",
      "../shared/config/react",
      "../shared/config/unicorn",
      "../shared/config/javascript",
      "../shared/config/typescript",
    ].map(getConfigFullPath(__dirname)),
  ],
}