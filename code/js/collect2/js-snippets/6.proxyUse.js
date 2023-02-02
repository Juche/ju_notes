let { pxy1 } = await import('./6.proxy.js');
// import('./6.proxy.js').then(({ pxy1 }) => {});

let person = {
  name: 'Juching',
  age: 30,
  height: 166.6666,
  fav: undefined,
  wife: {
    name: 'Juche',
    age: 20,
    height: 158.8888,
    fav: NaN,
  },
};

let _person = pxy1(person);

_person.name = 'Ju';
console.log(`🚀 ~ import ~ _person.name`, _person.name);
console.log(`🚀 ~ import ~ _person.name`, person.name);
person.name = 'Juc';
console.log(`🚀 ~ import ~ _person.name`, _person.name);
console.log(`🚀 ~ import ~ _person.name`, person.name);
console.log(`🚀 ~ import ~ person`, person);
console.log(`🚀 ~ import ~ _person`, _person);

console.log(person === _person);
console.log(person.wife === _person.wife);
