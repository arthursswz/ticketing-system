const { retornaChamadosServidor, 
    criarChamado2 } = require("./services/chamadosService");
const http = require("http");



const server = http.createServer((request, response) => {
    if (request.url === "/chamados" && request.method === "GET") {
        response.statusCode = 200;
        response.end(JSON.stringify(retornaChamadosServidor()));
       console.log(request.method);
    
    } else if(request.url == "/chamados" && request.method === "POST") {
        let dados;

         let corpo = "";
         request.on("data",(pedaco) => {
            corpo += pedaco;
         });
   
      request.on("end", () => {
      try { dados = JSON.parse(corpo);    
    } catch(erro){
        response.statusCode = 400
        response.end("dados invalidos passados");
        return;
    }

    const chamados = retornaChamadosServidor();

    const novoChamado = criarChamado2(
    chamados,
    dados.nome,
    dados.setor,
    dados.descricao
    );

    if(novoChamado != undefined){
      const novoChamadotxt = JSON.stringify(novoChamado)
      //retorna código 201 com a requisição sendo aceita pelo servidor
      response.statusCode = 201;
      console.log(dados);
      response.end(novoChamadotxt);   
    } else{
        response.statusCode = 400;
        response.end("dados enviados incorretos");
    }
      });
         
    } 
    else {
        response.statusCode = 404;
        response.end("Erro 404: Página não encontrada");
     }
});



server.listen(3000, () => {
    console.log("Servidor iniciado!");
});