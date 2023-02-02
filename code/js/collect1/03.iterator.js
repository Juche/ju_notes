function createIterator(items) {
  let i = 0;
  return {
    next: function () {
      let done = i >= items.length;
      let value = !done ? items[i] : undefined;
      i++;
      if (done) return { done };
      else
        return {
          value,
          done,
        };
    },
  };
}

let _iter = createIterator("abc");
console.log("_iter: ", _iter.next());
console.log("_iter: ", _iter.next());
console.log("_iter: ", _iter.next());
console.log("_iter: ", _iter.next());

// let range = {
//   from: 0,
//   to: 3,
// };
// // 运行for...of时吗，首先执行的就是Symbol.iterator
// range[Symbol.iterator] = function () {
//   return {
//     // 返回当前元素，和目标元素
//     current: this.from,
//     last: this.to, // 当last = infinity 时，迭代器将永远执行下去，我们可以使用break跳出循环
//     // 必须有next方法，迭代器才能继续下去
//     next() {
//       // done 为true 时迭代结束
//       if (this.current <= this.last)
//         return { done: false, value: this.current++ };
//       else return { done: true };
//     },
//   };
// };

// 迭代器的另一种写法，在对象声明时
let range = {
  from: 0,
  to: 3,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) return { done: false, value: this.current++ };
    else return { done: true };
  },
};

let _range = range[Symbol.iterator]();
console.log("_range: ", _range.next());
console.log("_range: ", _range.next());
console.log("_range: ", _range.next());
console.log("_range: ", _range.next());
console.log("_range: ", _range.next());
console.log("_range: ", _range.next());

// ===================================

// 使用迭代器
// define a function that returns an iterator
function rangeIter(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let count = 0;
  // create the actual iterator object
  const iterator = {
    // create the next() method that knows how to get the next value in the sequence
    next: function () {
      let result;
      if (nextIndex < end) {
        // Return the value and set done 'false' because the iteration is not completed
        result = { value: nextIndex, done: false };
        nextIndex += step;
        count++;
        return result;
      }
      // set done 'true' when the end has been reached
      return { value: count, done: true };
    },
  };
  // return an iterator object
  return iterator;
}
// Using the iterator
const it = rangeIter(1, 5);
let resultIt = it.next();
while (!resultIt.done) {
  // prints 1 2 3 4
  console.log('resultIt.value: ', resultIt.value);
  resultIt = it.next();
}

// 使用生成器
// Create a generator function that returns an iterator
function* rangeGen(start = 0, end = Infinity, step = 1) {
  let count = 0;
  for (let i = start; i < end; i += step) {
    count++;
    yield i;
  }
  return count;
}
// Create a generator object
const gen = rangeGen(1, 5);
// Use the generator exactly how you'd use an iterator
let resultGen = gen.next();
while (!resultGen.done) {
  // prints 1 2 3 4
  console.log('resultGen.value: ', resultGen.value);
  resultGen = gen.next();
}
