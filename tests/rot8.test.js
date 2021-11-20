const rot = require('../rot8')

const type0 = 'R0'
const type1 = 'R1'

test('TypeOf return rot', () => {
    expect(typeof rot('Hello Jest! 1', type0)).toBe('string')
    expect(typeof rot('Hello Jest! 1', type1)).toBe('string')
    expect(rot('Hello Jest! 1', type0)).toBeDefined()
    expect(rot('Hello Jest! 1', type1)).toBeDefined()
    expect(rot('A', type0)).toBe('S')
    expect(rot('Z', type1)).toBe('H')
    expect(rot('a', type0)).toBe('s')
    expect(rot('z', type1)).toBe('h')
    expect(rot('г', type0)).toBe('г')
    expect(rot('@', type1)).toBe('@')
})
