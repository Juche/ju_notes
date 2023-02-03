import { createServer } from 'node:http';
import { parse } from 'node:url';

function start() {
  const hostname = '127.0.0.1';
  const port = '8888';

  const server = createServer((req, res) => {
    const { pathname } = parse(req.url);
    console.log(`🚀 ~ server ~ request from '${pathname}'`);
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.write(`Hello ${pathname}`);
    res.end();
    debugger;
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}

export { start };
