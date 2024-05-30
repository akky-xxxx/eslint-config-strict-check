import plugin from "../../../out/index.js"

export default [
  {
    languageOptions: {
      parserOptions: {
        project: "dry-run/flat/typescriptMax/tsconfig.json",
      },
    },
  },
  ...plugin.configs.typescriptMax,
  {
    files: ["*.ts"],
  },
]
