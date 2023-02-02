const Koa = require('Koa');
const Router = require('Koa-router');
const static = require('Koa-static');

const app = new Koa();

app.use(static(__dirname + '/js-snippets'));
app.listen(8081);
console.log(`🚀 ~ __dirname`, __dirname);
console.log(`🚀 ~ 服务已启动: http://127.0.0.1:8081/`);
