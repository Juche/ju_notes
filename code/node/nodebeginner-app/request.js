import { exec } from 'node:child_process';
import querystring from 'node:querystring';
import fs from 'node:fs';
import formidable from 'formidable';

function start(req, res, postData) {
  console.log("Request handler 'start' was called.");

  const body = `
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </head>
      <body>
        <form action="/upload" enctype="multipart/form-data" method="post">
          <input type="file" name="upload" multiple />
          <input type="submit" value="Upload File" />
        </form>
      </body>
    </html>
    `;

  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.write(body);
  res.end();

  // dir 命令行指令
  // exec('ipconfig', { timeout: 10000, encoding: 'utf8' }, (err, stdout, stderr) => {
  //   const body = `
  //   <html>
  //     <head>
  //       <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
  //     </head>
  //     <body>
  //       <form action="/upload" method="post">
  //         <textarea name="text" rows="20" cols="60">${stdout}</textarea>
  //         <br />
  //         <br />
  //         <input type="submit" value="Submit text" />
  //       </form>
  //     </body>
  //   </html>
  //   `;

  //   res.statusCode = 200;
  //   res.setHeader('Content-type', 'text/html');
  //   res.write(body);
  //   res.end();
  // });
}

function upload(req, res, postData) {
  console.log("Request handler 'upload' was called.");
  // const parseData = querystring.parse(postData).text;
  // res.statusCode = 200;
  // res.setHeader('Content-type', 'text/plain');
  // res.write(parseData);
  // res.end();

  const form = new formidable.IncomingForm();
  // const form = formidable({ multiples: true });
  form.uploadDir = 'temp'; // 写一个临时路径,解决Windows跨磁盘分区操作文件的权限问题

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
      res.end(String(err));
      return;
    }

    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.end(JSON.stringify({ fields, files }, null, 2));

    fs.renameSync(files.upload.filepath, './temp/test.png');
    // fs.copyFile(files.upload.filepath, './temp/test.png');
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.write('<image src="/show" />');
    res.end();
  });
}

function show(req, res) {
  console.log("Request handler 'show' was called.");
  fs.readFile('./temp/test.png', 'binary', (err, file) => {
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
