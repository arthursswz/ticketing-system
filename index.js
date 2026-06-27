const prompt = require('prompt-sync')();

//criado o objeto chamado
const chamados= [{
    id:Number,
    nome:String,
    setor:String,
    descricao:String,
    status:String
}]

//criando o menu com as opções e  variável opcao
let opcao;

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
   switch(opcao){
     case "criar":
        chamados.forEach((chamado) =>{
          chamados.nome = prompt("Nome do colaborador(a): ");
          chamados.setor = prompt("Qual o seu setor? ");
          chamados.descricao = prompt("Descrição do problema: ");
        })
   }

}while(opcao!="sair")

console.log("programa encerrado com sucesso");

