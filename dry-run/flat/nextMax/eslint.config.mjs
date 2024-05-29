import plugin from "../../../out/index.js"

export default [
  {
    languageOptions: {
      parserOptions: {
        project: `${import.meta.dirname}/tsconfig.json`,
      },
    },
  },
  ...plugin.default.configs.reactMax,
  {
    files: ["*.tsx"],
  },
]
