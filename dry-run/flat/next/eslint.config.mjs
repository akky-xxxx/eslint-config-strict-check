import plugin from "../../../out/index.js"

export default [
  {
    languageOptions: {
      parserOptions: {
        project: "dry-run/flat/next//tsconfig.json",
      },
    },
  },
  ...plugin.default.configs.react,
  {
    files: ["*.ts"],
  },
]
