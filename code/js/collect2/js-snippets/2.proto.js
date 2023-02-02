// https://www.cnblogs.com/iflygofy/p/11052833.html

// 1. 原型(prototype): 函数特有的属性,是一个对象,指向函数的原型对象,通过它来实行属性的继承
// 原型的概念：对象(除null外)创建的时候，就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型中“继承”属性。
// Function的prototype指向一个特殊匿名函数，而这个特殊匿名函数的__proto__指向Object.prototype

// 2. __proto__: 所有对象都有的属性,是一个指针,指向该对象的构造函数的prototype
// 绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于 Person.prototype 中，实际上，它是来自于 Object.prototype ，与其说是一个属性，不如说是一个 getter/setter，当使用 obj.__proto__ 时，可以理解成返回了 Object.getPrototypeOf(obj)。
// console.log(Object.getPrototypeOf(person) === Person.prototype) // true

// 3. constructor: 原型有一个constructor属性，指向该关联的构造函数
// console.log(person.constructor === Person); // true
// 当获取 person.constructor 时，其实 person 中并没有 constructor 属性,当不能读取到constructor 属性时，会从 person 的原型也就是 Person.prototype 中读取，正好原型中有该属性，所以：
// person.constructor === Person.prototype.constructor

// 4. 原型链: 读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止
// 每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。那么假如我们让原型对象等于另一个类型的实例，结果会怎样？显然，此时的原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数的指针。假如另一个原型又是另一个类型的实例，那么上述关系依然成立。如此层层递进，就构成了实例与原型的链条。这就是所谓的原型链的基本概念 —— 摘自《javascript高级程序设计》

// 5. 构造函数: 构造函数模式的目的就是为了创建一个自定义类，并且创建这个类的实例。构造函数模式中拥有了类和实例的概念，并且实例和实例之间是相互独立的

// 1.对象有属性__proto__,指向该对象的构造函数的原型对象。
// 2.方法除了有属性__proto__,还有属性prototype，prototype指向该方法的原型对象。
// 方法这个特殊的对象，除了和其他对象一样有上述_proto_属性之外，还有自己特有的属性——原型属性（prototype）
// 这个属性是一个指针，指向一个对象，这个对象的用途就是包含所有实例共享的属性和方法（我们把这个对象叫做原型对象）
// 原型对象也有一个属性，叫做constructor，这个属性包含了一个指针，指回原构造函数

//instanceof运算符
// L instanceof R
// //instanceof运算时，通过判断L的原型链上是否存在R.prototype
// L.__proto__.__proto__ ..... === R.prototype ？
// //如果存在返回true 否则返回false

// Object.getPrototypeOf(obj)
// 获取构造函数的原型对象, 和 obj.__proto__ 一致

function Foo() {
  // console.log('function Foo');
}
Foo.prototype.getName = function(name) {
  return name
}

// Foo.prototype = {
//   constructor: Function,
// }

let obj = new Object();
let func = new Function();
let foo = new Foo();

console.log('obj: ', obj);
console.log('func: ', func);
console.log('foo: ', foo);

console.log('Object: ', Object);
console.log('Function: ', Function);
console.log('Foo: ', Foo);

// Function instanceof Object;  // true
// Object instanceof Function;  // true

console.log(`🚀 ~ foo.constructor`, foo.constructor)
console.log(`🚀 ~ foo instanceof Foo`, foo instanceof Foo)
console.log(`🚀 ~ foo instanceof Function`, foo instanceof Function)  // false
console.log(`🚀 ~ foo instanceof Object`, foo instanceof Object)  // true
console.log(`🚀 ~ Object.getPrototypeOf(foo)`, Object.getPrototypeOf(foo) === foo.__proto__)
console.log(`🚀 ~ Object.getPrototypeOf(foo).constructor`, Object.getPrototypeOf(foo).constructor)

// ! `{constructor: ƒ}` 这个是什么?
// ! Function的prototype指向一个特殊匿名函数，而这个特殊匿名函数的__proto__指向Object.prototype
// 除了 function 实例有 prototype, 其他实例默认没有 prototype
// console.warn('========== prototype => undefined ==========');
// console.log('obj.prototype: ', obj.prototype);  // undefined
// console.log('func.prototype: ', func.prototype);  // ! `{constructor: ƒ}` 这个是什么?
// console.log('foo.prototype: ', foo.prototype);  // undefined
// console.log('func.prototype*2: ', func.prototype.prototype);  // undefined
// console.log('Function.prototype: ', Function.prototype);  // ƒ () { [native code] }
// console.log('Function.prototype*2: ', Function.prototype.prototype);  // undefined
// console.log('Object.prototype: ', Object.prototype);  // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// console.log('Foo.prototype: ', Foo.prototype);  // {getName: ƒ, constructor: ƒ}

// [实例].__proto__ 是 [构造函数].prototype
// [构造函数].prototype.__proto__ 是 Object.prototype
// Object.prototype 的 __proto__ 是 null
// console.warn('========== __proto__ => null ==========');
// console.log('obj.__proto__: ', obj.__proto__);
// console.log('func.__proto__: ', func.__proto__);
// console.log('foo.__proto__: ', foo.__proto__);
// console.log('obj.__proto__*2: ', obj.__proto__.__proto__);
// console.log('func.__proto__*2: ', func.__proto__.__proto__);
// console.log('foo.__proto__*2: ', foo.__proto__.__proto__);  // null
// console.log('func.__proto__*3: ', func.__proto__.__proto__.__proto__);  // null
// console.log('foo.__proto__*3: ', foo.__proto__.__proto__.__proto__);  // null
// // [构造函数].__proto__ 是 Function.prototype
// console.log('Object.__proto__: ', Object.__proto__);
// console.log('Function.__proto__: ', Function.__proto__);
// console.log('Foo.__proto__: ', Foo.__proto__);

// console.warn('========== 实例的 __proto__ 是构造函数的 prototype ==========');
// console.log('obj.__proto__ === Object.prototype: ', obj.__proto__ === Object.prototype);
// console.log('func.__proto__ === Function.prototype: ', func.__proto__ === Function.prototype);
// console.log('foo.__proto__ === Foo.prototype: ', foo.__proto__ === Foo.prototype);

// Function 是构造函数的终点
// 实例.constructor 是构造函数
// 实例 instanceof 构造函数
// 所有实例都是由 Function 构造方法经过一层或多层创建而来
// console.warn('========== instanceof => Function ==========');
// // true
// console.log('obj instanceof Object: ', obj instanceof Object);
// console.log('func instanceof Function: ', func instanceof Function);
// console.log('foo instanceof Foo: ', foo instanceof Foo);
// console.log('Object instanceof Function: ', Object instanceof Function);
// console.log('Function instanceof Function: ', Function instanceof Function);
// console.log('Foo instanceof Function: ', Foo instanceof Function);
// // ! instanceof的判断依据是查找原型链。 而 Object.prototype已经到原型链最顶层了， Object.prototype.__proto__ 值为null
// console.log('Object.prototype instanceof Object: ', Object.prototype instanceof Object);  // ! false
// console.log('Function.prototype instanceof Object: ', Function.prototype instanceof Object);  // true
// console.log('Foo.prototype instanceof Object: ', Foo.prototype instanceof Object);  // true

// console.warn('========== constructor => Function ==========');
// console.log('obj.constructor: ', obj.constructor);  // ƒ Object() { [native code] }
// console.log('func.constructor: ', func.constructor);  // ƒ Function() { [native code] }
// console.log('foo.constructor: ', foo.constructor);  // ƒ Foo() {}

// console.log('Object.prototype.constructor: ', Object.prototype.constructor);
// console.log('Function.prototype.constructor: ', Function.prototype.constructor);
// console.log('Foo.prototype.constructor: ', Foo.prototype.constructor);
// // true
// console.log('obj.constructor === Object.prototype.constructor: ', obj.constructor === Object.prototype.constructor);
// console.log('func.constructor === Function.prototype.constructor: ', func.constructor === Function.prototype.constructor);
// console.log('foo.constructor === Foo.prototype.constructor: ', foo.constructor === Foo.prototype.constructor);

// // 下列都是ƒ Function() { [native code] }
// console.log('obj.constructor*2: ', obj.constructor.constructor);
// console.log('func.constructor*2: ', func.constructor.constructor);
// console.log('foo.constructor*2: ', foo.constructor.constructor);
// console.log('Object.constructor: ', Object.constructor);
// console.log('Function.constructor: ', Function.constructor);
// console.log('Foo.constructor: ', Foo.constructor);
