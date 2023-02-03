const http = require('http');
const server = http.createServer((req, res) => {
  res.write('Hello Juching!');
  res.end();
});

server.listen('8888');
