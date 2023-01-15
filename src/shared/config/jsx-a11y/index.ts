import { anchorIsValid } from "./options/anchorIsValid"
import { labelHasAssociatedControl } from "./options/labelHasAssociatedControl"
import { Severity } from "../../const/Severity"
import { collectiveSetting } from "../../utils/collectiveSetting"

export = {
  rules: {
    "jsx-a11y/anchor-is-valid": anchorIsValid,
    "jsx-a11y/label-has-associated-control": labelHasAssociatedControl,
  },

  overrides: [
    {
      files: ["**/*.{test,stories}.{ts,tsx}", "**/spy{/**,.ts}"],
      rules: collectiveSetting(["jsx-a11y/anchor-is-valid"], Severity.OFF),
    },
  ],
}
