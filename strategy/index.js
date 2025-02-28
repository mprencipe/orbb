import * as bitflip from './bitflip.js'
import * as omit from './omission.js'

export function getPackagesWithStrategy(strategyName, packageName, log) {
    if (strategyName === 'bitflip') {
        return bitflip.flipBits(packageName)
    } else if (/^o\d+$/.test(strategyName)) {
        const omitN = parseInt(strategyName.slice(1))
        if (omitN >= packageName.length) {
            log.error('Omit count should be less than package name length')
            process.exit(1)
        }
        return omit.omit(packageName, omitN)
    }
    return null
}
