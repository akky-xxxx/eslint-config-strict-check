const { consistentTestIt } = require("./configs/consistentTestIt")

module.exports = {
  plugins: ["jest"],
  rules: {
    "jest/consistent-test-it": consistentTestIt,
  },
}
