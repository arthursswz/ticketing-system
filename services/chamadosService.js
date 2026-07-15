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


function deletarChamadoporid(chamados, idb) {
  const buscaChamado = chamados.findIndex((buscaridparaexcluir) => buscaridparaexcluir.id === idb)
  return buscaChamado
}





 module.exports = {
    gerarNovoid,
    buscarChamadoporId,
    resolverChamadosPorId,
    deletarChamadoporid
 };