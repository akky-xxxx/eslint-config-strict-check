import path from "path"

import { Extends } from "../shared/const/Extends"
import { Plugins } from "../shared/const/Plugins"

export = {
  plugins: Plugins,

  extends: [
    ...Extends,
    "airbnb-base",
    "prettier",
    ...[
      "../shared/config/import",
      "../shared/config/jest",
      "../shared/config/tsdoc",
      "../shared/config/unicorn",
      "../shared/config/javascript",
      "../shared/config/typescript",
    ].map((configPath) => path.resolve(__dirname, configPath)),
  ],
}
