import { Off } from "../../const"
import { collectiveSetting } from "../../utils/collectiveSetting"
import { anchorIsValid } from "./options/anchorIsValid"
import { labelHasAssociatedControl } from "./options/labelHasAssociatedControl"

export = {
  rules: {
    "jsx-a11y/anchor-is-valid": anchorIsValid,
    "jsx-a11y/label-has-associated-control": labelHasAssociatedControl,
  },

  overrides: [
    {
      files: ["**/*.{test,stories}.{ts,tsx}", "**/spy{/**,.ts}"],
      rules: collectiveSetting(["jsx-a11y/anchor-is-valid"], Off),
    },
  ],
}
