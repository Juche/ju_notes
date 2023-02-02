function format(val) {
  // return val instanceof Object
  //         ? val : typeof val === 'string'
  //         ? val.toUpperCase() : typeof val === 'number'
  //         ? Math.ceil(val) : val;
  return typeof val === 'string'
          ? val.toUpperCase() : typeof val === 'number'
          ? Math.ceil(val) : typeof val === 'undefined'
          ? null : val;
}
function pxy1(tar) {
  return new Proxy(tar, {
    get(tar, prop) {
      return format(tar[prop]);
    },
    set(tar, prop, val) {
      return tar[prop] = format(val);
    }
  })
}

export {
  pxy1,
}
