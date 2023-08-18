const express = require('express');
const { imoveis } = require('./dados/imoveis')
const { procura, lista } = require('./controladores/imoveis')

const rotas = express();

rotas.get('/imoveis', lista);

rotas.get('/imoveis/:id', procura);


module.exports = rotas;