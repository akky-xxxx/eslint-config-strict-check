import type { NextPage } from "next"

/**
 * @remarks
 * for checking apply if eslint-config-next
 */

export const NextTest: NextPage = () => (
  <a href="/Users/shogo/Public">
    {/* eslint-disable-next-line @next/next/no-img-element, react/jsx-sort-props */}
    <img src="dry-run/next/index" alt="" />
  </a>
)
