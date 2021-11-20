const  validState  = require('../validation')

const cipherCode1 = "C1-C1-R0-A";
const cipherCode2 = "C1-C0-A-R1-R0-A-R0-R0-C1-A";
const cipherCode3 = "A-A-A-R1-R0-R0-R0-C1-C1-A";
const cipherCode4 = "C1-R1-C0-C0-A-R0-R1-R1-A-C1";
const cipherCode5 = "C1-R1-C0-C0-A-R0-R1-R1-A-C1-";

describe('Success scenarios', () => {
    test('correct sequence of symbols', () => {
        expect(validState('C1')).toBe(true)
        expect(validState('C0')).toBe(true)
        expect(validState('R1')).toBe(true)
        expect(validState('R0')).toBe(true)
        expect(validState('A')).toBe(true)
    })
    test('Test cipher usage scenarios from first task description ', () => {
        expect(validState(cipherCode1)).toBe(true)
        expect(validState(cipherCode2)).toBe(true)
        expect(validState(cipherCode3)).toBe(true)
        expect(validState(cipherCode4)).toBe(true)
        expect(validState(cipherCode5)).toBe(true)
    })
})