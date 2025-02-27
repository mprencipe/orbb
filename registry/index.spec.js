import {getPackageNames} from './index.js'

describe('getPackageNames', () => {
    it('should return null with unknown package source', () => {
        expect(getPackageNames('foo')).toBeNull()
    })
})
