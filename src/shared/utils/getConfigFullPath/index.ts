import path from "path"

type GetConfigFullPath = (
  directoryName: string,
) => (configRelativePath: string) => string

export const getConfigFullPath: GetConfigFullPath =
  (directoryName) => (configRelativePath) =>
    path.resolve(directoryName, configRelativePath)
