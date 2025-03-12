import * as bitflip from './bitflip.js'
import * as omit from './omission.js'
import * as dupe from './duplication.js'

export function getStrategy(strategyName, log) {
    if (strategyName === 'bitflip') {
        return (packageName) => bitflip.flipBits(packageName)
    } else if (/^o\d+$/.test(strategyName)) {
        const omitN = parseInt(strategyName.slice(1))
        return (packageName) => {
            if (omitN >= packageName.length) {
                log.error('Omit count should be less than package name length')
                process.exit(1)
            }
            return omit.omit(packageName, omitN)
        }
    } else if (strategyName === 'duplication') {
        return (packageName) => dupe.duplicateCharacters(packageName)
    }
    return null
}
