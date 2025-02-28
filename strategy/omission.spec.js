import {omit} from './omission.js'

describe('omit', () => {
    it('should omit characters of a string deterministically', () => {
        const pkg = 'abcdef'

        const omitted = omit(pkg, 2)

        expect(omitted).toEqual([
            'abcd', 'abce', 'abcf',
            'abde', 'abdf', 'abef',
            'acde', 'acdf', 'acef',
            'adef', 'bcde', 'bcdf',
            'bcef', 'bdef', 'cdef',
        ])
    })
})
