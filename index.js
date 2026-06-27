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
chamados.push(chamadosNovos);
console.log("chamado cadastrado com sucesso");
console.clear();
console.log(chamados);

}

}while(opcao!="sair")

console.log("programa encerrado com sucesso");

