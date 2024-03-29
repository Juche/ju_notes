const ignoreList = ['/favicon.ico'];

function route(path, handleMap, req, res, postData) {
  if (ignoreList.includes(path)) return ''; // 跳过 favicon.ico 的判断
  console.log(`🚀 ~ server ~ request from '${path}'`);

  if (typeof handleMap[path] === 'function') {
    return handleMap[path](req, res, postData);
  } else {
    // return '404, Not Found!';
    res.statusCode = 404;
    res.setHeader('Content-type', 'text/plain');
    res.write('404, Not Found!');
    res.end();
  }
}

export { route };
