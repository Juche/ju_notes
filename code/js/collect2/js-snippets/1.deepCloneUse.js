// 1. export default deepClone
// export default 时,引入不需要大括号包裹
// import deepClone1 from "./deepCloneModule.js";

// 2. export { deepClone1, deepClone2, deepClone3 } 形式的输出通过以下方式引入
// import { deepClone1, deepClone2, deepClone3 } from "./deepCloneModule.js";

// 3. 通过下列方式按需引入,逻辑可以在判断条件中
// if() {
//   import().then(() => {})
// }
// let {hi, bye} = await import('./say.js');
// hi();
// bye();
// import('./deepCloneModule.js').then(
//   ({ deepClone1, deepClone2, deepClone3 }) => {
//     let obj = { a: 123 };
//     let _obj = deepClone1(obj);
//     console.log(`🚀 ~ _obj`, _obj);
//     console.log(`🚀 ~ _obj === obj`, _obj === obj);
//   }
// );

// 4. import 别名
// import * as clone from './deepCloneModule.js';
// let _obj = clone.deepClone1(obj);
import {
  getInvokeTime,
  deepClone as clone,
  deepClone1 as clone1,
  deepClone2 as clone2,
  deepClone3 as clone3,
  deepClone4 as clone4,
  deepClone5 as clone5,
  deepClone6 as clone6,
  deepClone7 as clone7,
  deepClone8 as clone8,
} from './1.deepCloneModule.js';

// let obj = {
//   a: 123,
//   b: null,
//   c: undefined,
//   d: void 0,
//   [Symbol('e')]: 'e',
//   f: () => 'f',
//   g: new Map([["key1", "value1"], ["key2", "value2"]]),
//   h: new Set([1,2]),
//   i: /\w+/,
//   j: new RegExp(/\w+/, 'ig'),
//   // j: new RegExp("\\w+"),
//   k: Date.now(),
//   l: new Date(),
//   m: [1,2,3],
// };

// obj.self = obj;

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

// 4.添加不可枚举属性
Object.defineProperty(obj, 'innumerable', {
  enumerable: false,
  value: '不可枚举属性 1',
});

// 5.设置原型对象
Object.setPrototypeOf(obj, {
  proto: 'proto',
});
// // 设置对象内函数的原型
// Object.setPrototypeOf(obj.func, {
//   proto: 'proto_func',
// });

// // 给函数原型添加属性
// obj.func.prototype.a1 = 'proto_func_a1';
// obj.func.__proto__.a2 = 'proto_func_a2';

// 6.设置loop成循环引用的属性
obj.loop = obj;

let startTime = Date.now();
let _obj = clone(obj);
// 测试拷贝效率
// for (let index = 0; index < 10000; index++) {
//   _obj[index] = clone(obj);
// }

// 记录拷贝用时
async function getCloneTime(startTime) {
  let endTime = Date.now();
  let cloneTime = endTime - startTime;
  console.log(`🚀 ~ deepClone ~ startTime`, startTime);
  console.log(`🚀 ~ deepClone ~ endTime`, endTime);
  return cloneTime;
}

let cloneTime = await getCloneTime(startTime);
// 650 - 730
console.log(`🚀 ~ cloneTime`, cloneTime);
// 测试拷贝函数调用次数
getInvokeTime();

// clone5(0);
// clone5('');
// clone5(true);
// clone5(undefined);
// clone5(null);
// clone5(Symbol('sym'));
// clone5(BigInt(1n));
// clone5([]);
// clone5({});
// clone5(() => {});

// =========== 1.基础数据类型 ===========
obj.num = 2;
obj.str = 'bbb';
obj.bool = false;
obj.undef = undefined;
obj.null = null;
obj.symbol = Symbol('sym2');
obj.bigInt = BigInt(2n);
// =========== 2.Object类型 ===========
obj.obj = {
  name: '我是ye一个对象',
  id: 2,
};
obj.arr = [3, 4, 5];
obj.func = function () {
  console.log('我是ye一个函数');
};
obj.date = new Date();
// obj.reg = new RegExp('/我是ye一个正则/ig');
obj.reg = new RegExp(/我ye是一个正则/, 'ig');
// obj.map = new Map().set('mapKey', 2);
// obj.set = new Set().add('set2');
obj.map.set('m', 'm2');
obj.map.set('n', [1, 2]);
obj.set.add({ b: 'abc' });
// =========== 3.其他 ===========
obj[Symbol('2')] = 2;

// Object.defineProperty(obj, 'innumerable', {
//   enumerable: false,
//   value: '不可枚举属性 2',
// });

Object.setPrototypeOf(obj, {
  proto: 'proto2',
});

obj.func();
_obj.func();

obj.func.prototype.a1 = 'proto_func_a1';
obj.func.__proto__.a2 = 'proto_func_a2';
_obj.func.prototype.a1 = 'proto_func_aaa1';
_obj.func.__proto__.a2 = 'proto_func_aaa2';

// 1. 每个函数function都有一个prototype，即显式原型
// 2. 每个实例对象都有一个__proto__，可称为隐式原型
// 3. 对象的隐式原型的值为其对应构造函数的显式原型的值
// * 函数的prototype属性: 在定义函数时自动添加的, 默认值是一个空Object对象
// * 对象的__proto__属性: 创建对象时自动添加的, 默认值为构造函数的prototype属性值

// f Function() { [native code] }
console.log(`🚀 ~ obj.func.constructor`, obj.func.constructor);
console.log(`🚀 ~ _obj.func.constructor`, _obj.func.constructor);
// true
console.log(
  `🚀 ~ obj.func.constructor === _obj.func.constructor`,
  obj.func.constructor === _obj.func.constructor
);

// ƒ () { [native code] }
console.log(`🚀 ~ Function.prototype`, Function.prototype);
console.log(`🚀 ~ obj.func.__proto__`, obj.func.__proto__);
// true
console.log(
  `🚀 ~ Function.prototype === _obj.func.__proto__`,
  Function.prototype === _obj.func.__proto__
);
console.log(
  `🚀 ~ obj.func.__proto__ === _obj.func.__proto__`,
  obj.func.__proto__ === _obj.func.__proto__
);

// console.log(`🚀 ~ obj.func.prototype`, obj.func.prototype)
// console.log(`🚀 ~ obj.func.__proto__`, obj.func.__proto__)
// console.log(`🚀 ~ _obj.func.prototype`, _obj.func.prototype)
// console.log(`🚀 ~ _obj.func.__proto__`, _obj.func.__proto__)

// console.log(`🚀 ~ obj.func.prototype === _obj.func.prototype`, obj.func.prototype === _obj.func.prototype)

// console.log(`🚀 ~ obj.func.prototype.constructor === obj.func.__proto__`, obj.func.prototype.constructor === obj.func.__proto__)
// console.log(`🚀 ~ _obj.func.prototype.constructor === _obj.func.__proto__`, _obj.func.prototype.constructor === _obj.func.__proto__)

console.log(`🚀 ~ obj`, obj);
console.log(`🚀 ~ _obj`, _obj);
// console.log(`🚀 ~ _obj.__proto__`, _obj.__proto__);
console.log(`🚀 ~ _obj === obj`, _obj === obj);
