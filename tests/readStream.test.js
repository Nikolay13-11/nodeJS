const readStream = require('../readStream')

    let wrongWayToFile = './wrong_input.txt'

 it('tests myFunc with process.exit', () => {
    const mockExit = jest.spyOn(process, 'exit')
        .mockImplementation((number) => { throw new Error('process.exit: ' + number); });
    expect(() => {
        readStream(wrongWayToFile);
    }).toThrow();
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
  });