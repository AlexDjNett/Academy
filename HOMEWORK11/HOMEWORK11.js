const http = require("http");
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('System Information');
  response.end('Testing NodeJS server\n');
}).listen(5000);
response.write('System Information');

