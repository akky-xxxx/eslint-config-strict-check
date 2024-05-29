import eslintPluginStrictCheck from "eslint-plugin-strict-check"

import { getCompatExtends } from "../../utils/getCompatExtends"

import type { EslintFlatConfig } from "../../types/EslintFlatConfig"

export const FlatConfigForReact: EslintFlatConfig[] = [
  eslintPluginStrictCheck.configs.react,
  ...getCompatExtends("plugin:react/jsx-runtime", "plugin:react/recommended"),
  ...getCompatExtends("eslint-config-airbnb", "eslint-config-airbnb/hooks"),
] as const
