/**
 * @装饰器模式
 * 不影响代码原有功能的基础上添加新功能
 * 常用于对老旧代码做功能拓展
 */

let house = () => {
  console.log('毛坯房');
};

const _house = house;

house = () => {
  _house();
  console.log('精装修');
};

house();
