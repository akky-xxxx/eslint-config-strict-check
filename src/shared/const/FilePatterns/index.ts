export const FilePatterns = {
  STORY: ["**/{stories,story}/**", "**/*.{stories,story}.*"],
  TEST: ["**/{spec,test}/**", "**/*.{spec,test}.*"],
} as const satisfies Record<Uppercase<string>, string[]>
