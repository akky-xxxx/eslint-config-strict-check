import { getCompatExtends } from "../../utils/getCompatExtends"

import type { EslintFlatConfig } from "../../types/EslintFlatConfig"

export const FlatConfigForStorybook: EslintFlatConfig[] = [
  ...getCompatExtends(
    "plugin:storybook/addon-interactions",
    "plugin:storybook/csf",
    "plugin:storybook/csf-strict",
    "plugin:storybook/recommended",
  ),
] as const
