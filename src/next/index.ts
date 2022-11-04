import path from "path"

import { Extends } from "../shared/const/Extends"
import { Plugins } from "../shared/const/Plugins"
import { ReactExtends } from "../shared/const/ReactExtends"

export = {
  plugins: [...Plugins, "storybook", "strict-check"],

  extends: [
    ...Extends,
    ...ReactExtends,
    "next/core-web-vitals",
    "prettier",
    ...[
      "../shared/config/import",
      "../shared/config/jest",
      "../shared/config/storybook",
      "../shared/config/tsdoc",
      "../shared/config/jsx-a11y",
      "../shared/config/react",
      "../shared/config/unicorn",
      "../shared/config/javascript",
      "../shared/config/typescript",
    ].map((configPath) => path.resolve(__dirname, configPath)),
  ],
}
