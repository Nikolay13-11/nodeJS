const atbash = require('../atabash')


test('TypeOf return atbash', () => {
    const testType = atbash('Hello Jest! 1')
    expect(typeof testType).toBe('string')
})
