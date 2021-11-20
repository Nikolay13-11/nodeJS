const configFunction = require('../config')
// const { clearFunc } = config

describe('Error scenarios', () => {
    test('Input: User passes the same cli argument twice', () => {
        let processArgv = 'node index -c C1-C1-A-R0 -c C0'.split(' ');
        let processArgv2 = 'node index -c C1-C1-A-R0 -i "./input.txt" -i "./input.txt" -o "./output.txt' .split(' ');
        let processArgv3 = 'node index -c C1-C1-A-R0 -i "./input.txt" -o "./output.txt -o "./output.txt' .split(' ');
        expect(() => configFunction(processArgv)).toThrow("You provided -c argument more than once")
        expect(() => configFunction(processArgv)).toThrow()
        expect(() => configFunction(processArgv2)).toThrow("You provided -i argument more than once")
        expect(() => configFunction(processArgv2)).toThrow()
        expect(() => configFunction(processArgv3)).toThrow("You provided -o argument more than once")
        expect(() => configFunction(processArgv3)).toThrow()
    })
    test(`User doesn't pass -c or --config argument`, () => {
        let processArgv = 'node index_cli C1-C0-A-R1-R0-A-R0-R0-C1-A -i ./input.txt -o ./output.txt'.split(' ');
        expect(() => configFunction(processArgv)).toThrow(`config wasn't pass`)
        expect(() => configFunction(processArgv)).toThrow()
    })
    test(`pass wrong argument`, () => {
        let processArgv = 'node index -c C1-C-A1-R1-R0-A-R0-R0-C1-A -i ./input.txt -o ./output.txt'.split(' ');
        expect(() => configFunction(processArgv)).toThrow(`pass wrong config`)
        expect(() => configFunction(processArgv)).toThrow()
    })
})

describe('Success scenarios', () => {
    test(`User pass correct data`, () => {
        let processArgvTrue = 'node index -c C1-C0-A-R1-R0-A-R0-R0-C1-A -i ./input.txt -o ./output.txt'.split(' ');
        let correctConfig = {
            config: 'C1-C0-A-R1-R0-A-R0-R0-C1-A',
            input: './input.txt',
            output: './output.txt'
          }
        expect(configFunction(processArgvTrue)).toEqual(correctConfig)
    })
})

