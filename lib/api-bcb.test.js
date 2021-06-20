const api = require('./api-bcb')
const axios = require('axios')

jest.mock('axios')

test('getCotacaoAPI',()  => {
    const res = {
        data: {
            value: [
                { cotacaoVenda: 5.0314 }
            ]
        }
    }
    axios.get.mockResolvedValue(res)
    api.getCotacaoAPI('06-18-2021')
        .then(resp => {
            expect(resp).toEqual(resp)
        })
})