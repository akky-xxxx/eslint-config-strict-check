import plugin from "../../../out/index.js"

export default [
  {
    languageOptions: {
      parserOptions: {
        project: "dry-run/flat/reactMax/tsconfig.json",
      },
    },
  },
  ...plugin.default.configs.reactMax,
  {
    files: ["*.tsx"],
  },
]
