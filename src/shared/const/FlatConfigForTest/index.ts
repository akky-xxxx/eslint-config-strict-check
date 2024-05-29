import { getCompatExtends } from "../../utils/getCompatExtends"

import type { EslintFlatConfig } from "../../types/EslintFlatConfig"

export const FlatConfigForTest: EslintFlatConfig[] = [
  ...getCompatExtends("plugin:jest/recommended", "plugin:jest/style"),
] as const
