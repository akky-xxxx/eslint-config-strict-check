import { Extends } from "../shared/const/Extends"
import { Plugins } from "../shared/const/Plugins"
import { ReactExtends } from "../shared/const/ReactExtends"
import { getConfigFullPath } from "../shared/utils/getConfigFullPath"

export = {
  plugins: [...Plugins, "strict-check"],

  extends: [
    ...Extends,
    ...ReactExtends,
    "next/core-web-vitals",
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
