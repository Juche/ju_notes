const ignoreList = ['/favicon.ico'];

function route(path, handleMap) {
  if (ignoreList.includes(path)) return ''; // 跳过 favicon.ico 的判断
  console.log(`🚀 ~ server ~ request from '${path}'`);

  if (typeof handleMap[path] === 'function') {
    return handleMap[path]();
  } else {
    return '404, Not Found!';
  }
}

export { route };
