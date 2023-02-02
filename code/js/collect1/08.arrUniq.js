// var arr = ["12", "32", 12, "89", "12", "12", "78", "12", "32", {a:1}, {b:2}, [1]];

var arr = [{a:1}, {b:2},{a:1}, {b:2},{a:1}, {b:2}, [1], [2],[1], [2],];

// 最简单数组去重法
function unique1(array) {
  var n = []; //一个新的临时数组
  for (var i = 0; i < array.length; i++) {
    //遍历当前数组
    if (n.indexOf(array[i]) == -1) n.push(array[i]);
  }
  return n;
}
// 速度最快， 占空间最多（空间换时间）
function unique2(array) {
  let obj = {},
    arr = [];
  for (let i = 0; i < array.length; i++) {
    let _item = array[i]
    let _type = typeof array[i]
    let _key = _type + _item
    if(!obj[_key] || obj[_key] !== _item) {
      obj[_key] = _item
      arr.push(_item)
    }
  }
  return arr;
}
// 数组下标判断法
// 把数组中所有第一个索引匹配到的元素加入到新数组,则该数组中的元素无重复的
function unique3(array) {
  var n = [array[0]]; //结果数组
  for (var i = 1; i < array.length; i++) {
    //从第二项开始遍历
    if (array.indexOf(array[i]) == i) n.push(array[i]);
  }
  return n;
}

let _unique1 = unique1(arr);
let _unique2 = unique2(arr);
let _unique3 = unique3(arr);

// es6方法数组去重
let _unique4 = [...new Set(arr)];
// es6方法数组去重，第二种方法
let _unique5 = Array.from(new Set(arr));

console.log(`🚀 ~ _unique1`, _unique1)
console.log(`🚀 ~ _unique2`, _unique2)
console.log(`🚀 ~ _unique3`, _unique3)
console.log(`🚀 ~ _unique4`, _unique4)
console.log(`🚀 ~ _unique5`, _unique5)
