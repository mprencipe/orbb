function printCurrentDateTime() {
    const date = new Date()
    const year = date.getFullYear()
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    return `${year}-${day}-${month}T${hours}:${minutes}:${seconds}`
}

export function createLogger(verbose) {
    const log = verbose ? (msg, logLevel) => console.log(`${printCurrentDateTime()} ${logLevel} - ${msg}`) : (msg) => console.log(msg)
    return {
        debug: (msg) => {
            if (verbose) {
                log(msg, 'DEBUG')
            }
        },
        error: (msg) => {
            log(msg, 'ERROR')
        },
        info: (msg) => {
            log(msg, 'INFO')
        },
    }
}
