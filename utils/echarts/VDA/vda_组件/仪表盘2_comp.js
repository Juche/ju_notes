/**
 * ## 自定义组件 ##
 * name: dashboard_blue
 * desc: 仪表盘(蓝色)
 */

// ========================================
// 实例 => created => 模拟动态数据

// 展示数据更新
// showDataUpdate

var timer = setInterval(() => {

  ctx.showData[0].value -= 5;

  console.log('ctx.showData[0].value: ', ctx.showData[0].value)

  if(ctx.showData[0].value == 5) {
      clearInterval(timer)
  }

}, 2000)


// ========================================
// 数据篮子 && 实例 => 数据篮子数据

// 展示数据
// showData

[{ name: "开机率", value: 95, maxValue: 100 }]


// ========================================
// 自定义组件 => 数据篮子计算数据

let ctx = this;

var option = {
  backgroundColor: "#081537",
  series: [
    {
      // 外圈一,蓝
      name: "蓝色外圈",
      type: "gauge",
      radius: "150",
      startAngle: "225",
      endAngle: "-45.1",
      z: 50,
      // splitNumber: 0,
      axisLine: {
        lineStyle: {
          color: [[1, "#67C7FF"]],
          width: 3
        }
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      pointer: {
        show: false
      },
      detail: {
        show: false
      }
    },
    {
      // 外圈二,深蓝
      name: "深蓝外圈",
      type: "gauge",
      radius: "150",
      startAngle: "225",
      endAngle: "-45.1",
      // z: 11,
      z: 40,
      axisLine: {
        lineStyle: {
          color: [
            // [data.value / 100, "#3C8FF4"],
            [1, "#094380"]
          ],
          width: 8
          // borderWidth: 2
          // borderColor: 'red'
        }
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      pointer: {
        show: false
      },
      detail: {
        show: false
      }
    },
    {
      type: "gauge",
      radius: "150",
      min: 0, //最小刻度
      max: 100, //最大刻度
      splitNumber: 10, //刻度数量
      startAngle: "224.99",
      endAngle: "-45",
      z: 30,
      detail: {
        formatter: "xx率",
        color: "#accfff",
        fontSize: 22,
        offsetCenter: [0, "75%"]
      },
      axisLine: {
        show: true,
        lineStyle: {
          width: "70",
          color: [
            [
              0.87,
              new (ctx.$echarts).graphic.LinearGradient(
                0,
                0,
                1,
                0,
                [
                  {
                    offset: 0,
                    color: "#04215e"
                  },
                  {
                    offset: 1,
                    color: "#1d50ad"
                  }
                ]
              )
            ],
            [1, "#041145"]
          ]
        }
      },
      axisLabel: {
        //刻度标签
        show: true,
        color: "#fff",
        distance: -5,
        fontSize: 12
      },
      axisTick: {
        //分刻度
        show: true,
        splitNumber: 5,
        length: 15,
        lineStyle: {
          color: "#accfff",
          width: 1
        }
      },
      splitLine: {
        //分隔线样式
        show: false
        // length: 15,
        // lineStyle: {
        //   color: "#accfff"
        // }
      },
      itemStyle: {
        //刻度样式
        normal: {
          show: false,
          // series[i]-gauge.itemStyle.color
          color: "#fff"
        }
      },
      pointer: {
        show: true,
        length: "120",
        width: 10 //指针粗细
        // todo: 配颜色
      },
      data: [
        {
          value: 87
        }
      ]
    },
    {
      name: "外层圆",
      tooltip: {
        show: false
      },
      type: "pie",
      radius: ["0", "80"],
      center: ["50%", "50%"],
      hoverAnimation: false,
      itemStyle: {
        normal: {
          color: "#041142"
        },
        emphasis: {
          color: "#041142"
        }
      },
      data: [{ value: 0 }]
    },
    {
      name: "内层圆",
      z: 100,
      tooltip: {
        show: false
      },
      type: "pie",
      radius: ["0%", "56"],
      center: ["50%", "50%"],
      hoverAnimation: false,
      itemStyle: {
        normal: {
          color: "#164191"
        },
        emphasis: {
          color: "#164191"
        }
      },
      label: {
        normal: {
          show: true,
          position: "center",
          color: "#fff",
          fontSize: "22",
          formatter: "{c}%"
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      animation: false,
      data: [{ value: 87, name: "xx率" }]
    }
  ]
}

var rate = (ctx.showData[0].value / ctx.showData[0].maxValue).toFixed(2);

option.series[2].detail.formatter = ctx.showData[0].name;
option.series[2].axisLine.lineStyle.color[0][0] = rate;
option.series[2].data[0].value = ctx.showData[0].value;
option.series[4].data = ctx.showData;

return option
