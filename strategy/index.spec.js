import {getStrategy} from './index.js'

describe('getStrategy', () => {
    it('should return null with unknown strategy', () => {
        expect(getStrategy('foo')).toBeNull()
    })
})
