// [JavaScript深拷贝看这篇就行了](https://blog.csdn.net/cc18868876837/article/details/114918262)
// 评价一个深拷贝是否完善，请检查以下问题是否都实现了：
//   - 基本类型数据是否能拷贝？
//   - 键和值都是基本类型的普通对象是否能拷贝？
//   - Symbol作为对象的key是否能拷贝？
//   - Date和RegExp对象类型是否能拷贝？
//   - Map和Set对象类型是否能拷贝？
//   - Function对象类型是否能拷贝？（函数我们一般不用深拷贝）
//   - 对象的原型是否能拷贝？
//   - 不可枚举属性是否能拷贝？
//   - 循环引用是否能拷贝？

// 可以简单粗暴的实现深拷贝，但是还存在问题
// 诸如 undefined，symbol, function, Map, Set, RegExp, ArrayBuffer 和其他内置类型在进行序列化时会丢失
function deepClone1(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function deepClone2(obj) {
  if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof obj !== 'object') return obj;
  // 是对象的话就要进行深拷贝
  let cloneObj = new obj.constructor();
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone2(obj[key]);
    }
  }
  return cloneObj;
}

function deepClone3(obj, hash = new WeakMap()) {
  if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  function isObject(obj) {
    return typeof obj === 'object' && obj != null;
  }
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (!isObject(obj)) return obj;
  // 是对象的话就要进行深拷贝
  if (hash.get(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  hash.set(obj, cloneObj);

  // symbol 拷贝
  let symKeys = Object.getOwnPropertySymbols(obj); // 查找
  if (symKeys.length) {
    // 查找成功
    symKeys.forEach((symKey) => {
      if (isObject(obj[symKey])) {
        cloneObj[symKey] = cloneDeep4(obj[symKey], hash);
      } else {
        cloneObj[symKey] = obj[symKey];
      }
    });
  }

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone2(obj[key], hash);
    }
  }
  return cloneObj;
}

function deepClone4(obj) {
  const map = new WeakMap();

  function isObject(obj) {
    return (typeof obj === 'object' && !!obj) || typeof obj === 'function';
  }

  function clone(data) {
    if (!isObject(data)) {
      return data;
    }
    if ([Date, RegExp].includes(data.constructor)) {
      return new data.constructor(data);
    }
    if (typeof data === 'function') {
      return new Function('return ' + data.toString())();
    }
    const exist = map.get(data);
    if (exist) {
      return exist;
    }
    if (data instanceof Map) {
      const result = new Map();
      map.set(data, result);
      data.forEach((val, key) => {
        if (isObject(val)) {
          result.set(key, clone(val));
        } else {
          result.set(key, val);
        }
      });
      return result;
    }
    if (data instanceof Set) {
      const result = new Set();
      map.set(data, result);
      data.forEach((val) => {
        if (isObject(val)) {
          result.add(clone(val));
        } else {
          result.add(val);
        }
      });
      return result;
    }
    const keys = Reflect.ownKeys(data);
    const allDesc = Object.getOwnPropertyDescriptors(data);
    const result = Object.create(Object.getPrototypeOf(data), allDesc);
    map.set(data, result);
    keys.forEach((key) => {
      const val = data[key];
      if (isObject(val)) {
        result[key] = clone(val);
      } else {
        result[key] = val;
      }
    });
    return result;
  }

  return clone(obj);
}

function deepClone5(obj) {
  function isObject(obj) {
    return (typeof obj === 'object' && !!obj) || typeof obj === 'function';
  }

  // 基本数据
  if (!isObject(obj)) return obj;

  function cloneSet(obj) {
    let _set = new Set();
    for (const item of obj) {
      if (!isObject(item)) _set.add(item);
      _set.add(deepClone5(item));
    }
    return _set;
  }
  function cloneMap(obj) {
    let _map = new Map();
    for (const [key, val] of obj) {
      if (!isObject(val)) _map.set(key, val);
      _map.set(key, deepClone5(val));
    }
    return _map;
  }

  // 特殊对象类型
  if (obj instanceof Function)
    return new Function(`return ${obj.toString()}`)();
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Set) return cloneSet(obj);
  if (obj instanceof Map) return cloneMap(obj);

  // 对对象和数组进行递归拷贝
  let cloneObj = new obj.constructor();
  // for (const key in obj) {
  //   if (obj.hasOwnProperty(key)) {
  //   // if (Object.hasOwnProperty.call(obj, key)) {
  //     cloneObj[key] = deepClone5(obj[key]);
  //   }
  // }

  for (const key of Object.keys(obj)) {
    cloneObj[key] = deepClone5(obj[key]);
  }

  return cloneObj;
}

function deepClone6(obj) {
  function isObject(obj) {
    return (typeof obj === 'object' && !!obj) || typeof obj === 'function';
  }

  // 基本数据
  if (!isObject(obj)) return obj;

  function cloneSet(obj) {
    const _set = new Set();
    for (const item of obj) {
      if (!isObject(item)) _set.add(item);
      _set.add(deepClone6(item));
    }
    return _set;
  }
  function cloneMap(obj) {
    const _map = new Map();
    for (const [key, val] of obj) {
      if (!isObject(val)) _map.set(key, val);
      _map.set(key, deepClone6(val));
    }
    return _map;
  }

  let _constructor = obj.constructor;
  let cloneObj = null;

  // // 特殊对象类型
  // if (obj instanceof Function)
  //   return new Function(`return ${obj.toString()}`)();
  // if (obj instanceof RegExp) return new RegExp(obj);
  // if (obj instanceof Set) return cloneSet(obj);
  // if (obj instanceof Map) return cloneMap(obj);

  switch (_constructor) {
    case Function:
      return new Function(`return ${obj.toString()}`)();
    case RegExp:
      return new RegExp(obj);
    case Set:
      return cloneSet(obj);
    case Map:
      return cloneMap(obj);

    // 对对象和数组进行递归拷贝
    default:
      cloneObj = new _constructor();

      // 获取键名,考虑了以 Symbol 以及不可枚举的属性作为 key
      const keys = Reflect.ownKeys(obj);
      // for (const key of Object.keys(obj)) {
      for (const key of keys) {
        cloneObj[key] = deepClone6(obj[key]);
      }
      break;
  }

  return cloneObj;
}

// 解决循环引用问题
function deepClone7(obj, cache = new WeakMap()) {
  function isObject(obj) {
    return (typeof obj === 'object' && !!obj) || typeof obj === 'function';
  }

  // 基本数据
  if (!isObject(obj)) return obj;

  if (cache.has(obj)) return cache.get(obj);

  function cloneSet(obj) {
    const _set = new Set();
    for (const item of obj) {
      if (!isObject(item)) _set.add(item);
      _set.add(deepClone7(item, cache));
    }
    return _set;
  }
  function cloneMap(obj) {
    const _map = new Map();
    for (const [key, val] of obj) {
      if (!isObject(val)) _map.set(key, val);
      _map.set(key, deepClone7(val, cache));
    }
    return _map;
  }

  let _constructor = obj.constructor;
  let cloneObj = null;

  // // 特殊对象类型
  // if (obj instanceof Function)
  //   return new Function(`return ${obj.toString()}`)();
  // if (obj instanceof RegExp) return new RegExp(obj);
  // if (obj instanceof Set) return cloneSet(obj);
  // if (obj instanceof Map) return cloneMap(obj);

  switch (_constructor) {
    case Function:
      return new Function(`return ${obj.toString()}`)();
    case RegExp:
      return new RegExp(obj);
    case Set:
      return cloneSet(obj);
    case Map:
      return cloneMap(obj);

    // 对对象和数组进行递归拷贝
    default:
      // 获得对象的所有属性以及对应的属性描述
      const allDesc = Object.getOwnPropertyDescriptors(obj);
      // Object.create创建一个新对象，继承传入原对象的原型链，得到对obj的浅拷贝
      cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
      // cloneObj = new _constructor();
      cache.set(obj, cloneObj);

      // 获取键名,考虑了以 Symbol 以及不可枚举的属性作为 key
      // Reflect.ownKeys(obj)相当于
      // [...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj)]
      const keys = Reflect.ownKeys(obj);
      // const keys = [__proto__,...Reflect.ownKeys(obj)];
      console.log(`🚀 ~ deepClone8 ~ keys`, keys);
      // for (const key of Object.keys(obj)) {
      for (const key of keys) {
        cloneObj[key] = deepClone8(obj[key], cache);
      }
      // cache.set(obj, cloneObj);
      break;
  }

  return cloneObj;
}

// 用数组重写
// TODO: 不可枚举属性的复制
// function deepClone8(obj, cache = new WeakMap()) {
function deepClone8(obj, cache = []) {
  function isObject(obj) {
    return (typeof obj === 'object' && !!obj) || typeof obj === 'function';
  }

  // 基本数据
  if (!isObject(obj)) return obj;

  // if (cache.has(obj)) return cache.get(obj);
  for (const item of cache) {
    if (item._obj === obj) return item._cloneObj;
  }

  function cloneSet(obj) {
    const _set = new Set();
    for (const item of obj) {
      if (!isObject(item)) _set.add(item);
      _set.add(deepClone8(item, cache));
    }
    return _set;
  }
  function cloneMap(obj) {
    const _map = new Map();
    for (const [key, val] of obj) {
      if (!isObject(val)) _map.set(key, val);
      _map.set(key, deepClone8(val, cache));
    }
    return _map;
  }

  let _constructor = obj.constructor;
  let cloneObj = null;

  // // 特殊对象类型
  // if (obj instanceof Function)
  //   return new Function(`return ${obj.toString()}`)();
  // if (obj instanceof RegExp) return new RegExp(obj);
  // if (obj instanceof Set) return cloneSet(obj);
  // if (obj instanceof Map) return cloneMap(obj);

  switch (_constructor) {
    case Function:
      return new Function(`return ${obj.toString()}`)();
    case RegExp:
      return new RegExp(obj);
    case Set:
      return cloneSet(obj);
    case Map:
      return cloneMap(obj);

    // 对对象和数组进行递归拷贝
    default:
      // 浅拷贝一个对象
      // Object.assign() 方法只能拷贝源对象的可枚举的自身属性，同时拷贝时无法拷贝属性的特性们，而且访问器属性会被转换成数据属性，也无法拷贝源对象的原型，该方法配合 Object.create() 方法可以实现上面说的这些。
      // Object.create(
      //   Object.getPrototypeOf(obj),
      //   Object.getOwnPropertyDescriptors(obj)
      // );

      // Object.create创建一个新对象，继承传入原对象的原型链，得到对obj的浅拷贝
      // Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）
      // Object.getOwnPropertyDescriptors获得对象的所有属性以及对应的属性描述
      cloneObj = Object.create(
        Object.getPrototypeOf(obj),
        Object.getOwnPropertyDescriptors(obj)
      );
      console.log(
        `🚀 ~ deepClone8 ~ Object.getPrototypeOf(obj)`,
        Object.getPrototypeOf(obj)
      );
      console.log(
        `🚀 ~ deepClone8 ~ Object.getOwnPropertyDescriptors(obj)`,
        Object.getOwnPropertyDescriptors(obj)
      );
      // cloneObj = new _constructor();
      // cache.set(obj, cloneObj);
      cache.push({
        _obj: obj, // 引用源对象
        _cloneObj: cloneObj, // 引用新创建的对象
      });

      // 获取键名,考虑了以 Symbol 以及不可枚举的属性作为 key
      // Reflect.ownKeys(obj)相当于
      // [...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj)]
      // 这里会将 innumerable 的 key 获取到,导致错误
      // Uncaught TypeError: Cannot assign to read only property 'innumerable' of object '#<Object>'
      // const keys = Reflect.ownKeys(obj);
      const keys = Object.keys(obj);
      for (const key of keys) {
        console.log(`🚀 ~ deepClone8 ~ key of`, key);
        cloneObj[key] = deepClone8(obj[key], cache);
      }

      // for (const key in obj) {
      //   // if (obj.hasOwnProperty(key)) {
      //   if (Object.hasOwnProperty.call(obj, key)) {
      //     console.log(`🚀 ~ deepClone8 ~ key in`, key);
      //     cloneObj[key] = deepClone8(obj[key], cache);
      //   }
      // }
      break;
  }

  return cloneObj;
}

/**
 *
 * @param {*} obj: 拷贝目标对象
 * @param {*} cache: 缓存已拷贝对象,用来解决对象的循环引用
 * @returns {*} cloneObj: 拷贝的输出对象
 * 深拷贝的目标问题:
 * 1. 对基本数据类型和引用数据类型进行划分
 * 2. 基本数据类型: undefined,null,Number,BigInt,Boolean,String,Symbol
 * 3. 引用类型: 除 null 之外的 Object(Array,常规Object,Date,RegExp,Map,Set)
 *   3.1 常规对象 Object,Array
 *   3.2 特定内置对象
 * 4. 一些特殊情况处理:
 *   4.1 Symbol 作为 key
 *   4.2 不可枚举属性
 *   4.3 对象原型
 *   4.3 循环引用
 */

// 使用 WeakMap 作为数据缓存的原因: WeakMap是弱引用,Map为强引用
// 弱引用在回收机制上比强引用好，在“适当”的情况将会被回收，减少内存资源浪费
// 但由于不是强引用，WeakMap不能进行遍历与size方法取得内部值数量

// WeakMap与Map主要有下图三个区别：
// 区别	Map	WeakMap
// “键”类型：	任何类型	Object对象
// 自身方法：	基本方法：set、get、has、delete；
// 遍历方法：keys、values、entries、forEach；
// 其他方法：size、clear。	基本方法：set、get、has、delete。
// 键引用类型：	强引用	弱引用

// TODO: 尝试通过添加判断条件减少递归次数来减少运算量

// 1. 减少递归: 对对象内部的基本数据和引用数据进行筛选,引用数据继续递归拷贝
// 2. obj instanceof [VS] typeof 性能对比
// 3. for in [VS] for of 性能对比

let invokeTimes = 0;
function deepClone(obj, cache = new WeakMap()) {
  invokeTimes++;
  // console.log(`🚀  ~ invokeTimes`, invokeTimes)
  function isObject(obj) {
    // return (typeof obj === 'object' && !!obj) || typeof obj === 'function';
    // return (obj && typeof obj === 'object') || typeof obj === 'function';
    return obj instanceof Object;
  }
  // 1. 对基本数据类型和引用数据类型进行划分
  let _isObj = isObject(obj);
  // console.log(`🚀 ~ deepClone ~ _isObj`, _isObj);
  // 2. 基本数据类型: undefined,null,Number,BigInt,Boolean,String,Symbol
  if (!_isObj) return obj;
  // 4.3 循环引用
  if (cache.has(obj)) return cache.get(obj);

  // 3. 引用类型: 除 null 之外的 Object(Array,常规Object,Date,RegExp,Map,Set)

  function cloneMap(obj) {
    const _map = new Map();
    for (const [key, val] of obj) {
      // 通过类型判断减少递归次数,优化性能
      // _map.set(key, deepClone(val, cache));
      isObject(val) ? _map.set(key, val) : _map.set(key, deepClone(val, cache));
    }
    return _map;
  }
  function cloneSet(obj) {
    const _set = new Set();
    for (const val of obj) {
      // 通过类型判断减少递归次数,优化性能
      // _set.add(deepClone(val, cache));
      isObject(val) ? _set.add(val) : _set.add(deepClone(val, cache));
    }
    return _set;
  }

  let Constructor = obj.constructor;
  let cloneObj = null;
  switch (Constructor) {
    // 3.2 特定内置对象
    case Date:
      return obj;
    case Function:
      // return obj;
      // return eval(`(() => ${obj.toString()})()`);
      // 很多函数库都是用这个方法
      return new Function(`return ${obj.toString()}`)();
    case RegExp:
      return new RegExp(obj);
    case Map:
      return cloneMap(obj);
    case Set:
      return cloneSet(obj);
    // 3.1 常规对象 Object,Array
    default:
      // 4. 一些特殊情况处理:
      //   4.1 Symbol 作为 key
      //   4.2 不可枚举属性
      //   4.3 对象原型
      // ! 对象处理思路:
      // * 一: 创建对象
      // ? 1. 判断具体类型并创建对应的空对象
      // ! 拷贝的数据由下面获取到的 key 决定,部分(不可枚举/Symbol为key/prototype)属性可能不会被拷贝
      // cloneObj = Array.isArray(obj) ? [] : {};
      // cloneObj = new obj.constructor();
      // ? 2. 使用展开运算对数据进行初步拷贝,内部的引用通过递归调用逐层拷贝
      // ! 不可枚举属性 & prototype不会被拷贝
      // cloneObj = Array.isArray(obj) ? [...obj] : {...obj}

      // * 二: 获取对象的 key 用于循环递归
      // 使用 `Object.keys(obj)` 获取 keys,(不可枚举/Symbol为key/prototype)属性无法获取
      // let keys = Object.keys(obj);
      // 使用 `Reflect.ownKeys(obj)` 获取 keys,考虑了 Symbol 以及不可枚举的属性
      // 相当于
      // [...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj)]
      // let keys = Reflect.ownKeys(obj);

      // 注意: 这里不能搭配 `Reflect.ownKeys(obj)` 获取 keys
      // 直接读取 innumerable 导致错误
      // Uncaught TypeError: Cannot assign to read only property 'innumerable' of object '#<Object>'
      // ! 使用 Object.create 解决 不可枚举/Symbol为key/prototype 属性的拷贝
      cloneObj = Object.create(
        Object.getPrototypeOf(obj),
        Object.getOwnPropertyDescriptors(obj)
      );
      cache.set(obj, cloneObj);
      let keys = Object.keys(obj);

      // for (const key in obj) {
      //   if (Object.hasOwnProperty.call(obj, key)) {
      //     cloneObj[key] = deepClone(obj[key], cache);
      //   }
      // }
      for (const key of keys) {
        // 通过类型判断减少递归次数,优化性能
        // 加一层类型判断,只让对象内的引用数据去递归拷贝
        // cloneObj[key] = deepClone(obj[key], cache);
        if (isObject(obj[key])) cloneObj[key] = deepClone(obj[key], cache);
      }
      break;
  }
  return cloneObj;
}

function getInvokeTime() {
  console.log(`🚀 ~ invokeTimes`, invokeTimes);
  return invokeTimes;
}

// function deepClone(obj, cache = new WeakMap()) {
//   function isObject(obj) {
//     // return (typeof obj === 'object' && !!obj) || typeof obj === 'function';
//     return (obj && typeof obj === 'object') || typeof obj === 'function';
//   }
//   // 1. 对基本数据类型和引用数据类型进行划分
//   let _isObj = isObject(obj);
//   // console.log(`🚀 ~ deepClone ~ _isObj`, _isObj);
//   // 2. 基本数据类型: undefined,null,Number,BigInt,Boolean,String,Symbol
//   if (!_isObj) return obj;
//   // 4.3 循环引用
//   if (cache.has(obj)) return cache.get(obj);

//   // 3. 引用类型: 除 null 之外的 Object(Array,常规Object,Date,RegExp,Map,Set)

//   function cloneMap(obj) {
//     const _map = new Map();
//     for (const [key, val] of obj) {
//       isObject(val) ? _map.set(key, val) : _map.set(key, deepClone(val, cache));
//     }
//     return _map;
//   }
//   function cloneSet(obj) {
//     const _set = new Set();
//     for (const val of obj) {
//       isObject(val) ? _set.add(val) : _set.add(deepClone(val, cache));
//     }
//     return _set;
//   }

//   let Constructor = obj.constructor;
//   let cloneObj = null;
//   switch (Constructor) {
//     // 3.2 特定内置对象
//     case Date:
//       return obj;
//     case Function:
//       // return obj;
//       // return eval(`(() => ${obj.toString()})()`);
//       // 很多函数库都是用这个方法
//       return new Function(`return ${obj.toString()}`)();
//     case RegExp:
//       return new RegExp(obj);
//     case Map:
//       return cloneMap(obj);
//     case Set:
//       return cloneSet(obj);
//     // 3.1 常规对象 Object,Array
//     default:

//       // 4. 一些特殊情况处理:
//       //   4.1 Symbol 作为 key
//       //   4.2 不可枚举属性
//       //   4.3 对象原型
//       // ! 对象处理思路:
//       // * 一: 创建对象
//       // ? 1. 判断具体类型并创建对应的空对象
//       // ! 拷贝的数据由下面获取到的 key 决定,部分(不可枚举/Symbol为key/prototype)属性可能不会被拷贝
//       // cloneObj = Array.isArray(obj) ? [] : {};
//       // cloneObj = new obj.constructor();
//       // ? 2. 使用展开运算对数据进行初步拷贝,内部的引用通过递归调用逐层拷贝
//       // ! 不可枚举属性 & prototype不会被拷贝
//       // cloneObj = Array.isArray(obj) ? [...obj] : {...obj}

//       // * 二: 获取对象的 key 用于循环递归
//       // 使用 `Object.keys(obj)` 获取 keys,(不可枚举/Symbol为key/prototype)属性无法获取
//       // let keys = Object.keys(obj);
//       // 使用 `Reflect.ownKeys(obj)` 获取 keys,考虑了 Symbol 以及不可枚举的属性
//       // 相当于
//       // [...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj)]
//       // let keys = Reflect.ownKeys(obj);

//       // 注意: 这里不能搭配 `Reflect.ownKeys(obj)` 获取 keys
//       // 直接读取 innumerable 导致错误
//       // Uncaught TypeError: Cannot assign to read only property 'innumerable' of object '#<Object>'
//       // ! 使用 Object.create 解决 不可枚举/Symbol为key/prototype 属性的拷贝
//       cloneObj = Object.create(
//         Object.getPrototypeOf(obj),
//         Object.getOwnPropertyDescriptors(obj)
//       );
//       // console.log(
//       //   `🚀 ~ deepClone ~ Object.getPrototypeOf(obj)`,
//       //   Object.getPrototypeOf(obj)
//       // );
//       // console.log(
//       //   `🚀 ~ deepClone ~ Object.getOwnPropertyDescriptors(obj)`,
//       //   Object.getOwnPropertyDescriptors(obj)
//       // );
//       // console.log(`🚀 ~ deepClone ~ cloneObj`, cloneObj)
//       cache.set(obj, cloneObj);
//       let keys = Object.keys(obj);

//       // for (const key in obj) {
//       //   if (Object.hasOwnProperty.call(obj, key)) {
//       //     cloneObj[key] = deepClone(obj[key]);
//       //   }
//       // }
//       for (const key of keys) {
//         cloneObj[key] = deepClone(obj[key], cache);
//       }
//       break;
//   }
//   return cloneObj;
// }

// export default deepClone;

export {
  getInvokeTime,
  deepClone,
  deepClone1,
  deepClone2,
  deepClone3,
  deepClone4,
  deepClone5,
  deepClone6,
  deepClone7,
  deepClone8,
};
