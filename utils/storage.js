const fs = require("fs");

function carregarChamados() {
    const conteudoar = fs.readFileSync("chamados.json", "utf-8");
    const dados = JSON.parse(conteudoar);
    return dados;
}

function salvarChamados(chamados) {
    const dadosEmJson = JSON.stringify(chamados, null, 2);
    fs.writeFileSync("chamados.json", dadosEmJson, "utf-8");
}

module.exports = {
    carregarChamados,
    salvarChamados
};