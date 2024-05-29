import plugin from "../../../out/index.js"

export default [
  {
    languageOptions: {
      parserOptions: {
        project: "dry-run/flat/typescript/tsconfig.json",
      },
    },
  },
  ...plugin.default.configs.typescript,
  {
    files: ["*.ts"],
  },
]
