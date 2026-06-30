const prompt = require('prompt-sync')();

//criado o objeto chamado
const chamados= [];

//criando o menu com as opções e  variável opcao
let opcao;

do{
    //exibindo menu para o usuário
 console.log("----------------------")
 console.log("bem vindo usuário ao menu de opções chamado o que desejas fazer?");
 console.log("digite criar para cadastrar novos chamados");
 console.log("digite listar para ver os chamados antigos");
 console.log("digite sair para encerrar o programa");
 console.log("digite buscar para procurar um chamado pelo ID");
 console.log("digite resolver para finalizar um chamado");
 console.log("----------------------")

     //parte lógica do sistema de chamados
   opcao =prompt("digite o que desejas fazer: " );
   console.clear();


   switch(opcao){
    
     case "criar":
        let nome, setor, descricao;
       do{ 
           nome = prompt("Nome do colaborador(a): ");
            
           setor = prompt("Qual o seu setor? ");
          
           descricao = prompt("Descrição do problema: ");
           console.clear();
             
           }while( nome.trim() === "" || descricao.trim() === "" || setor.trim() === "")
            

            const chamadosNovos= {
            id:chamados.length +1,
            nome:nome,
            setor:setor,
            descricao: descricao,
            status: "aberto"
}
//cadastrando os chamadados novos no meu array de chamados
    console.clear();
    chamados.push(chamadosNovos);
    console.log("chamado cadastrado com sucesso");
    break;

//lista todos os chamados no sistema

    case "listar":
      chamados.forEach((chamado) => { 
        if(chamados.length===0){
            console.log("não há nenhum chamado cadastrado no sistema");
            } else {
                console.log("----------------------");
                console.log(`id do chamado ${chamado.id}`);
                console.log(`nome do colaborador: ${chamado.nome}`);
                console.log(`setor do colaborador(a): ${chamado.setor}`);
                console.log(`descrição do problema: ${chamado.descricao}`);
                console.log(`status do chamado: ${chamado.status}`);
                console.log("----------------------")
                 } }) 
         break;
//busca todos os chamados no array
                case "buscar":
            const buscar = prompt("digite o id do chamado para o sistema realizar a buscar: ");
            let idb = Number(buscar);
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
              break;

//procurando no array um chamado

              case "resolver":

            const procurart = prompt("digite o id do chamado: ");
            let procurar = Number(procurart);

            const resolverChamado = chamados.find((chamado) =>{
                if(chamado.id ===procurar){
                      return true
                }
            })

             if(resolverChamado){
                resolverChamado.status = "resolvido";
                console.log("o chamado foi resolvido com sucesso")
                console.log(resolverChamado);
             } else{
                console.log("o chamado não foi resolvido");
             }
             break;

    default:
        console.log("opção invalida, digite outra");
        break;

        

}}while(opcao!="sair")

console.log("programa encerrado com sucesso");

