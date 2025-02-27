function isASCII(str) {
  return /^[a-z]*$/.test(str)
}

function asciiToBinary(s) {
  return s
    .split("")
    .map((c) => c.charCodeAt(0).toString(2).padStart(8, "0"))
    .join(" ")
}

function binaryToAscii(binaryString) {
  return binaryString
    .split(" ")
    .map((binaryString) => String.fromCharCode(parseInt(binaryString, 2)))
    .join("")
}

function findFlippableBits(bitparam, binaryStrSplit) {
  const ret = []
  binaryStrSplit.forEach((character, charidx) => {
    character.split("").forEach((bit, byteidx) => {
      if (bit === String(bitparam)) {
        const flipped =character.slice(0, byteidx) + String(bitparam ^ 1) + character.slice(byteidx + 1)
        const flippedAscii = binaryToAscii(flipped)
        if (flippedAscii === flippedAscii.toLowerCase() && isASCII(flippedAscii)) {
          ret.push([charidx, flipped])
        }
      }
    })
  })
  return ret
}

export function flipBits(str) {
    const binarystr = asciiToBinary(str)
    const binaryStrSplit = binarystr.split(" ")

    const flippedOnes = findFlippableBits(1, binaryStrSplit)
    const flippedZeros = findFlippableBits(0, binaryStrSplit)

    const ret = flippedOnes.concat(flippedZeros).map((fo) => {
      return binaryToAscii(binaryStrSplit
        .slice(0, fo[0])
        .concat([fo[1]])
        .concat(binaryStrSplit.slice(fo[0] + 1))
        .join(" "))
    })
    ret.sort()
    return ret
}
