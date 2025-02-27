import * as npm from './npm.js'

export function getPackageNames(packageSource) {
    if (packageSource === 'npm') {
        return npm.getNpmPackageNames()
    }
    return null
}
