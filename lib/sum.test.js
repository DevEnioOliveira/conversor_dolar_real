
const soma = require('./sum')

test('somar 4 + 4' , () => {
    expect(soma.soma(4,4)).toBe(8)
})