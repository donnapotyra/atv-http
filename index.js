// pacote "http" -> requisições e respostas do usuário
const http = require("http");

// criando um servidor http
const server = http.createServer((requisicao, resposta) => {
  // configurando a resposta 
  resposta.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  // a "requisicao" possui um atributo chamado "method"
  // com ela é possível saber qual o método foi feito a requisição
  // com isso é feito a verificação para saber o que fazer
  if (requisicao.method === "GET") {
    
    resposta.write("<h1>Caixa do marcado</h1>");
  } else if (requisicao.method === "POST") {
    
    resposta.write("<h1>Adicionar em seu carrinho</h1>");
  } else if (requisicao.method === "PUT") {
   
    resposta.write("<h1>Adicionar mesmo produto 2 vezes</h1>");
  } else if (requisicao.method === "DELETE") {
    
    resposta.write("<h1>Remover um produto</h1>");
  }

  // finaliza 
  resposta.end();
});

//  porta de acesso ao servidor
server.listen(3000, console.log("Servidor rodando...."));