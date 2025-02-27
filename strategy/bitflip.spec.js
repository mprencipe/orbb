import {flipBits} from './bitflip.js'

describe('flipBits', () => {
    it('should flip bits of a string deterministically', () => {
        const pkg = 'abc'

        const flipped = flipBits(pkg)

        expect(flipped).toEqual([
            'aba', 'abb', 'abg',
            'abk', 'abs', 'acc',
            'afc', 'ajc', 'arc',
            'cbc', 'ebc', 'ibc',
            'qbc'
        ])
    })
})
