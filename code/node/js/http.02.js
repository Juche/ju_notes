// const http = require('node:http');
import http from 'node:http';

const hostname = '127.0.0.1';
const port = '8888';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end('Hello Nodejs!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
