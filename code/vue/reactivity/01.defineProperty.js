let me = {
  name: 'Juching',
  age: 30,
};

function observe(obj) {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      let _value = obj[key];
      Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        // writable: true,
        get() {
          console.log(`get value: ${key} is ${_value}`);
          return _value;
        },
        set(newVal) {
          console.log(`get value: ${key} is ${newVal}`);
          return newVal;
        },
      });
    }
  }
}

observe(me);
me.name;
me.name = 'Juche';
