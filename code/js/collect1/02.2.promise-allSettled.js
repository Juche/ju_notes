var p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("p1成功!"); //代码正常执行！
  });
});
var p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("p2失败!");
  });
});
var p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("p3失败!");
  });
});

// // 1. 通过 setTimeout 宏任务来接收 promise 的 resolve/reject 的微任务结果
// // 保证 promise then 处理完
// function promiseAllSettled(list) {
//   let result = [];
//   return new Promise(async (resolve, reject) => {
//     for (item of list) {
//       let settleInfo = null;
//       item
//         .then((res) => {
//           settleInfo = {
//             status: "fulfilled",
//             value: res,
//           };
//           result.push(settleInfo);
//         })
//         .catch((err) => {
//           settleInfo = {
//             status: "rejected",
//             value: err,
//           };
//           result.push(settleInfo);
//         });
//     }
//     setTimeout(() => {
//       resolve(result);
//     }, 0);
//   });

  // // 2. 尝试用 async await 简化异步流程
  // // 一遇到 reject 就会结束循环
  // return new Promise(async (resolve, reject) => {
  //   let settleInfo = null;
  //   try {
  //     for await (item of list) {
  //       settleInfo = {
  //         status: "fulfilled",
  //         value: item,
  //       };
  //       result.push(settleInfo);
  //     }
  //   } catch (error) {
  //     settleInfo = {
  //       status: "rejected",
  //       value: error,
  //     };
  //     result.push(settleInfo);
  //   }
  //   resolve(result);
  // });

  // 3. 通过 async await 简化异步流程
  return new Promise(async (resolve, reject) => {
    for (item of list) {
      let settleInfo = null;
      try {
        settleInfo = {
          status: "fulfilled",
          value: await item,
        };
      } catch (error) {
        settleInfo = {
          status: "rejected",
          value: await error,
        };
      }
      console.log(`🚀 ~ settleInfo`, settleInfo);
      result.push(settleInfo);
    }
    resolve(result);
  });


let result = promiseAllSettled([p1, p2, p3, p1, p3, p2]).then((res) => {
  console.log(`🚀 ~ result ~ res`, res);
});

// Promise 新 api
// let result = Promise.allSettled([p1, p2]).then((res) => {
//   console.log(`🚀 ~ result ~ res`, res)
// });
