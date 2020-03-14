var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(301, {Location: 'https://localhost:44312/'});  
  res.end();
}).listen(8080);
