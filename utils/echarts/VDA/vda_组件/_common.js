/**
 * ## 自定义组件 ##
 * name: abc
 * desc: 啊啵呲
 */

// ========================================
// 实例 => created => 模拟动态数据

// 展示数据更新
// showDataUpdate

var timer = setInterval(() => {

  ctx.showData.pop()

  console.log('ctx.showData.length: ', ctx.showData.length)

  if(ctx.showData.length == 1) {
      clearInterval(timer)
  }

}, 2000)


// ========================================
// 数据篮子 && 实例 => 数据篮子数据

// 展示数据
// showData


// ========================================
// 自定义组件 => 数据篮子计算数据

let ctx = this;

var option = {}

// option.series[0].data = ctx.showData;

return option
