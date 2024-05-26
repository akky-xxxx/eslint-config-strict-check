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
