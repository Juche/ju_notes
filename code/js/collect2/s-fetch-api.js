const Koa = require('Koa');
const Router = require('Koa-router');
const static = require('Koa-static');

const app = new Koa();
const router = new Router();

router.get('/getUser', (ctx) => {
  ctx.body = {
    name: 'Juching',
    age: 30,
  };
});

router.post('/userInfo', (ctx) => {
  ctx.statusText = 'ERROR';
  ctx.body = {
    name: 'Juche',
    age: 20,
  };
});

app.use(static(__dirname + '/js-snippets'));
app.use(router.routes());
app.listen(8081);
console.log(`🚀 ~ __dirname`, __dirname);
console.log(`🚀 ~ 服务已启动: http://127.0.0.1:8081/`);
