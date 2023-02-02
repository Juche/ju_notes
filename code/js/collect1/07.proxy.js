const target = {
  name: 'New born',
  age: 0,
}

const proxyHandle = {
  get(tar, key) {
    console.log(`${key} 被读取, 值为 ${tar[key]}`);
    return tar[key]
  },
  set(tar, key, val) {
    console.log(`${key} 被设置为 ${val}`);
    tar[key] = val
  }
}

let ju = new Proxy(target, proxyHandle)
ju.name  //name 被读取, 值为 New born
ju.name = 'Juching'  // 被设置为 Juching
ju.age = 30  //age 被设置为 30

// proxy对象是obj的原型对象，obj本身并没有time属性，所以根据原型链，会在proxy对象上读取属性，从而被拦截
var proxy = new Proxy({}, {
  get: function(target, property) {
    return 35;
  }
});
let obj = Object.create(proxy);
console.log(`🚀 ~ obj`, obj)
obj.time // 35

// 同一个拦截函数，可以设置多个操作
var handler = {
  get: function (target, name) {
    if (name === 'prototype') {
      return Object.prototype;
    }
    return 'Hello, ' + name;
  },

  apply: function (target, thisBinding, args) {
    return args[0];
  },

  construct: function (target, args) {
    return { value: args[1] };
  }
};

var fproxy = new Proxy(function (x, y) {
    return x + y;
}, handler);

fproxy(1, 2) // 1
new fproxy(1, 2) // {value: 2}
fproxy.prototype === Object.prototype // true
fproxy.foo === "Hello, foo" // true
