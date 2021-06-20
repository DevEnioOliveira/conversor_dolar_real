const axios = require('axios')

const date = new Date()
const dateFormat = (date.getMonth() + 1) + "-" + (date.getDate() - 2) + "-" + (date.getFullYear()) 

const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${dateFormat}'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`

const getCotacaoAPI = () => axios.get(url)
const extractCotacao = (res) => res.data.value[0].cotacaoVenda
const getCotacao = async() => {
    try{
        const res = await getCotacaoAPI('')
        const cotacao = extractCotacao(res)
        return cotacao
    }catch(error) {
        return 'COTAÇÃO NÃO DISPONÍVEL'
    }
    
}

module.exports = {
    getCotacao,
    extractCotacao,
    getCotacaoAPI
}