const { salvarChamados } = require("../utils/storage");

function criarChamado2(chamados,nome,setor, descricao) {
   const  chamadoNovo = {
     id:gerarNovoid(chamados),
        nome:nome,
            setor:setor,
                descricao: descricao,
                  status: "aberto"
   }
  chamados.push(chamadoNovo);
  salvarChamados(chamados);

}

function gerarNovoid (chamados){
   if(chamados.length === 0){
       return 1;
   } 
   
   let maiorId = 0;

   chamados.forEach((chamado)=> {
     if(chamado.id > maiorId){
        maiorId = chamado.id
     }
   });

   return maiorId + 1
 }    



function buscarChamadoporId(chamados, idb){  
     return chamados.find((chamado) => { return chamado.id ===idb; });  }


function resolverChamadosPorId(chamados, idb) {
    const chamadoEncontrado = buscarChamadoporId(chamados, idb);

    if (!chamadoEncontrado) {
        return undefined;
    }

    chamadoEncontrado.status = "resolvido";

    return chamadoEncontrado;
}

//função responsável por deletar chamados
function deletarChamadoporid(chamados, idb) {
  const buscaChamado = chamados.findIndex((buscaridparaexcluir) => buscaridparaexcluir.id === idb)
  return buscaChamado
}





 module.exports = {
    criarChamado2,
    gerarNovoid,
    buscarChamadoporId,
    resolverChamadosPorId,
    deletarChamadoporid
 };