// eslint-disable-next-line jest/consistent-test-it
test("test1", () => {
  expect(1).toBe(1)
})

describe("dry-run", () => {
  // eslint-disable-next-line jest/consistent-test-it
  test("test2", () => {
    expect(1).toBe(1)
  })

  // eslint-disable-next-line jest/consistent-test-it, jest/no-disabled-tests
  test.skip("test3", () => {
    expect(1).toBe(1)
  })
})

describe("nest1", () => {
  describe("nest2", () => {
    describe("nest3", () => {
      describe("nest4", () => {
        describe("nest5", () => {
          describe("nest6", () => {
            describe("nest7", () => {
              describe("nest8", () => {
                describe("nest9", () => {
                  describe("nest10", () => {
                    it("nested it", () => {
                      expect(1).toBe(1)
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
})


// eslint-disable-next-line unicorn/prevent-abbreviations, jest/no-export
export const obj = {
  a: 1,
  c: 1,
  e: 1,
  f: 1,
  b: 1,
  d: 1,
  g: 1,
  i: 1,
  j: 1,
  k: 1,
  l: 1,
  m: 1,
  n: 1,
  o: 1,
  p: 1,
  q: 1,
  r: 1,
  s: 1,
  h: 1,
  t: 1,
  u: 1,
  v: 1,
  w: 1,
  x: 1,
  y: 1,
  z: 1,
}

const sampleFunction = () => {
  const number1 = 1
  const number2 = number1 + 1
  const number3 = number2 + 1
  const number4 = number3 + 1
  const number5 = number4 + 1
  const number6 = number5 + 1
  const number7 = number6 + 1
  const number8 = number7 + 1
  const number9 = number8 + 1
  const number10 = number9 + 1
  const number11 = number10 + 1
  const number12 = number11 + 1
  const number13 = number12 + 1
  const number14 = number13 + 1
  const number15 = number14 + 1
  const number16 = number15 + 1
  const number17 = number16 + 1
  const number18 = number17 + 1
  const number19 = number18 + 1
  const number20 = number19 + 1

  const number21 = number20 && (Math.random() * 10) / 2 === 1
  const number22 = number21 && (Math.random() * 10) / 2 === 1
  const number23 = number22 && (Math.random() * 10) / 2 === 1
  const number24 = number23 && (Math.random() * 10) / 2 === 1
  const number25 = number24 && (Math.random() * 10) / 2 === 1
  const number26 = number25 && (Math.random() * 10) / 2 === 1
  const number27 = number26 && (Math.random() * 10) / 2 === 1
  const number28 = number27 && (Math.random() * 10) / 2 === 1
  const number29 = number28 && (Math.random() * 10) / 2 === 1
  const number30 = number29 && (Math.random() * 10) / 2 === 1
  const number31 = number30 && (Math.random() * 10) / 2 === 1
  const number32 = number31 && (Math.random() * 10) / 2 === 1
  const number33 = number32 && (Math.random() * 10) / 2 === 1
  const number34 = number33 && (Math.random() * 10) / 2 === 1
  const number35 = number34 && (Math.random() * 10) / 2 === 1
  const number36 = number35 && (Math.random() * 10) / 2 === 1
  const number37 = number36 && (Math.random() * 10) / 2 === 1
  const number38 = number37 && (Math.random() * 10) / 2 === 1
  const number39 = number38 && (Math.random() * 10) / 2 === 1
  const number40 = number39 && (Math.random() * 10) / 2 === 1

  console.log(number20, number40)
}

console.log(obj, sampleFunction)
console.log(undefined)
