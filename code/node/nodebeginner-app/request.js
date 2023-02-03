import { exec } from 'node:child_process';

function start(res) {
  console.log("Request handler 'start' was called.");
  // let ret = 'Home Page!';
  // return ret;
  exec('dir', (err, stdout, stderr) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.write(stdout);
    res.end();
  });
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
