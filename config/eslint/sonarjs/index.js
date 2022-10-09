const { Off } = require("../const")
const { collectiveSetting } = require("../utils/collectiveSetting")

module.exports = {
  plugins: ["sonarjs"],
  extends: ["plugin:sonarjs/recommended"],
  overrides: [
    {
      files: ["**/*.{test,stories}.{ts,tsx}", "**/spy{/**,.ts}", "**/spec/**"],
      rules: collectiveSetting(
        ["sonarjs/no-duplicate-string", "sonarjs/cognitive-complexity"],
        Off,
      ),
    },
  ],
}
