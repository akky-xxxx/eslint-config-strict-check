import { Error } from "../../../../const"

export const consistentTestIt = [
  Error,
  {
    fn: "it",
    withinDescribe: "it",
  },
] as const
