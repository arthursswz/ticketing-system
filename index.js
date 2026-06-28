const prompt = require('prompt-sync')();

//criado o objeto chamado
const chamados= [];

//criando o menu com as opções e  variável opcao
let opcao;
let i = 0;

do{
    //exibindo menu para o usuário
 console.log("----------------------")
 console.log("bem vindo usuário ao menu de opções chamado o que desejas fazer?");
 console.log("digite criar para cadastrar novos chamados");
 console.log("digite listar para ver os chamados antigos");
 console.log("digite sair para encerrar o programa");
 console.log("----------------------")

     //parte lógica do sistema de chamados
   opcao =prompt("digite o que desejas fazer: " );
   console.clear();


   switch(opcao){
     case "criar":
           const nome = prompt("Nome do colaborador(a): ");
           const setor = prompt("Qual o seu setor? ");
           const descricao =prompt("Descrição do problema: ");
            

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
        if(chamados.length!=0){
            for(i=0; i<chamados.length;i++){
                console.log(`id do chamado ${chamados[i].id}`);
                console.log(`nome do colaborador: ${chamados[i].nome}`);
                console.log(`setor do colaborador(a): ${chamados[i].setor}`);
                console.log(`descrição do problema: ${chamados[i].descricao}`);
                console.log(`status do chamado: ${chamados[i].status}`);
            } 
            } else{
                console.log("não há nenhum chamado cadastrado no sistema");
            }
         break;

 
        }

}while(opcao!="sair")

console.log("programa encerrado com sucesso");

