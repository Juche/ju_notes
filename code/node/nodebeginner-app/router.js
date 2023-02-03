const ignoreList = ['/favicon.ico'];

function route(path) {
  if (ignoreList.includes(path)) return; // 跳过 favicon.ico 的判断
  console.log(`🚀 ~ server ~ request from '${path}'`);
}

export { route };
