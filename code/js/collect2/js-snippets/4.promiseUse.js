import { getExpendTime, sleep } from './4.promise.js';

let startTime = Date.now();
console.log(`🚀 ~ startTime`, startTime);

// promise 使用 then 调用
// sleep(1000).then(() => {
//   getExpendTime(startTime);
// });

// await sleep(1000);
// getExpendTime(startTime);

async function tt(arg) {
  console.log(`async function tt: ${arg}`);
  return arg;
}

// let _tt = await tt(getExpendTime(startTime));
// let _tt = await tt(123);
let _tt = tt(123).then(() => {
  console.log(456)
})
console.log(`🚀 ~ _tt`, _tt)

await tt('xyz')

// promise 使用 await 调用
// // (async () => {  // 不阻塞后面的执行
// await (async () => {  // 阻塞后面的执行
//   await sleep(1000);
//   getExpendTime(startTime);
// })();

let f1 = async () => {  // 不阻塞后面的执行
  await sleep(1000);
  getExpendTime(startTime);
}
let _f1 = f1()
console.log(`🚀 ~ _f1`, _f1)
// let _f2 = await f1()
// console.log(`🚀 ~ _f2`, _f2)

// 这个会阻塞后面的执行
// async function _sleep(delay) {
//   await sleep(delay);
// }
// await _sleep(1000);
// getExpendTime(startTime);

console.log('我什么时候执行');
