let arr = [
  { name: "string 1", value: "this", other: "that" },
  { name: "string 2", value: "this", other: "that" },
];

// 查找数组元素：
let itemFind = arr.find((o) => o.name === "string 1");

console.log(`🚀 ~ itemFind`, itemFind)

// 替换数组元素：

let itemEdit = arr.find((o, i) => {
  if (o.name === "string 1") {
    arr[i] = { name: "new string", value: "this", other: "that" };
    return true; // stop searching
  }
});

console.log(`🚀 ~ arr`, arr)
