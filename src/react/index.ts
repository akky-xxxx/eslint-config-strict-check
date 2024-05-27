import { Extends } from "../shared/const/Extends"
import { Plugins } from "../shared/const/Plugins"
import { ReactExtends } from "../shared/const/ReactExtends"
import { ReactHooksExtends } from "../shared/const/ReactHooksExtends"
import { getConfigFullPath } from "../shared/utils/getConfigFullPath"

export = {
  plugins: [...Plugins, "react", "react-hooks", "strict-check"],

  extends: [
    ...Extends,
    ...ReactExtends,
    ...ReactHooksExtends,
    "prettier", // TODO: 消す
    ...[
      "../shared/config/import",
      "../shared/config/jsx-a11y",
      "../shared/config/react",
      "../shared/config/unicorn",
      "../shared/config/javascript",
      "../shared/config/typescript",
      "../shared/config/stylistic",
    ].map(getConfigFullPath(__dirname)),
  ],
}
