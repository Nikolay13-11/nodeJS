const configFunction = require('../config')
// // const { clearFunc } = config

describe('Error scenarios', () => {
    test('Input: User passes the same cli argument twice', () => {
        let processArgv = 'node my_caesar_cli -c C1-C1-A-R0 -c C0'.split(' ');
        expect(() => configFunction(processArgv)).toThrow("You provided -c argument more than once")
        expect(() => configFunction(processArgv)).toThrow()
    })
    test(`User doesn't pass -c or --config argument`, () => {
        let processArgv = 'node my_caesar_cli C1-C0-A-R1-R0-A-R0-R0-C1-A -i ./input.txt -o ./output.txt'.split(' ');
        expect(() => configFunction(processArgv)).toThrow(`config wasn't pass`)
        expect(() => configFunction(processArgv)).toThrow()
    })
    test(`pass wrong argument`, () => {
        let processArgv = 'node my_caesar_cli -c C1-C-A1-R1-R0-A-R0-R0-C1-A -i ./input.txt -o ./output.txt'.split(' ');
        expect(() => configFunction(processArgv)).toThrow(`pass wrong config`)
        expect(() => configFunction(processArgv)).toThrow()
    })
})




