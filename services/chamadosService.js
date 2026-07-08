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

 module.exports = {
    gerarNovoid,
    buscarChamadoporId
 };