const http = require("http");
const goodMessage = require('./personalmodule');
const os = require("os");

const name = os.userInfo().username;

http.createServer( function (request, response) {	

   response.writeHead(200, {'Content-Type': 'text/html'});
   response.write(`${goodMessage.date}<br>`);
   response.write(`${goodMessage.getMessage(name)}`);
  
}).listen(5000);

// Console will print the message
console.log('Server running at http://127.0.0.1:5000/');