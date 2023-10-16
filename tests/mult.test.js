const mult = require('../src/mult')

it ('should return correct sum', () => {
    const result = mult(3, 5)
    expect(result).toBe(15)
})