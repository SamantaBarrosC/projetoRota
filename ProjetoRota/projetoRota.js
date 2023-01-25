//Carrega o módulo HTTP e URL
var http    = require('http');
var url     = require ('url');

//Função de callback para o servidor HTTP
var callback = function(request, response){

    //define o cabeçalho (header) como o tipo de resposta
    response.writeHead(200, {"Content-type": "text/plain; charset=utf-8"});

    //Faz o parse da URL separando o caminho  (rota)
    var parts = url.parse(request.url);

    //Verifica a rota
    if (parts.path =="/"){
        response.end("Site Principal");
    } else if (parts.path == "/rota1"){
        response.end("Site da Rota 1");
    } else if (parts.path == "/rota2"){
        response.end("Site da Rota 2");
    }else if (parts.path == "/rota 3"){
        response.end("Site da Rota 3");
    }
    else {
        response.end ("Rota Invalida: " + parts.path);
    }
    
};

// Servidor HTTP
var server = http.createServer(callback);

// porta que o servidor vai escutar
server.listen(3000);

//mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");