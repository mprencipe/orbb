import { parseArgs } from 'util'
import {getPackageNames} from './registry/index.js'
import {getStrategy} from './strategy/index.js'
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
            multiple: true,
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

if (!values.strategy.length) {
    log.error('Please provide a strategy with the -s flag')
    process.exit(1)
}
log.debug(`Strategy: ${values.strategy}`)

const strategies = values.strategy.map(s => ({name: s, fn: getStrategy(s, log)}))
const allStrategyPackages = strategies.reduce((acc, s) => {
    if (!s.fn) {
        log.error(`Unknown or missing strategy ${s.name}`)
        process.exit(1)
    }
    acc[s.name] = s.fn(values.package)
    return acc
}, {})

if (values.registry) {
    for (const [strategy, strategyPackages] of Object.entries(allStrategyPackages)) {
        const strategyPackagesSet = new Set(strategyPackages)
        const foundPackages = packages.filter((pkg) => strategyPackagesSet.has(pkg))
        const printPackages = foundPackages.length ? foundPackages.join('\n') : '-'
        log.info(`Found packages in registry "${values.registry}" using strategy "${strategy}": \n${printPackages}\n`)
    }
} else {
    log.info(`No package registry specified, dumping permutations of strategy "${values.strategy}":\n`)
    for (const [strategy, strategyPackages] of Object.entries(allStrategyPackages)) {
        const printPackages = strategyPackages.length ? strategyPackages.join('\n') : '-'
        log.info(`Strategy ${strategy}: \n${printPackages}\n`)
    }
}
