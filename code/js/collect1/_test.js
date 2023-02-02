const { type } = require("os");

function create(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

function debounce(fn, timeout) {
  let timer = null;

  return function() {
    let ctx = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(function() {
      fn.apply(ctx, args);
    }, timeout)
  }
}

function throttle(fn, timeout) {
  let flagT = Date.now();

  return function() {
    let ctx = this;
    let args = arguments;
    let nowT = Date.now();

    if (nowT - flagT >= timeout) {
      flagT = Date.now();
      return fn.apply(ctx, args);
    }
  }
}

function deepCopy(obj) {
  // if(!obj || typeof obj !== 'object') return;
  let objClone = Array.isArray(obj) ? [] : {};
  if(typeof obj === 'object') {
    for (const key in obj) {
      if(obj[key] && typeof obj[key] === 'object') {
        objClone[key] = deepCopy(obj[key]);
      }else {
        objClone[key] = obj[key];
      }
    }
  }
}
