const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const app = new Koa();
// app.use(static(__dirname + '/static'));
// 使用根目录下的 index.html 文件
app.use(static(__dirname + '/'));
// const router = new Router();
// router.get('/api', ctx => {
//   let obj = {
//     name: 'Juching',
//     age: 30,
//   };
//   ctx.body = obj;
// })
// app.use(router.routes());
app.listen(8080);
console.log(`🚀 ~ 服务已启动: 127.0.0.1:8080`);
