import { Severity } from "../../../../../const/Severity"

export const anchorIsValid = [
  Severity.ERROR,
  {
    aspects: ["invalidHref", "preferButton"],
    components: ["Link"],
    specialLink: ["hrefLeft", "hrefRight"],
  },
] as const
