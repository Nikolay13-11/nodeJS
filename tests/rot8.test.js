const rot = require('../rot8')

const type0 = 'R0'
const type1 = 'R1'

test('TypeOf return rot', () => {
    expect(typeof rot('Hello Jest! 1', type0)).toBe('string')
    expect(typeof rot('Hello Jest! 1', type1)).toBe('string')
})
