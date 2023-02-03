function start() {
  console.log("Request handler 'start' was called.");
  return 'Home Page!';
}

function upload() {
  console.log("Request handler 'upload' was called.");
  return 'Upload Page!';
}

export default { start, upload };
