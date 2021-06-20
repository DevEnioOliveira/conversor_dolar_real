const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser')

const convert = require('./lib/convert')

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

const port = process.env.PORT || 3000;
const api_bcb = require('./lib/api-bcb');


app.get('/', async( req, res) => {
    const cotacao = await api_bcb.getCotacao()
    res.render('home', {
        cotacao
    })
})

app.get('/cotacao', async(req,res) => {

    const { cotacao, quantidade} = req.query;
    const conversao = convert.convert(cotacao,quantidade)

   if(cotacao && quantidade) {
        res.render('cotacao', {
            error: false,
            cotacao: cotacao,
            quantidade: quantidade,
            conversao: conversao
        })
   }else{
       res.render('cotacao', {
           error: 'Erro! Valores vazios'
       })
   }
       
})


app.listen(port, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log('Servidor rodando na porta: ' + port)
    }
})