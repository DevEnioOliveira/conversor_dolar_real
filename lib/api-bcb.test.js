const api = require('./api-bcb')
const axios = require('axios')

const url = require('./api-bcb')

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
    api.getCotacaoAPI('url')
        .then(resp => {
            expect(resp).toEqual(resp)
            expect(axios.get.mock.calls[0][0]).toBe(url.url)
        })
})

test('getExtractCotacao', () => {
    const cotacao = api.extractCotacao({        
            data: {
                value: [
                    { cotacaoVenda: 5.0314 }
                ]
            }      
    })   
    expect(cotacao).toBe(5.0314)
})