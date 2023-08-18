const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let jogadorDaVez = 0;

const vezDeJogar = ((req, res) => {
    const nomeJogador = jogadores[jogadorDaVez];

    jogadorDaVez++;

    if (jogadorDaVez >= jogadores.length) {
        jogadorDaVez = 0;
    }

    return res.send(`É a vez de ${nomeJogador} jogar!`);
})

const consultar = ((req, res) => {
    return res.send(jogadores);
})

const remover = ((req, res) => {
    const indiceDoArray = Number(req.query.indice);
    if (indiceDoArray >= jogadores.length) {
        return res.send(`Não existe jogador no índice informado (${indiceDoArray}) para ser removido.`);
    }
    jogadores.splice(indiceDoArray, 1);
    return res.send(jogadores);

})

const adicionar = ((req, res) => {
    const indiceDoArry = Number(req.query.indice);
    let novoJogador = req.query.nome;
    nomeJogador = `${novoJogador[0].toUpperCase()}${novoJogador.slice(1).toLowerCase()}`
    if (!indiceDoArry) {
        jogadores.push(nomeJogador);
        return res.send(jogadores);
    } if (indiceDoArry >= jogadores.length) {
        return res.send(`O índice informado (${indiceDoArry}) não existe para ser adicionado.`)
    }
    jogadores.splice(indiceDoArry, 0, nomeJogador);
    return res.send(jogadores);
})

module.exports = {
    vezDeJogar,
    consultar,
    remover,
    adicionar
}