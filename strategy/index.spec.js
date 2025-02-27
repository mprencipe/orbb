import {getPackagesWithStrategy} from './index.js'

describe('getPackagesWithStrategy', () => {
    it('should return null with unknown strategy', () => {
        expect(getPackagesWithStrategy('foo')).toBeNull()
    })
})
