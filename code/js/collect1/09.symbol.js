const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1);
// expected output: "symbol"

console.log(symbol2 === 42);
// expected output: false

console.log(symbol3.toString());
// expected output: "Symbol(foo)"

console.log(Symbol('foo') === Symbol('foo'));
// expected output: false

let mySymbol = Symbol();

// Symbol 值作为对象属性名时，不能用点运算符

// 第一种写法
let a1 = {};
a1[mySymbol] = 'Hello!';

// 第二种写法
let a2 = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
let a3 = {};
Object.defineProperty(a3, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a3[mySymbol] // "Hello!"

const roles = {
  s1: Symbol('s1'),
  s2: Symbol('s2'),
  [Symbol('s1')]: 's1',
  [Symbol('s2')]: 's2',
}

let syA = Symbol('a')
let syB = Symbol('b')
// roles[Symbol('a')] = 'aa'
// roles[Symbol('b')] = 'bb'
roles[syA] = 'aa'
roles[syB] = 'bb'

// Object.getOwnPropertySymbols(roles);
console.log(`🚀 ~ Object.getOwnPropertySymbols(roles)`, Object.getOwnPropertySymbols(roles))
console.log(`🚀 ~ roles`, roles)
console.log(`🚀 ~ syA`, syA)
console.log(`🚀 ~ syA.description`, syA.description)
// console.log(`🚀 ~ roles`, roles[Symbol('a')])
console.log(`🚀 ~ roles`, roles[syA])
