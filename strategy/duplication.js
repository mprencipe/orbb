
export function duplicateCharacters(str) {
    const ret = new Set()
    for (let i = 0; i < str.length; i++) {
        const char = str.slice(i, i + 1)
        ret.add(str.slice(0, i) + char  + str.slice(i))
    }
    return Array.from(ret)
}
