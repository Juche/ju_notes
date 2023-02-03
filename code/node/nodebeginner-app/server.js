import { createServer } from 'node:http';
import { parse } from 'node:url';

function start(route, handleMap) {
  const hostname = '127.0.0.1';
  const port = '8888';

  const server = createServer((req, res) => {
    const { path } = parse(req.url);
    route(path, handleMap, res);

    // const resMsg = route(path, handleMap);

    // res.statusCode = 200;
    // res.setHeader('Content-type', 'text/plain');
    // // res.write(`Hello ${path}`);
    // res.write(resMsg);
    // res.end();
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}

export { start };
