import { exec } from 'node:child_process';
import querystring from 'node:querystring';
import fs from 'node:fs';
import formidable from 'formidable';

function start(res, postData) {
  console.log("Request handler 'start' was called.");
  // let ret = 'Home Page!';
  // return ret;
  // dir 命令行指令
  exec('ipconfig', { timeout: 10000, encoding: 'utf8' }, (err, stdout, stderr) => {
    const body = `
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </head>
      <body>
        <form action="/upload" method="post">
          <textarea name="text" rows="20" cols="60">${stdout}</textarea>
          <br />
          <br />
          <input type="submit" value="Submit text" />
        </form>
      </body>
    </html>
    `;

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write(body);
    res.end();
  });
}

function upload(res, postData) {
  console.log("Request handler 'upload' was called.");
  const parseData = querystring.parse(postData).text;
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  // res.write('Upload Page!');
  res.write(parseData);
  res.end();
}

function show(res) {
  console.log("Request handler 'show' was called.");
  fs.readFile('./temp/test.png', 'binary', (err, file) => {
    debugger;
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-type', 'text/plain');
      res.write(err);
      res.end();
    } else {
      res.statusCode = 200;
      res.setHeader('Content-type', 'image/png');
      res.write(file, 'binary');
      res.end();
    }
  });
}

export default { start, upload, show };
