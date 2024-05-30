import plugin from "../../../out/index.js"

export default [
  {
    languageOptions: {
      parserOptions: {
        project: "dry-run/flat/typescript/tsconfig.json",
      },
    },
  },
  ...plugin.configs.typescript,
  {
    files: ["*.ts"],
  },
]
