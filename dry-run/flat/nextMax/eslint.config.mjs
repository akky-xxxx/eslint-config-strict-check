import plugin from "../../../out/index.js"

export default [
  {
    languageOptions: {
      parserOptions: {
        project: "dry-run/flat/nextMax/tsconfig.json",
      },
    },
  },
  ...plugin.configs.reactMax,
  {
    files: ["*.tsx"],
  },
]
