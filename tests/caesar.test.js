const caesar = require('../caesar')

const type0 = 'C0'
const type1 = 'C1'


test('TypeOf return caesar', () => {
    expect(typeof caesar('Hello Jest! 1', type1)).toBe('string')
    expect(typeof caesar('Hello Jest! 1', type0)).toBe('string')
})
