function* gen(apis) {
  // yield fetch('/userInfo', {method: 'POST'});
  // let api1 = yield 0;
  // console.log('apis.api1: ', ...apis.api1);
  yield fetch(...apis.api1);
  yield fetch(...apis.api2);
  yield fetch(...apis.api3);
  return fetch(...apis.api4);
  // let api3 = yield fetch(api2, conf);
  // return fetch(api3, conf);

  // yield 1;
  // yield 2;
  // // console.log(`🚀 ~ function*gen ~ x`, x)
  // let y = yield x * 2;
  // // console.log(`🚀 ~ function*gen ~ y`, y)
  // let z = yield y * 2;
  // // console.log(`🚀 ~ function*gen ~ z`, z)
  // return z * 2;
}

// function* f_7(x)
// {
// yield 123;
// var z = yield x + 1;
// console.log('z =', z);
// var y = x * 2;
// return y;
// }

// var f7 = f_7(100);
// console.log(f7.next(21)); // 返回第一个yield后的表达式 123
// console.log(f7.next(22)); // 返回第二个yield后的表达式 x + 1 = 101，但z为左值，此时仍并未进行赋值操作
// console.log(f7.next(23)); // 返回 y，且由于 next 传入了参数 23，z 并没赋值为 x + 1 的值

export {
  gen,
}
