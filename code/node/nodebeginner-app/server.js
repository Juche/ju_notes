import { createServer } from 'node:http';
import { parse } from 'node:url';

function start(route, handleMap) {
  const hostname = '127.0.0.1';
  const port = '8888';

  const server = createServer((req, res) => {
    const { path } = parse(req.url);

    let postData = '';

    req.setEncoding('utf8');

    req.addListener('data', (chunk) => {
      debugger;
      console.log(`🚀 ~ req.addListener ~ chunk`, chunk);
      postData += chunk;
    });

    req.addListener('end', () => {
      route(path, handleMap, res, postData);
    });

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
