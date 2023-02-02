// const { People } = await import('./7.class.js');
const ju = {
  createObj(obj) {
    function Fn() {}
    Fn.prototype = obj;
    return new Fn();
  },
  instanceof(obj, constructor) {
    let constructorProto = constructor.prototype;
    // Object.getPrototypeOf(obj)
    let objProtoLink = obj && obj.__proto__;
    while (objProtoLink) {
      if (objProtoLink === constructorProto) return true;
      objProtoLink = objProtoLink.__proto__;
    }
    return false;
  },
  new() {
    let obj = null;
    let constructor = arguments[0];
    if (typeof constructor !== 'function') {
      console.error(`type error: ${constructor} is not a function`);
      return;
    }

    let props = [...arguments].splice(1);
    console.log(`🚀 ~ new ~ props`, props);
    // obj = Object.create(constructor.prototype, Object.getOwnPropertyDescriptors(constructor));
    obj = Object.create(constructor.prototype);
    // console.log(`🚀 ~ new ~ obj`, obj);
    constructor.apply(obj, props);
    console.log(`🚀 ~ new ~ obj`, obj);

    return obj;
  },
  promiseAll(pList) {
    return new Promise(async (resolve, reject) => {
      let pLen = pList.length;
      let resLen = 0;
      let resList = [];
      // for (let i = 0; i < pLen; i++) {
      //   // pList[i].then((res) => {
      //   //   resLen++
      //   //   resList[i] = res
      //   //   if(resLen === pLen) {
      //   //     resolve(resList)
      //   //   }
      //   // }).catch((error) => {
      //   //   reject(error);
      //   // })

      //   try {
      //     resList.push(await pList[i])
      //     if(pLen === resList.length) {
      //       resolve(resList)
      //     }
      //   } catch (error) {
      //     reject(error)
      //   }
      // }

      for (const res of pList) {
        try {
          resList.push(await res);
          if (pLen === resList.length) {
            resolve(resList);
          }
        } catch (error) {
          reject(error);
        }
      }
    });
  },
  promiseAllSettled(pList) {
    return new Promise(async (resolve, reject) => {
      let stList = [];
      let stInfo = null;
      for (const prom of pList) {
        try {
          stInfo = {
            value: await prom,
            status: 'fulfilled',
          };
        } catch (error) {
          stInfo = {
            value: await error,
            status: 'rejected',
          };
        }
        stList.push(stInfo);
      }
      resolve(stList);
    });
  },
  debounce(fn, delay) {
    let timer = null;
    return function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        console.log('debounce...');
        fn();
      }, delay);
    };
  },
  throttle(fn, delay) {
    let startTime = Date.now();
    return function () {
      let endTime = Date.now();
      if (endTime - startTime >= delay) {
        startTime = Date.now();
        console.log('throttle...');
        fn();
      }
    };
  },
  throttle2(fn, delay) {
    let isFree = true;
    return function () {
      if (!isFree) return false;
      isFree = false;
      setTimeout(() => {
        fn();
        isFree = true;
      }, delay);
    };
  },
  getType(obj) {
    let type = typeof obj;
    if (type === 'object') {
      type = Object.prototype.toString
        .call(obj)
        .replace(/\[object |\]/gi, '')
        .toLowerCase();
    }
    console.log(`🚀 ~ getType ~ type`, type);
    return type;
  },
  add(a, b, c) {
    return [...arguments].reduce((a, b) => a + b, 0);
  },
  // curry(m) {
  //   let temp = function (n) {
  //     return ju.curry(m + n);
  //   }
  //   temp.toString = function() {
  //     return m
  //   }
  //   return temp
  // },
  curry(fn) {
    let args = [];
    console.log('fn.length: ', fn.length); // 可以获取函数定义时的参数个数
    return function _cur() {
      if (arguments.length) {
        args = [...arguments, ...args];
        return _cur;
      } else {
        let res = fn.apply(this, args);
        args = [];
        return res;
      }
    };
  },
  // curry(m) {
  //   m = m;
  //   return function _cur(n) {
  //     if (arguments.length) {
  //       return ju.curry(m + n);
  //     } else {
  //       return m;
  //     }
  //   };
  // },
  // curry(m) {
  //   m = m;
  //   return function _cur(n) {
  //     if (arguments.length) {
  //       return ju.curry(m + n);
  //     } else {
  //       return m;
  //     }
  //   };
  // },
  // curry(m) {
  //   m = m;
  //   function _cur(n) {
  //     if (arguments.length) {
  //       return ju.curry(m + n);
  //     } else {
  //       return m;
  //     }
  //   };
  //   // 利用 toString 进行隐式求值
  //   _cur.toString = function () {
  //     return m
  //   }
  //   return _cur;
  // },
  exeTime(fn) {
    return async function (param) {
      let start = Date.now();
      console.log('start time: ', start);
      let fnRet = await fn(param);
      console.log(`🚀 ~ fnRet`, fnRet);
      let end = Date.now();
      console.log('end time: ', end);
      console.log(`函数执行用时: ${end - start} ms`);
    };
  },
  httpReq(api, method) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(method ?? 'POST', api, true);
      xhr.onreadystatechange = function (res) {
        if (this.readyState === 4) {
          if (this.status === 200) resolve(this.response);
          reject(this.statusText);
        }
      };
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send(null);
    });
  },
  shallowCopy(obj) {
    let ret = null;
    const Constructor = obj.constructor;
    ret = new Constructor();
    let keys = Object.keys(obj);
    for (const key of keys) {
      ret[key] = obj[key];
    }
    return ret;
  },
  invokeCount: (() => {
    let count = 0;
    return function () {
      // console.log('count: ', count);
      return ++count;
    };
  })(),
  // _invokeCount: 0,
  deepClone(obj, cache = new WeakMap()) {
    this.deepClone._invokeCount = ju.invokeCount();
    let ret = null;
    function isObj(obj) {
      // return typeof obj === 'object' || typeof obj === 'function' && obj
      return obj instanceof Object;
    }
    if (!isObj(obj)) return obj;
    if (cache.has(obj)) return obj;

    let Constructor = obj.constructor;

    function mapClone(obj) {
      let _map = new Map();
      for (const [key, val] of obj) {
        isObj(val)
          ? _map.set(key, ju.deepClone(val, cache))
          : _map.set(key, val);
      }
      return _map;
    }
    function setClone(obj) {
      let _set = new Set();
      for (const val of obj) {
        isObj(val) ? _set.add(ju.deepClone(val, cache)) : _set.add(val);
      }
      return _set;
    }

    switch (Constructor) {
      case Function:
        return new Function(`return ${obj.toString()}`)();
      case Date:
      case RegExp:
        return new Constructor(obj);
      case Map:
        return mapClone(obj);
      case Set:
        return setClone(obj);

      default:
        // ret = new Constructor();
        ret = Object.create(
          Object.getPrototypeOf(obj),
          Object.getOwnPropertyDescriptors(obj)
        );

        cache.set(obj, ret);

        // 通过 key 都不能克隆原型
        // 不能克隆 Symbol 为 key 的属性
        let keys = Object.keys(obj);
        // 不能克隆函数和不可枚举属性
        // let keys = Reflect.ownKeys(obj);
        for (const key of keys) {
          if (obj.hasOwnProperty(key)) {
            if (isObj(obj[key])) ret[key] = ju.deepClone(obj[key], cache);
          }
        }
        return ret;
    }
  },
  formatDate(date, rule) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDay() > 9 ? date.getDay() : '0' + date.getDay();

    rule = rule.replace(/yyyy/i, year);
    rule = rule.replace(/mm/i, month);
    rule = rule.replace(/dd/i, day);
    console.log(`🚀 ~ formatDate ~ rule`, rule);

    return rule;
  },
  randomList(arr) {
    let _arr = [];
    let arrLen = arr.length;
    for (let i = 0; i < arrLen; i++) {
      let ranIdx = Math.floor(Math.random() * (arrLen - i)) + i;
      [arr[i], arr[ranIdx]] = [arr[ranIdx], arr[i]];
      console.log(ranIdx);
      console.log(arr);
    }
    return arr;
  },
  arrSet(arr) {
    // let _set = new Set(arr);
    // let _arr = Array.from(_set)
    let _arr = [];
    // for (const idx in arr) {
    //   if(idx == arr.findIndex(item => item === arr[idx])) _arr.push(arr[idx])
    // }
    // for (const [key, val] of Object.entries(arr)) {
    //   if (key == arr.findIndex((item) => item === val)) _arr.push(val);
    // }
    let _map = new Map();
    for (const [key, val] of Object.entries(arr)) {
      if (!_map.has(val)) {
        _map.set(val, val);
        _arr.push(val);
      }
    }
    return _arr;
  },
  arrFlat(arr, depth) {
    depth ??= 0;
    // for (const item of arr) {
    //   _arr = Array.isArray(item)
    //     ? _arr.concat(this.arrFlat(item))
    //     : _arr.concat(item);
    // }
    if (!Array.isArray(arr) || depth == 0) return arr;

    let _arr = [];
    _arr = arr.reduce((pre, next) => {
      if (Array.isArray(next)) {
        return pre.concat(this.arrFlat(next, depth - 1));
      } else {
        return pre.concat(next);
      }
    }, []);
    // if(depth > 0) {
    //   _arr = _arr.concat(this.arrFlat(_arr, depth--));
    // }else {
    //   _arr = _arr.concat(arr)
    // }
    return _arr;
  },
  strRepeat(char, n) {
    // let _str = '';
    // while (n > 0) {
    //   _str += char
    //   n--
    // }
    // return _str;
    // return (new Array(n + 1)).join(char);
    return n > 0 ? char.concat(this.strRepeat(char, --n)) : '';
  },
  moneyNum(num) {
    // let _int = num.split('.')[0];
    // let _dec = num.split('.')[1];
    return num.toLocaleString();
  },
  // objTree(obj) {
  //   let _tree = [];
  //   let idMap = new Map();
  //   for (const item of obj) {
  //     idMap.set(item.id, item);
  //   }
  //   for (const item of obj) {
  //     let _p = idMap.get(item.pid);
  //     if (_p) {
  //       (_p.children || (_p.children = [])).push(item);
  //       idMap.set(item.pid, _p);
  //     } else {
  //       _tree.push(item);
  //     }
  //   }
  //   console.log(`🚀 ~ objTree ~ obj`, obj)
  //   console.log(`🚀 ~ objTree ~ _tree`, _tree)
  //   return _tree;
  // },
  objTree(obj) {
    let _tree = [];
    let _map = new Map();
    for (const item of obj) {
      _map.set(item.id, item);
    }
    for (const [idx, item] of Object.entries(obj)) {
      let _p = _map.get(item.pid);
      if (_p) {
        (_p.children || (_p.children = [])).push(item);
        // obj.splice(idx,1)
        // delete obj[idx]
        // _map.delete(item.pid)
      } else {
        _tree.push(item);
      }
    }
    console.log(`🚀 ~ objTree ~ _tree`, _tree);
    // console.log(`🚀 ~ objTree ~ _map`, _map)
    // console.log(`🚀 ~ objTree ~ obj`, obj)

    return _tree;
  },
  fibonacci(n) {
    // 递归实现: 效率低!!!
    // if (n === 0 || n === 1) return n;
    // // return n + fibo(n - 1)
    // return ju.fibonacci(n - 1) + ju.fibonacci(n - 2);

    // 优化: 循环1
    // const arr = [1, 1, 2];
    // const arrLen = arr.length;
    // if (n <= arrLen) {
    //   return arr[n];
    // }
    // for (let i = arrLen; i < n; i++) {
    //   arr.push(arr[i - 1] + arr[i - 2]);
    // }
    // return arr[arr.length - 1];

    // const arr = [1, 1, 2];
    // if(n < arr.length) return arr[n];
    // for (let i = 3; i < n; i++) {
    //   arr[i] = arr[i-1] + arr[i-2]
    // }
    // return arr[n-1]

    // 优化: 循环2
    // let pre1 = 1;
    // let pre2 = 1;
    // let current = 2;
    // if (n <= 2) {
    //     return current;
    // }
    // for (let i = 2; i < n; i++) {
    //     pre1 = pre2;
    //     pre2 = current;
    //     current = pre1 + pre2;
    // }
    // return current;

    let f = [1, 1, 2];
    if (n <= 2) return f[n];
    for (let i = 3; i <= n; i++) {
      // [f[0], f[1], f[2]] = [f[1], f[2], f[1] + f[2]];
      [f[0], f[1], f[2]] = [f[1], f[2], f[1] + f[2]];
    }
    return f[2];
  },
};

Function.prototype.juCall = function (ctx) {
  if (ctx === undefined || ctx === null) ctx = window;
  ctx.fn = this;
  let args = [...arguments].slice(1);
  let ret = ctx.fn(...args);
  delete ctx.fn;
  return ret;
};
Function.prototype.juApply = function (ctx) {
  if (ctx === undefined || ctx === null) ctx = window;
  ctx.fn = this;
  let arg = [...arguments[1]];
  let ret = ctx.fn(...arg);
  delete ctx.fn;
  return ret;
};
Function.prototype.juBind = function (ctx) {
  if (ctx === undefined || ctx === null) ctx = window;
  let self = this;

  return function () {
    let arg =
      arguments.length > 1
        ? [...arguments]
        : Array.isArray(arguments[0])
        ? [...arguments[0]]
        : [arguments];
    self.apply(ctx, [...arg]);
  };
};
Function.prototype.ju_bind = function (ctx) {
  if (ctx === undefined || ctx === null) ctx = window;
  let self = this;
  return function () {
    let arg = [...arguments];
    ctx.fn = self;
    let ret = ctx.fn(...arg);
    delete ctx.fn;
    return ret;
  };
};

const test = {
  // 实现 Object.create 方法
  createObj() {
    let _obj = ju.createObj(Function);
    console.log(`🚀 ~ _obj`, _obj);
    console.log(`🚀 ~ typeof _obj`, typeof _obj);
    console.log(`🚀 ~ _obj.prototype`, _obj.prototype);
    console.log(`🚀 ~ _obj.__proto__`, _obj.__proto__);
  },
  // 实现 instanceof 方法
  instanceof() {
    console.log(`🚀 ju.instanceof(null, Object)`, ju.instanceof(null, Object));
    console.log(`🚀 ju.instanceof({}, Object)`, ju.instanceof({}, Object));
    console.log(
      `🚀 ju.instanceof(function() {}, Function)`,
      ju.instanceof(function () {}, Function)
    );
    console.log(
      `🚀 ju.instanceof(/w/ig, RegExp)`,
      ju.instanceof(/w/gi, RegExp)
    );
    console.log(
      `🚀 ju.instanceof(new Date(), Object)`,
      ju.instanceof(new Date(), Object)
    );
  },
  // 实现构造函数 new 方法
  new() {
    ju.new(Object);
    ju.new(Function);
    let _people = ju.new(People, 'zzz');
    console.log(_people);
  },
  // 实现 Promise.all
  promiseAll() {
    var p1 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve('p1成功!'); //代码正常执行！
      });
    });
    var p2 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject('p2失败!');
      });
    });
    var p3 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve('p3成功!');
      });
    });

    let _pA1 = ju.promiseAll([p1, p2, p3, p1, p3, p2]);
    console.log(`🚀 ~ promiseAll ~ _pA1`, _pA1);
    let _pA2 = ju.promiseAll([p1, p3, p1, p3]);
    console.log(`🚀 ~ promiseAll ~ _pA2`, _pA2);

    ju.promiseAll([p3, p1, p2])
      .then((res) => {
        console.log(res); // [3, 1, 2]
      })
      .catch((err) => {
        console.log(err);
      });
  },
  // 实现 Promise.allSettled
  promiseAllSettled() {
    var p1 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve('p1成功!'); //代码正常执行！
      });
    });
    var p2 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject('p2失败!');
      });
    });
    var p3 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve('p3成功!');
      });
    });

    let _pA1 = ju.promiseAllSettled([p1, p2, p3, p1, p3, p2]);
    console.log(`🚀 ~ promiseAllSettled ~ _pA1`, _pA1);
    let _pA2 = ju.promiseAllSettled([p1, p3, p1, p3]);
    console.log(`🚀 ~ promiseAllSettled ~ _pA2`, _pA2);

    ju.promiseAllSettled([p3, p1, p2])
      .then((res) => {
        console.log(res); // [3, 1, 2]
      })
      .catch((err) => {
        console.log(err);
      });
  },
  log() {
    console.log('mousemove...');
  },
  print() {
    let args = [...arguments];
    for (const arg of args) {
      console.log(arg);
    }
  },
  showTop() {
    var scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    console.log('滚动条位置：' + scrollTop);
  },
  // 防抖
  debounce() {
    // window.onmousemove = ju.debounce(this.log, 1000);
    window.onscroll = ju.debounce(this.showTop, 1000);
  },
  throttle() {
    // window.onmousemove = ju.throttle(this.log, 1000);
    // window.onscroll = ju.throttle(this.showTop, 1000);
    window.onscroll = ju.throttle2(this.showTop, 1000);
  },
  // 节流
  // 防抖和节流
  debounce_throttle() {
    function debounce(fn, delay) {
      let timer = null; //借助闭包
      return function () {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(fn, delay); // 简化写法
      };
    }
    // 节流
    // 短时间内连续触发的事件,函数每隔一段时间执行一次
    function throttle(fn, delay) {
      let valid = true;
      return function () {
        if (!valid) {
          //休息时间 暂不接客
          return false;
        }
        // 工作时间，执行函数并且在间隔期内把状态位设为无效
        valid = false;
        setTimeout(() => {
          fn();
          valid = true;
        }, delay);
      };
    }
    window.onscroll = debounce(this.showTop, 1000);
    // window.onscroll = throttle(this.showTop, 1000);
  },
  // 获取是数据类型
  getType() {
    ju.getType(null);
    ju.getType(undefined);
    ju.getType(1);
    ju.getType('a');
    ju.getType(false);
    ju.getType(Symbol());
    ju.getType(BigInt(1));
    ju.getType([]);
    ju.getType({});
    ju.getType(/d/);
    ju.getType(new Date());
    ju.getType(new Map());
    ju.getType(new Set());
  },
  // 实现 call/apply/bind 方法
  call_apply_bind() {
    ju.getType.juCall(this, 'a');
    // test.print.juApply(this, ['a', 123, false]);
    // test.print.juBind(this, 'a')(111);
    // test.print.juBind(this, 'a')([111, 222]);
    // test.print.juBind(this, 'a')(111, 222, 333);
    test.print.ju_bind(this, 'a')(111, 222, 333);
  },
  // 柯里化
  curry() {
    // let sum = ju.curry(2)(3)(4)(5)();
    // console.log(`🚀 ~ curry ~ sum`, sum);
    // console.log(ju.curry(2)(3)(4)(5)());
    // console.log(ju.curry(2)(3) == 5);  // 比较时会隐式调用 toString
    // console.log(ju.curry(2)(3).toString());
    // console.log((ju.curry(2)).toString());

    let curAdd = ju.curry(ju.add);
    let sum = curAdd(2)(3)(4)(5)();
    console.log(`🚀 ~ curry ~ sum`, sum);

    // console.log(sum)
    let sum1 = ju.add(1, 2, 3, 4, 5, 6, 7, 8, 9);
    console.log(`🚀 ~ curry ~ sum1`, sum1);
  },
  exeTime() {},
  // 封装http请求
  httpReq() {
    ju.httpReq('/getUser', 'GET')
      .then((res) => {
        console.log(`🚀 ~ ju.httpReq ~ res`, res);
      })
      .catch((err) => {
        console.log(`🚀 ~ ju.httpReq ~ err`, err);
      });
    ju.httpReq('/userInfo')
      .then((res) => {
        console.log(`🚀 ~ ju.httpReq ~ res`, res);
      })
      .catch((err) => {
        console.log(`🚀 ~ ju.httpReq ~ err`, err);
      });
  },
  // 浅克隆
  shallowCopy() {
    let arr = [1, 2, [3, 4, 5, 6]];
    let obj = { a: 'a', b: { x: 'x', y: 'y', z: 'z' }, c: 'c' };
    let _arr1 = [...arr];
    let _arr2 = arr.slice();
    let _arr3 = arr.concat();
    _arr2[2][1] = 44;
    _arr1[2][0] = 33;
    _arr3[2][2] = 55;
    console.log(arr === _arr1);
    console.log(arr === _arr2);
    console.log(arr === _arr3);
    console.log(arr);
    let _obj1 = { ...obj };
    let _obj2 = Object.assign({}, obj);
    _obj2['b']['x'] = 'xx';
    _obj1['b']['y'] = 'yy';
    console.log(obj === _obj1);
    console.log(obj === _obj2);
    console.log(obj);

    let _arrCopy = ju.shallowCopy(arr);
    let _objCopy = ju.shallowCopy(obj);
    _arr3[2][3] = 66;
    _obj1['b']['z'] = 'zz';
    console.log(arr === _arrCopy);
    console.log(obj === _objCopy);
    console.log(arr);
    console.log(obj);
  },
  // 深克隆
  deepClone() {
    // 测试的obj对象
    const obj = {
      // =========== 1.基础数据类型 ===========
      num: 1, // number
      str: 'aaa', // string
      bool: true, // boolean
      undef: undefined, // undefined
      null: null, // null
      symbol: Symbol('sym1'), // symbol
      bigInt: BigInt(1n), // bigint

      // =========== 2.Object类型 ===========
      // 普通对象
      obj: {
        name: '我是一个对象',
        id: 1,
      },
      // 数组
      arr: [0, 1, 2],
      // 函数
      func: function () {
        console.log('我是一个函数');
      },
      // 日期
      date: new Date(0),
      // 正则
      // reg: new RegExp('/我是一个正则/ig'),
      reg: new RegExp(/我是一个正则/, 'ig'),
      // Map
      // map: new Map().set('mapKey', 1),
      map: new Map([
        ['m', 'm1'],
        ['n', [1, 2, 3]],
      ]),
      // Set
      // set: new Set().add('set1'),
      set: new Set([1, 2, 'a', 'b', [1, 2, 3], { a: 'aaa' }]),
      // =========== 3.其他 ===========
      [Symbol('1')]: 1, // Symbol作为key
    };

    Object.defineProperty(obj, 'innumerable', {
      enumerable: false,
      value: 'innumerable val',
    });

    Object.setPrototypeOf(obj, {
      proto: 'pppppppp',
    });

    obj.self = obj;

    const arr = [1, 2, [3, 4, 5]];

    // let deepClone1 = JSON.parse(JSON.stringify(obj));
    // console.log(`🚀 ~ deepClone ~ deepClone1`, deepClone1)

    let deepClone2 = ju.deepClone(obj);
    console.log(`🚀 ~ deepClone ~ deepClone2`, deepClone2);
    // console.log(`🚀 ~ deepClone ~ ju._invokeCount`, ju._invokeCount);
    console.log(
      `🚀 ~ deepClone ~ ju.deepClone._invokeCount`,
      ju.deepClone._invokeCount
    );

    let deepClone3 = ju.deepClone(arr);
    console.log(`🚀 ~ deepClone ~ deepClone3`, deepClone3);
  },
  // 日期格式化
  formatDate() {
    ju.formatDate(new Date(), 'YYYY-MM-DD');
    ju.formatDate(new Date(), 'YYYY/MM/DD');
    ju.formatDate(new Date(), 'YYYY年MM月DD日');
  },
  // 变量交换
  swapVar() {
    let a = 'aa',
      b = 'bb';
    let m = 1,
      n = 2;
    [a, b] = [b, a];
    console.log(`🚀 ~ swapVar ~ a`, a);
    console.log(`🚀 ~ swapVar ~ b`, b);

    m = m + n;
    n = m - n;
    m = m - n;
    console.log(`🚀 ~ swapVar ~ m`, m);
    console.log(`🚀 ~ swapVar ~ n`, n);
  },
  // 数组打乱
  randomList() {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let randomArr = ju.randomList(arr);
    console.log(`🚀 ~ randomList ~ randomArr`, randomArr);

    const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
    console.log(shuffleArray([1, 2, 3, 4]));
    // Result: [ 1, 4, 3, 2 ]
  },
  // 数组求和
  arrSum() {
    let arr = [0, 1, 2, 3, 4, 5, [6, 7, 8, 9]];
    // let flatArr = JSON.parse(`[${(JSON.stringify(arr)).replace(/\[|\]/g, '')}]`);
    let flatArr = arr.flat(Infinity);
    console.log(`🚀 ~ arrSum ~ flatArr`, flatArr);
    let sum = flatArr.reduce((m, n) => m + n, 0);
    console.log(`🚀 ~ arrSum ~ sum`, sum);
  },
  // 数组去重
  arrSet() {
    let arr = [0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4];
    let _arrSet = ju.arrSet(arr);
    console.log(`🚀 ~ arrSet ~ _arrSet`, _arrSet);
  },
  // 数组扁平化
  arrFlat() {
    let arr = [0, [1, 1], 2, [2, [2, [3], 3], 3], 3, 4];
    let _arrFlat = ju.arrFlat(arr, 2);
    let _flat = arr.flat(2);
    console.log(`🚀 ~ arrFlat ~ _arrFlat`, _arrFlat);
    console.log(`🚀 ~ flat ~ _flat`, _flat);
  },
  // 字符串的 repeat 方法
  strRepeat() {
    let _repeatStr = ju.strRepeat('a', 2);
    console.log(`🚀 ~ strRepeat ~ _repeatStr`, _repeatStr);
  },
  // 数字千分符
  moneyNum() {
    let m1 = ju.moneyNum(12345678.34567);
    console.log(`🚀 ~ moneyNum ~ m1`, m1);
  },
  // 根据 id/pid 处理数据树
  objTree() {
    let source = [
      {
        id: 1,
        pid: 0,
        name: 'body',
      },
      {
        id: 11,
        pid: 10,
        name: 'body',
      },
      {
        id: 12,
        pid: 11,
        name: 'title',
      },
      {
        id: 2,
        pid: 1,
        name: 'title',
      },
      {
        id: 3,
        pid: 2,
        name: 'div',
      },
      {
        id: 13,
        pid: 12,
        name: 'div',
      },
      {
        id: 21,
        pid: 20,
        name: 'div',
      },
    ];

    let _tree = ju.objTree(source);
    // console.log(`🚀 ~ objTree ~ _tree`, _tree);
  },
  // 解析 url
  parseUrl() {
    let url =
      'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
    let _query = url.split('?')[1].split('&');
    console.log(`🚀 ~ parseUrl ~ _query`, _query);

    let _map = new Map();

    for (const item of _query) {
      let [_key, _val] = item.split('=');
      _val = /^\d+$/.test(_val)
        ? parseFloat(_val)
        : _val
        ? decodeURIComponent(_val)
        : true;
      _map.set(_key, _val);
    }
    console.log(`🚀 ~ parseUrl ~ _map`, _map);

    const getParameters = (URL) => {
      URL = JSON.parse(
        '{"' +
          decodeURI(URL.split('?')[1])
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') +
          '"}'
      );
      return JSON.stringify(URL);
    };

    getParameters(window.location);
    // Result: { search : "easy", page : 3 }

    // 或者更为简单的：
    Object.fromEntries(new URLSearchParams(window.location.search));
    // Result: { search : "easy", page : 3 }
  },
  // 交通信号灯
  trafficSignal() {
    const Signal = {
      green() {
        console.log('%c green light on', 'color: green');
      },
      yellow() {
        console.log('%c yellow light on', 'color: orange');
      },
      red() {
        console.log('%c red light on', 'color: red');
      },
    };

    function promise(delay) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, delay);
      });
    }

    async function signalLoop() {
      await promise(1000);
      Signal.green();
      await promise(1000);
      Signal.yellow();
      await promise(1000);
      Signal.red();
      signalLoop();
    }
    signalLoop();

    // function promise(delay, color) {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       switch (color) {
    //         case 'green':
    //           Signal.green();
    //           break;
    //         case 'yellow':
    //           Signal.yellow();
    //           break;
    //         case 'red':
    //           Signal.red();
    //           break;
    //       }
    //       resolve();
    //     }, delay);
    //   });
    // }

    // async function signalLoop() {
    //   await promise(1000, 'green');
    //   await promise(1000, 'yellow');
    //   await promise(1000, 'red');
    //   signalLoop()
    // }
    // signalLoop()

    console.log('我在哪输出');
  },
  trafficSignal2() {
    function red() {
      console.log('red');
    }
    function green() {
      console.log('green');
    }
    function yellow() {
      console.log('yellow');
    }
    // const task = (timer, light, callback) => {
    //   setTimeout(() => {
    //     if (light === 'red') {
    //       red();
    //     } else if (light === 'green') {
    //       green();
    //     } else if (light === 'yellow') {
    //       yellow();
    //     }
    //     callback();
    //   }, timer);
    // };
    // function loop() {
    //   task(1000, 'red', () => {
    //     task(1000, 'green', () => {
    //       task(1000, 'yellow', loop);
    //     });
    //   });
    // }
    // loop()

    function signal(delay, light) {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (light === 'red') {
            red();
          } else if (light === 'green') {
            green();
          } else if (light === 'yellow') {
            yellow();
          }
          resolve();
        }, delay);
      });
    }

    // function loop() {
    //   signal(1000, 'green').then(() => {
    //     signal(1000, 'yellow').then(() => {
    //       signal(1000, 'red').then(() => {
    //         loop()
    //       })
    //     })
    //   })
    // }
    async function loop() {
      await signal(1000, 'green');
      await signal(1000, 'yellow');
      await signal(1000, 'red');
      loop();
    }
    loop();
    console.log('我在哪输出...');
  },
  // 报数,一群人按顺序数到某个数的退出,下一个从一开始数继续
  leaveBehind() {
    // while (children.length > 10) {
    // }
    function _filter(num, step) {
      let children = [];
      for (let i = 0; i < num; ) {
        children[i] = ++i;
      }
      let len = children.length;

      // let right = len % step ? children.splice(-(len % step)) : [];
      // // console.log(`🚀 ~ _filter ~ right`, right)
      // children = children.filter((child, idx) => {
      //   return (idx + 1) % step;
      // });
      // children = right.concat(children);
      // // console.log(`🚀 ~ _filter ~ children`, children)
      // if (children.length >= step) {
      //   _filter(children);
      // }
      // // else result = children[1];
      // else {
      //   len = step - 1;
      // }

      let result;
      let outNum = 0;
      let childIdx = 0;
      let stepIdx = 0;

      // 随数据量爆炸增长
      // while (outNum < len - 1) {
      //   if (children[childIdx]) ++stepIdx;
      //   if (stepIdx === step) {
      //     ++outNum;
      //     children[childIdx] = null;
      //     stepIdx = 0;
      //   }
      //   if (++childIdx === len) childIdx = 0;
      //   // console.log(children);
      // }
      // [result] = children.filter((item) => item);

      // 高效实现
      while (children.length > 1) {
        // if (children[childIdx]) ++stepIdx;
        // debugger
        if (++stepIdx === step) {
          ++outNum;
          children.splice(childIdx, 1);
          --childIdx;
          stepIdx = 0;
        }
        if (++childIdx === children.length) childIdx = 0;
        // console.log(children);
      }
      [result] = children;

      console.log(`🚀 ~ _filter ~ result`, result);

      return result;
    }
    (async function () {
      let start = new Date();
      console.log(start);
      await _filter(30000, 3000);
      // _filter(10, 5);
      let end = new Date();
      console.log(end);
      console.log('执行耗时: ', end - start);
    })();
    // _filter(100, 5);
    // console.log(`🚀 ~ leaveBehind ~ result`, result);
  },
  // 斐波那契数列
  fibonacci() {
    // function fibo(n) {
    //   if (n === 0 || n === 1) return n;
    //   // return n + fibo(n - 1)
    //   return fibo(n - 1) + fibo(n - 2);
    // }
    // let f1 = fibo(50);
    // console.log(`🚀 ~ fibonacci ~ f1`, f1);

    // (async function () {
    //   let start = Date.now();
    //   console.log('start time2: ', start);
    //   let fnRet = await ju.fibonacci(40);
    //   console.log(`🚀 ~ fnRet`, fnRet);
    //   let end = Date.now();
    //   console.log('end time2: ', end);
    //   console.log(`函数执行用时2: ${end - start} ms`);
    // })()

    // // ju.exeTime(ju.fibonacci)(45);
    let fibo = ju.exeTime(ju.fibonacci);
    fibo(50);

    console.log('我在哪里输出...');
  },
  // 实现 prototype 继承
  // [prototype实现继承](https://www.jianshu.com/p/5c42bdb12ac0)
  proto() {
    function Person() {
      this.class = 'People';
    }
    Person.prototype.speak = function () {
      console.log("I'm a person!");
    };
    function Boy(name, age) {
      this.name = name;
      this.age = age;
      this.gender = 'male';
    }
    // function Girl() {
    //   this.gender = 'female';
    // }
    // Girl.prototype.nature = '八卦';
    Boy.prototype = new Person();
    Boy.prototype.constructor = Boy;
    Boy.prototype.nature = '闷骚';

    let boy = new Boy('Juching', 30);
    boy.speak();
    console.log(`🚀 ~ proto ~ Person`, new Person());
    console.log(`🚀 ~ proto ~ Boy`, new Boy());
    console.log(`🚀 ~ proto ~ boy`, boy);
    console.log(`🚀 ~ proto ~ boy.nature`, boy.nature);
    console.log(`🚀 ~ proto ~ boy instanceof Boy`, boy instanceof Boy);
    console.log(`🚀 ~ proto ~ boy instanceof Person`, boy instanceof Person);
  },
  // 循环引用判断
  loopCite() {
    const obj = {
      a: 'a',
      b: 'b',
    };

    obj.self = obj;

    function isLoopCite(obj, _itemList) {
      _itemList = _itemList || [obj];
      let ret = false;
      for (const key in obj) {
        // for (const item of obj) {
        if (typeof obj[key] === 'object') {
          for (const _item of _itemList) {
            // if (_item === obj[key]) return true;
            // _itemList.push(_item);
            if (_item === obj[key]) {
              ret = true;
            }
          }
          if (ret) return ret;
          ret = isLoopCite(obj[key], [..._itemList, obj[key]]);
          if (ret) return ret;
        }
      }
      return ret;
    }

    let _isLoopCite = isLoopCite(obj);
    console.log(`_isLoopCite`, _isLoopCite);

    const isCycleObject = (obj, parent) => {
      const parentArr = parent || [obj];
      for (let i in obj) {
        if (typeof obj[i] === 'object') {
          let flag = false;
          parentArr.forEach((pObj) => {
            if (pObj === obj[i]) {
              flag = true;
            }
          });
          if (flag) return true;
          flag = isCycleObject(obj[i], [...parentArr, obj[i]]);
          if (flag) return true;
        }
      }
      return false;
    };

    console.log('isCycleObject: ', isCycleObject(obj));

    const isLoop = (obj) => {
      let rs = '';
      try {
        JSON.stringify(obj);
      } catch (err) {
        rs = err; // 可执行
      }
      return rs.toString().indexOf('circular') === -1 ? false : true;
    };

    console.log('isLoop: ', isLoop(obj));

    // const a = 1;
    // const b = { a };
    // const c = { b };
    // const o = { d: { a: 3 }, c };
    // o.c.b.aa = a;
  },
  // 连续不重复的最长字符串
  maxNoRepeat() {
    let str = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJ
    function findMostWord(article) {
      // 合法性判断
      if (!article) return;
      // 参数处理
      article = article.trim().toLowerCase();
      let wordList = article.match(/[a-z]+/g),
        visited = [],
        maxNum = 0,
        maxWord = "";
      article = " " + wordList.join("  ") + " ";
      // 遍历判断单词出现次数
      wordList.forEach(function(item) {
        if (visited.indexOf(item) < 0) {
          // 加入 visited
          visited.push(item);
          let word = new RegExp(" " + item + " ", "g"),
            num = article.match(word).length;
          if (num > maxNum) {
            maxNum = num;
            maxWord = item;
          }
        }
      });
      return maxWord + "  " + maxNum;
    }abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;

    let maxLen = 0;
    let map = new Map();

    // for (const idx in str) {
    for (let i = 0; i < str.length; i++) {
      for (let idx = i; idx < str.length; idx++) {
        if (map.has(str[idx])) {
          maxLen = maxLen >= map.size ? maxLen : map.size;
          // console.log(Array.from(map));
          map.clear();
          break;
        }
        map.set(str[idx], str[idx]);
      }
    }

    console.log('不重复的最大长度: ', maxLen);
  },
  // 出现最多的字母
  mostChar() {
    let str = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJ
    function findMostWord(article) {
      // 合法性判断
      if (!article) return;
      // 参数处理
      article = article.trim().toLowerCase();
      let wordList = article.match(/[a-z]+/g),
        visited = [],
        maxNum = 0,
        maxWord = "";
      article = " " + wordList.join("  ") + " ";
      // 遍历判断单词出现次数
      wordList.forEach(function(item) {
        if (visited.indexOf(item) < 0) {
          // 加入 visited
          visited.push(item);
          let word = new RegExp(" " + item + " ", "g"),
            num = article.match(word).length;
          if (num > maxNum) {
            maxNum = num;
            maxWord = item;
          }
        }
      });ⅡⅡⅡ
      return maxWord + "  " + maxNum;
    }abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;

    let map = new Map();
    let char;
    let max = 0;
    for (const char of str) {
      if (map.has(char)) {
        let count = map.get(char);
        map.set(char, ++count);
      } else {
        map.set(char, 1);
      }
    }
    // console.log(map);
    // console.log(map.get('Ⅱ'));

    for (const [key, val] of map) {
      // console.log(key);
      if (val > max) [char, max] = [key, val];
    }

    console.log(`出现最多的字符是 ${encodeURI(char)}, 出现了 ${max} 次`);
  },
  // 数据双向绑定
  dataVM() {
    //
  },
  // 发布订阅
  pubSub() {
    //
  },
  // 简单路由
  router() {
    //
  },
  // MPC/MPV/MVVM...
  mvx() {
    //
  },
  // 面向对象
  oop() {
    // - OOP: (Object Oriented Programming)
    //   - 封装: 将面向过程的代码按属性/功能功能集进行抽象和封装
    //   - 继承: 利用原型实现实例和构造函数之间的继承
    //   - 多态: (同一操作作用于不同的对象，可以有不同的解释，产生不同的执行结果。)
    //     - 多态实现方式：覆盖/重载/接口
    //     - 覆盖(重写): 指子类重新定义父类方法，这正好就是基于prototype继承的玩法，这不就多态了么
    //     - 重载是指多个同名但参数不同的方法，可以根据arguments来判断参数个数和类型，然后再函数体中分情况执行不同的代码
    //     - 接口和抽象类: 一般可以把接口和抽象类中需要实现的方法都抛出异常，如果没有被实现就会报错

    function Animal(name) {
      this.name = name;
    }
    Animal.prototype.sing = function (sound) {
      console.log(`${this.name}的歌声: ${sound}`);
    };
    // 接口和抽象类
    Animal.prototype.parents = function () {
      console.log(this);
      throw `${this.name}是从石头缝里蹦出来的...`;
    };

    // let dog = new Animal('dog');
    // dog.sing('汪汪汪')
    // let cat = new Animal('cat');
    // cat.sing('喵喵喵')
    // let duck = new Animal('duck');
    // duck.sing('嘎嘎嘎')
    let wukong = new Animal('wukong');
    wukong.sing('呔!');
    try {
      wukong.parents();
    } catch (error) {
      console.error(error);
    }

    function Person(name, age) {
      this.name = name;
      this.age = age;
    }
    Person.prototype = new Animal();
    Person.prototype.constructor = Person;
    Person.prototype.sport = function (sport) {
      console.log(`我会${sport}`);
    };
    Person.prototype.parents = function (fa, ma) {
      console.log(`${this.name}的父母是: ${fa} & ${ma}`);
    };

    let p1 = new Person('Juching', 30);
    p1.sing('12345678');
    p1.sport('踢足球');
    try {
      p1.parents('Zhu', 'Xiao');
    } catch (error) {
      console.error(error);
    }
    console.log(`🚀 ~ oop ~ p1`, p1);
    console.log(`🚀 ~ oop ~ p1.constructor`, p1.constructor);

    // class Bill {
    //   constructor(price, count) {
    //     this.price = price;
    //     this.count = count;
    //     console.log(`🚀 ~ Bill ~ constructor ~ new.target`, new.target);
    //   }
    //   getTotal() {
    //     return this.price * this.count;
    //   }
    // }

    // let bill1 = new Bill(9.9, 2);
    // let total1 = bill1.getTotal();
    // console.log(`🚀 ~ oop ~ total1`, total1);

    // class QixiBill extends Bill {
    //   constructor(price, count, discount) {
    //     super(price, count);
    //     this.discount = discount;
    //     console.log(`🚀 ~ QixiBill ~ constructor ~ new.target`, new.target);
    //   }
    //   getTotal() {
    //     // return this.price * this.count * this.discount;
    //     return super.getTotal() * this.discount;
    //   }
    // }
    // let bill2 = new QixiBill(9.9, 2, 0.77);
    // let total2 = bill2.getTotal();
    // console.log(`🚀 ~ oop ~ total2`, total2);

    class Bill {
      constructor(price, count) {
        this.price = price;
        this.count = count;
        this.total = this.price * this.count;
        // console.log(`🚀 ~ Bill ~ constructor ~ new.target`, new.target);
      }
      getTotal() {
        return this.discountTotal(this.total);
      }
      discountTotal(price) {
        return price;
      }
    }

    let normalBill1 = new Bill(10, 2);
    let normalTotal1 = normalBill1.getTotal();
    console.log(`🚀 [常规订单] normalTotal1`, normalTotal1);

    class QixiBill extends Bill {
      discountTotal(price) {
        console.log(`[七夕] 打 77 折: ${price} * 0.77 = ${price * 0.77}`);
        return price * 0.77;
      }
    }
    let qixiBill = new QixiBill(10, 2);
    let qixiTotal = qixiBill.getTotal();
    // console.log(`🚀 ~ oop ~ qixiTotal`, qixiTotal);

    class ZhongqiuBill extends Bill {
      discountTotal(price) {
        if (price >= 399) {
          console.log(`[中秋] 满 399 减 100: ${price} - 100 = ${price - 100}`);
        } else {
          console.log(`[中秋] 打 8 折: ${price} * 0.8 = ${price * 0.8}`);
        }
        return price >= 399 ? price - 100 : price * 0.8;
      }
    }
    let zhongqiuBill = new ZhongqiuBill(200, 2);
    let zhongqiuTotal = zhongqiuBill.getTotal();
    // console.log(`🚀 ~ oop ~ zhongqiuTotal`, zhongqiuTotal);
    let zhongqiuBill2 = new ZhongqiuBill(100, 2);
    let zhongqiuTotal2 = zhongqiuBill2.getTotal();
    // console.log(`🚀 ~ oop ~ zhongqiuTotal2`, zhongqiuTotal2);

    class GuoqingBill extends Bill {
      discountTotal(price) {
        let randomNum = Math.ceil(Math.random() * 8);
        if (price < 100) {
          console.log(`[国庆] 订单价 ${price} 在 100 以内,有 1/8 免单机会`);
          if (randomNum === 1) {
            console.log(`[国庆] 恭喜: 抽中免单机会!!!`);
            return 0;
          }
          console.log(`[国庆] 差一点点抽中免单机会,需支付 ${price}`);
          return price;
        } else {
          console.log(`[国庆] 满 100 打 9 折: ${price} * 0.9 = ${price * 0.9}`);
          return price * 0.9;
        }
        // return price < 100 && Math.ceil(Math.random() * 8) === 1 ? 0 : price;
      }
    }
    let guoqingBill = new GuoqingBill(10, 4);
    let guoqingTotal = guoqingBill.getTotal();
    let guoqingBill2 = new GuoqingBill(10, 10);
    let guoqingTotal2 = guoqingBill2.getTotal();
    // console.log(`🚀 ~ oop ~ guoqingTotal`, guoqingTotal);
  },
};

// test.createObj();
// test.instanceof();
// test.new();
// test.promiseAll();
// test.promiseAllSettled();
// test.debounce();
// test.throttle();
test.debounce_throttle();
// test.getType();
// test.call_apply_bind();
// test.curry();
// test.exeTime();  // TODO
// test.httpReq();
// test.shallowCopy();
// test.deepClone();
// test.formatDate();
// test.randomList();
// test.swapVar();
// test.arrSum();
// test.arrSet();
// test.arrFlat();
// test.strRepeat();
// test.moneyNum();
// test.objTree();
// test.parseUrl();
// test.trafficSignal();
// test.trafficSignal2();
// test.leaveBehind();
// test.fibonacci();
// test.proto();
// test.loopCite();
// test.maxNoRepeat();
// test.mostChar();
// test.dataVM();
// test.pubSub();
// test.router();
// test.mvx();
test.oop();
