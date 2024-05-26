import { Severity } from "../../../../../const/Severity"

import type { EslintRuleLevelAndOptions } from "../../../../../types/EslintRuleLevelAndOptions"

export const anchorIsValid = [
  Severity.ERROR,
  {
    aspects: ["invalidHref", "preferButton"],
    components: ["Link"],
    specialLink: ["hrefLeft", "hrefRight"],
  },
] as const satisfies EslintRuleLevelAndOptions
