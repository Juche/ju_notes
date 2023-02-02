var promiseResolve = new Promise(function (resolve, reject) {
  //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
  //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
  setTimeout(function () {
    resolve("成功!"); //代码正常执行！
  }, 250);
});

promiseResolve
  .then((result) => {
    console.log(`🚀 ~ promiseResolve result`, result);
  })
  .catch((err) => {
    console.log(`🚀 ~ promiseResolve err`, err);
  });

var promiseReject = new Promise(function (resolve, reject) {
  //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
  //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
  setTimeout(function () {
    reject("失败!"); //代码正常执行！
  }, 250);
});

promiseReject
  .then((result) => {
    console.log(`🚀 ~ promiseReject result`, result);
  })
  .catch((err) => {
    console.log(`🚀 ~ promiseReject err`, err);
  });

// [setTimeout,promise,async await的区别](https://gongchenghuigch.github.io/2019/09/14/awat/)

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(function () {
  console.log("settimeout");
});
async1();
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");
