const caesar = require('../caesar')

const type0 = 'C0'
const type1 = 'C1'

test('TypeOf return caesar', () => {
    expect(typeof caesar('Hello Jest! 1', type1)).toBe('string')
    expect(typeof caesar('Hello Jest! 1', type0)).toBe('string')
    expect(caesar('Hello Jest! 1', type1)).toBeDefined()
    expect(caesar('Hello Jest! 1', type0)).toBeDefined()
    expect(caesar('A', type1)).toBe('B')
    expect(caesar('A', type0)).toBe('Z')
    expect(caesar('a', type1)).toBe('b')
    expect(caesar('a', type0)).toBe('z')
    expect(caesar('г', type0)).toBe('г')
    expect(caesar('@', type1)).toBe('@')
})
