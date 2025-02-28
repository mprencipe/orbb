import { parseArgs } from 'util'
import {getPackageNames} from './registry/index.js'
import {getPackagesWithStrategy} from './strategy/index.js'
import {createLogger} from './log.js'

const BANNER = `
      ~The supply attack chain tool~
 ::::::::  :::::::::  :::::::::  :::::::::
:+:    :+: :+:    :+: :+:    :+: :+:    :+:
+:+    +:+ +:+    +:+ +:+    +:+ +:+    +:+
+#+    +:+ +#++:++#:  +#++:++#+  +#++:++#+
+#+    +#+ +#+    +#+ +#+    +#+ +#+    +#+
#+#    #+# #+#    #+# #+#    #+# #+#    #+#
 ########  ###    ### #########  #########

 `

console.log(BANNER)

const opts = {
    options: {
        package: {
            type: 'string',
            short: 'p',
            description: 'Package name to search from registry',
        },
        registry: {
            type: 'string',
            short: 'r',
            description: 'Package registry: currently only "npm"',
        },
        strategy: {
            type: 'string',
            short: 's',
            description: 'Permutation strategy: currently only "bitflip"',
        },
        verbose: {
            type: 'boolean',
            short: 'v',
        },
    },
    allowPositionals: false,
}
const values = parseArgs(opts).values

const verbose = values.verbose || false
const log = createLogger(verbose)

if (!values.package) {
    log.error('Please provide a package name with the -p flag')
    process.exit(1)
}
log.debug(`Package: ${values.package}`)

log.debug(`Registry: ${values.registry}`)

const packages = getPackageNames(values.registry)
if (!packages) {
    log.debug('No package registry specified')
}

if (!values.strategy) {
    log.error('Please provide a strategy with the -s flag')
    process.exit(1)
}
log.debug(`Strategy: ${values.strategy}`)

const strategyPackages = getPackagesWithStrategy(values.strategy, values.package, log)
if (!strategyPackages) {
    log.error('Unknown or missing strategy')
    process.exit(1)
}
if (values.registry) {
    log.info(`Found packages in registry "${values.registry}" using strategy "${values.strategy}":`)
    // find all packages in packages array that are in foundPackages
    const strategyPackagesSet = new Set(strategyPackages)
    packages.forEach((pkg) => {
        if (strategyPackagesSet.has(pkg)) {
            log.info(pkg)
        }
    })
} else {
    log.info(`No package registry specified, dumping permutations of strategy "${values.strategy}":`)
    strategyPackages.forEach((pkg) => {
        log.info(pkg)
    })
}
