const http = require('http');
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Liebe die ganz fest mi Schatz !\n");
});
consle.log('Ich bin ein Log');
server.listen(4000);
