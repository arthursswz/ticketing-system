const { salvarChamados } = require("../utils/storage");

function criarChamado2(chamados,nome,setor, descricao) {

//responsável por normalizar o texto
const nomenormalizado = nome.trim();
const setornormalizado = setor.trim();
const descricaonormalizada = descricao.trim();


if(
  nomenormalizado.trim() === "" || 
  setornormalizado.trim()===""|| 
  descricaonormalizada.trim() ==="" ){
   return undefined;
 }



//guarda os dados no objeto chamado novo

const  chamadoNovo = {
  id:gerarNovoid(chamados),
     nome:nomenormalizado,
         setor:setornormalizado,
             descricao: descricaonormalizada,
               status: "aberto"
}


//momento em que o o chamado é colocado no array
  chamados.push(chamadoNovo);
//array salvo no arquivo json
  salvarChamados(chamados);

  return chamadoNovo;

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

    if(buscaChamado!=-1){
        chamados.splice(buscaChamado, 1);
        salvarChamados(chamados);
        return true
    } else {
        return false
    }

}





 module.exports = {
    criarChamado2,
    gerarNovoid,
    buscarChamadoporId,
    resolverChamadosPorId,
    deletarChamadoporid
 };