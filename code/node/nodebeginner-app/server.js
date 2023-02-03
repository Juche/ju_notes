import { createServer } from 'node:http';

function start() {
  const hostname = '127.0.0.1';
  const port = '8888';

  const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello Nodejs!');
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}

export { start };
