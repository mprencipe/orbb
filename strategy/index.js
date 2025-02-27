import * as bitflip from './bitflip.js'

export function getPackagesWithStrategy(strategyName, packageName) {
    if (strategyName === 'bitflip') {
        return bitflip.flipBits(packageName)
    }
    return null
}
