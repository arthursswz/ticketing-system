const fs = require("fs");

const saveJson =((filename,data) =>{
  const stringdata = JSON.stringify (data, null, 2);

  fs.writeFileSync("chamados.json", stringdata, "utf-8")
}
)


            const chamadoNovo= {
            id:1,
            nome:"juao",
            setor:"ti",
            descricao: "seila",
            status: "aberto"
}
saveJson("chamados.json", chamadoNovo);
console.log("Arquivo salvo com sucesso");
console.log(chamadoNovo)