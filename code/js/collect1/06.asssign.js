var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };
var obj = Object.assign({}, o1, o2, o3);
console.log(`🚀 ~ obj`, obj); // { a: 1, b: 2, c: 3 }
// var obj = Object.assign(o1, o2, o3);
// console.log(`🚀 ~ o1`, o1); // { a: 1, b: 2, c: 3 }, 注意目标对象自身也会改变。
