const Koa = require("koa");
const Router = require("koa-router");
const KoaBody = require("koa-body");
KoaBody({
  multipart: true
});
const Mock = require("mockjs");

// const router = new Router({prefix:'/mock'});

const router = new Router();
const shell = require("shelljs");
const app = new Koa();

const fs = require("fs");
const path = require("path");
const configs = require('./config/config.json');
const mockList = fs.readdirSync("./config/mock");
const port = configs.serve.mockPort;


let Users = [];

for (let i = 0; i < 66; i++) {
  Users.push(
    Mock.mock({
      id: Mock.Random.guid(),
      name: Mock.Random.cname(),
      addr: Mock.mock("@county(true)"),
      "age|18-60": 1,
      birth: Mock.Random.date(),
      sex: Mock.Random.integer(0, 1)
    })
  );
}

for(let item of mockList){
	let fun = require('./config/mock/'+item);
	fun(router);
}

//获取用户列表
router.get("/-/user/list", ctx => {
  let {
    name
  } = ctx.request.query;

  let mockUsers = Users.filter(user => {
    if (name && user.name.indexOf(name) == -1) return false;
    return true;
  });
  ctx.body = {
    users: mockUsers
  };
});

//获取用户列表（分页）
router.get("/-/user/listpage", ctx => {
  let {
    page,
    name
  } = ctx.request.query;

  let mockUsers = Users.filter(user => {
    if (name && user.name.indexOf(name) == -1) return false;
    return true;
  });
  let total = mockUsers.length;
  mockUsers = mockUsers.filter(
    (u, index) => index < 20 * page && index >= 20 * (page - 1)
  );
  ctx.body = {
    total: total,
    users: mockUsers
  };
});

//删除用户
router.get("/-/user/remove", ctx => {
  let {
    id
  } = ctx.request.query;

  Users = Users.filter(u => u.id !== id);
  ctx.body = {
    code: 200,
    msg: "删除成功"
  };
});

//编辑用户
router.get("/-/user/edit", ctx => {
  let {
    id,
    name,
    addr,
    age,
    birth,
    sex
  } = ctx.request.query;

  Users.some(u => {
    if (u.id === id) {
      u.name = name;
      u.addr = addr;
      u.age = age;
      u.birth = birth;
      u.sex = sex;
      return true;
    }
  });

  ctx.body = {
    code: 200,
    msg: "编辑成功"
  };
});

//新增用户
router.get("/-/user/add", ctx => {
  let {
    name,
    addr,
    age,
    birth,
    sex
  } = ctx.request.query;

  Users.push({
    name: name,
    addr: addr,
    age: age,
    birth: birth,
    sex: sex
  });
  ctx.body = {
    code: 200,
    msg: "新增成功"
  };
});
const doRandom = (series) => {
  for (let array of series) {
    for (let i = 0, len = array.length; i < len; i++) {
      array[i] = Math.round(array[i] * (Math.random() + 0.5));
    }
  }
  return series;
}
//日授信
router.get("/-/chart/dailyCreditConfig", ctx => {
  ctx.body = {
    xData: ['1206', '1207', '1208', '1209', '1210', '1211', '1212'],
    series: doRandom([
      [120, 132, 101, 134, 90, 230, 210],
      [220, 182, 191, 234, 290, 330, 310],
      [150, 232, 201, 154, 190, 330, 410],
      [320, 332, 301, 334, 390, 330, 320],
      [820, 932, 901, 934, 1290, 1330, 1320]
    ])
  }
})

router.get("/-/chart/rateConfig", ctx => {
  ctx.body = {
    result: [
      Math.random().toFixed(2), Math.random().toFixed(2), Math.random().toFixed(2),
    ]
  }
})

//审批时效
router.get("/-/chart/approvalLimitConfig", ctx => {
  ctx.body = {
    xData: ['1206', '1207', '1208', '1209', '1210', '1211', '1212'],
    series: doRandom([
      [120, 132, 101, 134, 90, 230, 210],
      [220, 182, 191, 234, 290, 330, 310],
      [150, 232, 201, 154, 190, 330, 410],
      [820, 932, 901, 934, 1290, 1330, 1320]
    ])
  }
})
//日放款数
router.get("/-/chart/dailyPublish", ctx => {
  ctx.body = {
    xData: ['1206', '1207', '1208', '1209', '1210', '1211', '1212'],
    series: doRandom([
      [120, 132, 101, 134, 90, 230, 210],
      [220, 182, 191, 234, 290, 330, 310],
      [156, 232, 201, 940, 190, 330, 410],
      [820, 932, 901, 934, 1290, 1330, 1320]
    ])
  }
})
//提款率
router.get("/-/chart/drawalRate", ctx => {
  ctx.body = {
    xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    series: doRandom([
      [10, 52, 200, 334, 390, 330, 220]
    ])
  }
})

// router.post('/graphql', async (ctx, next) => {
//   await graphqlKoa({schema: schema})(ctx, next) // 使用schema
// })
// .get('/graphql', async (ctx, next) => {
//   await graphqlKoa({schema: schema})(ctx, next) // 使用schema
// })
// .get('/graphiql', async (ctx, next) => {
//   await graphiqlKoa({endpointURL: '/graphql'})(ctx, next) // 重定向到graphiql路由
// })

//路由列表
const routerList = [{
    path: "index",
    name: "index",
    component: "spa/index",
    meta: {
      title: "首页",
      icon: "el-icon-goods"
    }
  },
  {
    path: "accountOverview",
    name: "accountOverview",
    component: "spa/accountOverview",
    meta: {
      title: "账户总览",
      icon: "el-icon-goods"
    }
  },
  {
    path: "transfer",
    name: "transfer",
    component: "spa/transfer",
    meta: {
      title: "转账",
      icon: "el-icon-goods"
    }
  },
  {
    path: "queryTrade",
    name: "queryTrade",
    component: "spa/queryTrade",
    meta: {
      title: "交易查询",
      icon: "el-icon-goods"
    }
  }
];

router.get("/-/router/get", function (ctx) {
  ctx.body = {
    router: routerList
  };
});

router.post("/login", function (ctx) {
  ctx.body = {
    name: "admin",
    avatar: "./img/user.png"
  };
});

router.get("/-/gitlog/get", function (ctx) {
  let _cmd = `git log --pretty=format:"%h - %an, %ar : %s"`;
  //let t = `git log  --pretty=format:'{"commit": "%h","author": "%an","date": "%ad","message": "%s"}'`

  ctx.body = {
    gitlog: new Promise((resolve, reject) => {
      shell.exec(_cmd, (code, stdout, stderr) => {
        console.log(stdout);
        if (code) {
          reject(stderr);
        } else {
          resolve(JSON.parse(stdout)[0]);
        }
      });
    })
  };
});

router.get("/-/getMainList", function (ctx) {
  var mainList = {
    result: [{
        name: "AWEB 社区",
        href: "https://www.awebide.com/"
      },
      {
        name: "AWEB 开发者中心",
        href: "https://docs.awebide.com"
      },
      {
        name: "资源市场",
        href: "https://market.awebide.com"
      },
      {
        name: "桌面示例",
        href: "https://pc.awebide.com"
      },
      {
        name: "监控示例",
        href: "https://monitor.awebide.com"
      },
      {
        name: "移动示例",
        href: "https://mobile.awebide.com"
      }
    ]
  };
  ctx.body = mainList;
});


router.post("/-/upload", async (ctx, next) => {
  const file = ctx.request.files.file; // 上传的文件在ctx.request.files.file
  // 创建可读流
  const reader = fs.createReadStream(file.path);
  // 修改文件的名称
  var myDate = new Date();
  var newFilename = myDate.getTime() + "." + file.name.split(".")[1];
  var targetPath = path.join(__dirname, "./dist/static/") + `/${newFilename}`;
  //创建可写流
  const upStream = fs.createWriteStream(targetPath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);
  //返回保存的路径
  return (ctx.body = {
    code: 200,
    status: true
  });
});


//parser
app.use(KoaBody({
  multipart: true
}));

app.use(router.routes());

app.use(router.allowedMethods());

app.use(require("koa-static")(__dirname + "/public"));
//start server
// var options = {
// 	key: fs.readFileSync('./ssl/server.key'), //ssl文件路径
// 	cert: fs.readFileSync('./ssl/server.pem') //ssl文件路径
// };

// http.createServer(app.callback()).listen(80);
// https.createServer(options, app.callback()).listen(443);

app.listen(port, () => {
  console.error(`服务器启动成功：${port}`);
});

// server.listen(7008,()=>{
// 	console.log('服务器启动成功：7008')
// });