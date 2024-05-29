import plugin from "../../../out/index.js"

export default [
  {
    languageOptions: {
      parserOptions: {
        project: "dry-run/flat/react/tsconfig.json",
      },
    },
  },
  ...plugin.configs.react,
  {
    files: ["*.ts"],
  },
]
