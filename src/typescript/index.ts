import { Extends } from "../shared/const/Extends"
import { Plugins } from "../shared/const/Plugins"
import { getConfigFullPath } from "../shared/utils/getConfigFullPath"

export = {
  plugins: Plugins,

  extends: [
    ...Extends,
    "airbnb-base",
    "prettier",
    ...[
      "../shared/config/import",
      "../shared/config/unicorn",
      "../shared/config/javascript",
      "../shared/config/typescript",
      "../shared/config/stylistic",
    ].map(getConfigFullPath(__dirname)),
  ],
}
