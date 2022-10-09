const fs = require("fs")
const childProcess = require("child_process")

const rootName = "@lint-settings/"
const packageJson = JSON.parse(fs.readFileSync("package.json").toString())
const packageName = packageJson.name.replace(rootName, "")
const version = `v${packageJson.version}`
const commands = [
  `git tag -a ${packageName}/${version} -m "${version} of ${packageName}"`,
  `git push origin tags/${packageName}/${version}`,
]

commands.forEach((command) => {
  childProcess.execSync(command)
})
