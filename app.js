const http = require('http');

const server = http.createServer((req, res) => {
  res.end('VIKAS SINGH');
});

server.listen(4000);