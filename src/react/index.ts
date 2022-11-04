import path from "path"

import { Extends } from "../shared/const/Extends"
import { Plugins } from "../shared/const/Plugins"

export = {
  plugins: [...Plugins, "react", "react-hooks", "storybook", "strict-check"],

  extends: [
    ...Extends,
    "plugin:storybook/addon-interactions",
    "plugin:storybook/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:strict-check/react",
    "airbnb",
    "airbnb/hooks",
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
