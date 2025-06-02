/**
 * ## 自定义组件 ##
 * name: ringPie
 * desc: 环形饼图
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

[
  { name: "新柜面签约数", value: 310460 },
  { name: "ITM签约数", value: 177479 },
  { name: "微信签约数", value: 106246 },
  { name: "个人网上支付签约数", value: 53738 },
  { name: "个人网银签约数", value: 33456 }
]


// ========================================
// 自定义组件 => 数据篮子计算数据

let ctx = this;

var option = {
  backgroundColor: "#040d2d",
  color: ["#d8a613", "#8fc736", "#01b3cc", "#0177d4", "#394bd0"],
  //   tooltip: {
  //     trigger: "item",
  //     formatter: "{b} :<br/> {c} ({d}%)"
  //   },
  grid: [
    {
      left: "10%",
      top: "10%",
      right: "10%",
      bottom: "10%",
      containLabel: true
    }
  ],
  series: [
    {
      name: "环形比例分割图",
      type: "pie",
      radius: ["36%", "50%"], //设置饼图大小
      center: ["30%", "50%"], //设置饼图位置
      zlevel: 1,
      label: {
        normal: {
          show: false,
          position: "center",
          formatter: ["{value|{d}%}", "{name|{b}}"].join("\n"),
          rich: {
            value: {
              color: "#fff",
              fontSize: 24,
              fontWeight: "bold",
              lineHeight: 24
            },
            name: {
              fontSize: 16,
              color: "#accfff",
              lineHeight: 24
            }
          }
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: "16",
            fontWeight: "bold"
          }
        }
      },
      itemStyle: {
        normal: {
          borderWidth: 5,
          borderColor: "#040d2d"
        }
      },
      data: [
        { name: "新柜面签约数", value: 310460 },
        { name: "ITM签约数", value: 177479 },
        { name: "微信签约数", value: 106246 }
      ]
    }
  ],
  legend: {
    // 图例说明
    orient: "vertical",
    left: "60%",
    y: "center",
    textStyle: {
      color: "#accfff",
      fontSize: 14,
      lineHeight: 20
    },
    itemWidth: 14,
    itemHeight: 14
  }
}

option.series[0].data = ctx.showData;

return option
