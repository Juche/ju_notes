// 直接使用 fetch
// fetch('/userInfo2', {
//   method: 'POST',
// })
//   .then((res) => {
//     // console.log(res);
//     // return res.statusText === 'OK' ? res.json() : void 0;
//     if (res.statusText === 'OK') {
//       return res.json();
//     } else {
//       throw new Error(res.statusText);
//     }
//   })
//   .then((res) => {
//     console.log(`🚀 ~ .then ~ 成功响应结果 res: `, res);
//   })
//   .catch((err) => console.error(`🚀 ~ .catch ~ 响应失败抛出错误信息`, err));

// // 简单封装 fetch
// function f(api, method) {
//   return fetch(api, {
//     method: method ?? 'POST',
//   })
//     .then((res) => {
//       // console.log(res);
//       // return res.statusText === 'OK' ? res.json() : void 0;
//       if (res.statusText === 'OK') {
//         console.log(`🚀 ~ .then ~ res.json()`, res.json())
//         return res.json();
//       } else {
//         throw new Error(res.statusText);
//       }
//     })
//     .then((res) => {
//       console.log(`🚀 ~ .then ~ ${method} 成功响应结果 res: `, res);
//       return res;
//     })
//     .catch((err) => console.error(`🚀 ~ .catch ~ ${method} 响应失败抛出错误信息`, err));
// }

// 使用 async/await 封装 fetch
async function f(api, method) {
  // let res = await fetch(api, { method: method ?? 'POST' });
  let fRsp = fetch(api, {
    method: method ?? 'POST',
  });

  let res = await fRsp;
  console.log(`🚀 ~ f ~ res`, res);

  // try {
  //   let data = await res.json();
  //   console.log(`🚀 ~ f ~ data`, data)
  // } catch (error) {
  //   throw new Error(res.statusText)
  // }
  if (res.statusText === 'OK') {
    let data = await res.json();
    console.log(`🚀 ~ f ~ data`, data);
  } else {
    console.warn(`🚀 ~ f ~ res.statusText ERROR:`, res.statusText);
  }
}

f('/getUser', 'GET');
f('/getUser1', 'GET');
f('/userInfo', 'POST');
f('/userInfo1', 'POST');
