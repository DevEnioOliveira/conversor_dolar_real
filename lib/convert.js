const convert = (cotacao,quantidade) => {
    let valueConverted = cotacao * quantidade;
    return toMoney(valueConverted);
}

const toMoney = (valor) => {
    return 'R$: ' + valor.toFixed(2);
}

module.exports  = {
    convert,
    toMoney
}