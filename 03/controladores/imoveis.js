const imoveis = require('../dados/imoveis.js')


const lista = ((req, res) => {
    return res.json(imoveis);
})
const procura = ((req, res) => {
    const { id } = req.params

    const imovel = imoveis.find((item) => {
        return item.id === Number(id)
    })
    return res.json(imovel);
})
module.exports = {
    procura,
    lista
};