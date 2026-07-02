const prompt = require('prompt-sync')();
const fs = require("fs");
const { json } = require('stream/consumers');
const {carregarChamados, salvarChamados} = require("./utils/storage")

//criando o menu com as opções e  variável opcao





const chamados= carregarChamados();




function menu(){ 
  //exibindo menu para o usuário
 console.log("----------------------")
 console.log("bem vindo usuário ao menu de opções chamado o que desejas fazer?");
 console.log("digite criar para cadastrar novos chamados");
 console.log("digite listar para ver os chamados antigos");
 console.log("digite sair para encerrar o programa");
 console.log("digite buscar para procurar um chamado pelo ID");
 console.log("digite resolver para finalizar um chamado");
 console.log("digite excluir para deletar um chamado");
 console.log("----------------------")

     //parte lógica do sistema de chamados
   const opcao1 = prompt("digite o que desejas fazer: " );
   console.clear();
   return opcao1;
 }



 function criarChamado(){

    let nome, setor, descricao;

       do{ 
           nome = prompt("Nome do colaborador(a): ");
            
           setor = prompt("Qual o seu setor? ");
          
           descricao = prompt("Descrição do problema: ");
           console.clear();
           //exibindo mensagem caso algum camapo esteja vazio

           if( nome.trim() === "" || descricao.trim() === "" || setor.trim() === ""){
            console.log("Algum campo foi preenchido incorretamente. Preencha todos os dados novamente.");
           }
             
           }while( nome.trim() === "" || descricao.trim() === "" || setor.trim() === "")
            

            const chamadoNovo= {
            id:chamados.length +1,
            nome:nome,
            setor:setor,
            descricao: descricao,
            status: "aberto"
}
//cadastrando os chamadados novos no meu array de chamados
    console.clear();
    chamados.push(chamadoNovo)
    salvarChamados(chamados)
    console.log("chamado cadastrado com sucesso");
 }

 function listarChamado (){


    if(chamados.length === 0){
    console.log("não há nenhum chamado cadastrado no sistema")
    } else {
        chamados.forEach((chamado ) => { 
                console.log("----------------------");
                console.log(`id do chamado ${chamado.id}`);
                console.log(`nome do colaborador: ${chamado.nome}`);
                console.log(`setor do colaborador(a): ${chamado.setor}`);
                console.log(`descrição do problema: ${chamado.descricao}`);
                console.log(`status do chamado: ${chamado.status}`);
                console.log("----------------------") })
}
}


function buscarChamado(){
let buscar, idb
          do{ 

            buscar = prompt("digite o id do chamado para o sistema realizar a buscar: ");
            idb = Number(buscar);

            if(buscar.trim()==="" || isNaN(idb))
                console.log("Voce preencheu o campo id de forma inválida, preencha novamente");

        }while(buscar.trim()===""  || isNaN(idb));

            //procura no array o id especificado pelo o usuário
            const achou = chamados.find((chamado) => {
                 return chamado.id ===idb;
            });

            if(achou){
                console.log("chamado encontrado");
                console.log(achou);
            } else{
                console.log("Chamado não encontrado");
            }

}


function resolverChamado(){
let procurart, procurar;

//pede o id do chamado
            do { 
            procurart = prompt("digite o id do chamado: ");
            procurar = Number(procurart);

                if(procurart.trim() === ""  || isNaN(procurar)) { 
                    console.log("o campo id foi preenchido incorretamente. Preencha todos os dados novamente.")
                    }
                 } while(procurart.trim() === "" || isNaN(procurar)  );


//procura os chamados no array
            const buscarchama = chamados.find((chamado) =>{
                if(chamado.id ===procurar){
                      return true
                }
            })

//altera o status do chamado

             if(buscarchama){
                buscarchama.status = "resolvido";
                console.log("o chamado foi resolvido com sucesso")
                console.log(buscarchama);
             } else{
                console.log("o chamado não foi resolvido");
             }

}


function excluirChamado(){

    let idtextecluir, idnumberexcluir

 do{ 
    idtextecluir = prompt("Digite o id do chamado que você deseja exluir: ")
    idnumberexcluir = Number(idtextecluir);

    if(idtextecluir.trim() ==="" || isNaN(idnumberexcluir)){
        console.log("você não preencheu o campo corretamente faça de novo")
    } else {
        let index = chamados.findIndex((buscaridparaexcluir) => buscaridparaexcluir.id === idnumberexcluir)

    if(index!= -1){
        chamados.splice(index, 1);
        salvarChamados(chamados);
        console.log("chamado deletado com sucesso");
    } else {
        console.log("chamado não encontrado");
    }

    }
     }while(idtextecluir.trim()==="" || isNaN(idnumberexcluir));
}



let opcao;

do{
 
opcao = menu();

   switch(opcao){
 
//cria um chamado no sistema   
            case "criar":
            criarChamado();
            break;

//lista todos os chamados no sistema

            case "listar":
            listarChamado();
            break;

//busca todos os chamados no array
            case "buscar":
            buscarChamado();
            break;

//procurando no array um chamado

            case "resolver":
            resolverChamado();
            break;

            case "excluir":
            excluirChamado();
            break;

            case "sair":
            break;

            default:
            console.log("opção invalida, digite outra");
            break;

        

}}while(opcao!="sair")

console.log("programa encerrado com sucesso");

