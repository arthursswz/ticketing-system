const { retornaChamadosServidor, 
    criarChamado2 } = require("./services/chamadosService");
const http = require("http");



const server = http.createServer((request, response) => {
    if (request.url === "/chamados" && request.method === "GET") {
        response.statusCode = 200;
        response.end(JSON.stringify(retornaChamadosServidor()));
       console.log(request.method);
    
    } else if(request.url == "/chamados" && request.method === "POST") {
        

         let corpo = "";
         request.on("data",(pedaco) => {
            corpo += pedaco;
         });

      request.on("end", () => {
     const dados = JSON.parse(corpo);

    const chamados = retornaChamadosServidor();

    const novoChamado = criarChamado2(
    chamados,
    dados.nome,
    dados.setor,
    dados.descricao
    );
 const novoChamadotxt = JSON.stringify(novoChamado)
      response.statusCode = 201;
      console.log(dados);
      response.end(novoChamadotxt);
      response.end("dados recebidos");
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