import { extensions } from "./options/extensions"
import { order } from "./options/order"
import { Severity } from "../../../const/Severity"

export const importRules = {
  "import/extensions": extensions,
  "import/no-default-export": Severity.ERROR,
  "import/order": order,
  "import/prefer-default-export": Severity.OFF,
} as const
