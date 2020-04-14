const http = require('http');
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Liebe die ganz fest mi Schatz !\n");
});
console.log('Danke mi Schatz !! Liebe di bis uf e Mond und wieder zrug !!!!!');
server.listen(4000);
