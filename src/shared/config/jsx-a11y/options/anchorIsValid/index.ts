import { Error } from "../../../../const"

export const anchorIsValid = [
  Error,
  {
    aspects: ["invalidHref", "preferButton"],
    components: ["Link"],
    specialLink: ["hrefLeft", "hrefRight"],
  },
]
