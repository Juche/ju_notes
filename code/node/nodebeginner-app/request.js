import { exec } from 'node:child_process';

function start(res) {
  console.log("Request handler 'start' was called.");
  // let ret = 'Home Page!';
  // return ret;
  // dir 命令行指令
  // exec('dir', { timeout: 10000, encoding: 'gbk' }, (err, stdout, stderr) => {
  //   res.statusCode = 200;
  //   res.setHeader('Content-type', 'text/plain');
  //   res.write(stdout);
  //   res.end();
  // });

  const body = `
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </head>
      <body>
        <form action="/upload" method="post">
          <textarea name="text" rows="20" cols="60"></textarea>
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
}

function upload(res) {
  console.log("Request handler 'upload' was called.");
  // return 'Upload Page!';
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.write('Upload Page!');
  res.end();
}

export default { start, upload };
