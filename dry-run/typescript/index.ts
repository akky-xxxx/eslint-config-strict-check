/* eslint-disable no-console, max-lines */
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { PathLike } from "fs"

/**
 * @remarks
 * for checking apply if eslint-plugin-react
 */

// eslint-disable-next-line max-statements
export const javascriptTest1 = () => {
  const state0 = Math.random()
  const state1 = Math.random()
  const state2 = Math.random()
  const state3 = Math.random()
  const state4 = Math.random()
  const state5 = Math.random()
  const state6 = Math.random()
  const state7 = Math.random()
  const state8 = Math.random()
  /* eslint-disable unicorn/numeric-separators-style, no-magic-numbers */
  const array = [
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
    1000000000000,
  ]
  /* eslint-enable unicorn/numeric-separators-style, no-magic-numbers */

  return [
    state0,
    state1,
    state2,
    state3,
    state4,
    state5,
    state6,
    state7,
    state8,
    array,
  ]
}

// eslint-disable-next-line consistent-return
export const depthFunction = () => {
  /* eslint-disable no-restricted-syntax */
  for (const item1 of [""]) {
    for (const item2 of [""]) {
      for (const item3 of [""]) {
        // eslint-disable-next-line max-depth
        if (item3 === "example") {
          return { item1, item2, item3 }
        }
      }
    }
  }
  /* eslint-enable no-restricted-syntax */
}

const Zero = 0
// eslint-disable-next-line complexity
export const javascriptTest2 = () => {
  if (Math.random() === Zero) return Zero
  if (Math.random() === Zero) return Zero
  if (Math.random() === Zero) return Zero
  if (Math.random() === Zero) return Zero
  if (Math.random() === Zero) return Zero
  const a: number | unknown = 1
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return a as number
}

export const javascriptObjectTest = {
  three: "three",
  two: "two",
  // eslint-disable-next-line sort-keys
  one: "one",

  five: "five",
  // eslint-disable-next-line quotes
  four: 'four',
  // eslint-disable-next-line no-undefined
  six: undefined,
}

// eslint-disable-next-line @typescript-eslint/array-type
export type TestArray = Array<string>

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export type TestObject = {
  [K: string]: string
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface testInterface {
  text: string
}

export type TestType = PathLike

// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
export const log = console.log("")

try {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const random = Math.random()
  // eslint-disable-next-line unicorn/prevent-abbreviations, unicorn/catch-error-name, @typescript-eslint/no-implicit-any-catch
} catch (e) {
  console.error(e)
}

export const conditionTest = () => {
  const isTest = true
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-boolean-literal-compare, @typescript-eslint/no-unnecessary-condition
  return isTest === true
}

function testFunction<T = number>(argument: T) {
  return argument
}
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-arguments
testFunction<number>(Zero)

// eslint-disable-next-line unicorn/prefer-string-starts-ends-with, @typescript-eslint/prefer-string-starts-ends-with
const result = /^bar/.test("test")
console.log(result)

// eslint-disable-next-line @typescript-eslint/sort-type-union-intersection-members
export type testType = "B" | "A"
