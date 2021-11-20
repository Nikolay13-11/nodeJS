const readStream = require('../readStream')

    let wrongPathToFile = './wrong_input.txt'
    let correctPathToFile = './input.txt'

 test('tests myFunc with process.exit', () => {
    const mockExit = jest.spyOn(process, 'exit')
        .mockImplementation((number) => { throw new Error('process.exit: ' + number); });
    expect(() => {
        readStream(wrongPathToFile);
    }).toThrow();
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
  });
