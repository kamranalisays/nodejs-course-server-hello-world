var http = require('http') ;

http.createServer( (req, res) => {
res.writeHead(200 , {'Content-Type':  'text/plain'});
res.end('Hello World..! From Node JS Server ');
}).listen(8080);