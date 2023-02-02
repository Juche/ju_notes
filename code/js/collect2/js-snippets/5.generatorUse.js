import { gen } from './5.generator.js';

async function parseRsp(fRsp) {
  let rsp = await fRsp;
  let data = null;
  if (rsp.statusText === 'OK') {
    data = await rsp.json();
  } else {
    console.warn(rsp.statusText);
    // throw new Error(rsp.statusText);
  }
  return data;
}

let apis = {
  api1: ['/getUser', { method: 'GET' }],
  api2: ['/getUser1', { method: 'GET' }],
  api3: ['/userInfo', { method: 'POST' }],
  api4: ['/userInfo1', { method: 'POST' }],
};

let _gen = gen(apis);
// console.log(`🚀 ~ _gen`, _gen)
// console.log(`🚀 ~ _gen.next()`, _gen.next())
let fRsp1 = _gen.next().value;
let fRsp2 = _gen.next().value;
let fRsp3 = _gen.next().value;
let fRsp4 = _gen.next().value;
let fData1 = await parseRsp(fRsp1);
let fData2 = await parseRsp(fRsp2);
let fData3 = await parseRsp(fRsp3);
let fData4 = await parseRsp(fRsp4);
console.log(`🚀 ~ fData1`, fData1);
console.log(`🚀 ~ fData2`, fData2);
console.log(`🚀 ~ fData3`, fData3);
console.log(`🚀 ~ fData4`, fData4);

// console.log(`🚀 ~ _gen`, _gen)
// console.log(`🚀 ~ _gen.next()`, _gen.next())
// console.log(`🚀 ~ _gen.next()`, _gen.next(3))
// console.log(`🚀 ~ _gen.next()`, _gen.next(4))
// console.log(`🚀 ~ _gen.next()`, _gen.next(4))
// console.log(`🚀 ~ _gen.next()`, _gen.next(4))
// console.log(`🚀 ~ _gen.next()`, _gen.next(1))
