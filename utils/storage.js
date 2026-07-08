const fs = require("fs");

function carregarChamados() {

try { 

    if (!fs.existsSync("chamados.json")) {
            fs.writeFileSync("chamados.json", "[]", "utf-8");
            return [];
        }

        const conteudoar = fs.readFileSync("chamados.json", "utf-8");

        if (conteudoar.trim() === "") {
            return [];
        }

        const dados = JSON.parse(conteudoar);
        return dados;

 } catch(erro){

  return [];
 };
}

function salvarChamados(chamados) {
    const dadosEmJson = JSON.stringify(chamados, null, 2);
    fs.writeFileSync("chamados.json", dadosEmJson, "utf-8");
}



module.exports = {
    carregarChamados,
    salvarChamados
};