import Koa from 'koa';
import Router from 'koa-router';
import KS from 'koa-static';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = new Koa();
// app.use(KS(__dirname + '/static'));
// 使用根目录下的 index.html 文件
app.use(KS(__dirname + '/'));
// const router = new Router();
// router.get('/api', ctx => {
//   let obj = {
//     name: 'Juching',
//     age: 30,
//   };
//   ctx.body = obj;
// })
// app.use(router.routes());
const hostname = '127.0.0.1';
const port = '8888';
app.listen(port);
console.log(`🚀 ~ 服务已启动: http://${hostname}:${port}/`);
