/* eslint-disable complexity, no-console */
/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React, { Fragment } from "react"

import type { NextPage } from "next"
import type { FC, ReactNode } from "react"

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

type ReactTest1Props = {
  // eslint-disable-next-line react/boolean-prop-naming
  bool: boolean
  count: number
  empty: ReactNode
  title: string
}

/**
 * @remarks
 * for checking apply if eslint-plugin-react
 */

export const ReactTest1: FC<ReactTest1Props> = (props) => {
  const { bool, count, empty, title } = props
  // eslint-disable-next-line strict-check/individual-import
  const state = React.useState("")
  console.log(state)

  // eslint-disable-next-line strict-check/event-handler-prefix, strict-check/individual-import,
  const onClick: React.EventHandler<unknown> = () => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const handleClick = () => {
      //
    }
    console.log("onClick", handleClick)
  }

  return (
    // eslint-disable-next-line react/jsx-fragments
    <>
      <div>1</div>
      <div>2</div>
      <button type="button" onClick={onClick}>click</button>
      {/* eslint-disable-next-line react/iframe-missing-sandbox */}
      <iframe
        src="https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md"
        title="title"
      />
      {/* eslint-disable-next-line react/jsx-no-leaked-render */}
      <div>{count && title}</div>
      <div>{Boolean(count) && title}</div>
      <div>{count ? title : null}</div>
      <div>{count ? title : empty}</div>
      {Boolean(bool) && "1"}
    </>
  )
}

type JsxSortPropsProps = {
  age: number
  callback: () => string
  isShorthand?: boolean
  multiline: () => void
}

const JsxSortProps: FC<JsxSortPropsProps> = () => (
  <div>jsx-sort-props</div>
)

// eslint-disable-next-line react/function-component-definition
export function ReactTest2() {
  return (
    <Fragment>
      <div>1</div>
      <div>2</div>
      <JsxSortProps
        // eslint-disable-next-line react/jsx-sort-props
        multiline={() => {
          console.log("multiline")
        }}
        callback={() => "callback"}
        // eslint-disable-next-line react/jsx-sort-props
        isShorthand
        age={10}
      />
    </Fragment>
  )
}
