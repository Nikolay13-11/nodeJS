const config = require('../config')

test('Input: User passes the same cli argument twice', () => {
    const testType = atbash('Hello Jest! 1')
    expect(typeof testType).toBe('string')
})
