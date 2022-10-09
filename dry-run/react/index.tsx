/* eslint-disable complexity, no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Fragment } from "react"

import type { FC, ReactNode } from "react"

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
  return (
    // eslint-disable-next-line react/jsx-fragments
    <>
      <div>1</div>
      <div>2</div>
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
