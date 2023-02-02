// 'use strict';
// async function async1() {
//   await async2();
//   console.log('async1');
//   return 'async1 success';
// }
// async function async2() {
//   return new Promise((resolve, reject) => {
//     console.log('async2');
//     // resolve('async2 success');
//     reject('error');
//   });
// }

// async1()
//   .then((res) => console.log(res))
//   // .catch((err) => {
//   //   console.log(err);
//   // });

// const first = () =>
//   new Promise((resolve, reject) => {
//     console.log(3);
//     let p = new Promise((resolve, reject) => {
//       console.log(7);
//       setTimeout(() => {
//         console.log(5);
//         resolve(6);
//         console.log(p);
//       }, 0);
//       resolve(1);
//     });
//     resolve(2);
//     p.then((arg) => {
//       console.log(arg);
//     });
//   });
// first().then((arg) => {
//   console.log(arg);
// });
// console.log(4);

// ====================

// var a = 10;
// var obj = {
//   a: 20,
//   say: () => {
//     console.log(this.a);
//   },
// };

// obj.say();

// let _say = obj.say
// _say()

// ====================

// var anotherObj = { a: 30 };
// obj.say.apply(anotherObj);

// function b() {
//   console.log('window.b function');
// }

// var obj = {
//   // a: () => { // this 指向其父级所处的上下文(即 obj 的上下文 => windows 对象)
//   a: function() { // this 指向调用环境
//     setTimeout(() => {
//       // setTimeout外面的this是什么这个箭头函数中的this就是什么
//       this.b();
//     }, 500);
//   },
//   b: function () {
//     console.log('aaa');
//   },
// };

// obj.a()
// // let _a = obj.a;
// // _a();

// ====================

class Box {
  constructor() {
    console.log('aaa');
  }
  // 实例化方法
  play() {
    console.log(this); //this是当前类实例化的对象
  }
  // 静态方法
  static run() {
    console.log(this); //this是当前类也是构造函数
    console.log('aaaa');
  }
}

// 当直接调用Box时Box指的是类，当使用new Box()时Box指的是类里面的构造函数constructor
var b = new Box();
b.a = 'aaa';
// b.constructor.run();
// Box.run();
b.play();
// Box.play();

// console.log(b.constructor);
// console.log(b.constructor === Box);



window.number = 2;
var obj = {
 number: 3,
 db1: (function(){
   console.log(this);
   this.number *= 4;
   return function(){
     console.log(this);
     this.number *= 5;
   }
 })()
}
var db1 = obj.db1;
db1();
obj.db1();
console.log(obj.number);
console.log(window.number);
