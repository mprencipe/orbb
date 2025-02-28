import {duplicateCharacters} from './duplication.js'

describe('duplicateCharacters', () => {
    it('should duplicate characters of a string deterministically', () => {
        const pkg = 'abdcefghij'

        const duplicated = duplicateCharacters(pkg)

        expect(duplicated).toEqual([
            'aabdcefghij', 'abbdcefghij', 'abddcefghij',
            'abdccefghij', 'abdceefghij', 'abdceffghij',
            'abdcefgghij', 'abdcefghhij', 'abdcefghiij',
            'abdcefghijj'
        ])
    })
})
