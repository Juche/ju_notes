const obj1 = {
  a: {
    b: 1,
  },
};
const obj2 = {
  a: {
    b: 2,
  },
};
const obj3 = {
  a: {
    b: 1,
  },
};
const obj4 = Object.create(obj1); // {}
console.log(`🚀 ~ obj4`, obj4.__proto__); // { a: { b: 1 } }
