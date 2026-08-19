const fs = require("fs");
const caminho = require("path");

const caminhoArquivo = caminho.join(
    __dirname,
    "..",
    "data",
    "chamados.json"
);

console.log("Local do storage:", __dirname);
console.log("Local do json:", caminhoArquivo);

function carregarChamados() {

try { 

    if (!fs.existsSync(caminhoArquivo)) {
            fs.writeFileSync(caminhoArquivo, "[]", "utf-8");
            return [];
        }

        const conteudoarquivo = fs.readFileSync(caminhoArquivo, "utf-8");

        if (conteudoarquivo.trim() === "") {
            return [];
        }

        const dados = JSON.parse(conteudoarquivo);
        return dados;

 } catch(erro){

  return [];
 };
}

function salvarChamados(chamados) {
    const dadosEmJson = JSON.stringify(chamados, null, 2);
    fs.writeFileSync(caminhoArquivo, dadosEmJson, "utf-8");
}



module.exports = {
    carregarChamados,
    salvarChamados
};