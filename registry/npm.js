import * as fs from 'fs'

export function getNpmPackageNames() {
  return JSON.parse(fs.readFileSync('node_modules/all-the-package-names/names.json'))
}
