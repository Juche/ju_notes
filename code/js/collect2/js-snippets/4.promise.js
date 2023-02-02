function getExpendTime(startTime) {
  let endTime = Date.now();
  console.log(`🚀 ~ endTime`, endTime);
  let expendTime = endTime - startTime;
  console.log(`🚀 ~ expendTime`, expendTime);

  return expendTime;
}

// 1. 利用代码阻塞强制延时(不推荐)
// function sleep(delay) {
//   let i = 0;
//   let startTime = Date.now();
//   while (Date.now() < startTime + delay) {
//     i++
//   }
//   return i
// }

// let _i = sleep(1000);
// console.log(`🚀 ~ _i`, _i)
// getExpendTime(startTime);
// 2. promise
function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

export {
  getExpendTime,
  sleep,
}
