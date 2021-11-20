const writeStream = require('../writeStream')

    let wrongWayToFile = './teste.txt'

 test('tests myFunc with process.exit', () => {
    const mockExit = jest.spyOn(process, 'exit')
        .mockImplementation((number) => { throw new Error('process.exit: ' + number); });
    expect(() => {
        writeStream(wrongWayToFile);
    }).toThrow();
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
  });